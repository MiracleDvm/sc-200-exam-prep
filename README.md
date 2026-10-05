# SC-200 Exam Prep

Simulateur d'examen local pour le Microsoft SC-200, avec mode "Examen" chronométré (score /1000, seuil 700) et mode "Entraînement libre" (correction immédiate, questions marquables).

## Utiliser l'application

Aucune installation requise : ouvrir `app/index.html` directement dans un navigateur (double-clic). Les 251 questions sont déjà intégrées dans `app/data/questions.js`, chacune avec une réponse vérifiée, une explication et un lien Microsoft Learn (voir section suivante). L'historique des scores et les questions marquées sont sauvegardés dans le `localStorage` du navigateur (propre à cette machine/ce profil).

## Régénérer la base de questions

La base combine plusieurs sources (stockées dans `scraper/browser_capture/` comme étapes intermédiaires) :

- **ExamTopics** (30 questions, via `scraper/scrape.js`) — nécessite un compte ExamTopics (gratuit) :
  ```
  cd scraper
  npm install
  EXAMTOPICS_EMAIL=... EXAMTOPICS_PASSWORD=... node scrape.js
  ```
  Ne récupère que les questions accessibles sans l'offre payante PRO (~30/480). Les questions 11-20 ont été capturées manuellement via navigateur (`browser_capture/page02.*`) à cause d'un verrou "checkpoint" qui bloque le scraping direct au-delà de la première page.

- **exam-dumps.net** (~72 questions) :
  ```
  node scrape_examdumps.js
  ```

- **securitypracticetest.com** (160 questions originales, non issues de l'examen réel) :
  ```
  node scrape_spt.js
  ```

- **Fusion finale** (dédoublonnage + renumérotation → `app/data/questions.js`) :
  ```
  node merge_all.js
  ```

Chaque script est indépendant et peut être relancé seul ; `merge_all.js` relit les fichiers déjà présents dans `browser_capture/` donc il n'est pas nécessaire de tout re-scraper à chaque fois.

## Vérification des réponses (recherche + explication + lien Microsoft Learn)

Les réponses issues des sites de dumps sont parfois fausses ou mal expliquées. Chaque question a donc été revérifiée individuellement contre la documentation officielle Microsoft Learn :

```
node scraper/split_research_batches.js   # découpe questions.js en lots de 18 dans scraper/research/batch_NN_input.json
# puis, pour chaque lot : un agent de recherche vérifie la réponse, rédige une explication
# et trouve un lien learn.microsoft.com réel, écrit dans batch_NN_output.json
node scraper/merge_research.js           # fusionne les résultats vérifiés dans app/data/questions.js
```

Chaque question porte désormais `correctLetters` (corrigé si besoin), `explanation` (3-5 phrases) et `referenceUrl` (lien Microsoft Learn, ou `null` si rien de fiable trouvé — jamais un lien inventé). 3 réponses ont été corrigées sur les 252 revérifiées ; 1 question a été retirée faute de choix exploitables (bug de parsing résiduel).

## Questions drag-drop / hotspot interactives

Les 30 questions "glisser-déposer" et "zone active" d'ExamTopics/exam-dumps.net (répondre à une requête KQL à trous, ordonner une liste d'actions) étaient à l'origine de simples images à regarder, avec auto-évaluation seulement en fin d'examen. Elles ont été transformées en vraies questions jouables :

```
node scraper/split_interactive_batches.js   # découpe les 30 questions visuelles en lots dans scraper/interactive/batch_NN_input.json
# puis, pour chaque lot : un agent télécharge les images question+réponse, les regarde (vision)
# et transcrit la structure exacte (menus déroulants ou liste à ordonner) dans batch_NN_output.json
node scraper/merge_interactive.js           # fusionne les données interactives vérifiées dans app/data/questions.js
```

Chaque question porte un champ `interactive` : `{"kind": "select-blanks", "segments": [...]}` pour les menus déroulants intégrés dans un texte/requête, ou `{"kind": "order-items", "pool": [...], "correctOrder": [...]}` pour les listes à ordonner. L'app affiche alors de vrais `<select>` inline ou une interface "cliquer pour ajouter dans l'ordre", avec correction automatique (plus besoin d'auto-évaluation). Les 30/30 ont été transcrites avec succès et validées (schéma cohérent, pas de doublon impossible dans les listes à ordonner).

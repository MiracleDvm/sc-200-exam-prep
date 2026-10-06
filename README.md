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

## Classement par domaine d'examen

Le champ `topic` de chaque question correspond désormais à l'un des 3 domaines officiels de l'examen SC-200 (étude guide learn.microsoft.com) plutôt qu'au texte de catégorie brut du site d'origine :

- Manage a security operations environment (40-45 % de l'examen)
- Respond to security incidents (35-40 %)
- Perform threat hunting (20-25 %)

160 questions portaient déjà ce libellé exact à la source ; les 91 autres ont été classées à partir de l'énoncé et de l'explication vérifiée :

```
node scraper/merge_domains.js   # relit scraper/classify/batch_NN_output.json et met à jour topic dans app/data/questions.js
```

Le champ `source` (indiquant le site d'origine de chaque question) a été retiré des données — il n'est pas utile au fonctionnement de l'app.

## Études de cas structurées

Les questions precédées d'un long contexte ("Case study: ... Overview ... Existing Environment ...") sont désormais affichées avec une vraie structure (titres de section, listes à puces, bloc repliable) au lieu d'un unique bloc de texte brut. Les tableaux et schémas intégrés au contexte (ressources Azure, requêtes KQL, etc.) sont des images sur le site source ; elles sont maintenant correctement capturées et insérées au bon endroit dans le texte via un marqueur `[EXHIBIT:url]`, plutôt que d'être silencieusement perdues.

`scrape_examdumps.js` avait aussi un bug de déduplication qui ne gardait qu'une seule question par étude de cas (toutes les questions d'un même scénario partagent le même texte d'introduction sur les 120 premiers caractères, utilisés à tort comme clé de dédoublonnage) : 25 questions liées à des études de cas (Fabrikam, Litware, Contoso, Adatum) avaient été perdues silencieusement et ont été récupérées.

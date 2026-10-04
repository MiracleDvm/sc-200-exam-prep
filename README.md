# SC-200 Exam Prep

Simulateur d'examen local pour le Microsoft SC-200, avec mode "Examen" chronométré (score /1000, seuil 700) et mode "Entraînement libre" (correction immédiate, questions marquables).

## Utiliser l'application

Aucune installation requise : ouvrir `app/index.html` directement dans un navigateur (double-clic). Les 252 questions sont déjà intégrées dans `app/data/questions.js`. L'historique des scores et les questions marquées sont sauvegardés dans le `localStorage` du navigateur (propre à cette machine/ce profil).

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

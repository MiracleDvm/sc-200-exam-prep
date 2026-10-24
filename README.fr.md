# SC-200 Exam Prep

**Un outil bilingue de préparation à l'examen Microsoft SC-200 Security Operations Analyst, utilisable dans un navigateur.**

Lire ce guide en [anglais](README.md).

SC-200 Exam Prep vous aide à réviser les concepts liés aux opérations de sécurité, à vous entraîner avec des questions de type examen et à repérer les domaines à retravailler. L'application fonctionne localement dans votre navigateur : aucun compte, serveur, processus de compilation ou installation de paquet n'est nécessaire.

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Démarrage](#démarrage)
- [Modes d'entraînement](#modes-dentraînement)
- [Langues et contenu des questions](#langues-et-contenu-des-questions)
- [Confidentialité et prérequis](#confidentialité-et-prérequis)
- [À propos de moi](#à-propos-de-moi)

## Fonctionnalités

- **253 questions** couvrant les trois domaines de l'examen SC-200.
- **Mode examen** avec un nombre de questions et une durée configurables. Les valeurs par défaut sont alignées sur l'examen réel : 40 à 60 questions, 120 minutes et un seuil de réussite de 700/1 000.
- **Mode entraînement libre** avec correction immédiate, filtres par domaine et options de tri.
- **Marquage des questions** pour retrouver facilement les questions à revoir.
- **Correction après l'examen**, avec score, bonnes réponses et filtres par domaine ou pour afficher en priorité les réponses incorrectes.
- **Études de cas et questions interactives**, notamment des contextes d'étude de cas structurés et des questions auxquelles on peut répondre directement dans l'application.
- **Explications et références Microsoft Learn** pour comprendre les réponses et poursuivre les révisions.
- **Contenu des questions en anglais et en français** ; la langue choisie est mémorisée par le navigateur.

L'interface de l'application est actuellement en français ; le sélecteur de langue modifie le contenu des questions.

## Démarrage

1. Téléchargez ou clonez ce dépôt.
2. Ouvrez `app/index.html` dans un navigateur récent.
3. Choisissez un mode d'entraînement depuis l'écran d'accueil.

Aucun outil en ligne de commande ni aucune dépendance ne sont nécessaires pour utiliser l'application.

## Modes d'entraînement

### Mode examen

Choisissez le nombre de questions et la durée, puis passez une session chronométrée. À la fin, l'application calcule un score sur 1 000, avec un seuil de réussite fixé à 700, et affiche un écran de correction. La configuration par défaut vise à refléter l'examen SC-200 réel ; vous pouvez modifier le nombre de questions et la durée de vos sessions d'entraînement.

### Entraînement libre

Répondez aux questions à votre rythme. Vous pouvez filtrer par domaine de l'examen, modifier l'ordre des questions, afficher les réponses et marquer les questions à revoir ultérieurement.

## Langues et contenu des questions

Le sélecteur situé en haut à droite permet de choisir le texte des questions en français ou en anglais. Il adapte également les choix de réponse disponibles et mémorise votre sélection dans le navigateur. Les commandes et la navigation de l'application sont actuellement en français.

La banque de questions comprend des explications en français et en anglais, ainsi que des liens vers Microsoft Learn lorsqu'une référence est disponible. Certaines illustrations d'études de cas sont hébergées sur des sites externes ; une connexion Internet peut donc être nécessaire pour les afficher.

## Confidentialité et prérequis

L'application ne possède pas de serveur. L'historique des examens, les questions marquées et la langue sélectionnée sont enregistrés dans le `localStorage` du navigateur, sur l'appareil et dans le profil utilisés. Aucun compte n'est nécessaire. Les illustrations d'études de cas hébergées à l'extérieur sont chargées depuis leurs sites d'hébergement.

Tout navigateur récent sur ordinateur ou mobile avec JavaScript activé devrait convenir.

## À propos de moi

Je suis Miracle Dossou, analyste en cybersécurité basé à Cotonou, au Bénin. Je suis titulaire du certificat Google SOC Analyst, de la certification ISO/IEC 27001 Security Associate et de la certification Microsoft SC-200 (Security Operations Analyst Associate), et j'ai également terminé le parcours KC7 Security Analyst I. Mon expérience pratique couvre la surveillance SOC et la réponse aux incidents (Wazuh, Splunk), l'évaluation des vulnérabilités et les tests d'intrusion (OWASP ZAP, tests manuels SQLi/XSS/CSRF), ainsi que le développement web full-stack (Python, React). Je développe également des modèles d'apprentissage automatique appliqué, notamment un outil de prédiction de la maladie rénale chronique qui a remporté le premier prix à l'AMA Hackathon, et je maintiens [IR Firstline](https://github.com/MiracleDvm/ir-firstline), une collection open source bilingue (FR/EN) de guides opérationnels de réponse aux incidents destinée aux analystes SOC travaillant sans outils commerciaux EDR/SIEM.

Retrouvez-moi sur [LinkedIn](https://www.linkedin.com/in/miracle-dossou) ou consultez mes certifications vérifiées sur [Credly](https://www.credly.com/users/miracle-dossou).

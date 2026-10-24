# SC-200 Exam Prep

**A bilingual, browser-based study tool for the Microsoft SC-200 Security Operations Analyst exam.**

Read this guide in [French](README.fr.md).

SC-200 Exam Prep helps you review security operations concepts, practise exam-style questions, and identify topics that need more work. It runs locally in your browser: there is no account, server, build step, or package installation required.

## Contents

- [Features](#features)
- [Getting started](#getting-started)
- [Study modes](#study-modes)
- [Languages and question content](#languages-and-question-content)
- [Privacy and requirements](#privacy-and-requirements)
- [About me](#about-me)

## Features

- **253 questions** covering the three SC-200 exam domains.
- **Exam mode** with a configurable question count and time limit. The defaults are aligned with the real exam: 40–60 questions, 120 minutes, and a passing threshold of 700/1,000.
- **Free practice mode** with immediate answer feedback, domain filters, and ordering options.
- **Question flags** so you can mark items to revisit.
- **Review after an exam**, including your score, correct answers, and filters for reviewing by domain or prioritizing incorrect answers.
- **Case studies and interactive items**, including structured case-study context and questions that can be answered directly in the app.
- **Explanations and Microsoft Learn references** to help you understand an answer and continue studying.
- **English and French question content**, with your language choice remembered by the browser.

The application interface is currently in French; the language switch changes the question content.

## Getting started

1. Download or clone this repository.
2. Open `app/index.html` in a modern browser.
3. Choose a study mode from the home screen.

No command-line tools or dependencies are needed to use the app.

## Study modes

### Exam mode

Choose how many questions to answer and how much time to allow, then complete the timed session. At the end, the app calculates a score out of 1,000, using 700 as the passing threshold, and provides a review screen. The default configuration is intended to reflect the real SC-200 exam; you can adjust the question count and duration for your practice session.

### Free practice

Work through questions at your own pace. You can filter by exam domain, change the order, reveal answers, and mark questions for later review.

## Languages and question content

The language switch in the top-right corner selects French or English question text. It also changes the available question choices and is saved in your browser. The app's controls and navigation are currently in French.

The question bank contains explanations in French and English, alongside links to Microsoft Learn where available. Some case-study illustrations are hosted on external websites, so an internet connection may be needed to display those images.

## Privacy and requirements

The app has no backend. Exam history, flagged questions, and the selected question language are stored in the browser's `localStorage` on the device and browser profile where you use the app. The app does not require an account. Externally hosted case-study images are loaded from their hosting websites.

Any recent desktop or mobile browser with JavaScript enabled should work.

## About me

I'm Miracle Dossou, a cybersecurity analyst based in Cotonou, Benin. I hold Google's SOC Analyst certificate, the ISO/IEC 27001 Security Associate certification, and Microsoft's SC-200 (Security Operations Analyst Associate), and I obviously completed the KC7 Security Analyst I pathway. My hands-on work spans SOC monitoring and incident response (Wazuh, Splunk), vulnerability assessment and penetration testing (OWASP ZAP, manual SQLi/XSS/CSRF testing), and full-stack web development (Python, React). I also build applied machine learning models, including a first-prize-winning chronic kidney disease prediction tool at the AMA Hackathon, and maintain [IR Firstline](https://github.com/MiracleDvm/ir-firstline), an open-source, bilingual (FR/EN) collection of incident-response runbooks for SOC analysts working without commercial EDR/SIEM tooling.

Find me on [LinkedIn](https://www.linkedin.com/in/miracle-dossou) or check my verified certifications on [Credly](https://www.credly.com/users/miracle-dossou).

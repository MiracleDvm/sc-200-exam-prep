// Auto-generated — questions merged with researched/verified answers, explanations and Microsoft Learn references. Do not edit by hand.
const QUESTIONS = [
  {
    "id": "813328",
    "number": 1,
    "topic": 1,
    "type": "drag-drop",
    "text": "You are investigating an incident by using Microsoft 365 Defender.\n\nYou need to create an advanced hunting query to count failed sign-in authentications on three devices named CFOLaptop, CEOLaptop, and COOLaptop.\n\nHow should you complete the query? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nSelect and Place:",
    "images": [
      "https://www.examtopics.com/assets/media/exam-media/04261/0001100001.png"
    ],
    "choices": [],
    "correctLetters": [],
    "answerImage": "https://www.examtopics.com/assets/media/exam-media/04261/0001200001.png",
    "source": "examtopics.com",
    "explanation": "Cette question est de type drag-drop (schéma visuel non analysable automatiquement), donc la réponse actuelle est conservée telle quelle. Sur le fond, ce type de requête repose sur la table DeviceLogonEvents du schéma Advanced Hunting de Microsoft Defender XDR : il faut filtrer sur DeviceName in (\"CFOLaptop\", \"CEOLaptop\", \"COOLaptop\"), ActionType == \"LogonFailed\", puis utiliser summarize count() by DeviceName pour compter les échecs d'authentification par appareil. Le point testé est la bonne utilisation des colonnes DeviceName et ActionType ainsi que la syntaxe KQL summarize/count.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicelogonevents-table"
  },
  {
    "id": "813329",
    "number": 2,
    "topic": 1,
    "type": "single-choice",
    "text": "You need to receive a security alert when a user attempts to sign in from a location that was never used by the other users in your organization to sign in.\n\nWhich anomaly detection policy should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Impossible travel"
      },
      {
        "letter": "B",
        "text": "Activity from anonymous IP addresses"
      },
      {
        "letter": "C",
        "text": "Activity from infrequent country"
      },
      {
        "letter": "D",
        "text": "Malware detection"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "La politique \"Activity from infrequent country\" (anciennement new/infrequent location) s'appuie sur le moteur UEBA de Defender for Cloud Apps, qui apprend les emplacements déjà utilisés par l'ensemble des utilisateurs de l'organisation et déclenche une alerte lorsqu'une connexion provient d'un pays jamais ou rarement visité par quiconque dans le tenant. \"Impossible travel\" détecte au contraire deux connexions du même utilisateur depuis des lieux géographiquement incompatibles dans un délai trop court, ce qui ne correspond pas à l'énoncé. \"Activity from anonymous IP addresses\" cible les IP de proxys/Tor, et \"Malware detection\" ne concerne pas les emplacements de connexion. La bonne réponse est donc C.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/anomaly-detection-policy"
  },
  {
    "id": "813330",
    "number": 3,
    "topic": 1,
    "type": "single-choice",
    "text": "You have a Microsoft 365 subscription that uses Microsoft Defender for Office 365.\n\nYou have Microsoft SharePoint Online sites that contain sensitive documents. The documents contain customer account numbers that each consists of 32\n\nalphanumeric characters.\n\nYou need to create a data loss prevention (DLP) policy to protect the sensitive documents.\n\nWhat should you use to detect which documents are sensitive?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "SharePoint search"
      },
      {
        "letter": "B",
        "text": "a hunting query in Microsoft 365 Defender"
      },
      {
        "letter": "C",
        "text": "Azure Information Protection"
      },
      {
        "letter": "D",
        "text": "RegEx pattern matching"
      }
    ],
    "correctLetters": [
      "D"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Pour qu'une règle DLP de Microsoft Purview détecte un identifiant structuré comme un numéro de compte de 32 caractères alphanumériques, il faut créer un type d'information sensible (SIT) personnalisé basé sur une expression régulière (RegEx), par exemple [A-Za-z0-9]{32}. La recherche SharePoint ne fait pas de classification de sensibilité, Azure Information Protection sert à étiqueter/chiffrer des documents déjà identifiés comme sensibles (pas à les détecter par motif), et une requête de chasse dans Microsoft 365 Defender n'est pas liée au moteur DLP. La bonne réponse est donc D.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/sit-create-a-custom-sensitive-information-type"
  },
  {
    "id": "813332",
    "number": 4,
    "topic": 1,
    "type": "multi-select",
    "text": "Your company uses Microsoft Defender for Endpoint.\n\nThe company has Microsoft Word documents that contain macros. The documents are used frequently on the devices of the company's accounting team.\n\nYou need to hide false positive in the Alerts queue, while maintaining the existing security posture.\n\nWhich three actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Resolve the alert automatically."
      },
      {
        "letter": "B",
        "text": "Hide the alert."
      },
      {
        "letter": "C",
        "text": "Create a suppression rule scoped to any device."
      },
      {
        "letter": "D",
        "text": "Create a suppression rule scoped to a device group."
      },
      {
        "letter": "E",
        "text": "Generate the alert."
      }
    ],
    "correctLetters": [
      "B",
      "D",
      "E"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Pour qu'une règle de suppression puisse être créée dans Microsoft Defender for Endpoint, l'alerte doit d'abord être générée (E), puisqu'une règle de suppression se crée toujours à partir d'une alerte existante dans la file d'alertes. On choisit ensuite l'action \"Hide alert\" (B) plutôt que \"Resolve\" pour qu'elle soit totalement masquée du portail et des API, et on scope la règle à un groupe d'appareils (D) — celui de l'équipe comptabilité — plutôt qu'à \"any device\" (C), afin de ne pas supprimer ce signal légitime sur le reste du parc et ainsi préserver la posture de sécurité globale. B, D et E sont donc les trois actions correctes.",
    "referenceUrl": "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/manage-alerts"
  },
  {
    "id": "813333",
    "number": 5,
    "topic": 1,
    "type": "drag-drop",
    "text": "You open the Cloud App Security portal as shown in the following exhibit.\n\n\n\nYour environment does NOT have Microsoft Defender for Endpoint enabled.\n\nYou need to remediate the risk for the Launchpad app.\n\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the\n\ncorrect order.\n\nSelect and Place:",
    "images": [
      "https://www.examtopics.com/assets/media/exam-media/04261/0001500001.jpg",
      "https://www.examtopics.com/assets/media/exam-media/04261/0001600001.png"
    ],
    "choices": [],
    "correctLetters": [],
    "answerImage": "https://www.examtopics.com/assets/media/exam-media/04261/0001700001.png",
    "source": "examtopics.com",
    "explanation": "Question drag-drop (réponse visuelle non vérifiable) ; la réponse actuelle (vide) est conservée telle quelle. Le concept testé est la gouvernance des applications découvertes dans Microsoft Defender for Cloud Apps/Cloud Discovery sans Defender for Endpoint : on évalue le score de risque de l'application dans le tableau de bord Cloud Discovery, on la marque comme \"Unsanctioned\", puis on génère un script de blocage (\"Generate block script\") à importer manuellement dans l'appliance de sécurité (proxy/pare-feu) existante, puisque sans Defender for Endpoint le blocage automatique par groupe d'appareils n'est pas disponible.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/governance-discovery"
  },
  {
    "id": "813334",
    "number": 6,
    "topic": 1,
    "type": "hotspot",
    "text": "You have a Microsoft 365 E5 subscription.\n\nYou plan to perform cross-domain investigations by using Microsoft 365 Defender.\n\nYou need to create an advanced hunting query to identify devices affected by a malicious email attachment.\n\nHow should you complete the query? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "images": [
      "https://www.examtopics.com/assets/media/exam-media/04261/0001800001.png"
    ],
    "choices": [],
    "correctLetters": [],
    "answerImage": "https://www.examtopics.com/assets/media/exam-media/04261/0001900001.png",
    "source": "examtopics.com",
    "explanation": "Question hotspot (réponse visuelle non vérifiable) ; la réponse actuelle (vide) est conservée telle quelle. Le concept testé est une investigation cross-domaine dans Microsoft 365 Defender/Defender XDR : on part de la table EmailAttachmentInfo pour identifier la pièce jointe malveillante (via son SHA256), puis on effectue une jointure (join) avec DeviceFileEvents sur ce même SHA256 afin de retrouver les appareils sur lesquels le fichier a été exécuté ou écrit, ce qui permet de relier un événement de messagerie à un impact sur les terminaux.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailattachmentinfo-table"
  },
  {
    "id": "813335",
    "number": 7,
    "topic": 1,
    "type": "multi-select",
    "text": "You have the following advanced hunting query in Microsoft 365 Defender.\n\n\n\nYou need to receive an alert when any process disables System Restore on a device managed by Microsoft Defender during the last 24 hours.\n\nWhich two actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "images": [
      "https://www.examtopics.com/assets/media/exam-media/04261/0002000001.png"
    ],
    "choices": [
      {
        "letter": "A",
        "text": "Create a detection rule."
      },
      {
        "letter": "B",
        "text": "Create a suppression rule."
      },
      {
        "letter": "C",
        "text": "Add | order by Timestamp to the query."
      },
      {
        "letter": "D",
        "text": "Replace DeviceProcessEvents with DeviceNetworkEvents."
      },
      {
        "letter": "E",
        "text": "Add DeviceId and ReportId to the output of the query."
      }
    ],
    "correctLetters": [
      "A",
      "E"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Pour transformer une requête Advanced Hunting en alerte automatique récurrente, il faut créer une règle de détection personnalisée (A, \"Create a detection rule\"), qui s'exécute périodiquement et génère des alertes/actions sans intervention manuelle. Microsoft exige que la requête renvoie certaines colonnes obligatoires pour les tables liées aux appareils, notamment Timestamp, DeviceId et ReportId (E), afin que l'alerte soit correctement rattachée au bon appareil et au bon groupe de périphériques. Une règle de suppression (B) masque des alertes au lieu d'en créer, trier les résultats (C) ou changer de table (D, DeviceNetworkEvents ne contient pas d'événements System Restore) ne répond pas au besoin. A et E sont donc les deux actions correctes.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules"
  },
  {
    "id": "813336",
    "number": 8,
    "topic": 1,
    "type": "multi-select",
    "text": "You are investigating a potential attack that deploys a new ransomware strain.\n\nYou have three custom device groups. The groups contain devices that store highly sensitive information.\n\nYou plan to perform automated actions on all devices.\n\nYou need to be able to temporarily group the machines to perform actions on the devices.\n\nWhich three actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Assign a tag to the device group."
      },
      {
        "letter": "B",
        "text": "Add the device users to the admin role."
      },
      {
        "letter": "C",
        "text": "Add a tag to the machines."
      },
      {
        "letter": "D",
        "text": "Create a new device group that has a rank of 1."
      },
      {
        "letter": "E",
        "text": "Create a new admin role."
      },
      {
        "letter": "F",
        "text": "Create a new device group that has a rank of 4."
      }
    ],
    "correctLetters": [
      "A",
      "C",
      "D"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Pour regrouper temporairement des appareils provenant de plusieurs groupes existants afin d'y appliquer des actions automatisées, on ajoute d'abord une balise (tag) directement sur les machines concernées (C), puis on crée un nouveau groupe d'appareils basé sur cette balise (A, \"Assign a tag to the device group\" correspond à la configuration du critère d'appartenance du groupe sur ce tag). Ce nouveau groupe doit avoir un rang de 1 (D), car dans Microsoft Defender for Endpoint un appareil n'est affecté qu'au groupe de rang le plus élevé (rang 1 = priorité la plus haute) parmi tous les groupes dont il remplit les critères, ce qui garantit que les machines taguées rejoignent bien ce groupe temporaire plutôt qu'un des trois groupes existants. Ajouter les utilisateurs à un rôle admin ou créer un nouveau rôle admin (B, E) n'a aucun rapport avec le regroupement de machines, et un rang de 4 (F) serait une priorité plus basse que les groupes existants.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/machine-groups"
  },
  {
    "id": "813337",
    "number": 9,
    "topic": 1,
    "type": "single-choice",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might\n\nmeet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou are configuring Microsoft Defender for Identity integration with Active Directory.\n\nFrom the Microsoft Defender for identity portal, you need to configure several accounts for attackers to exploit.\n\nSolution: From Entity tags, you add the accounts as Honeytoken accounts.\n\nDoes this meet the goal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Yes"
      },
      {
        "letter": "B",
        "text": "No"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Les comptes Honeytoken dans Microsoft Defender for Identity sont par définition des comptes-leurres, dormants et sans accès réel, configurés pour paraître intéressants aux yeux d'un attaquant : toute authentification ou activité sur ces comptes déclenche automatiquement une alerte, ce qui correspond exactement à l'objectif de \"configurer des comptes pour que les attaquants les exploitent\". Les taguer via Entity tags > Honeytoken accounts est la méthode officielle documentée par Microsoft pour ce scénario. La solution atteint donc bien l'objectif (réponse A, Yes).",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-for-identity/entity-tags"
  },
  {
    "id": "813348",
    "number": 10,
    "topic": 1,
    "type": "multi-select",
    "text": "You are configuring Microsoft Cloud App Security.\n\nYou have a custom threat detection policy based on the IP address ranges of your company's United States-based offices.\n\nYou receive many alerts related to impossible travel and sign-ins from risky IP addresses.\n\nYou determine that 99% of the alerts are legitimate sign-ins from your corporate offices.\n\nYou need to prevent alerts for legitimate sign-ins from known locations.\n\nWhich two actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Configure automatic data enrichment."
      },
      {
        "letter": "B",
        "text": "Add the IP addresses to the corporate address range category."
      },
      {
        "letter": "C",
        "text": "Increase the sensitivity level of the impossible travel anomaly detection policy."
      },
      {
        "letter": "D",
        "text": "Add the IP addresses to the other address range category and add a tag."
      },
      {
        "letter": "E",
        "text": "Create an activity policy that has an exclusion for the IP addresses."
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Pour réduire les faux positifs d'impossible travel et de connexions depuis des IP à risque sur des plages IP d'agences légitimes, il faut d'abord classer ces plages dans la catégorie \"Corporate\" (B) dans la gestion des plages d'adresses IP de Defender for Cloud Apps : un tag personnalisé Corporate prime sur les tags intégrés (comme Risky) et signale au moteur que ces emplacements sont sûrs. Il faut ensuite activer l'enrichissement automatique des données (A, \"Configure automatic data enrichment\"), qui permet au moteur de machine learning d'utiliser ces informations de catégorisation pour exclure correctement ces emplacements connus du calcul des anomalies. Augmenter la sensibilité (C) aggraverait le problème, et une politique d'activité avec exclusion (E) ou un tag \"other\" (D) ne s'appliquent pas aux détections d'anomalie basées sur le ML. A et B sont donc les deux bonnes réponses.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/ip-tags"
  },
  {
    "id": "813349",
    "number": 11,
    "topic": 1,
    "type": "single-choice",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might\n\nmeet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou are configuring Microsoft Defender for Identity integration with Active Directory.\n\nFrom the Microsoft Defender for identity portal, you need to configure several accounts for attackers to exploit.\n\nSolution: You add each account as a Sensitive account.\n\nDoes this meet the goal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Yes"
      },
      {
        "letter": "B",
        "text": "No"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Un compte \"Sensitive\" dans Microsoft Defender for Identity sert à signaler un compte réel et important (comme un compte admin ou un cadre dirigeant) afin d'affiner certaines détections (par exemple les changements de groupes sensibles) — ce n'est pas un leurre destiné à être compromis. Il ne déclenche donc pas d'alerte automatique en cas d'authentification, contrairement à un Honeytoken, et ne répond pas à l'objectif de \"configurer des comptes pour que les attaquants les exploitent\". Cette solution ne permet donc pas d'atteindre l'objectif (réponse B, No).",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-for-identity/entity-tags"
  },
  {
    "id": "813350",
    "number": 12,
    "topic": 1,
    "type": "single-choice",
    "text": "You have a Microsoft 365 tenant that uses Microsoft Exchange Online and Microsoft Defender for Office 365.\n\nWhat should you use to identify whether zero-hour auto purge (ZAP) moved an email message from the mailbox of a user?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "the Threat Protection Status report in Microsoft Defender for Office 365"
      },
      {
        "letter": "B",
        "text": "the mailbox audit log in Exchange"
      },
      {
        "letter": "C",
        "text": "the Safe Attachments file types report in Microsoft Defender for Office 365"
      },
      {
        "letter": "D",
        "text": "the mail flow report in Exchange"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Le Threat Protection Status report dans Microsoft Defender for Office 365 inclut une vue dédiée aux actions de Zero-hour auto purge (ZAP), montrant les messages qui ont été déplacés après livraison (par exemple vers le dossier Courrier indésirable ou mis en quarantaine) suite à une détection rétroactive de phishing ou de malware. Le journal d'audit de boîte aux lettres (B) trace les actions utilisateur et administratives mais pas spécifiquement les actions ZAP, le rapport sur les types de fichiers Safe Attachments (C) concerne les pièces jointes analysées en bac à sable, et le rapport de flux de messagerie (D) ne détaille pas les actions post-livraison de ZAP. La bonne réponse est donc A.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-office-365/zero-hour-auto-purge"
  },
  {
    "id": "813351",
    "number": 13,
    "topic": 1,
    "type": "single-choice",
    "text": "You have a Microsoft 365 subscription that contains 1,000 Windows 10 devices. The devices have Microsoft Office 365 installed.\n\nYou need to mitigate the following device threats:\n\n✑ Microsoft Excel macros that download scripts from untrusted websites\n\n✑ Users that open executable attachments in Microsoft Outlook\n\n✑ Outlook rules and forms exploits\n\nWhat should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Defender Antivirus"
      },
      {
        "letter": "B",
        "text": "attack surface reduction rules in Microsoft Defender for Endpoint"
      },
      {
        "letter": "C",
        "text": "Windows Defender Firewall"
      },
      {
        "letter": "D",
        "text": "adaptive application control in Azure Defender"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Les règles de réduction de la surface d'attaque (Attack Surface Reduction, ASR) de Microsoft Defender for Endpoint ciblent précisément ces trois comportements à risque : elles peuvent bloquer les macros Office qui lancent du contenu téléchargé depuis Internet, empêcher Outlook de créer des processus enfants (pièces jointes exécutables) et bloquer les abus des règles/formulaires Outlook utilisés comme technique de persistance. L'antivirus Defender (A) et le pare-feu (C) agissent sur d'autres vecteurs (signatures de malware, trafic réseau) sans cibler ces comportements applicatifs précis, et l'adaptive application control d'Azure Defender (D) vise les serveurs, pas les postes Windows 10 avec Office. La bonne réponse est donc B.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction"
  },
  {
    "id": "813352",
    "number": 14,
    "topic": 1,
    "type": "single-choice",
    "text": "You have a third-party security information and event management (SIEM) solution.\n\nYou need to ensure that the SIEM solution can generate alerts for Azure Active Directory (Azure AD) sign-events in near real time.\n\nWhat should you do to route events to the SIEM solution?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Create an Azure Sentinel workspace that has a Security Events connector."
      },
      {
        "letter": "B",
        "text": "Configure the Diagnostics settings in Azure AD to stream to an event hub."
      },
      {
        "letter": "C",
        "text": "Create an Azure Sentinel workspace that has an Azure Active Directory connector."
      },
      {
        "letter": "D",
        "text": "Configure the Diagnostics settings in Azure AD to archive to a storage account."
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Pour envoyer les événements de connexion Azure AD/Microsoft Entra ID vers un SIEM tiers en quasi temps réel, il faut configurer les paramètres de diagnostic (Diagnostic settings) du tenant Microsoft Entra ID pour diffuser (stream) les journaux de connexion vers un Event Hub, auquel le SIEM peut ensuite se connecter en continu. Créer un espace de travail Sentinel (A, C) n'est pas nécessaire puisque la cible est un SIEM tiers, et archiver vers un compte de stockage (D) ne permet qu'une consultation différée, pas un flux en temps quasi réel. La bonne réponse est donc B.",
    "referenceUrl": "https://learn.microsoft.com/en-us/entra/identity/monitoring-health/howto-stream-logs-to-event-hub"
  },
  {
    "id": "813353",
    "number": 15,
    "topic": 1,
    "type": "drag-drop",
    "text": "You have an Azure subscription linked to an Azure Active Directory (Azure AD) tenant. The tenant contains two users named User1 and User2.\n\nYou plan to deploy Azure Defender.\n\nYou need to enable User1 and User2 to perform tasks at the subscription level as shown in the following table.\n\n\n\nThe solution must use the principle of least privilege.\n\nWhich role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than once, or not at all.\n\nYou may need to drag the split bar between panes or scroll to view content.\n\nSelect and Place:",
    "images": [
      "https://www.examtopics.com/assets/media/exam-media/04261/0003500001.png",
      "https://www.examtopics.com/assets/media/exam-media/04261/0003600001.png"
    ],
    "choices": [],
    "correctLetters": [],
    "answerImage": "https://www.examtopics.com/assets/media/exam-media/04261/0003700001.png",
    "source": "examtopics.com",
    "explanation": "Question drag-drop (réponse visuelle non vérifiable) ; la réponse actuelle (vide) est conservée telle quelle. Le concept testé est l'attribution des rôles Azure RBAC au niveau de l'abonnement selon le principe du moindre privilège pour Microsoft Defender for Cloud (ex-Azure Defender) : Security Reader pour une consultation en lecture seule des recommandations/alertes, Security Admin pour pouvoir en plus modifier les politiques de sécurité et classer les alertes/recommandations, tandis que Owner/Contributor donnent des droits plus larges que nécessaire pour de simples tâches de sécurité.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/permissions"
  },
  {
    "id": "813354",
    "number": 16,
    "topic": 1,
    "type": "hotspot",
    "text": "You have a Microsoft 365 E5 subscription that contains 200 Windows 10 devices enrolled in Microsoft Defender for Endpoint.\n\nYou need to ensure that users can access the devices by using a remote shell connection directly from the Microsoft 365 Defender portal. The solution must use\n\nthe principle of least privilege.\n\nWhat should you do in the Microsoft 365 Defender portal? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "images": [
      "https://www.examtopics.com/assets/media/exam-media/04261/0003800001.png"
    ],
    "choices": [],
    "correctLetters": [],
    "answerImage": "https://img.examtopics.com/sc-200/image411.png",
    "source": "examtopics.com",
    "explanation": "Question hotspot (réponse visuelle non vérifiable) ; la réponse actuelle (vide) est conservée telle quelle. Le concept testé est le contrôle d'accès basé sur les rôles (RBAC) unifié de Microsoft Defender pour la fonctionnalité Live Response : il faut accorder uniquement la permission \"Basic live response\" (qui permet d'ouvrir une session et de réaliser des actions en lecture) plutôt que \"Advanced live response\" (qui autorise en plus l'upload de fichiers et l'exécution de scripts), afin de respecter le principe du moindre privilège tout en permettant la connexion shell distante aux appareils depuis le portail.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/live-response"
  },
  {
    "id": "813355",
    "number": 17,
    "topic": 1,
    "type": "hotspot",
    "text": "You have a Microsoft 365 subscription that uses Microsoft 365 Defender and contains a user named User1.\n\nYou are notified that the account of User1 is compromised.\n\nYou need to review the alerts triggered on the devices to which User1 signed in.\n\nHow should you complete the query? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "images": [
      "https://www.examtopics.com/assets/media/exam-media/04261/0004000001.jpg"
    ],
    "choices": [],
    "correctLetters": [],
    "answerImage": "https://www.examtopics.com/assets/media/exam-media/04261/0004100001.jpg",
    "source": "examtopics.com",
    "explanation": "Question hotspot (réponse visuelle non vérifiable) ; la réponse actuelle (vide) est conservée telle quelle. Le concept testé est une requête Advanced Hunting cross-tables dans Microsoft 365 Defender : on identifie d'abord les appareils sur lesquels User1 s'est connecté via DeviceLogonEvents (filtrage sur AccountName/AccountUpn), puis on effectue une jointure sur DeviceId avec les tables d'alertes (AlertInfo/AlertEvidence) afin de ne récupérer que les alertes déclenchées sur ces appareils précis, ce qui permet de circonscrire l'investigation au périmètre du compte compromis.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicelogonevents-table"
  },
  {
    "id": "813356",
    "number": 18,
    "topic": 1,
    "type": "single-choice",
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft SharePoint Online.\n\nYou delete users from the subscription.\n\nYou need to be notified if the deleted users downloaded numerous documents from SharePoint Online sites during the month before their accounts were deleted.\n\nWhat should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "a file policy in Microsoft Defender for Cloud Apps"
      },
      {
        "letter": "B",
        "text": "an access review policy"
      },
      {
        "letter": "C",
        "text": "an alert policy in Microsoft Defender for Office 365"
      },
      {
        "letter": "D",
        "text": "an insider risk policy"
      }
    ],
    "correctLetters": [
      "D"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Le modèle de politique \"Data theft by departing users\" de la gestion des risques internes (Insider Risk Management) de Microsoft Purview est conçu précisément pour ce scénario : il corrèle les indicateurs d'exfiltration (téléchargements massifs depuis SharePoint Online, copie vers du stockage personnel, etc.) sur une fenêtre de temps avant et après la date de départ d'un utilisateur, même après la suppression du compte. Une politique de file policy de Defender for Cloud Apps (A) ou une politique d'alerte de Defender for Office 365 (C) ne couvrent pas cette corrélation temporelle liée au départ, et une revue d'accès (B) sert à valider des droits, pas à détecter un comportement d'exfiltration passé. La bonne réponse est donc D.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/insider-risk-management-policy-templates"
  },
  {
    "id": "813357",
    "number": 19,
    "topic": 1,
    "type": "single-choice",
    "text": "You have a Microsoft 365 subscription that has Microsoft 365 Defender enabled.\n\nYou need to identify all the changes made to sensitivity labels during the past seven days.\n\nWhat should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "the Incidents blade of the Microsoft 365 Defender portal"
      },
      {
        "letter": "B",
        "text": "the Alerts settings on the Data Loss Prevention blade of the Microsoft 365 compliance center"
      },
      {
        "letter": "C",
        "text": "Activity explorer in the Microsoft 365 compliance center"
      },
      {
        "letter": "D",
        "text": "the Explorer settings on the Email & collaboration blade of the Microsoft 365 Defender portal"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": "/images/icons/icon-vote.png",
    "source": "examtopics.com",
    "explanation": "Activity explorer (in the Microsoft Purview compliance portal) records label-related events, including 'Sensitivity label applied', 'changed', and 'removed', and lets you filter by date range, activity type, and user to find all label changes in the last seven days. The Incidents blade surfaces correlated security incidents, not individual label-change events. DLP alert settings only show matches against DLP policies, not every sensitivity-label modification. Explorer under Email & collaboration is for investigating malicious email/URL/file threats, not label governance.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/data-classification-activity-explorer"
  },
  {
    "id": "813338",
    "number": 20,
    "topic": 1,
    "type": "single-choice",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might\nmeet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are configuring Microsoft Defender for Identity integration with Active Directory.\nFrom the Microsoft Defender for identity portal, you need to configure several accounts for attackers to exploit.\nSolution: From Azure AD Identity Protection, you configure the sign-in risk policy.\nDoes this meet the goal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Yes"
      },
      {
        "letter": "B",
        "text": "No"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "examtopics.com",
    "explanation": "Configuring 'several accounts for attackers to exploit' describes setting up honeytoken (decoy) accounts, which in Defender for Identity are created by applying the Honeytoken entity tag to dormant accounts so that any authentication against them raises a high-confidence alert. The sign-in risk policy in Microsoft Entra ID Identity Protection evaluates real sign-in risk signals to block or challenge risky sign-ins; it does not designate decoy accounts for attackers. Because the solution addresses a different goal, it does not meet the stated requirement.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-for-identity/entity-tags"
  },
  {
    "id": "813339",
    "number": 21,
    "topic": 1,
    "type": "single-choice",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might\nmeet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are configuring Microsoft Defender for Identity integration with Active Directory.\nFrom the Microsoft Defender for identity portal, you need to configure several accounts for attackers to exploit.\nSolution: You add the accounts to an Active Directory group and add the group as a Sensitive group.\nDoes this meet the goal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Yes"
      },
      {
        "letter": "B",
        "text": "No"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "examtopics.com",
    "explanation": "Adding accounts to an AD group and tagging that group as Sensitive marks those accounts as high-value/protected entities for Defender for Identity monitoring — effectively the opposite of a honeytoken, since sensitive accounts are shielded from certain detections rather than offered up as bait. To configure decoy accounts that attackers are meant to exploit, you must apply the Honeytoken entity tag to the accounts, not the Sensitive tag to a group. Therefore this solution does not meet the goal.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-for-identity/entity-tags"
  },
  {
    "id": "813340",
    "number": 22,
    "topic": 1,
    "type": "single-choice",
    "text": "You implement Safe Attachments policies in Microsoft Defender for Office 365.\nUsers report that email messages containing attachments take longer than expected to be received.\nYou need to reduce the amount of time it takes to deliver messages that contain attachments without compromising security. The attachments must be scanned\nfor malware, and any messages that contain malware must be blocked.\nWhat should you configure in the Safe Attachments policies?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Dynamic Delivery"
      },
      {
        "letter": "B",
        "text": "Replace"
      },
      {
        "letter": "C",
        "text": "Block and Enable redirect"
      },
      {
        "letter": "D",
        "text": "Monitor and Enable redirect"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "examtopics.com",
    "explanation": "Dynamic Delivery delivers the email body immediately with a placeholder for the attachment, so recipients aren't held up waiting for the sandbox scan, while the real attachment is only released once Safe Attachments confirms it's clean (and quarantined if malicious). 'Replace' only swaps malicious attachments after the fact and still delays benign-looking mail during scanning. 'Block/Monitor and Enable redirect' are Safe Links URL-related settings, not attachment delivery options, so they don't apply here.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-office-365/safe-attachments-about"
  },
  {
    "id": "813341",
    "number": 23,
    "topic": 1,
    "type": "hotspot",
    "text": "You are informed of an increase in malicious email being received by users.\nYou need to create an advanced hunting query in Microsoft 365 Defender to identify whether the accounts of the email recipients were compromised. The query\nmust return the most recent 20 sign-ins performed by the recipients within an hour of receiving the known malicious email.\nHow should you complete the query? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.examtopics.com/assets/media/exam-media/04261/0002400001.png"
    ],
    "choices": [],
    "correctLetters": [],
    "answerImage": "https://www.examtopics.com/assets/media/exam-media/04261/0002500001.png",
    "source": "examtopics.com",
    "explanation": "This hotspot tests the ability to build a cross-table advanced hunting query that pivots from a malicious email event to the recipients' subsequent sign-in activity. The query needs to join the email table (filtered to the known malicious message) with a sign-in events table on the recipient's identity, constrain the join to sign-ins that occurred within one hour after the email was received, sort by time descending, and limit the results to the 20 most recent rows (e.g., using a time-windowed join plus `top 20 by Timestamp desc`). As a hotspot question with a visual answer key, the exact dropdown selections can't be reliably reconstructed without the image, so the originally recorded answer is kept unchanged.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-overview"
  },
  {
    "id": "813342",
    "number": 24,
    "topic": 1,
    "type": "single-choice",
    "text": "You receive a security bulletin about a potential attack that uses an image file.\nYou need to create an indicator of compromise (IoC) in Microsoft Defender for Endpoint to prevent the attack.\nWhich indicator type should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "a URL/domain indicator that has Action set to Alert only"
      },
      {
        "letter": "B",
        "text": "a URL/domain indicator that has Action set to Alert and block"
      },
      {
        "letter": "C",
        "text": "a file hash indicator that has Action set to Alert and block"
      },
      {
        "letter": "D",
        "text": "a certificate indicator that has Action set to Alert and block"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "examtopics.com",
    "explanation": "An attack delivered via a specific malicious image file is best stopped with a file hash indicator (SHA-1/SHA-256), since the hash uniquely identifies that exact file regardless of file name or location; setting the action to 'Alert and block' both raises a detection and prevents the file from running or being read on onboarded devices. URL/domain and certificate indicators target network destinations or signing certificates, not a specific malicious file, so they wouldn't reliably stop this particular attack.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/indicator-file"
  },
  {
    "id": "813343",
    "number": 25,
    "topic": 1,
    "type": "multi-select",
    "text": "Your company deploys the following services:\n✑ Microsoft Defender for Identity\n✑ Microsoft Defender for Endpoint\n✑ Microsoft Defender for Office 365\nYou need to provide a security analyst with the ability to use the Microsoft 365 security center. The analyst must be able to approve and reject pending actions\ngenerated by Microsoft Defender for Endpoint. The solution must use the principle of least privilege.\nWhich two roles should assign to the analyst? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "the Compliance Data Administrator in Azure Active Directory (Azure AD)"
      },
      {
        "letter": "B",
        "text": "the Active remediation actions role in Microsoft Defender for Endpoint"
      },
      {
        "letter": "C",
        "text": "the Security Administrator role in Azure Active Directory (Azure AD)"
      },
      {
        "letter": "D",
        "text": "the Security Reader role in Azure Active Directory (Azure AD)"
      }
    ],
    "correctLetters": [
      "B",
      "D"
    ],
    "answerImage": null,
    "source": "examtopics.com",
    "explanation": "Approving or rejecting pending remediation actions generated by automated investigations in Defender for Endpoint requires the 'Active remediation actions' permission, which is a granular, product-specific role assigned from within Microsoft Defender for Endpoint's role-based access control. To simply access the Microsoft 365 Defender/security center portal without broader administrative rights, the Security Reader role in Microsoft Entra ID is sufficient and follows least privilege. Security Administrator (C) grants far more than needed, and Compliance Data Administrator (A) is unrelated to endpoint remediation actions.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/user-roles"
  },
  {
    "id": "813344",
    "number": 26,
    "topic": 1,
    "type": "hotspot",
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Defender and an Azure subscription that uses Azure Sentinel.\nYou need to identify all the devices that contain files in emails sent by a known malicious email sender. The query will be based on the match of the SHA256 hash.\nHow should you complete the query? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.examtopics.com/assets/media/exam-media/04261/0002700001.jpg"
    ],
    "choices": [],
    "correctLetters": [],
    "answerImage": "https://www.examtopics.com/assets/media/exam-media/04261/0002800001.jpg",
    "source": "examtopics.com",
    "explanation": "This hotspot tests building a query that pivots from a known-malicious email sender to the devices that received the attached file, using the SHA256 hash as the common key between Microsoft Defender for Office 365 email data and Microsoft Defender for Endpoint device data. The expected approach filters EmailAttachmentInfo by the malicious SenderFromAddress to get the attachment's SHA256, then joins that value against DeviceFileEvents.SHA256 to return the affected DeviceName/DeviceId values. Since this is a hotspot answer rendered only in an image, the exact dropdown selections are left as originally recorded.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailattachmentinfo-table"
  },
  {
    "id": "813345",
    "number": 27,
    "topic": 1,
    "type": "multi-select",
    "text": "You need to configure Microsoft Cloud App Security to generate alerts and trigger remediation actions in response to external sharing of confidential files.\nWhich two actions should you perform in the Cloud App Security portal? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "From Settings, select Information Protection, select Azure Information Protection, and then select Only scan files for Azure Information Protection classification labels and content inspection warnings from this tenant."
      },
      {
        "letter": "B",
        "text": "Select Investigate files, and then filter App to Office 365."
      },
      {
        "letter": "C",
        "text": "Select Investigate files, and then select New policy from search."
      },
      {
        "letter": "D",
        "text": "From Settings, select Information Protection, select Azure Information Protection, and then select Automatically scan new files for Azure Information Protection classification labels and content inspection warnings."
      },
      {
        "letter": "E",
        "text": "From Settings, select Information Protection, select Files, and then enable file monitoring."
      },
      {
        "letter": "F",
        "text": "Select Investigate files, and then filter File Type to Document."
      }
    ],
    "correctLetters": [
      "D",
      "E"
    ],
    "answerImage": null,
    "source": "examtopics.com",
    "explanation": "Automatically scanning new files for Azure/Microsoft Information Protection classification labels (D) is what allows Defender for Cloud Apps to recognize which files are confidential based on their sensitivity label, and enabling file monitoring (E) is what activates the engine that evaluates those files against file policies and triggers alerts and governance (remediation) actions, such as removing external sharing. Filtering Investigate files by app or file type (B, F) only narrows an ad-hoc search and 'New policy from search' (C) is one way to author a policy but doesn't by itself turn on the detection/alerting pipeline the question requires; scanning only tenant-authored labels (A) is narrower than needed and not about triggering remediation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/data-protection-policies"
  },
  {
    "id": "813346",
    "number": 28,
    "topic": 1,
    "type": "hotspot",
    "text": "You purchase a Microsoft 365 subscription.\nYou plan to configure Microsoft Cloud App Security.\nYou need to create a custom template-based policy that detects connections to Microsoft 365 apps that originate from a botnet network.\nWhat should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.examtopics.com/assets/media/exam-media/04261/0003000001.jpg"
    ],
    "choices": [],
    "correctLetters": [],
    "answerImage": "https://img.examtopics.com/sc-200/image410.png",
    "source": "examtopics.com",
    "explanation": "This hotspot tests knowledge that botnet-originated connections are detected in Defender for Cloud Apps using an Activity policy (not an Anomaly detection or Access policy), filtered on the IP address category/tag equal to 'Botnet' — a tag Defender for Cloud Apps' threat-intelligence feed automatically applies to known botnet IP ranges. Anomaly detection policies are pre-built and not customizable to this degree, and Access policies control real-time session access rather than alerting on historical activity patterns. As this is a hotspot answer shown only in an image, the specific dropdown values are left as originally recorded.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/user-activity-policies"
  },
  {
    "id": "813347",
    "number": 29,
    "topic": 1,
    "type": "single-choice",
    "text": "Your company has a single office in Istanbul and a Microsoft 365 subscription.\nThe company plans to use conditional access policies to enforce multi-factor authentication (MFA).\nYou need to enforce MFA for all users who work remotely.\nWhat should you include in the solution?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "a fraud alert"
      },
      {
        "letter": "B",
        "text": "a user risk policy"
      },
      {
        "letter": "C",
        "text": "a named location"
      },
      {
        "letter": "D",
        "text": "a sign-in user policy"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "examtopics.com",
    "explanation": "A named location lets you define the company's Istanbul office IP range as a trusted location in Microsoft Entra Conditional Access; a policy can then be scoped to require MFA for all sign-ins that do NOT originate from that named location, which in practice means every remote/off-site user is forced through MFA. A user risk policy and sign-in risk policy react to detected risk signals rather than physical location, and a fraud alert is an MFA feature for reporting unauthorized verification attempts, not a way to scope MFA to remote users.",
    "referenceUrl": "https://learn.microsoft.com/en-us/entra/identity/conditional-access/location-condition"
  },
  {
    "id": "ed-1-596f7520",
    "number": 30,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Testlet 1 )",
    "type": "single-choice",
    "text": "Case study:\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs.\nWhen you are ready to answer a question, click the Question button to return to the question.\nOverview\nFabrikam, Inc. is a financial services company.\nThe company has branch offices in New York, London, and Singapore. Fabrikam has remote users located across the globe. The remote users access company resources, including cloud resources, by using a VPN connection to a branch office.\nExisting Environment\nIdentity Environment\nThe network contains an Active Directory Domain Services (AD DS) forest named fabrikam.com that syncs with an Azure AD tenant named fabrikam.com. To sync the forest, Fabrikam uses Azure AD Connect with pass-through authentication enabled and password hash synchronization disabled.\nThe fabrikam.com forest contains two global groups named Group1 and Group2.\nMicrosoft 365 Environment\nAll the users at Fabrikam are assigned a Microsoft 365 E5 license and a Microsoft Entra ID P2 license.\nFabrikam implements Microsoft Defender for Identity and Microsoft Defender for Cloud Apps and enables log collectors.\nAzure Environment\nFabrikam has an Azure subscription that contains the resources shown in the following table.\n\nAmazon Web Services (AWS) Environment\nFabrikam has an Amazon Web Services (AWS) account named Account1. Account1 contains 100 Amazon Elastic Compute Cloud (EC2) instances that run a custom Windows Server 2022. The image includes Microsoft SQL Server 2019 and does NOT have any agents installed.\nCurrent Issues\nWhen the users use the VPN connections, Microsoft 365 Defender raises a high volume of impossible travel alerts that are false positives.\nDefender for Identity raises a high volume of Suspected DCSync attack alerts that are false positives.\nRequirements\nPlanned changes\nFabrikam plans to implement the following services:\n-Microsoft Defender for Cloud\n-Microsoft Sentinel\nBusiness Requirements\nFabrikam identifies the following business requirements:\n-Use the principle of least privilege, whenever possible.\n-Minimize administrative effort.\nMicrosoft Defender for Cloud Apps Requirements\nFabrikam identifies the following Microsoft Defender for Cloud Apps requirements:\n-Ensure that impossible travel alert policies are based on the previous activities of each user.\n-Reduce the amount of impossible travel alerts that are false positives.\nMicrosoft Defender for Identity Requirements\nMinimize the administrative effort required to investigate the false positive alerts.\nMicrosoft Defender for Cloud Requirements\nFabrikam identifies the following Microsoft Defender for Cloud requirements:\n-Ensure that the members of Group2 can modify security policies.\n-Ensure that the members of Group1 can assign regulatory compliance policy initiatives at the Azure subscription level.\n-Automate the deployment of the Azure Connected Machine agent for Azure Arc-enabled servers to the existing and future resources of Account1.\n-Minimize the administrative effort required to investigate the false positive alerts.\nMicrosoft Sentinel Requirements\nFabrikam identifies the following Microsoft Sentinel requirements:\n-Query for NXDOMAIN DNS requests from the last seven days by using built-in Advanced Security Information Model (ASIM) unifying parsers.\n-From AWS EC2 instances, collect Windows Security event log entries that include local group membership changes.\n-Identify anomalous activities of Azure AD users by using User and Entity Behavior Analytics (UEBA).\n-Evaluate the potential impact of compromised Azure AD user credentials by using UEBA.\n-Ensure that App1 is available for use in Microsoft Sentinel automation rules.\n-Identify the mean time to triage for incidents generated during the last 30 days.\n-Identify the mean time to close incidents generated during the last 30 days.\n-Ensure that the members of Group1 can create and run playbooks.\n-Ensure that the members of Group1 can manage analytics rules.\n-Run hunting queries on Pool1 by using Jupyter notebooks.\n-Ensure that the members of Group2 can manage incidents.\n-Maximize the performance of data queries.\n-Minimize the amount of collected data.\n\nYou need to minimize the effort required to investigate the Microsoft Defender for Identity false positive alerts.\nWhat should you review?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "the status update time"
      },
      {
        "letter": "B",
        "text": "the resolution method of the source computer"
      },
      {
        "letter": "C",
        "text": "the alert status"
      },
      {
        "letter": "D",
        "text": "the certainty of the source computer"
      }
    ],
    "correctLetters": [
      "D"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Suspected DCSync alerts in Defender for Identity frequently become false positives when Network Name Resolution (NNR) cannot confidently map the source IP address of the activity to the correct computer object; reviewing the certainty (confidence level) of that source-computer resolution quickly reveals whether the alert was triggered against a misidentified device, letting analysts dismiss it with minimal investigation. The status update time, resolution method, and generic alert status don't speak to whether the underlying computer attribution itself is trustworthy, so they don't help triage this specific false-positive pattern as directly.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-for-identity/nnr-policy"
  },
  {
    "id": "ed-8-596f7520",
    "number": 31,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "drag-drop",
    "text": "You are investigating an incident by using Microsoft Defender portal.\nYou need to create an advanced hunting query to count failed sign-in authentications on three devices named CFOLaptop, CEOLaptop, and COOLaptop.\nHow should you complete the query? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nSelect and Place:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/be683b0b-c851-4742-be2c-6cd9a507d7ad.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/77b4e91f-1e0d-471b-990f-94e3234884ae.jpg",
    "source": "exam-dumps.net",
    "explanation": "This drag-drop tests constructing an advanced hunting query against the DeviceLogonEvents table: filtering ActionType to failed logon attempts (e.g., 'LogonFailed'), restricting DeviceName to the three named devices (CFOLaptop, CEOLaptop, COOLaptop), and then using `summarize count()` grouped by DeviceName (or AccountName) to produce the failed sign-in counts. Because the answer is a visual drag-and-drop arrangement that can't be verified without the image, the originally recorded answer is kept unchanged.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicelogonevents-table"
  },
  {
    "id": "ed-9-596f7520",
    "number": 32,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You need to receive a security alert when a user attempts to sign in from a location that was never used by the other users in your organization to sign in.\nWhich Microsoft Defender for Cloud Apps anomaly detection policy should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Impossible travel"
      },
      {
        "letter": "B",
        "text": "Activity from anonymous IP addresses"
      },
      {
        "letter": "C",
        "text": "Activity from infrequent country"
      },
      {
        "letter": "D",
        "text": "Malware detection"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "'Activity from infrequent country' is the anomaly detection policy that specifically compares a sign-in's location against each user's own prior activity history and alerts when the location has never (or rarely) been seen for that user before. Impossible travel instead flags two sign-ins from geographically distant locations in a timeframe that's not physically plausible, activity from anonymous IP addresses flags known proxy/VPN/Tor exit nodes regardless of location history, and malware detection is unrelated to sign-in location at all.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/anomaly-detection-policy"
  },
  {
    "id": "ed-12-596f7572",
    "number": 33,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "multi-select",
    "text": "Your company uses Microsoft Defender for Endpoint.\nThe company has Microsoft Word documents that contain macros. The documents are used frequently on the devices of the company’s accounting team.\nYou need to hide false positive in the Alerts queue, while maintaining the existing security posture.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNote: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Resolve the alert automatically."
      },
      {
        "letter": "B",
        "text": "Hide the alert."
      },
      {
        "letter": "C",
        "text": "Create a suppression rule scoped to any device."
      },
      {
        "letter": "D",
        "text": "Create a suppression rule scoped to a device group."
      },
      {
        "letter": "E",
        "text": "Generate the alert."
      }
    ],
    "correctLetters": [
      "B",
      "D",
      "E"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "To suppress a recurring false positive from legitimate macro-enabled Word files used only by the accounting team without weakening detection elsewhere, you let the alert generate (E) so Defender for Endpoint still logs the detection, then hide that specific alert from the queue (B) so analysts aren't repeatedly distracted by it, and create a suppression rule scoped to the accounting team's device group (D) so future identical alerts are automatically suppressed only on those devices, not organization-wide. Scoping the suppression rule to 'any device' (C) would blind the whole organization to a potentially real detection, and automatically resolving alerts (A) doesn't hide them from the queue or prevent them from reappearing.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/defender-endpoint-false-positives-negatives"
  },
  {
    "id": "ed-13-596f7520",
    "number": 34,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "drag-drop",
    "text": "You open the Microsoft Defender for Cloud Apps portal as shown in the following exhibit.\n\nYour environment does NOT have Microsoft Defender for Endpoint enabled.\nYou need to remediate the risk for the Launchpad app.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/ed1850a7-5ce8-4bc3-b032-070d57a992a8.jpg",
      "https://www.exam-dumps.net/images/exams/SC-200/7656bbdd-d6a7-4bc9-adba-7d27c9b5a201.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/0c5d2640-5306-48c3-8f5f-2d6b8007ee5c.jpg",
    "source": "exam-dumps.net",
    "explanation": "This drag-drop tests the app-risk remediation workflow in Defender for Cloud Apps when Defender for Endpoint isn't available: you investigate the flagged app (Launchpad) and its risk score/permissions on the OAuth apps or App governance page, review which users and data it has access to, then take a governance action such as banning or revoking the app's permissions, and finally notify the affected users so they're aware access was removed. Because the correct sequence is shown only as an image-based drag-and-drop answer, the originally recorded answer is kept unchanged, and the explanation focuses on the general app-governance remediation concept being tested.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/governance-actions"
  },
  {
    "id": "ed-14-596f7520",
    "number": 35,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "hotspot",
    "text": "You have a Microsoft 365 E5 subscription.\nYou plan to perform cross-domain investigations by using Microsoft Defender XDR.\nYou need to create an advanced hunting query to identify devices affected by a malicious email attachment.\nHow should you complete the query? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/36367329-f3cf-45c0-8014-12cda50abba2.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/a9c3dce7-bfd0-4ef3-b5aa-52f955bc0155.jpg",
    "source": "exam-dumps.net",
    "explanation": "This hotspot tests cross-domain advanced hunting in Microsoft Defender XDR: identifying devices affected by a malicious email attachment means joining EmailAttachmentInfo (which records the SHA256 of attachments processed by Defender for Office 365) with DeviceFileEvents (which records the SHA256 of files seen/executed on endpoints via Defender for Endpoint) on the shared SHA256 column, then projecting DeviceName/DeviceId for matching rows. This SHA256-based join is the standard way to pivot from an email-borne threat to the endpoints where that file actually landed. The specific hotspot selections remain as originally recorded since they were only shown in an image.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailattachmentinfo-table"
  },
  {
    "id": "ed-15-596f7520",
    "number": 36,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "multi-select",
    "text": "You have the following advanced hunting query in Microsoft Defender XDR.\n\nYou need to receive an alert when any process disables System Restore on a device managed by Microsoft Defender XDR during the last 24 hours.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNote: Each correct selection is worth one point.",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/a2508c7d-9372-4d0e-bbac-4296f341eb87.jpg"
    ],
    "choices": [
      {
        "letter": "A",
        "text": "Create a detection rule."
      },
      {
        "letter": "B",
        "text": "Create a suppression rule."
      },
      {
        "letter": "C",
        "text": "Add | order by Timestamp to the query."
      },
      {
        "letter": "D",
        "text": "Replace DeviceProcessEvents with DeviceNetworkEvents."
      },
      {
        "letter": "E",
        "text": "Add DeviceId and ReportId to the output of the query."
      }
    ],
    "correctLetters": [
      "A",
      "E"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "To turn an advanced hunting query into something that alerts automatically, you must convert it into a custom detection rule, which Defender XDR runs on a schedule and uses to generate alerts and trigger response actions. Custom detection rules require the query output to include unique identifiers for each matched event, specifically DeviceId and ReportId, so Defender XDR can correlate the result to a device and an underlying report. A suppression rule (B) does the opposite of alerting by hiding matching alerts, sorting with order by Timestamp (C) has no effect on detection logic, and switching to DeviceNetworkEvents (D) is wrong because disabling System Restore is a process action captured in DeviceProcessEvents, not network traffic.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules"
  },
  {
    "id": "ed-17-4e6f7465",
    "number": 37,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are configuring Microsoft Defender for Identity integration with Active Directory.\nFrom the Microsoft Defender portal, you need to configure several accounts for attackers to exploit.\nSolution: From Entity tags, you add the accounts as Honeytoken accounts.\nDoes this meet the goal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Yes"
      },
      {
        "letter": "B",
        "text": "No"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Honeytoken accounts are decoy accounts deliberately left unused so that any authentication attempt against them is inherently suspicious and immediately raises an alert, which matches the goal of configuring accounts for attackers to exploit. In the Microsoft Defender portal, this is configured from Settings > Identities > Entity tags by applying the Honeytoken tag to the chosen accounts, exactly as the solution describes. Because this is the documented, correct configuration path for honeytoken accounts in Microsoft Defender for Identity, the solution meets the stated goal.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-for-identity/entity-tags"
  },
  {
    "id": "ed-21-596f7520",
    "number": 38,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "hotspot",
    "text": "You are informed of an increase in malicious email being received by users.\nYou need to create an advanced hunting query in Microsoft Defender portal to identify whether the accounts of the email recipients were compromised. The query must return the most recent 20 sign-ins performed by the recipients within an hour of receiving the known malicious email.\nHow should you complete the query? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/41dbf87a-0499-4337-a4a2-8f3426e181a7.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/edcf6aae-66a4-40bf-a9d4-9e9fe522b87a.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a hotspot question whose exact drop-down selections are shown only in an image that cannot be verified pixel-by-pixel, so the originally provided answer is kept as-is. Conceptually, the query needs to join EmailEvents (to find the malicious email and its recipients) with a sign-in table such as the Microsoft Entra sign-in logs, correlate on the recipient's account and a time window of one hour after the email's delivery timestamp, and then sort and limit the results to the most recent 20 sign-ins. This pattern of joining email delivery data with identity sign-in data is a common advanced hunting technique for detecting account compromise following a phishing email.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-example-queries"
  },
  {
    "id": "ed-23-596f7572",
    "number": 39,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "multi-select",
    "text": "Your company deploys the following services:\n-Microsoft Defender for Identity\n-Microsoft Defender for Endpoint\n-Microsoft Defender for Office 365\nYou need to provide a security analyst with the ability to use the Microsoft 365 security center. The analyst must be able to approve and reject pending actions generated by Microsoft Defender for Endpoint. The solution must use the principle of least privilege.\nWhich two roles should assign to the analyst? Each correct answer presents part of the solution.\nNote: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "the Compliance Data Administrator in Azure Active Directory (Azure AD)"
      },
      {
        "letter": "B",
        "text": "the Active remediation actions role in Microsoft Defender for Endpoint"
      },
      {
        "letter": "C",
        "text": "the Security Administrator role in Azure Active Directory (Azure AD)"
      },
      {
        "letter": "D",
        "text": "the Security Reader role in Azure Active Directory (Azure AD)"
      }
    ],
    "correctLetters": [
      "B",
      "D"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "The Active remediation actions role in Microsoft Defender for Endpoint is the specific, narrowly-scoped permission that lets an analyst approve or reject pending actions in the Action center, which is exactly what the scenario requires. To sign in to the Microsoft 365 security center at all, the analyst also needs a Microsoft Entra role, and Security Reader provides that read-only portal access without granting any extra administrative capability, satisfying least privilege. Security Administrator (C) would also work but grants far more permissions than needed, violating least privilege, and Compliance Data Administrator (A) governs compliance center access, not Defender for Endpoint remediation actions.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/user-roles"
  },
  {
    "id": "ed-24-596f7520",
    "number": 40,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "hotspot",
    "text": "You are using Microsoft Sentinel.\nYou need to identify all the devices that contain files in emails sent by a known malicious email sender. The query will be based on the match of the SHA256 hash.\nHow should you complete the query? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/15dc29f0-5de4-4e66-9388-88ec62d75ef4.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/093e12be-c3f2-4d5a-9344-dc1973d4ca33.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a hotspot question whose exact drop-down selections are shown only in an image that cannot be verified pixel-by-pixel, so the originally provided answer is kept as-is. Conceptually, the query needs to start from the email attachment metadata for messages sent by the known malicious sender (EmailAttachmentInfo), extract the SHA256 hash of those attachments, and then join that hash against a device-side file table such as DeviceFileEvents or DeviceProcessEvents to find every device where a file with the same SHA256 was seen. Matching on SHA256 rather than file name or path is the key technique being tested, since hash matching is resistant to file renaming.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-example-queries"
  },
  {
    "id": "ed-25-596f7520",
    "number": 41,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "multi-select",
    "text": "You need to configure Microsoft Defender for Cloud Apps to generate alerts and trigger remediation actions in response to external sharing of confidential files.\nWhich two actions should you perform in the Microsoft Defender for Cloud Apps portal? Each correct answer presents part of the solution.\nNote: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "From Settings, select Information Protection, select Azure Information Protection, and then select Only scan files for Azure Information Protection classification labels and content inspection warnings from this tenant."
      },
      {
        "letter": "B",
        "text": "Select Investigate files, and then filter App to Office 365."
      },
      {
        "letter": "C",
        "text": "Select Investigate files, and then select New policy from search."
      },
      {
        "letter": "D",
        "text": "From Settings, select Information Protection, select Azure Information Protection, and then select Automatically scan new files for Azure Information Protection classification labels and content inspection warnings."
      },
      {
        "letter": "E",
        "text": "From Settings, select Information Protection, select Files, and then enable file monitoring."
      },
      {
        "letter": "F",
        "text": "Select Investigate files, and then filter File Type to Document."
      }
    ],
    "correctLetters": [
      "C",
      "E"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "File monitoring must first be turned on from Settings > Information Protection > Files > Enable file monitoring, because file policies in Defender for Cloud Apps only evaluate content once monitoring is active. The actual alerting and remediation logic is then created as a file policy: using Investigate files, you filter for the files you care about (for example, confidential classification plus external sharing) and select New policy from search, which turns that filtered view directly into a policy where you configure alerts and governance (remediation) actions such as removing external users. Automatically scanning new files for AIP classification labels (D) only affects whether files get scanned or labeled; it creates no alert or remediation action by itself, and filtering by App or File Type (B, F) is just investigation, not policy creation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/data-protection-policies"
  },
  {
    "id": "ed-26-596f7520",
    "number": 42,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "hotspot",
    "text": "You purchase a Microsoft 365 subscription.\nYou plan to configure Microsoft Defender for Cloud Apps.\nYou need to create a custom template-based policy that detects connections to Microsoft 365 apps that originate from a botnet network.\nWhat should you use? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/c7a879f9-ea33-4b64-8605-ae83a2d4c5b0.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/cb0ba523-a2d4-4a47-9d2d-a2b39ec098f5.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a hotspot question whose exact drop-down selections are shown only in an image that cannot be verified pixel-by-pixel, so the originally provided answer is kept as-is. Conceptually, detecting connections from a botnet originates from the built-in Risky IP category in Defender for Cloud Apps, which already includes the Botnet threat-intelligence tag, and the way to act on it with a custom, template-based policy is to create an Activity policy using an activity-matches-filter template scoped to the Risky IP address category/tag. This tests knowledge that Defender for Cloud Apps ships built-in IP threat-intelligence tags that templates and custom policies can filter on directly, without needing to manually define the malicious IP ranges yourself.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/ip-tags"
  },
  {
    "id": "ed-28-596f7520",
    "number": 43,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "multi-select",
    "text": "You are configuring Microsoft Defender for Cloud Apps.\nYou have a custom threat detection policy based on the IP address ranges of your company’s United States-based offices.\nYou receive many alerts related to impossible travel and sign-ins from risky IP addresses.\nYou determine that 99% of the alerts are legitimate sign-ins from your corporate offices.\nYou need to prevent alerts for legitimate sign-ins from known locations.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNote: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Configure data enrichment."
      },
      {
        "letter": "B",
        "text": "Add the IP addresses to the corporate address range category."
      },
      {
        "letter": "C",
        "text": "Increase the sensitivity level of the impossible travel anomaly detection policy."
      },
      {
        "letter": "D",
        "text": "Add the IP addresses to the other address range category and add a tag."
      },
      {
        "letter": "E",
        "text": "Create an activity policy that has an exclusion for the IP addresses."
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "In Defender for Cloud Apps, known safe office locations are defined by configuring IP address ranges (managed under the IP address ranges / data enrichment settings) and tagging those ranges with the built-in Corporate category. When both sides of a sign-in or session fall into a Corporate-tagged range, Defender for Cloud Apps treats the activity as trusted and suppresses the impossible travel and risky-IP anomaly alerts for that traffic, directly addressing the 99% false-positive problem described. Raising the sensitivity slider (C) would increase, not reduce, false positives; tagging ranges as Other instead of Corporate (D) does not get the same trusted treatment; and an activity-policy exclusion (E) only affects one specific activity policy rather than the anomaly detection engine generating these particular alerts.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/ip-tags"
  },
  {
    "id": "ed-31-596f7520",
    "number": 44,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 subscription that contains 1,000 Windows 11 devices.\nThe devices have Microsoft 365 Apps installed and are onboarded to Microsoft Defender for Endpoint.\nYou need to mitigate the following device threats:\n-Microsoft Excel macros that download scripts from untrusted websites\n-Users that open executable attachments in Microsoft Outlook\n-Outlook rules and forms exploits\nWhat should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "antivirus exclusions of Microsoft Defender for Endpoint."
      },
      {
        "letter": "B",
        "text": "attack surface reduction rules in Microsoft Defender for Endpoint"
      },
      {
        "letter": "C",
        "text": "Windows Defender Firewall rules"
      },
      {
        "letter": "D",
        "text": "adaptive application control in Microsoft Defender for Cloud"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Attack surface reduction (ASR) rules in Microsoft Defender for Endpoint directly target all three behaviors described: rules like Block Win32 API calls from Office macros and Block Office applications from creating executable content stop Excel macros from downloading and running scripts, Block executable content from email client and webmail stops users from running .exe attachments opened in Outlook, and Block Office communication application from creating child processes specifically defends against Outlook rules-and-forms exploits. Antivirus exclusions (A) would only reduce scanning, not add protection; Windows Defender Firewall (C) controls network traffic rather than process or script behavior; and adaptive application control (D) is a Microsoft Defender for Cloud workload-protection feature for servers, not an endpoint behavior-blocking capability for client devices.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference"
  },
  {
    "id": "ed-32-596f7520",
    "number": 45,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a third-party security information and event management (SIEM) solution.\nYou need to ensure that the SIEM solution can generate alerts for Azure Active Directory (Azure AD) sign-events in near real time.\nWhat should you do to route events to the SIEM solution?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Create an Microsoft Sentinel workspace that has a Security Events connector."
      },
      {
        "letter": "B",
        "text": "Configure the Diagnostics settings in Azure AD to stream to an event hub."
      },
      {
        "letter": "C",
        "text": "Create an Microsoft Sentinel workspace that has an Azure Active Directory connector."
      },
      {
        "letter": "D",
        "text": "Configure the Diagnostics settings in Azure AD to archive to a storage account."
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "To deliver Microsoft Entra ID (Azure AD) sign-in logs to a third-party SIEM in near real time, you configure Diagnostic settings on the tenant to stream the Sign-ins log category to an Azure Event Hub, which the SIEM then consumes continuously as new events arrive. Creating a Microsoft Sentinel workspace with a Security Events or Azure Active Directory connector (A, C) routes the data into Sentinel itself, not into an external third-party SIEM, and archiving logs to a storage account (D) only supports later batch retrieval rather than near-real-time delivery.",
    "referenceUrl": "https://learn.microsoft.com/en-us/entra/identity/monitoring-health/howto-stream-logs-to-event-hub"
  },
  {
    "id": "ed-33-596f7520",
    "number": 46,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "drag-drop",
    "text": "You have an Azure subscription linked to a Microsoft Entra tenant. The tenant contains two users named User1 and User2.\nYou plan to deploy Microsoft Defender for Cloud.\nYou need to enable User1 and User2 to perform tasks at the subscription level as shown in the following table.\n\nThe solution must use the principle of least privilege.\nWhich role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nSelect and Place:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/a1e79a98-1c5f-4226-9b24-abb5d032994f.jpg",
      "https://www.exam-dumps.net/images/exams/SC-200/6fd3fd98-1398-4219-883b-2f78e4cbf643.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/7581e479-2d72-4b6b-bbe9-df970de880dc.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a drag-and-drop question whose exact role-to-user mapping is shown only in an image that cannot be verified pixel-by-pixel, so the originally provided answer is kept as-is. Conceptually, the question tests knowledge of Microsoft Defender for Cloud's built-in Microsoft Entra roles at the subscription level, such as Security Reader (view-only access to recommendations and alerts) versus Security Admin/Contributor (ability to apply recommendations, dismiss alerts, or edit security policies), and matching the least-privileged role to each user's specific listed tasks. The underlying skill being tested is choosing the narrowest built-in role that still covers the exact actions each user needs to perform.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/security"
  },
  {
    "id": "ed-36-596f7520",
    "number": 47,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft SharePoint Online.\nYou delete users from the subscription.\nYou need to be notified if the deleted users downloaded numerous documents from SharePoint Online sites during the month before their accounts were deleted.\nWhat should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "a file policy in Microsoft Defender for Cloud Apps"
      },
      {
        "letter": "B",
        "text": "an access review policy in Microsoft Entra"
      },
      {
        "letter": "C",
        "text": "an alert policy in Microsoft Defender for Office 365"
      },
      {
        "letter": "D",
        "text": "an insider risk management policy in Microsoft Purview"
      }
    ],
    "correctLetters": [
      "D"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Microsoft Purview Insider Risk Management includes a quick policy template called Data theft from Microsoft 365 apps by users leaving your organization, which is specifically built to detect potential data exfiltration, such as mass downloads from SharePoint Online, by users whose account was deleted or who are departing, and to alert on it after the fact. A Defender for Cloud Apps file policy (A) can flag downloads generically but is not designed to correlate that activity with account deletion or departure; an access review policy (B) governs ongoing access assignments rather than historical activity; and a Defender for Office 365 alert policy (C) focuses on mail-flow and phishing threats, not SharePoint download volume by departing users.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/insider-risk-management-policy-templates"
  },
  {
    "id": "ed-37-596f7572",
    "number": 48,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "Your organization has a Microsoft 365 subscription and uses Microsoft Defender XDR and Microsoft Purview.\nYou need to identify all the changes made to sensitivity labels during the past seven days.\nWhat should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "the Incidents blade of the Microsoft Defender portal"
      },
      {
        "letter": "B",
        "text": "the Alerts settings on the Data Loss Prevention blade of the Microsoft Purview compliance portal"
      },
      {
        "letter": "C",
        "text": "Activity explorer in the Microsoft Purview compliance portal"
      },
      {
        "letter": "D",
        "text": "the Explorer settings on the Email & collaboration blade of the Microsoft Defender portal"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Activity explorer in the Microsoft Purview compliance portal includes a predefined filter set, Sensitivity labels applied, changed, or removed, built exactly to surface when labels are applied, upgraded, downgraded, or removed over a chosen date range, and it reports on up to 30 days of data, which covers the requested 7-day window. The Incidents blade (A) and the Defender for Office 365 Explorer (D) are Defender XDR surfaces for threat and email investigation, not label governance, and the DLP alert settings (B) control alerting thresholds rather than providing a historical audit of label changes.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/data-classification-activity-explorer"
  },
  {
    "id": "ed-38-596f7520",
    "number": 49,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 E5 subscription that is linked to a hybrid Microsoft Entra tenant.\nYou need to identify all the changes made to Domain Admins group during the past 30 days.\nWhat should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "the Modifications of sensitive groups report in Microsoft Defender for Identity"
      },
      {
        "letter": "B",
        "text": "the identity security posture assessment in Microsoft Defender for Cloud Apps"
      },
      {
        "letter": "C",
        "text": "the Microsoft Entra ID Provisioning Analysis workbook"
      },
      {
        "letter": "D",
        "text": "the Overview settings of Insider risk management"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Microsoft Defender for Identity provides a dedicated Modification to sensitive groups report, available from Reports > Identities > Report management in the Defender portal, which lists every change made to sensitive groups such as Domain Admins and can be generated or scheduled over a chosen time period like the last 30 days. The identity security posture assessment in Defender for Cloud Apps (B) surfaces configuration weaknesses rather than a change history, the Microsoft Entra ID Provisioning Analysis workbook (C) tracks provisioning-connector activity rather than on-premises AD group membership changes, and the Insider Risk Management Overview (D) is a dashboard summary, not a group-membership change report.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-for-identity/reports"
  },
  {
    "id": "ed-39-596f7520",
    "number": 50,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 subscription. The subscription uses Microsoft Purview and has data loss prevention (DLP) policies that have aggregated alerts configured.\nYou need to identify the impacted entities in an aggregated alert.\nWhat should you review in the DLP alert management dashboard of the Microsoft Purview portal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "the Events tab of the alert"
      },
      {
        "letter": "B",
        "text": "the Sensitive Info Types tab of the alert"
      },
      {
        "letter": "C",
        "text": "Management log"
      },
      {
        "letter": "D",
        "text": "the Details tab of the alert"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "For an aggregated DLP alert in the Microsoft Purview DLP alert management dashboard, the Events tab lists every individual underlying event that was rolled into that alert, and selecting an event reveals its details, including the impacted entities such as the user and the device or hostname involved. The Details/Overview tab (D) shows high-level, alert-wide metadata like policy name and severity rather than per-event impacted entities, the Sensitive Info Types tab (B) only shows which classifiers matched, and the Management log (C) is a separate, unrelated administrative activity log rather than part of an individual alert's view.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/dlp-alerts-dashboard-get-started"
  },
  {
    "id": "ed-40-596f7520",
    "number": 51,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 subscription that uses Microsoft 365 Defender.\nYou plan to create a hunting query from Microsoft Defender.\nYou need to create a custom tracked query that will be used to assess the threat status of the subscription.\nFrom the Microsoft 365 Defender portal, which page should you use to create the query?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Threat analytics"
      },
      {
        "letter": "B",
        "text": "Advanced Hunting"
      },
      {
        "letter": "C",
        "text": "Explorer"
      },
      {
        "letter": "D",
        "text": "Policies & rules"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "The Advanced Hunting page in the Microsoft Defender portal is where you write, run, and save custom KQL queries, including tracked custom queries, so you can proactively hunt for threats and assess the overall security status of the tenant. Threat analytics (A) provides prebuilt reports on specific known threat campaigns rather than a place to author custom queries, Explorer (C) is the Defender for Office 365 tool for investigating email threats specifically, and Policies & rules (D) manages protection policies, not hunting queries.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-overview"
  },
  {
    "id": "ed-41-596f7520",
    "number": 52,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint.\nYou need to add threat indicators for all the IP addresses in a range of 171.23.34.32-171.23.34.63. The solution must minimize administrative effort.\nWhat should you do in the Microsoft Defender portal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Create an import file that contains the individual IP addresses in the range. Select Import and import the file."
      },
      {
        "letter": "B",
        "text": "Create an import file that contains the IP address of 171.23.34.32/27. Select Import and import the file."
      },
      {
        "letter": "C",
        "text": "Select Add indicator and set the IP address to 171.23.34.32-171.23.34.63."
      },
      {
        "letter": "D",
        "text": "Select Add indicator and set the IP address to 171.23.34.32/27."
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Custom IP indicators in Microsoft Defender for Endpoint only support single IP addresses; CIDR notation and IP ranges are not supported, whether you use the Add indicator dialog or a bulk import file. Since the range 171.23.34.32-171.23.34.63 covers 32 individual addresses, the approach that both works and minimizes administrative effort is to generate one CSV file listing each individual address and import it in a single bulk operation, rather than adding each IP manually. Options B and D fail because /27 CIDR notation is not accepted for IP indicators, and option C's range syntax is likewise unsupported in the Add indicator dialog.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/indicator-ip-domain"
  },
  {
    "id": "ed-42-596f7520",
    "number": 53,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have an Azure subscription that uses Microsoft Defender for Endpoint.\nYou need to ensure that you can allow or block user-specified IP addresses and URLs.\nWhat should you enable first in the Advanced features from the Endpoints Settings in the Microsoft Defender portal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "custom network indicators"
      },
      {
        "letter": "B",
        "text": "live response for servers"
      },
      {
        "letter": "C",
        "text": "endpoint detection and response (EDR) in block mode"
      },
      {
        "letter": "D",
        "text": "web content filtering"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Allowing or blocking specific IP addresses and URLs in Microsoft Defender for Endpoint requires the Custom network indicators feature to be turned on first, found under Settings > Endpoints > Advanced features; without enabling this toggle, custom IP and URL indicators you create will not be enforced even though they exist. Live response for servers (B), EDR in block mode (C), and web content filtering (D) are unrelated settings that do not govern enforcement of custom IP/URL allow or block indicators.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/indicator-ip-domain"
  },
  {
    "id": "ed-43-596f7520",
    "number": 54,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "drag-drop",
    "text": "You have an Azure subscription that contains the users shown in the following table.\n\nYou need to delegate the following tasks:\n-Enable Microsoft Defender for Servers on virtual machines.\n-Review security recommendations and enable server vulnerability scans.\nThe solution must use the principle of least privilege.\nWhich user should perform each task? To answer, drag the appropriate users to the correct tasks. Each user may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNote: Each correct selection is worth one point.\nSelect and Place:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/beeba22c-d44d-442c-9871-dff059511be3.jpg",
      "https://www.exam-dumps.net/images/exams/SC-200/069ed214-f28a-4556-b35f-72b3baab7f6a.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/70ab7e8e-3fdc-4e69-bb79-8d383a9874c6.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a drag-and-drop question whose answer is shown only in an image, so the lettered answer cannot be independently re-verified here and is kept as originally recorded. Conceptually, the scenario tests least-privilege role assignment in Microsoft Defender for Cloud: enabling a Defender plan (Defender for Servers) on resources requires a role with write access at the subscription/resource level (such as Contributor or Owner), while reviewing recommendations and configuring vulnerability scanning can be done with the narrower Security Admin / Security Reader-type roles built for Defender for Cloud. The task is to match each built-in Azure role to the minimum privilege needed for each action rather than over-granting Owner/Contributor to everyone.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/permissions"
  },
  {
    "id": "ed-44-596f7520",
    "number": 55,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "hotspot",
    "text": "You have a Microsoft 365 E5 subscription.\nYou need to create a hunting query that will return every email that contains an attachment named Document.pdf. The query must meet the following requirements:\n-Only show emails sent during the last hour.\n-Optimize query performance.\nHow should you complete the query? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/caa39d92-e221-4d21-b78c-b3f0a900a2fc.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/12c8850a-5aa3-43a6-bccc-de0297a3a642.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a hotspot question whose answer options are only visible in an image, so the recorded answer is kept as-is. Conceptually, the query needs to search the EmailAttachmentInfo (or EmailEvents joined with EmailAttachmentInfo) table for FileName == \"Document.pdf\", and for performance it must apply the time filter (where Timestamp > ago(1h)) as early as possible in the query so Advanced Hunting/KQL can prune data before evaluating the more expensive string filter. Placing broad, indexed filters like time range first is the standard KQL performance optimization pattern used throughout Microsoft Defender XDR hunting guidance.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-best-practices"
  },
  {
    "id": "ed-45-596f7572",
    "number": 56,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "Your company has an on-premises network that uses Microsoft Defender for Identity.\nThe Microsoft Secure Score for the company includes a security assessment associated with unsecure Kerberos delegation.\nYou need remediate the security risk.\nWhat should you do?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Disable legacy protocols on the computers listed as exposed entities."
      },
      {
        "letter": "B",
        "text": "Enforce LDAP signing on the computers listed as exposed entities."
      },
      {
        "letter": "C",
        "text": "Modify the properties of the computer objects listed as exposed entities."
      },
      {
        "letter": "D",
        "text": "Install the Windows Local Administrator Password Solution (Windows LAPS) extension on the computers listed as exposed entities."
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "The Microsoft Defender for Identity \"Unsecure Kerberos delegation\" security assessment flags computer (or user) objects configured for unconstrained or risky constrained Kerberos delegation. The official remediation is to open the exposed entity's AD object properties and change the delegation setting — for example, selecting \"Trust this computer for delegation to specified services only\" instead of unconstrained delegation, or removing delegation entirely — which is exactly what \"modify the properties of the computer objects\" (C) describes. Disabling legacy protocols (A), enforcing LDAP signing (B), and deploying LAPS (D) address unrelated Secure Score findings (legacy auth, clear-text credentials, and local admin password reuse, respectively), not delegation risk.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-for-identity/security-posture-assessments/accounts"
  },
  {
    "id": "ed-46-596f7520",
    "number": 57,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 subscription that uses Microsoft 365 Defender.\nA remediation action for an automated investigation quarantines a file across multiple devices.\nYou need to mark the file as safe and remove the file from quarantine on the devices.\nWhat should you use in the Microsoft 365 Defender portal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "From the History tab in the Action center, revert the actions."
      },
      {
        "letter": "B",
        "text": "From the investigation page, review the AIR processes."
      },
      {
        "letter": "C",
        "text": "From Quarantine from the Review page, modify the rules."
      },
      {
        "letter": "D",
        "text": "From Threat tracker, review the queries."
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "In the Microsoft Defender XDR Action center, the History tab logs every automated or manual remediation action, including file quarantine events, and lets an admin select the action and choose Undo to revert it across all affected devices at once. This directly removes the file from quarantine and marks it as not-malicious going forward, which is what the scenario requires. Reviewing AIR processes (B) or Threat tracker queries (D) only shows investigation details without reversing the action, and the Quarantine settings under the Review page (C) control policy, not individual file restoration.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/m365d-autoir-actions"
  },
  {
    "id": "ed-47-596f7520",
    "number": 58,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.\nYou need to review new attack techniques discovered by Microsoft and identify vulnerable resources in the subscription. The solution must minimize administrative effort.\nWhich blade should you use in the Microsoft Defender portal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Advanced hunting"
      },
      {
        "letter": "B",
        "text": "Threat analytics"
      },
      {
        "letter": "C",
        "text": "Incidents & alerts"
      },
      {
        "letter": "D",
        "text": "Learning hub"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Threat analytics is Microsoft Defender XDR's built-in threat-intelligence dashboard, curated by Microsoft security researchers, that surfaces active threat actors, newly observed attack techniques, critical vulnerabilities, and prevalent malware, and automatically correlates each report with your tenant's incidents, impacted assets, and exposed/vulnerable devices. Because the reports and exposure data are generated automatically by Microsoft, this blade requires minimal administrative effort compared to manually building custom queries in Advanced hunting (A) or triaging individual Incidents & alerts (C); Learning hub (D) only provides training content, not threat or vulnerability data.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/threat-analytics"
  },
  {
    "id": "ed-48-596f7520",
    "number": 59,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "hotspot",
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.\nYour network contains an on-premises Active Directory Domain Services (AD DS) domain that syncs with a Microsoft Entra tenant.\nYou need to identify the 100 most recent sign-in attempts recorded on devices and AD DS domain controllers.\nHow should you complete the KQL query? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/91960026-9124-4a99-a9f3-e2b9e61537f3.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/903ed14d-aa3d-4460-9173-8404a51d4fda.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a hotspot question with the real answer only visible in an image, so the recorded letter is kept unchanged. Conceptually, to get the 100 most recent sign-ins across both devices and on-premises AD DS domain controllers, the query must union two Advanced Hunting tables — DeviceLogonEvents (endpoint sign-ins) and IdentityLogonEvents (which, once Defender for Identity sensors are deployed on domain controllers, captures AD authentication events) — sort the combined results by Timestamp in descending order, and limit the output with take 100 (or top 100 by Timestamp).",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identitylogonevents-table"
  },
  {
    "id": "ed-50-596f7520",
    "number": 60,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Defender XDR.\nYou need to ensure that you can investigate threats by using data in the unified audit log of Microsoft Defender for Cloud Apps.\nWhat should you configure first?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "the User enrichment settings"
      },
      {
        "letter": "B",
        "text": "the Azure connector"
      },
      {
        "letter": "C",
        "text": "the Microsoft 365 connector"
      },
      {
        "letter": "D",
        "text": "the Automatic log upload settings"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "To investigate activity using the unified audit log inside Microsoft Defender for Cloud Apps, you must first connect Microsoft 365 as an API-connected app (the \"Microsoft 365 connector\", formerly the Office 365 connector) under Settings > Cloud Apps > Connected apps. This connector uses the Office 365 Management API to pull admin, user, and sign-in activity into Defender for Cloud Apps so it becomes available for investigation and policy correlation. User enrichment (A) only adds HR attributes to identities, the Azure connector (B) covers Azure platform activity rather than Microsoft 365 audit data, and automatic log upload (D) is used for discovering Shadow IT from firewall/proxy logs, not for Microsoft 365 audit events.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/enable-instant-visibility-protection-and-governance-actions-for-your-apps"
  },
  {
    "id": "ed-51-596f7520",
    "number": 61,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "hotspot",
    "text": "You have a custom Microsoft Defender XDR detection rule that includes the following KQL query.\n\nFor each of the following statements, select Yes if True. Otherwise, select No.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/d0024be6-bd98-4dd3-988e-529ff309fcf5.jpg",
      "https://www.exam-dumps.net/images/exams/SC-200/a19f20ec-66cb-4b50-9033-fa85daf14cc0.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/f09fe9cb-528c-4398-986e-5855503351ca.jpg",
    "source": "exam-dumps.net",
    "explanation": "This hotspot question's true/false answers are only visible in an image that cannot be inspected, so the recorded value is retained unchanged. The question is testing the ability to read a custom Microsoft Defender XDR detection rule's KQL and determine behavior such as which entities trigger alerts, how frequently the rule runs, and what actions or exclusions apply — concepts fully documented in Microsoft's custom detection rules guidance (rule logic, scheduling frequency, lookback period, and impacted entities).",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules"
  },
  {
    "id": "ed-52-596f7520",
    "number": 62,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have an Azure subscription that uses Microsoft Defender for Servers Plan 1 and contains a server named Server1.\nYou enable agentless scanning.\nYou need to prevent Server1 from being scanned. The solution must minimize administrative effort.\nWhat should you do?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Create an exclusion tag."
      },
      {
        "letter": "B",
        "text": "Upgrade the subscription to Defender for Servers Plan 2."
      },
      {
        "letter": "C",
        "text": "Create a governance rule."
      },
      {
        "letter": "D",
        "text": "Create an exclusion group."
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Microsoft Defender for Cloud lets you exclude specific machines from agentless scanning by configuring an exclusion tag (a tag name:value pair) in the Defender for Servers/Defender CSPM plan settings; any machine carrying that tag is skipped during the periodic agentless discovery and scan cycle, with no code or policy changes required — satisfying the \"minimize administrative effort\" requirement. Upgrading to Plan 2 (B) is unnecessary and moves in the wrong direction since agentless scanning is already enabled, and \"exclusion group\" (D) and \"governance rule\" (C) are not the mechanisms Microsoft documents for excluding machines from agentless scanning.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/exclude-machines-agentless-scanning"
  },
  {
    "id": "ed-54-596f7572",
    "number": 63,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "hotspot",
    "text": "Your network contains an on-premises Active Directory Domain Services (AD DS) domain that syncs with a Microsoft Entra tenant.\nYou have a Microsoft 365 E5 subscription that uses Microsoft Defender 365.\nYou need to identify all the interactive authentication attempts by the users in the finance department of your company.\nHow should you complete the KQL query? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/4159f3b4-e51f-4ee2-9609-7fcab48c457a.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/a14e4b6c-0ea1-4eb2-ac27-cb2eb384928f.jpg",
    "source": "exam-dumps.net",
    "explanation": "This hotspot question's answer options are only visible in an image, so the recorded letter is kept unchanged. Conceptually, to find interactive sign-ins by finance-department users, the query would hunt in IdentityLogonEvents (for on-premises AD DS authentications synced via Defender for Identity) and/or DeviceLogonEvents, filtering on LogonType == \"Interactive\" and joining or filtering on the AccountName/department attribute for the finance users, which is the standard pattern Microsoft documents for identity logon hunting.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identitylogonevents-table"
  },
  {
    "id": "ed-55-596f7520",
    "number": 64,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.\nYou need to identify any devices that triggered a malware alert and collect evidence related to the alert. The solution must ensure that you can use the results to initiate device isolation for the affected devices.\nWhat should you use in the Microsoft 365 Defender portal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "incidents"
      },
      {
        "letter": "B",
        "text": "Remediation"
      },
      {
        "letter": "C",
        "text": "Investigations"
      },
      {
        "letter": "D",
        "text": "Advanced hunting"
      }
    ],
    "correctLetters": [
      "D"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Advanced hunting lets an analyst write a custom KQL query (for example, against the AlertInfo/AlertEvidence or DeviceEvents tables) to list every device that triggered a malware alert, and because the results include the DeviceId column, the analyst can select matching rows directly in the results grid and use the built-in \"Take action\" wizard to isolate those devices or collect an investigation package without leaving the query view. Incidents (A) group related alerts but don't let you bulk-select arbitrary query-derived device lists, Remediation (B) only shows actions already taken, and Investigations (C) tracks automated investigation status rather than letting you build a custom device list and act on it.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-take-action"
  },
  {
    "id": "ed-56-596f7520",
    "number": 65,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "hotspot",
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Purview and contains a user named User1.\nUser1 shares a Microsoft Power BI report file from the Microsoft OneDrive folder of your company to an external user by using Microsoft Teams.\nYou need to identify which Power BI report file was shared.\nHow should you configure the search? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/3aed89c8-f1cb-4de4-9aaa-0657777717e9.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/1b2b6b76-a070-4082-92b3-cf62a3c7f301.jpg",
    "source": "exam-dumps.net",
    "explanation": "This hotspot question's exact configuration is only visible in an image, so the recorded answer is retained unchanged. Conceptually, this scenario is about using Microsoft Purview Content search / eDiscovery to locate a specific file shared externally: the search must be scoped to the OneDrive location of the sharing user (or the relevant SharePoint/OneDrive content source) and filtered by file type/name (Power BI .pbix report) and the sharing activity, rather than searching mailboxes, since the file was shared from OneDrive via Teams.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/ediscovery-search-for-content"
  },
  {
    "id": "ed-57-596f7520",
    "number": 66,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 subscription that uses Microsoft Purview and Microsoft Teams.\nYou have a team named Team1 that has a project named Project1.\nYou need to identify any Project1 files that were stored on the team site of Team1 between February 1, 2023, and February 10, 2023.\nWhich KQL query should you run?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "(c:c)(Project1)(date=(2023-02-01)..date=(2023-02-10))"
      },
      {
        "letter": "B",
        "text": "AuditLogs | where Timestamp between (datetime(2023-02-01)..datetime(2023-02-10)) | where FileName contains “Project1”"
      },
      {
        "letter": "C",
        "text": "Project1(c:c)(date=2023-02-01..2023-02-10)"
      },
      {
        "letter": "D",
        "text": "AuditLogs | where Timestamp > ago(10d) | where FileName contains “Project1”"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Microsoft Purview content search (and eDiscovery) uses Keyword Query Language, not Kusto KQL, and supports a condition-card shorthand where (c:c) scopes the search to a specific content location/site and a date range is expressed with the \"..\" range operator, e.g. date=2023-02-01..2023-02-10. Option C, Project1(c:c)(date=2023-02-01..2023-02-10), follows this exact keyword-search syntax to find files named/containing \"Project1\" on the team site within the date window. Options B and D use Kusto-style \"AuditLogs | where ...\" syntax, which is not valid Purview content-search query syntax, and option A reverses the correct token order and malforms the date range with duplicated \"date=\" tokens.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/ediscovery-keyword-queries-and-search-conditions"
  },
  {
    "id": "ed-58-596f7520",
    "number": 67,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.\nYou need to create a query that will link the AlertInfo, AlertEvidence, and DeviceLogonEvents tables. The solution must return all the rows in the tables.\nWhich operator should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "search *"
      },
      {
        "letter": "B",
        "text": "union kind = inner"
      },
      {
        "letter": "C",
        "text": "join kind = inner"
      },
      {
        "letter": "D",
        "text": "evaluate hint.remote ="
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "The Kusto union operator \"takes two or more tables and returns the rows of all of them\" regardless of the kind parameter — kind=inner vs kind=outer only changes which columns are kept in the result (common columns only vs. all columns from all tables), not which rows are returned. So union kind=inner still returns every row from AlertInfo, AlertEvidence, and DeviceLogonEvents, satisfying the requirement to link the tables and return all rows. join kind=inner (C) would instead match rows on a key and drop non-matching rows, search * (A) searches across tables for a term rather than linking them, and evaluate hint.remote (D) is unrelated to combining tables.",
    "referenceUrl": "https://learn.microsoft.com/en-us/kusto/query/union-operator"
  },
  {
    "id": "ed-59-596f7520",
    "number": 68,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 E5 subscription that contains 100 Windows 10 devices.\nYou onboard the devices to Microsoft Defender 365.\nYou need to ensure that you can initiate remote shell connections to the onboarded devices from the Microsoft 365 Defender portal.\nWhat should you do first?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Modify the permissions for Microsoft 365 Defender."
      },
      {
        "letter": "B",
        "text": "Create a device group."
      },
      {
        "letter": "C",
        "text": "From Advanced features in the Endpoints settings of the Microsoft 365 Defender portal, enable automated investigation."
      },
      {
        "letter": "D",
        "text": "Configure role-based access control (RBAC)."
      }
    ],
    "correctLetters": [
      "D"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Initiating a live response (remote shell) session in Microsoft Defender for Endpoint requires both that the Live response advanced feature be turned on and that the requesting analyst holds the appropriate role permissions, since live response commands (basic or advanced) are gated by role-based access control assigned per device group. Among the given choices, configuring RBAC (D) is the control that determines whether a user is authorized to open a live response session at all, which is why it is treated as the necessary first step here; creating a device group (B) alone grants no capability, enabling automated investigation (C) governs AIR playbooks rather than live response, and modifying generic portal permissions (A) is not how Defender for Endpoint's live response authorization model works.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/live-response"
  },
  {
    "id": "ed-60-596f7520",
    "number": 69,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "hotspot",
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint.\nYou need to create a detection rule that meets the following requirements:\n-Is triggered when a device that has critical software vulnerabilities was active during the last hour\n-Limits the number of duplicate results\nHow should you complete the KQL query? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/2a6dbde2-ce43-4962-bb17-6f182423e790.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/31c73865-5d02-4e6d-8506-4a5f864181e6.jpg",
    "source": "exam-dumps.net",
    "explanation": "This hotspot question's exact query fragments are only visible in an image, so the recorded answer is kept unchanged. Conceptually, a custom detection rule meeting these requirements would filter DeviceTvmSoftwareVulnerabilities (or a join with it) for critical severity, combine it with recent device activity using where Timestamp > ago(1h) (or LastSeen within the last hour), and apply a summarize/distinct (or arg_max by DeviceId) step to collapse duplicate rows per device, since Microsoft's custom detection documentation specifically recommends deduplication for rules that would otherwise generate one alert per matching row.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules"
  },
  {
    "id": "ed-61-596f7520",
    "number": 70,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "hotspot",
    "text": "You have a Microsoft 365 E5 subscription that uses Microsoft Teams.\nYou need to perform a content search of Teams chats for a user by using the Microsoft Purview compliance portal. The solution must minimize the scope of the search.\nHow should you configure the content search? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/d364ac61-c85b-44a1-8f26-506c05964ce5.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/c8aaf516-1da9-4251-97d7-9d84802c82ac.jpg",
    "source": "exam-dumps.net",
    "explanation": "This hotspot question's configuration is only visible in an image, so the recorded answer is kept unchanged. Conceptually, to minimize the scope of a Microsoft Purview content search for one user's Teams chats, the search should target that specific user's mailbox/Teams location (where 1:1 and group chat content is stored) and scope the condition to the Teams chat content type rather than searching all mailboxes or all of Exchange/SharePoint, consistent with Purview's guidance on locating Teams conversation content through content search.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/ediscovery-search-for-content"
  },
  {
    "id": "ed-62-596f7520",
    "number": 71,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 E5 subscription that contains 100 Linux devices. The devices are onboarded to\nMicrosoft Defender XDR.\nYou need to initiate the collection of investigation packages from the devices by using the Microsoft Defender portal.\nWhich response action should you use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Run antivirus scan"
      },
      {
        "letter": "B",
        "text": "Initiate Automated Investigation"
      },
      {
        "letter": "C",
        "text": "Collect investigation package"
      },
      {
        "letter": "D",
        "text": "Initiate Live Response Session"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "\"Collect investigation package\" is a Defender for Endpoint response action, explicitly documented as supported on Linux and macOS devices, that downloads a forensic .zip package (processes, network connections, persistence mechanisms, logs, etc.) from the device to help understand the attacker's tools and techniques. Initiating a live response session (D) opens an interactive shell rather than collecting a packaged forensic bundle in one action, running an antivirus scan (A) only triggers a malware scan, and \"Initiate Automated Investigation\" (B) starts an AIR playbook rather than gathering a forensic package.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/respond-machine-alerts"
  },
  {
    "id": "ed-64-596f7520",
    "number": 72,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 subscription that uses Microsoft Purview.\nYour company has a project named Project1.\nYou need to identify all the email messages that have the word Project1 in the subject line. The solution must search only the mailboxes of users that worked on Project1.\nWhat should you do?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Perform a user data search."
      },
      {
        "letter": "B",
        "text": "Create a records management disposition."
      },
      {
        "letter": "C",
        "text": "Perform an audit search."
      },
      {
        "letter": "D",
        "text": "Perform a content search."
      }
    ],
    "correctLetters": [
      "D"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Content search (in Microsoft Purview eDiscovery) lets you search Exchange mailboxes using KQL-style conditions such as subject:\"Project1\", and you can scope the search to specific mailbox locations by choosing only the mailboxes of the users who worked on Project1 instead of searching the entire organization. A user data search is an older/less precise concept and isn't the named Purview tool; a records management disposition only handles retention/deletion of declared records, not keyword search; and an audit search queries the unified audit log for activities (who did what), not message subject-line content.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/ediscovery-content-search-overview"
  },
  {
    "id": "ed-65-596f7520",
    "number": 73,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "multi-select",
    "text": "You have a Microsoft 365 subscription that uses Microsoft Defender XDR.\nYou discover that when Microsoft Defender for Endpoint generates alerts for a commonly used executable file, it causes alert fatigue.\nYou need to tune the alerts.\nWhich two actions can an alert tuning rule perform for the alerts? Each correct answer presents a complete solution.\nNote: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "delete"
      },
      {
        "letter": "B",
        "text": "hide"
      },
      {
        "letter": "C",
        "text": "resolve"
      },
      {
        "letter": "D",
        "text": "merge"
      },
      {
        "letter": "E",
        "text": "assign"
      }
    ],
    "correctLetters": [
      "B",
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "A custom alert tuning rule in Microsoft Defender XDR can take one of three actions on matching alerts: Hide alert (suppresses it and prevents incident creation; Defender for Endpoint alerts only), Resolve alert (automatically marks the alert and its incident as resolved), or Set as behavior (converts it to a non-alerting behavior record). Of the given options, only \"hide\" and \"resolve\" correspond to real tuning-rule actions; delete, merge, and assign are not actions that an alert tuning rule can perform.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/investigate-alerts"
  },
  {
    "id": "ed-66-4e6f7465",
    "number": 74,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\nYou have a Microsoft 365 subscription.\nYou have 1,000 Windows devices that have a third-party antivirus product installed and Microsoft Defender Antivirus in passive mode.\nAll Windows devices are onboarded to Microsoft Defender for Endpoint.\nYou need to ensure that the devices are protected from malicious artifacts that were undetected by the third-party antivirus product.\nSolution: You configure endpoint detection and response (EDR) in block mode.\nDoes this meet the goal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Yes"
      },
      {
        "letter": "B",
        "text": "No"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Endpoint detection and response (EDR) in block mode is specifically designed for this exact scenario: Microsoft Defender Antivirus is not the primary AV and runs in passive mode (because a third-party AV is active), and EDR in block mode lets Defender Antivirus take post-breach remediation actions on malicious artifacts that the primary, non-Microsoft antivirus product missed. Since the devices are already onboarded to Defender for Endpoint, enabling EDR in block mode directly satisfies the requirement, so the answer is Yes.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/edr-in-block-mode"
  },
  {
    "id": "ed-69-596f7520",
    "number": 75,
    "topic": "Exam Topic: Mitigate threats using Microsoft 365 Defender ( Question Set 4 )",
    "type": "single-choice",
    "text": "You have a Microsoft 365 subscription that uses Microsoft Defender XDR.\nYou need to implement deception rules. The solution must ensure that you can limit the scope of the rules.\nWhat should you create first?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "device groups"
      },
      {
        "letter": "B",
        "text": "device tags"
      },
      {
        "letter": "C",
        "text": "honeytoken entity tags"
      },
      {
        "letter": "D",
        "text": "sensitive entity tags"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "When you create a deception rule in Microsoft Defender XDR, the rule's Scope section lets you plant lures on either all Windows client devices or only on devices that carry specific tags. To limit a deception rule to a subset of devices, you must therefore create and apply device tags to those devices first, before the tag can be selected as the rule's scope. Device groups are a Defender for Endpoint RBAC/permissions construct used for role-based access, and honeytoken/sensitive entity tags are unrelated identity-classification tags, not the mechanism used to scope deception rules.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/configure-deception"
  },
  {
    "id": "ed-79-596f7520",
    "number": 76,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "hotspot",
    "text": "You have an Azure subscription that has Microsoft Defender for Cloud enabled for all supported resource types.\nYou create an Azure logic app named LA1.\nYou plan to use LA1 to automatically remediate security risks detected in Defender for Cloud.\nYou need to test LA1 in Security Center.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/5ee14983-8235-47cb-9080-8b0c1e5b0f7b.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/973264b7-c372-4c18-8489-18193589e6da.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a hotspot question whose exact selections are only visible in an image, so the recorded answer is kept unchanged. Conceptually, the scenario tests how to validate a remediation Logic App inside Microsoft Defender for Cloud (formerly Security Center): you open an existing alert's \"Take action\" tab and use the \"Trigger automated response\" section to manually fire LA1 against that alert (or use the Workflow automation blade's \"Trigger logic app\" option), which lets you confirm the app runs correctly without waiting for a real detection.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/manage-respond-alerts"
  },
  {
    "id": "ed-80-596f7520",
    "number": 77,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "single-choice",
    "text": "You have an Azure subscription that uses Microsoft Defender for Cloud.\nYou have 100 virtual machines in a resource group named RG1.\nYou assign the Security Admin roles to a new user named SecAdmin1.\nYou need to ensure that SecAdmin1 can apply quick fixes to the virtual machines by using Microsoft Defender for Cloud. The solution must use the principle of least privilege.\nWhich role should you assign to SecAdmin1?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "the Security Reader role for the subscription"
      },
      {
        "letter": "B",
        "text": "the Contributor for the subscription"
      },
      {
        "letter": "C",
        "text": "the Contributor role for RG1"
      },
      {
        "letter": "D",
        "text": "the Owner role for RG1"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Applying a quick fix (the \"Fix\" action on a security recommendation) in Microsoft Defender for Cloud requires the Contributor (or Owner) role, because Security Admin only grants permission to edit security policies and dismiss alerts/recommendations, not to remediate them. Assigning Contributor scoped to RG1 alone (rather than at the subscription level) follows least privilege, since SecAdmin1 only needs to fix recommendations on the 100 VMs that live in that resource group. Security Reader is read-only and cannot apply fixes, and Contributor/Owner at the subscription level would grant unnecessary broader access.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/permissions"
  },
  {
    "id": "ed-81-596f7520",
    "number": 78,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "multi-select",
    "text": "You provision a Linux virtual machine in a new Azure subscription.\nYou enable Microsoft Defender for Cloud and onboard the virtual machine to Defender for Cloud.\nYou need to verify that an attack on the virtual machine triggers an alert in Defender for Cloud.\nWhich two Bash commands should you run on the virtual machine? Each correct answer presents part of the solution.\nNote: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "cp /bin/echo ./asc_alerttest_662jfi039n"
      },
      {
        "letter": "B",
        "text": "./alerttest testing eicar pipe"
      },
      {
        "letter": "C",
        "text": "cp /bin/echo ./alerttest"
      },
      {
        "letter": "D",
        "text": "./asc_alerttest_662jfi039n testing eicar pipe"
      }
    ],
    "correctLetters": [
      "A",
      "D"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Microsoft's documented Linux alert-validation procedure is to first copy a harmless executable (like /bin/echo) to a file specifically named ./asc_alerttest_662jfi039n, and then execute that renamed file with the arguments \"testing eicar pipe\". Defender for Cloud recognizes this specific filename-and-argument pattern as a built-in test signal and raises a sample alert within about 5-10 minutes. The generic name \"alerttest\" (used in options B and C) is not the recognized test string, so those commands won't trigger a validation alert.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/alert-validation"
  },
  {
    "id": "ed-82-596f7520",
    "number": 79,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "single-choice",
    "text": "You create an Azure subscription named sub1.\nIn sub1, you create a Log Analytics workspace named workspace1.\nYou enable Microsoft Defender for Cloud and configure Defender for Cloud to use workspace1.\nYou need to collect security event logs from the Azure virtual machines that report to workspace1.\nWhat should you do?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "From Defender for Cloud, enable data collection"
      },
      {
        "letter": "B",
        "text": "In sub1, register a provider."
      },
      {
        "letter": "C",
        "text": "From Defender for Cloud, create a Workflow automation."
      },
      {
        "letter": "D",
        "text": "In workspace1, create a workbook."
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "In Microsoft Defender for Cloud (classic Log Analytics agent-based experience), raw Windows security event logs are stored in the connected Log Analytics workspace only if you explicitly turn on the Data collection setting (choosing a tier such as Common, Minimal, or All Events) from Defender for Cloud's Pricing & settings / Environment settings. The Log Analytics agent itself still evaluates security events for threat detection regardless of this setting, but storing/collecting the raw events for search and investigation in workspace1 requires enabling data collection. Registering a resource provider, creating a workbook, or configuring workflow automation do not control whether security events are ingested into the workspace.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/data-collection-rule"
  },
  {
    "id": "ed-83-596f7520",
    "number": 80,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "drag-drop",
    "text": "You create a new Azure subscription and start collecting logs for Azure Monitor.\nYou need to configure Azure Security Center to detect possible threats related to sign-ins from suspicious IP addresses to Azure virtual machines. The solution must validate the configuration.\nWhich three actions should you perform in a sequence? To answer, move the appropriate actions from the list of action to the answer area and arrange them in the correct order.\nSelect and Place:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/9a7b566d-264e-4e5b-96ce-bdfa4cee4f4e.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/70a42542-9887-42c7-8dc5-9c2354ff0515.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a drag-and-drop question whose exact ordered steps are only visible in an image, so the recorded answer is kept unchanged. Conceptually, the scenario tests the end-to-end flow for detecting suspicious sign-ins to Azure VMs and validating it: enable Microsoft Defender for Cloud (the Defender for Servers plan, which ingests sign-in/security data), ensure the VM is onboarded/monitored, and then generate a sample or simulated alert to confirm the suspicious-IP sign-in detection is actually working end-to-end rather than just assuming the configuration is correct.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/alert-validation"
  },
  {
    "id": "ed-84-596f7572",
    "number": 81,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "single-choice",
    "text": "Your company uses Azure Security Center and Azure Defender.\nThe security operations team at the company informs you that it does NOT receive email notifications for security alerts.\nWhat should you configure in Security Center to enable the email notifications?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Security solutions"
      },
      {
        "letter": "B",
        "text": "Security policy"
      },
      {
        "letter": "C",
        "text": "Pricing & settings"
      },
      {
        "letter": "D",
        "text": "Security alerts"
      },
      {
        "letter": "E",
        "text": "Azure Defender"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "In the classic Azure Security Center experience, email notifications for security alerts (who receives them and at which severity) are configured from the Pricing & settings blade for the subscription, under its Email notifications tab, not from Security policy (which governs which policies/initiatives apply) or Security alerts (which only lists/manages existing alerts). In the modern Defender for Cloud portal this same capability has moved to Environment settings > Email notifications, but it remains a subscription-level settings/pricing area rather than a policy or alerts blade.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/configure-email-notifications"
  },
  {
    "id": "ed-85-596f7520",
    "number": 82,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "drag-drop",
    "text": "You have resources in Azure and Google cloud.\nYou need to ingest Google Cloud Platform (GCP) data into Azure Defender.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/3368d3cb-f37a-44c9-800c-da6c44cf0af4.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/6ddb0043-fc37-47be-8727-3bef6ec9e438.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a drag-and-drop question whose exact ordered steps are only visible in an image, so the recorded answer is kept unchanged. Conceptually, ingesting GCP data into Microsoft Defender for Cloud follows a fixed sequence: from Environment settings, add a new GCP environment/connector, configure the connector's project or organization scope, select which Defender plans to enable, configure access by running the generated onboarding script in GCP (which creates the required service accounts/permissions), and finally review and create the connector so Defender for Cloud starts discovering and scanning GCP resources.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/quickstart-onboard-gcp"
  },
  {
    "id": "ed-88-596f7520",
    "number": 83,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "single-choice",
    "text": "You have an Azure subscription that has Microsoft Defender for Cloud enabled for all supported resource types.\nYou need to configure the continuous export of high-severity alerts to enable their retrieval from a third-party security information and event management (SIEM) solution.\nTo which service should you export the alerts?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Azure Cosmos DB"
      },
      {
        "letter": "B",
        "text": "Azure Event Grid"
      },
      {
        "letter": "C",
        "text": "Azure Event Hubs"
      },
      {
        "letter": "D",
        "text": "Azure Data Lake"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Continuous export in Microsoft Defender for Cloud can stream security alerts and recommendations to Log Analytics or to Azure Event Hubs; to make that data retrievable by a third-party SIEM, you export to an Azure Event Hub, which the SIEM then reads from (directly or via a connector/forwarder). Cosmos DB and Data Lake are general-purpose storage services with no built-in continuous-export integration in Defender for Cloud, and Event Grid is an eventing/pub-sub service, not the mechanism Defender for Cloud uses to stream alert data to SIEM tools.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/export-to-siem"
  },
  {
    "id": "ed-89-596f7520",
    "number": 84,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "single-choice",
    "text": "You are responsible for responding to Microsoft Defender for Key Vault alerts.\nDuring an investigation of an alert, you discover unauthorized attempts to access a key vault from a Tor exit node.\nWhat should you configure to mitigate the threat?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Key Vault firewalls and virtual networks"
      },
      {
        "letter": "B",
        "text": "Microsoft Entra ID permissions"
      },
      {
        "letter": "C",
        "text": "role-based access control (RBAC) for the key vault"
      },
      {
        "letter": "D",
        "text": "the access policy settings of the key vault"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "An alert showing access attempts to a key vault from a Tor exit node indicates the vault is reachable from an untrusted/anonymized public network path, so the correct mitigation is to restrict network-level access by configuring the Key Vault firewall and virtual network rules (allowing only trusted networks/private endpoints). Microsoft Entra ID permissions, RBAC for the key vault, and the vault's access policy settings all control who/what identity can authenticate and what operations they can perform once a connection is allowed, but they don't address the underlying issue of the vault being exposed to any public IP, including Tor nodes.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/alerts-azure-key-vault"
  },
  {
    "id": "ed-90-596f7520",
    "number": 85,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "single-choice",
    "text": "You have an Azure subscription that contains a Log Analytics workspace.\nYou need to enable just-in-time (JIT) VM access and network detections for Azure resources.\nWhere should you enable Microsoft Defender for Cloud?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "at the subscription level"
      },
      {
        "letter": "B",
        "text": "at the workspace level"
      },
      {
        "letter": "C",
        "text": "at the resource level"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "Just-in-time (JIT) VM access and network-layer threat detections are capabilities of the Microsoft Defender for Servers plan, which is enabled/priced at the subscription level in Microsoft Defender for Cloud, not at the Log Analytics workspace or individual resource level. Enabling Defender for Cloud only at the workspace level does not turn on JIT access, adaptive application controls, or network detections for the subscription's Azure resources; the plan must be enabled on the subscription itself.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/enable-just-in-time-access"
  },
  {
    "id": "ed-91-596f7520",
    "number": 86,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "multi-select",
    "text": "You use Microsoft Defender for Cloud.\nYou have an Azure Storage account that contains sensitive information.\nYou need to run a PowerShell script if someone accesses the storage account from a suspicious IP address.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNote: Each correct selection is worth one point.",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "From Microsoft Defender for Cloud, add workflow automation."
      },
      {
        "letter": "B",
        "text": "Create an Azure logic app that has a manual trigger."
      },
      {
        "letter": "C",
        "text": "Create an Azure logic app that has a Microsoft Defender for Cloud alert trigger."
      },
      {
        "letter": "D",
        "text": "Create an Azure logic app that has an HTTP trigger."
      },
      {
        "letter": "E",
        "text": "From Microsoft Entra ID, add an app registration."
      }
    ],
    "correctLetters": [
      "A",
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "To automatically run a PowerShell script when Defender for Cloud detects suspicious access to the storage account, you first build an Azure Logic App whose trigger is \"When a Defender for Cloud alert is created or triggered\" (so it fires on the matching alert and can then call the PowerShell script/runbook), and then register that Logic App with Defender for Cloud by adding it as a workflow automation scoped to the relevant alert type/severity. A manual-trigger or HTTP-trigger Logic App would need to be invoked explicitly and wouldn't fire automatically on the alert, and an Entra ID app registration is unrelated to wiring an alert to an automated response.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/workflow-automation"
  },
  {
    "id": "ed-92-596f7520",
    "number": 87,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "hotspot",
    "text": "You manage the security posture of an Azure subscription that contains two virtual machines name vm1 and vm2.\nThe secure score in Azure Security Center is shown in the Security Center exhibit. (Click the Security Center tab.)\n\nAzure Policy assignments are configured as shown in the Policies exhibit. (Click the Policies tab.)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/cc9525e5-5799-457d-9b87-04b0c32b3851.jpg",
      "https://www.exam-dumps.net/images/exams/SC-200/c3b7fcd7-a21d-4bf1-a930-e2290d327227.jpg",
      "https://www.exam-dumps.net/images/exams/SC-200/de15eacb-877d-49b6-b782-8f964e744811.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/0463544c-f172-4b36-ae7e-c6f392506539.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a hotspot question whose exact Yes/No selections are only visible in the exhibit images, so the recorded answer is kept unchanged. Conceptually, the scenario tests how Secure Score is calculated from Azure Policy assignments: a recommendation only contributes to (or is counted against) a resource's Secure Score if the underlying policy definition for that recommendation is actually assigned and enabled (not excluded/disabled) at the scope containing that resource, so vm1 and vm2 can be affected differently depending on which policy/initiative assignments apply to each of them.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/secure-score-security-controls"
  },
  {
    "id": "ed-93-596f7520",
    "number": 88,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "drag-drop",
    "text": "You are informed of a new common vulnerabilities and exposures (CVE) vulnerability that affects your environment.\nYou need to use Microsoft Defender portal to request remediation from the team responsible for the affected systems if there is a documented active exploit available.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/0444427c-8c8c-4820-8459-239b8c6d81af.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/4a032eca-cf88-4aca-b77d-2f9d99f34646.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a drag-and-drop question whose exact ordered steps are only visible in an image, so the recorded answer is kept unchanged. Conceptually, the workflow for requesting remediation of a newly disclosed CVE with a known active exploit is: locate the CVE in Vulnerability management > Weaknesses and confirm it shows a documented/active exploit, open the associated security recommendation to see the exposed/affected devices, and then select \"Request remediation\" on that recommendation to send a remediation request (optionally creating an Intune ticket) to the team responsible for those devices.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-vulnerability-management/tvm-remediation"
  },
  {
    "id": "ed-94-596f7520",
    "number": 89,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "single-choice",
    "text": "You use Azure Security Center.\nYou receive a security alert in Security Center.\nYou need to view recommendations to resolve the alert in Security Center.\nWhat should you do?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "From Security alerts, select the alert, select Take Action, and then expand the Prevent future attacks section."
      },
      {
        "letter": "B",
        "text": "From Security alerts, select Take Action, and then expand the Mitigate the threat section."
      },
      {
        "letter": "C",
        "text": "From Regulatory compliance, download the report."
      },
      {
        "letter": "D",
        "text": "From Recommendations, download the CSV report."
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "On a security alert's details pane in Azure Security Center / Defender for Cloud, the \"Take action\" tab's \"Mitigate the threat\" section provides the manual remediation/investigation steps specifically meant to resolve that alert, which is exactly what's being asked for. \"Prevent future attacks\" is a different section on the same tab that surfaces hardening recommendations to reduce the attack surface going forward, not steps to resolve the current alert; Regulatory compliance reports and Recommendations CSV exports are unrelated to an individual alert's remediation guidance.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/manage-respond-alerts"
  },
  {
    "id": "ed-95-596f7520",
    "number": 90,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "single-choice",
    "text": "You have a suppression rule in Microsoft Defender for Cloud for 10 virtual machines that are used for testing. The virtual machines run Windows Server.\nYou are troubleshooting an issue on the virtual machines.\nIn Microsoft Defender for Cloud, you need to view the alerts generated by the virtual machines during the last five days.\nWhat should you do?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Change the rule expiration date of the suppression rule."
      },
      {
        "letter": "B",
        "text": "Change the state of the suppression rule to Disabled."
      },
      {
        "letter": "C",
        "text": "Modify the filter for the Security alerts page."
      },
      {
        "letter": "D",
        "text": "View the Windows event logs on the virtual machines."
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "exam-dumps.net",
    "explanation": "A suppression rule hides matching alerts going forward but doesn't delete past alerts or change what Defender for Cloud already recorded. To see the alerts generated on those 10 VMs during the last five days, you adjust the filter and time range on the Security alerts page so the suppressed alerts are shown again. Changing the rule's expiration date (A) or disabling the rule (B) only affects future alert suppression, not the retrieval of already-suppressed alerts from the past. Reviewing local Windows event logs (D) does not give you Defender for Cloud's correlated, classified security alerts.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/alerts-suppression-rules"
  },
  {
    "id": "ed-96-596f7520",
    "number": 91,
    "topic": "Exam Topic: Mitigate threats using Microsoft Defender for Cloud ( Question Set 5 )",
    "type": "hotspot",
    "text": "You have an Azure Storage account that will be accessed by multiple Azure Functions apps during the development of an application.\nYou need to hide Microsoft Defender for Cloud alerts for the storage account.\nWhich entity type and field should you use in a suppression rule? To answer, select the appropriate options in the answer area.\nNote: Each correct selection is worth one point.\nHot Area:",
    "images": [
      "https://www.exam-dumps.net/images/exams/SC-200/a41e15f2-42c1-4492-a11e-9feafc451987.jpg"
    ],
    "choices": [],
    "correctLetters": [
      "A"
    ],
    "answerImage": "https://www.exam-dumps.net/images/exams/SC-200/a45ceea5-145c-409f-8ade-e2e5b1f06627.jpg",
    "source": "exam-dumps.net",
    "explanation": "This is a hotspot question whose exact pixel-level selections can't be verified from the scraped data, so the originally recorded selection is kept as-is. Conceptually, a Defender for Cloud suppression rule is scoped using an entity type (such as Resource ID, IP address, or Login) and a matching field value for that entity; to silence alerts tied specifically to one storage account during development, the entity type would be the resource identifier and the field would hold that storage account's resource ID, so only alerts for that resource are hidden rather than alerts tenant-wide. This lets teams suppress known, expected noise from a specific resource without disabling detection elsewhere.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/alerts-suppression-rules"
  },
  {
    "id": "spt-SCM1-D1-01",
    "number": 92,
    "topic": "Manage a security operations environment",
    "type": "multi-select",
    "text": "A SOC wants new high-severity Microsoft Sentinel incidents to be assigned to the Tier 2 queue and moved to a consistent status before any external response workflow runs. Which TWO actions can an automation rule handle directly as part of incident management?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Assign the incident to a designated owner"
      },
      {
        "letter": "B",
        "text": "Change the incident status when conditions match"
      },
      {
        "letter": "C",
        "text": "Query an external threat-intelligence API for enrichment"
      },
      {
        "letter": "D",
        "text": "Run a forensic PowerShell script on the affected endpoint"
      },
      {
        "letter": "E",
        "text": "Create a memory image from the affected device"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "Microsoft Sentinel automation rules natively support actions such as assigning an incident owner, changing its status/severity, and adding tags or a comment, all performed directly by the rule without any external call. Querying a threat-intelligence API, running a forensic script, or collecting a memory image are response actions that require invoking a playbook (Logic App) or Defender for Endpoint, not something an automation rule does on its own. Because the SOC wants the ownership and status set before any external workflow runs, these two actions belong in the automation rule itself, with any playbook invocation added afterward.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/create-manage-use-automation-rules"
  },
  {
    "id": "spt-SCM1-D1-02",
    "number": 93,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "An analyst needs Microsoft Sentinel to open a ticket in an external service-management platform and then post investigation details to a collaboration channel whenever a qualifying incident is created. What should the analyst build for this cross-service workflow?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A Microsoft Sentinel workbook"
      },
      {
        "letter": "B",
        "text": "A Microsoft Sentinel playbook"
      },
      {
        "letter": "C",
        "text": "A Defender XDR device group"
      },
      {
        "letter": "D",
        "text": "A Microsoft Sentinel hunting query"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "A Microsoft Sentinel playbook is an Azure Logic Apps workflow triggered by an automation rule that can call out to external systems, such as opening a ticket in a service-management platform and posting a message to a Teams or Slack channel, which matches Microsoft's documented 'bi-directional sync' and 'orchestration' playbook use cases. A workbook only visualizes data, a hunting query only searches data, and a Defender XDR device group is just a grouping construct for applying policies to devices, none of which can call external APIs or post to chat platforms.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/automation/automate-responses-with-playbooks"
  },
  {
    "id": "spt-SCM1-D1-03",
    "number": 94,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "An organization wants Defender for Endpoint remediation actions on standard user devices to run automatically, while actions on a sensitive server group should require security-team approval. Which configuration provides that control?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Set different automation levels on Defender for Endpoint device groups"
      },
      {
        "letter": "B",
        "text": "Create separate Microsoft Sentinel workbooks for the device categories"
      },
      {
        "letter": "C",
        "text": "Use different Microsoft Purview audit-retention policies by device type"
      },
      {
        "letter": "D",
        "text": "Apply different Microsoft Sentinel hunting queries to each device category"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "Microsoft Defender for Endpoint lets administrators assign an automation level per device group, ranging from full automatic remediation to levels that require security-team approval before any remediation action runs, which directly satisfies having standard devices remediate automatically while a sensitive server group waits for approval. Workbooks and hunting queries are for visualization and querying, not remediation control, and Purview audit-retention policies govern log retention, not endpoint remediation behavior.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/configure-automated-investigations-remediation"
  },
  {
    "id": "spt-SCM1-D1-04",
    "number": 95,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A security engineer is configuring the Windows Security Events via AMA connector for Microsoft Sentinel and needs to control which Windows event-log records are collected and where they are sent. Which object should be configured?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A data collection rule"
      },
      {
        "letter": "B",
        "text": "A Sentinel workbook"
      },
      {
        "letter": "C",
        "text": "A device isolation policy"
      },
      {
        "letter": "D",
        "text": "A threat analytics report"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "The Windows Security Events via AMA connector relies on data collection rules (DCRs) to define exactly which event logs (All Security Events, Common, Minimal, or a Custom XPath-filtered set) are collected from each agent and which workspace/table they are sent to. A workbook only visualizes already-ingested data, a device isolation policy is a Defender for Endpoint containment action, and a threat analytics report summarizes threat intelligence, none of which control log collection scope or destination.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/azure-monitor/data-collection/data-collection-rule-overview"
  },
  {
    "id": "spt-SCM1-D1-05",
    "number": 96,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A Microsoft Sentinel detection must evaluate newly ingested events with the lowest built-in rule latency because a one-minute delay materially affects containment. Which analytics rule type best fits this requirement?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A near-real-time analytics rule"
      },
      {
        "letter": "B",
        "text": "A scheduled analytics rule with a daily interval"
      },
      {
        "letter": "C",
        "text": "A workbook query pinned to the SOC dashboard"
      },
      {
        "letter": "D",
        "text": "A manually executed hunting query"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "Near-real-time (NRT) analytics rules in Microsoft Sentinel are a special rule type hard-coded to run about once per minute with roughly a two-minute end-to-end delay, far lower than the built-in five-minute delay of standard scheduled rules, making them the right choice when even a one-minute detection delay matters. A scheduled rule with a daily interval introduces far more latency, and workbooks or manually run hunting queries are not automated detection mechanisms at all.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/near-real-time-rules"
  },
  {
    "id": "spt-SCM1-D1-06",
    "number": 97,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A threat hunter has a validated Advanced Hunting query in Microsoft Defender XDR and wants the query to run automatically, generate alerts when it matches, and optionally take response actions. What should be created?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A custom detection rule"
      },
      {
        "letter": "B",
        "text": "A Microsoft Sentinel workbook"
      },
      {
        "letter": "C",
        "text": "A device inventory filter"
      },
      {
        "letter": "D",
        "text": "A Microsoft Purview eDiscovery case"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "In Microsoft Defender XDR, turning a validated Advanced Hunting KQL query into a custom detection rule lets it run automatically on a schedule (every 1, 3, 12, or 24 hours), generate alerts when it matches, and optionally trigger response actions, exactly as described. A device inventory filter only narrows a device list view, a Sentinel workbook only visualizes data, and a Purview eDiscovery case is for legal content search, none of which run scheduled detection logic or produce alerts.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules"
  },
  {
    "id": "spt-SCM1-D1-07",
    "number": 98,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A team keeps large volumes of security telemetry in the Microsoft Sentinel data lake tier. It wants a scheduled KQL process to query that data and place selected results into the analytics tier for faster downstream use. Which feature should it configure?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A KQL job"
      },
      {
        "letter": "B",
        "text": "A Sentinel workbook"
      },
      {
        "letter": "C",
        "text": "A Defender XDR device group"
      },
      {
        "letter": "D",
        "text": "A Purview audit search"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "In the Microsoft Sentinel data lake, a KQL job is the specific feature for running a one-time or recurring scheduled KQL query against data lake tier data and promoting matching results into the analytics tier for faster, interactive use. A workbook only visualizes existing analytics-tier data, a Defender XDR device group is a policy-scoping construct, and a Purview audit search queries the unified audit log, none of which move data between Sentinel's lake and analytics tiers.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/kql-overview"
  },
  {
    "id": "spt-SCM1-D1-08",
    "number": 99,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A built-in Microsoft Sentinel analytics rule queries the SecurityEvent table, but events arriving through a Windows Forwarded Events connector never match the rule even though forwarding is healthy. What is the most likely explanation?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Forwarded events are written to WindowsEvent instead of SecurityEvent"
      },
      {
        "letter": "B",
        "text": "The connector stores forwarded events only in Defender XDR incidents"
      },
      {
        "letter": "C",
        "text": "Windows Event Forwarding suppresses all events used by analytics rules"
      },
      {
        "letter": "D",
        "text": "The SecurityEvent table accepts only events collected from Linux hosts"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "The Windows Forwarded Events (WEF) connector writes collected events to the WindowsEvent table rather than SecurityEvent, so built-in analytics rules written against SecurityEvent simply never see that data even though forwarding itself is healthy. This is a known table-mismatch gotcha; events from the Windows Security Events via AMA connector, by contrast, land in SecurityEvent. The other options are incorrect: forwarding doesn't suppress events, WEF data isn't limited to Defender XDR incidents, and SecurityEvent isn't Linux-only — it simply isn't populated by the WEF connector.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/data-connectors/windows-forwarded-events"
  },
  {
    "id": "spt-SCM1-D2-01",
    "number": 100,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An analyst is investigating suspicious behavior on one endpoint and needs a chronological view of observed events, associated alerts, process relationships, and MITRE ATT&CK techniques for that device. Which Defender for Endpoint view should be opened first?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The device timeline"
      },
      {
        "letter": "B",
        "text": "The vulnerability recommendation list"
      },
      {
        "letter": "C",
        "text": "The email entity page"
      },
      {
        "letter": "D",
        "text": "The Sentinel workbook gallery"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "The Defender for Endpoint device timeline (on the device page) provides exactly the chronological view of observed events, associated alerts, process-tree relationships, and MITRE ATT&CK technique tags for a single device, making it the natural first stop for a per-endpoint behavioral investigation. The vulnerability recommendation list and workbook gallery don't show event-level activity, and the email entity page is for message-centric, not device-centric, investigation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/investigate-machines"
  },
  {
    "id": "spt-SCM1-D2-02",
    "number": 101,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A security analyst must connect to a compromised endpoint immediately, run investigative commands, collect forensic artifacts, and take remediation actions without waiting for an interactive user session. Which capability is designed for this?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Live response"
      },
      {
        "letter": "B",
        "text": "Threat analytics"
      },
      {
        "letter": "C",
        "text": "Microsoft Purview Audit"
      },
      {
        "letter": "D",
        "text": "A Sentinel workbook"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "Live response gives analysts an instantaneous remote shell connection to a device so they can run investigative commands, collect forensic artifacts, and take remediation actions in real time, without needing an interactive logged-on user session. Threat analytics is a reporting feature about threat campaigns, Purview Audit tracks M365 admin/user activity rather than live device interaction, and a Sentinel workbook only visualizes data, so none of them provide direct remote command execution on an endpoint.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/live-response"
  },
  {
    "id": "spt-SCM1-D2-03",
    "number": 102,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "During an endpoint investigation, the SOC wants a downloadable package that captures information about the device state so analysts can examine evidence outside the live portal session. Which Defender for Endpoint response action best matches this need?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Collect investigation package"
      },
      {
        "letter": "B",
        "text": "Restrict app execution"
      },
      {
        "letter": "C",
        "text": "Initiate automated attack disruption"
      },
      {
        "letter": "D",
        "text": "Create a Sentinel hunting bookmark"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "The 'Collect investigation package' response action on a device page bundles forensic data about the device's current state (such as running processes, autoruns, and other artifacts) into a downloadable zipped folder analysts can examine outside the live portal session. Restrict app execution and automated attack disruption are containment actions, not evidence-collection packages, and a Sentinel hunting bookmark only saves query results rather than capturing device-state forensics.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/respond-machine-alerts"
  },
  {
    "id": "spt-SCM1-D2-04",
    "number": 103,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An investigation asks who changed a Microsoft 365 administrative setting and when the change occurred. The analyst needs a record of user and administrator activity rather than the content of messages or files. Which tool is the best starting point?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Purview Audit"
      },
      {
        "letter": "B",
        "text": "Microsoft Purview eDiscovery content search"
      },
      {
        "letter": "C",
        "text": "Microsoft Sentinel notebook"
      },
      {
        "letter": "D",
        "text": "Defender for Endpoint live response"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "Microsoft Purview Audit records who performed an action and when across Microsoft 365 services, including administrative configuration changes, making it the right starting point for a 'who changed what setting, and when' question. eDiscovery content search is built to find message and file content, not admin activity logs; a Sentinel notebook is for data science/analysis workflows; and Defender for Endpoint live response investigates endpoints, not M365 tenant administrative changes.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/audit-solutions-overview"
  },
  {
    "id": "spt-SCM1-D2-05",
    "number": 104,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A phishing investigation needs to locate messages and related files containing a distinctive campaign phrase across Exchange mailboxes, OneDrive accounts, and SharePoint sites. Which Microsoft Purview capability best fits this evidence search?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "eDiscovery content search"
      },
      {
        "letter": "B",
        "text": "Audit activity search"
      },
      {
        "letter": "C",
        "text": "Defender for Endpoint device timeline"
      },
      {
        "letter": "D",
        "text": "Sentinel near-real-time analytics"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "eDiscovery content search is purpose-built to locate email, documents, and chat content across Exchange Online mailboxes, OneDrive accounts, and SharePoint sites using keyword queries and Boolean search conditions, which is exactly what's needed to find a distinctive phishing campaign phrase across those locations. Audit activity search surfaces administrative/user actions rather than message content, the device timeline is endpoint-focused, and Sentinel NRT analytics detect telemetry events rather than search message/document content.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/ediscovery-content-search-overview"
  },
  {
    "id": "spt-SCM1-D2-06",
    "number": 105,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A SOC is investigating a suspected pass-the-ticket attack against on-premises Active Directory accounts and wants identity-focused detections for lateral movement techniques. Which Microsoft security product is most directly aligned to this investigation?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Defender for Identity"
      },
      {
        "letter": "B",
        "text": "Microsoft Defender for Cloud Apps"
      },
      {
        "letter": "C",
        "text": "Microsoft Defender for Office 365"
      },
      {
        "letter": "D",
        "text": "Microsoft Purview eDiscovery"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "Microsoft Defender for Identity monitors on-premises Active Directory signals and has a dedicated 'Suspected identity theft (pass-the-ticket)' detection (mapped to MITRE T1550.003) for exactly this lateral-movement technique, where a stolen Kerberos ticket is reused on a different computer. Defender for Cloud Apps focuses on SaaS/cloud app activity, Defender for Office 365 focuses on email/collaboration threats, and Purview eDiscovery is a content-search tool, none of which provide on-prem AD identity-based lateral movement detection.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-for-identity/lateral-movement-alerts"
  },
  {
    "id": "spt-SCM1-D2-07",
    "number": 106,
    "topic": "Respond to security incidents",
    "type": "multi-select",
    "text": "Microsoft Defender XDR confirms an active attack involving a compromised endpoint and a compromised user account. Which TWO automated disruption actions are designed to directly interrupt those attacker footholds?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Isolate the compromised device from most network traffic"
      },
      {
        "letter": "B",
        "text": "Disable the compromised user to prevent further sign-in"
      },
      {
        "letter": "C",
        "text": "Collect an investigation package from the endpoint"
      },
      {
        "letter": "D",
        "text": "Export the incident to a workbook for visualization"
      },
      {
        "letter": "E",
        "text": "Search Microsoft Purview Audit for administrator activity"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "Microsoft Defender XDR's automatic attack disruption directly contains the compromised endpoint (isolating/blocking most of its network traffic) and disables the compromised user account to prevent further sign-in, cutting off the two attacker footholds in real time while remaining reversible by the security team. Collecting an investigation package is evidence gathering rather than disruption, exporting an incident to a workbook is visualization, and searching Purview Audit is investigative lookup, so none of those three directly interrupt an active attack the way containment and account disablement do.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/automatic-attack-disruption"
  },
  {
    "id": "spt-SCM1-D3-01",
    "number": 107,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter wants to query Microsoft Defender XDR telemetry specifically for process creation and related process events observed on onboarded endpoints. Which Advanced Hunting table is the best starting point?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "DeviceProcessEvents"
      },
      {
        "letter": "B",
        "text": "DeviceNetworkEvents"
      },
      {
        "letter": "C",
        "text": "DeviceFileEvents"
      },
      {
        "letter": "D",
        "text": "DeviceRegistryEvents"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "The DeviceProcessEvents table in the Defender XDR Advanced Hunting schema specifically stores process creation and related process events reported by onboarded devices, making it the correct starting table for process-focused hunting. DeviceNetworkEvents covers network connections, DeviceFileEvents covers file system activity, and DeviceRegistryEvents covers registry modifications, none of which are the primary source for process creation telemetry.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceprocessevents-table"
  },
  {
    "id": "spt-SCM1-D3-02",
    "number": 108,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter runs the following KQL query against endpoint process telemetry. What does the query return?\n\nDeviceProcessEvents | summarize Executions=count() by bin(Timestamp, 1h)",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A count of process events grouped into one-hour time buckets"
      },
      {
        "letter": "B",
        "text": "The single most common process name for the previous hour"
      },
      {
        "letter": "C",
        "text": "A list of devices sorted by the time of their latest process event"
      },
      {
        "letter": "D",
        "text": "Every process event with its timestamp rounded to the nearest hour"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "The query uses summarize count() by bin(Timestamp, 1h), which groups DeviceProcessEvents rows into one-hour time buckets and returns the count of process events (Executions) for each bucket. The bin() function rounds each timestamp down to the nearest hour so summarize can aggregate rows that fall in the same hour, producing one row per hour rather than per device or per process name. It does not return a single top process name (B), a device-sorted list (C), or every individual event (D), because summarize always collapses matching rows into aggregated results.",
    "referenceUrl": "https://learn.microsoft.com/en-us/kusto/query/summarize-operator"
  },
  {
    "id": "spt-SCM1-D3-03",
    "number": 109,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "An analyst has a hypothesis about credential misuse and wants to run a query proactively across Sentinel data, review matches, and refine the idea before deciding whether it deserves continuous alerting. Which feature best fits this first step?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A Microsoft Sentinel hunting query"
      },
      {
        "letter": "B",
        "text": "A near-real-time analytics rule"
      },
      {
        "letter": "C",
        "text": "A Defender for Endpoint device isolation action"
      },
      {
        "letter": "D",
        "text": "A Microsoft Purview retention policy"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "Hunting queries in Microsoft Sentinel are designed exactly for this exploratory first step: an analyst runs a query based on a hypothesis, reviews the matching results, and refines the logic before deciding whether it merits becoming an always-on detection. An analytics rule (B) is for continuous, automated alerting once the logic is validated, not for ad hoc exploration. Device isolation (C) is a containment action, and a Purview retention policy (D) governs data lifecycle, so neither supports iterative threat hunting.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/hunting"
  },
  {
    "id": "spt-SCM1-D3-04",
    "number": 110,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A newly reported campaign is affecting organizations in the same sector. The SOC wants Microsoft-provided analysis of the tracked threat, related incidents, impacted assets in its environment, and recommended mitigation actions. Which Defender XDR capability should it use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Threat analytics"
      },
      {
        "letter": "B",
        "text": "Device inventory"
      },
      {
        "letter": "C",
        "text": "Microsoft Purview eDiscovery"
      },
      {
        "letter": "D",
        "text": "Sentinel data collection rules"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "Threat analytics in Microsoft Defender XDR provides Microsoft expert-written reports on tracked threat actors and campaigns, including related incidents, a list of impacted assets in the tenant, and specific mitigation and recommended actions. Device inventory (B) only lists managed devices without threat context, Purview eDiscovery (C) is for legal/content search, and Sentinel data collection rules (D) control log ingestion rather than threat reporting.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/threat-analytics"
  },
  {
    "id": "spt-SCM1-D3-05",
    "number": 111,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "An incident begins with one compromised account. The analyst wants an interactive graph showing the current impact and possible propagation paths toward critical assets so the team can estimate how far the breach could spread. Which capability best matches this goal?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Blast radius analysis powered by Microsoft Sentinel graph"
      },
      {
        "letter": "B",
        "text": "A Microsoft Sentinel workbook time chart"
      },
      {
        "letter": "C",
        "text": "A Microsoft Purview audit retention policy"
      },
      {
        "letter": "D",
        "text": "A Defender for Endpoint software inventory view"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-1/",
    "explanation": "Blast radius analysis, powered by the Microsoft Sentinel graph in the unified Defender portal, visualizes the vulnerable paths an attacker could take from a compromised entity toward critical assets, letting the team estimate potential spread interactively. A workbook time chart (B) only shows aggregated metrics over time, a Purview audit retention policy (C) governs log retention, and a software inventory view (D) lists installed applications, none of which model attack propagation paths.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/sentinel-graph-overview"
  },
  {
    "id": "spt-SCM2-D1-01",
    "number": 112,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A sanctioned administration tool repeatedly generates a known-benign Defender for Endpoint alert. The SOC wants matching alerts removed from the alert queue and prevented from creating incidents, while still retaining the underlying alert data for hunting. Which alert tuning action best fits?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Hide the alert when the defined evidence conditions match"
      },
      {
        "letter": "B",
        "text": "Resolve the alert and its related incident after creation"
      },
      {
        "letter": "C",
        "text": "Convert the alert into a Microsoft Sentinel workbook item"
      },
      {
        "letter": "D",
        "text": "Disable automated investigation and response for the device"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "An alert tuning rule configured with the \"Hide alert\" action suppresses matching alerts from the queue and prevents them from generating incidents, while the alert data itself is retained and still available for advanced hunting. Resolving the alert/incident after creation (B) still lets it briefly appear and spawn an incident first, converting it to a workbook item (C) is not a real tuning action, and disabling automated investigation and response (D) affects remediation, not alert/incident creation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/investigate-alerts"
  },
  {
    "id": "spt-SCM2-D1-02",
    "number": 113,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A Tier 1 analyst must view Microsoft Sentinel data and incidents, assign incidents to owners, change incident status, and add investigation notes. The analyst must not create analytics rules or modify Sentinel resources. Which role is the best fit?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Sentinel Reader"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel Responder"
      },
      {
        "letter": "C",
        "text": "Microsoft Sentinel Contributor"
      },
      {
        "letter": "D",
        "text": "Microsoft Sentinel Playbook Operator"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "Microsoft Sentinel Responder includes all Reader permissions plus the ability to manage incidents — assigning owners, changing status, and adding comments/notes — without granting rights to create or edit analytics rules or other Sentinel resources. Reader (A) cannot modify incidents at all, Contributor (C) grants broader rights to create/edit rules and resources which exceeds the requirement, and Playbook Operator (D) is scoped to running playbooks, not general incident handling.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/roles"
  },
  {
    "id": "spt-SCM2-D1-03",
    "number": 114,
    "topic": "Manage a security operations environment",
    "type": "multi-select",
    "text": "A Microsoft Sentinel workspace ingests standard Syslog messages from Linux servers and Common Event Format (CEF) events from network security appliances through Azure Monitor Agent. Which TWO tables should an analyst expect to query for those records?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Syslog for the standard Syslog records"
      },
      {
        "letter": "B",
        "text": "CommonSecurityLog for the CEF records"
      },
      {
        "letter": "C",
        "text": "SecurityEvent for all Linux and appliance records"
      },
      {
        "letter": "D",
        "text": "DeviceNetworkEvents for the CEF records"
      },
      {
        "letter": "E",
        "text": "OfficeActivity for the standard Syslog records"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "When ingested via the Azure Monitor Agent (AMA) connectors, standard Syslog messages land in the Syslog table, while CEF-formatted events from network/security appliances are parsed into the CommonSecurityLog table. SecurityEvent (C) holds Windows security event log data, not Linux Syslog or CEF, DeviceNetworkEvents (D) is a Defender for Endpoint advanced hunting table unrelated to Syslog/CEF ingestion, and OfficeActivity (E) holds Microsoft 365 audit data, not Syslog records.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/connect-cef-syslog-ama"
  },
  {
    "id": "spt-SCM2-D1-04",
    "number": 115,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A legacy security application writes one-line records to a rotating text file on a Linux server. No built-in Microsoft Sentinel connector exists for the application, but the SOC needs selected file records ingested into a queryable custom table. Which ingestion approach is most appropriate?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Custom Logs via AMA with a data collection rule"
      },
      {
        "letter": "B",
        "text": "Windows Security Events via AMA with a security event set"
      },
      {
        "letter": "C",
        "text": "Microsoft Defender XDR alert tuning with a file condition"
      },
      {
        "letter": "D",
        "text": "A Microsoft Sentinel workbook that reads the file directly"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "The Custom Logs via AMA connector is built for exactly this scenario: it lets you define a data collection rule (DCR) that reads a text log file on a Windows or Linux machine, applies optional transformations, and ingests selected records into a custom Log Analytics table you can query. Windows Security Events via AMA (B) only covers Windows event logs, not arbitrary text files; Defender XDR alert tuning (C) only suppresses existing alerts; and a workbook (D) visualizes data already in a workspace, it cannot read a file directly.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/connect-custom-logs-ama"
  },
  {
    "id": "spt-SCM2-D1-05",
    "number": 116,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "The SOC wants Microsoft Sentinel to automatically compare supported domain, IP, and URL threat indicators with ingested security logs and create high-fidelity detections when matches occur. Which built-in capability most directly provides this matching?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Defender Threat Intelligence Analytics rule"
      },
      {
        "letter": "B",
        "text": "A Microsoft Sentinel workbook with threat charts"
      },
      {
        "letter": "C",
        "text": "A Defender for Endpoint device inventory filter"
      },
      {
        "letter": "D",
        "text": "A Microsoft Purview Audit search template"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "The Microsoft Defender Threat Intelligence (MDTI) Analytics rule is the built-in Microsoft Sentinel capability that automatically matches Microsoft-curated domain, IP, and URL threat indicators against ingested logs (such as CommonSecurityLog and DNS events) and generates high-fidelity alerts and incidents on matches. A workbook with threat charts (B) only visualizes existing data without generating detections, a device inventory filter (C) is unrelated to log matching, and a Purview Audit search template (D) is for compliance search, not threat-indicator matching.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/use-matching-analytics-to-detect-threats"
  },
  {
    "id": "spt-SCM2-D1-06",
    "number": 117,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A scheduled Microsoft Sentinel analytics rule detects suspicious sign-ins, but incidents show only raw query columns and do not expose the affected account and IP address as investigation entities. What should the security engineer configure in the rule?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Entity mapping from query fields to account and IP entities"
      },
      {
        "letter": "B",
        "text": "A longer query scheduling interval to enrich each result"
      },
      {
        "letter": "C",
        "text": "A workbook parameter for the account and IP columns"
      },
      {
        "letter": "D",
        "text": "A data collection rule transformation that removes unused fields"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "Entity mapping in a scheduled analytics rule maps query output columns (such as an account name or IP address field) to recognized Sentinel entity types, so resulting alerts and incidents expose those values as structured, investigable entities rather than plain text columns. Changing the scheduling interval (B) only affects how often the query runs, a workbook parameter (C) is for visualization filtering, and a DCR transformation (D) manipulates ingestion-time data, none of which create entity associations on alerts.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/map-data-fields-to-entities"
  },
  {
    "id": "spt-SCM2-D1-07",
    "number": 118,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A built-in Microsoft Sentinel anomaly rule is useful but too sensitive for one environment. The team wants to change its thresholds, compare the adjusted behavior during testing, and then promote the tuned version to production. What should the team do?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Duplicate the anomaly rule and tune the duplicate"
      },
      {
        "letter": "B",
        "text": "Edit the original out-of-box anomaly rule in place"
      },
      {
        "letter": "C",
        "text": "Replace the anomaly rule with a workbook visualization"
      },
      {
        "letter": "D",
        "text": "Disable User and Entity Behavior Analytics for the workspace"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "Built-in UEBA anomaly rules cannot be edited directly; Microsoft's supported approach is to duplicate the rule (creating a disabled copy) and tune the threshold/settings on that duplicate while the original keeps running, which lets the team compare both versions side by side before promoting the tuned copy to production. Editing the original in place (B) is not possible for out-of-box anomaly rules, replacing it with a workbook (C) removes the detection logic entirely, and disabling UEBA (D) removes anomaly detection altogether rather than tuning it.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/work-with-anomaly-rules"
  },
  {
    "id": "spt-SCM2-D1-08",
    "number": 119,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A security engineer creates a Defender for Endpoint custom data collection rule that captures nearly every process event. Microsoft recommends targeting only a small pilot group first. What is the primary reason for that recommendation?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Comprehensive collection can generate very high event volumes per device"
      },
      {
        "letter": "B",
        "text": "Custom data collection works only on devices in evaluation mode"
      },
      {
        "letter": "C",
        "text": "The collected events cannot be queried until every device is targeted"
      },
      {
        "letter": "D",
        "text": "Pilot targeting is required before Defender XDR can create incidents"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "Custom data collection rules that capture broad telemetry, such as nearly all process events, can generate very high volumes of data per device, which drives up ingestion cost and can strain workspace performance, so Microsoft recommends piloting on a small device group first to validate volume and value before wider rollout. The other options are inaccurate: custom collection is not restricted to evaluation-mode devices (B), collected events are queryable as soon as they are ingested regardless of rollout scope (C), and pilot targeting has no bearing on Defender XDR's ability to create incidents (D).",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/create-custom-data-collection-rules"
  },
  {
    "id": "spt-SCM2-D1-09",
    "number": 120,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A security engineer wants to reduce common Office-based intrusion paths on Windows endpoints by blocking behaviors such as Office applications creating child processes. Which Defender for Endpoint control family should the engineer configure?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Attack surface reduction rules"
      },
      {
        "letter": "B",
        "text": "Endpoint detection alert tuning"
      },
      {
        "letter": "C",
        "text": "Microsoft Sentinel hunting queries"
      },
      {
        "letter": "D",
        "text": "Microsoft Purview retention policies"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "Attack surface reduction (ASR) rules in Defender for Endpoint target exactly these risky behaviors, including the rule that blocks Office applications from creating child processes, which stops common macro- and exploit-based intrusion chains that spawn a shell or script engine from Word, Excel, or PowerPoint. Alert tuning (B) only changes how existing alerts are handled after the fact, hunting queries (C) are for detection and investigation rather than prevention, and Purview retention policies (D) govern data lifecycle, not endpoint behavior blocking.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-reference"
  },
  {
    "id": "spt-SCM2-D2-01",
    "number": 121,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An incident contains suspicious files, processes, IP addresses, and email artifacts. The analyst wants one Defender XDR view that shows supported evidence with verdicts such as Malicious, Suspicious, or Clean and also shows remediation status. Which incident tab should be used?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Evidence and Response"
      },
      {
        "letter": "B",
        "text": "Assets inventory"
      },
      {
        "letter": "C",
        "text": "Secure Score recommendations"
      },
      {
        "letter": "D",
        "text": "Threat analytics report"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "The Evidence and Response tab on a Defender XDR incident aggregates all supported evidence entities — files, processes, IP addresses, email artifacts, and more — along with their investigation verdicts (such as Malicious, Suspicious, or no threats found) and current remediation status, and it is also where analysts can take response actions. Assets inventory (B) only lists devices/identities without verdicts, Secure Score (C) covers posture recommendations, and the threat analytics report (D) covers campaign-level intelligence rather than per-incident evidence.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/investigate-incident-cases"
  },
  {
    "id": "spt-SCM2-D2-02",
    "number": 122,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A SOC handles several investigations related to the same internal red-team exercise. Analysts want to label those incidents so the queue can later be filtered to that exercise without changing the detection logic. Which incident-management feature should they use?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Incident tags"
      },
      {
        "letter": "B",
        "text": "Incident severity"
      },
      {
        "letter": "C",
        "text": "Alert tuning"
      },
      {
        "letter": "D",
        "text": "Threat indicators"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "Incident tags let analysts add free-form or system labels to incidents so related cases, such as those tied to the same red-team exercise, can later be filtered or grouped in the incident queue without touching any detection logic. Severity (B) reflects impact/risk ranking, alert tuning (C) changes which alerts generate incidents, and threat indicators (D) are IoCs used for matching, none of which provide ad hoc labeling for grouping unrelated incidents by context.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/manage-incidents"
  },
  {
    "id": "spt-SCM2-D2-03",
    "number": 123,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "Several users received a phishing message that was later confirmed malicious. The analyst needs to find matching delivered messages across the organization, inspect message details, and initiate remediation actions on the affected mail. Which Defender for Office 365 capability best fits?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Threat Explorer"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel workbook gallery"
      },
      {
        "letter": "C",
        "text": "Defender for Endpoint device timeline"
      },
      {
        "letter": "D",
        "text": "Microsoft Purview retention labels"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "Threat Explorer in Defender for Office 365 lets analysts search across the organization's mail flow for messages matching specific indicators, filter by delivery status (such as delivered messages), inspect message details, and launch remediation actions like soft delete directly from the results. A Sentinel workbook gallery (B) only visualizes data and cannot remediate mail, the Defender for Endpoint device timeline (C) covers endpoint activity, and Purview retention labels (D) manage data lifecycle rather than phishing response.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-office-365/threat-explorer-investigate-delivered-malicious-email"
  },
  {
    "id": "spt-SCM2-D2-04",
    "number": 124,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An OAuth application has unusual tenant-wide permissions and was recently granted admin consent. The analyst wants to review the app's granted permissions, consent activity, and related cloud activity before deciding whether the app is risky. Which capability should be used?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "OAuth app investigation in Defender for Cloud Apps"
      },
      {
        "letter": "B",
        "text": "Device inventory in Defender for Endpoint"
      },
      {
        "letter": "C",
        "text": "Microsoft Sentinel data collection rules"
      },
      {
        "letter": "D",
        "text": "Secure Score improvement actions"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "OAuth app investigation in Defender for Cloud Apps (via app governance) lets analysts review an app's requested and granted permissions, who consented and when, and associated activity logs, which is exactly what is needed to assess an app with unusual tenant-wide permissions and recent admin consent. Device inventory (B) is unrelated to OAuth apps, Sentinel data collection rules (C) govern log ingestion, and Secure Score (D) provides posture recommendations rather than per-app consent and permission detail.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/investigate-risky-oauth"
  },
  {
    "id": "spt-SCM2-D2-05",
    "number": 125,
    "topic": "Respond to security incidents",
    "type": "multi-select",
    "text": "A user account is confirmed compromised and the attacker may still have valid cloud sessions. Which TWO containment actions most directly cut off both new sign-ins and existing refresh-token-backed access?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Block or disable the user account"
      },
      {
        "letter": "B",
        "text": "Revoke the user's active sessions"
      },
      {
        "letter": "C",
        "text": "Add the incident to a Sentinel workbook"
      },
      {
        "letter": "D",
        "text": "Increase Microsoft 365 audit retention"
      },
      {
        "letter": "E",
        "text": "Create a new device group for the user's workstation"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "Blocking or disabling the compromised account prevents any new sign-ins, while explicitly revoking the user's active sessions invalidates existing refresh tokens so previously issued access cannot be silently renewed, together cutting off both new and ongoing attacker access. Adding the incident to a workbook (C) and increasing audit retention (D) are reporting/compliance actions with no containment effect, and creating a new device group (E) is an organizational action that does not revoke any existing access.",
    "referenceUrl": "https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access"
  },
  {
    "id": "spt-SCM2-D2-06",
    "number": 126,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An investigation suggests a malicious application is making unauthorized calls to Microsoft Graph. The analyst needs an audit trail of HTTP requests that Microsoft Graph received and processed for the tenant. Which data source is designed for this purpose?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Graph activity logs"
      },
      {
        "letter": "B",
        "text": "Defender for Endpoint device timeline"
      },
      {
        "letter": "C",
        "text": "Microsoft Sentinel SecurityEvent table"
      },
      {
        "letter": "D",
        "text": "Microsoft Purview eDiscovery content search"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "Microsoft Graph activity logs provide an audit trail of every HTTP request that Microsoft Graph receives and processes for a tenant, including the calling app, user, IP address, and endpoint invoked, and can be streamed via Azure Monitor diagnostic settings to Log Analytics, Event Hubs, or Storage for investigation of misbehaving or malicious applications. Defender for Endpoint's device timeline tracks device-centric events, not Graph API calls; the Sentinel SecurityEvent table holds Windows security events; and Purview eDiscovery content search is for mailbox/site content, not API telemetry. Microsoft Graph activity logs are the purpose-built data source for this scenario.",
    "referenceUrl": "https://learn.microsoft.com/en-us/graph/microsoft-graph-activity-logs-overview"
  },
  {
    "id": "spt-SCM2-D2-07",
    "number": 127,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An automated investigation recommends remediation actions against devices, identities, and email, but the organization requires analyst approval before those actions execute. Where should the analyst review and approve or reject the pending actions?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The unified Action center"
      },
      {
        "letter": "B",
        "text": "The Microsoft Sentinel workbook gallery"
      },
      {
        "letter": "C",
        "text": "The Defender XDR threat analytics dashboard"
      },
      {
        "letter": "D",
        "text": "The Microsoft Purview Audit search page"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "The unified Action center in Microsoft Defender XDR lists pending and completed remediation actions recommended by automated investigations across devices, identities, and email/collaboration content, letting analysts approve, reject, or undo them from one place. Workbooks only visualize data and cannot approve actions; the threat analytics dashboard is a reporting view on tracked threats, not a remediation queue; and Purview Audit search records activity logs rather than hosting approval workflows. The Action center is specifically designed for this approval gate.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/m365d-action-center"
  },
  {
    "id": "spt-SCM2-D3-01",
    "number": 128,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter has suspicious process executions in DeviceProcessEvents and wants to correlate them with outbound connections in DeviceNetworkEvents using the shared DeviceId value. Which KQL operator is specifically intended to combine rows from the two tables on that matching key?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "join"
      },
      {
        "letter": "B",
        "text": "summarize"
      },
      {
        "letter": "C",
        "text": "project"
      },
      {
        "letter": "D",
        "text": "extend"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "The KQL join operator merges rows from two tables by matching values in specified columns (here DeviceId), producing a combined result set, which is exactly the correlation needed between DeviceProcessEvents and DeviceNetworkEvents. summarize aggregates rows into groups rather than combining two tables; project and extend only select or add columns within a single table and cannot pull rows in from another table. join is the only operator purpose-built for this cross-table correlation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/kusto/query/join-operator"
  },
  {
    "id": "spt-SCM2-D3-02",
    "number": 129,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A workspace retains a very large volume of inexpensive raw telemetry, but analysts repeatedly run month-long hunts that need only hourly aggregate counts. The team wants the aggregates precomputed into an Analytics-plan custom table for faster queries. Which feature should it configure?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A Microsoft Sentinel summary rule"
      },
      {
        "letter": "B",
        "text": "A Defender XDR alert tuning rule"
      },
      {
        "letter": "C",
        "text": "A Microsoft Purview retention label"
      },
      {
        "letter": "D",
        "text": "A Microsoft Sentinel incident task"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "Microsoft Sentinel summary rules run a scheduled KQL query over high-volume/low-cost tier data and write precomputed aggregated results, such as hourly counts, into a new or existing Analytics-plan custom table that analysts can query quickly instead of re-scanning raw data each time. Alert tuning only adjusts which Defender alerts surface and has no bearing on Log Analytics tables; Purview retention labels govern information lifecycle for M365 content, not telemetry aggregation; and incident tasks are simple checklist items, not data-processing features. Summary rules are the feature built for this precompute pattern.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/summary-rules"
  },
  {
    "id": "spt-SCM2-D3-03",
    "number": 130,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A threat hunter needs a reusable investigation that combines KQL results with Python analysis, visualizations, and iterative exploration that is more complex than a single portal query. Which Microsoft Sentinel capability is the best fit?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A notebook"
      },
      {
        "letter": "B",
        "text": "An automation rule"
      },
      {
        "letter": "C",
        "text": "An incident tag"
      },
      {
        "letter": "D",
        "text": "A data collection rule"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "Microsoft Sentinel's Jupyter notebooks combine KQL (via tools like Kqlmagic and MSTICPy) with full Python programmability, machine-learning libraries, and rich visualizations, enabling complex, reusable, iterative investigations that go beyond a single portal query. Automation rules only orchestrate incident handling (assignment, tagging, playbooks) and perform no analysis themselves; incident tags are simple labels; and data collection rules configure ingestion pipelines rather than investigation logic. Notebooks are the dedicated capability for this kind of advanced hunting workflow.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/notebooks"
  },
  {
    "id": "spt-SCM2-D3-04",
    "number": 131,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter wants to return only PowerShell process events whose command line contains the string \"-enc\", and then display only Timestamp, DeviceName, FileName, and ProcessCommandLine. Which query shape best meets the requirement?\n\nDeviceProcessEvents | where FileName =~ \"powershell.exe\" and ProcessCommandLine contains \"-enc\" | project Timestamp, DeviceName, FileName, ProcessCommandLine",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Filter matching rows first, then project the required columns"
      },
      {
        "letter": "B",
        "text": "Aggregate all process events into hourly buckets before filtering"
      },
      {
        "letter": "C",
        "text": "Join every process row to network telemetry before selecting fields"
      },
      {
        "letter": "D",
        "text": "Extend each row with a constant value and return every column"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-2/",
    "explanation": "The shown query first applies a where clause to filter PowerShell events containing \"-enc\" and only afterward uses project to return the four specified columns, so filtering before projecting correctly describes both the query's execution order and KQL best practice of narrowing rows before selecting fields. The other options describe operations (hourly aggregation, a join to network telemetry, extend with a constant) that do not appear in the query and would change its output. Option A is the only shape that matches the actual query.",
    "referenceUrl": "https://learn.microsoft.com/en-us/kusto/query/best-practices"
  },
  {
    "id": "spt-SCM3-D1-01",
    "number": 132,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A SOC manager wants the on-call team to receive email only when new High-severity incidents are created from selected Defender detection sources. Which configuration most directly meets the requirement?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Create a Defender XDR incident email notification rule filtered by severity and source"
      },
      {
        "letter": "B",
        "text": "Create a Sentinel workbook that displays only High-severity incident records"
      },
      {
        "letter": "C",
        "text": "Create an alert tuning rule that hides every alert below High severity"
      },
      {
        "letter": "D",
        "text": "Create a Defender for Endpoint device group for the on-call analysts"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "Microsoft Defender XDR lets admins create incident email notification rules that filter by alert/incident severity and by specific detection (service) sources, so only matching High-severity incidents from selected sources trigger email to the on-call team. Workbooks only display data and cannot send notifications; alert tuning suppresses or hides alerts rather than notifying anyone; and Defender for Endpoint device groups control policy/RBAC scoping, not notification delivery. The incident email notification rule is built exactly for this requirement.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/m365d-notifications-incidents"
  },
  {
    "id": "spt-SCM3-D1-02",
    "number": 133,
    "topic": "Manage a security operations environment",
    "type": "multi-select",
    "text": "A SOC needs 60 days of fast interactive access for analytics rules and hunting, but compliance requires the same table to remain retained for 5 years at lower cost after that period. Which TWO settings best satisfy the requirement?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Keep the table in the Analytics tier with 60 days of analytics retention"
      },
      {
        "letter": "B",
        "text": "Set total retention to 5 years so older data remains in the data lake"
      },
      {
        "letter": "C",
        "text": "Move the table immediately to the Data Lake tier with no analytics retention"
      },
      {
        "letter": "D",
        "text": "Configure a workbook to export the table to local files every 60 days"
      },
      {
        "letter": "E",
        "text": "Extend Defender XDR advanced hunting retention to 5 years for the table"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "Keeping the table on the Analytics plan with analytics (interactive) retention set to 60 days preserves fast, interactive access for analytics rules and hunting, while setting the table's total retention to 5 years keeps the older data mirrored into the lower-cost data lake tier for long-term compliance without manual export. Moving the table immediately to the Data Lake tier with no analytics retention would remove the required 60-day interactive access; a workbook-driven file export and Defender XDR advanced hunting retention are unrelated mechanisms that don't manage Sentinel table tiering. A and B together reflect Sentinel's interactive-retention-plus-total-retention model.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/manage-data-overview"
  },
  {
    "id": "spt-SCM3-D1-03",
    "number": 134,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "An analyst needs an interactive security dashboard with KQL-backed charts, tables, and a time-range parameter so shift leads can monitor trends without creating detections. Which Sentinel capability should be used?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A Microsoft Sentinel workbook"
      },
      {
        "letter": "B",
        "text": "A scheduled analytics rule"
      },
      {
        "letter": "C",
        "text": "A data collection rule"
      },
      {
        "letter": "D",
        "text": "An incident automation rule"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "Microsoft Sentinel workbooks provide interactive dashboards built on KQL queries against Log Analytics data, supporting charts, grids, and parameters such as a time-range picker, so shift leads can monitor trends without creating detections. Scheduled analytics rules generate alerts and incidents rather than dashboards; data collection rules configure ingestion; and automation rules only orchestrate incident response. Only workbooks provide this visual, parameterized monitoring experience.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-time"
  },
  {
    "id": "spt-SCM3-D1-04",
    "number": 135,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A Sentinel workspace ingests a costly table that has not been used by detections in the last month. The team wants Microsoft-generated guidance on whether to add useful detections, change the table plan, or stop unnecessary ingestion without reducing security coverage. Which feature should the team review?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "SOC optimization recommendations"
      },
      {
        "letter": "B",
        "text": "Microsoft Defender Secure Score"
      },
      {
        "letter": "C",
        "text": "Microsoft Purview Data Explorer"
      },
      {
        "letter": "D",
        "text": "Defender for Endpoint exposure management"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "SOC optimization recommendations analyze ingested tables and existing analytics rules to produce tailored, Microsoft-generated guidance, such as adding detections that use underutilized data, changing a table's data plan, or reducing unnecessary ingestion, without weakening security coverage. Secure Score addresses configuration/posture hardening rather than log cost-versus-coverage tradeoffs; Purview Data Explorer is a compliance data-search tool; and Defender for Endpoint exposure management focuses on vulnerability and attack-surface reduction, not Sentinel ingestion cost. SOC optimization is purpose-built for exactly this scenario.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/soc-optimization/soc-optimization-reference"
  },
  {
    "id": "spt-SCM3-D1-05",
    "number": 136,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A security engineer must ingest Azure subscription control-plane events into Microsoft Sentinel using the current supported pipeline and wants a scalable way to configure multiple subscriptions. Which approach is most appropriate?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Use the Azure Activity connector with diagnostic settings and Azure Policy where needed"
      },
      {
        "letter": "B",
        "text": "Use Windows Security Events via AMA on every Azure virtual machine"
      },
      {
        "letter": "C",
        "text": "Use Defender XDR custom detection rules to copy control-plane events into Sentinel"
      },
      {
        "letter": "D",
        "text": "Use a Sentinel workbook to poll each subscription and store the results"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "The current supported pipeline for Azure subscription control-plane (Azure Activity log) data into Sentinel is the Azure Activity connector built on Azure Monitor diagnostic settings; to scale across many subscriptions, an Azure Policy assignment (for example at management-group scope) automatically deploys and remediates those diagnostic settings so logs flow consistently, including to future subscriptions. AMA-based Windows Security Events applies to VM OS telemetry, not subscription-level control-plane logs; Defender XDR custom detections cannot copy Azure control-plane data; and polling via a workbook is not a supported ingestion method. Option A matches Microsoft's documented scalable approach.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/data-connectors/azure-activity"
  },
  {
    "id": "spt-SCM3-D1-06",
    "number": 137,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A commercial threat-intelligence provider exposes a TAXII 2.x collection containing STIX indicators. The SOC wants those indicators ingested into Microsoft Sentinel through a supported connector. Which connector should it configure?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Threat Intelligence - TAXII"
      },
      {
        "letter": "B",
        "text": "Azure Activity"
      },
      {
        "letter": "C",
        "text": "Microsoft Defender XDR incidents"
      },
      {
        "letter": "D",
        "text": "Windows Security Events via AMA"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "The Threat Intelligence - TAXII data connector is Sentinel's built-in TAXII 2.x client, designed to poll a TAXII server/collection and ingest STIX-formatted indicators directly into the workspace's threat intelligence store. The Azure Activity connector ingests Azure control-plane logs, Defender XDR incidents ingest alert/incident data, and Windows Security Events via AMA ingests endpoint OS telemetry, none of which handle STIX/TAXII feeds. The TAXII connector is the only option matching this standards-based threat-intel ingestion requirement.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/connect-threat-intelligence-taxii"
  },
  {
    "id": "spt-SCM3-D1-07",
    "number": 138,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A detection engineer wants to compare the MITRE ATT&CK techniques covered by active Sentinel scheduled and NRT rules with techniques that could be covered by available but not yet configured detections. Which Sentinel view is designed for this analysis?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The MITRE ATT&CK coverage matrix with simulated rules"
      },
      {
        "letter": "B",
        "text": "The Incident queue grouped by owner and severity"
      },
      {
        "letter": "C",
        "text": "The Action center filtered to pending remediation"
      },
      {
        "letter": "D",
        "text": "The Defender for Endpoint device inventory"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "Sentinel's MITRE ATT&CK coverage view builds a heatmap of techniques covered by active analytics/NRT rules and overlays simulated coverage from available-but-unconfigured analytics rule templates, hunting queries, and anomaly rules, letting a detection engineer compare current versus potential coverage. The incident queue, Action center, and device inventory are operational/triage views unrelated to technique-level coverage mapping. Only the MITRE coverage matrix is built for this gap analysis.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/mitre-coverage"
  },
  {
    "id": "spt-SCM3-D1-08",
    "number": 139,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A scheduled Sentinel analytics rule repeatedly detects the same account and host during one attack and creates many closely related alerts. The SOC wants those matching alerts represented together as one actionable incident when possible. What should the engineer configure?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Alert grouping based on matching mapped entities"
      },
      {
        "letter": "B",
        "text": "Event grouping to create a separate alert for every result"
      },
      {
        "letter": "C",
        "text": "Rule suppression that stops all query execution for 24 hours"
      },
      {
        "letter": "D",
        "text": "A workbook parameter containing the account and host names"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "Configuring a scheduled analytics rule's incident settings to group alerts by matching mapped entities (such as the same account and host) consolidates multiple related alerts from one attack into a single incident instead of leaving every alert as its own incident. \"Event grouping to create a separate alert for every result\" is the opposite behavior; suppression stops the rule's query from running altogether rather than merging alerts; and a workbook parameter is unrelated to incident-creation logic. Entity-based alert grouping is the documented mechanism for this consolidation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/create-analytics-rules"
  },
  {
    "id": "spt-SCM3-D2-01",
    "number": 140,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A Defender for Cloud workload-protection alert reports suspicious activity on an Azure virtual machine. The analyst needs the affected resource, alert details, severity, and Microsoft-recommended remediation steps before taking action. Which view should the analyst investigate first?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The Defender for Cloud security alert details"
      },
      {
        "letter": "B",
        "text": "The Microsoft Sentinel workbook gallery"
      },
      {
        "letter": "C",
        "text": "The Defender XDR email notification settings"
      },
      {
        "letter": "D",
        "text": "The Microsoft Purview eDiscovery case list"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "Defender for Cloud's security alert details view shows the affected resource, alert description, severity, activity time, and a Take action tab with Microsoft-recommended remediation and prevention steps, which is exactly what an analyst needs before acting on a workload-protection alert. The Sentinel workbook gallery only offers visualization templates rather than individual alert investigation; Defender XDR email notification settings configure alerting, not alert content; and Purview eDiscovery is unrelated to infrastructure security alerts. The alert details page is the correct first stop.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/alerts-overview"
  },
  {
    "id": "spt-SCM3-D2-02",
    "number": 141,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An analyst is investigating one authentication attempt from an anonymous IP address. The analyst needs details such as the application, device, location, Conditional Access result, and risk level for that specific attempt rather than the user's accumulated account risk. Which report is the best fit?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Risky sign-ins"
      },
      {
        "letter": "B",
        "text": "Risky users"
      },
      {
        "letter": "C",
        "text": "Defender for Endpoint device inventory"
      },
      {
        "letter": "D",
        "text": "Microsoft Purview Audit"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "The Risky sign-ins report in Microsoft Entra ID Protection shows per-attempt detail, including application, device, location, Conditional Access outcome, and the risk level evaluated for that specific authentication event. The Risky users report instead aggregates risk at the account level over time rather than focusing on one sign-in; Defender for Endpoint device inventory and Purview Audit cover device and M365 activity logs, not sign-in risk detail. Because the analyst needs attempt-level detail rather than accumulated account risk, Risky sign-ins is correct.",
    "referenceUrl": "https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks"
  },
  {
    "id": "spt-SCM3-D2-03",
    "number": 142,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A compromised identity appears in alerts from several Microsoft security products. The analyst wants one chronological view of that user's impacted alerts, directory changes, cloud-app activity, and device logons to reconstruct the sequence. Which view should be used?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The identity entity Timeline tab in Microsoft Defender"
      },
      {
        "letter": "B",
        "text": "The Sentinel data connector health workbook"
      },
      {
        "letter": "C",
        "text": "The Defender XDR Action center"
      },
      {
        "letter": "D",
        "text": "The Purview retention policy page"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "The identity entity page's Timeline tab in Microsoft Defender XDR gives a chronological, identity-centric view that correlates alerts, directory/Entra changes, Defender for Cloud Apps activity, and device logons for a user across connected Microsoft security products, exactly the reconstruction the analyst needs. The data connector health workbook monitors ingestion pipelines, the Action center tracks remediation actions, and the Purview retention policy page manages data lifecycle, none of which provide a per-identity activity timeline. The Timeline tab is purpose-built for this cross-product identity investigation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/investigate-users"
  },
  {
    "id": "spt-SCM3-D2-04",
    "number": 143,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A Defender incident contains dozens of alerts across users and devices. Before deep investigation, the analyst wants an AI-generated overview of when the attack started, the likely starting asset, the attack timeline, involved assets, and indicators of compromise. Which embedded capability is intended for this?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Security Copilot incident summary"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel summary rule"
      },
      {
        "letter": "C",
        "text": "Defender XDR alert tuning"
      },
      {
        "letter": "D",
        "text": "Microsoft Purview Content search"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "The embedded Security Copilot incident summary automatically generates, when an analyst opens an incident, an AI overview covering when the attack started, the likely originating asset, the attack timeline, involved assets, and indicators of compromise, directly matching the described need. Sentinel summary rules only precompute KQL aggregates and have no AI narrative capability; Defender XDR alert tuning adjusts which alerts surface; and Purview Content search is a compliance eDiscovery tool unrelated to incident analysis. Only the Copilot-generated incident summary provides this AI overview.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-incident-summary"
  },
  {
    "id": "spt-SCM3-D2-05",
    "number": 144,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A SOC manager wants every analyst on every shift to follow and record the same triage and containment checklist for a recurring Sentinel incident type, while still allowing analysts to mark each step complete. Which capability best meets the requirement?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Sentinel incident tasks"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel bookmarks"
      },
      {
        "letter": "C",
        "text": "Defender XDR device groups"
      },
      {
        "letter": "D",
        "text": "Microsoft Purview retention labels"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "Microsoft Sentinel incident tasks let a SOC manager define a standardized checklist of steps for a given incident type, either manually or through automation rules and playbooks, so every analyst sees the same list of required actions on the incident details page. Analysts can mark each task complete as they progress, which enforces consistent triage and containment regardless of who is on shift. Bookmarks (B) only save specific log results for later reference and have no task/checklist structure. Device groups (C) and retention labels (D) are unrelated management constructs that do not track step-by-step incident response actions.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/incident-tasks"
  },
  {
    "id": "spt-SCM3-D2-06",
    "number": 145,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An analyst confirms that a workstation is actively attempting lateral movement. The analyst wants to cut the device off from normal network communication while keeping Defender for Endpoint able to monitor and manage the device. Which response action is designed for this?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Isolate device"
      },
      {
        "letter": "B",
        "text": "Collect investigation package"
      },
      {
        "letter": "C",
        "text": "Run antivirus quick scan"
      },
      {
        "letter": "D",
        "text": "Add an indicator for the device name"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "The Isolate device action in Defender for Endpoint cuts off a compromised device from the network except for its connection to the Defender for Endpoint cloud service, so the device stays manageable and monitorable while lateral movement is blocked. Collect investigation package (B) only gathers forensic data without containing the device. An antivirus quick scan (C) looks for malware but does not sever network communication, and adding an indicator for the device name (D) only affects future detections, not the device's current network state.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/respond-machine-alerts"
  },
  {
    "id": "spt-SCM3-D2-07",
    "number": 146,
    "topic": "Respond to security incidents",
    "type": "multi-select",
    "text": "A phishing alert, a compromised-user alert, and a suspicious endpoint-process alert occur minutes apart and involve the same employee. Which TWO Defender XDR capabilities most directly help an analyst understand them as one multi-stage attack?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Automatic correlation of related alerts into a shared incident"
      },
      {
        "letter": "B",
        "text": "The attack story graph linking related users, devices, mailboxes, and alerts"
      },
      {
        "letter": "C",
        "text": "A Purview retention label applied to the employee mailbox"
      },
      {
        "letter": "D",
        "text": "A Secure Score recommendation for endpoint hardening"
      },
      {
        "letter": "E",
        "text": "An Action center filter that shows only completed remediation actions"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "Microsoft Defender XDR automatically correlates related alerts across email, identity, and endpoint signals into a single incident, and the attack story graph then visualizes how the affected user, mailbox, device, and alerts relate chronologically as one attack chain. Together these two capabilities let an analyst see the phishing, compromised-account, and endpoint alerts as one coherent multi-stage attack rather than three unrelated events. A Purview retention label (C) is a compliance control with no bearing on alert correlation, a Secure Score recommendation (D) is a posture metric, and filtering completed remediation actions (E) only shows past actions already taken.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/investigate-incident-cases"
  },
  {
    "id": "spt-SCM3-D2-08",
    "number": 147,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A phishing message was delivered to several Exchange Online mailboxes before Microsoft had enough evidence to classify it as malicious. New intelligence identifies it 2 hours later, and the organization wants Defender for Office 365 to neutralize the already-delivered copies automatically. Which capability addresses this scenario?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Zero-hour auto purge"
      },
      {
        "letter": "B",
        "text": "Safe Attachments dynamic delivery"
      },
      {
        "letter": "C",
        "text": "Tenant Allow/Block List"
      },
      {
        "letter": "D",
        "text": "Exchange message trace"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "Zero-hour auto purge (ZAP) retroactively detects and removes messages that were already delivered before Microsoft had enough signal to classify them as malicious, moving them to quarantine or the Junk Email folder automatically once updated threat intelligence confirms the verdict, with no admin action required. Safe Attachments dynamic delivery (B) only affects attachments scanned at the time of delivery, not already-delivered mail. The Tenant Allow/Block List (C) is for manually blocking or allowing specific senders/URLs, and message trace (D) is a reporting tool, not a remediation mechanism.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-office-365/zero-hour-auto-purge"
  },
  {
    "id": "spt-SCM3-D3-01",
    "number": 148,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter wants to query Microsoft Defender for Office 365 telemetry for sender addresses, recipients, filtering verdicts, and the final delivery action taken on messages. Which Advanced Hunting table is the most appropriate starting point?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "EmailEvents"
      },
      {
        "letter": "B",
        "text": "DeviceNetworkEvents"
      },
      {
        "letter": "C",
        "text": "IdentityInfo"
      },
      {
        "letter": "D",
        "text": "AlertEvidence"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "The EmailEvents table in the Microsoft Defender XDR advanced hunting schema is specifically built to capture email-processing details such as sender/recipient addresses, filtering verdicts, and the final delivery action taken on each message. DeviceNetworkEvents (B) covers network connections from endpoints, IdentityInfo (C) stores account attributes, and AlertEvidence (D) lists entities tied to alerts — none hold the email delivery and filtering metadata the hunter needs.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailevents-table"
  },
  {
    "id": "spt-SCM3-D3-02",
    "number": 149,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter wants one result set containing rows from 2 compatible telemetry tables and does not need to correlate matching keys between individual rows. What does the following KQL operator accomplish?\n\nunion EmailEvents, UrlClickEvents",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Returns rows from both input tables in one result set"
      },
      {
        "letter": "B",
        "text": "Matches rows from both tables on a shared identifier"
      },
      {
        "letter": "C",
        "text": "Aggregates both tables into one count per time bucket"
      },
      {
        "letter": "D",
        "text": "Removes rows that do not exist identically in both tables"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "The union operator simply returns rows from both input tables (EmailEvents and UrlClickEvents) combined into a single result set, stacking their columns without requiring any shared key between rows — unlike join, which matches rows on a common field. It performs no aggregation and does not remove non-matching rows, so answers describing key matching, counting, or intersection-style filtering are incorrect.",
    "referenceUrl": "https://learn.microsoft.com/en-us/kusto/query/union-operator"
  },
  {
    "id": "spt-SCM3-D3-03",
    "number": 150,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter has an account, an IP address, several cloud resources, and a device that may be connected to one campaign. The hunter wants to traverse and visualize the relationships among these entities rather than analyze each as an isolated table row. Which capability best fits?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Sentinel Graph"
      },
      {
        "letter": "B",
        "text": "A Sentinel data collection rule"
      },
      {
        "letter": "C",
        "text": "Defender XDR email notifications"
      },
      {
        "letter": "D",
        "text": "A Purview eDiscovery export"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "Microsoft Sentinel graph is a relationship-first analytics capability, built on the Sentinel data lake, that lets hunters traverse and visually explore multi-hop connections between entities such as accounts, IP addresses, cloud resources, and devices instead of reviewing each as an isolated table row. This graph-based exploration surfaces blast radius and hidden pivots that are hard to see in flat log data. A data collection rule (B) only governs ingestion, email notifications (C) are an alerting mechanism, and an eDiscovery export (D) is a compliance/legal-hold tool — none provide entity-relationship visualization.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/sentinel-graph-overview"
  },
  {
    "id": "spt-SCM3-D3-04",
    "number": 151,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A security team wants an AI-enabled client to use a standardized interface for natural-language security tasks such as finding relevant Sentinel tables, retrieving data, analyzing entities, triaging incidents, and hunting for threats under the user's existing permissions. Which component is designed for this?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Sentinel MCP Server"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel workbook templates"
      },
      {
        "letter": "C",
        "text": "Defender for Endpoint attack surface reduction rules"
      },
      {
        "letter": "D",
        "text": "Microsoft Purview Data Lifecycle Management"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-3/",
    "explanation": "The Microsoft Sentinel MCP (Model Context Protocol) server exposes a standardized interface so AI-powered clients like Security Copilot, VS Code, or other MCP-compatible agents can use natural language to find relevant tables, retrieve Sentinel data lake data, analyze entity risk, and assist with incident triage and hunting, all while respecting the calling user's existing permissions. Workbook templates (B) are static dashboards, attack surface reduction rules (C) are endpoint hardening controls, and Data Lifecycle Management (D) governs retention — none provide an AI-agent interface to Sentinel data and tasks.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/sentinel-mcp-overview"
  },
  {
    "id": "spt-SCM4-D1-01",
    "number": 152,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "An organization uses a non-Microsoft antivirus product as the primary antivirus solution, while Microsoft Defender Antivirus remains in passive mode. The SOC wants Defender for Endpoint to remediate malicious artifacts detected by post-breach EDR signals even when the primary antivirus misses them. Which advanced feature should be enabled?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Endpoint detection and response in block mode"
      },
      {
        "letter": "B",
        "text": "Automatic sample submission"
      },
      {
        "letter": "C",
        "text": "Network protection in audit mode"
      },
      {
        "letter": "D",
        "text": "Tamper protection for endpoint security settings"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "Endpoint detection and response (EDR) in block mode allows Defender for Endpoint to remediate malicious artifacts found through post-breach EDR detections even when a non-Microsoft antivirus is the primary AV and Microsoft Defender Antivirus is running in passive mode, without interfering with the third-party AV's real-time protection. Automatic sample submission (B) only sends suspicious files to Microsoft for analysis, network protection in audit mode (C) only logs rather than blocks connections, and tamper protection (D) only guards Defender's own settings from being altered.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/edr-in-block-mode"
  },
  {
    "id": "spt-SCM4-D1-02",
    "number": 153,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A Defender for Endpoint tenant has the advanced feature Automatically resolve alerts enabled. An analyst manually changes one alert to In progress, and the associated automated investigation later reports that no threats were found. Why might the alert remain In progress instead of being auto-resolved?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Manual analyst status prevents auto-resolution from overwriting that alert"
      },
      {
        "letter": "B",
        "text": "Auto-resolution works only for alerts generated through Microsoft Sentinel analytics"
      },
      {
        "letter": "C",
        "text": "No-threat verdicts require a separate Microsoft Purview approval"
      },
      {
        "letter": "D",
        "text": "Auto-resolution changes device risk but never changes alert status"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "When the Automatically resolve alerts advanced feature is enabled, Defender for Endpoint will auto-resolve an alert only if its status hasn't been manually changed by an analyst; once an analyst sets an alert to In progress (or any other manual status), that manual action takes precedence and the automated investigation's no-threat verdict will not overwrite it. The other options describe restrictions or behaviors that don't exist — auto-resolution isn't scoped only to Sentinel-generated alerts, doesn't require Purview approval, and does change alert status, not just device risk.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/advanced-features"
  },
  {
    "id": "spt-SCM4-D1-03",
    "number": 154,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A Sentinel automation rule is configured to run an incident-triggered playbook, but the playbook is unavailable because Sentinel itself lacks permission on the playbook resource group. Which Azure role should be granted to the Microsoft Sentinel service account on that resource group?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Sentinel Automation Contributor"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel Reader"
      },
      {
        "letter": "C",
        "text": "Microsoft Sentinel Responder"
      },
      {
        "letter": "D",
        "text": "Log Analytics Reader"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "Microsoft Sentinel runs playbooks through a dedicated service account, and for that account to trigger a playbook via an automation rule, it must be explicitly granted the Microsoft Sentinel Automation Contributor role on the resource group containing the playbook. Once granted, Sentinel can run any playbook in that resource group from any automation rule. Sentinel Reader (B) and Responder (C) only govern a user's own access to Sentinel incidents/data, and Log Analytics Reader (D) grants read access to workspace logs — neither lets the Sentinel service account execute a Logic App playbook.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/roles"
  },
  {
    "id": "spt-SCM4-D1-04",
    "number": 155,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A custom network appliance sends verbose JSON records to Microsoft Sentinel. Before the records are stored, the SOC wants to drop low-value rows and mask a sensitive identifier while preserving the useful fields for later detections. Which mechanism is designed for this?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A data collection rule transformation applied during ingestion"
      },
      {
        "letter": "B",
        "text": "A workbook parameter applied when the dashboard loads"
      },
      {
        "letter": "C",
        "text": "An incident automation rule applied after an alert fires"
      },
      {
        "letter": "D",
        "text": "A scheduled analytics rule that deletes matching records after they are stored"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "Data collection rule (DCR) transformations apply a KQL-based expression to incoming data at ingestion time, before it is stored, letting the SOC drop low-value rows, mask sensitive fields, and reshape raw JSON into the useful columns later detections need. A workbook parameter (B) only affects what's displayed on a dashboard after data is already stored, an automation rule (C) runs after an alert has already fired, and there is no scheduled analytics rule mechanism that deletes already-ingested records.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/data-transformation"
  },
  {
    "id": "spt-SCM4-D1-05",
    "number": 156,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "Threat indicators from several feeds are already present in Microsoft Sentinel, and firewall events are flowing from connected data sources. The SOC wants Sentinel to generate incidents when those indicators match observed network activity. Which detection approach most directly fits the requirement?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Enable an appropriate TI map analytics rule"
      },
      {
        "letter": "B",
        "text": "Create a workbook that lists active indicators"
      },
      {
        "letter": "C",
        "text": "Assign a Sentinel incident responder role"
      },
      {
        "letter": "D",
        "text": "Run an endpoint investigation package collection"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "Microsoft Sentinel ships a family of built-in 'TI map' analytics rule templates (for example, TI map IP entity to AzureActivity or TI Map IP Entity to Network Data) that are purpose-built to match ingested threat indicators against observed events such as firewall logs and generate incidents on a match. A workbook (B) only visualizes existing indicators without generating incidents, assigning a responder role (C) affects permissions rather than detection logic, and an investigation package collection (D) is a forensic endpoint action unrelated to indicator matching.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/use-threat-indicators-in-analytics-rules"
  },
  {
    "id": "spt-SCM4-D1-06",
    "number": 157,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A team has onboarded Microsoft Sentinel to the Microsoft Defender portal and cannot enable the older Fusion Advanced multistage attack detection analytics rule. What best explains this behavior in the current unified experience?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Defender XDR correlation replaces Fusion for onboarded workspaces"
      },
      {
        "letter": "B",
        "text": "Fusion requires all telemetry to be stored only in the Data Lake tier"
      },
      {
        "letter": "C",
        "text": "Fusion can run only when all contributing alerts originate from scheduled analytics rules"
      },
      {
        "letter": "D",
        "text": "Fusion was replaced by Microsoft Purview Audit for multi-stage attacks"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "Once a Microsoft Sentinel workspace is onboarded to the Microsoft Defender portal and Defender XDR incident integration is enabled, the Fusion-based Advanced multistage attack detection analytics rule is disabled because its alert-correlation role is now performed by the Defender XDR correlation engine, which consolidates signals from across Sentinel and Defender products into unified incidents. This is an architectural replacement, not a storage-tier or data-source restriction, so options describing Data Lake requirements, scheduled-rule-only sourcing, or a Purview Audit replacement are inaccurate.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/fusion"
  },
  {
    "id": "spt-SCM4-D1-07",
    "number": 158,
    "topic": "Manage a security operations environment",
    "type": "multi-select",
    "text": "A security engineer wants Defender for Endpoint file-hash indicators to block a harmful portable executable on supported Windows endpoints. Which TWO prerequisites are specifically required for the Allow or block file feature?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Defender Antivirus is the active antimalware solution"
      },
      {
        "letter": "B",
        "text": "Cloud-delivered protection is enabled"
      },
      {
        "letter": "C",
        "text": "Microsoft Defender Antivirus is permanently disabled"
      },
      {
        "letter": "D",
        "text": "All endpoints are isolated from the network first"
      },
      {
        "letter": "E",
        "text": "Microsoft Sentinel is configured as the primary SIEM platform for the organization"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "The Allow or block file response action in Defender for Endpoint requires that Microsoft Defender Antivirus be the active antimalware engine on the device and that cloud-delivered protection be enabled, since the block list is enforced through Defender AV's cloud-backed engine. Permanently disabling Defender AV (C) would remove the very engine that enforces the block, isolating all endpoints first (D) is unrelated and overly disruptive, and designating Sentinel as the primary SIEM (E) has no bearing on an endpoint-level file-blocking capability.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/respond-file-alerts"
  },
  {
    "id": "spt-SCM4-D1-08",
    "number": 159,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "Three Sentinel automation rules can all match the same newly created incident. The SOC requires a tagging rule to run before an assignment rule, and both must run before a playbook is called. Which automation-rule setting controls that sequence?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Order"
      },
      {
        "letter": "B",
        "text": "Expiration date"
      },
      {
        "letter": "C",
        "text": "Analytics rule template"
      },
      {
        "letter": "D",
        "text": "Incident severity"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "Each Microsoft Sentinel automation rule has an Order value, and when multiple rules can trigger on the same incident, Sentinel executes them in ascending order — so setting the tagging rule to a lower order number than the assignment rule, and both lower than the rule that calls the playbook, guarantees the required sequence. Expiration date (B) only controls when a rule stops being active, the analytics rule template field (C) only scopes which incidents trigger the rule, and severity (D) is just a condition/filter, not an execution-sequencing control.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/automate-incident-handling-with-automation-rules"
  },
  {
    "id": "spt-SCM4-D1-09",
    "number": 160,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "An external assessor must review Microsoft Sentinel data and configuration but should not change incidents, create analytics rules, or modify content. Which built-in Sentinel role best matches this least-privilege requirement?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Sentinel Reader"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel Responder"
      },
      {
        "letter": "C",
        "text": "Microsoft Sentinel Contributor"
      },
      {
        "letter": "D",
        "text": "Microsoft Sentinel Automation Contributor"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "The built-in Microsoft Sentinel Reader role grants read-only access to view incidents, data, workbooks, and configuration without any ability to manage incidents, create analytics rules, or modify content — exactly matching a least-privilege external-assessor scenario. Responder (B) adds incident management rights, Contributor (C) adds the ability to create/edit resources and install content, and Automation Contributor (D) is a service-account role for running playbooks, not an assessor/reviewer role.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/roles"
  },
  {
    "id": "spt-SCM4-D2-01",
    "number": 161,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A data loss prevention policy flags a user for sending regulated data to an external destination. The analyst needs to investigate the DLP alert together with related security context, while the compliance engineer separately maintains the policy definition. Where should the analyst primarily investigate the alert?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The Microsoft Defender XDR dashboard"
      },
      {
        "letter": "B",
        "text": "The Microsoft Purview policy creation page"
      },
      {
        "letter": "C",
        "text": "The Microsoft Entra application registrations page"
      },
      {
        "letter": "D",
        "text": "The Defender for Endpoint device inventory"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "Microsoft Purview DLP alerts are posted to the DLP Alerts dashboard in the Purview portal but are also routed to the Microsoft Defender XDR portal's Incidents & alerts area, where an analyst can triage the DLP alert alongside its full security context (related users, devices, and other correlated alerts) for up to six months, versus only 30 days in the Purview dashboard. This split lets the SOC analyst investigate in Defender XDR while the compliance engineer continues to own policy definitions on the separate Purview policy creation page (B). Entra application registrations (C) and Defender for Endpoint's device inventory (D) are unrelated to DLP alert investigation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/dlp-investigate-alerts-defender"
  },
  {
    "id": "spt-SCM4-D2-02",
    "number": 162,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "Investigation confirms that a user-consented OAuth application is malicious and should no longer access organizational cloud data. Which Defender for Cloud Apps action most directly removes the application's granted access?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Ban or revoke the OAuth application"
      },
      {
        "letter": "B",
        "text": "Dismiss the activity alert as benign"
      },
      {
        "letter": "C",
        "text": "Add the application to a Sentinel workbook"
      },
      {
        "letter": "D",
        "text": "Collect an endpoint investigation package"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "In Microsoft Defender for Cloud Apps, banning (revoking) an OAuth app immediately removes its ability to access organizational data by invalidating its existing refresh and access tokens, rather than just flagging the alert. Dismissing the alert leaves the app's permissions intact, a Sentinel workbook is only for visualization and has no enforcement effect, and collecting an endpoint investigation package is an unrelated Defender for Endpoint device action, not a cloud-app governance control.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/governance-actions"
  },
  {
    "id": "spt-SCM4-D2-03",
    "number": 163,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A malicious executable is currently running on several known endpoints. The SOC needs to terminate it and quarantine the file on those devices immediately, then plans to create a longer-lived block afterward. Which Defender for Endpoint response action should be used first?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Stop and quarantine file"
      },
      {
        "letter": "B",
        "text": "Collect investigation package"
      },
      {
        "letter": "C",
        "text": "Restrict app execution"
      },
      {
        "letter": "D",
        "text": "Run antivirus quick scan"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "Stop and quarantine file is the Defender for Endpoint action built specifically to terminate a running process and remove the malicious file from disk on one or more devices in a single step, which is what's needed before a broader, longer-lived block is set up later (e.g., via indicators). Collect investigation package only gathers forensic data without stopping the threat, Restrict app execution is a device-wide containment measure (code integrity policy) rather than targeting the specific running file, and an antivirus quick scan is a detection action, not an immediate termination/removal action.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/respond-machine-alerts"
  },
  {
    "id": "spt-SCM4-D2-04",
    "number": 164,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An analyst finishes a Defender XDR investigation and resolves the incident. The SOC wants the record to show both whether the incident was a true or false positive and, for a true positive, what kind of threat it represented. Which incident properties capture those two judgments?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Classification and determination"
      },
      {
        "letter": "B",
        "text": "Severity and the assigned incident owner"
      },
      {
        "letter": "C",
        "text": "Status and device risk"
      },
      {
        "letter": "D",
        "text": "Tags and detection source"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "Defender XDR incidents expose a Classification property (True positive, Informational/expected activity, or False positive) and, only when classification is True positive, a Determination property that records the specific threat type (e.g., malware, phishing, compromised account, multi-staged attack). Severity and owner describe priority/assignment rather than the outcome of the investigation, status and device risk track workflow/risk state, and tags/detection source are metadata that don't capture the true/false-positive verdict or threat category.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/api-update-incidents"
  },
  {
    "id": "spt-SCM4-D2-05",
    "number": 165,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A junior responder opens a complex incident and needs contextual recommendations for triage, containment, further investigation, and remediation. The analyst wants suggested actions that can be reviewed before being applied rather than an opaque automatic response. Which embedded capability best fits?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Security Copilot guided responses"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel summary rules"
      },
      {
        "letter": "C",
        "text": "Defender XDR incident email notifications"
      },
      {
        "letter": "D",
        "text": "Microsoft Purview retention policies"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "Security Copilot's guided response in the Defender portal generates AI-based recommendations across triage, containment, investigation, and remediation for an incident, each with a rationale the analyst can review before choosing to apply it, matching the \"reviewable, not opaque automatic\" requirement. Sentinel summary rules only aggregate query results, incident email notifications merely alert staff without giving actionable recommendations, and Purview retention policies govern data lifecycle and have nothing to do with incident triage guidance.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-guided-response"
  },
  {
    "id": "spt-SCM4-D2-06",
    "number": 166,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A Defender for Cloud Apps activity alert shows a user repeatedly accessing cloud resources from a risky source, and the SOC wants to contain the account while it determines whether the behavior is malicious. Which response is designed for this immediate identity containment?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Suspend the user account from the investigation workflow"
      },
      {
        "letter": "B",
        "text": "Delete the Sentinel workspace containing the alert"
      },
      {
        "letter": "C",
        "text": "Disable endpoint network protection across the tenant"
      },
      {
        "letter": "D",
        "text": "Convert the activity alert into a Purview retention label"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "The Suspend user governance action in Defender for Cloud Apps immediately locks the account out of the application while the investigation continues, making it the correct identity-containment response to a risky activity alert. Deleting the Sentinel workspace or disabling tenant-wide endpoint network protection are drastic, unrelated, and disproportionate actions, and converting the alert into a Purview retention label only affects data retention, not account access.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/governance-actions"
  },
  {
    "id": "spt-SCM4-D2-07",
    "number": 167,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A workstation is compromised and the responder wants to prevent most untrusted programs from launching while keeping the device available for further investigation. Which Defender for Endpoint action applies a code integrity policy that permits only Microsoft-signed files to run?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Restrict app execution"
      },
      {
        "letter": "B",
        "text": "Collect investigation package"
      },
      {
        "letter": "C",
        "text": "Run antivirus scan"
      },
      {
        "letter": "D",
        "text": "Add a device tag"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "Restrict app execution applies a code integrity policy on the device that allows only files signed by a Microsoft certificate to run, containing the threat while keeping the machine online for further analysis. Collect investigation package just gathers forensic artifacts, running an antivirus scan only looks for known malware signatures without blocking unsigned executables, and adding a device tag is purely organizational metadata with no enforcement effect.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/respond-machine-alerts"
  },
  {
    "id": "spt-SCM4-D3-01",
    "number": 168,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter needs endpoint telemetry showing outbound connections, including RemoteIP, RemotePort, RemoteUrl, Protocol, and the initiating process. Which Microsoft Defender XDR Advanced Hunting table is the best starting point?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "DeviceNetworkEvents"
      },
      {
        "letter": "B",
        "text": "DeviceNetworkInfo"
      },
      {
        "letter": "C",
        "text": "DeviceProcessEvents"
      },
      {
        "letter": "D",
        "text": "EmailUrlInfo"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "DeviceNetworkEvents is the Advanced Hunting table that logs outbound/inbound network connection events per device, including RemoteIP, RemotePort, RemoteUrl, Protocol, and the InitiatingProcessFileName, making it the right starting point for this hunt. DeviceNetworkInfo instead describes the device's own network configuration (adapters, IP addresses) rather than connection events, DeviceProcessEvents tracks process creation without the specific network columns listed, and EmailUrlInfo is about URLs found in email messages, unrelated to endpoint network telemetry.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicenetworkevents-table"
  },
  {
    "id": "spt-SCM4-D3-02",
    "number": 169,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter has many records per device and wants the complete most recent row for each DeviceId, not merely the latest timestamp value. Which KQL pattern best meets the requirement?\n\nDeviceInfo | summarize arg_max(Timestamp, *) by DeviceId",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Returns the full row with the greatest Timestamp for each DeviceId"
      },
      {
        "letter": "B",
        "text": "Returns only the largest Timestamp value across the entire table"
      },
      {
        "letter": "C",
        "text": "Joins each DeviceId to every row having a different timestamp"
      },
      {
        "letter": "D",
        "text": "Counts how many rows each DeviceId produced during the query window"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "summarize arg_max(Timestamp, *) by DeviceId returns, for each DeviceId group, the complete row (all columns, via the * wildcard) belonging to the record with the greatest Timestamp value - exactly the \"latest full row per device\" requirement. It does not collapse everything to one global maximum (that would omit the by DeviceId grouping), it isn't a join producing multiple rows per device, and it performs no counting; those behaviors would require different operators like max() alone, join, or count().",
    "referenceUrl": "https://learn.microsoft.com/en-us/kusto/query/arg-max-aggregation-function"
  },
  {
    "id": "spt-SCM4-D3-03",
    "number": 170,
    "topic": "Perform threat hunting",
    "type": "multi-select",
    "text": "During a Sentinel hunt, an analyst finds a suspicious query result that may become evidence in a later incident. Which THREE items are preserved with a hunting bookmark so the analyst can revisit the finding in context?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The selected result data"
      },
      {
        "letter": "B",
        "text": "The source KQL query"
      },
      {
        "letter": "C",
        "text": "The query time range"
      },
      {
        "letter": "D",
        "text": "The user's Defender licensing assignment"
      },
      {
        "letter": "E",
        "text": "The workspace pricing tier history"
      }
    ],
    "correctLetters": [
      "A",
      "B",
      "C"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "A Microsoft Sentinel hunting bookmark preserves the selected result data from the log query, the source KQL query that produced it, and the query's time range, so the analyst (and teammates) can revisit the exact finding in context later, alongside optional notes/tags and entity mappings. A user's Defender license assignment and the workspace's pricing-tier history are tenant/billing metadata that bookmarks don't track at all, since bookmarks are scoped to query evidence, not licensing or cost configuration.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/bookmarks"
  },
  {
    "id": "spt-SCM4-D3-04",
    "number": 171,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter is building a long KQL query and wants to define a suspicious-IP list once, give that expression a name, and reuse the name in several later parts of the query. Which KQL construct is intended for this?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A let statement"
      },
      {
        "letter": "B",
        "text": "A project operator"
      },
      {
        "letter": "C",
        "text": "A distinct operator"
      },
      {
        "letter": "D",
        "text": "A render operator"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-4/",
    "explanation": "A let statement binds a name to a scalar value, tabular expression, or function so it can be referenced repeatedly later in the same query, which is exactly what's needed to define a suspicious-IP list once and reuse it. The project operator only selects/renames columns in the current pipeline, distinct removes duplicate rows, and render is purely for visualizing results - none of them create a reusable named definition.",
    "referenceUrl": "https://learn.microsoft.com/en-us/kusto/query/let-statement"
  },
  {
    "id": "spt-SCM5-D1-01",
    "number": 172,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A responder can run signed PowerShell scripts during a Defender for Endpoint live response session, but an internally written unsigned script is rejected. Which tenant setting most directly enables that script to run?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Allow unsigned script execution in live response"
      },
      {
        "letter": "B",
        "text": "Enable endpoint attack notifications"
      },
      {
        "letter": "C",
        "text": "Turn on authenticated telemetry"
      },
      {
        "letter": "D",
        "text": "Share endpoint alerts with Microsoft Purview"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "By default, Defender for Endpoint live response only allows signed PowerShell scripts to run; the \"Allow unsigned script execution\" (Live Response unsigned script execution) advanced feature toggle in the Defender portal must be enabled for an internally written, unsigned script to execute during a session. Enabling attack notifications, authenticated telemetry, or sharing alerts with Purview are unrelated settings that have no bearing on live response script signing requirements.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/advanced-features"
  },
  {
    "id": "spt-SCM5-D1-02",
    "number": 173,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "An insider-risk team wants endpoint security alerts and their triage status to contribute context to Microsoft Purview insider risk investigations. Which Defender for Endpoint advanced feature provides this integration?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Share endpoint alerts with Microsoft Compliance Center"
      },
      {
        "letter": "B",
        "text": "Enable web content filtering"
      },
      {
        "letter": "C",
        "text": "Restrict correlation to scoped device groups"
      },
      {
        "letter": "D",
        "text": "Enable streamlined device connectivity"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "The \"Share endpoint alerts with Microsoft Compliance Center\" advanced feature in Defender for Endpoint forwards endpoint alerts and their triage/remediation status into the Microsoft Purview compliance portal, where they enrich insider risk management policies and investigations. Web content filtering controls site access and is unrelated to insider risk, scoping correlation to device groups only limits automated investigation grouping, and streamlined device connectivity is a networking/onboarding optimization with no Purview integration role.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/advanced-features"
  },
  {
    "id": "spt-SCM5-D1-03",
    "number": 174,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A company wants Microsoft Intune compliance and Conditional Access decisions to use device risk calculated by Defender for Endpoint. The Defender portal connection is enabled, but no risk information reaches Intune. What configuration should the engineer verify next?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The Defender for Endpoint integration is also enabled in Microsoft Intune"
      },
      {
        "letter": "B",
        "text": "Every Sentinel analytics rule maps a Device entity"
      },
      {
        "letter": "C",
        "text": "A Defender live response session is active on each managed device"
      },
      {
        "letter": "D",
        "text": "The devices are assigned to the highest Defender automation level"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "Device risk flows from Defender for Endpoint to Intune compliance/Conditional Access only when the connection is enabled on both sides: in the Defender portal and also under Intune's own Defender for Endpoint integration setting (Endpoint security > Microsoft Defender for Endpoint). If only the Defender-side connection is on, Intune never receives the risk signal, so compliance policies can't act on it. Sentinel entity mappings, live response sessions, and Defender automation levels have no bearing on whether Intune receives device risk scores.",
    "referenceUrl": "https://learn.microsoft.com/en-us/intune/device-security/microsoft-defender/configure-integration"
  },
  {
    "id": "spt-SCM5-D1-04",
    "number": 175,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A Sentinel administrator searches the Data connectors page for a supported third-party product, but the connector is not listed even though Microsoft documents it as available through Sentinel. What should the administrator check first?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Install the solution that provides the connector from Content hub"
      },
      {
        "letter": "B",
        "text": "Whether all existing incidents have been resolved"
      },
      {
        "letter": "C",
        "text": "Whether the workspace has at least one custom workbook"
      },
      {
        "letter": "D",
        "text": "Whether threat intelligence indicators have been imported"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "Most data connectors, including many third-party ones, ship as part of a packaged solution in the Microsoft Sentinel Content hub and are not visible on the Data connectors page until that solution is installed into the workspace. Resolving incidents, adding a custom workbook, or importing threat intelligence indicators have no effect on which connectors are listed; the fix is specifically to find and install the relevant solution (with its dependencies) from Content hub.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/sentinel-solutions-deploy"
  },
  {
    "id": "spt-SCM5-D1-05",
    "number": 176,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A large enterprise frequently adds and removes Windows workstations. Security events from those workstations must be forwarded to central Windows Event Collectors without administrators maintaining an explicit source-computer list in each subscription. Which WEF subscription model best fits?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Source-initiated subscription"
      },
      {
        "letter": "B",
        "text": "Collector-initiated subscription"
      },
      {
        "letter": "C",
        "text": "Near-real-time analytics subscription"
      },
      {
        "letter": "D",
        "text": "Microsoft Sentinel automation subscription"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "A source-initiated subscription lets the Windows Event Collector accept forwarded events from any computer configured (via Group Policy) to push to it, without the administrator having to enumerate each source computer, which scales well as workstations are added and removed. A collector-initiated subscription requires the collector to explicitly list every source machine, making it impractical to maintain in a dynamic, large environment; the other two options aren't real WEF subscription types.",
    "referenceUrl": "https://learn.microsoft.com/en-us/windows/win32/wec/setting-up-a-source-initiated-subscription"
  },
  {
    "id": "spt-SCM5-D1-06",
    "number": 177,
    "topic": "Manage a security operations environment",
    "type": "multi-select",
    "text": "A team creates a new destination table for the Microsoft Sentinel Custom Logs via AMA connector to ingest a text application log directly from the host. Which TWO requirements apply to the initial custom table?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The table name ends with _CL"
      },
      {
        "letter": "B",
        "text": "The table includes a TimeGenerated datetime field"
      },
      {
        "letter": "C",
        "text": "The table name ends with _SecurityEvent"
      },
      {
        "letter": "D",
        "text": "The table includes an AlertId GUID field"
      },
      {
        "letter": "E",
        "text": "The table must use the CommonSecurityLog schema"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "When creating a new custom table for the Custom Logs via AMA (DCR-based) connector, the table name must end in the _CL suffix and the table must include a TimeGenerated column of type datetime, which Sentinel/Log Analytics requires to timestamp ingested rows. There's no _SecurityEvent naming convention, an AlertId GUID field isn't a schema requirement for generic custom text logs, and the CommonSecurityLog schema applies to CEF/syslog ingestion, not arbitrary custom application logs.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/connect-custom-logs-ama"
  },
  {
    "id": "spt-SCM5-D1-07",
    "number": 178,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A Defender XDR custom detection query joins DeviceProcessEvents to DeviceNetworkEvents. The author wants to select Continuous (NRT) frequency, but the rule is not eligible. Which query characteristic explains the restriction?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Continuous custom detections must reference only one table"
      },
      {
        "letter": "B",
        "text": "Continuous rules cannot include any time filter"
      },
      {
        "letter": "C",
        "text": "Continuous rules require a Microsoft Sentinel workbook"
      },
      {
        "letter": "D",
        "text": "Continuous rules can use only email-related tables"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "Continuous (NRT) frequency for Defender XDR custom detections is only available to queries that reference a single table and use a supported subset of KQL operators; because this query joins DeviceProcessEvents to DeviceNetworkEvents (two tables), it's ineligible for Continuous frequency and must instead run on a scheduled interval. The restriction isn't about time filters, needing a Sentinel workbook, or being limited to email tables - those aren't real constraints on NRT eligibility.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/custom-detection-rules"
  },
  {
    "id": "spt-SCM5-D1-08",
    "number": 179,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "An analyst opens a Sentinel scheduled analytics rule template from an installed solution. The template lists a required data source that is not connected, and the Create rule action is unavailable. What is the most appropriate next step?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Enable the required data source before creating the rule"
      },
      {
        "letter": "B",
        "text": "Convert the template into a hunting bookmark"
      },
      {
        "letter": "C",
        "text": "Assign every incident to the analyst"
      },
      {
        "letter": "D",
        "text": "Move the workspace to the Data lake tier"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "When an analytics rule template's required data source isn't connected, Microsoft Sentinel automatically detects this and disables (or warns on) the Create rule button, so the correct next step is to connect/enable that data source first and then create the rule, ensuring the underlying data actually exists for the rule to query. Converting the template into a hunting bookmark, assigning incidents, or moving the workspace to the Data lake tier don't address the missing data source and wouldn't make the Create rule action available.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/create-analytics-rule-from-template"
  },
  {
    "id": "spt-SCM5-D2-01",
    "number": 180,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An analyst confirms that a Microsoft Entra risky user is genuinely compromised and selects Confirm user compromised. What does that action do to the risk record?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Sets user risk to high and adds an admin-confirmed compromise detection"
      },
      {
        "letter": "B",
        "text": "Immediately resets the password and closes every associated incident"
      },
      {
        "letter": "C",
        "text": "Marks the user safe and removes the detections from future learning"
      },
      {
        "letter": "D",
        "text": "Deletes the risky sign-ins while leaving the user risk unchanged"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "Selecting Confirm user compromised on a risky user record is a true-positive feedback action: it explicitly sets the user's risk level to High and adds a new 'Admin confirmed user compromised' detection to the user's risk history. It does not itself reset passwords or close incidents (that requires separate remediation steps), it does not mark the user safe, and it does not delete the underlying risky sign-ins.",
    "referenceUrl": "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-risk-feedback"
  },
  {
    "id": "spt-SCM5-D2-02",
    "number": 181,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A sanctioned penetration test generates a real Microsoft Entra risk detection for a test account. The detection is valid, but the activity is known and nonmalicious. Which risk disposition best matches that finding?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Dismiss user risk"
      },
      {
        "letter": "B",
        "text": "Confirm user safe"
      },
      {
        "letter": "C",
        "text": "Confirm user compromised"
      },
      {
        "letter": "D",
        "text": "Block the user permanently"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "Dismiss user risk is the correct disposition for a benign positive: the detection is technically accurate (it really happened) but the activity is known, authorized, and nonmalicious, such as a sanctioned penetration test. Confirm user safe is reserved for false positives (the detection itself was wrong and should feed back into the ML model), and Confirm user compromised would incorrectly flag legitimate, authorized activity as an actual breach.",
    "referenceUrl": "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-remediate-unblock"
  },
  {
    "id": "spt-SCM5-D2-03",
    "number": 182,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A responder removes a confirmed phishing message from users' mailboxes with the Soft delete action in Threat Explorer. Where is the message moved so that it can still be recoverable subject to mailbox retention?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The Recoverable Items Deletions folder"
      },
      {
        "letter": "B",
        "text": "The Junk Email folder"
      },
      {
        "letter": "C",
        "text": "The permanent Purges folder immediately"
      },
      {
        "letter": "D",
        "text": "The Microsoft Sentinel incident queue"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "Soft delete in Threat Explorer moves the message out of the user's mailbox (Inbox/Junk/Deleted Items) into the Recoverable Items\\Deletions folder, where it stays recoverable by admins and the user, subject to the mailbox's deleted-item retention window, rather than being purged outright. This differs from Hard delete, which removes the message so it is not recoverable through normal means. The Junk Email folder and the Purges folder are not where soft-deleted items land, and Sentinel's incident queue has nothing to do with mailbox item storage.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-office-365/remediate-malicious-email-delivered-office-365"
  },
  {
    "id": "spt-SCM5-D2-04",
    "number": 183,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "While reviewing a Defender XDR incident attack story, an analyst identifies a suspicious device and wants to investigate its broader activity without manually rebuilding a query from scratch. Which incident action is designed to pivot directly into relevant Advanced Hunting queries for that entity?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Go hunt"
      },
      {
        "letter": "B",
        "text": "Collect investigation package"
      },
      {
        "letter": "C",
        "text": "Create workbook"
      },
      {
        "letter": "D",
        "text": "Change incident severity"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "The Go hunt action, available from an entity's details (in the incident's Evidence tab or an alert's entity flyout), automatically generates and runs a relevant Advanced Hunting query scoped to that specific entity (device, user, file, etc.), saving the analyst from writing the KQL by hand. Collect investigation package only gathers forensic artifacts from a device, Create workbook builds a Sentinel visualization, and changing severity is just incident triage metadata—none of these pivot into Advanced Hunting.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-go-hunt"
  },
  {
    "id": "spt-SCM5-D2-05",
    "number": 184,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An incident contains an obfuscated PowerShell event in the attack story. The responder wants an AI-assisted explanation of the script and a mapping of behaviors in the script to ATT&CK techniques. Which embedded capability should be used?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Security Copilot script analysis"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel workbook parameters"
      },
      {
        "letter": "C",
        "text": "Defender for Endpoint device discovery"
      },
      {
        "letter": "D",
        "text": "Purview Content search"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "Security Copilot's script analysis capability, embedded directly in the incident attack story, lets an analyst select a script or command line (such as obfuscated PowerShell) and get an AI-generated plain-language explanation of what it does, including a 'Show MITRE techniques' view that maps the observed behaviors to ATT&CK techniques. The other options are unrelated: Sentinel workbook parameters are for dashboards, device discovery finds unmanaged devices, and Purview Content search is for eDiscovery, none of which analyze or explain script behavior.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-script-analysis"
  },
  {
    "id": "spt-SCM5-D2-06",
    "number": 185,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A Defender for Cloud Apps alert points to an unusual cloud activity. The analyst wants to inspect exactly what event data the connected application sent rather than relying only on the normalized activity view. Which option in the activity drawer provides that evidence?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "View raw data"
      },
      {
        "letter": "B",
        "text": "Manage tags"
      },
      {
        "letter": "C",
        "text": "Open investigation package"
      },
      {
        "letter": "D",
        "text": "Create summary rule"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "In the activity drawer for a Defender for Cloud Apps activity, the View raw data option shows the actual, unmodified event payload exactly as it was received from the connected app's API, which lets an analyst verify details beyond what the normalized activity view displays. Manage tags only lets you label the activity, Open investigation package applies to endpoint devices rather than cloud app activities, and Create summary rule is unrelated to inspecting a single event's source data.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-cloud-apps/activity-filters"
  },
  {
    "id": "spt-SCM5-D2-07",
    "number": 186,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A rogue network device cannot run Defender for Endpoint, but it is communicating with several Defender-onboarded endpoints. The SOC wants those onboarded endpoints to block communications with the rogue device while investigation continues. Which response action best matches this objective?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Contain device"
      },
      {
        "letter": "B",
        "text": "Isolate device"
      },
      {
        "letter": "C",
        "text": "Restrict app execution"
      },
      {
        "letter": "D",
        "text": "Collect investigation package"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "Contain device is designed exactly for this scenario: it lets Defender for Endpoint-onboarded devices block all inbound and outbound communication with a malicious or suspicious device that cannot itself run the Defender for Endpoint agent (e.g., an unmanaged or rogue network device), even if that device changes its IP address. Isolate device instead cuts off a managed, onboarded device from the network, Restrict app execution limits executables on a managed device, and Collect investigation package only gathers forensic data without blocking anything.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/respond-machine-alerts"
  },
  {
    "id": "spt-SCM5-D3-01",
    "number": 187,
    "topic": "Perform threat hunting",
    "type": "multi-select",
    "text": "A hunter needs both alert severity and the files, IP addresses, users, or devices associated with each alert. Which TWO Advanced Hunting tables should be correlated on AlertId?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "AlertInfo"
      },
      {
        "letter": "B",
        "text": "AlertEvidence"
      },
      {
        "letter": "C",
        "text": "DeviceInfo"
      },
      {
        "letter": "D",
        "text": "EmailEvents"
      },
      {
        "letter": "E",
        "text": "IdentityInfo"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "AlertInfo provides alert-level details such as title, severity, category, and service source, while AlertEvidence lists the entities (files, IP addresses, URLs, users, devices) associated with each alert; both tables share the AlertId column, so joining them on AlertId combines severity with the related evidence. DeviceInfo, EmailEvents, and IdentityInfo contain entity-specific telemetry rather than alert evidence and are not the direct join target for this correlation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-alertevidence-table"
  },
  {
    "id": "spt-SCM5-D3-02",
    "number": 188,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter is looking for a malicious executable that might have been created, renamed, or modified on Windows endpoints. Which Advanced Hunting table is the best starting point for those file-system events?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "DeviceFileEvents"
      },
      {
        "letter": "B",
        "text": "DeviceNetworkEvents"
      },
      {
        "letter": "C",
        "text": "EmailEvents"
      },
      {
        "letter": "D",
        "text": "IdentityLogonEvents"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "DeviceFileEvents is the advanced hunting table that records file system activity on devices, including ActionType values like FileCreated, FileRenamed, and FileModified, making it the correct starting point for hunting a file that was created, renamed, or modified. DeviceNetworkEvents covers network connections, EmailEvents covers mail flow, and IdentityLogonEvents covers authentication activity—none of which record file-system changes.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicefileevents-table"
  },
  {
    "id": "spt-SCM5-D3-03",
    "number": 189,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "Persistence is suspected through modification of Windows registry run keys on several endpoints. Which Advanced Hunting table should a hunter query first for registry-entry creation and modification events?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "DeviceRegistryEvents"
      },
      {
        "letter": "B",
        "text": "DeviceProcessEvents"
      },
      {
        "letter": "C",
        "text": "AlertInfo"
      },
      {
        "letter": "D",
        "text": "EmailUrlInfo"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "DeviceRegistryEvents contains records of registry key and value creation and modification on Defender for Endpoint-onboarded devices, making it the right table to hunt for persistence via Run/RunOnce key changes (for example, filtering ActionType on RegistryValueSet with a RegistryKey path containing CurrentVersion\\Run). DeviceProcessEvents tracks process creation rather than registry state, AlertInfo only holds alert metadata, and EmailUrlInfo is about URLs found in email.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceregistryevents-table"
  },
  {
    "id": "spt-SCM5-D3-04",
    "number": 190,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter wants a case-insensitive match for the whole indexed term powershell within a command-line column, rather than matching the same characters inside a larger word. Which KQL operator is the better fit?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "has"
      },
      {
        "letter": "B",
        "text": "contains"
      },
      {
        "letter": "C",
        "text": "startswith"
      },
      {
        "letter": "D",
        "text": "matches regex"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "The has operator performs a case-insensitive match against a whole indexed term, so it correctly matches 'powershell' as a complete word while excluding occurrences where those characters are only a substring of a larger token; it also benefits from the term index, making it faster than a full scan. contains matches any substring (so it would also match inside a larger word), startswith only anchors to the beginning of the string, and matches regex is a heavier, unindexed operation not needed for a simple whole-term match.",
    "referenceUrl": "https://learn.microsoft.com/en-us/kusto/query/has-operator?view=microsoft-fabric"
  },
  {
    "id": "spt-SCM5-D3-05",
    "number": 191,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A complex Advanced Hunting query parses a large JSON column and then applies a one-hour time filter. The query repeatedly approaches resource limits. Which change best follows Microsoft's query optimization guidance?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Apply the time filter before parsing the JSON"
      },
      {
        "letter": "B",
        "text": "Replace the time filter with an unscoped search"
      },
      {
        "letter": "C",
        "text": "Parse every column before reducing the result set"
      },
      {
        "letter": "D",
        "text": "Expand the query to union all available schema tables"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/sc-200-practice-test-5/",
    "explanation": "Microsoft's advanced hunting query optimization guidance recommends applying time and other filters as early as possible in the query, before resource-intensive operations such as parsing JSON, so that functions like parse_json() run only against the already-reduced result set. Replacing the time filter with an unscoped search, parsing every column up front, or unioning across all schema tables all increase the data volume processed and push the query further toward (or past) its resource limits.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-best-practices"
  },
  {
    "id": "spt-SCD1-D1-01",
    "number": 192,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A SOC wants email messages only when High-severity endpoint alerts affect devices in the production-server device group. Which configuration most directly provides that filtering?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "An alert email rule scoped to the production-server group and High severity"
      },
      {
        "letter": "B",
        "text": "A Sentinel automation rule that assigns every incident to the server team"
      },
      {
        "letter": "C",
        "text": "A Sentinel workbook filtered to the production-server device group"
      },
      {
        "letter": "D",
        "text": "A Defender XDR Threat analytics notification rule filtered by report tags"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "Defender XDR's email alert notification rules let you choose both the alert severity level (such as High) and the specific device groups the rule applies to, so a rule scoped to the production-server group with High severity delivers exactly the targeted emails described. A Sentinel automation rule only assigns/handles incidents inside Sentinel and doesn't send scoped emails by itself, a workbook is a visualization/reporting surface rather than a notification mechanism, and a Threat analytics notification rule is filtered by report tags, not by device group and alert severity.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/configure-email-notifications"
  },
  {
    "id": "spt-SCD1-D1-02",
    "number": 193,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "An analyst wants email only when Microsoft publishes or updates Threat analytics reports tagged for ransomware, rather than notifications for every new security alert. What should be configured?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "An incident notification rule filtered to High severity"
      },
      {
        "letter": "B",
        "text": "A Threat analytics notification rule filtered by report tag"
      },
      {
        "letter": "C",
        "text": "An endpoint alert notification rule scoped to a device group"
      },
      {
        "letter": "D",
        "text": "A Sentinel scheduled analytics rule that emails the analyst"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "Threat analytics notification rules are configured separately from alert/incident notifications and let you choose to be emailed only when reports of a certain type or tag (such as Ransomware) are published or updated, rather than for every new alert. An incident or endpoint alert notification rule reacts to live detections, not to threat-report publication, and a Sentinel scheduled analytics rule generates alerts from log queries rather than tracking Microsoft's curated threat analytics content.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/m365d-threat-analytics-notifications"
  },
  {
    "id": "spt-SCD1-D1-03",
    "number": 194,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A Defender for Endpoint device group uses Full - remediate threats automatically. Automated investigation determines that a file is malicious. What should an analyst expect?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The remediation action waits for approval on the Action center Pending tab"
      },
      {
        "letter": "B",
        "text": "Automatic remediation, with the result recorded in Action center History"
      },
      {
        "letter": "C",
        "text": "The investigation records a verdict but never performs a remediation action"
      },
      {
        "letter": "D",
        "text": "The device is automatically deleted from its Defender device group"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "With a device group set to Full - remediate threats automatically, once automated investigation reaches a Malicious verdict for a piece of evidence, the appropriate remediation action (e.g., quarantining the file) is taken automatically without waiting for analyst approval, and the completed action is logged on the Action center's History tab for review (and can be undone if needed). The Pending tab is only used when a device group's automation level requires approval; Full automation does not wait there, does not skip taking action, and does not delete the device from its group.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/manage-auto-investigation"
  },
  {
    "id": "spt-SCD1-D1-04",
    "number": 195,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A device group is configured as Semi - require approval for all folders. Automated investigation proposes remediation of a malicious file, but no analyst approves or rejects the action. What happens to the pending action?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "It is approved automatically after 24 hours"
      },
      {
        "letter": "B",
        "text": "It times out after 7 days, which is treated as a rejection"
      },
      {
        "letter": "C",
        "text": "It remains pending until the device is removed from the group"
      },
      {
        "letter": "D",
        "text": "It is promoted to full automation after the next investigation"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "Under a Semi automation level that requires approval for all remediation, a proposed action is logged to the Action center's Pending tab and simply stays there awaiting an explicit Approve or Reject by an analyst; Microsoft's documentation on the Action center and automated investigations describes no automatic time-based expiration, auto-approval, or auto-rejection of pending items. The claimed 24-hour auto-approval, 7-day auto-rejection, and automatic promotion to full automation are not features documented for Defender for Endpoint's Action center—the action remains pending indefinitely until manually reviewed (or the device/group configuration changes).",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/auto-investigation-action-center"
  },
  {
    "id": "spt-SCD1-D1-05",
    "number": 196,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A workstation matches the membership rules for two Defender for Endpoint device groups. One group has rank 1 and the other has rank 3. Which group receives the device?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Both groups, because matching groups are cumulative"
      },
      {
        "letter": "B",
        "text": "The rank 3 group, because higher numbers have greater priority"
      },
      {
        "letter": "C",
        "text": "The rank 1 group, because rank 1 has highest priority"
      },
      {
        "letter": "D",
        "text": "Neither group until an administrator resolves the overlap manually"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "Defender for Endpoint device groups are ranked, and a device group with rank 1 is the highest-ranked group; when a device's attributes match the membership rules of more than one group, it is added only to the single highest-ranked (lowest rank number) matching group, not to both and not to the lowest-ranked one. There is no cumulative membership across matching groups, and overlap is resolved automatically by rank rather than requiring manual administrator intervention.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/machine-groups"
  },
  {
    "id": "spt-SCD1-D1-06",
    "number": 197,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "An organization enables Defender for Endpoint role-based access control. A user previously relied only on the Microsoft Entra Security Reader role for read-only portal access. What should the security administrator plan for?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The user keeps identical access because Entra read-only roles bypass Defender RBAC"
      },
      {
        "letter": "B",
        "text": "The user loses portal access until assigned through Defender RBAC"
      },
      {
        "letter": "C",
        "text": "The user automatically receives the Defender for Endpoint Global Administrator role"
      },
      {
        "letter": "D",
        "text": "The user can view all devices but loses only the ability to export reports"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "Microsoft Defender for Endpoint documentation explicitly states that turning on role-based access control causes users who previously had only read-only access through a Microsoft Entra role (such as Security Reader) to lose portal access until they are explicitly assigned a role through Defender for Endpoint's own RBAC. Entra-only read roles do not bypass Defender RBAC once it's enabled, the user is not automatically granted the Global Administrator role, and the impact is a full loss of access rather than merely losing export capability.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/rbac"
  },
  {
    "id": "spt-SCD1-D1-07",
    "number": 198,
    "topic": "Manage a security operations environment",
    "type": "multi-select",
    "text": "A team is piloting an attack surface reduction rule before broad enforcement and is also testing a user-facing temporary exception workflow. Which TWO statements about ASR rule modes are correct?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Audit mode evaluates detections without blocking the matching activity"
      },
      {
        "letter": "B",
        "text": "Warn mode can provide a temporary 24-hour bypass after approval"
      },
      {
        "letter": "C",
        "text": "Audit mode permanently excludes the detected file from every ASR rule"
      },
      {
        "letter": "D",
        "text": "Warn mode disables the rule until an administrator manually re-enables it"
      },
      {
        "letter": "E",
        "text": "Block mode records events but intentionally allows the activity to continue"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "Audit mode logs what an ASR rule would have blocked without actually blocking the activity, which is exactly how a pilot is run before enforcement. Warn mode behaves like Block but shows the end user a notification with an Unblock option; selecting it bypasses the block for that device/user/file/process combination for 24 hours, after which the block resumes. Audit mode does not create a permanent file exclusion (exclusions are a separate, explicit list), Warn mode does not disable the rule itself (the rule stays active and simply re-blocks after the 24-hour window), and Block mode stops the activity outright rather than letting it continue.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-deployment-implement"
  },
  {
    "id": "spt-SCD1-D1-08",
    "number": 199,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A scheduled penetration test will create predictable Sentinel incidents for 3 days. The SOC wants a temporary automation rule to handle this known noise and then stop automatically. Which setting best supports that plan?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Set an expiration date on the automation rule"
      },
      {
        "letter": "B",
        "text": "Set the analytics rule lookback period to 3 days"
      },
      {
        "letter": "C",
        "text": "Change the incident provider to Microsoft Defender XDR"
      },
      {
        "letter": "D",
        "text": "Create a workbook parameter for the penetration-test dates"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "Microsoft Sentinel automation rules support an optional expiration date/time, after which the rule is automatically disabled with no manual cleanup required. This is the documented pattern for handling short, predictable noise such as a multi-day penetration test: the rule applies only while the test is running and then stops on its own. Changing the analytics rule's lookback period affects query timing rather than incident handling, switching the incident provider is unrelated to suppressing known noise, and a workbook parameter only affects visualization, not automated incident actions.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/create-manage-use-automation-rules"
  },
  {
    "id": "spt-SCD1-D1-09",
    "number": 200,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A Sentinel automation rule uses the When alert is created trigger. The analyst opens Run playbook but the intended playbook is unavailable in the selection list. The playbook starts with an incident trigger. What is the most direct fix?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Use an alert-triggered playbook so its trigger matches the rule"
      },
      {
        "letter": "B",
        "text": "Increase the automation rule order so the playbook appears later"
      },
      {
        "letter": "C",
        "text": "Convert the playbook to a Sentinel workbook before attaching it"
      },
      {
        "letter": "D",
        "text": "Change the playbook resource group to the Sentinel workspace resource group"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "An automation rule's Run playbook action only lists playbooks whose Logic App trigger type matches the automation rule's own trigger (alert-trigger rules can only run alert-triggered playbooks; incident-trigger rules can only run incident-triggered playbooks). Since the rule uses the alert trigger but the existing playbook starts with an incident trigger, the playbook is hidden from the picker; using or rebuilding the playbook with an alert trigger is the direct fix. Reordering the rule, converting the playbook to a workbook, or moving it to the Sentinel resource group do not address the trigger mismatch that is actually hiding it.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/automation/run-playbooks"
  },
  {
    "id": "spt-SCD1-D1-10",
    "number": 201,
    "topic": "Manage a security operations environment",
    "type": "multi-select",
    "text": "An analyst must open a Sentinel incident and manually run an existing playbook on that incident. Which TWO Azure roles directly cover those two capabilities?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Sentinel Responder"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel Playbook Operator"
      },
      {
        "letter": "C",
        "text": "Microsoft Sentinel Reader"
      },
      {
        "letter": "D",
        "text": "Log Analytics Contributor"
      },
      {
        "letter": "E",
        "text": "Microsoft Sentinel Automation Contributor"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "Microsoft Sentinel Responder grants the ability to view, triage, and manage incidents (including opening one), while Microsoft Sentinel Playbook Operator specifically grants permission to manually trigger a playbook run; the two roles together cover exactly the two capabilities described. Microsoft Sentinel Reader is read-only and grants neither action, Log Analytics Contributor manages workspace data but not incident or playbook execution rights, and \"Microsoft Sentinel Automation Contributor\" is not an actual built-in Azure role.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/roles"
  },
  {
    "id": "spt-SCD1-D1-11",
    "number": 202,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A SOC finds a Microsoft Sentinel workbook template that is delivered by a Content hub solution but the template is not available in the workspace. What should be done before the team can use that template?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Install the relevant solution or standalone workbook from Content hub"
      },
      {
        "letter": "B",
        "text": "Create an NRT analytics rule with the same name as the workbook template"
      },
      {
        "letter": "C",
        "text": "Move the workspace table plan from Analytics to Data Lake"
      },
      {
        "letter": "D",
        "text": "Assign every SOC analyst the Global Administrator role"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "Content hub is the central catalog for all of Microsoft Sentinel's out-of-the-box content, including workbooks; a workbook template only shows up under Workbooks > Templates in a given workspace once the solution package (or the standalone workbook item) that contains it has been installed from Content hub. Creating an NRT analytics rule, changing a table's plan to Data Lake, or granting every analyst Global Administrator do nothing to make a Content-hub-delivered workbook template appear.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/sentinel-solutions-deploy"
  },
  {
    "id": "spt-SCD1-D1-12",
    "number": 203,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A high-volume table is moved from the Analytics tier to Data Lake-only storage to reduce real-time ingestion cost. Which consequence should the SOC expect for that table?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Real-time Sentinel analytics on that table stop working"
      },
      {
        "letter": "B",
        "text": "The table is deleted as soon as its Analytics retention period ends"
      },
      {
        "letter": "C",
        "text": "The table can no longer be queried with KQL under any circumstances"
      },
      {
        "letter": "D",
        "text": "All historical data is automatically promoted back to the Analytics tier each day"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "The Data Lake (Auxiliary) tier is built for low-cost long-term retention and on-demand KQL/Spark jobs, not for Microsoft Sentinel's real-time analytics engine, so scheduled analytics rules and custom detections cannot run directly against data that lives only in the lake. Moving a table out of the Analytics tier therefore stops real-time rule matching on that table. The table is not deleted when Analytics retention ends, it can still be queried through lake KQL jobs (just not with real-time analytics or hunting), and there is no automatic daily promotion of lake data back into the Analytics tier.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/manage-data-overview"
  },
  {
    "id": "spt-SCD1-D1-13",
    "number": 204,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A SOC optimization recommends reducing ingestion for a table. The team reviews the recommendation and decides not to implement it because the data is required by a regulatory control. Which optimization action best records that decision?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Complete"
      },
      {
        "letter": "B",
        "text": "Dismiss"
      },
      {
        "letter": "C",
        "text": "Mark as in progress"
      },
      {
        "letter": "D",
        "text": "Trigger evaluation"
      }
    ],
    "correctLetters": [
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "SOC optimization recommendations can be marked Complete, left in progress, or Dismissed; Dismiss is the action meant for recommendations the team has reviewed and deliberately decided not to act on, such as when regulatory requirements justify keeping the ingestion as-is. Dismiss removes it from the active list while preserving a record that can be reactivated later if circumstances change. Complete would incorrectly imply the recommended action was carried out, \"mark as in progress\" implies ongoing work toward implementing it, and \"trigger evaluation\" merely recalculates the recommendation rather than recording a decision.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/soc-optimization/soc-optimization-access"
  },
  {
    "id": "spt-SCD1-D1-14",
    "number": 205,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A company wants to reduce Windows Security event volume while retaining a threat-focused set of important events. A complete sign-in/sign-out audit trail is not required. Which Windows Security Events via AMA collection set best fits?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "All events"
      },
      {
        "letter": "B",
        "text": "Common"
      },
      {
        "letter": "C",
        "text": "Minimal"
      },
      {
        "letter": "D",
        "text": "Custom with every Security event ID selected"
      }
    ],
    "correctLetters": [
      "C"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "The Windows Security Events via AMA connector offers four collection tiers: All Events, Common, Minimal, and Custom. Minimal is explicitly the smallest, threat-focused set, covering only events that may indicate a successful breach plus a few very-low-frequency important events, and it does not provide a full sign-in/sign-out audit trail. Common still aims to preserve a fuller audit capability (just trimmed down from All), so it does not fit a requirement to drop the complete sign-in/out trail, while All Events and a fully custom selection of every event ID both reproduce the full, high-volume data set.",
    "referenceUrl": "https://techcommunity.microsoft.com/blog/microsoftdefendercloudblog/how-to-configure-security-events-collection-with-azure-monitor-agent/3770719"
  },
  {
    "id": "spt-SCD1-D1-15",
    "number": 206,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "An engineer creates a generic Azure Monitor Agent data collection rule for the Windows Security log and sends it to Log Analytics. Built-in Sentinel detections that query SecurityEvent return no data. Which change most directly aligns the collection with those detections?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Use Windows Security Events via AMA so records land in SecurityEvent"
      },
      {
        "letter": "B",
        "text": "Add a workbook that aliases Event to SecurityEvent at query time"
      },
      {
        "letter": "C",
        "text": "Move the Event table to the Data Lake tier and wait for schema conversion"
      },
      {
        "letter": "D",
        "text": "Enable a Threat Intelligence TAXII connector for the same workspace"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "A generic Azure Monitor Agent DCR built directly against the Windows Event Log sends Security log events to the generic Event table, whereas Microsoft Sentinel's purpose-built \"Windows Security Events via AMA\" connector uses its own DCR template to route the same underlying events into the SecurityEvent table, which is the schema Sentinel's built-in analytics rules query. Switching to that connector is the direct fix. Aliasing Event to SecurityEvent in a workbook doesn't change what the analytics rule engine itself queries, moving the table to Data Lake would remove it from real-time analytics entirely, and a TI TAXII connector is unrelated to Windows event ingestion.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securityevent"
  },
  {
    "id": "spt-SCD1-D1-16",
    "number": 207,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A security engineer needs Azure resource platform logs available for Microsoft Sentinel queries in the workspace where Sentinel is enabled. Which diagnostic-setting destination should be selected?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Send to a Log Analytics workspace"
      },
      {
        "letter": "B",
        "text": "Archive only to an Azure Storage account"
      },
      {
        "letter": "C",
        "text": "Stream only to an Event Hubs namespace"
      },
      {
        "letter": "D",
        "text": "Send only to a partner solution outside Azure Monitor"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "For Azure resource (platform) logs to be queryable with KQL by Microsoft Sentinel's analytics rules and hunting queries, the diagnostic setting must send them to the Log Analytics workspace where Sentinel is enabled — that is the only destination among the options that lands the data in a Sentinel-queryable table. Archiving to Azure Storage or streaming to Event Hubs are meant for long-term retention or external/third-party consumption and do not by themselves make the logs queryable in the workspace, and sending only to an outside partner solution keeps the data outside Azure Monitor and Sentinel altogether.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/connect-services-diagnostic-setting-based"
  },
  {
    "id": "spt-SCD1-D1-17",
    "number": 208,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A custom Sentinel detection written before 2026 still queries the legacy ThreatIntelligenceIndicator table and now misses newly ingested intelligence. Which table should the detection use for STIX indicator data in the current schema?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "ThreatIntelIndicators"
      },
      {
        "letter": "B",
        "text": "SecurityAlert"
      },
      {
        "letter": "C",
        "text": "CommonSecurityLog for CEF-formatted device records"
      },
      {
        "letter": "D",
        "text": "SentinelHealth for platform health records"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "Microsoft Sentinel moved to an enhanced, STIX-aligned threat intelligence data model built around the new ThreatIntelIndicators (and companion ThreatIntelObjects) tables; ingestion into the legacy ThreatIntelligenceIndicator table was discontinued, so any detection still querying that old table silently stops seeing newly ingested indicators. SecurityAlert stores generated alerts rather than raw TI indicators, CommonSecurityLog holds CEF-formatted device logs, and SentinelHealth tracks platform health records — none of these hold STIX indicator data.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/work-with-stix-objects-indicators"
  },
  {
    "id": "spt-SCD1-D1-18",
    "number": 209,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "An analyst configures a scheduled Sentinel analytics rule to run every 15 minutes but sets its query lookback period to only 5 minutes. Which adjustment follows the scheduled-rule timing requirement?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Increase the query period to at least 15 minutes"
      },
      {
        "letter": "B",
        "text": "Reduce the query period to 1 minute"
      },
      {
        "letter": "C",
        "text": "Change the rule to an anomaly template without a query"
      },
      {
        "letter": "D",
        "text": "Keep the values because query frequency can exceed query period"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "For a scheduled analytics rule, the query lookback period (query period) must be greater than or equal to the run frequency, so that each run's search window fully covers the time elapsed since the previous run and no events are skipped. With the rule running every 15 minutes but only looking back 5 minutes, each run would miss roughly 10 minutes of events between executions, so the lookback period needs to be raised to at least 15 minutes. Reducing the period further widens the gap, switching to an anomaly template changes the rule type unnecessarily, and the claim that frequency can exceed period describes the relationship backwards from how Sentinel actually validates it.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/scheduled-rules-overview"
  },
  {
    "id": "spt-SCD1-D1-19",
    "number": 210,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A scheduled Sentinel analytics rule returns a SeverityFromQuery column whose value varies with each result. The SOC wants each generated alert to use that result-specific severity instead of the static severity configured on the rule. Which feature should be used?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Alert details override"
      },
      {
        "letter": "B",
        "text": "Entity mapping for investigation context"
      },
      {
        "letter": "C",
        "text": "Incident grouping for alert aggregation"
      },
      {
        "letter": "D",
        "text": "Query suppression after a generated result"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "The custom alert details (\"alert details override\") feature lets a scheduled rule populate properties such as AlertSeverity directly from a column in the query results — for example a SeverityFromQuery field — for each generated alert instance, overriding the single static severity configured on the rule's General tab. Entity mapping only maps query columns to investigation entities and has no effect on severity, incident grouping controls how multiple alerts combine into one incident, and query suppression only controls whether and for how long the query pauses after a match; none of these three change per-alert severity.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/customize-alert-details"
  },
  {
    "id": "spt-SCD1-D1-20",
    "number": 211,
    "topic": "Manage a security operations environment",
    "type": "single-choice",
    "text": "A new Sentinel workspace has customizable anomaly templates available. An analyst wants to inspect anomalies produced by the built-in templates before changing any thresholds. Which statement best describes the default behavior?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "They are active by default and write queryable results to the Anomalies table"
      },
      {
        "letter": "B",
        "text": "Anomaly rules remain disabled until a custom machine-learning model is uploaded"
      },
      {
        "letter": "C",
        "text": "Anomalies are written only to SecurityAlert and cannot be queried directly"
      },
      {
        "letter": "D",
        "text": "Each anomaly template requires a playbook before it can generate a result"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/",
    "explanation": "Microsoft Sentinel's customizable, machine-learning-based anomaly rule templates are tuned by Microsoft's data science team to deliver value \"right out of the box,\" meaning they run actively by default and write their results — including the triggering rule name and an anomaly score — into the queryable Anomalies table, letting an analyst review real output before changing any threshold. They do not require uploading a custom model, their results are not confined to SecurityAlert only (they are directly queryable in their own table), and no playbook is a prerequisite for a template to generate a result.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/soc-ml-anomalies"
  },
  {
    "id": "spt-SCD2-D2-01",
    "number": 212,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A SOC has a large incident queue and needs to decide which case deserves attention first. An analyst opens the incident summary pane before entering the full investigation. Which information is specifically intended to support that prioritization decision?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The incident priority assessment and the factors influencing its priority score"
      },
      {
        "letter": "B",
        "text": "The raw KQL text from every analytics rule that contributed an alert"
      },
      {
        "letter": "C",
        "text": "The complete device timeline for every endpoint represented in the incident"
      },
      {
        "letter": "D",
        "text": "The retention policy for each data source that supplied incident evidence"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "Selecting an incident row without opening the full incident page opens a summary side pane that Microsoft documents as showing \"the priority assessment and the factors influencing the priority score,\" along with incident details and recommended actions — content specifically designed to help an analyst triage and choose which incident to work on before committing to a full investigation. Raw analytics-rule KQL, complete per-device timelines, and data-source retention policies are all deeper investigation details surfaced elsewhere in the incident, not in this triage-focused summary pane.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/incident-queue"
  },
  {
    "id": "spt-SCD2-D2-02",
    "number": 213,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An analyst is tracing a multistage attack in the Defender XDR attack story and confirms that one displayed device must be isolated immediately. What is the main workflow advantage of taking the response action from the attack story?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "It lets the analyst remediate an entity while keeping the attack context visible"
      },
      {
        "letter": "B",
        "text": "It converts every related alert into a separate Microsoft Sentinel incident"
      },
      {
        "letter": "C",
        "text": "It permanently suppresses future alerts involving the same device and user"
      },
      {
        "letter": "D",
        "text": "It exports the entire incident automatically to a Purview eDiscovery review set"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "The Defender XDR attack story lets an analyst open an entity's pane directly from the incident graph and take a remediation action, such as isolating a device or deleting a file, \"without losing context\" — the full attack graph and timeline stay visible throughout. This is the documented workflow advantage of acting from this view rather than leaving it. It does not split the incident into separate Sentinel incidents, it does not itself create any permanent alert suppression (that is a distinct, explicit action), and it has no automatic eDiscovery export behavior.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/investigate-incidents"
  },
  {
    "id": "spt-SCD2-D2-03",
    "number": 214,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A Defender for Cloud incident has a documented containment workflow implemented as an Azure Logic App. The analyst wants to launch that workflow directly while responding to the incident. Which Take action option should be used?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Trigger automated response"
      },
      {
        "letter": "B",
        "text": "Mitigate the threat"
      },
      {
        "letter": "C",
        "text": "Prevent future attacks"
      },
      {
        "letter": "D",
        "text": "Suppress similar alerts"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "In the Defender for Cloud alert/incident Take action tab, \"Trigger automated response\" is the specific option that lets an analyst select and run an Azure Logic App as the response to the alert. \"Mitigate the threat\" only surfaces manual remediation steps, \"Prevent future attacks\" surfaces hardening security recommendations, and \"Suppress similar alerts\" creates a suppression rule — none of the other three launches a Logic App.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/manage-respond-alerts"
  },
  {
    "id": "spt-SCD2-D2-04",
    "number": 215,
    "topic": "Respond to security incidents",
    "type": "multi-select",
    "text": "After investigating a Defender for Cloud incident, the team concludes that the activity is expected in this environment but also wants guidance that reduces exposure to this attack pattern. Which TWO Take action capabilities address those goals?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Suppress similar alerts for future detections with the same characteristics"
      },
      {
        "letter": "B",
        "text": "Review security recommendations under Prevent future attacks"
      },
      {
        "letter": "C",
        "text": "Collect a Defender for Endpoint investigation package from every Azure resource"
      },
      {
        "letter": "D",
        "text": "Create a Purview eDiscovery hold for the subscription"
      },
      {
        "letter": "E",
        "text": "Move all correlated alerts to the MicrosoftGraphActivityLogs table"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "When an alert is confirmed to reflect expected activity, \"Suppress similar alerts\" lets the analyst create a suppression rule so future alerts matching the same characteristics stop generating noise, while \"Prevent future attacks\" surfaces the related security recommendations that reduce exposure to that same attack pattern going forward — matching both stated goals. Collecting a Defender for Endpoint investigation package is a device-level action unrelated to a Defender for Cloud incident's Take action tab, and creating a Purview eDiscovery hold or moving alerts into MicrosoftGraphActivityLogs are not options offered there at all.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/defender-for-cloud/manage-respond-alerts"
  },
  {
    "id": "spt-SCD2-D2-05",
    "number": 216,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A user triggers a sign-in risk level covered by a risk-based Conditional Access policy. The activity is legitimate, and the user successfully completes the required multifactor authentication challenge. What should happen to that sign-in risk?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "It is remediated after the successful multifactor authentication"
      },
      {
        "letter": "B",
        "text": "It stays at risk until an administrator resets the user's password"
      },
      {
        "letter": "C",
        "text": "It becomes confirmed compromised because MFA was required"
      },
      {
        "letter": "D",
        "text": "It is converted into a Microsoft Defender for Identity alert"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "When risk-based Conditional Access requires MFA for a risky sign-in and the user successfully completes that challenge, Microsoft Entra ID Protection automatically marks the sign-in risk as remediated — the risk state changes from 'At risk' to 'Remediated' and the risk detail records 'User passed multifactor authentication.' No administrator action, such as a password reset, is needed because MFA itself is the configured remediation control for sign-in risk. The sign-in cannot become 'confirmed compromised' as a result of a successful authentication, and Identity Protection risk states have no connection to Defender for Identity alerting.",
    "referenceUrl": "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-remediate-unblock"
  },
  {
    "id": "spt-SCD2-D2-06",
    "number": 217,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A password-based user is subject to a Conditional Access user-risk policy that requires risk remediation. The user knows the current password and is already registered for MFA. Which sequence remediates the user risk through the policy?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Complete MFA, then perform a secure password change"
      },
      {
        "letter": "B",
        "text": "Perform self-service password reset without first authenticating"
      },
      {
        "letter": "C",
        "text": "Dismiss the user risk, then continue using the existing password"
      },
      {
        "letter": "D",
        "text": "Approve the risky sign-in from the Defender XDR Action center"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "Risk-based Conditional Access policies that require risk remediation prompt a password-based user to verify with multifactor authentication and then complete a secure password change on their next sign-in; successfully finishing both steps automatically clears the user risk. This secure password change is distinct from self-service password reset (SSPR) and is only recognized as remediation when it follows the MFA challenge triggered by the policy — an SSPR flow performed without first authenticating doesn't satisfy that requirement. Simply dismissing the risk or having an administrator approve the sign-in from the Defender XDR Action center does not remediate the underlying user risk recorded in Identity Protection.",
    "referenceUrl": "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-remediate-unblock"
  },
  {
    "id": "spt-SCD2-D2-07",
    "number": 218,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A company uses Defender for Identity sensors on domain controllers and wants analysts to disable compromised on-premises Active Directory users from Defender. Why should the managed action account be separate from the Directory Service account?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "It needs write permissions for remediation; the Directory Service account is read-only"
      },
      {
        "letter": "B",
        "text": "The Directory Service account can change passwords but cannot read identity information"
      },
      {
        "letter": "C",
        "text": "The managed action account is used only to query Microsoft Graph activity logs"
      },
      {
        "letter": "D",
        "text": "The Directory Service account must be a Global Administrator in Microsoft Entra ID"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "The Directory Service account used by Defender for Identity sensors to query Active Directory only needs read permissions and is deliberately kept read-only. Response actions such as disabling a compromised on-premises AD user require write access to attributes like userAccountControl, so a separate managed action account with write permissions has to be configured for that purpose. Combining both roles in a single account would give one credential both broad read access and the power to make directory changes, which is exactly what keeping them separate is meant to prevent; neither account needs Global Administrator rights in Microsoft Entra ID or is scoped to Microsoft Graph activity logs.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-for-identity/deploy/manage-action-accounts"
  },
  {
    "id": "spt-SCD2-D2-08",
    "number": 219,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An email security analyst reviews a message in Threat Explorer and confirms that Microsoft incorrectly classified the message as malicious. The analyst wants to provide that verdict back to Microsoft from the investigation workflow. Which action fits?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Submit the message to Microsoft as confirmed clean"
      },
      {
        "letter": "B",
        "text": "Hard delete the message from every recipient mailbox"
      },
      {
        "letter": "C",
        "text": "Create an alert suppression rule for all messages from the sender"
      },
      {
        "letter": "D",
        "text": "Move the message to the Recoverable Items folder"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "When Threat Explorer's verdict incorrectly flags a legitimate message as malicious, the analyst uses the Take action / Submit to Microsoft for review workflow to report the message as clean, feeding that correction back into Microsoft's detection systems. Hard-deleting the message, suppressing all future alerts from the sender, or moving the item to Recoverable Items don't communicate a false-positive verdict to Microsoft and only change the local mailbox state. Submitting as confirmed clean is the supported way to dispute a wrong 'malicious' classification from inside the investigation flow.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-office-365/submissions-admin"
  },
  {
    "id": "spt-SCD2-D2-09",
    "number": 220,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An administrator submits a manual email remediation from Threat Explorer and the action is approved. Where should another responder go to track the remediation status and review its approval ID and history?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "The Microsoft Defender XDR Action center History tab"
      },
      {
        "letter": "B",
        "text": "The Microsoft Sentinel Anomalies table"
      },
      {
        "letter": "C",
        "text": "The Microsoft Entra risky users report"
      },
      {
        "letter": "D",
        "text": "The Purview eDiscovery review set statistics page"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "All remediation actions taken on email — whether automated by AIR or manually approved from Threat Explorer — are logged in the unified Action center's History tab, which shows the action's current status together with its Approval ID and full history. Any responder can filter that view by Approval ID, investigation ID, action type, or status to track a specific remediation. The Sentinel Anomalies table, the Entra risky users report, and the eDiscovery review set statistics page play no role in tracking Defender for Office 365 email remediation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/m365d-action-center"
  },
  {
    "id": "spt-SCD2-D2-10",
    "number": 221,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A Sentinel responder finishes an investigation and changes the incident status to Closed. Which additional item is required as part of closing the incident?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A closing classification reason"
      },
      {
        "letter": "B",
        "text": "A new analytics rule for the incident"
      },
      {
        "letter": "C",
        "text": "A Microsoft Graph application ID"
      },
      {
        "letter": "D",
        "text": "A downloadable investigation package"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "Microsoft Sentinel requires a mandatory closing classification (such as True Positive, Benign Positive, or one of the False Positive reasons) whenever an incident's status is set to Closed, so the reason for closing is always captured for later reporting and tuning. This classification step is separate from, and doesn't require, creating new analytics rules, recording a Graph application ID, or downloading an investigation package. The requirement exists specifically to stop incidents from being closed without a documented justification.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/incident-navigate-triage"
  },
  {
    "id": "spt-SCD2-D2-11",
    "number": 222,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An endpoint alert shows that a suspicious PowerShell process started shortly after a document viewer launched. The analyst wants to inspect the parent-child process relationship around that event. Which device-timeline capability is most useful?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Open the event's process tree view"
      },
      {
        "letter": "B",
        "text": "Export the incident classification history"
      },
      {
        "letter": "C",
        "text": "Start an eDiscovery Content search"
      },
      {
        "letter": "D",
        "text": "Create a Defender for Cloud suppression rule"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "The device timeline's process tree view visualizes the parent-child relationships between processes around a selected event, letting the analyst see exactly which process launched which — here, confirming whether the PowerShell process was spawned by the document viewer. Exporting incident classification history, starting an eDiscovery content search, or creating a Defender for Cloud suppression rule are unrelated capabilities that don't show process lineage. The process tree is the purpose-built view in Defender for Endpoint for this kind of parent-child investigation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/investigate-machines"
  },
  {
    "id": "spt-SCD2-D2-12",
    "number": 223,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "During a long endpoint investigation, an analyst marks several timeline events for follow-up and later wants the timeline to show only those marked events. What should the analyst do?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Enable the Flagged events timeline filter"
      },
      {
        "letter": "B",
        "text": "Change the incident severity to High"
      },
      {
        "letter": "C",
        "text": "Move the device into a new device group"
      },
      {
        "letter": "D",
        "text": "Run a full antivirus scan from Action center"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "Analysts can flag individual timeline events during a long investigation, and the timeline's Flagged events filter can then be enabled so only those marked events are displayed, making it easy to return to exactly the items earmarked for follow-up. Changing incident severity, moving the device to a different device group, or running a full antivirus scan don't affect which timeline events are shown. Flagging and filtering is specifically designed for this workflow of marking events for later review within a single investigation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/device-timeline-event-flag"
  },
  {
    "id": "spt-SCD2-D2-13",
    "number": 224,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A responder is in a Defender for Endpoint Live Response session and confirms that a malicious scheduled task provides persistence. Which Live Response command family is intended to remove a confirmed malicious entity such as a scheduled task?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "remediate"
      },
      {
        "letter": "B",
        "text": "putfile"
      },
      {
        "letter": "C",
        "text": "library"
      },
      {
        "letter": "D",
        "text": "collect"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "The remediate command family in live response takes direct action against a confirmed malicious entity on a device, including files, processes, registry values, and scheduled tasks, and the related undo command can later restore the removed entity if needed — making remediate the right choice for removing a malicious scheduled task that's providing persistence. putfile transfers files onto the device from the library, library lists or manages uploaded files, and collect gathers a forensic package; none of these three remove a malicious entity.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/live-response-command-examples"
  },
  {
    "id": "spt-SCD2-D2-14",
    "number": 225,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An incident responder uploads a trusted diagnostic utility to the Live Response library and needs to place that utility onto an affected device for the current session. Which command is designed for this transfer?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "putfile"
      },
      {
        "letter": "B",
        "text": "analyze"
      },
      {
        "letter": "C",
        "text": "release"
      },
      {
        "letter": "D",
        "text": "undo"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "putfile uploads a file that has already been added to the live response library onto the device for the current session, which is exactly how a trusted diagnostic utility gets placed onto an affected machine for use during that session. analyze inspects a file or process rather than transferring it, release ends device containment, and undo reverses a previous remediate action — none of them place a library file onto the device.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/live-response-command-examples"
  },
  {
    "id": "spt-SCD2-D2-15",
    "number": 226,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A responder downloads a Defender for Endpoint investigation package and wants evidence of persistence configured through known Windows auto-start entry points. Which package folder is most directly relevant?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Autoruns"
      },
      {
        "letter": "B",
        "text": "NetworkConnections"
      },
      {
        "letter": "C",
        "text": "PrefetchFiles"
      },
      {
        "letter": "D",
        "text": "BrowserHistory"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "The Defender for Endpoint investigation package includes an Autoruns folder containing the registry contents of known auto-start entry points (ASEPs), making it the most direct place to look for evidence of persistence mechanisms configured to launch automatically. NetworkConnections, PrefetchFiles, and BrowserHistory capture other kinds of forensic evidence — network state, program execution history, and browsing activity — but not auto-start configuration.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/respond-machine-alerts"
  },
  {
    "id": "spt-SCD2-D2-16",
    "number": 227,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An analyst realizes that a completed Defender response action should be reversed. The action type supports reversal. Where should the analyst review the completed action and initiate the undo operation?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Action center History"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel Content hub"
      },
      {
        "letter": "C",
        "text": "Microsoft Entra risky sign-ins"
      },
      {
        "letter": "D",
        "text": "Purview eDiscovery search statistics"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "Completed response actions that support reversal — such as isolation or certain automated remediation steps — are reviewed and can be undone from the unified Action center's History tab, which keeps an auditable record of every action taken and lets an authorized responder initiate the undo. Microsoft Sentinel's Content hub, Entra's risky sign-ins report, and the eDiscovery search statistics page have no role in tracking or reversing Defender response actions.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/m365d-action-center"
  },
  {
    "id": "spt-SCD2-D2-17",
    "number": 228,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A compromised endpoint uses a third-party antivirus product, so Microsoft Defender Antivirus is running in passive mode. The responder wants to use the Defender for Endpoint device action to scan the host for malware. What should the responder expect?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A Defender Antivirus scan can still be started on the device"
      },
      {
        "letter": "B",
        "text": "The scan action is unavailable whenever Defender Antivirus is passive"
      },
      {
        "letter": "C",
        "text": "The device must first be removed from Defender for Endpoint"
      },
      {
        "letter": "D",
        "text": "Only a Purview Audit search can inspect malware on that host"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "Microsoft Defender Antivirus can run alongside a third-party antivirus product in passive mode, and Defender for Endpoint's 'Run antivirus scan' response action still works in that state, triggering a quick or full Defender AV scan even though Defender AV isn't the active real-time protection engine. The scan isn't blocked by passive mode, so the device doesn't need to be removed from Defender for Endpoint, and a Purview Audit search has no ability to scan a device for malware.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-endpoint/respond-machine-alerts"
  },
  {
    "id": "spt-SCD2-D2-18",
    "number": 229,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "A responder exports Microsoft Purview Audit search results to CSV and needs to sort on individual event properties that are embedded inside the AuditData column. What is the recommended next processing step?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Transform the AuditData JSON into separate columns"
      },
      {
        "letter": "B",
        "text": "Rename AuditData to SecurityEvent before importing the file"
      },
      {
        "letter": "C",
        "text": "Convert every audit record into a Sentinel incident"
      },
      {
        "letter": "D",
        "text": "Hash the AuditData value and group by the resulting digest"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "Because the AuditData column in an exported audit log CSV holds a JSON object with many nested properties, Microsoft's documented approach is to use the JSON transform feature in Excel's Power Query Editor to expand AuditData into its own set of columns — one per property — so each can be individually sorted and filtered. Renaming the column, converting records into Sentinel incidents, or hashing the value don't expose the individual properties needed for that kind of analysis.",
    "referenceUrl": "https://learn.microsoft.com/en-us/purview/audit-log-export-records"
  },
  {
    "id": "spt-SCD2-D2-19",
    "number": 230,
    "topic": "Respond to security incidents",
    "type": "single-choice",
    "text": "An investigator runs a Microsoft Purview eDiscovery search and wants a quick sense of how much content matched, which locations hold most of it, and examples of the returned items before exporting the full results. Which search outputs provide that view?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Search statistics and a representative sample"
      },
      {
        "letter": "B",
        "text": "Defender XDR evidence verdicts and remediation status"
      },
      {
        "letter": "C",
        "text": "Microsoft Graph response codes and request URIs"
      },
      {
        "letter": "D",
        "text": "Defender for Endpoint device-timeline process trees"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "After running an eDiscovery search in Microsoft Purview, the Statistics result type shows summary data — the number of items found, the size of the results, and a breakdown by location — while the Sample result type shows a random sample of the matching items so the investigator can validate the query before committing to a full export. Defender XDR evidence verdicts, Microsoft Graph response codes, and Defender for Endpoint process trees belong to entirely different tools and don't describe eDiscovery search output.",
    "referenceUrl": "https://learn.microsoft.com/en-us/training/modules/purview-ediscovery-search/conduct-ediscovery-search"
  },
  {
    "id": "spt-SCD2-D2-20",
    "number": 231,
    "topic": "Respond to security incidents",
    "type": "multi-select",
    "text": "A responder is hunting suspicious Microsoft Graph API activity and needs to identify both the resource path that was requested and whether the API returned an authorization failure. Which TWO MicrosoftGraphActivityLogs fields directly provide those details?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "RequestUri"
      },
      {
        "letter": "B",
        "text": "ResponseStatusCode"
      },
      {
        "letter": "C",
        "text": "DurationMs"
      },
      {
        "letter": "D",
        "text": "ResponseSizeBytes"
      },
      {
        "letter": "E",
        "text": "Location"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/",
    "explanation": "The MicrosoftGraphActivityLogs table includes a RequestUri column that records the exact resource path requested and a ResponseStatusCode column that records the HTTP status code returned, such as 401 for an authorization failure. DurationMs and ResponseSizeBytes describe request performance and payload size rather than the resource path or outcome, and Location records only the serving region, not authorization status.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/microsoftgraphactivitylogs"
  },
  {
    "id": "spt-SCD3-D3-01",
    "number": 232,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A threat hunter suspects DLL side-loading on Windows endpoints and needs to identify which libraries were loaded by suspicious processes. Which Advanced Hunting table is the most appropriate starting point?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "DeviceImageLoadEvents"
      },
      {
        "letter": "B",
        "text": "DeviceNetworkInfo"
      },
      {
        "letter": "C",
        "text": "IdentityLogonEvents"
      },
      {
        "letter": "D",
        "text": "EmailAttachmentInfo"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "DeviceImageLoadEvents is the advanced hunting table purpose-built for DLL loading activity, recording which image (DLL) was loaded, its file path and hashes, and the process that loaded it — exactly the data needed to investigate DLL side-loading. DeviceNetworkInfo covers network configuration, IdentityLogonEvents covers Microsoft Entra ID sign-ins, and EmailAttachmentInfo covers email attachments, none of which record DLL load activity.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceimageloadevents-table"
  },
  {
    "id": "spt-SCD3-D3-02",
    "number": 233,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "An analyst is hunting for repeated interactive and remote logons to a specific workstation and wants endpoint authentication events tied to that device. Which table best fits the hunt?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "DeviceLogonEvents"
      },
      {
        "letter": "B",
        "text": "DeviceProcessEvents"
      },
      {
        "letter": "C",
        "text": "CloudAppEvents"
      },
      {
        "letter": "D",
        "text": "DeviceFileEvents"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "DeviceLogonEvents records user logon and authentication events on devices, including a LogonType column that distinguishes Interactive, Remote interactive (RDP), Network, Batch, and Service logons alongside the account, device, and remote IP details, making it the right table for hunting repeated interactive and remote logons on a specific workstation. DeviceProcessEvents tracks process creation, CloudAppEvents tracks cloud application activity, and DeviceFileEvents tracks file operations, none of which capture logon or authentication events.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicelogonevents-table"
  },
  {
    "id": "spt-SCD3-D3-03",
    "number": 234,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter finds a device communicating through an unexpected interface and needs the adapter name, MAC address, assigned IP addresses, DNS servers, and connected network information. Which Advanced Hunting table provides that configuration context?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "DeviceNetworkInfo"
      },
      {
        "letter": "B",
        "text": "DeviceNetworkEvents"
      },
      {
        "letter": "C",
        "text": "DeviceInfo"
      },
      {
        "letter": "D",
        "text": "DeviceEvents"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "DeviceNetworkInfo is the advanced hunting table that stores network configuration details for devices, including NetworkAdapterName, MacAddress, IP addresses, DNS server settings, and connected network/domain information. DeviceNetworkEvents instead logs discrete network connection events (not static configuration), DeviceInfo holds machine-level metadata like OS version and risk level, and DeviceEvents covers a broad range of endpoint activity events, none of which focus on adapter/IP/DNS configuration.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicenetworkinfo-table"
  },
  {
    "id": "spt-SCD3-D3-04",
    "number": 235,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter wants authentication evidence that can include on-premises Active Directory activity captured by Defender for Identity as well as authentication activity from Microsoft online services. Which table should be queried?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "IdentityLogonEvents"
      },
      {
        "letter": "B",
        "text": "DeviceLogonEvents"
      },
      {
        "letter": "C",
        "text": "IdentityQueryEvents"
      },
      {
        "letter": "D",
        "text": "CloudAppEvents"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "IdentityLogonEvents consolidates authentication activity captured on-premises by Microsoft Defender for Identity (Active Directory logons) together with sign-ins to Microsoft online services, giving a unified authentication evidence trail. DeviceLogonEvents only covers local/network logons on endpoints, IdentityQueryEvents captures query actions like DNS or SAM lookups rather than authentication, and CloudAppEvents records cloud app activity from Defender for Cloud Apps, not authentication specifically.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identitylogonevents-table"
  },
  {
    "id": "spt-SCD3-D3-05",
    "number": 236,
    "topic": "Perform threat hunting",
    "type": "multi-select",
    "text": "A phishing hunt starts from a suspicious email. The analyst needs to identify the URLs contained in the message and determine whether recipients later clicked those links through Safe Links. Which TWO Advanced Hunting tables directly provide those two views?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "EmailUrlInfo"
      },
      {
        "letter": "B",
        "text": "UrlClickEvents"
      },
      {
        "letter": "C",
        "text": "EmailAttachmentInfo"
      },
      {
        "letter": "D",
        "text": "DeviceNetworkInfo"
      },
      {
        "letter": "E",
        "text": "IdentityQueryEvents"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "EmailUrlInfo lists the URLs contained within an email message or its attachments, letting a hunter enumerate every link a phishing message carried. UrlClickEvents records what happened when a user actually clicked a link, including the Safe Links verdict (ActionType) and workload. EmailAttachmentInfo covers file attachments rather than URLs, DeviceNetworkInfo is endpoint network configuration, and IdentityQueryEvents relates to identity queries, so none of those answer the \"URLs in the email\" plus \"click outcome\" requirement.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-urlclickevents-table"
  },
  {
    "id": "spt-SCD3-D3-06",
    "number": 237,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A campaign uses the same malicious attachment name across many messages. The hunter wants attachment filenames, file types, and available file hashes from Defender for Office 365 telemetry. Which table is designed for this data?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "EmailAttachmentInfo"
      },
      {
        "letter": "B",
        "text": "EmailEvents"
      },
      {
        "letter": "C",
        "text": "AlertEvidence"
      },
      {
        "letter": "D",
        "text": "DeviceFileEvents"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "EmailAttachmentInfo is purpose-built to store attachment metadata from Defender for Office 365, including FileName, FileType/FileExtension, and hash values (SHA1/SHA256), which is exactly what's needed to track a recurring malicious attachment across many messages. EmailEvents describes the message delivery itself, not the attachment, AlertEvidence surfaces entities tied to generated alerts rather than raw attachment telemetry, and DeviceFileEvents tracks file activity on endpoints, not the email pipeline.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-emailattachmentinfo-table"
  },
  {
    "id": "spt-SCD3-D3-07",
    "number": 238,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A junior analyst understands the hunting goal but is not yet comfortable writing Kusto Query Language from scratch. Which Advanced Hunting mode is intended to let the analyst build the hunt by selecting filters and conditions instead?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Guided mode"
      },
      {
        "letter": "B",
        "text": "Advanced mode"
      },
      {
        "letter": "C",
        "text": "Graph mode"
      },
      {
        "letter": "D",
        "text": "Detection mode"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "Guided mode in Microsoft Defender XDR advanced hunting provides a visual query builder where an analyst selects a data domain, filters, and conditions from dropdowns, without needing to know KQL or the underlying schema. Advanced mode is the free-form KQL editor that assumes query-language proficiency, and \"Graph mode\" and \"Detection mode\" are not recognized advanced hunting modes.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-modes"
  },
  {
    "id": "spt-SCD3-D3-08",
    "number": 239,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A threat hunter has a useful Advanced Hunting query that every analyst in the same tenant should be able to find and run from the portal. Where should the query be saved?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Shared queries"
      },
      {
        "letter": "B",
        "text": "My queries"
      },
      {
        "letter": "C",
        "text": "Community queries"
      },
      {
        "letter": "D",
        "text": "Saved functions"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "Saving a query under Shared queries makes it visible and runnable by every analyst within the same tenant, which matches the requirement that the whole team can find and use it from the portal. My queries keeps it private to the author only, Community queries refers to query samples shared publicly on the Microsoft Sentinel GitHub repository rather than a tenant save location, and Saved functions is not an advanced hunting query-saving category.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-shared-queries"
  },
  {
    "id": "spt-SCD3-D3-09",
    "number": 240,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "Several hunts repeat the same normalization and enrichment logic with different input values. The team wants that query logic to be reusable with parameters instead of copying it into every hunt. Which Advanced Hunting feature best fits?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A custom function"
      },
      {
        "letter": "B",
        "text": "A hunting bookmark"
      },
      {
        "letter": "C",
        "text": "A summary rule"
      },
      {
        "letter": "D",
        "text": "An incident task"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "A custom function in advanced hunting packages reusable KQL logic (including normalization/enrichment steps and, with tabular parameters, dynamic inputs) so it can be invoked like a command across multiple queries instead of being copy-pasted. A hunting bookmark just preserves a specific result for later reference, a summary rule aggregates Sentinel log data on a schedule rather than acting as a reusable query building block, and an incident task is a workflow checklist item unrelated to query logic.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-custom-functions"
  },
  {
    "id": "spt-SCD3-D3-10",
    "number": 241,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "An Advanced Hunting query returns a Timestamp column. Without adding charting code, which visualization does the results experience automatically render to help the hunter spot bursts and unusual trends over time?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "An event-count timeline"
      },
      {
        "letter": "B",
        "text": "A Sentinel Graph path"
      },
      {
        "letter": "C",
        "text": "A process tree for every row"
      },
      {
        "letter": "D",
        "text": "A geographic heat map"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "When a query's results include a Timestamp (or TimeGenerated) column, the advanced hunting results experience automatically renders a timeline chart above the grid showing event counts over time, helping hunters spot spikes or unusual trends without writing any extra charting code. A Sentinel Graph path and a process tree are visualizations that require explicit entity/graph actions, and a geographic heat map is not an automatic default rendering in advanced hunting.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-query-results"
  },
  {
    "id": "spt-SCD3-D3-11",
    "number": 242,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter needs to keep the existing columns in a result set and add a new calculated field named AccountKey built from other columns. Which KQL operator is designed for that task?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "extend"
      },
      {
        "letter": "B",
        "text": "distinct"
      },
      {
        "letter": "C",
        "text": "summarize"
      },
      {
        "letter": "D",
        "text": "project-away"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "The extend operator appends one or more calculated columns to the existing result set while preserving all current columns, which is exactly what's needed to add a computed AccountKey field. distinct removes duplicate rows rather than adding columns, summarize collapses rows into aggregated groups (dropping non-grouped/non-aggregated columns), and project-away removes specified columns instead of adding one.",
    "referenceUrl": "https://learn.microsoft.com/en-us/kusto/query/extend-operator"
  },
  {
    "id": "spt-SCD3-D3-12",
    "number": 243,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A query returns thousands of authentication events, but the hunter only wants the unique combinations of AccountUpn and DeviceName that appear in the results. Which KQL operator is the most direct choice?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "distinct"
      },
      {
        "letter": "B",
        "text": "extend"
      },
      {
        "letter": "C",
        "text": "sort"
      },
      {
        "letter": "D",
        "text": "take"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "The distinct operator returns only the unique combinations of the specified columns, so distinct AccountUpn, DeviceName directly produces the unique pairs the hunter wants. extend adds new columns rather than deduplicating, sort only reorders rows without removing duplicates, and take simply returns an arbitrary subset of rows without regard to uniqueness.",
    "referenceUrl": "https://learn.microsoft.com/en-us/kusto/query/distinct-operator"
  },
  {
    "id": "spt-SCD3-D3-13",
    "number": 244,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A hunter groups events by source IP and wants an efficient estimate of how many different user accounts each IP attempted to authenticate as. Which KQL aggregation function best matches that requirement?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "dcount()"
      },
      {
        "letter": "B",
        "text": "count()"
      },
      {
        "letter": "C",
        "text": "make_list()"
      },
      {
        "letter": "D",
        "text": "arg_max()"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "dcount() computes an efficient approximate count of distinct values (here, distinct AccountUpn values) within each group, which scales well for large datasets like authentication logs grouped by source IP. count() just returns the total number of rows per group regardless of uniqueness, make_list() collects all values into an array rather than counting them, and arg_max() returns the row with the maximum value of an expression, not a distinct count.",
    "referenceUrl": "https://learn.microsoft.com/en-us/kusto/query/dcount-aggfunction"
  },
  {
    "id": "spt-SCD3-D3-14",
    "number": 245,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "While reviewing a hunting graph, an analyst selects a suspicious device and wants to reveal the next set of assets related to that node so the investigation can move outward from the initial result. Which graph action supports this?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Explore connected assets"
      },
      {
        "letter": "B",
        "text": "Create summary rule"
      },
      {
        "letter": "C",
        "text": "Promote to analytics tier"
      },
      {
        "letter": "D",
        "text": "Convert to shared query"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "In the advanced hunting graph, selecting a node and choosing \"Explore connected assets\" (or the \"+\" expand icon) reveals the next hop of related entities, letting the investigation expand outward from the initial device. The other options are not graph expansion actions: \"Create summary rule\" and \"Convert to shared query\" relate to Sentinel log aggregation and query management, and \"Promote to analytics tier\" refers to moving data lake query results into the analytics tier.",
    "referenceUrl": "https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-graph"
  },
  {
    "id": "spt-SCD3-D3-15",
    "number": 246,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "An identity hunter wants to determine which paths a compromised account could use through role assignments and group memberships to reach a critical Azure resource. Which capability is best suited to this relationship-heavy question?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Sentinel Graph"
      },
      {
        "letter": "B",
        "text": "A Microsoft Sentinel workbook"
      },
      {
        "letter": "C",
        "text": "Defender XDR Action center"
      },
      {
        "letter": "D",
        "text": "Microsoft Purview Audit export"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "Microsoft Sentinel graph (which includes the identity attack graph) models identities, Azure resources, and the role assignments/group memberships that connect them, letting an analyst visually trace the potential lateral-movement or privilege-escalation paths a compromised account could follow to reach a critical resource. A Sentinel workbook only visualizes pre-aggregated data without native relationship traversal, the Defender XDR Action center tracks remediation actions rather than access paths, and a Purview Audit export provides raw audit records without graph-based path analysis.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/identity-attack-graph"
  },
  {
    "id": "spt-SCD3-D3-16",
    "number": 247,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A team begins a proactive investigation with a written hypothesis and wants to record whether the hypothesis is validated, keep investigation notes, and track analytic rules or incidents created from the findings. Which Sentinel construct is designed for that workflow?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A hunt"
      },
      {
        "letter": "B",
        "text": "A workbook"
      },
      {
        "letter": "C",
        "text": "An automation rule"
      },
      {
        "letter": "D",
        "text": "A data collection rule"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "A hunt in Microsoft Sentinel is the dedicated construct for proactive investigations: it lets an analyst record a hypothesis, run and bookmark related queries, keep notes, and have new analytic rules or incidents created from the hunt automatically linked back to it for tracking. A workbook only visualizes data, an automation rule orchestrates incident handling actions, and a data collection rule governs how telemetry is ingested — none of these track a hypothesis-driven investigation lifecycle.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/hunts"
  },
  {
    "id": "spt-SCD3-D3-17",
    "number": 248,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "During a Sentinel hunt, an analyst bookmarks a suspicious event and later determines that the evidence is severe enough to require formal investigation by the incident-response queue. What should the analyst do with that bookmarked finding?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "Escalate the bookmark to an incident"
      },
      {
        "letter": "B",
        "text": "Convert it to a data connector"
      },
      {
        "letter": "C",
        "text": "Move it to a custom log table"
      },
      {
        "letter": "D",
        "text": "Turn it into an ingestion transformation"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "When a bookmarked finding from a hunt turns out to be severe, Microsoft Sentinel lets the analyst escalate that bookmark directly into an incident (via the Incident actions button), pulling the bookmark's evidence into the incident-response queue. The other options don't apply: bookmarks aren't converted into data connectors, custom log tables, or ingestion-time transformations — those are unrelated Sentinel data-pipeline constructs.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/hunts"
  },
  {
    "id": "spt-SCD3-D3-18",
    "number": 249,
    "topic": "Perform threat hunting",
    "type": "multi-select",
    "text": "A hunter needs to investigate long-retained Sentinel data and run a complex query that joins several tables before persisting useful results for further analysis. Which TWO characteristics make a Data lake KQL job appropriate?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "It can query historical data retained for up to 12 years"
      },
      {
        "letter": "B",
        "text": "It supports complex KQL such as joins and unions across tables"
      },
      {
        "letter": "C",
        "text": "It is optimized for hydrating results from one source table"
      },
      {
        "letter": "D",
        "text": "It queries the analytics tier without data lake onboarding"
      },
      {
        "letter": "E",
        "text": "It uses the restricted operator set associated with search jobs"
      }
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "A Microsoft Sentinel data lake KQL job can query historical data with a query time range of up to 12 years, and it supports nearly the full KQL operator set — including joins and unions across multiple workspaces/tables — which fits a complex multi-table query. It is not limited to a single source table (that's closer to a search job's scope), it requires data lake onboarding rather than running purely against the analytics tier, and the restricted operator set described belongs to search jobs, not KQL jobs, which support the broader KQL surface.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/datalake/kql-jobs"
  },
  {
    "id": "spt-SCD3-D3-19",
    "number": 250,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A SOC wants a background aggregation every 20 minutes over high-volume Basic-tier firewall data, and the workspace is not onboarded to the Sentinel data lake. Which feature is the better fit?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "A summary rule"
      },
      {
        "letter": "B",
        "text": "A KQL job"
      },
      {
        "letter": "C",
        "text": "A hunting bookmark"
      },
      {
        "letter": "D",
        "text": "A live response session"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "A summary rule aggregates data in the background on a configurable schedule (including short intervals) directly from any log tier, including Basic/Auxiliary-tier data, and writes the summarized results into an Analytics-tier table — all without requiring data lake onboarding. A KQL job is the data lake feature and explicitly requires the workspace to be onboarded to the Sentinel data lake, a hunting bookmark just preserves a single result rather than running recurring aggregation, and a live response session is an endpoint remote-investigation tool unrelated to log aggregation.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/summary-rules"
  },
  {
    "id": "spt-SCD3-D3-20",
    "number": 251,
    "topic": "Perform threat hunting",
    "type": "single-choice",
    "text": "A threat-hunting notebook needs reusable security-focused Python capabilities for querying data, enrichment, anomaly detection, and visualization. Which package is specifically designed for this use in Microsoft Sentinel notebooks?",
    "images": [],
    "choices": [
      {
        "letter": "A",
        "text": "MSTICPy"
      },
      {
        "letter": "B",
        "text": "pandas"
      },
      {
        "letter": "C",
        "text": "scikit-learn"
      },
      {
        "letter": "D",
        "text": "Matplotlib"
      }
    ],
    "correctLetters": [
      "A"
    ],
    "answerImage": null,
    "source": "https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/",
    "explanation": "MSTICPy is the Python package built specifically for Microsoft Sentinel Jupyter notebooks, bundling cybersecurity-focused tools for data retrieval/querying, threat intelligence enrichment, anomaly detection, and visualization tailored to hunting and investigation. pandas, scikit-learn, and Matplotlib are general-purpose data manipulation, machine learning, and plotting libraries used alongside MSTICPy, but none of them are security-hunting-specific like MSTICPy is.",
    "referenceUrl": "https://learn.microsoft.com/en-us/azure/sentinel/notebooks"
  }
];

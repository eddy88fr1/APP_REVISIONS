const BANK_BASE_CLEAN = [
   {q:"Le SDIS est :", 
   a:["Établissement public","Entreprise privée","Association","Service communal"], 
   c:[0]},  //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le COS est responsable :", 
   a:["Stratégie opérationnelle","Budget SDIS","Sécurité intervenants","Recrutement"], 
   c:[0,2]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le maire est DOS :", 
   a:["Toujours","Pour opérations communales","Jamais","Pour crises nationales"], 
   c:[1]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"La reconnaissance permet :", 
   a:["Identifier risques","Localiser victimes","Éteindre immédiatement","Adapter stratégie"], 
   c:[0,1,3]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le SDACR est arrêté par :", 
   a:["Le préfet","Le DDSIS","Le CASDIS seul","Le maire"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le préfet devient DOS lorsque :", 
   a:["Sinistre communal","Plan ORSEC activé","Feu simple","Manœuvre"], 
   c:[1]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Mission principale SP :", 
   a:["Police","Secours","Justice","Transport"], 
   c:[1]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le volontariat SPV repose sur :", 
   a:["Contrat salarié","Engagement citoyen indemnisé","Bénévolat total","Contrat privé"], 
   c:[1]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le CASDIS est composé :", 
   a:["D'élus","SPP uniquement","SPV uniquement","Préfet seul"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le chef d’agrès :", 
   a:["Commande opération","Décide budget","Recrute agents","Dirige SDIS"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le DDSIS est :", 
   a:["Autorité opérationnelle","Directeur SDIS","Maire","Ministre"], 
   c:[1]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Une crise nécessite :", 
   a:["Coordination","Improvisation seule","Attente","Isolement"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le RO (règlement opérationnel) fixe :", 
   a:["Organisation secours","Salaire","Budget","Lois"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le COS signifie :", 
   a:["Commandant opérations secours","Chef SDIS","Président","Chef centre"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le SDIS est financé principalement par :", 
   a:["L'État","Le département","Les communes et EPCI","Les assurances"], 
   c:[1,2]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le CASDIS vote :", 
   a:["Le budget","Le règlement opérationnel","Le recrutement des SPV","Les sanctions pénales"], 
   c:[0,1]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le préfet est directeur des secours :", 
   a:["Toujours","Lors événement dépassant commune","Lors plan ORSEC","Lors feu isolé"], 
   c:[1,2]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le maire reste DOS :", 
   a:["Opération courante communale","Crise départementale","Plan ORSEC","Crise nationale"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le potentiel opérationnel vise :", 
   a:["Capacité opérationnelle permanente","Effectif administratif","Gestion RH","Formation"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"La mission principale SP comprend :", 
   a:["Incendie","SUAP","Police judiciaire","Protection environnement"], 
   c:[0,1,3]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le SUAP représente :", 
   a:["Part croissante interventions","Mission mineure","Mission supprimable","Mission marginale"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"La reconnaissance opérationnelle vise :", 
   a:["Identifier risques","Localiser victimes","Déterminer stratégie","Éteindre immédiatement"], 
   c:[0,1,2]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Sur feu d’habitation, la priorité initiale est :", 
   a:["Sauvetage","Extinction","Protection biens","Déblai"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Une explosion avec victimes impose :", 
   a:["Périmètre sécurité","Reconnaissance risques secondaires","Sauvetage immédiat sans analyse","Coordination secours"], 
   c:[0,1,3]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le risque principal en local clos est :", 
   a:["Flashover","Effondrement immédiat","Explosion carburant","Intoxication alimentaire"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Le balisage vise :", 
   a:["Protection intervenants","Fluidifier trafic","Faciliter presse","Ralentir secours"], 
   c:[0]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Une fuite de gaz nécessite :", 
   a:["Évacuation","Périmètre sécurité","Recherche fuite sans protection","Ventilation contrôlée"], 
   c:[0,1,3]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Une intervention NRBC impose :", 
   a:["Zonage opérationnel","Protection intervenants","Engagement sans protection","Décontamination"], 
   c:[0,1,3]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"Sur accident matières dangereuses :", 
   a:["Identifier produit","Périmètre sécurité","Approche sans protection","Demande moyens spécialisés"], 
   c:[0,1,3]}, //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

  {q:"La première mission du COS est :", 
   a:["Sauver vies","Limiter propagation","Préserver biens","Limiter budget"], 
   c:[0]} //[1](https://departement54fr-my.sharepoint.com/personal/ehernandez_departement54_fr/Documents/Fichiers%20de%20conversation%20Microsoft%20Copilot/qcm_base.pdf)

];

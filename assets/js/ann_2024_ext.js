
const ANN_2024_EXT = [

  {
    q: "Quel est le premier texte constitutionnel mentionnant la laïcité ?",
    a: ["La loi du 11 février 2005", "La loi du 9 décembre 1905", "Le décret du 23 décembre 2021", "La Constitution instaurant la Ve République"],
    c: [3], // D est en vert [cite: 34, 38]
    cat: "culture_admin"
  },
  {
    q: "Les titulaires de pouvoirs de police administrative générale sont :",
    a: ["Le Président de la République, le ministre de l'intérieur et les préfets", "Le Président de la République, le Premier ministre et les préfets", "Le Président de la République, le Premier ministre, le ministre de l'intérieur et les maires", "Le Premier ministre, les préfets et les maires"],
    c: [3], // D est en vert [cite: 39, 42]
    cat: "culture_admin"
  },
  {
    q: "En quelle année a été instaurée l'élection au suffrage universel direct pour le Président de la République ?",
    a: ["1955", "1959", "1962", "1966"],
    c: [2], // C est en vert [cite: 43, 46]
    cat: "culture_admin"
  },
  {
    q: "De quelle(s) année(s) date(nt) les 'lois Defferre' ?",
    a: ["1958", "1982", "1983", "1988"],
    c: [1, 2], // B et C sont en vert [cite: 48, 50, 51]
    cat: "territorial"
  },
  {
    q: "Combien de sénateurs y a-t-il en France ?",
    a: ["384", "378", "348", "328"],
    c: [2], // C est en vert [cite: 53, 56]
    cat: "culture_admin"
  },
  {
    q: "Que signifie le sigle '3DS', concernant la loi du 21 février 2022 ?",
    a: ["Décentralisation, Déconcentration, Développement et Simplification", "Différenciation, Décentralisation, Décomplexification et Simplification", "Différenciation, Décentralisation, Déconcentration et Simplification de l'action publique", "Décentralisation, Différenciation, Décomplexification et Simplification de l'action publique"],
    c: [2], // C est en vert [cite: 58, 61]
    cat: "territorial"
  },
  {
    q: "Quelles sont les collectivités territoriales de la République mentionnées dans l'article 72 de la Constitution ?",
    a: ["Les départements d'outre-mer", "Les collectivités d'outre-mer", "Les collectivités à statut particulier", "Les départements"],
    c: [1, 2, 3], // B, C et D sont en vert [cite: 64, 66, 67, 68]
    cat: "territorial"
  },
  {
    q: "A quelle date débute l'exercice budgétaire ?",
    a: ["Le 1er janvier", "Le 15 avril", "Le 1er décembre", "Le 31 décembre"],
    c: [0], // A est en vert [cite: 69, 70]
    cat: "finances_publiques"
  },
  {
    q: "En quelle année a été conclu le Traité établissant la Communauté européenne du charbon et de l'acier ?",
    a: ["1949", "1951", "1953", "1955"],
    c: [1], // B est en vert [cite: 74, 76]
    cat: "europe"
  },
  {
    q: "Quel(s) Etat(s) membre(s) de l'Union européenne n'a ou n'ont pas encore adopté l'euro ?",
    a: ["Pays-Bas", "Finlande", "Danemark", "Irlande"],
    c: [2], // C est en vert [cite: 79, 82]
    cat: "europe"
  },
  {
    q: "Quelle(s) institution(s) n'est ou ne sont pas une ou des institution(s) de l'Union européenne ?",
    a: ["Conseil européen", "Conseil de l'Union européenne", "Conseil de l'Europe", "Commission européenne"],
    c: [2], // C est en vert [cite: 84, 87]
    cat: "europe"
  },
  {
    q: "Natura 2000 est :",
    a: ["Un programme de mise en œuvre de la politique agricole", "Un dispositif de mise en œuvre de la COP23", "Un dispositif non-contraignant de prise en compte de l'environnement", "Un réseau européen regroupant des sites naturels ou semi-naturels présentant une grande valeur en matière de biodiversité"],
    c: [3], // D est en vert [cite: 89, 93]
    cat: "environment"
  },
  {
    q: "Quelle est la durée du mandat de la commission européenne ?",
    a: ["5 ans", "6 ans", "7 ans", "4 ans"],
    c: [0], // A est en vert [cite: 95, 96]
    cat: "europe"
  },
  {
    q: "De quelle(s) échelle(s) peut-on se servir pour mesurer l'intensité des cyclones tropicaux ?",
    a: ["BEAUFORT", "FUJITA", "RICHTER", "SAFFIR-SIMPSON"],
    c: [3], // D est en vert [cite: 100, 104]
    cat: "risques"
  },
  {
    q: "En risques chimiques, il existe un ou plusieurs « seuil(s) », qui peut ou peuvent être :",
    a: ["SEI (Seuil des Effets Irréversibles)", "SOL (Seuil Olfactif Limité)", "SEL (Seuil des Effets Létaux)", "SLI (Seuil Létal Immédiat)"],
    c: [0, 2], // A et C sont en vert [cite: 105, 106, 108]
    cat: "risques"
  },
  {
    q: "À quel(s) type(s) de visite(s) peut procéder la commission de sécurité ?",
    a: ["La visite de réception", "La visite technique", "La visite périodique", "La visite exceptionnelle"],
    c: [0, 2, 3], // A, C et D sont en vert [cite: 110, 111, 113, 114]
    cat: "prevention"
  },
  {
    q: "En prévention, concernant les établissements spéciaux, lequel ou lesquels n'existe (nt) pas ?",
    a: ["CTS", "REF", "SA", "SG"],
    c: [2, 3], // C et D sont en vert [cite: 115, 118, 119]
    cat: "prevention"
  },
  {
    q: "Quel est l'outil de gestion opérationnel à disposition du préfet de département ?",
    a: ["Le centre opérationnel départemental d'incendie et de secours", "Le poste de commandement communal", "Le centre opérationnel départemental", "Le centre opérationnel de gestion interministérielle des crises"],
    c: [2], // C est en vert [cite: 120, 123]
    cat: "droit_sc"
  },
  {
    q: "Quelle(s) sont la ou les fonction(s) pouvant être occupée(s) par un chef de groupe au sein d'un poste de commandement niveau colonne ?",
    a: ["Officier sécurité", "Officier anticipation", "Officier renseignements", "Officier moyens"],
    c: [2, 3], // C et D sont en vert [cite: 125, 128, 129]
    cat: "operatoire"
  },
  {
    q: "Quels sont les principes qui permettent aux particules toxiques et/ou aux résidus de combustion de se fixer sur les EPI?",
    a: ["L'absorption", "L'intoxication", "L'adsorption", "La contamination"],
    c: [0, 2], // A et C sont en vert [cite: 131, 132, 134]
    cat: "risques"
  },
  {
    q: "Par qui est arrêté le règlement opérationnel ?",
    a: ["Le DDIS", "Le préfet de département", "Le PCASDIS", "Le maire"],
    c: [1], // B est en vert [cite: 136, 138]
    cat: "orga_sdis"
  },
  {
    q: "En radioactivité, quelle unité désigne l'activité ?",
    a: ["Curie", "Becquerel", "Sievert", "Gray"],
    c: [0, 1], // A et B sont en vert [cite: 141, 142, 143]
    cat: "risques"
  },
  {
    q: "Parmi les propositions, quels sont les niveaux de classement possibles pour une ICPE ?",
    a: ["P = Préalable", "E = Enregistrement", "R = Restriction", "A = Autorisation"],
    c: [1, 3], // B et D sont en vert [cite: 146, 149, 151]
    cat: "environment"
  },
  {
    q: "Quels sont les dangers pouvant être associés au risque hydrogène ?",
    a: ["Question neutralisée par le jury"],
    c: [], // Neutralisée 
    cat: "risques"
  },
  {
    q: "Le gaz de pétrole liquéfié, ou GPL, se compose d'un mélange d'hydrocarbures légers stockés à l'état liquide. Quels sont-ils ?",
    a: ["Propane", "Méthane", "Butane", "Hydrogène"],
    c: [0, 2], // A et C sont en vert [cite: 153, 155, 157]
    cat: "risques"
  },
  {
    q: "De quoi se compose(nt) les Services d'Incendie et de Secours ?",
    a: ["Du Bataillon de Marins Pompiers de Marseille (BMPM)", "Des services départementaux, territoriaux et locaux", "De la Brigade de Sapeurs-Pompiers de Paris (BSPP)", "Des Unités d'Instruction et d'Intervention de la Sécurité Civile (UIISC)"],
    c: [1], // B est en vert [cite: 160, 162]
    cat: "orga_sdis"
  },
  {
    q: "Quelle(s) réponse(s) concernant le Centre Interministériel de Crise est ou sont correcte(s) ?",
    a: ["Il est placé sous l'autorité du ministère de l'intérieur", "Il est dirigé par le Directeur de la DGSCGC", "C'est l'outil de gestion interministérielle des crises", "Il est activé par le préfet de police de Paris"],
    c: [0, 2], // A et C sont en vert [cite: 165, 166, 168]
    cat: "droit_sc"
  },
  {
    q: "Quelle(s) réponse(s) concernant le SDIS est ou sont correcte(s) ?",
    a: ["C'est un établissement public national", "C'est un établissement public administratif", "Il dispose d'une autonomie financière", "C'est un établissement industriel et commercial"],
    c: [1, 2], // B et C sont en vert [cite: 170, 172, 173]
    cat: "orga_sdis"
  },
  {
    q: "Quelle(s) réponse(s) concernant le Directeur Départemental d'un SDIS est ou sont correcte(s) ?",
    a: ["C'est un officier supérieur de Sapeurs-Pompiers", "Il est placé sous la double autorité du préfet et du président de son conseil d'administration", "Il est placé sous l'autorité du représentant de l'État dans le département pour la direction des actions de prévention...", "Il est placé sous l'autorité et la tutelle du représentant de l'État... pour la gestion administrative et financière"],
    c: [0, 1, 2], // A, B et C sont en vert [cite: 175, 176, 177]
    cat: "orga_sdis"
  },
  {
    q: "Dans les documents structurant un SDIS, quelle(s) réponse(s) concernant le SDACR est ou sont correcte(s) ?",
    a: ["Il précise les principes de mise en œuvre des règles d'hygiène et de sécurité", "Il est révisé tous les cinq ans", "Après avis du conseil départemental, le représentant de l'État... arrête le SDACR sur avis conforme du CA", "Il est élaboré par le SIS sous l'autorité du préfet"],
    c: [3], // D est en vert [cite: 179, 183]
    cat: "orga_sdis"
  },
  {
    q: "Quelle(s) réponse(s) concernant les réserves communales de sécurité civile est ou sont correctes ?",
    a: ["Elles sont placées sous l'autorité du DDSIS", "Elles sont placées sous l'autorité du maire", "La circulaire de 2005 est relative à ces réserves", "Les réservistes sont bénévoles pour un engagement de 6 ans renouvelable"],
    c: [1, 2], // B et C sont en vert [cite: 184, 186, 187]
    cat: "droit_sc"
  },
  {
    q: "Qu'est-ce qu'un PCS, aux termes de la loi MOSC ?",
    a: ["Il s'agit d'un Plan Communal de Sauvegarde", "Il s'agit d'un Plan Communal de Sécurité", "Il s'agit d'un Plan Communal de Sauvetage", "Il s'agit d'un Plan Communal de Secours"],
    c: [0], // A est en vert [cite: 190, 191]
    cat: "droit_sc"
  },
  {
    q: "A quoi correspond la loi n° 96-369 du 3 mai 1996 ?",
    a: ["Elle précise les missions des SDIS", "C'est la loi de la modernisation de la Sécurité Civile", "Elle instaure une nouvelle organisation territoriale des SDIS: la départementalisation", "Elle crée l'établissement public Service Départemental d'Incendie et de Secours"],
    c: [0, 2, 3], // A, C et D sont en vert [cite: 195, 196, 198, 199]
    cat: "orga_sdis"
  },
  {
    q: "Qui nomme les lieutenants de Sapeurs-Pompiers ?",
    a: ["Arrêté conjoint ministre de l'intérieur et président du CA", "Arrêté conjoint ministre de l'intérieur et préfet", "Arrêté conjoint préfet et président du CA", "Arrêté conjoint DDSIS et président du CA"],
    c: [2], // C est en vert [cite: 200, 203]
    cat: "fpt"
  },
  {
    q: "Dans un SDIS, que comprend la direction ?",
    a: ["Le DDSIS", "Le DDSIS adjoint", "Le médecin Chef de la sous-direction santé", "Les chefs de groupement"],
    c: [0, 1, 2], // A, B et C sont en vert [cite: 204, 205, 206, 207]
    cat: "orga_sdis"
  },
  {
    q: "Quelle(s) réponse(s) concernant les catégories de SIS est ou sont correcte(s) ?",
    a: ["Ils sont classés par catégorie de 1 à 4", "Ils sont classés par le nombre d'interventions annuel", "SPP, SPV, SSSM et PATS sont pris en compte pour le classement", "Ils sont classés par catégorie A, B, C"],
    c: [3], // D est en vert [cite: 209, 214]
    cat: "orga_sdis"
  },
  {
    q: "Propositions relatives aux catégories de la fonction publique territoriale :",
    a: ["Lieutenant 2ème classe est en catégorie B", "Capitaine SPP est en catégorie B+", "Commandant SPP est en catégorie A", "Lieutenant-Colonel SPP est en catégorie A+"],
    c: [0, 2, 3], // A, C et D sont en vert [cite: 215, 216, 218, 219]
    cat: "fpt"
  },
  {
    q: "Quelle unité a été militarisée le 29 juillet 1939 ?",
    a: ["La Brigade des Sapeurs-Pompiers de Paris", "Le Bataillon des Marins-Pompiers de Marseille", "Les UIISC", "Aucune réponse ne convient"],
    c: [1], // B est en vert [cite: 221, 223]
    cat: "droit_sc"
  },
  {
    q: "La DGSCGC est placée sous l'autorité :",
    a: ["D'un Contrôleur général de Sapeurs-Pompiers", "Du préfet de police de Paris", "D'un général de l'armée de terre", "Aucune réponse ne convient"],
    c: [3], // D est en vert [cite: 226, 230]
    cat: "droit_sc"
  },
  {
    q: "Combien existe-il de zones de défense et de sécurité en France ?",
    a: ["8", "10", "12", "15"],
    c: [2], // C est en vert [cite: 231, 234]
    cat: "droit_sc"
  },
  {
    q: "Réponse(s) concernant les EMIZ correcte(s) :",
    a: ["L'EMIZ SUD est à Lyon", "L'EMIZ SUD-OUEST est à Toulouse", "L'EMIZ OUEST est à Brest", "Aucune réponse ne convient"],
    c: [3], // D est en vert [cite: 236, 240]
    cat: "droit_sc"
  },
  {
    q: "A quoi correspond la loi n° 2004-811 du 13 août 2004 ?",
    a: ["C'est la loi de la mise en œuvre de la Sécurité Civile", "C'est la loi relative à la départementalisation des SDIS", "C'est la loi de modernisation de la Sécurité Civile", "Aucune réponse ne convient"],
    c: [2], // C est en vert [cite: 241, 244]
    cat: "droit_sc"
  },
  {
    q: "Quelle(s) réponse(s) concernant le dispositif ORSEC est ou sont correcte(s) ?",
    a: ["ORSEC maritime (Préfet Maritime)", "ORSEC départemental (Préfet Dept)", "ORSEC régional (Préfet Région)", "ORSEC national (Ministre Intérieur)"],
    c: [0, 1, 3], // A, B et D sont en vert [cite: 246, 247, 248, 250]
    cat: "droit_sc"
  },
  {
    q: "Dans le domaine de l'urgence sanitaire, quel(s) type(s) de plan(s) existe(nt) ?",
    a: ["Le Plan Vert", "Le Plan bleu", "Le Plan blanc", "Le Plan rouge"],
    c: [1, 2], // B et C sont en vert [cite: 252, 254, 255]
    cat: "droit_sc"
  },
  {
    q: "Quelles missions les services d'incendie et de secours exercent-ils ?",
    a: ["Prévention et évaluation des risques de SC", "Préparation mesures de sauvegarde et organisation secours", "Protection personnes, animaux, biens et environnement", "Aucune réponse ne convient"],
    c: [0, 1, 2], // A, B et C sont en vert [cite: 257, 258, 259, 260]
    cat: "orga_sdis"
  },
  {
    q: "Réponse(s) concernant l'État-Major de la Sécurité Civile :",
    a: ["Veille au bon fonctionnement de la C2IPAV", "Il gère le COGIC", "Veille au bon fonctionnement de la CIC", "Aucune réponse ne convient"],
    c: [1], // B est en vert [cite: 262, 264]
    cat: "droit_sc"
  },
  {
    q: "La conférence nationale des services d'incendie et de secours comprend :",
    a: ["Un sénateur", "Un député", "Deux députés", "Deux sénateurs"],
    c: [2, 3], // C et D sont en vert [cite: 267, 270, 271]
    cat: "droit_sc"
  },
  {
    q: "Réponse(s) concernant le CoTRRIM :",
    a: ["Proposition du Président du Conseil régional", "Révisé tous les cinq ans", "Autorité préfets de dept et de zone", "Associe tous les acteurs territoriaux publics et privés"],
    c: [2, 3], // C et D sont en vert [cite: 272, 275, 276]
    cat: "droit_sc"
  },
  {
    q: "Le DDSIS est sous l'autorité du représentant de l'État pour :",
    a: ["Direction opérationnelle du SIS et corps départemental", "Direction des actions de prévention", "Contrôle et coordination des corps communaux", "Mise en œuvre opérationnelle des moyens"],
    c: [0, 1, 2, 3], // A, B, C et D sont TOUTES en vert [cite: 277, 278, 279, 280, 281]
    cat: "orga_sdis"
  },
  {
    q: "Que signifie l'acronyme SGAMI ?",
    a: ["Service de Gestion...", "Secrétariat Général pour l'Administration du Ministère de l'Intérieur", "Système de Gestion...", "Secrétariat de Gestion..."],
    c: [1], // B est en vert [cite: 283]
    cat: "culture_admin"
  },
  {
    q: "Concernant l'organisation d'un SIS :",
    a: ["Peut comprendre une réserve citoyenne", "Organisé en centres, services, groupements, sous-directions", "Placés pour emploi sous l'autorité du Directeur DGSCGC", "Aucune réponse ne convient"],
    c: [0, 1], // A et B sont en vert [cite: 284]
    cat: "orga_sdis"
  },
  {
    q: "Concernant les zones de défense et de sécurité :",
    a: ["Mesures militaires", "Admin Police nationale", "Admin Gendarmerie nationale", "Coordonnent les moyens de sécurité civile dans la zone"],
    c: [3], // D est en vert [cite: 286]
    cat: "droit_sc"
  },
  {
    q: "Quel(s) code(s) précise(nt) les modalités de l'activité de SPV ?",
    a: ["CGCT", "Code de la sécurité intérieure", "Code de la Fonction publique d’État", "Code de la Fonction publique Hospitalière"],
    c: [1], // B est en vert [cite: 287]
    cat: "orga_sdis"
  },
  {
    q: "Concernant le conseil d'administration du SIS :",
    a: ["15 membres au moins et 30 au plus", "DDSIS voix délibérante", "Président UDSP voix consultative", "Bureau = Président + 3 VP + (1 membre)"],
    c: [0, 2, 3], // A, C et D sont en vert [cite: 288]
    cat: "orga_sdis"
  },
  {
    q: "Par combien de niveaux est matérialisé le plan VIGIPIRATE ?",
    a: ["2", "3", "4", "5"],
    c: [1], // B est en vert [cite: 289]
    cat: "securite_publique"
  },
  {
    q: "Que peuvent apporter les services 'COPERNICUS' ?",
    a: ["Informations géospatiales pour la gestion des urgences", "Reconnaissance par drones", "Hôpitaux de campagne projetables", "Aucune réponse ne convient"],
    c: [0], // A est en vert [cite: 290]
    cat: "europe"
  },
  {
    q: "Proportion de femmes chez les sapeurs-pompiers civils (2023) :",
    a: ["Environ 21 %", "Environ 14 %", "Environ 9 %", "Environ 6 %"],
    c: [0], // A est en vert [cite: 291]
    cat: "orga_sdis"
  },
  {
    q: "Le préfet maritime de la Méditerranée exerce depuis :",
    a: ["Marseille", "Toulon", "Nice", "Menton"],
    c: [1], // B est en vert [cite: 292]
    cat: "droit_sc"
  },
  {
    q: "Missions de la Sécurité Civile :",
    a: ["Prévention des risques de toute nature", "Protection personnes, animaux, biens et env.", "Information et alerte des populations", "Protection générale lien sécurité publique"],
    c: [0, 1, 2, 3], // A, B, C et D sont TOUTES en vert [cite: 293]
    cat: "droit_sc"
  },
  {
    q: "Activation du MPCU en 2022 :",
    a: ["Moins de 10 fois", "Entre 20 et 40 fois", "Entre 50 et 120 fois", "Plus de 150 fois"],
    c: [3], // D est en vert [cite: 293]
    cat: "europe"
  }
];

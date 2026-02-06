
const ANN_2024_EXT = [
/* 1 */ { q: "Quel est le premier texte constitutionnel mentionnant la laïcité ?", a: ["La loi du 11 février 2005", "La loi du 9 décembre 1905", "Le décret du 23 décembre 2021", "La Constitution instaurant la Ve République"], c: [3], cat: "culture_admin" },

/* 2 */ { q: "Les titulaires de pouvoirs de police administrative générale sont :", a: ["Le Président de la République, le ministre de l'intérieur et les préfets", "Le Président de la République, le Premier ministre et les préfets", "Le Président de la République, le Premier ministre, le ministre de l'intérieur et les maires", "Le Premier ministre, les préfets et les maires"], c: [3], cat: "culture_admin" },

/* 3 */ { q: "En quelle année a été instaurée l'élection au suffrage universel direct pour le Président de la République ?", a: ["1955", "1959", "1962", "1966"], c: [2], cat: "culture_admin" },

/* 4 */ { q: "De quelle(s) année(s) date(nt) les 'lois Defferre' ?", a: ["1958", "1982", "1983", "1988"], c: [1, 2], cat: "territorial" },

/* 5 */ { q: "Combien de sénateurs y a-t-il en France ?", a: ["384", "378", "348", "328"], c: [2], cat: "culture_admin" },

/* 6 */ { q: "Que signifie le sigle '3DS', concernant la loi du 21 février 2022 ?", a: ["Décentralisation, Déconcentration, Développement et Simplification", "Différenciation, Décentralisation, Décomplexification et Simplification", "Différenciation, Décentralisation, Déconcentration et Simplification de l'action publique", "Décentralisation, Différenciation, Décomplexification et Simplification de l'action publique"], c: [2], cat: "territorial" },

/* 7 */ { q: "Quelles sont les collectivités territoriales de la République mentionnées dans l'article 72 de la Constitution ?", a: ["Les départements d'outre-mer", "Les collectivités d'outre-mer", "Les collectivités à statut particulier", "Les départements"], c: [0, 1, 2, 3], cat: "territorial" },

/* 8 */ { q: "A quelle date débute l'exercice budgétaire ?", a: ["Le 1er janvier", "Le 15 avril", "Le 1er décembre", "Le 31 décembre"], c: [0], cat: "finances_publiques" },

/* 9 */ { q: "En quelle année a été conclu le Traité établissant la Communauté européenne du charbon et de l'acier ?", a: ["1949", "1951", "1953", "1955"], c: [1], cat: "europe" },

/* 10 */ { q: "Quel(s) Etat(s) membre(s) de l'Union européenne n'a ou n'ont pas encore adopté l'euro ?", a: ["Pays-Bas", "Finlande", "Danemark", "Irlande"], c: [2], cat: "europe" },

/* 11 */ { q: "Quelle(s) institution(s) n'est ou ne sont pas une ou des institution(s) de l'Union européenne ?", a: ["Conseil européen", "Conseil de l'Union européenne", "Conseil de l'Europe", "Commission européenne"], c: [2], cat: "europe" },

/* 12 */ { q: "Natura 2000 est :", a: ["Un programme de mise en œuvre de la politique agricole", "Un dispositif de mise en œuvre de la COP23", "Un dispositif non-contraignant de prise en compte de l'environnement", "Un réseau européen regroupant des sites naturels ou semi-naturels présentant une grande valeur en matière de biodiversité"], c: [3], cat: "environment" },

/* 13 */ { q: "Quelle est la durée du mandat de la commission européenne ?", a: ["5 ans", "6 ans", "7 ans", "4 ans"], c: [0], cat: "europe" },

/* 14 */ { q: "De quelle(s) échelle(s) peut-on se servir pour mesurer l'intensité des cyclones tropicaux ?", a: ["BEAUFORT", "FUJITA", "RICHTER", "SAFFIR-SIMPSON"], c: [3], cat: "risques" },

/* 15 */ { q: "En risques chimiques, il existe un ou plusieurs « seuil(s) », qui peut ou peuvent être :", a: ["SEI (Seuil des Effets Irréversibles)", "SOL (Seuil Olfactif Limité)", "SEL (Seuil des Effets Létaux)", "SLI (Seuil Létal Immédiat)"], c: [0, 2], cat: "risques" },

/* 16 */ { q: "À quel(s) type(s) de visite(s) peut procéder la commission de sécurité ?", a: ["La visite de réception", "La visite technique", "La visite périodique", "La visite exceptionnelle"], c: [0, 2, 3], cat: "prevention" },

/* 17 */ { q: "En prévention, concernant les établissements spéciaux, lequel ou lesquels n'existe(nt) pas ?", a: ["CTS", "REF", "SA", "SG"], c: [2, 3], cat: "prevention" },

/* 18 */ { q: "Quel est l'outil de gestion opérationnel à disposition du préfet de département ?", a: ["Le centre opérationnel départemental d'incendie et de secours", "Le poste de commandement communal", "Le centre opérationnel départemental", "Le centre opérationnel de gestion interministérielle des crises"], c: [2], cat: "droit_sc" },

/* 19 */ { q: "Quelle(s) sont la ou les fonction(s) pouvant être occupée(s) par un chef de groupe au sein d'un poste de commandement niveau colonne ?", a: ["Officier sécurité", "Officier anticipation", "Officier renseignements", "Officier moyens"], c: [0, 2, 3], cat: "operatoire" },

/* 20 */ { q: "Quels sont les principes qui permettent aux particules toxiques et/ou aux résidus de combustion de se fixer sur les EPI ?", a: ["L'absorption", "L'intoxication", "L'adsorption", "La contamination"], c: [0, 2], cat: "risques" },

/* 21 */ { q: "Par qui est arrêté le règlement opérationnel ?", a: ["Le DDIS", "Le préfet de département", "Le PCASDIS", "Le maire"], c: [1], cat: "orga_sdis" },

/* 22 */ { q: "En radioactivité, quelle unité désigne l'activité ?", a: ["Curie", "Becquerel", "Sievert", "Gray"], c: [0, 1], cat: "risques" },

/* 23 */ { q: "Parmi les propositions, quels sont les niveaux de classement possibles pour une ICPE ?", a: ["P = Préalable", "E = Enregistrement", "R = Restriction", "A = Autorisation"], c: [1, 3], cat: "environment" },

/* 24 - Question neutralisée par le jury (pas de case verte) */

/* 25 */ { q: "Le gaz de pétrole liquéfié, ou GPL, se compose d'un mélange d'hydrocarbures légers stockés à l'état liquide. Quels sont-ils ?", a: ["Propane", "Méthane", "Butane", "Hydrogène"], c: [0, 2], cat: "risques" },

/* 26 */ { q: "De quoi se compose(nt) les Services d'Incendie et de Secours ?", a: ["Du Bataillon de Marins Pompiers de Marseille (BMPM)", "Des services départementaux, territoriaux et locaux", "De la Brigade de Sapeurs-Pompiers de Paris (BSPP)", "Des Unités d'Instruction et d'Intervention de la Sécurité Civile (UIISC)"], c: [1], cat: "orga_sdis" },

/* 27 */ { q: "Quelle(s) réponse(s) concernant le Centre Interministériel de Crise est ou sont correcte(s) ?", a: ["Il est placé sous l'autorité du ministère de l'intérieur", "Il est dirigé par le Directeur de la DGSCGC", "C'est l'outil de gestion interministérielle des crises", "Il est activé par le préfet de police de Paris"], c: [0, 2], cat: "droit_sc" },

/* 28 */ { q: "Quelle(s) réponse(s) concernant le SDIS est ou sont correcte(s) ?", a: ["C'est un établissement public national", "C'est un établissement public administratif", "Il dispose d'une autonomie financière", "C'est un établissement industriel et commercial"], c: [1, 2], cat: "orga_sdis" },

/* 29 */ { q: "Quelle(s) réponse(s) concernant le Directeur Départemental d'un SDIS est ou sont correcte(s) ?", a: ["C'est un officier supérieur de Sapeurs-Pompiers", "Il est placé sous la double autorité du préfet et du président de son conseil d'administration", "Il est placé sous l'autorité du représentant de l'État dans le département pour la direction des actions de prévention...", "Il est placé sous l'autorité et la tutelle du représentant de l'État..."], c: [0, 1, 2], cat: "orga_sdis" },

/* 30 */ { q: "Dans les documents structurant un SDIS, quelle(s) réponse(s) concernant le SDACR est ou sont correcte(s) ?", a: ["Il précise les principes de mise en œuvre des règles d'hygiène et de sécurité", "Il est révisé tous les cinq ans", "Le représentant de l'État arrête le SDACR sur avis conforme du conseil d'administration", "Il est élaboré par le SIS sous l'autorité du préfet"], c: [3], cat: "orga_sdis" },

/* 31 */ { q: "Quelle(s) réponse(s) concernant les réserves communales de sécurité civile est ou sont correctes ?", a: ["Elles sont placées sous l'autorité du DDSIS", "Elles sont placées sous l'autorité du maire", "La circulaire de 2005 est relative à ces réserves", "Les réservistes sont bénévoles pour un engagement de 6 ans renouvelable"], c: [1, 2], cat: "droit_sc" },

/* 32 */ { q: "Qu'est-ce qu'un PCS, aux termes de la loi MOSC ?", a: ["Il s'agit d'un Plan Communal de Sauvegarde", "Il s'agit d'un Plan Communal de Sécurité", "Il s'agit d'un Plan Communal de Sauvetage", "Il s'agit d'un Plan Communal de Secours"], c: [0], cat: "droit_sc" },

/* 33 */ { q: "A quoi correspond la loi n° 96-369 du 3 mai 1996 ?", a: ["Elle précise les missions des SDIS", "C'est la loi de la modernisation de la Sécurité Civile", "Elle instaure une nouvelle organisation territoriale des SDIS: la départementalisation", "Elle crée l'établissement public SDIS"], c: [0, 2, 3], cat: "orga_sdis" },

/* 34 */ { q: "Qui nomme les lieutenants de Sapeurs-Pompiers ?", a: ["Ministre de l'intérieur + Président du CA", "Ministre de l'intérieur + Préfet", "Préfet + Président du CA", "DDSIS + Président du CA"], c: [2], cat: "fpt" },

/* 35 */ { q: "Dans un SDIS, que comprend la direction ?", a: ["Le DDSIS", "Le DDSIS adjoint", "Le médecin Chef de la sous-direction santé", "Les chefs de groupement"], c: [0, 1, 2], cat: "orga_sdis" },

/* 36 */ { q: "Quelle(s) réponse(s) concernant les catégories de SIS est ou sont correcte(s) ?", a: ["Ils sont classés par catégorie de 1 à 4", "Ils sont classés par le nombre d'interventions annuel", "Les SPP, SPV, SSSM et PATS sont pris en compte", "Ils sont classés par catégorie A, B, C"], c: [3], cat: "orga_sdis" },

/* 37 */ { q: "Parmi les propositions relatives aux catégories de la FPT, laquelle est exacte ?", a: ["Un Lieutenant de 2ème classe est en catégorie B", "Un Capitaine de SPP est en catégorie B+", "Un Commandant de SPP est en catégorie A", "Un Lieutenant-Colonel de SPP est en catégorie A+"], c: [0, 2, 3], cat: "fpt" },

/* 38 */ { q: "Quelle unité a été militarisée le 29 juillet 1939 ?", a: ["La BSPP", "Le BMPM", "Les UIISC", "Aucune réponse ne convient"], c: [1], cat: "droit_sc" },

/* 39 */ { q: "La DGSCGC est placée sous l'autorité :", a: ["D'un Contrôleur général", "Du préfet de police de Paris", "D'un général", "Aucune réponse ne convient"], c: [3], cat: "droit_sc" },

/* 40 */ { q: "Combien existe-il de zones de défense et de sécurité en France ?", a: ["8", "10", "12", "15"], c: [2], cat: "droit_sc" },

/* 41 */ { q: "Quelle(s) réponse(s) concernant les EMIZ est ou sont correcte(s) ?", a: ["L'EMIZ SUD est à Lyon", "L'EMIZ SUD-OUEST est à Toulouse", "L'EMIZ OUEST est à Brest", "Aucune réponse ne convient"], c: [3], cat: "droit_sc" },

/* 42 */ { q: "A quoi correspond la loi n° 2004-811 du 13 août 2004 ?", a: ["Loi de mise en œuvre de la SC", "Loi relative à la départementalisation", "Loi de modernisation de la SC", "Aucune réponse ne convient"], c: [2], cat: "droit_sc" },

/* 43 */ { q: "Quelle(s) réponse(s) concernant le dispositif ORSEC est ou sont correcte(s) ?", a: ["ORSEC maritime (Préfet Maritime)", "ORSEC départemental (Préfet Dept)", "ORSEC régional (Préfet Région)", "ORSEC national (Ministre Intérieur)"], c: [0, 1, 3], cat: "droit_sc" },

/* 44 */ { q: "Dans le domaine de l'urgence sanitaire, quel(s) type(s) de plan(s) existe(nt) ?", a: ["Le Plan Vert", "Le Plan bleu", "Le Plan blanc", "Le Plan rouge"], c: [1, 2], cat: "droit_sc" },

/* 45 */ { q: "Quelles missions les SIS exercent-ils ?", a: ["Prévention et évaluation des risques", "Préparation des mesures de sauvegarde", "Protection des personnes, animaux, biens, environnement", "Aucune réponse ne convient"], c: [0, 1, 2], cat: "orga_sdis" },

/* 46 */ { q: "Quelle(s) réponse(s) concernant l'État-Major de la Sécurité Civile est ou sont correcte(s) ?", a: ["Veille au bon fonctionnement de la C2IPAV", "Il gère le COGIC", "Veille au bon fonctionnement de la CIC", "Aucune réponse ne convient"], c: [1], cat: "droit_sc" },

/* 47 */ { q: "La conférence nationale des SIS comprend :", a: ["Un sénateur", "Un député", "Deux députés", "Deux sénateurs"], c: [2, 3], cat: "droit_sc" },

/* 48 */ { q: "Quelle(s) réponse(s) concernant le CoTRRIM est ou sont correcte(s) ?", a: ["Proposition du Prés. Conseil régional", "Révisé tous les 5 ans max", "Autorité des préfets de dept et de zone", "Associe tous les acteurs publics et privés"], c: [2, 3], cat: "droit_sc" },

/* 49 */ { q: "Le DDSIS est sous l'autorité du représentant de l'État pour :", a: ["Direction opérationnelle du SIS", "Direction des actions de prévention", "Contrôle des corps communaux", "Mise en œuvre des moyens de secours"], c: [0, 1, 2, 3], cat: "orga_sdis" },

/* 50 */ { q: "Que signifie l'acronyme SGAMI ?", a: ["Service de Gestion...", "Secrétariat Général pour l'Administration du Ministère de l'Intérieur", "Système de Gestion...", "Secrétariat de Gestion..."], c: [1], cat: "culture_admin" },

/* 51 */ { q: "Concernant l'organisation d'un SIS, quelle réponse est correcte ?", a: ["Le SIS peut comprendre une réserve citoyenne", "Organisé en centres, services, groupements, sous-directions", "SIS sous l'autorité du Directeur de la DGSCGC", "Aucune réponse ne convient"], c: [0, 1], cat: "orga_sdis" },

/* 52 */ { q: "Concernant les zones de défense et de sécurité, quelle réponse est correcte ?", a: ["Mesures militaires", "Admin Police nationale", "Admin Gendarmerie nationale", "Coordonnent les moyens de sécurité civile"], c: [3], cat: "droit_sc" },

/* 53 */ { q: "Quel(s) code(s) précise(nt) les modalités relatives à l'activité de SPV ?", a: ["CGCT", "Code de la sécurité intérieure", "Code Fonction publique État", "Code Fonction publique Hospitalière"], c: [1], cat: "orga_sdis" },

/* 54 */ { q: "Quelle(s) réponse(s) concernant le conseil d'administration du SIS est ou sont correcte(s) ?", a: ["15 à 30 membres", "DDSIS voix délibérante", "Président UDSP voix consultative", "Bureau = Président + 3 VP + (1 membre)"], c: [2, 3], cat: "orga_sdis" },

/* 55 */ { q: "Par combien de niveaux est matérialisé le plan VIGIPIRATE ?", a: ["2", "3", "4", "5"], c: [1], cat: "securite_publique" },

/* 56 */ { q: "Que peuvent apporter les services 'COPERNICUS' ?", a: ["Informations géospatiales pour la gestion des urgences", "Reconnaissance par drones", "Hôpitaux de campagne", "Aucune réponse ne convient"], c: [0], cat: "europe" },

/* 57 */ { q: "Proportion de femmes chez les sapeurs-pompiers civils (2023) :", a: ["Environ 21 %", "Environ 14 %", "Environ 9 %", "Environ 6 %"], c: [0], cat: "orga_sdis" },

/* 58 */ { q: "Le préfet maritime de la Méditerranée exerce depuis :", a: ["Marseille", "Toulon", "Nice", "Menton"], c: [1], cat: "droit_sc" },

/* 59 */ { q: "Quelle(s) réponse(s) concernant les missions de la Sécurité Civile est ou sont correcte(s) ?", a: ["Prévention des risques", "Protection personnes, animaux, biens, env.", "Information et alerte", "Protection générale lien sécurité publique"], c: [0, 1, 2, 3], cat: "droit_sc" },

/* 60 */ { q: "Activation du MPCU en 2022 :", a: ["< 10 fois", "20-40 fois", "50-120 fois", "> 150 fois"], c: [3], cat: "europe" }
];

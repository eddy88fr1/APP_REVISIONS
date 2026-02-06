
const ANN_2024_EXT = [

  {
    q: "Quel est le premier texte constitutionnel mentionnant la laïcité ?",
    a: ["La loi du 11 février 2005", "La loi du 9 décembre 1905", "Le décret du 23 décembre 2021", "La Constitution instaurant la Ve République"],
    c: [3], // D est en vert
    cat: "culture_admin"
  },
  {
    q: "Les titulaires de pouvoirs de police administrative générale sont :",
    a: ["Le Président de la République, le ministre de l'intérieur et les préfets", "Le Président de la République, le Premier ministre et les préfets", "Le Président de la République, le Premier ministre, le ministre de l'intérieur et les maires", "Le Premier ministre, les préfets et les maires"],
    c: [3], // D est en vert
    cat: "culture_admin"
  },
  {
    q: "En quelle année a été instaurée l'élection au suffrage universel direct pour le Président de la République ?",
    a: ["1955", "1959", "1962", "1966"],
    c: [2], // C est en vert
    cat: "culture_admin"
  },
  {
    q: "De quelle(s) année(s) date(nt) les 'lois Defferre' ?",
    a: ["1958", "1982", "1983", "1988"],
    c: [1, 2], // B et C sont en vert
    cat: "territorial"
  },
  {
    q: "Combien de sénateurs y a-t-il en France ?",
    a: ["384", "378", "348", "328"],
    c: [2], // C est en vert
    cat: "culture_admin"
  },
  {
    q: "Que signifie le sigle '3DS', concernant la loi du 21 février 2022 ?",
    a: ["Décentralisation, Déconcentration, Développement et Simplification", "Différenciation, Décentralisation, Décomplexification et Simplification", "Différenciation, Décentralisation, Déconcentration et Simplification de l'action publique", "Décentralisation, Différenciation, Décomplexification et Simplification de l'action publique"],
    c: [2], // C est en vert
    cat: "territorial"
  },
  {
    q: "Quelles sont les collectivités territoriales de la République mentionnées dans l'article 72 de la Constitution ?",
    a: ["Les départements d'outre-mer", "Les collectivités d'outre-mer", "Les collectivités à statut particulier", "Les départements"],
    c: [1, 2, 3], // B, C et D sont en vert
    cat: "territorial"
  },
  {
    q: "A quelle date débute l'exercice budgétaire ?",
    a: ["Le 1er janvier", "Le 15 avril", "Le 1er décembre", "Le 31 décembre"],
    c: [0], // A est en vert
    cat: "finances_publiques"
  },
  {
    q: "En quelle année a été conclu le Traité établissant la Communauté européenne du charbon et de l'acier ?",
    a: ["1949", "1951", "1953", "1955"],
    c: [1], // B est en vert
    cat: "europe"
  },
  {
    q: "Quel(s) Etat(s) membre(s) de l'Union européenne n'a ou n'ont pas encore adopté l'euro ?",
    a: ["Pays-Bas", "Finlande", "Danemark", "Irlande"],
    c: [2], // C est en vert
    cat: "europe"
  },
  {
    q: "Quelle(s) institution(s) n'est ou ne sont pas une ou des institution(s) de l'Union européenne ?",
    a: ["Conseil européen", "Conseil de l'Union européenne", "Conseil de l'Europe", "Commission européenne"],
    c: [2], // C est en vert
    cat: "europe"
  },
  {
    q: "Natura 2000 est :",
    a: ["Un programme de mise en œuvre de la politique agricole", "Un dispositif de mise en œuvre de la COP23", "Un dispositif non-contraignant de prise en compte de l'environnement", "Un réseau européen regroupant des sites naturels ou semi-naturels présentant une grande valeur en matière de biodiversité"],
    c: [3], // D est en vert
    cat: "environment"
  },
  {
    q: "Quelle est la durée du mandat de la commission européenne ?",
    a: ["5 ans", "6 ans", "7 ans", "4 ans"],
    c: [0], // A est en vert
    cat: "europe"
  },
  {
    q: "De quelle(s) échelle(s) peut-on se servir pour mesurer l'intensité des cyclones tropicaux ?",
    a: ["BEAUFORT", "FUJITA", "RICHTER", "SAFFIR-SIMPSON"],
    c: [3], // D est en vert
    cat: "risques"
  },
  {
    q: "En risques chimiques, il existe un ou plusieurs « seuil(s) », qui peut ou peuvent être :",
    a: ["SEI (Seuil des Effets Irréversibles)", "SOL (Seuil Olfactif Limité)", "SEL (Seuil des Effets Létaux)", "SLI (Seuil Létal Immédiat)"],
    c: [0, 2], // A et C sont en vert
    cat: "risques"
  },
  {
    q: "À quel(s) type(s) de visite(s) peut procéder la commission de sécurité ?",
    a: ["La visite de réception", "La visite technique", "La visite périodique", "La visite exceptionnelle"],
    c: [0, 2, 3], // A, C et D sont en vert
    cat: "prevention"
  },
  {
    q: "En prévention, concernant les établissements spéciaux, lequel ou lesquels n'existe (nt) pas ?",
    a: ["CTS", "REF", "SA", "SG"],
    c: [2, 3], // C et D sont en vert
    cat: "prevention"
  },
  {
    q: "Quel est l'outil de gestion opérationnel à disposition du préfet de département ?",
    a: ["Le centre opérationnel départemental d'incendie et de secours", "Le poste de commandement communal", "Le centre opérationnel départemental", "Le centre opérationnel de gestion interministérielle des crises"],
    c: [2], // C est en vert
    cat: "droit_sc"
  },
  {
    q: "Quelle(s) sont la ou les fonction(s) pouvant être occupée(s) par un chef de groupe au sein d'un poste de commandement niveau colonne ?",
    a: ["Officier sécurité", "Officier anticipation", "Officier renseignements", "Officier moyens"],
    c: [2, 3], // C et D sont en vert
    cat: "operatoire"
  },
  {
    q: "Quels sont les principes qui permettent aux particules toxiques et/ou aux résidus de combustion de se fixer sur les EPI?",
    a: ["L'absorption", "L'intoxication", "L'adsorption", "La contamination"],
    c: [0, 2], // A et C sont en vert
    cat: "risques"
  },
  {
    q: "Par qui est arrêté le règlement opérationnel ?",
    a: ["Le DDIS", "Le préfet de département", "Le PCASDIS", "Le maire"],
    c: [1], // B est en vert
    cat: "orga_sdis"
  },
  {
    q: "En radioactivité, quelle unité désigne l'activité ?",
    a: ["Curie", "Becquerel", "Sievert", "Gray"],
    c: [0, 1], // A et B sont en vert
    cat: "risques"
  },
  {
    q: "Parmi les propositions, quels sont les niveaux de classement possibles pour une ICPE ?",
    a: ["P = Préalable", "E = Enregistrement", "R = Restriction", "A = Autorisation"],
    c: [1, 3], // B et D sont en vert
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
    c: [0, 2], // A et C sont en vert
    cat: "risques"
  },
  {
    q: "De quoi se compose(nt) les Services d'Incendie et de Secours ?",
    a: ["Du Bataillon de Marins Pompiers de Marseille (BMPM)", "Des services départementaux, territoriaux et locaux", "De la Brigade de Sapeurs-Pompiers de Paris (BSPP)", "Des Unités d'Instruction et d'Intervention de la Sécurité Civile (UIISC)"],
    c: [1], // B est en vert
    cat: "orga_sdis"
  },
  {
    q: "Quelle(s) réponse(s) concernant le Centre Interministériel de Crise est ou sont correcte(s) ?",
    a: ["Il est placé sous l'autorité du ministère de l'intérieur", "Il est dirigé par le Directeur de la DGSCGC", "C'est l'outil de gestion interministérielle des crises", "Il est activé par le préfet de police de Paris"],
    c: [0, 2], // A et C sont en vert
    cat: "droit_sc"
  },
  {
    q: "Quelle(s) réponse(s) concernant le SDIS est ou sont correcte(s) ?",
    a: ["C'est un établissement public national", "C'est un établissement public administratif", "Il dispose d'une autonomie financière", "C'est un établissement industriel et commercial"],
    c: [1, 2], // B et C sont en vert
    cat: "orga_sdis"
  },
  {
    q: "Quelle(s) réponse(s) concernant le Directeur Départemental d'un SDIS est ou sont correcte(s) ?",
    a: ["C'est un officier supérieur de Sapeurs-Pompiers", "Il est placé sous la double autorité du préfet et du président de son conseil d'administration", "Il est placé sous l'autorité du représentant de l'État dans le département pour la direction des actions de prévention...", "Il est placé sous l'autorité et la tutelle du représentant de l'État... pour la gestion administrative et financière"],
    c: [0, 1, 2], // A, B et C sont en vert
    cat: "orga_sdis"
  },
  {
    q: "Dans les documents structurant un SDIS, quelle(s) réponse(s) concernant le SDACR est ou sont correcte(s) ?",
    a: ["Il précise les principes de mise en œuvre des règles d'hygiène et de sécurité", "Il est révisé tous les cinq ans", "Après avis du conseil départemental, le représentant de l'État... arrête le SDACR sur avis conforme du CA", "Il est élaboré par le SIS sous l'autorité du préfet"],
    c: [3], // D est en vert
    cat: "orga_sdis"
  },
  {
    q: "Quelle(s) réponse(s) concernant les réserves communales de sécurité civile est ou sont correctes ?",
    a: ["Elles sont placées sous l'autorité du DDSIS", "Elles sont placées sous l'autorité du maire", "La circulaire de 2005 est relative à ces réserves", "Les réservistes sont bénévoles pour un engagement de 6 ans renouvelable"],
    c: [1, 2], // B et C sont en vert
    cat: "droit_sc"
  },
  {
    q: "Qu'est-ce qu'un PCS, aux termes de la loi MOSC ?",
    a: ["Il s'agit d'un Plan Communal de Sauvegarde", "Il s'agit d'un Plan Communal de Sécurité", "Il s'agit d'un Plan Communal de Sauvetage", "Il s'agit d'un Plan Communal de Secours"],
    c: [0], // A est en vert
    cat: "droit_sc"
  },
  {
    q: "A quoi correspond la loi n° 96-369 du 3 mai 1996 ?",
    a: ["Elle précise les missions des SDIS", "C'est la loi de la modernisation de la Sécurité Civile", "Elle instaure une nouvelle organisation territoriale des SDIS: la départementalisation", "Elle crée l'établissement public Service Départemental d'Incendie et de Secours"],
    c: [0, 2, 3], // A, C et D sont en vert
    cat: "orga_sdis"
  },
  {
    q: "Qui nomme les lieutenants de Sapeurs-Pompiers ?",
    a: ["Arrêté conjoint ministre de l'intérieur et président du CA", "Arrêté conjoint ministre de l'intérieur et préfet", "Arrêté conjoint préfet et président du CA", "Arrêté conjoint DDSIS et président du CA"],
    c: [2], // C est en vert
    cat: "fpt"
  },
  {
    q: "Dans un SDIS, que comprend la direction ?",
    a: ["Le DDSIS", "Le DDSIS adjoint", "Le médecin Chef de la sous-direction santé", "Les chefs de groupement"],
    c: [0, 1, 2], // A, B et C sont en vert
    cat: "orga_sdis"
  },
  {
    q: "Quelle(s) réponse(s) concernant les catégories de SIS est ou sont correcte(s) ?",
    a: ["Ils sont classés par catégorie de 1 à 4", "Ils sont classés par le nombre d'interventions annuel", "SPP, SPV, SSSM et
];

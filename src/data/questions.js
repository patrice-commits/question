
// --- TRAITS & QUESTIONS DATABASE (V2) ---

export const traits = [
    { id: 1, name: "Leadership" }, { id: 2, name: "Charisme" }, { id: 3, name: "Persuasion" }, { id: 4, name: "Inspiration" },
    { id: 5, name: "Initiative" }, { id: 6, name: "Vision" }, { id: 7, name: "Ambition" }, { id: 8, name: "Esprit Analytique" },
    { id: 9, name: "Créativité" }, { id: 10, name: "Esprit Critique" }, { id: 11, name: "Innovation" }, { id: 12, name: "Curiosité" },
    { id: 13, name: "Intuition" }, { id: 14, name: "Détermination" }, { id: 15, name: "Persévérance" }, { id: 16, name: "Résilience" },
    { id: 17, name: "Ténacité" }, { id: 18, name: "Excellence" }, { id: 19, name: "Autodiscipline" }, { id: 20, name: "Calme" },
    { id: 21, name: "Empathie" }, { id: 22, name: "Écoute Active" }, { id: 23, name: "Coopération" }, { id: 24, name: "Travail d'Équipe" },
    { id: 25, name: "Diplomatie" }, { id: 26, name: "Respect" }, { id: 27, name: "Optimisme" }, { id: 28, name: "Flexibilité" },
    { id: 29, name: "Maîtrise de Soi" }, { id: 30, name: "Intégrité" }
];

// Content Dictionary (7 questions per trait max)
const traitQuestionsText = {
    1: [ // Leadership
        "Je prends naturellement la direction des opérations en situation de groupe.",
        "Les gens se tournent vers moi pour savoir quoi faire.",
        "Je n'hésite pas à prendre des décisions difficiles pour le bien de l'équipe.",
        "J'aime guider les autres vers l'atteinte de leurs objectifs.",
        "Je me sens à l'aise d'assumer la responsabilité des résultats collectifs.",
        "Je sais déléguer les tâches efficacement selon les forces de chacun.",
        "Je crée un climat de confiance qui motive l'action.",
    ],
    2: [ // Charisme
        "Je capte facilement l'attention lorsque je parle.",
        "On me dit souvent que j'ai une présence marquante.",
        "Je me fais facilement des amis ou des contacts.",
        "Je sais mettre les gens à l'aise rapidement.",
        "Mon enthousiasme est souvent contagieux.",
        "J'ai de la facilité à entraîner les autres dans mes projets.",
        "Je laisse une impression durable après une première rencontre."
    ],
    3: [ // Persuasion
        "Je trouve facilement les arguments pour convaincre.",
        "J'aime négocier et trouver des terrains d'entente.",
        "Je sais faire changer d'avis quelqu'un avec tact.",
        "Je vends mes idées avec aisance.",
        "Je comprends ce qui motive les autres pour mieux les influencer.",
        "Je sais rallier les sceptiques à ma cause."
    ],
    4: [ // Inspiration
        "J'éveille chez les autres le désir de se dépasser.",
        "Je communique une vision qui donne du sens à l'action.",
        "Mes paroles redonnent souvent espoir ou courage.",
        "Je suis vu comme un modèle par mon entourage.",
        "J'aime partager ma passion pour stimuler les autres.",
        "Je valorise les talents des autres pour qu'ils croient en eux.",
        "Je sais transformer une vision abstraite en une mission motivante."
    ],
    5: [ // Initiative
        "J'agis sans attendre les instructions.",
        "Je vois ce qu'il faut faire et je le fais immédiatement.",
        "Je propose souvent de nouvelles idées ou améliorations.",
        "Je n'ai pas peur d'être le premier à essayer quelque chose.",
        "Je prends les devants pour résoudre les problèmes.",
        "Je suis proactif plutôt que réactif.",
        "J'aime lancer de nouveaux projets."
    ],
    6: [ // Vision
        "J'anticipe les tendances futures avant les autres.",
        "J'ai une image claire de mes objectifs à long terme.",
        "Je vois la 'grande image' plutôt que seulement les détails.",
        "Je connecte des idées apparemment sans lien.",
        "Je prévois les obstacles potentiels bien à l'avance.",
        "Je sais où je veux amener mon équipe ou mon projet dans 5 ans.",
        "Je pense stratégiquement."
    ],
    7: [ // Ambition
        "Je vise toujours le sommet.",
        "Je ne me contente pas de résultats moyens.",
        "J'ai soif de réussite et de progression.",
        "Je me fixe des objectifs très élevés.",
        "Je cherche constamment à monter les échelons.",
        "Je veux laisser une marque importante dans mon domaine.",
        "Le statu quo ne me satisfait jamais."
    ],
    8: [ // Esprit Analytique
        "Je décompose les problèmes complexes en éléments simples.",
        "Je m'appuie sur les faits et les données pour décider.",
        "Je repère facilement les failles dans un raisonnement.",
        "J'aime comprendre le fonctionnement logique des choses.",
        "Je suis rigoureux dans mon traitement de l'information.",
        "Je ne tire pas de conclusions hâtives.",
        "J'aime organiser l'information de manière structurée."
    ],
    9: [ // Créativité
        "J'ai souvent des idées originales qui sortent de l'ordinaire.",
        "J'aime trouver des solutions inédites aux problèmes.",
        "Je vois les choses sous un angle différent des autres.",
        "L'expression artistique ou l'invention me stimule.",
        "Je n'ai pas peur de penser 'en dehors de la boîte'.",
        "J'apporte souvent une touche de nouveauté.",
        "Je connecte l'imaginaire au réel."
    ],
    10: [ // Esprit Critique
        "Je remets en question les idées reçues.",
        "J'évalue la crédibilité des sources d'information.",
        "Je ne prends pas tout ce qu'on me dit pour acquis.",
        "Je cherche les biais cachés dans un argument.",
        "J'analyse les pour et les contre avant de juger.",
        "J'aime les débats intellectuels.",
        "Je distingue facilement l'opinion du fait."
    ],
    11: [ // Innovation
        "Je cherche toujours une meilleure façon de faire les choses.",
        "J'aime utiliser les nouvelles technologies ou méthodes.",
        "Je n'ai pas peur de briser les traditions pour progresser.",
        "Je transforme les problèmes en opportunités d'invention.",
        "Je suis souvent à l'avant-garde du changement.",
        "J'expérimente volontiers des approches non testées.",
        "Je favorise le progrès continu."
    ],
    12: [ // Curiosité
        "J'ai soif d'apprendre sur tous les sujets.",
        "Je pose beaucoup de questions.",
        "Je m'intéresse sincèrement au fonctionnement du monde.",
        "J'aime découvrir de nouvelles cultures ou idées.",
        "L'inconnu me fascine plutôt que de m'effrayer.",
        "Je lis ou m'informe constamment.",
        "Je ne m'ennuie jamais car tout m'intéresse."
    ],
    13: [ // Intuition
        "Je 'sens' souvent les choses avant de les comprendre.",
        "Mes premières impressions sont souvent justes.",
        "Je fais confiance à mon instinct dans l'incertitude.",
        "Je devine les intentions des gens.",
        "Je perçois ce qui n'est pas dit explicitement.",
        "Je prends parfois des décisions 'au feeling' qui s'avèrent bonnes.",
        "J'ai du flair pour les opportunités."
    ],
    14: [ // Détermination
        "Une fois décidé, rien ne peut me faire changer de cap.",
        "Je poursuis mes buts avec une volonté de fer.",
        "Je suis concentré totalement sur la réussite.",
        "Les distractions ne m'éloignent pas de mon objectif.",
        "Je suis prêt à faire les sacrifices nécessaires.",
        "Ma volonté est ma plus grande force.",
        "Je vais jusqu'au bout de mes engagements."
    ],
    15: [ // Persévérance
        "Je continue d'avancer même quand c'est difficile.",
        "L'échec ne m'arrête pas, il m'instruit.",
        "Je suis capable d'efforts soutenus sur une longue période.",
        "Je ne lâche pas prise facilement.",
        "La patience dans l'effort est une de mes qualités.",
        "Je recommence autant de fois qu'il le faut.",
        "Je finis ce que je commence."
    ],
    16: [ // Résilience
        "Je rebondis rapidement après un coup dur.",
        "Je gère bien le stress et la pression.",
        "Je garde le moral même dans l'adversité.",
        "Je sais m'adapter aux crises.",
        "Je tire des leçons positives des épreuves.",
        "Je ne me laisse pas abattre par les critiques.",
        "Je suis solide émotionnellement."
    ],
    17: [ // Ténacité
        "Je m'accroche à mes tâches comme un pitbull.",
        "Je défends mes positions avec vigueur.",
        "Je ne recule pas devant l'effort intense.",
        "Je suis opiniâtre quand je sais que j'ai raison.",
        "Je surmonte les obstacles par la force de mon travail.",
        "Rien ne résiste à mon acharnement positif.",
        "Je suis endurant face à la difficulté."
    ],
    18: [ // Excellence
        "Je vise la perfection dans les détails.",
        "Je suis fier de produire un travail de haute qualité.",
        "Je ne supporte pas la médiocrité.",
        "Je cherche constamment à m'améliorer.",
        "Je dépasse souvent les attentes.",
        "Je suis méticuleux et rigoureux.",
        "La qualité est ma priorité absolue."
    ],
    19: [ // Autodiscipline (6Q)
        "Je respecte mes propres règles et horaires.",
        "Je n'ai pas besoin de surveillance pour travailler.",
        "Je maîtrise mes impulsions.",
        "Je sais dire non aux distractions.",
        "Je suis constant dans mes habitudes.",
        "Je fais ce qui doit être fait, même sans envie."
    ],
    20: [ // Calme
        "Je reste serein même quand tout le monde panique.",
        "Je prends le temps de réfléchir avant de réagir.",
        "Ma présence apaise les autres.",
        "Je ne laisse pas la colère me dominer.",
        "Je gère les conflits sans élever la voix.",
        "Je suis une force tranquille.",
        "Je garde mon sang-froid en situation critique."
    ],
    21: [ // Empathie
        "Je ressens facilement les émotions des autres.",
        "Je sais me mettre à la place de l'autre.",
        "Je suis touché par la souffrance d'autrui.",
        "Je comprends les points de vue différents du mien.",
        "Je suis attentif aux besoins émotionnels des gens.",
        "Je sais consoler et soutenir.",
        "Je suis perçu comme quelqu'un de compatissant."
    ],
    22: [ // Écoute Active
        "J'écoute pour comprendre, pas pour répondre.",
        "Je ne coupe pas la parole.",
        "Je pose des questions pour clarifier ce que j'entends.",
        "Je retiens bien ce qu'on me dit.",
        "Je donne toute mon attention à mon interlocuteur.",
        "Je sais lire entre les lignes dans une conversation.",
        "Les gens se sentent vraiment écoutés avec moi."
    ],
    23: [ // Coopération
        "J'aime travailler en synergie avec les autres.",
        "Je partage volontiers mes ressources et informations.",
        "Je cherche le consensus.",
        "Je ne joue pas perso, je joue collectif.",
        "Je suis prêt à aider un collègue en difficulté.",
        "Je privilégie l'entente cordiale.",
        "Je suis facile à vivre au travail."
    ],
    24: [ // Travail d'Équipe
        "Je connais mon rôle dans l'équipe et je le tiens.",
        "Je valorise la contribution de chacun.",
        "Je célèbre les succès du groupe.",
        "Je soutiens les décisions collectives.",
        "Je suis un joueur d'équipe fiable.",
        "Je favorise la cohésion du groupe.",
        "Je fais passer l'intérêt du groupe avant le mien."
    ],
    25: [ // Diplomatie
        "Je sais dire les vérités difficiles sans blesser.",
        "Je gère les sensibilités avec tact.",
        "Je suis doué pour désamorcer les tensions.",
        "Je trouve les mots justes dans les situations délicates.",
        "Je respecte le protocole et les convenances.",
        "Je suis un médiateur naturel.",
        "Je préserve l'harmonie dans mes relations."
    ],
    26: [ // Respect
        "Je traite tout le monde avec la même considération.",
        "Je suis poli et courtois en toutes circonstances.",
        "Je respecte les limites des autres.",
        "Je ne juge pas les gens hâtivement.",
        "Je valorise la diversité des opinions.",
        "Je suis attentif à ne pas froisser autrui.",
        "J'honore mes engagements envers les autres."
    ],
    27: [ // Optimisme
        "Je vois le verre à moitié plein.",
        "Je crois que les choses vont s'arranger.",
        "Je cherche le positif dans chaque situation.",
        "Mon attitude positive encourage les autres.",
        "Je ne me laisse pas décourager par le pessimisme.",
        "Je vois les problèmes comme des défis temporaires.",
        "J'ai confiance en l'avenir."
    ],
    28: [ // Flexibilité
        "Je m'adapte facilement aux changements de dernière minute.",
        "Je ne suis pas rigide sur la manière de faire.",
        "Je suis ouvert à modifier mes plans.",
        "Je sais improviser quand c'est nécessaire.",
        "Je tolère bien l'ambiguïté.",
        "J'accepte de changer d'avis face à de nouveaux faits.",
        "Je suis polyvalent."
    ],
    29: [ // Maîtrise de Soi (6Q)
        "Je garde le contrôle de mes émotions.",
        "Je ne cède pas à la provocation.",
        "Je suis capable de différer une gratification.",
        "Je reste professionnel sous la pression.",
        "Je maîtrise mes peurs.",
        "Je suis constant dans mon humeur."
    ],
    30: [ // Intégrité (5Q)
        "Je suis honnête même quand personne ne regarde.",
        "Je tiens mes promesses quoi qu'il en coûte.",
        "Mes actions sont alignées avec mes valeurs.",
        "Je refuse les compromissions éthiques.",
        "On peut compter sur ma parole."
    ]
};

// Mapping IDs (From User Specs)
const questionMap = {
    1: [1, 31, 61, 91, 121, 151, 181],
    2: [5, 35, 65, 95, 125, 155, 185],
    3: [15, 45, 75, 105, 135, 165],
    4: [11, 41, 71, 101, 131, 161, 191],
    5: [9, 39, 69, 99, 129, 159, 189],
    6: [6, 36, 66, 96, 126, 156, 186],
    7: [21, 51, 81, 111, 141, 171, 201],
    8: [12, 42, 72, 102, 132, 162, 192],
    9: [3, 33, 63, 93, 123, 153, 183],
    10: [19, 49, 79, 109, 139, 169, 199],
    11: [22, 52, 82, 112, 142, 172, 202],
    12: [23, 53, 83, 113, 143, 173, 203],
    13: [24, 54, 84, 114, 144, 174, 204],
    14: [4, 34, 64, 94, 124, 154, 184],
    15: [25, 55, 85, 115, 145, 175, 205],
    16: [17, 47, 77, 107, 137, 167, 197],
    17: [14, 44, 74, 104, 134, 164, 194],
    18: [26, 56, 86, 116, 146, 176, 206],
    19: [8, 38, 68, 98, 128, 158],
    20: [20, 50, 80, 110, 140, 170, 200],
    21: [2, 32, 62, 92, 122, 152, 182],
    22: [16, 46, 76, 106, 136, 166, 196],
    23: [18, 48, 78, 108, 138, 168, 198],
    24: [7, 37, 67, 97, 127, 157, 187],
    25: [27, 57, 87, 117, 147, 177, 207],
    26: [28, 58, 88, 118, 148, 178],
    27: [10, 40, 70, 100, 130, 160, 190],
    28: [13, 43, 73, 103, 133, 163],
    29: [29, 59, 89, 119, 149, 179],
    30: [30, 60, 90, 120, 150]
};

const generatedQuestions = [];

Object.entries(questionMap).forEach(([traitId, ids]) => {
    const t = traits.find(tr => tr.id == traitId);
    const texts = traitQuestionsText[traitId] || [];

    ids.forEach((qid, index) => {
        // Cycle through available texts if we have more IDs than texts (should match roughly)
        const text = texts[index % texts.length] || `Situation démontrant votre ${t.name.toLowerCase()}.`;

        generatedQuestions.push({
            id: qid,
            traitId: Number(traitId),
            text: text
        });
    });
});

generatedQuestions.sort((a, b) => a.id - b.id);

export const questions = generatedQuestions;

export const traits_v2 = [
    { id: 1, name: "Leadership" }, { id: 2, name: "Charisma" }, { id: 3, name: "Persuasiveness" }, { id: 4, name: "Inspiration" },
    { id: 5, name: "Initiative" }, { id: 6, name: "Vision" }, { id: 7, name: "Ambition" }, { id: 8, name: "Analytical Thinking" },
    { id: 9, name: "Creativity" }, { id: 10, name: "Critical Thinking" }, { id: 11, name: "Innovation" }, { id: 12, name: "Curiosity" },
    { id: 13, name: "Intuition" }, { id: 14, name: "Determination" }, { id: 15, name: "Perseverance" }, { id: 16, name: "Resilience" },
    { id: 17, name: "Tenacity" }, { id: 18, name: "Excellence" }, { id: 19, name: "Self-Discipline" }, { id: 20, name: "Calmness" },
    { id: 21, name: "Empathy" }, { id: 22, name: "Active Listening" }, { id: 23, name: "Cooperation" }, { id: 24, name: "Teamwork" },
    { id: 25, name: "Diplomacy" }, { id: 26, name: "Respectfulness" }, { id: 27, name: "Optimism" }, { id: 28, name: "Flexibility" },
    { id: 29, name: "Self-Control" }, { id: 30, name: "Integrity" }
];

export const questionMap = {
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
    15: [25, 55, 85, 115, 145, 175, 205], // Note: User listed Q25 for trait 15, but Q25 is also listed in Charisma (Trait 2) pattern... wait.
    // User list: "2. CHARISMA: Q5,Q25..." -> User typo? 
    // Let's look closer at User Request: "2. CHARISMA: Q5,Q35..." (Wait, request text Says "Q5,Q35" or "Q5,Q25"?
    // Request said: "2. CHARISMA (7Q): Q5,Q35..."
    // Request said: "15. PERSEVERANCE (7Q): Q25,Q55..."
    // So Q25 is Persistence. Q35 is Charisma.
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

// Generate flat list of 200+ questions
export const questions_v2 = [];
const allIds = new Set();

Object.entries(questionMap).forEach(([traitId, qIds]) => {
    const t = traits_v2.find(tr => tr.id == traitId);
    qIds.forEach(qid => {
        questions_v2.push({
            id: qid,
            traitId: Number(traitId),
            text: `Scénario pour ${t.name} (Q${qid}) : Situation démontrant votre ${t.name.toLowerCase()}.`
        });
        allIds.add(qid);
    });
});

questions_v2.sort((a, b) => a.id - b.id);

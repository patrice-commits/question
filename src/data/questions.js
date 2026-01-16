// Generated via mapping provided in V2 Specifications
// 30 Traits, variable distribution, ~200 questions

const traits = [
    { id: 1, name: "Leadership" }, { id: 2, name: "Charisma" }, { id: 3, name: "Persuasiveness" }, { id: 4, name: "Inspiration" },
    { id: 5, name: "Initiative" }, { id: 6, name: "Vision" }, { id: 7, name: "Ambition" }, { id: 8, name: "Analytical Thinking" },
    { id: 9, name: "Creativity" }, { id: 10, name: "Critical Thinking" }, { id: 11, name: "Innovation" }, { id: 12, name: "Curiosity" },
    { id: 13, name: "Intuition" }, { id: 14, name: "Determination" }, { id: 15, name: "Perseverance" }, { id: 16, name: "Resilience" },
    { id: 17, name: "Tenacity" }, { id: 18, name: "Excellence" }, { id: 19, name: "Self-Discipline" }, { id: 20, name: "Calmness" },
    { id: 21, name: "Empathy" }, { id: 22, name: "Active Listening" }, { id: 23, name: "Cooperation" }, { id: 24, name: "Teamwork" },
    { id: 25, name: "Diplomacy" }, { id: 26, name: "Respectfulness" }, { id: 27, name: "Optimism" }, { id: 28, name: "Flexibility" },
    { id: 29, name: "Self-Control" }, { id: 30, name: "Integrity" }
];

const questionMap = {
    1: [1, 31, 61, 91, 121, 151, 181], 2: [5, 35, 65, 95, 125, 155, 185], 3: [15, 45, 75, 105, 135, 165], 4: [11, 41, 71, 101, 131, 161, 191],
    5: [9, 39, 69, 99, 129, 159, 189], 6: [6, 36, 66, 96, 126, 156, 186], 7: [21, 51, 81, 111, 141, 171, 201], 8: [12, 42, 72, 102, 132, 162, 192],
    9: [3, 33, 63, 93, 123, 153, 183], 10: [19, 49, 79, 109, 139, 169, 199], 11: [22, 52, 82, 112, 142, 172, 202], 12: [23, 53, 83, 113, 143, 173, 203],
    13: [24, 54, 84, 114, 144, 174, 204], 14: [4, 34, 64, 94, 124, 154, 184], 15: [25, 55, 85, 115, 145, 175, 205], 16: [17, 47, 77, 107, 137, 167, 197],
    17: [14, 44, 74, 104, 134, 164, 194], 18: [26, 56, 86, 116, 146, 176, 206], 19: [8, 38, 68, 98, 128, 158], 20: [20, 50, 80, 110, 140, 170, 200],
    21: [2, 32, 62, 92, 122, 152, 182], 22: [16, 46, 76, 106, 136, 166, 196], 23: [18, 48, 78, 108, 138, 168, 198], 24: [7, 37, 67, 97, 127, 157, 187],
    25: [27, 57, 87, 117, 147, 177, 207], 26: [28, 58, 88, 118, 148, 178], 27: [10, 40, 70, 100, 130, 160, 190], 28: [13, 43, 73, 103, 133, 163],
    29: [29, 59, 89, 119, 149, 179], 30: [30, 60, 90, 120, 150]
};

const generatedQuestions = [];
Object.entries(questionMap).forEach(([traitId, ids]) => {
    const t = traits.find(tr => tr.id == traitId);
    ids.forEach(qid => {
        generatedQuestions.push({
            id: qid,
            traitId: Number(traitId),
            text: `Question sur ${t.name}: Situation type démontrant votre niveau de ${t.name}.`
        });
    });
});

generatedQuestions.sort((a, b) => a.id - b.id);

export const questions = generatedQuestions;

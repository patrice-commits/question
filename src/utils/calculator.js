import { traits } from '../data/traits';

export function calculateResults(answers) {
    // answers is an object/array: { "1": 5, "2": 3, ... "100": 4 } or array [null, 5, 3]
    // We expect flat object or array. Let's assume object key=questionId

    const results = traits.map(trait => {
        // Questions ids for trait T are: (T.id * 2 - 1) and (T.id * 2) 
        // Spec form asks specifically: q1 = trait.id * 2 - 2 (array index) -> Question IDs are 1-based usually.
        // Let's stick to 1-based Question IDs for logic, mapped to 0-based array if passed as array.

        // Logic from user prompt: 
        // q1 = answers[trait.id * 2 - 2];
        // q2 = answers[trait.id * 2 - 1];

        // Assuming 'answers' is an object { "1": 5, "2": 3 }
        const q1Id = (trait.id * 2) - 1;
        const q2Id = (trait.id * 2);

        const v1 = Number(answers[q1Id] || 0);
        const v2 = Number(answers[q2Id] || 0);

        const scoreMoyen = (v1 + v2) / 2;
        const ecart = Math.abs(v1 - v2);

        return {
            ...trait,
            score: scoreMoyen,
            gap: ecart,
            coherence: ecart <= 1.5 ? "OK" : "À vérifier"
        };
    });

    return results.sort((a, b) => b.score - a.score);
}

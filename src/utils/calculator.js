import { traits } from '../data/traits';
import { questions } from '../data/questions';

export function calculateResults(answers) {
    // answers is an object: { "1": 5, "2": 3, ... "207": 4 }

    const results = traits.map(trait => {
        // Find all questions for this trait
        const traitQuestions = questions.filter(q => q.traitId === trait.id);

        if (traitQuestions.length === 0) {
            return { ...trait, score: 0 };
        }

        // Calculate sum
        const sum = traitQuestions.reduce((acc, q) => {
            return acc + Number(answers[q.id] || 0);
        }, 0);

        // Average
        const scoreMoyen = sum / traitQuestions.length;

        return {
            ...trait,
            score: scoreMoyen
        };
    });

    return results.sort((a, b) => b.score - a.score);
}

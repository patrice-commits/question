import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { traits } from '../data/traits';
import ProgressBar from './ProgressBar';

const QUESTIONS_PER_PAGE = 5;
const TOTAL_PAGES = 20;

export default function QuestionnairePage({ answers, onAnswer, currentPage, setCurrentPage }) {
    const navigate = useNavigate();

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
    // Ensure we don't exceed bounds
    const currentQuestions = questions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

    // Validation: Check if all current questions have a value
    const isPageComplete = currentQuestions.every(q => answers[q.id] !== undefined && answers[q.id] !== null);

    const handleNext = () => {
        if (currentPage < TOTAL_PAGES) {
            setCurrentPage(p => p + 1);
        } else {
            navigate('/results');
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(p => p - 1);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '800px', paddingBottom: '4rem' }}>
            <ProgressBar current={currentPage} total={TOTAL_PAGES} />

            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
                {currentPage === TOTAL_PAGES ? "Dernière étape !" : "Évaluez les scénarios suivants"}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {currentQuestions.map(q => {
                    // Find trait name for context (Optional, spec showed "QUALITÉ #1: Charisma")
                    // But spec also said "Page 1: Q1-5...". If we want to show Trait Name we look it up.
                    const trait = traits.find(t => t.id === q.traitId);

                    return (
                        <QuestionItem
                            key={q.id}
                            question={q}
                            traitName={trait ? trait.name : ""}
                            value={answers[q.id]}
                            onChange={(val) => onAnswer(q.id, val)}
                        />
                    );
                })}
            </div>

            <div className="flex-between" style={{ marginTop: '3rem' }}>
                <button
                    className="btn btn-outline"
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    style={{ visibility: currentPage === 1 ? 'hidden' : 'visible' }}
                >
                    Précédent
                </button>

                <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    disabled={!isPageComplete}
                    style={{ opacity: isPageComplete ? 1 : 0.5, cursor: isPageComplete ? 'pointer' : 'not-allowed' }}
                >
                    {currentPage === TOTAL_PAGES ? "Voir mes résultats" : "Suivant"}
                </button>
            </div>
        </div>
    );
}

function QuestionItem({ question, traitName, value, onChange }) {
    return (
        <div className="card">
            <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '1.1rem', fontWeight: 500, marginTop: '0.5rem' }}>
                    <strong>#{question.id}</strong> "{question.text}"
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Pas du tout</span>
                <div style={{ display: 'flex', gap: '10px', flex: 1, justifyContent: 'center' }}>
                    {[1, 2, 3, 4, 5].map(rating => (
                        <LikertOption
                            key={rating}
                            value={rating}
                            selected={value === rating}
                            onSelect={() => onChange(rating)}
                        />
                    ))}
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tout à fait</span>
            </div>
        </div>
    );
}

function LikertOption({ value, selected, onSelect }) {
    // Styles for the radio box
    const size = selected ? '50px' : '40px';
    const bg = selected ? 'var(--primary)' : 'transparent';
    const color = selected ? 'white' : 'var(--text-muted)';
    const border = selected ? 'var(--primary)' : '#CBD5E1';

    return (
        <button
            onClick={onSelect}
            style={{
                width: size,
                height: size,
                borderRadius: '8px',
                border: `2px solid ${border}`,
                backgroundColor: bg,
                color: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            aria-label={`Note ${value}`}
        >
            {value}
        </button>
    );
}

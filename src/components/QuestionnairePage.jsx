import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { questions } from '../data/questions';
import { traits } from '../data/traits';
import ProgressBar from './ProgressBar';

const QUESTIONS_PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

export default function QuestionnairePage({ answers, onAnswer, currentPage, setCurrentPage }) {
    const { t } = useTranslation();
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
                {currentPage === TOTAL_PAGES ? t('test.last_step') : t('test.page_title')}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {currentQuestions.map(q => {
                    const trait = traits.find(t => t.id === q.traitId);
                    return (
                        <QuestionItem
                            key={q.id}
                            question={q}
                            traitName={trait ? trait.name : ""}
                            value={answers[q.id]}
                            onChange={(val) => onAnswer(q.id, val)}
                            t={t}
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
                    {t('test.prev')}
                </button>

                <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    disabled={!isPageComplete}
                    style={{ opacity: isPageComplete ? 1 : 0.5, cursor: isPageComplete ? 'pointer' : 'not-allowed' }}
                >
                    {currentPage === TOTAL_PAGES ? t('test.finish') : t('test.next')}
                </button>
            </div>
        </div>
    );
}

function QuestionItem({ question, traitName, value, onChange, t }) {
    const labels = t('instructions.scale_labels', { returnObjects: true }) || [];

    return (
        <div className="card">
            <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '1.1rem', fontWeight: 500, marginTop: '0.5rem' }}>
                    <strong>#{question.id}</strong> "{question.text}"
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '4px', alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                {[1, 2, 3, 4, 5].map((rating, idx) => (
                    <LikertOption
                        key={rating}
                        value={rating}
                        label={labels[idx] || ""}
                        selected={value === rating}
                        onSelect={() => onChange(rating)}
                    />
                ))}
            </div>
        </div>
    );
}

function LikertOption({ value, label, selected, onSelect }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, minWidth: '50px', maxWidth: '80px' }}>
            <button
                onClick={onSelect}
                style={{
                    width: '100%',
                    aspectRatio: '1/1',
                    maxWidth: '50px',
                    borderRadius: '8px',
                    border: `2px solid ${selected ? 'var(--primary)' : '#CBD5E1'}`,
                    backgroundColor: selected ? 'var(--primary)' : 'transparent',
                    color: selected ? 'white' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                }}
                aria-label={`Note ${value} - ${label}`}
            >
                {value}
            </button>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '4px', textAlign: 'center', fontWeight: 600, wordBreak: 'break-word' }}>
                {label}
            </span>
        </div>
    );
}

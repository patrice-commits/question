import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import QuestionnairePage from './components/QuestionnairePage';
import ResultsPage from './components/ResultsPage';

function App() {
    // Global State for answers
    // Structure: { [questionId]: value (1-5) }
    const [answers, setAnswers] = useState(() => {
        const saved = localStorage.getItem('rivest_answers');
        return saved ? JSON.parse(saved) : {};
    });

    const [currentPage, setCurrentPage] = useState(() => {
        return Number(localStorage.getItem('rivest_page') || 1);
    });

    // Auto-save effect
    useEffect(() => {
        localStorage.setItem('rivest_answers', JSON.stringify(answers));
        localStorage.setItem('rivest_page', currentPage);
    }, [answers, currentPage]);

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const resetTest = () => {
        if (window.confirm("Voulez-vous vraiment recommencer ? Vos réponses seront perdues.")) {
            setAnswers({});
            setCurrentPage(1);
            localStorage.removeItem('rivest_answers');
            localStorage.removeItem('rivest_page');
            window.location.href = '/';
        }
    };

    return (
        <Router>
            <div className="app-container">
                <header style={{ background: 'white', borderBottom: '1px solid var(--border)', padding: '1rem' }}>
                    <div className="container flex-between">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src="/logo_rivest.jpg" alt="RIVEST Logo" style={{ height: '40px' }} />
                            <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '1.2rem' }}>RIVEST</span>
                        </div>
                    </div>
                </header>

                <main style={{ minHeight: '80vh', padding: '2rem 0' }}>
                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route
                            path="/test"
                            element={
                                <QuestionnairePage
                                    answers={answers}
                                    onAnswer={handleAnswer}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            }
                        />
                        <Route
                            path="/results"
                            element={<ResultsPage answers={answers} onReset={resetTest} />}
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>

                <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--secondary)', fontSize: '0.9rem' }}>
                    <p>© 2026 RIVEST CO | coaching@rivest.com</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;

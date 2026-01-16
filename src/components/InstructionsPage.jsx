import React from 'react';
import { useNavigate } from 'react-router-dom';
import LikertScaleDemo from './LikertScaleDemo';
import { Clock, Target, Lightbulb, BarChart3, ArrowRight } from 'lucide-react';

export default function InstructionsPage({ totalPages = 42 }) {
    const navigate = useNavigate();

    const handleStart = () => {
        localStorage.setItem('rivest_instructions', 'true');
        navigate('/test');
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>

            {/* HEADER */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ background: '#E2E8F0', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Page 1/{totalPages + 1}
                </span>
                <h1 style={{ marginTop: '1rem', background: '-webkit-linear-gradient(45deg, #1E3A8A, #2BC0D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Instructions Finales
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    Comment répondre pour des résultats précis
                </p>
            </div>

            {/* SECTIONS */}
            <div style={{ display: 'grid', gap: '1.5rem' }}>

                {/* SECTION 1: TEMPS */}
                <InstructionCard
                    icon={<Clock color="var(--primary)" />}
                    title="Temps & Navigation"
                >
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={liStyle}>✅ <strong>~200 questions</strong> au total (40 pages)</li>
                        <li style={liStyle}>✅ Environ 15 secondes par question (~45 min)</li>
                        <li style={liStyle}>✅ Sauvegarde automatique (pause possible)</li>
                    </ul>
                </InstructionCard>

                {/* SECTION 2: ÉCHELLE */}
                <InstructionCard
                    icon={<Target color="var(--primary)" />}
                    title="L'Échelle 1-5"
                >
                    <p style={{ marginBottom: '1rem' }}>Utilisez toute l'échelle pour nuancer votre profil.</p>
                    <LikertScaleDemo />
                </InstructionCard>

                {/* SECTION 3: CONSEILS */}
                <InstructionCard
                    icon={<Lightbulb color="var(--primary)" />}
                    title="Conseils d'Honnêteté"
                >
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={liStyle}>✅ Répondez selon votre <strong>réalité actuelle</strong> (pas vos souhaits)</li>
                        <li style={liStyle}>✅ Pensez à vos 3 derniers mois</li>
                        <li style={liStyle}>✅ Répondez spontanément (première impression)</li>
                        <li style={liStyle}>🚫 Il n'y a pas de "bonnes" ou "mauvaises" réponses</li>
                    </ul>
                </InstructionCard>

                {/* SECTION 4: RÉSULTATS */}
                <InstructionCard
                    icon={<BarChart3 color="var(--primary)" />}
                    title="Ce que vous obtiendrez"
                >
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={liStyle}>🏆 Votre TOP 10 des qualités dominantes</li>
                        <li style={liStyle}>📊 Graphique radar complet</li>
                        <li style={liStyle}>💾 Export des résultats</li>
                    </ul>
                </InstructionCard>

            </div>

            {/* FOOTER CTA */}
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <p style={{ marginBottom: '1rem', fontWeight: 600, color: 'var(--accent)' }}>
                    Vous êtes prêt(e) pour découvrir vos 30 qualités dominantes !
                </p>
                <button
                    className="btn btn-primary"
                    onClick={handleStart}
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        padding: '1rem',
                        fontSize: '1.2rem',
                        backgroundColor: '#10B981', // Green
                        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                    }}
                >
                    JE COMPRENDS → COMMENCER <ArrowRight style={{ marginLeft: '8px', display: 'inline' }} size={20} />
                </button>
            </div>

        </div>
    );
}

function InstructionCard({ icon, title, children }) {
    return (
        <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ background: '#F1F5F9', padding: '0.75rem', borderRadius: '50%' }}>
                {icon}
            </div>
            <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{title}</h3>
                <div style={{ color: 'var(--text-main)', lineHeight: '1.6' }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

const liStyle = { marginBottom: '0.5rem' };

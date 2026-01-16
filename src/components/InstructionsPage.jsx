import React from 'react';
import { useNavigate } from 'react-router-dom';
import LikertScaleDemo from './LikertScaleDemo';
import { Clock, Target, Lightbulb, BarChart3, ArrowRight } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export default function InstructionsPage({ totalPages = 42 }) {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

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
                    {t('instructions.title')}
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    {t('instructions.subtitle')}
                </p>
            </div>

            {/* SECTIONS */}
            <div style={{ display: 'grid', gap: '1.5rem' }}>

                {/* SECTION 1: TEMPS */}
                <InstructionCard
                    icon={<Clock color="var(--primary)" />}
                    title={t('instructions.time_title')}
                >
                    <div style={{ whiteSpace: 'pre-line' }}>{t('instructions.time_desc')}</div>
                </InstructionCard>

                {/* SECTION 2: ÉCHELLE */}
                <InstructionCard
                    icon={<Target color="var(--primary)" />}
                    title={t('instructions.scale_title')}
                >
                    <p style={{ marginBottom: '1rem' }}>{t('instructions.scale_desc')}</p>
                    <LikertScaleDemo t={t} />
                </InstructionCard>

                {/* SECTION 3: CONSEILS */}
                <InstructionCard
                    icon={<Lightbulb color="var(--primary)" />}
                    title={t('instructions.tips_title')}
                >
                    <div style={{ whiteSpace: 'pre-line' }}>{t('instructions.tips_desc')}</div>
                </InstructionCard>

                {/* SECTION 4: RÉSULTATS */}
                <InstructionCard
                    icon={<BarChart3 color="var(--primary)" />}
                    title={t('instructions.results_title')}
                >
                    <div style={{ whiteSpace: 'pre-line' }}>{t('instructions.results_desc')}</div>
                </InstructionCard>

            </div>

            {/* FOOTER CTA */}
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <p style={{ marginBottom: '1rem', fontWeight: 600, color: 'var(--accent)' }}>
                    {t('instructions.ready')}
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
                    {t('instructions.cta')} <ArrowRight style={{ marginLeft: '8px', display: 'inline' }} size={20} />
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

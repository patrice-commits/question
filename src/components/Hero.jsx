import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '4rem 2rem' }}>
                <h1 style={{ marginBottom: '1rem' }}>
                    Découvrez vos <span style={{ color: 'var(--primary)' }}>10 Qualités Dominantes</span>
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                    Le Test de Talent RIVEST vous révèle vos forces cachées grâce à une méthodologie issue de la psychologie positive.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '3rem' }}>
                    <Feature text="Basé sur la psychologie positive (Validation Scientifique)" />
                    <Feature text="100 scénarios concrets pour une analyse précise" />
                    <Feature text="Rapport détaillé instantané avec Top 10" />
                </div>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate('/test')}
                    style={{ fontSize: '1.3rem', padding: '1rem 3rem' }}
                >
                    COMMENCER LE TEST <ArrowRight style={{ marginLeft: '10px' }} />
                </button>

                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#9CA3AF' }}>
                    Durée estimée : 20-25 minutes • 20 pages
                </p>
            </div>
        </div>
    );
}

function Feature({ text }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
            <CheckCircle2 color="var(--success)" size={24} />
            <span>{text}</span>
        </div>
    );
}

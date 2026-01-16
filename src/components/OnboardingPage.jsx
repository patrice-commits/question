import React from 'react';
import { useOnboarding } from '../hooks/useOnboarding';
import UserInfoForm from './UserInfoForm';
import ConsentForm from './ConsentForm';
import ProgressBar from './ProgressBar';

export default function OnboardingPage({ onComplete }) {
    const { userData, isValid, handleChange, handleSubmit } = useOnboarding(onComplete);

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ background: '-webkit-linear-gradient(45deg, #1E3A8A, #2BC0D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '2.5rem', fontWeight: 800 }}>
                    TEST DE TALENT RIVEST
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                    Découvrez vos 30 qualités dominantes
                </p>
                <div style={{ marginTop: '1rem' }}>
                    <span style={{ background: '#E2E8F0', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        Page 0/41
                    </span>
                </div>
            </div>

            <UserInfoForm data={userData} onChange={handleChange} />

            <ConsentForm data={userData} onChange={handleChange} />

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <button
                    className="btn btn-primary"
                    style={{
                        width: '100%',
                        fontSize: '1.2rem',
                        padding: '1rem',
                        opacity: isValid ? 1 : 0.5,
                        backgroundColor: isValid ? '#10B981' : 'var(--secondary)' // Green when valid
                    }}
                    disabled={!isValid}
                    onClick={handleSubmit}
                >
                    DÉMARRER LE TEST
                </button>
            </div>
        </div>
    );
}

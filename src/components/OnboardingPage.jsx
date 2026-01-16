import React from 'react';
import { useOnboarding } from '../hooks/useOnboarding';
import UserInfoForm from './UserInfoForm';
import ConsentForm from './ConsentForm';
import { useTranslation } from 'react-i18next';

export default function OnboardingPage({ onComplete }) {
    const { t, i18n } = useTranslation();
    const { userData, isValid, handleChange, handleSubmit } = useOnboarding(onComplete);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', gap: '10px' }}>
                <button onClick={() => changeLanguage('fr')} style={{ fontWeight: i18n.language === 'fr' ? 'bold' : 'normal', background: 'none', border: 'none', cursor: 'pointer', color: i18n.language === 'fr' ? 'var(--primary)' : 'var(--text-muted)' }}>FR</button>
                <button onClick={() => changeLanguage('en')} style={{ fontWeight: i18n.language === 'en' ? 'bold' : 'normal', background: 'none', border: 'none', cursor: 'pointer', color: i18n.language === 'en' ? 'var(--primary)' : 'var(--text-muted)' }}>EN</button>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ background: '-webkit-linear-gradient(45deg, #1E3A8A, #2BC0D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '2.5rem', fontWeight: 800 }}>
                    {t('onboarding.title')}
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                    {t('onboarding.subtitle')}
                </p>
                <div style={{ marginTop: '1rem' }}>
                    <span style={{ background: '#E2E8F0', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        {t('onboarding.page')}
                    </span>
                </div>
            </div>

            <UserInfoForm data={userData} onChange={handleChange} t={t} />

            <ConsentForm data={userData} onChange={handleChange} t={t} />

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
                    {t('onboarding.start')}
                </button>
            </div>
        </div>
    );
}

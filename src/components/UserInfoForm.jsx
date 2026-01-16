import React from 'react';

export default function UserInfoForm({ data, onChange, t }) {
    const occupations = [
        "Entrepreneur", "Cadre", "Commercial", "Technique", "RH", "Étudiant", "Autre"
    ];

    const ages = [
        "18-24", "25-34", "35-44", "45-54", "55-64", "65+"
    ];

    return (
        <div className="card">
            <h2>Informations Personnelles</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{t('onboarding.firstname')}*</label>
                        <input
                            type="text"
                            style={inputStyle}
                            value={data.prenom}
                            onChange={(e) => onChange('prenom', e.target.value)}
                            placeholder="..."
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{t('onboarding.name')}*</label>
                        <input
                            type="text"
                            style={inputStyle}
                            value={data.nom}
                            onChange={(e) => onChange('nom', e.target.value)}
                            placeholder="..."
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{t('onboarding.age')}*</label>
                        <select
                            style={inputStyle}
                            value={data.age}
                            onChange={(e) => onChange('age', e.target.value)}
                        >
                            <option value="">...</option>
                            {ages.map(a => <option key={a} value={a}>{a}</option>)}
                        </select>
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{t('onboarding.occupation')}*</label>
                        <select
                            style={inputStyle}
                            value={data.occupation}
                            onChange={(e) => onChange('occupation', e.target.value)}
                        >
                            <option value="">...</option>
                            {occupations.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{t('onboarding.email')}*</label>
                    <input
                        type="email"
                        style={inputStyle}
                        value={data.email}
                        onChange={(e) => onChange('email', e.target.value)}
                        placeholder="exemple@email.com"
                    />
                </div>
            </div>
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #CBD5E1',
    fontSize: '1rem'
};

import React, { useState } from 'react';

export default function ConsentForm({ data, onChange }) {
    const [showTerms, setShowTerms] = useState(false);

    return (
        <div className="card">
            <h2>Consentement</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Checkbox
                    label="Je confirme avoir 18 ans ou plus."
                    checked={data.consentAge}
                    onChange={(val) => onChange('consentAge', val)}
                />

                <Checkbox
                    label={
                        <span>
                            J'ai lu et j'accepte les <button onClick={() => setShowTerms(true)} style={linkStyle}>conditions d'utilisation</button>.
                        </span>
                    }
                    checked={data.consentTerms}
                    onChange={(val) => onChange('consentTerms', val)}
                />

                <Checkbox
                    label="J'accepte de recevoir mes résultats par courriel."
                    checked={data.consentEmail}
                    onChange={(val) => onChange('consentEmail', val)}
                />
            </div>

            {showTerms && (
                <div style={modalOverlayStyle}>
                    <div style={modalContentStyle}>
                        <h3>Conditions d'utilisation</h3>
                        <div style={scrollBoxStyle}>
                            <p><strong>Dernière mise à jour : 2026</strong></p>
                            <p>En utilisant ce test de talent RIVEST, vous acceptez que vos réponses soient traitées de manière confidentielle pour générer votre profil de compétences.</p>
                            <p><strong>1. Collecte de données</strong><br />
                                Nous collectons votre nom, prénom, email et vos réponses uniquement dans le but de vous fournir vos résultats.</p>
                            <p><strong>2. Confidentialité</strong><br />
                                Vos données ne seront jamais vendues à des tiers.</p>
                            <p><strong>3. Utilisation des résultats</strong><br />
                                Ce test est un outil d'auto-évaluation et ne remplace pas un diagnostic psychologique professionnel.</p>
                            <p><strong>4. Propriété intellectuelle</strong><br />
                                Le contenu de ce test est la propriété exclusive de RIVEST CO.</p>
                        </div>
                        <button style={btnStyle} onClick={() => setShowTerms(false)}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
}

function Checkbox({ label, checked, onChange }) {
    return (
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '1rem' }}>{label}</span>
        </label>
    );
}

const linkStyle = {
    background: 'none', border: 'none', color: 'var(--primary)',
    textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit'
};

const modalOverlayStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
    alignItems: 'center', justifyContent: 'center', zIndex: 1000
};

const modalContentStyle = {
    backgroundColor: 'white', padding: '2rem', borderRadius: '1rem',
    maxWidth: '500px', width: '90%', maxHeight: '80vh', display: 'flex', flexDirection: 'column'
};

const scrollBoxStyle = {
    overflowY: 'auto', flex: 1, border: '1px solid #eee', padding: '1rem',
    margin: '1rem 0', maxHeight: '300px'
};

const btnStyle = {
    backgroundColor: 'var(--primary)', color: 'white', border: 'none',
    padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', alignSelf: 'flex-end'
};

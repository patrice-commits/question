import React, { useState } from 'react';

export default function LikertScaleDemo() {
    const [selected, setSelected] = useState(4); // Default to 'Habituellement'

    const options = [
        { val: 1, label: "FAIBLE", desc: "Ne me ressemble PAS" },
        { val: 2, label: "OCCASIONNELLE", desc: "Parfois seulement" },
        { val: 3, label: "MODÉRÉE", desc: "Neutre / Standard" },
        { val: 4, label: "FORTE", desc: "Habituellement" },
        { val: 5, label: "DOMINANTE", desc: "Instinctive / TOUJOURS" }
    ];

    return (
        <div className="card" style={{ padding: '1.5rem', margin: '1rem 0', borderLeft: '4px solid var(--primary)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>🎯 EXEMPLE INTERACTIF</h3>
            <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
                "Imaginez une situation de crise : l'équipe vous regarde pour décider."
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                {options.map((opt) => (
                    <button
                        key={opt.val}
                        onClick={() => setSelected(opt.val)}
                        style={{
                            flex: '1 1 60px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '0.5rem',
                            border: `2px solid ${selected === opt.val ? 'var(--primary)' : '#E2E8F0'}`,
                            borderRadius: '0.5rem',
                            backgroundColor: selected === opt.val ? '#F0FDFA' : 'white',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        <div style={{
                            width: '24px', height: '24px', borderRadius: '50%',
                            border: '2px solid var(--primary)', marginBottom: '0.5rem',
                            background: selected === opt.val ? 'var(--primary)' : 'transparent'
                        }}></div>
                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--accent)' }}>{opt.val}</span>
                        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 600 }}>{opt.label}</span>
                        <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textAlign: 'center' }}>{opt.desc}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

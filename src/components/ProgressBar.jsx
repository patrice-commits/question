import React from 'react';

export default function ProgressBar({ current, total }) {
    const percentage = Math.round((current / total) * 100);

    return (
        <div style={{ marginBottom: '2rem' }}>
            <div className="flex-between" style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <span>Page {current} sur {total}</span>
                <span>{percentage}% complété</span>
            </div>
            <div style={{ height: '10px', background: '#E2E8F0', borderRadius: '10px', overflow: 'hidden' }}>
                <div
                    style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--primary) 0%, var(--success) 100%)',
                        width: `${percentage}%`,
                        transition: 'width 0.4s ease'
                    }}
                />
            </div>
        </div>
    );
}

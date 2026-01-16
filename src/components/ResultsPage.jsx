import React, { useMemo } from 'react';
import { calculateResults } from '../utils/calculator';
import { useTranslation } from 'react-i18next';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Download, RefreshCw, Award } from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function ResultsPage({ answers, onReset }) {
    const { t } = useTranslation();
    const sortedTraits = useMemo(() => calculateResults(answers), [answers]);
    const top10 = sortedTraits.slice(0, 10);

    // Prepare Chart Data
    const chartData = {
        labels: top10.map(t => t.name),
        datasets: [
            {
                label: t('results.chart_label'),
                data: top10.map(t => t.score),
                backgroundColor: '#2BC0D2', // Brand Primary
                borderRadius: 4,
            },
        ],
    };

    const chartOptions = {
        indexAxis: 'y', // Horizontal bars
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: t('results.subtitle') }, // Using subtitle as chart title for now or we could add scale_title equivalent
        },
        scales: {
            x: { min: 0, max: 5 },
        }
    };

    const handleExport = () => {
        const dataStr = JSON.stringify(sortedTraits, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const exportFileDefaultName = 'resultats-rivest.json';

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };

    return (
        <div className="container" style={{ paddingBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ color: 'var(--accent)' }}>{t('results.title')}</h1>
                <p style={{ fontSize: '1.2rem' }}>{t('results.subtitle')}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                {/* Top 3 Cards */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
                    {top10.slice(0, 3).map((trait, idx) => (
                        <div key={trait.id} className="card" style={{ flex: '1 1 250px', textAlign: 'center', borderTop: `4px solid var(--primary)` }}>
                            <div style={{ marginBottom: '0.5rem', color: '#F59E0B' }}>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{ opacity: i < Math.round(trait.score) ? 1 : 0.3 }}>⭐</span>
                                ))}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>#{idx + 1} {trait.name}</h3>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                                {trait.score.toFixed(1)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chart Section */}
                <div className="card" style={{ padding: '2rem' }}>
                    <Bar options={chartOptions} data={chartData} />
                </div>

                {/* Detailed List */}
                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>{t('results.subtitle')}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {top10.map((trait, idx) => (
                            <div key={trait.id} className="flex-between" style={{ padding: '0.5rem', background: idx % 2 === 0 ? '#F8FAFC' : 'white' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontWeight: 'bold', color: 'var(--text-muted)', width: '30px' }}>#{idx + 1}</span>
                                    <span style={{ fontWeight: '600' }}>{trait.name}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <span style={{ fontSize: '0.9rem', color: trait.coherence === 'OK' ? 'var(--success)' : 'orange' }}>
                                        {trait.coherence === 'OK' ? 'Validé' : 'À vérifier'}
                                    </span>
                                    <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{trait.score}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                    <button className="btn btn-primary" onClick={handleExport}>
                        <Download size={20} style={{ marginRight: '8px' }} />
                        Exporter JSON
                    </button>

                    <button className="btn btn-outline" onClick={onReset}>
                        <RefreshCw size={20} style={{ marginRight: '8px' }} />
                        {t('results.restart')}
                    </button>

                    <button className="btn" style={{ background: 'var(--accent)', color: 'white' }}>
                        <Award size={20} style={{ marginRight: '8px' }} />
                        Réserver Workshop (4h)
                    </button>
                </div>
            </div>
        </div>
    );
}

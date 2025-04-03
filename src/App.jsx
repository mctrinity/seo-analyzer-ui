// src/App.jsx
import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import UrlForm from './components/UrlForm';
import ScoreCard from './components/ScoreCard';
import IssueList from './components/IssueList';
import Metrics from './components/Metrics';
import Recommendations from './components/Recommendations';

const mockResponse = {
  url: 'scidyllics.com',
  score: 45,
  seoCoverage: 45,
  essentialTags: { found: 3, total: 4 },
  socialTags: { found: 0, total: 6 },
  technicalTags: { found: 2, total: 3 },
  issues: {
    critical: [],
    warnings: [
      'Missing canonical URL',
      'Incomplete Open Graph tags',
      'Missing Twitter Card meta tag',
    ],
    suggestions: [
      'Make your title tag more descriptive',
      'Expand your meta description',
      'Consider adding a robots meta tag',
      'Use schema.org structured data',
      'Consider implementing meta keywords',
    ],
  },
  metrics: {
    performance: 75,
    seo: 45,
    social: 0,
  },
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [data, setData] = useState(mockResponse);
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(mockResponse);
  };

  return (
    <div className={darkMode ? 'dark bg-gray-950 text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <UrlForm url={url} setUrl={setUrl} handleSubmit={handleSubmit} />
        <ScoreCard data={data} />
        <IssueList issues={data.issues} />
        <Metrics metrics={data.metrics} />
        <Recommendations issues={data.issues} />
      </div>
    </div>
  );
}

export default App;
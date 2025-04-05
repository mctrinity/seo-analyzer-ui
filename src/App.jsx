// src/App.jsx
import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import UrlForm from './components/UrlForm';
import ScoreCard from './components/ScoreCard';
import IssueList from './components/IssueList';
import Metrics from './components/Metrics';
import Recommendations from './components/Recommendations';

function App() {
  // const [darkMode, setDarkMode] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const [data, setData] = useState(null);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Please enter a valid URL.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      console.log(`Sending request to backend for URL: ${url}`);
      const res = await fetch(`http://localhost:3000/analyze?url=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error('Failed to fetch analysis');
      const result = await res.json();
      console.log('Received response:', result);
      setData(result);
    } catch (err) {
      console.error('Error during fetch:', err);
      setError('Unable to analyze the website. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log({ url, loading, error, data });
  }, [url, loading, error, data]);

  console.log('Rendering App');

  return (
    <div className={darkMode ? 'dark bg-gray-950 text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <UrlForm url={url} setUrl={setUrl} handleSubmit={handleSubmit} />

        {loading && <p className="text-center text-lg">🔍 Analyzing <strong>{url}</strong>...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && !data && (
          <div className="text-center text-white bg-red-500 p-4 rounded-lg">
            ✅ App is working! Now enter a URL to see results.
          </div>
        )}


        {data && !loading && !error && (
          <>
            <ScoreCard data={data} />
            <IssueList issues={data.issues} />
            <Metrics metrics={data.metrics} />
            <Recommendations issues={data.issues} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
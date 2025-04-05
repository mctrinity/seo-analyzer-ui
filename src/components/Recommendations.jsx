function Recommendations({ issues }) {
    const warnings = issues?.warnings ?? [];
    const suggestions = issues?.suggestions ?? [];
  
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">SEO Recommendations</h3>
        <ul className="list-disc list-inside space-y-1">
          {warnings.map((w, idx) => (
            <li key={idx} className="text-yellow-300">{w}</li>
          ))}
          {suggestions.map((s, idx) => (
            <li key={idx} className="text-green-300">{s}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Recommendations;
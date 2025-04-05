function IssueList({ issues }) {
    const critical = issues?.critical ?? [];
    const warnings = issues?.warnings ?? [];
    const suggestions = issues?.suggestions ?? [];
  
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Issues Found</h3>
        <p className="text-red-400">Critical: {critical.length}</p>
        <p className="text-yellow-300">Warnings: {warnings.length}</p>
        <p className="text-green-300">Suggestions: {suggestions.length}</p>
      </div>
    );
  }
  
  export default IssueList;
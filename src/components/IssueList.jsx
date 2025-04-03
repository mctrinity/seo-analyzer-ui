function IssueList({ issues }) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Issues Found</h3>
        <p className="text-red-400">Critical: {issues.critical.length}</p>
        <p className="text-yellow-300">Warnings: {issues.warnings.length}</p>
        <p className="text-green-300">Suggestions: {issues.suggestions.length}</p>
      </div>
    );
  }
  
  export default IssueList;
  
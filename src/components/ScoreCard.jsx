function ScoreCard({ data }) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Analysis Results for <span className="text-blue-400">{data.url}</span></h2>
        <div className="text-5xl font-bold text-yellow-400 mb-4">{data.score}/100</div>
        <div className="mb-4">
          <div className="text-gray-400">SEO Tag Coverage</div>
          <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
            <div
              className="bg-yellow-400 h-full"
              style={{ width: `${data.seoCoverage}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm">Essential Tags: {data.essentialTags.found}/{data.essentialTags.total}</p>
          <p className="text-sm">Social Tags: {data.socialTags.found}/{data.socialTags.total}</p>
          <p className="text-sm">Technical Tags: {data.technicalTags.found}/{data.technicalTags.total}</p>
        </div>
      </div>
    );
  }
  
  export default ScoreCard;
  
function ScoreCard({ data }) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-2">
          Analysis Results for <span className="text-blue-400">{data?.url ?? 'N/A'}</span>
        </h2>
        <div className="text-5xl font-bold text-yellow-400 mb-4">{data?.score ?? 0}/100</div>
        <div className="mb-4">
          <div className="text-gray-400">SEO Tag Coverage</div>
          <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
            <div
              className="bg-yellow-400 h-full"
              style={{ width: `${data?.seoCoverage ?? 0}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm">
            Essential Tags: {data?.essentialTags?.found ?? 0}/{data?.essentialTags?.total ?? 0}
          </p>
          <p className="text-sm">
            Social Tags: {data?.socialTags?.found ?? 0}/{data?.socialTags?.total ?? 0}
          </p>
          <p className="text-sm">
            Technical Tags: {data?.technicalTags?.found ?? 0}/{data?.technicalTags?.total ?? 0}
          </p>
        </div>
      </div>
    );
  }
  
  export default ScoreCard;
  
  
function Metrics({ metrics }) {
    const seo = metrics?.seo ?? 0;
    const social = metrics?.social ?? 0;
    const performance = metrics?.performance ?? 0;
  
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-center">
            <p className="text-sm text-gray-500">SEO</p>
            <p className="text-2xl font-bold text-blue-400">{seo}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-center">
            <p className="text-sm text-gray-500">Social</p>
            <p className="text-2xl font-bold text-pink-400">{social}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-center">
            <p className="text-sm text-gray-500">Performance</p>
            <p className="text-2xl font-bold text-green-400">{performance}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Metrics;
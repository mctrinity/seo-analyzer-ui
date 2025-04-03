function UrlForm({ url, setUrl, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-lg font-medium">Analyze Your Website</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL"
          className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Analyze Website
        </button>
      </form>
    );
  }
  
  export default UrlForm;
  
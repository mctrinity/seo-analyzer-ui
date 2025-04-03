function Header({ darkMode, setDarkMode }) {
    return (
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-extrabold tracking-tight">SEO Tag Analyzer</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-4 py-2 rounded-xl text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
    );
  }
  
  export default Header;
  
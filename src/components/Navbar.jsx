const Navbar = () => {
  return (
    <nav className="w-full py-5 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center z-10 glass-card rounded-b-2xl border-t-0 mx-auto max-w-7xl">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        {/* Logo Mark */}
        <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-pink-500 rounded-xl shadow-lg shadow-indigo-500/30 border border-white/10 group cursor-pointer hover:scale-105 transition-transform">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white font-heading">
            Content
          </span>
          <span className="text-lg font-bold tracking-tight text-indigo-400 font-heading">
            Engineering
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



import Logo from "./logo"
import boyImage from "../public/boy.png"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/60">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Logo small />
            <p className="text-xs text-slate-400">{"Cook Smart, Eat Well, Live Better."}</p>
          </div>
          {/* Made by section */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500">Made by</span>
            <div className="flex items-center gap-4 flex-row">
              {/* Debashis */}
              <div className="flex items-center space-x-2 group">
                <a
                  href="https://deb-folio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-600 hover:border-purple-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                    <img
                      src={typeof boyImage === 'string' ? boyImage : boyImage.src}
                      alt="Debashis"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Debashis
                  </div>
                </a>
                <span className="text-sm text-gray-400">Debashis</span>
              </div>
              <span className="text-sm text-gray-500">&</span>
              {/* Parthib */}
              <div className="flex items-center space-x-2 group">
                <a
                  href="https://github.com/hawkaii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-600 hover:border-purple-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                    <img
                      src={typeof boyImage === 'string' ? boyImage : boyImage.src}
                      alt="Parthib"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Parthib
                  </div>
                </a>
                <span className="text-sm text-gray-400">Parthib</span>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="text-xs text-slate-400 text-center sm:text-right w-full sm:w-auto">
            © {new Date().getFullYear()} Annapurna. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Bell, Search, User, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="h-16 bg-terminal-surface border-b-2 border-terminal-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-terminal-muted" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-terminal-bg border-2 border-terminal-border pl-10 pr-4 py-2 font-mono text-sm text-terminal-text placeholder:text-terminal-muted focus:border-terminal-accent focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="relative p-2 hover:bg-terminal-bg border-2 border-transparent hover:border-terminal-accent transition-all"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className="relative p-2 hover:bg-terminal-bg border-2 border-transparent hover:border-terminal-accent transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-terminal-error rounded-full animate-pulse" />
        </button>
        <button className="flex items-center gap-2 px-3 py-2 hover:bg-terminal-bg border-2 border-transparent hover:border-terminal-accent transition-all">
          <User className="w-5 h-5" />
          <span className="font-mono text-sm">admin</span>
        </button>
      </div>
    </header>
  )
}

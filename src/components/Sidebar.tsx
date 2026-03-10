import { NavLink } from 'react-router-dom'
import { LayoutDashboard, BarChart3, Settings, Terminal } from 'lucide-react'

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/analytics', icon: BarChart3, label: 'Analytics' },
  { path: '/settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-terminal-surface border-r-2 border-terminal-border flex flex-col">
      <div className="p-6 border-b-2 border-terminal-border">
        <div className="flex items-center gap-3">
          <Terminal className="w-8 h-8 text-terminal-accent" />
          <div>
            <h1 className="font-display text-xl font-bold text-terminal-accent">TERMINAL</h1>
            <p className="font-mono text-xs text-terminal-muted">v2.0.1</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 font-mono text-sm border-2 transition-all duration-200 ${
                isActive
                  ? 'bg-terminal-accent text-terminal-bg border-terminal-accent'
                  : 'bg-transparent text-terminal-text border-terminal-border hover:border-terminal-accent hover:text-terminal-accent'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t-2 border-terminal-border">
        <div className="font-mono text-xs text-terminal-muted space-y-1">
          <div className="flex justify-between">
            <span>STATUS:</span>
            <span className="text-terminal-accent">ONLINE</span>
          </div>
          <div className="flex justify-between">
            <span>UPTIME:</span>
            <span>99.9%</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

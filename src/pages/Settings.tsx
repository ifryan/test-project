import { Save, RefreshCw } from 'lucide-react'

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-terminal-accent">SETTINGS</h1>
        <p className="font-mono text-sm text-terminal-muted mt-1">Configure your dashboard</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card animate-slide-up">
          <h2 className="font-display text-xl font-bold text-terminal-text mb-6">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-mono text-xs text-terminal-muted uppercase tracking-wider mb-2">
                Dashboard Name
              </label>
              <input
                type="text"
                defaultValue="Terminal Dashboard"
                className="w-full bg-terminal-bg border-2 border-terminal-border px-4 py-2 font-mono text-sm text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-terminal-muted uppercase tracking-wider mb-2">
                Refresh Interval
              </label>
              <select className="w-full bg-terminal-bg border-2 border-terminal-border px-4 py-2 font-mono text-sm text-terminal-text focus:border-terminal-accent focus:outline-none transition-colors">
                <option>30 seconds</option>
                <option>1 minute</option>
                <option>5 minutes</option>
                <option>Manual</option>
              </select>
            </div>
            <div className="flex items-center justify-between p-4 bg-terminal-bg border-2 border-terminal-border">
              <div>
                <p className="font-mono text-sm text-terminal-text">Dark Mode</p>
                <p className="font-mono text-xs text-terminal-muted mt-1">Enable dark theme</p>
              </div>
              <button className="w-12 h-6 bg-terminal-accent border-2 border-terminal-accent relative">
                <span className="absolute right-0 top-0 w-6 h-full bg-terminal-bg border-l-2 border-terminal-accent" />
              </button>
            </div>
          </div>
        </div>

        <div className="card animate-slide-up" style={{ animationDelay: '100ms' }}>
          <h2 className="font-display text-xl font-bold text-terminal-text mb-6">Notifications</h2>
          <div className="space-y-4">
            {[
              { label: 'Email Notifications', description: 'Receive updates via email' },
              { label: 'Push Notifications', description: 'Browser push notifications' },
              { label: 'Weekly Reports', description: 'Get weekly summary reports' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between p-4 bg-terminal-bg border-2 border-terminal-border hover:border-terminal-accent transition-colors"
              >
                <div>
                  <p className="font-mono text-sm text-terminal-text">{item.label}</p>
                  <p className="font-mono text-xs text-terminal-muted mt-1">{item.description}</p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 bg-terminal-bg border-2 border-terminal-border checked:bg-terminal-accent checked:border-terminal-accent"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
        <button className="btn-primary">
          <Save className="w-4 h-4 inline mr-2" />
          Save Changes
        </button>
        <button className="btn-secondary">
          <RefreshCw className="w-4 h-4 inline mr-2" />
          Reset
        </button>
      </div>
    </div>
  )
}

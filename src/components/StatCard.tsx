import { LucideIcon } from 'lucide-react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: LucideIcon
}

export default function StatCard({ title, value, change, trend, icon: Icon }: StatCardProps) {
  return (
    <div className="card group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-terminal-bg border-2 border-terminal-border group-hover:border-terminal-accent transition-colors">
          <Icon className="w-6 h-6 text-terminal-accent" />
        </div>
        <div className={`flex items-center gap-1 font-mono text-xs ${
          trend === 'up' ? 'text-terminal-accent' : 'text-terminal-error'
        }`}>
          {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span>{change}</span>
        </div>
      </div>
      <div>
        <p className="font-mono text-xs text-terminal-muted uppercase tracking-wider mb-1">{title}</p>
        <p className="font-display text-3xl font-bold text-terminal-text">{value}</p>
      </div>
    </div>
  )
}

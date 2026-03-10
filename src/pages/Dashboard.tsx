import { TrendingUp, TrendingDown, Activity, Users, DollarSign, ShoppingCart } from 'lucide-react'
import StatCard from '../components/StatCard'
import RevenueChart from '../components/RevenueChart'
import ActivityChart from '../components/ActivityChart'

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    trend: 'up' as const,
    icon: DollarSign,
  },
  {
    title: 'Active Users',
    value: '2,345',
    change: '+12.5%',
    trend: 'up' as const,
    icon: Users,
  },
  {
    title: 'Orders',
    value: '1,234',
    change: '-5.2%',
    trend: 'down' as const,
    icon: ShoppingCart,
  },
  {
    title: 'Conversion',
    value: '3.24%',
    change: '+8.1%',
    trend: 'up' as const,
    icon: Activity,
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-terminal-accent">DASHBOARD</h1>
          <p className="font-mono text-sm text-terminal-muted mt-1">System overview and metrics</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-terminal-muted">
          <span className="w-2 h-2 bg-terminal-accent rounded-full animate-pulse" />
          <span>LIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={stat.title} style={{ animationDelay: `${index * 100}ms` }} className="animate-slide-up">
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
          <RevenueChart />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
          <ActivityChart />
        </div>
      </div>
    </div>
  )
}

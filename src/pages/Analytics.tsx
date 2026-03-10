import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
]

const COLORS = ['#00ff9f', '#ffb800', '#ff3366']

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-terminal-accent">ANALYTICS</h1>
        <p className="font-mono text-sm text-terminal-muted mt-1">Detailed metrics and insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card animate-slide-up">
          <h2 className="font-display text-xl font-bold text-terminal-text mb-6">Device Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#151a21',
                  border: '2px solid #00ff9f',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card animate-slide-up" style={{ animationDelay: '100ms' }}>
          <h2 className="font-display text-xl font-bold text-terminal-text mb-6">Top Metrics</h2>
          <div className="space-y-4">
            {[
              { label: 'Avg. Session Duration', value: '4m 32s', color: 'text-terminal-accent' },
              { label: 'Bounce Rate', value: '42.3%', color: 'text-terminal-warning' },
              { label: 'Page Views', value: '12,345', color: 'text-terminal-accent' },
              { label: 'New Users', value: '1,234', color: 'text-terminal-accent' },
            ].map((metric, index) => (
              <div
                key={metric.label}
                className="flex items-center justify-between p-4 bg-terminal-bg border-2 border-terminal-border hover:border-terminal-accent transition-colors"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <span className="font-mono text-sm text-terminal-muted">{metric.label}</span>
                <span className={`font-display text-xl font-bold ${metric.color}`}>{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

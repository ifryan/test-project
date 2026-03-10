import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
]

export default function RevenueChart() {
  return (
    <div className="card">
      <div className="mb-6">
        <h2 className="font-display text-xl font-bold text-terminal-text">Revenue Trend</h2>
        <p className="font-mono text-xs text-terminal-muted mt-1">Last 6 months</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
          <XAxis
            dataKey="name"
            stroke="#71717a"
            style={{ fontFamily: 'JetBrains Mono', fontSize: '12px' }}
          />
          <YAxis
            stroke="#71717a"
            style={{ fontFamily: 'JetBrains Mono', fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#151a21',
              border: '2px solid #00ff9f',
              fontFamily: 'JetBrains Mono',
              fontSize: '12px',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00ff9f"
            strokeWidth={3}
            dot={{ fill: '#00ff9f', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

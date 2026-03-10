import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', value: 120 },
  { name: 'Tue', value: 150 },
  { name: 'Wed', value: 180 },
  { name: 'Thu', value: 140 },
  { name: 'Fri', value: 200 },
  { name: 'Sat', value: 90 },
  { name: 'Sun', value: 110 },
]

export default function ActivityChart() {
  return (
    <div className="card">
      <div className="mb-6">
        <h2 className="font-display text-xl font-bold text-terminal-text">User Activity</h2>
        <p className="font-mono text-xs text-terminal-muted mt-1">This week</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
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
          <Bar
            dataKey="value"
            fill="#00ff9f"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

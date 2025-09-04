import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { name: 'Jan', score: 7.2, mentions: 1200 },
  { name: 'Fev', score: 7.8, mentions: 1400 },
  { name: 'Mar', score: 7.5, mentions: 1100 },
  { name: 'Abr', score: 8.1, mentions: 1600 },
  { name: 'Mai', score: 8.4, mentions: 1800 },
  { name: 'Jun', score: 8.0, mentions: 1500 },
  { name: 'Jul', score: 8.2, mentions: 1700 },
];

export const ReputationChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Evolução da Reputação</h3>
          <p className="text-sm text-muted-foreground">Score de reputação ao longo do tempo</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-hugme"></div>
            <span className="text-muted-foreground">Score</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-hugme/30"></div>
            <span className="text-muted-foreground">Menções</span>
          </div>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--hugme-green))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--hugme-green))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              domain={[6, 10]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <Area
              type="monotone"
              dataKey="score"
              stroke="hsl(var(--hugme-green))"
              strokeWidth={3}
              fill="url(#scoreGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
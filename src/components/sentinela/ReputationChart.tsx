import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface ReputationChartProps {
  period: string;
}

const getChartData = (period: string) => {
  const chartConfigs = {
    "24h": [
      { name: "00h", score: 8.1, mentions: 45 },
      { name: "04h", score: 8.2, mentions: 32 },
      { name: "08h", score: 8.0, mentions: 78 },
      { name: "12h", score: 8.3, mentions: 95 },
      { name: "16h", score: 8.2, mentions: 82 },
      { name: "20h", score: 8.3, mentions: 67 }
    ],
    "7-dias": [
      { name: "Seg", score: 7.8, mentions: 320 },
      { name: "Ter", score: 8.0, mentions: 410 },
      { name: "Qua", score: 7.9, mentions: 380 },
      { name: "Qui", score: 8.1, mentions: 445 },
      { name: "Sex", score: 8.2, mentions: 520 },
      { name: "Sáb", score: 8.0, mentions: 290 },
      { name: "Dom", score: 8.1, mentions: 350 }
    ],
    "30-dias": [
      { name: 'Jan', score: 7.2, mentions: 1200 },
      { name: 'Fev', score: 7.8, mentions: 1400 },
      { name: 'Mar', score: 7.5, mentions: 1100 },
      { name: 'Abr', score: 8.1, mentions: 1600 },
      { name: 'Mai', score: 8.4, mentions: 1800 },
      { name: 'Jun', score: 8.0, mentions: 1500 },
      { name: 'Jul', score: 8.2, mentions: 1700 }
    ],
    "90-dias": [
      { name: "Jan", score: 7.3, mentions: 3200 },
      { name: "Fev", score: 7.6, mentions: 3800 },
      { name: "Mar", score: 8.0, mentions: 4200 }
    ]
  };

  return chartConfigs[period as keyof typeof chartConfigs] || chartConfigs["30-dias"];
};

export const ReputationChart = ({ period }: ReputationChartProps) => {
  const data = getChartData(period);
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
import { TrendingUp, TrendingDown, Eye, MessageSquare, AlertTriangle, Shield } from "lucide-react";

const metrics = [
  {
    title: "Score de Reputação",
    value: "8.2",
    change: "+0.3",
    changeType: "positive" as const,
    icon: Shield,
    description: "Últimos 30 dias"
  },
  {
    title: "Menções Totais",
    value: "15.2K",
    change: "+12%",
    changeType: "positive" as const,
    icon: MessageSquare,
    description: "Este mês"
  },
  {
    title: "Alcance Total",
    value: "2.1M",
    change: "+8%",
    changeType: "positive" as const,
    icon: Eye,
    description: "Impressões"
  },
  {
    title: "Alertas Ativos",
    value: "3",
    change: "-2",
    changeType: "negative" as const,
    icon: AlertTriangle,
    description: "Requer atenção"
  }
];

export const MetricsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        const isPositive = metric.changeType === "positive";
        
        return (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                metric.icon === AlertTriangle ? 'bg-alert-red/10' : 'bg-hugme/10'
              }`}>
                <IconComponent className={`h-6 w-6 ${
                  metric.icon === AlertTriangle ? 'text-alert-red' : 'text-hugme'
                }`} />
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                isPositive 
                  ? 'bg-hugme/10 text-hugme' 
                  : 'bg-alert-red/10 text-alert-red'
              }`}>
                {isPositive ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {metric.change}
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-foreground">{metric.value}</h3>
              <p className="text-sm font-medium text-foreground">{metric.title}</p>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
import { TrendingUp, TrendingDown, Eye, MessageSquare, AlertTriangle, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const metrics = [
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

const reputationScores = [
  { platform: "ReclameAqui", score: "7.8", color: "text-orange-600" },
  { platform: "YouTube", score: "8.9", color: "text-red-600" },
  { platform: "Facebook", score: "8.1", color: "text-blue-600" },
  { platform: "Instagram", score: "8.5", color: "text-purple-600" }
];

export const MetricsOverview = () => {
  const [isReputationExpanded, setIsReputationExpanded] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Score de Reputação - Card Especial */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-hugme/10">
            <Shield className="h-6 w-6 text-hugme" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-hugme/10 text-hugme">
              <TrendingUp className="h-3 w-3" />
              +0.3
            </div>
            <button
              onClick={() => setIsReputationExpanded(!isReputationExpanded)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${
                isReputationExpanded ? 'rotate-180' : ''
              }`} />
            </button>
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-foreground">8.2</h3>
          <p className="text-sm font-medium text-foreground">Score de Reputação</p>
          <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
        </div>

        {isReputationExpanded && (
          <div className="mt-4 pt-4 border-t border-border space-y-3">
            <p className="text-xs font-medium text-muted-foreground mb-2">Score por origem:</p>
            {reputationScores.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{item.platform}</span>
                <span className={`text-sm font-semibold ${item.color}`}>{item.score}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Outros Cards */}
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
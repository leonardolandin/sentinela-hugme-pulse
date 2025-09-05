import { TrendingUp, TrendingDown, Eye, MessageSquare, AlertTriangle, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

interface MetricsOverviewProps {
  period: string;
}

const getMetricsData = (period: string) => {
  const metricsConfig = {
    "24h": {
      mentions: { value: "1.2K", change: "+5%" },
      reach: { value: "180K", change: "+12%" },
      alerts: { value: "1", change: "0" },
      reputation: { score: "8.3", change: "+0.1" },
      scores: [
        { platform: "ReclameAqui", score: "7.9", color: "text-orange-600" },
        { platform: "YouTube", score: "8.8", color: "text-red-600" },
        { platform: "Facebook", score: "8.2", color: "text-blue-600" },
        { platform: "Instagram", score: "8.6", color: "text-purple-600" }
      ]
    },
    "7-dias": {
      mentions: { value: "8.5K", change: "+8%" },
      reach: { value: "1.1M", change: "+6%" },
      alerts: { value: "2", change: "-1" },
      reputation: { score: "8.1", change: "+0.2" },
      scores: [
        { platform: "ReclameAqui", score: "7.7", color: "text-orange-600" },
        { platform: "YouTube", score: "8.7", color: "text-red-600" },
        { platform: "Facebook", score: "8.0", color: "text-blue-600" },
        { platform: "Instagram", score: "8.4", color: "text-purple-600" }
      ]
    },
    "30-dias": {
      mentions: { value: "15.2K", change: "+12%" },
      reach: { value: "2.1M", change: "+8%" },
      alerts: { value: "3", change: "-2" },
      reputation: { score: "8.2", change: "+0.3" },
      scores: [
        { platform: "ReclameAqui", score: "7.8", color: "text-orange-600" },
        { platform: "YouTube", score: "8.9", color: "text-red-600" },
        { platform: "Facebook", score: "8.1", color: "text-blue-600" },
        { platform: "Instagram", score: "8.5", color: "text-purple-600" }
      ]
    },
    "90-dias": {
      mentions: { value: "42.8K", change: "+15%" },
      reach: { value: "5.8M", change: "+22%" },
      alerts: { value: "7", change: "+4" },
      reputation: { score: "8.0", change: "+0.5" },
      scores: [
        { platform: "ReclameAqui", score: "7.6", color: "text-orange-600" },
        { platform: "YouTube", score: "8.5", color: "text-red-600" },
        { platform: "Facebook", score: "7.9", color: "text-blue-600" },
        { platform: "Instagram", score: "8.3", color: "text-purple-600" }
      ]
    }
  };

  return metricsConfig[period as keyof typeof metricsConfig] || metricsConfig["30-dias"];
};

const getMetrics = (period: string) => {
  const data = getMetricsData(period);
  return [
    {
      title: "Menções Totais",
      value: data.mentions.value,
      change: data.mentions.change,
      changeType: "positive" as const,
      icon: MessageSquare,
      description: period === "24h" ? "Hoje" : period === "7-dias" ? "Esta semana" : period === "30-dias" ? "Este mês" : "Últimos 3 meses"
    },
    {
      title: "Alcance Total",
      value: data.reach.value,
      change: data.reach.change,
      changeType: "positive" as const,
      icon: Eye,
      description: "Impressões"
    },
    {
      title: "Alertas Ativos",
      value: data.alerts.value,
      change: data.alerts.change,
      changeType: data.alerts.change.startsWith("+") ? "positive" : data.alerts.change === "0" ? "neutral" : "negative" as const,
      icon: AlertTriangle,
      description: "Requer atenção"
    }
  ];
};

export const MetricsOverview = ({ period }: MetricsOverviewProps) => {
  const [isReputationExpanded, setIsReputationExpanded] = useState(false);
  const data = getMetricsData(period);
  const metrics = getMetrics(period);

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
              {data.reputation.change}
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
          <h3 className="text-2xl font-bold text-foreground">{data.reputation.score}</h3>
          <p className="text-sm font-medium text-foreground">Score de Reputação</p>
          <p className="text-xs text-muted-foreground">
            {period === "24h" ? "Hoje" : period === "7-dias" ? "Esta semana" : period === "30-dias" ? "Últimos 30 dias" : "Últimos 90 dias"}
          </p>
        </div>

        {isReputationExpanded && (
          <div className="mt-4 pt-4 border-t border-border space-y-3">
            <p className="text-xs font-medium text-muted-foreground mb-2">Score por origem:</p>
            {data.scores.map((item, index) => (
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
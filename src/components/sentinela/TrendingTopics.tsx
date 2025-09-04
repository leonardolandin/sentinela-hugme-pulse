import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const topics = [
  {
    name: "Sustentabilidade",
    mentions: 2847,
    change: 120,
    sentiment: "positive",
    trend: "up"
  },
  {
    name: "Atraso na Entrega",
    mentions: 1923,
    change: -15,
    sentiment: "negative", 
    trend: "down"
  },
  {
    name: "Atendimento",
    mentions: 1456,
    change: 8,
    sentiment: "neutral",
    trend: "up"
  },
  {
    name: "Qualidade do Produto",
    mentions: 1203,
    change: 45,
    sentiment: "positive",
    trend: "up"
  },
  {
    name: "Preço Justo",
    mentions: 987,
    change: -22,
    sentiment: "neutral",
    trend: "down"
  },
  {
    name: "Inovação",
    mentions: 743,
    change: 67,
    sentiment: "positive",
    trend: "up"
  }
];

export const TrendingTopics = () => {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-hugme/10 text-hugme border-hugme/20";
      case "negative":
        return "bg-alert-red/10 text-alert-red border-alert-red/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getTrendIcon = (trend: string, change: number) => {
    const isPositive = change > 0;
    if (trend === "up") {
      return <TrendingUp className={`h-4 w-4 ${isPositive ? 'text-hugme' : 'text-alert-red'}`} />;
    }
    return <TrendingDown className={`h-4 w-4 ${isPositive ? 'text-hugme' : 'text-alert-red'}`} />;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Tópicos em Trending</h3>
          <p className="text-sm text-muted-foreground">Assuntos mais discutidos</p>
        </div>
      </div>

      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-surface-light hover:bg-surface-medium transition-colors">
            <div className="flex items-center gap-3 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground w-6">
                  #{index + 1}
                </span>
                {getTrendIcon(topic.trend, topic.change)}
              </div>
              
              <div className="flex-1">
                <h4 className="text-sm font-medium text-foreground">{topic.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {topic.mentions.toLocaleString()} menções
                  </span>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${getSentimentColor(topic.sentiment)}`}
                  >
                    {topic.sentiment === "positive" ? "Positivo" : 
                     topic.sentiment === "negative" ? "Negativo" : "Neutro"}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className={`text-sm font-medium ${
                topic.change > 0 ? 'text-hugme' : 'text-alert-red'
              }`}>
                {topic.change > 0 ? '+' : ''}{topic.change}%
              </div>
              <div className="text-xs text-muted-foreground">vs. ontem</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border text-center">
        <button className="text-sm text-hugme hover:text-hugme-dark font-medium">
          Ver todos os tópicos
        </button>
      </div>
    </div>
  );
};
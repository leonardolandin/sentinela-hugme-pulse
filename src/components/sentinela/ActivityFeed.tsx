import { MessageCircle, Share2, Heart, AlertTriangle, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    type: "mention",
    platform: "Twitter",
    content: "Adorei o novo produto! Qualidade excepcional e entrega rápida. Recomendo! 👏",
    user: "@maria_silva",
    time: "há 5 min",
    sentiment: "positive",
    engagement: 23
  },
  {
    id: 2,
    type: "complaint",
    platform: "ReclameAQUI", 
    content: "Comprei há 2 semanas e ainda não recebi. Atendimento não resolve...",
    user: "João M.",
    time: "há 12 min", 
    sentiment: "negative",
    engagement: 8
  },
  {
    id: 3,
    type: "review",
    platform: "Google",
    content: "Empresa confiável, já comprei várias vezes. Produtos de qualidade.",
    user: "Ana Costa",
    time: "há 23 min",
    sentiment: "positive", 
    engagement: 15
  },
  {
    id: 4,
    type: "alert",
    platform: "Sistema",
    content: "Novo cluster de reclamações detectado sobre 'Cobrança Indevida'",
    user: "Sentinela AI",
    time: "há 35 min",
    sentiment: "alert",
    engagement: 0
  },
  {
    id: 5,
    type: "trending",
    platform: "Instagram",
    content: "Postagem sobre sustentabilidade ganhou 500+ curtidas em 1 hora",
    user: "Monitor Trends",
    time: "há 1h",
    sentiment: "positive",
    engagement: 532
  }
];

export const ActivityFeed = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "mention":
        return <MessageCircle className="h-4 w-4 text-hugme" />;
      case "complaint":
        return <AlertTriangle className="h-4 w-4 text-alert-red" />;
      case "review":
        return <Heart className="h-4 w-4 text-hugme" />;
      case "alert":
        return <AlertTriangle className="h-4 w-4 text-alert-orange" />;
      case "trending":
        return <TrendingUp className="h-4 w-4 text-hugme" />;
      default:
        return <Share2 className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <Badge variant="secondary" className="bg-hugme/10 text-hugme text-xs">Positivo</Badge>;
      case "negative":
        return <Badge variant="secondary" className="bg-alert-red/10 text-alert-red text-xs">Negativo</Badge>;
      case "alert":
        return <Badge variant="secondary" className="bg-alert-orange/10 text-alert-orange text-xs">Alerta</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">Neutro</Badge>;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "Twitter":
        return "text-blue-500";
      case "ReclameAQUI":
        return "text-orange-500";
      case "Google":
        return "text-green-600";
      case "Instagram":
        return "text-pink-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Atividade em Tempo Real</h3>
          <p className="text-sm text-muted-foreground">Últimas menções e eventos</p>
        </div>
        <div className="w-2 h-2 bg-hugme rounded-full animate-pulse"></div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3 p-3 rounded-lg hover:bg-surface-light transition-colors">
            <div className="flex-shrink-0 mt-1">
              {getTypeIcon(activity.type)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-sm font-medium ${getPlatformColor(activity.platform)}`}>
                  {activity.platform}
                </span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{activity.user}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
              
              <p className="text-sm text-foreground mb-2 line-clamp-2">
                {activity.content}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getSentimentBadge(activity.sentiment)}
                  {activity.engagement > 0 && (
                    <span className="text-xs text-muted-foreground">
                      {activity.engagement} interações
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border text-center">
        <button className="text-sm text-hugme hover:text-hugme-dark font-medium">
          Ver histórico completo
        </button>
      </div>
    </div>
  );
};
import { MessageCircle, TrendingDown, Hash, AlertCircle } from "lucide-react";

const stats = [
  {
    title: "Total de Menções",
    value: "2,847",
    change: "-2%",
    changeType: "negative" as const,
    icon: MessageCircle,
  },
  {
    title: "Canal Principal",
    value: "75%",
    subtitle: "ReclameAQUI",
    icon: MessageCircle,
  },
  {
    title: "Categorias Ativas",
    value: "12",
    icon: Hash,
  },
  {
    title: "Alertas Gerados",
    value: "3",
    icon: AlertCircle,
  },
];

export const PeriodSummary = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-6">Desempenho no Período</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          
          return (
            <div key={index} className="text-center p-4 bg-surface-light rounded-lg">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 bg-hugme/10 rounded-full flex items-center justify-center">
                  <IconComponent className="h-5 w-5 text-hugme" />
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                
                {stat.change && (
                  <div className="flex items-center justify-center gap-1">
                    <TrendingDown className="h-3 w-3 text-alert-red" />
                    <span className="text-sm text-alert-red">{stat.change}</span>
                  </div>
                )}
                
                {stat.subtitle && (
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.subtitle}
                  </p>
                )}
                
                <p className="text-xs text-muted-foreground">{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Dados consolidados dos últimos 7 dias
        </p>
      </div>
    </div>
  );
};
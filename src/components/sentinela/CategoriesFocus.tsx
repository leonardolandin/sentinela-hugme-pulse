import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const categories = [
  {
    name: "Cobrança Indevida",
    mentions: 321,
    percentage: 85,
    trend: "up" as const,
  },
  {
    name: "Atraso na Entrega",
    mentions: 289,
    percentage: 72,
    trend: "up" as const,
  },
  {
    name: "Produto Defeituoso",
    mentions: 156,
    percentage: 45,
    trend: "down" as const,
  },
  {
    name: "Atendimento Ruim",
    mentions: 134,
    percentage: 38,
    trend: "stable" as const,
  },
  {
    name: "Demora no Reembolso",
    mentions: 98,
    percentage: 28,
    trend: "up" as const,
  },
  {
    name: "Site com Problemas",
    mentions: 67,
    percentage: 18,
    trend: "down" as const,
  },
];

export const CategoriesFocus = () => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-alert-red" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-hugme" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-6">Categorias em Foco</h3>
      
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center gap-4 py-2">
            {/* Category Name */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-foreground truncate">
                {category.name}
              </p>
            </div>
            
            {/* Volume */}
            <div className="text-right min-w-[80px]">
              <p className="text-sm font-medium text-foreground">
                {category.mentions}
              </p>
              <p className="text-xs text-muted-foreground">menções</p>
            </div>
            
            {/* Progress Bar */}
            <div className="w-20">
              <div className="w-full bg-surface-medium rounded-full h-2">
                <div
                  className="bg-hugme h-2 rounded-full transition-all duration-300"
                  style={{ width: `${category.percentage}%` }}
                />
              </div>
            </div>
            
            {/* Trend */}
            <div className="flex-shrink-0">
              {getTrendIcon(category.trend)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Baseado em {categories.reduce((sum, cat) => sum + cat.mentions, 0)} menções totais</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-alert-red" />
              <span>Crescendo</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingDown className="h-3 w-3 text-hugme" />
              <span>Diminuindo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
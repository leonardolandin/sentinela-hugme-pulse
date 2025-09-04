import { useState } from "react";

const topics = [
  { word: "Entrega", count: 1247, size: "text-2xl", color: "text-alert-red" },
  { word: "Atendimento", count: 892, size: "text-xl", color: "text-hugme" },
  { word: "Qualidade", count: 743, size: "text-lg", color: "text-hugme-dark" },
  { word: "Prazo", count: 634, size: "text-xl", color: "text-alert-orange" },
  { word: "Produto", count: 567, size: "text-base", color: "text-muted-foreground" },
  { word: "Cobrança", count: 445, size: "text-lg", color: "text-hugme" },
  { word: "Defeito", count: 389, size: "text-base", color: "text-alert-orange" },
  { word: "Troca", count: 324, size: "text-sm", color: "text-muted-foreground" },
  { word: "Cancelamento", count: 298, size: "text-base", color: "text-foreground" },
  { word: "Reembolso", count: 267, size: "text-sm", color: "text-hugme-dark" },
  { word: "SAC", count: 234, size: "text-base", color: "text-foreground" },
  { word: "Garantia", count: 198, size: "text-sm", color: "text-muted-foreground" },
];

export const TopicCloud = () => {
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-6">Tópicos em Destaque</h3>
      
      <div className="relative min-h-[280px] flex flex-wrap items-center justify-center gap-3 p-4">
        {topics.map((topic) => (
          <div
            key={topic.word}
            className="relative cursor-pointer transition-all duration-200 hover:scale-110"
            onMouseEnter={() => setHoveredTopic(topic.word)}
            onMouseLeave={() => setHoveredTopic(null)}
          >
            <span className={`${topic.size} ${topic.color} font-medium select-none`}>
              {topic.word}
            </span>
            
            {hoveredTopic === topic.word && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-foreground text-white text-xs rounded shadow-lg whitespace-nowrap z-10">
                {topic.count} menções
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          Clique em qualquer tópico para ver detalhes das menções
        </p>
      </div>
    </div>
  );
};
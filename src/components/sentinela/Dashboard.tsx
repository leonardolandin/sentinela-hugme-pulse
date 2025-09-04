import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CrisisRadar } from "./CrisisRadar";
import { TopicCloud } from "./TopicCloud";
import { PeriodSummary } from "./PeriodSummary";
import { CategoriesFocus } from "./CategoriesFocus";

export const Dashboard = () => {
  const [period, setPeriod] = useState("7-dias");

  return (
    <div className="min-h-screen bg-surface-light">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Dashboard de Inteligência Sentinela
            </h1>
            <p className="text-muted-foreground mt-1">
              Monitoramento inteligente de reputação em tempo real
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[180px] bg-white border-border shadow-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border-border shadow-lg">
                <SelectItem value="24h">Últimas 24h</SelectItem>
                <SelectItem value="7-dias">7 dias</SelectItem>
                <SelectItem value="30-dias">30 dias</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Row */}
          <div className="lg:col-span-1">
            <CrisisRadar />
          </div>
          <div className="lg:col-span-1">
            <TopicCloud />
          </div>
          
          {/* Bottom Row */}
          <div className="lg:col-span-1">
            <PeriodSummary />
          </div>
          <div className="lg:col-span-1">
            <CategoriesFocus />
          </div>
        </div>
      </div>
    </div>
  );
};
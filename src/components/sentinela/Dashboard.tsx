import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, Filter, Download, RefreshCw } from "lucide-react";
import { MetricsOverview } from "./MetricsOverview";
import { ReputationChart } from "./ReputationChart";
import { AlertsPanel } from "./AlertsPanel";
import { TrendingTopics } from "./TrendingTopics";
import { ActivityFeed } from "./ActivityFeed";
import { FloatingChat } from "./FloatingChat";

export const Dashboard = () => {
  const [period, setPeriod] = useState("30-dias");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-surface-light">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-border mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Sentinela Intelligence
              </h1>
              <p className="text-muted-foreground">
                Dashboard de Monitoramento de Reputação • Última atualização: há 2 minutos
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger className="w-[140px] bg-surface-light border-border">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border-border shadow-lg">
                  <SelectItem value="24h">24 horas</SelectItem>
                  <SelectItem value="7-dias">7 dias</SelectItem>
                  <SelectItem value="30-dias">30 dias</SelectItem>
                  <SelectItem value="90-dias">90 dias</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="sm" className="border-border">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              
              <Button variant="outline" size="sm" className="border-border">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="border-border"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Atualizar
              </Button>
            </div>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="mb-8">
          <MetricsOverview period={period} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-8">
            <ReputationChart period={period} />
            <AlertsPanel period={period} />
          </div>
          
          {/* Right Column - Side Panels */}
          <div className="space-y-8">
            <TrendingTopics period={period} />
            <ActivityFeed period={period} />
          </div>
        </div>
      </div>

      {/* Floating Chat */}
      <FloatingChat />
    </div>
  );
};
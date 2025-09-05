import { AlertTriangle, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AlertsPanelProps {
  period: string;
}

const getAlertsData = (period: string) => {
  const alertsConfigs = {
    "24h": [
      {
        id: 1,
        type: "critical",
        title: "Pico Recente de Menções",
        description: "Aumento de 35% nas últimas 6 horas sobre 'Produto Novo'",
        time: "há 2 horas",
        status: "active"
      }
    ],
    "7-dias": [
      {
        id: 1,
        type: "warning",
        title: "Tendência Semanal",
        description: "Queda de 12% na satisfação nos últimos 7 dias",
        time: "há 1 dia",
        status: "active"
      },
      {
        id: 2,
        type: "info",
        title: "Novo Tópico Emergente",
        description: "Menções sobre 'Entrega Rápida' aumentaram esta semana",
        time: "há 2 dias",
        status: "resolved"
      }
    ],
    "30-dias": [
      {
        id: 1,
        type: "critical",
        title: "Pico de Reclamações Detectado",
        description: "Aumento de 85% em menções negativas sobre 'Atraso na Entrega'",
        time: "há 2 horas",
        status: "active"
      },
      {
        id: 2,
        type: "warning",
        title: "Tendência Negativa",
        description: "Score de reputação em declínio nos últimos 3 dias (-0.2 pontos)",
        time: "há 4 horas",
        status: "active"
      },
      {
        id: 3,
        type: "info",
        title: "Novo Tópico Emergente",
        description: "Menções sobre 'Sustentabilidade' aumentaram 120%",
        time: "há 6 horas",
        status: "resolved"
      }
    ],
    "90-dias": [
      {
        id: 1,
        type: "critical",
        title: "Padrão Trimestral Detectado",
        description: "Ciclo de reclamações se repete a cada 30 dias",
        time: "há 1 semana",
        status: "active"
      },
      {
        id: 2,
        type: "warning",
        title: "Declínio Gradual",
        description: "Score médio caiu 0.8 pontos no trimestre",
        time: "há 2 semanas",
        status: "active"
      }
    ]
  };

  return alertsConfigs[period as keyof typeof alertsConfigs] || alertsConfigs["30-dias"];
};

export const AlertsPanel = ({ period }: AlertsPanelProps) => {
  const alerts = getAlertsData(period);
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-alert-red" />;
      case "warning":
        return <Clock className="h-5 w-5 text-alert-orange" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-hugme" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved":
        return <CheckCircle className="h-4 w-4 text-hugme" />;
      case "dismissed":
        return <XCircle className="h-4 w-4 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getAlertBorder = (type: string, status: string) => {
    if (status !== "active") return "border-border";
    switch (type) {
      case "critical":
        return "border-l-4 border-l-alert-red";
      case "warning":
        return "border-l-4 border-l-alert-orange";
      default:
        return "border-l-4 border-l-hugme";
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Central de Alertas</h3>
          <p className="text-sm text-muted-foreground">Monitoramento em tempo real</p>
        </div>
        <Badge variant="secondary" className="bg-alert-red/10 text-alert-red">
          {alerts.filter(a => a.status === "active").length} ativos
        </Badge>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border ${getAlertBorder(alert.type, alert.status)} ${
              alert.status === "active" ? "bg-white" : "bg-surface-light"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {getAlertIcon(alert.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium text-foreground">{alert.title}</h4>
                  {getStatusIcon(alert.status)}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                  {alert.status === "active" && (
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-7 px-3 text-xs">
                        Descartar
                      </Button>
                      <Button size="sm" className="h-7 px-3 text-xs bg-hugme hover:bg-hugme-dark">
                        Investigar
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
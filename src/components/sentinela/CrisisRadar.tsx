import { AlertTriangle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const CrisisRadar = () => {
  const hasAlert = true; // Simulating active alert

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border ${hasAlert ? 'border-l-4 border-l-alert-red' : 'border-border'}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-shrink-0">
          {hasAlert ? (
            <AlertTriangle className="h-6 w-6 text-alert-red" />
          ) : (
            <Bell className="h-6 w-6 text-muted-foreground" />
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground">Radar de Crise</h3>
      </div>

      {hasAlert ? (
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-100 rounded-md p-4">
            <p className="text-sm text-foreground mb-2">
              <span className="font-medium">Alerta:</span>
            </p>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-bold text-alert-red">+42%</span>
              <span className="text-sm text-foreground">
                de aumento em reclamações sobre <strong>'Atraso na Entrega'</strong>
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground mb-3">
              Assuntos Emergentes Identificados:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-alert-orange/10 text-alert-orange border-alert-orange/20">
                Transportadora X
              </Badge>
              <Badge variant="secondary" className="bg-alert-orange/10 text-alert-orange border-alert-orange/20">
                Sem rastreio
              </Badge>
              <Badge variant="secondary" className="bg-alert-orange/10 text-alert-orange border-alert-orange/20">
                Prazo expirado
              </Badge>
            </div>
          </div>

          <Button className="w-full bg-hugme hover:bg-hugme-dark text-white">
            Analisar Alerta
          </Button>
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-hugme/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="h-8 w-8 text-hugme" />
          </div>
          <p className="text-muted-foreground">Nenhum alerta crítico no momento</p>
          <p className="text-sm text-muted-foreground mt-1">Sistema monitorando ativamente</p>
        </div>
      )}
    </div>
  );
};
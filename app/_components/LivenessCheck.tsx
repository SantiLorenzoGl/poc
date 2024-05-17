"use client"

import { Button } from "@/components/ui/button";

export default function LivenessCheck() {
  return (
    <div className=" flex items-center space-x-4 rounded-md border p-4">
      <div className="flex-1 space-y-1">

        <p className="text-sm text-muted-foreground">
          Ejecutar validacion con facetec.
        </p>
      </div>
      <Button
        id="liveness-button"
        onClick={() => {
          return (window as any).SampleApp.onLivenessCheckPressed()
        }}
      >
        3D Liveness Check
      </Button>
    </div>
  );
}

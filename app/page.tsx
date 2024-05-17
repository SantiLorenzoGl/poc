import Redirect from "./_components/Redirect";
import LivenessCheck from "./_components/LivenessCheck";
import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <Card className="w-[520px] text-card-foreground">
        <CardHeader>
          <CardTitle>POC Facetec</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Redirect />
          <LivenessCheck />
        </CardContent>
      </Card>
    </main>
  );
}

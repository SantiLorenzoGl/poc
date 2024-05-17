"use client"

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Redirect() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams();
  const redirectURL = searchParams.get('redirect') || '';

  const handleClick = () => {
    if (redirectURL) {
      setLoading(true)
      const fakeSuccessLoginCredentials = "?access_token=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHbk9CdEVDVkczSGVnVE1uQWZNYmpFbkZLNlVkbUVqazZTQTJkTFAxSjZJIn0.eyJleHAiOjE3MTU5NjQ1NjcsImlhdCI6MTcxNTk2MDk2NywianRpIjoiZDBkOWJkYTMtZTI0Yy00OGY0LThmNWYtNDk3NzBkMzFiZjkxIiwiaXNzIjoiaHR0cHM6Ly9pZHAuc2hzLWRldi11c2UxLnVlbm8uY29tLnB5L3JlYWxtcy91ZW5vIiwiYXVkIjpbInJlYWxtLW1hbmFnZW1lbnQiLCJhcGYtbWFrZXItY2xpZW50IiwibG95YWx0eS1jbGllbnQiLCJtYWtlci1jbGllbnQiLCJvbGltcGlhLW1ha2VyLWNsaWVudCIsImFjY291bnQiLCJjZXJyby1tYWtlci1jbGllbnQiXSwic3ViIjoiOGZjMGUwNjUtODJkZC00ZDIwLWE0NzktNzc3NjJhYjljMTNmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidWVuby1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiNWM3YTNmYjMtNGNjZC00NjQ1LWJkYzEtNDZmN2U1YjZhMDcxIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLXVlbm8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJtYW5hZ2UtdXN"
      router.push(`${redirectURL}${fakeSuccessLoginCredentials}`);
    }
  }

  return (
    <div className=" flex items-center space-x-4 rounded-md border p-4">
      <div className="flex-1 space-y-1">
        <p className="text-sm text-muted-foreground">
          Navegar a la url provista mediante query params.
        </p>
        {!redirectURL && (
          <div className="flex">
            <Icons.alertOutlined />
            <p className="text-ellipsis text-xs leading-4 tracking-[0.24px] text-neutral-red">
              URL de redireccion no provista.
            </p>
          </div>
        )}
      </div>
      <Button
        disabled={!redirectURL || loading}
        id="liveness-button"
        onClick={handleClick}
      >
        Redirect
      </Button>
    </div>
  );
}

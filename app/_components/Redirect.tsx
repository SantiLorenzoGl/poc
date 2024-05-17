"use client"

import { useRouter, useSearchParams } from "next/navigation";

export default function Redirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectURL = searchParams.get('redirect') || '';

  const handleClick = () => {
    if (redirectURL) {
      const fakeSuccessLoginCredentials = "?access_token=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHbk9CdEVDVkczSGVnVE1uQWZNYmpFbkZLNlVkbUVqazZTQTJkTFAxSjZJIn0.eyJleHAiOjE3MTU5NjQ1NjcsImlhdCI6MTcxNTk2MDk2NywianRpIjoiZDBkOWJkYTMtZTI0Yy00OGY0LThmNWYtNDk3NzBkMzFiZjkxIiwiaXNzIjoiaHR0cHM6Ly9pZHAuc2hzLWRldi11c2UxLnVlbm8uY29tLnB5L3JlYWxtcy91ZW5vIiwiYXVkIjpbInJlYWxtLW1hbmFnZW1lbnQiLCJhcGYtbWFrZXItY2xpZW50IiwibG95YWx0eS1jbGllbnQiLCJtYWtlci1jbGllbnQiLCJvbGltcGlhLW1ha2VyLWNsaWVudCIsImFjY291bnQiLCJjZXJyby1tYWtlci1jbGllbnQiXSwic3ViIjoiOGZjMGUwNjUtODJkZC00ZDIwLWE0NzktNzc3NjJhYjljMTNmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidWVuby1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiNWM3YTNmYjMtNGNjZC00NjQ1LWJkYzEtNDZmN2U1YjZhMDcxIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLXVlbm8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJtYW5hZ2UtdXN"
      router.push(`${redirectURL}${fakeSuccessLoginCredentials}`);
    }
  }

  return (
    <button
      id="liveness-button"
      onClick={handleClick}
    >
      Redirect with credentials
    </button>
  );
}

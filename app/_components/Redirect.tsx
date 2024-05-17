"use client"

import { useRouter, useSearchParams } from "next/navigation";

export default function Redirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectURL = searchParams.get('redirect') || '';

  const handleClick = () => {
    router.push(redirectURL);
  }

  return (
    <button
      id="liveness-button"
      onClick={handleClick}
    >
      Redirect
    </button>
  );
}

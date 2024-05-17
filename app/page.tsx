import { Suspense } from "react";
import Redirect from "./_components/Redirect";
import LivenessCheck from "./_components/LivenessCheck";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="gap-10 z-10 w-full max-w-5xl flex flex-col	 items-center justify-center font-mono text-sm lg:flex">
        <Suspense fallback={<p>loading redirect...</p>}>
          <Redirect />
          <LivenessCheck />
        </Suspense>
      </div>
    </main>
  );
}

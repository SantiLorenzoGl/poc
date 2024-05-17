import Button from "./_components/Button";
import Redirect from "./_components/Redirect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="gap-10 z-10 w-full max-w-5xl flex flex-col	 items-center justify-center font-mono text-sm lg:flex">
        <Redirect />
        <Button />
      </div>
    </main>
  );
}

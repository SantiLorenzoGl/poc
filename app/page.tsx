import Script from "next/script";
import Button from "./_components/Button";
import Redirect from "./_components/Redirect";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Script src="./sample-app-js/Config.js"></Script>
      <Script src="./core-sdk/FaceTecSDK.js/FaceTecSDK.js"></Script>
      <Script src="./sample-app-js/processors/AuthenticateProcessor.js"></Script>
      <Script src="./sample-app-js/processors/EnrollmentProcessor.js"></Script>
      <Script src="./sample-app-js/processors/LivenessCheckProcessor.js"></Script>
      <Script src="./sample-app-js/processors/PhotoIDMatchProcessor.js"></Script>
      <Script src="./sample-app-js/processors/PhotoIDScanProcessor.js"></Script>
      <Script src="./sample-app-js/utilities/SampleAppUIFunctions.js"></Script>
      <Script src="./sample-app-js/utilities/ThemeHelpers.js"></Script>
      <Script src="./sample-app-js/utilities/AdditionalScreens.js"></Script>
      <Script src="./sample-app-js/utilities/SoundFileUtilities.js"></Script>
      <Script src="./sample-app-js/sampleAppController.js?v1"></Script>
      <div className="gap-10 z-10 w-full max-w-5xl flex flex-col	 items-center justify-center font-mono text-sm lg:flex">
        <Suspense fallback={<p>loading redirect...</p>}>
          <Redirect />
        </Suspense>
        <Button />
      </div>
    </main>
  );
}

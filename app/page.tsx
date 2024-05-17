import Script from "next/script";
import LivenessCheck from "./_components/LivenessCheck";
import Redirect from "./_components/Redirect";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="gap-10 z-10 w-full max-w-5xl flex flex-col	 items-center justify-center font-mono text-sm lg:flex">
        <Suspense fallback={<p>loading redirect...</p>}>
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
          <Redirect />
          <LivenessCheck />
        </Suspense>
      </div>
    </main>
  );
}

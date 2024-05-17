"use client"

export default function Button() {
  return (
    <button id="liveness-button" onClick={() => { return (window as any).SampleApp.onLivenessCheckPressed() }}>3D Liveness Check</button>
  );
}

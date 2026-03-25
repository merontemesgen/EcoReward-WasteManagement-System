"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Coins,
  RefreshCw,
} from "lucide-react";

const steps = [
  { id: 1, label: "Get Started", done: true },
  { id: 2, label: "Sort Waste", done: true },
  { id: 3, label: "Capture Photo", done: true },
  { id: 4, label: "Review Summary", done: true },
  { id: 5, label: "Set Location", done: true },
  { id: 6, label: "Schedule Time", done: true },
  { id: 7, label: "Collector Assigned", done: true },
  { id: 8, label: "Verify Pickup", done: true },
  { id: 9, label: "Complete", done: true },
];

const verificationData = {
  estimatedPoints: 305,
  verifiedPoints: 291,
  materials: [
    {
      id: 1,
      name: "Plastic Bottles",
      weight: "2.3 kg",
      points: 115,
      icon: "♻️",
    },
    { id: 2, name: "Cardboard", weight: "4.8 kg", points: 96, icon: "📦" },
    { id: 3, name: "Glass Bottles", weight: "3.2 kg", points: 80, icon: "🫙" },
  ],
  finalOutcome: {
    pointsEarned: 291,
    newBalance: 1271,
    rankBefore: 3,
    rankAfter: 2,
  },
};

const VerifyPickup = () => {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const { estimatedPoints, verifiedPoints, materials, finalOutcome } =
    verificationData;
  const pointDifference = estimatedPoints - verifiedPoints;

  const handleConfirm = async () => {
    setConfirming(true);
    try {
      // TODO: call PUT /api/pickups/:id/complete
      await new Promise((res) => setTimeout(res, 1200)); // simulate API call
      setConfirmed(true);
      setTimeout(() => router.push("/dashboard/citizen"), 1000);
    } catch (err) {
      setConfirming(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 p-4 md:p-8">
      {/* ── Back button ── */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-6 items-start max-w-4xl">
        {/* ── Left — Main content ── */}
        <div className="flex flex-col gap-5">
          {/* Page title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Collector Verification
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Review actual weight and points
            </p>
          </div>

          {/* Points summary card — dark green */}
          <div className="bg-green-800 rounded-2xl p-6 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-700 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-green-700 rounded-full translate-y-1/2 opacity-40" />

            <div className="relative grid grid-cols-2 gap-4 mb-4">
              {/* Estimated */}
              <div>
                <p className="text-green-300 text-sm font-medium mb-1">
                  Estimated Points
                </p>
                <p className="text-white text-4xl font-bold">
                  {estimatedPoints}
                </p>
              </div>

              {/* Verified */}
              <div>
                <p className="text-green-300 text-sm font-medium mb-1">
                  Verified Points
                </p>
                <div className="flex items-center gap-2">
                  <Coins className="w-6 h-6 text-green-300" />
                  <p className="text-white text-4xl font-bold">
                    {verifiedPoints}
                  </p>
                </div>
              </div>
            </div>

            {/* Difference banner */}
            {pointDifference !== 0 && (
              <div className="relative bg-white bg-opacity-20 rounded-xl px-4 py-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                <p className="text-white text-sm">
                  {pointDifference > 0
                    ? `${pointDifference} points less than estimated`
                    : `${Math.abs(pointDifference)} points more than estimated`}
                </p>
              </div>
            )}
          </div>

          {/* Verified Materials */}
          <div>
            <h2 className="text-base font-bold text-gray-800 mb-3">
              Verified Materials
            </h2>
            <div className="flex flex-col gap-2">
              {materials.map((material) => (
                <div
                  key={material.id}
                  className="bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-sm border border-gray-100"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                    {material.icon}
                  </div>

                  {/* Name + weight */}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">
                      {material.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {material.weight}
                    </p>
                  </div>

                  {/* Points */}
                  <div className="flex items-center gap-1 text-green-600">
                    <Coins className="w-4 h-4" />
                    <span className="font-bold text-sm">{material.points}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Confirm button */}
          <div>
            <button
              onClick={handleConfirm}
              disabled={confirming || confirmed}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm transition duration-200 ${
                confirmed
                  ? "bg-green-600 text-white"
                  : confirming
                    ? "bg-green-700 text-white opacity-80 cursor-not-allowed"
                    : "bg-green-800 hover:bg-green-900 text-white"
              }`}
            >
              {confirmed ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Points Added!
                </>
              ) : confirming ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Confirming...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4" />
                  Confirm Pickup
                </>
              )}
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">
              Points will be added to your wallet immediately
            </p>
          </div>
        </div>

        {/* ── Right — Progress + Final Outcome ── */}
        <div className="flex flex-col gap-3">
          {/* Progress — all steps done */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p className="text-sm font-bold text-gray-800 mb-3">Progress</p>
            <div className="flex flex-col gap-2">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-xs text-green-600 font-medium">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Final Outcome */}
          <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <p className="text-sm font-bold text-gray-800">Final Outcome</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Points Earned:</span>
                <span className="text-sm font-bold text-green-600">
                  +{finalOutcome.pointsEarned}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">New Balance:</span>
                <span className="text-sm font-bold text-green-700">
                  {finalOutcome.newBalance.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Rank Change:</span>
                <span className="text-sm font-bold text-blue-600">
                  #{finalOutcome.rankBefore} → #{finalOutcome.rankAfter}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPickup;

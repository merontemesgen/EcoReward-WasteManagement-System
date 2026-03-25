"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin, Pencil, CheckCircle2, Circle } from "lucide-react";

const steps = [
  { id: 1, label: "Get Started", done: true },
  { id: 2, label: "Sort Waste", done: true },
  { id: 3, label: "Capture Photo", done: true },
  { id: 4, label: "Review Summary", done: true },
  { id: 5, label: "Set Location", done: false, active: true },
  { id: 6, label: "Schedule Time", done: false },
  { id: 7, label: "Collector Assigned", done: false },
  { id: 8, label: "Verify Pickup", done: false },
  { id: 9, label: "Complete", done: false },
];

const expectedOutcome = {
  points: 305,
  weight: "10.7 kg",
  materials: "3 types",
};

const SetLocation = () => {
  const router = useRouter();
  const [address, setAddress] = useState("123 Main Street, Apt 4B");
  const [city, setCity] = useState("Ilorin, 10001");
  const [instructions, setInstructions] = useState("");
  const [editingAddress, setEditingAddress] = useState(false);

  const handleContinue = () => {
    // Navigate to next screen
    router.push("/pickup/schedule");
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

      {/* ── Page title ── */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Where should we collect?
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Confirm or update your pickup location
        </p>
      </div>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-4 items-start">
        {/* ── Left — Delivery person illustration ── */}
        <div className="hidden lg:flex items-end justify-center h-full pt-4">
          <div className="w-48 h-56 bg-amber-100 rounded-2xl flex items-center justify-center overflow-hidden">
            {/* Placeholder for the delivery person image */}
            <img
              src="/assets/collector-driver.jpg"
              alt="Collector"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* ── Centre — Map + address + instructions ── */}
        <div className="flex flex-col gap-3">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
            {/* OpenStreetMap embed — free, no API key needed */}
            <img
              src="/assets/map-placeholder.jpg"
              alt="Pickup location map"
              className="w-full h-52 object-cover"
            />
          </div>

          {/* Address card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <MapPin className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  {editingAddress ? (
                    <div className="flex flex-col gap-1">
                      <input
                        autoFocus
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="text-sm font-semibold text-gray-800 border-b border-green-500 outline-none bg-transparent w-full"
                        onBlur={() => setEditingAddress(false)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && setEditingAddress(false)
                        }
                      />
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="text-xs text-gray-500 border-b border-green-400 outline-none bg-transparent w-full"
                        onBlur={() => setEditingAddress(false)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && setEditingAddress(false)
                        }
                      />
                    </div>
                  ) : (
                    <>
                      <p className="text-sm font-semibold text-gray-800">
                        {address}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{city}</p>
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={() => setEditingAddress(true)}
                className="text-gray-400 hover:text-green-700 transition flex-shrink-0 mt-0.5"
              >
                <Pencil className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Special instructions */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Special Instructions{" "}
              <span className="text-gray-400 font-normal">(Optional)</span>
            </p>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g., Ring doorbell, Gate code: 1234"
              rows={2}
              className="w-full text-sm text-gray-700 placeholder-gray-300 outline-none resize-none bg-transparent"
            />
          </div>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-3.5 rounded-2xl transition duration-200 text-sm"
          >
            Continue to Schedule
          </button>
        </div>

        {/* ── Right — Progress + Expected Outcome ── */}
        <div className="flex flex-col gap-3">
          {/* Progress */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p className="text-sm font-bold text-gray-800 mb-3">Progress</p>
            <div className="flex flex-col gap-2">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center gap-2.5">
                  {step.done ? (
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  ) : (
                    <Circle
                      className={`w-4 h-4 flex-shrink-0 ${
                        step.active ? "text-gray-400" : "text-gray-200"
                      }`}
                    />
                  )}
                  <span
                    className={`text-xs ${
                      step.done
                        ? "text-green-600 font-medium"
                        : step.active
                          ? "text-gray-800 font-semibold"
                          : "text-gray-400"
                    }`}
                  >
                    {!step.done && (
                      <span className="mr-1 text-gray-300">{step.id}</span>
                    )}
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Outcome */}
          <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
            <p className="text-sm font-bold text-gray-800 mb-3">
              Expected Outcome
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Estimated Points:</span>
                <span className="text-sm font-bold text-orange-500">
                  {expectedOutcome.points}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Total Weight:</span>
                <span className="text-xs font-semibold text-gray-700">
                  {expectedOutcome.weight}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Materials:</span>
                <span className="text-xs font-semibold text-gray-700">
                  {expectedOutcome.materials}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetLocation;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, Calendar, CheckCircle2, Circle } from "lucide-react";

const steps = [
  { id: 1, label: "Get Started", done: true },
  { id: 2, label: "Sort Waste", done: true },
  { id: 3, label: "Capture Photo", done: true },
  { id: 4, label: "Review Summary", done: true },
  { id: 5, label: "Set Location", done: true },
  { id: 6, label: "Schedule Time", done: false, active: true },
  { id: 7, label: "Collector Assigned", done: false },
  { id: 8, label: "Verify Pickup", done: false },
  { id: 9, label: "Complete", done: false },
];

const expectedOutcome = {
  points: 305,
  weight: "10.7 kg",
  materials: "3 types",
};

const ScheduleTime = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("now"); // "now" or "later"
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleConfirm = () => {
    // TODO: call POST /api/pickups/create with schedule data
    router.push("/pickup/collector-assigned");
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
          When should we collect?
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Choose your preferred pickup time
        </p>
      </div>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-4 items-start max-w-4xl">
        {/* ── Left — Options + Notes + Info + Button ── */}
        <div className="flex flex-col gap-4">
          {/* Pickup option cards */}
          <div className="grid grid-cols-2 gap-3">
            {/* Pickup Now */}
            <button
              onClick={() => setSelectedOption("now")}
              className={`flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border-2 transition ${
                selectedOption === "now"
                  ? "border-green-700 bg-white shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <Clock
                className={`w-7 h-7 ${
                  selectedOption === "now" ? "text-green-700" : "text-gray-400"
                }`}
              />
              <div className="text-center">
                <p
                  className={`font-semibold text-base ${
                    selectedOption === "now" ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  Pickup Now
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Within 2 hours</p>
              </div>
            </button>

            {/* Schedule Later */}
            <button
              onClick={() => setSelectedOption("later")}
              className={`flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border-2 transition ${
                selectedOption === "later"
                  ? "border-green-700 bg-white shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <Calendar
                className={`w-7 h-7 ${
                  selectedOption === "later"
                    ? "text-green-700"
                    : "text-gray-400"
                }`}
              />
              <div className="text-center">
                <p
                  className={`font-semibold text-base ${
                    selectedOption === "later"
                      ? "text-gray-900"
                      : "text-gray-600"
                  }`}
                >
                  Schedule Later
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Choose date & time
                </p>
              </div>
            </button>
          </div>

          {/* Date & time pickers — only show when Schedule Later is selected */}
          {selectedOption === "later" && (
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex gap-3">
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full text-sm text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-500 font-medium block mb-1">
                  Time
                </label>
                <input
                  type="time"
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="w-full text-sm text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          )}

          {/* Additional Notes */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <p className="text-sm font-semibold text-gray-800 mb-2">
              Additional Notes{" "}
              <span className="text-gray-400 font-normal">(Optional)</span>
            </p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special instructions for the collector..."
              rows={4}
              className="w-full text-sm text-gray-600 placeholder-gray-300 outline-none resize-none bg-transparent"
            />
          </div>

          {/* Info banner */}
          <div className="bg-blue-50 rounded-2xl px-5 py-4 border border-blue-100 text-center">
            <p className="text-sm text-blue-500 font-medium">
              A nearby collector will be assigned on submission
            </p>
          </div>

          {/* Confirm button */}
          <button
            onClick={handleConfirm}
            className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-3.5 rounded-2xl transition duration-200 text-sm"
          >
            Confirm Pickup Request
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

export default ScheduleTime;

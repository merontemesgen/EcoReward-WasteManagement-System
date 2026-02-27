import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Star,
  Phone,
  MessageCircle,
  CheckCircle2,
  Circle,
  MapPin,
} from "lucide-react";

const steps = [
  { id: 1, label: "Get Started", done: true },
  { id: 2, label: "Sort Waste", done: true },
  { id: 3, label: "Capture Photo", done: true },
  { id: 4, label: "Review Summary", done: true },
  { id: 5, label: "Set Location", done: true },
  { id: 6, label: "Schedule Time", done: true },
  { id: 7, label: "Collector Assigned", done: false, active: true },
  { id: 8, label: "Verify Pickup", done: false },
  { id: 9, label: "Complete", done: false },
];

const expectedOutcome = {
  points: 305,
  weight: "10.7 kg",
  materials: "3 types",
};

const TRACKING_STAGES = [
  {
    id: 1,
    key: "assigned",
    bannerText: "Collector Assigned",
    bannerSubtext: "Finding best route...",
    bannerColor: "bg-blue-50 border-blue-200 text-blue-700",
    iconColor: "text-blue-500",
    eta: "ETA: 40 mins",
  },
  {
    id: 2,
    key: "on_the_way",
    bannerText: "Collector is on the way",
    bannerSubtext: "ETA: 15 mins",
    bannerColor: "bg-amber-50 border-amber-200 text-amber-700",
    iconColor: "text-amber-500",
    eta: "ETA: 15 mins",
  },
  {
    id: 3,
    key: "nearby",
    bannerText: "Collector is nearby",
    bannerSubtext: "ETA: 2 mins",
    bannerColor: "bg-orange-50 border-orange-200 text-orange-600",
    iconColor: "text-orange-500",
    eta: "ETA: 2 mins",
  },
  {
    id: 4,
    key: "arrived",
    bannerText: "Collector has arrived!",
    bannerSubtext: "Please bring your waste out",
    bannerColor: "bg-green-50 border-green-300 text-green-700",
    iconColor: "text-green-600",
    eta: "Arrived",
  },
];

// ── Mock collector data (replace with API response later) ─────────────────────
const collector = {
  name: "Michael Johnson",
  rating: 4.8,
  pickups: 234,
  avatar: null,
  phone: "+2348012345678",
};

const CollectorAssigned = () => {
  const navigate = useNavigate();

  const [stageIndex, setStageIndex] = useState(0);
  const [trackingSteps, setTrackingSteps] = useState([
    { id: 1, label: "Pickup Assigned", time: "2 mins ago", done: true },
    { id: 2, label: "Collector En Route", time: null, done: false },
    { id: 3, label: "Collector Arrived", time: null, done: false },
  ]);

  const currentStage = TRACKING_STAGES[stageIndex];

  useEffect(() => {
    if (stageIndex >= TRACKING_STAGES.length - 1) return;

    const timer = setTimeout(() => {
      const nextIndex = stageIndex + 1;
      setStageIndex(nextIndex);

      // Update live tracking steps
      setTrackingSteps((prev) =>
        prev.map((step) => {
          if (nextIndex === 1 && step.id === 2) {
            return { ...step, done: true, time: "Just now" };
          }
          if (nextIndex === 3 && step.id === 3) {
            return { ...step, done: true, time: "Just now" };
          }
          return step;
        }),
      );
    }, 6000); // advance every 6 seconds for demo

    return () => clearTimeout(timer);
  }, [stageIndex]);

  const handleCancelPickup = () => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this pickup?",
    );
    if (confirmed) {
      // TODO: call PUT /api/pickups/:id/cancel
      navigate("/dashboard/citizen");
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 p-4 md:p-6">
      {/* ── Back button ── */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm mb-4 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_220px] gap-4 items-start">
        {/* ── Left — Map placeholder ── */}
        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-96 bg-gray-100">
          <img
            src="/assets/map-placeholder.jpg"
            alt="Live tracking map"
            className="w-full h-full object-cover"
          />
          {/* ETA overlay badge */}
          <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm font-bold px-3 py-1.5 rounded-xl shadow">
            {currentStage.eta}
          </div>
        </div>

        {/* ── Centre — Status + Collector + Live Tracking ── */}
        <div className="flex flex-col gap-3">
          {/* Dynamic status banner */}
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-500 ${currentStage.bannerColor}`}
          >
            <Clock
              className={`w-5 h-5 flex-shrink-0 ${currentStage.iconColor}`}
            />
            <div>
              <p className="font-semibold text-sm">{currentStage.bannerText}</p>
              <p className="text-xs opacity-75">{currentStage.bannerSubtext}</p>
            </div>
          </div>

          {/* Collector card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                {collector.avatar ? (
                  <img
                    src={collector.avatar}
                    alt={collector.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-green-100">
                    <span className="text-green-700 font-bold text-lg">
                      {collector.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Name + rating */}
              <div>
                <p className="font-bold text-gray-900">{collector.name}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-gray-500">
                    {collector.rating} • {collector.pickups} pickups
                  </span>
                </div>
              </div>
            </div>

            {/* Call + Message buttons */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${collector.phone}`}
                className="flex items-center justify-center gap-2 bg-green-800 hover:bg-green-900 text-white text-sm font-semibold py-2.5 rounded-xl transition"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
              <button className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold py-2.5 rounded-xl transition">
                <MessageCircle className="w-4 h-4" />
                Message
              </button>
            </div>
          </div>

          {/* Live Tracking */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p className="font-bold text-gray-800 mb-4">Live Tracking</p>
            <div className="flex flex-col gap-3">
              {trackingSteps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-3">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center">
                    {step.done ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-gray-400">{step.id}</span>
                      </div>
                    )}
                    {/* Connector line */}
                    {index < trackingSteps.length - 1 && (
                      <div
                        className={`w-0.5 h-6 mt-1 ${
                          step.done ? "bg-green-300" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>

                  {/* Label + time */}
                  <div className="pb-1">
                    <p
                      className={`text-sm font-medium ${
                        step.done ? "text-gray-800" : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </p>
                    {step.time && (
                      <p className="text-xs text-gray-400 mt-0.5">
                        {step.time}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cancel button */}
          <button
            onClick={handleCancelPickup}
            className="w-full border border-gray-300 hover:border-red-300 hover:text-red-500 text-gray-600 font-semibold py-3 rounded-2xl transition duration-200 text-sm bg-white"
          >
            Cancel Pickup
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

export default CollectorAssigned;

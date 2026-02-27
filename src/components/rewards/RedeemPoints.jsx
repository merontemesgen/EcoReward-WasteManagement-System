import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Smartphone,
  Wallet,
  CheckCircle2,
  Circle,
  Coins,
} from "lucide-react";

const allSteps = [
  { id: 1, label: "Get Started" },
  { id: 2, label: "Choose redemption method" },
  { id: 3, label: "Input points to redeem" },
  { id: 4, label: "Choose number to deposit to" },
  { id: 5, label: "Review transfer summary" },
  { id: 6, label: "Redeem points" },
  { id: 7, label: "Redemption successful" },
  { id: 8, label: "Complete" },
];

const POINTS_TO_NAIRA = 0.01;
const QUICK_AMOUNTS = [5, 10, 20, 50];
const mockUser = { name: "Charles", balance: 1345, phone: "+254880777" };

const RedeemPoints = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("airtime");
  const [pointsInput, setPointsInput] = useState("500");
  const [phone, setPhone] = useState(mockUser.phone);
  const [currentStep, setCurrentStep] = useState(2);

  const points = parseInt(pointsInput) || 0;
  const amount = (points * POINTS_TO_NAIRA).toFixed(0);
  const remaining = mockUser.balance - points;
  const isValid =
    points > 0 && points <= mockUser.balance && phone.trim() !== "";

  const handleQuickSelect = (val) => {
    setPointsInput(String(Math.round(val / POINTS_TO_NAIRA)));
    setCurrentStep(5);
  };

  const handleSubmit = () => {
    if (!isValid) return;
    navigate("/points/complete", {
      state: {
        type: method === "airtime" ? "Airtime" : "Cash Out",
        amount: `$${amount}`,
        pointsUsed: points,
      },
    });
  };

  return (
    <div className="min-h-screen bg-amber-50 px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-sm">
          OC
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-6 max-w-3xl">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl">♻️</span>
            <h1 className="text-2xl font-bold text-gray-900">
              Hi {mockUser.name}
            </h1>
          </div>

          <div className="bg-green-800 rounded-2xl p-5 relative overflow-hidden">
            <p className="text-green-300 text-sm font-medium">
              EcoPoints Balance
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Coins className="w-5 h-5 text-green-300" />
              <span className="text-white text-3xl font-bold">
                {mockUser.balance}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Redeem Points</h2>
            <p className="text-gray-500 text-sm mt-1">
              You've done a great job at recycling your waste! It's now time you
              get rewarded for it.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-3">
              Choose Redemption Method
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  key: "airtime",
                  label: "Airtime",
                  sub: "Mobile recharge",
                  Icon: Smartphone,
                },
                {
                  key: "cashout",
                  label: "Cash Out",
                  sub: "Mobile money",
                  Icon: Wallet,
                },
              ].map(({ key, label, sub, Icon }) => (
                <button
                  key={key}
                  onClick={() => {
                    setMethod(key);
                    setCurrentStep(2);
                  }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition ${method === key ? "border-green-700 bg-white shadow-sm" : "border-gray-200 bg-white hover:border-gray-300"}`}
                >
                  <Icon
                    className={`w-6 h-6 ${method === key ? "text-green-700" : "text-gray-400"}`}
                  />
                  <div className="text-center">
                    <p
                      className={`text-sm font-semibold ${method === key ? "text-gray-900" : "text-gray-500"}`}
                    >
                      {label}
                    </p>
                    <p className="text-xs text-gray-400">{sub}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col gap-3">
            <div>
              <label className="text-xs text-gray-500 font-medium block mb-1">
                Points to redeem
              </label>
              <input
                type="number"
                value={pointsInput}
                onChange={(e) => {
                  setPointsInput(e.target.value);
                  setCurrentStep(3);
                }}
                max={mockUser.balance}
                min={1}
                className="w-full text-sm text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-xs text-gray-400 mt-1">= ${amount}</p>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-medium block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setCurrentStep(4);
                }}
                className="w-full text-sm text-gray-800 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 font-medium mb-2">
              Quick Select
            </p>
            <div className="grid grid-cols-4 gap-2">
              {QUICK_AMOUNTS.map((val) => (
                <button
                  key={val}
                  onClick={() => handleQuickSelect(val)}
                  className="bg-white border border-gray-200 hover:border-green-500 hover:text-green-700 text-gray-600 text-sm font-semibold py-2 rounded-xl transition"
                >
                  ${val}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <p className="text-sm font-bold text-gray-800 mb-3">Summary</p>
            <div className="flex flex-col gap-2">
              {[
                {
                  label: "Redemption Type",
                  value: method === "airtime" ? "Airtime" : "Cash Out",
                },
                { label: "Amount", value: `$${amount}` },
                { label: "Points Required", value: points },
                {
                  label: "Remaining Points",
                  value: remaining >= 0 ? remaining : "Insufficient",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center"
                >
                  <span className="text-xs text-gray-500">{row.label}</span>
                  <span
                    className={`text-xs font-semibold ${row.label === "Remaining Points" && remaining < 0 ? "text-red-500" : "text-gray-800"}`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`w-full py-3.5 rounded-2xl font-semibold text-sm transition ${isValid ? "bg-green-800 hover:bg-green-900 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            Redeem {points > 0 ? `${points} Points` : "Points"}
          </button>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 h-fit">
          <p className="text-sm font-bold text-gray-800 mb-3">Progress</p>
          <div className="flex flex-col gap-2">
            {allSteps.map((step) => {
              const done = step.id < currentStep;
              const active = step.id === currentStep;
              return (
                <div key={step.id} className="flex items-center gap-2.5">
                  {done ? (
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  ) : (
                    <Circle
                      className={`w-4 h-4 flex-shrink-0 ${active ? "text-gray-400" : "text-gray-200"}`}
                    />
                  )}
                  <span
                    className={`text-xs ${done ? "text-green-600 font-medium" : active ? "text-gray-800 font-semibold" : "text-gray-400"}`}
                  >
                    {!done && (
                      <span className="mr-1 text-gray-300">{step.id}</span>
                    )}
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemPoints;

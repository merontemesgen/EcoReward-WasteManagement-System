import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowDownRight, Coins } from "lucide-react";

const mockHistory = [
  {
    id: 1,
    label: "Plastic Bottles - 2.3kg",
    date: "Feb 14, 2026 • 10:30 AM",
    points: +125,
    type: "earned",
  },
  {
    id: 2,
    label: "Airtime Recharge",
    date: "Feb 13, 2026 • 5:45 PM",
    points: -200,
    type: "redeemed",
  },
  {
    id: 3,
    label: "Cardboard - 4.8kg",
    date: "Feb 14, 2026 • 10:30 AM",
    points: +96,
    type: "earned",
  },
  {
    id: 4,
    label: "Glass Bottles - 3.2kg",
    date: "Feb 14, 2026 • 10:30 AM",
    points: +80,
    type: "earned",
  },
  {
    id: 5,
    label: "Weekly Streak Bonus",
    date: "Feb 12, 2026 • 12:00 PM",
    points: +50,
    type: "earned",
  },
];

const materialBreakdown = [
  { name: "Plastic", points: 3250, max: 3250, color: "bg-blue-500" },
  { name: "Cardboard", points: 2100, max: 3250, color: "bg-teal-400" },
  { name: "Glass", points: 1200, max: 3250, color: "bg-cyan-400" },
  { name: "Metal", points: 650, max: 3250, color: "bg-orange-400" },
];

const PointsHistory = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? mockHistory
      : activeTab === "earned"
        ? mockHistory.filter((t) => t.type === "earned")
        : mockHistory.filter((t) => t.type === "redeemed");

  const totalEarned = mockHistory
    .filter((t) => t.points > 0)
    .reduce((s, t) => s + t.points, 0);
  const totalRedeemed = Math.abs(
    mockHistory.filter((t) => t.points < 0).reduce((s, t) => s + t.points, 0),
  );

  return (
    <div className="min-h-screen bg-amber-50 px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-sm">
          OC
        </div>
      </div>

      <div className="max-w-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-5">
          Points History
        </h1>

        {/* Balance card */}
        <div className="bg-green-800 rounded-2xl p-5 relative overflow-hidden mb-4">
          <p className="text-green-300 text-sm font-medium">
            EcoPoints Balance
          </p>
          <div className="flex items-center gap-2 mt-1">
            <Coins className="w-5 h-5 text-green-300" />
            <span className="text-white text-3xl font-bold">1345</span>
          </div>
        </div>

        {/* Earned / Redeemed summary */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <ArrowUpRight className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-500 font-medium">Earned</span>
            </div>
            <p className="text-xl font-bold text-green-600">+{totalEarned}</p>
            <p className="text-xs text-gray-400 mt-0.5">This week</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <ArrowDownRight className="w-4 h-4 text-red-400" />
              <span className="text-xs text-gray-500 font-medium">
                Redeemed
              </span>
            </div>
            <p className="text-xl font-bold text-red-400">-{totalRedeemed}</p>
            <p className="text-xs text-gray-400 mt-0.5">This week</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl p-1 flex mb-3 border border-gray-100 shadow-sm">
          {["all", "earned", "redeemed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold capitalize transition ${activeTab === tab ? "bg-green-800 text-white" : "text-gray-500 hover:text-gray-700"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Transaction list */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50 mb-4">
          {filtered.map((item) => (
            <div key={item.id} className="flex items-center gap-3 px-4 py-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${item.type === "earned" ? "bg-green-50" : "bg-red-50"}`}
              >
                {item.type === "earned" ? (
                  <ArrowUpRight className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {item.label}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
              </div>
              <span
                className={`text-sm font-bold flex-shrink-0 ${item.points > 0 ? "text-green-600" : "text-red-400"}`}
              >
                {item.points > 0 ? `+${item.points}` : item.points}
              </span>
            </div>
          ))}
        </div>

        {/* Points by Material */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <p className="text-sm font-bold text-gray-800 mb-4">
            Points by Material (All Time)
          </p>
          <div className="flex flex-col gap-3">
            {materialBreakdown.map((mat) => (
              <div key={mat.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600 font-medium">
                    {mat.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {mat.points} pts
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${mat.color} transition-all duration-500`}
                    style={{ width: `${(mat.points / mat.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsHistory;

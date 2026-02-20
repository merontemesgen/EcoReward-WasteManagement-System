"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight, TrendingUp } from "lucide-react";

export default function CitizenDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const user = {
    name: "Olumide Charles B",
    initials: "OC",
    points: 980,
    weeklyGain: 125,
  };

  const stats = {
    recycled: "32.8kg",
    pickups: 9,
    totalPoints: 7302,
  };

  const materials = [
    { name: "Plastics", points: 33, icon: "🧴", color: "#FFE4C4" },
    { name: "Organic Waste", points: 21, icon: "🥬", color: "#E8F5E9" },
    { name: "Metal", points: 17, icon: "🥫", color: "#FFF3E0" },
    { name: "Glass", points: 6, icon: "🍾", color: "#E3F2FD" },
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah K.", initials: "SK", points: 1250 },
    { rank: 2, name: "You", initials: "OC", points: 980, isYou: true },
    { rank: 3, name: "Arnold Rice", initials: "AR", points: 960 },
  ];

  const badges = [
    { name: "First Pickup", earned: true },
    { name: "10kg Club", earned: true },
    { name: "100kg Club", earned: false },
    { name: "Top Glass Collector", earned: false },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEF9EB" }}>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform md:hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-[#176B29]">EcoReward</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="space-y-4">
            <Link href="/dashboard/citizen" className="block py-2 px-4 bg-[#176B29] text-white rounded-lg">Dashboard</Link>
            <Link href="/dashboard/citizen/pickup" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Request Pickup</Link>
            <Link href="/dashboard/citizen/pickups" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">My Pickups</Link>
            <Link href="/dashboard/citizen/rewards" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg">Rewards</Link>
          </nav>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-8">
          <Image
            src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/phl1o1bh_image.png"
            alt="EcoReward Logo"
            width={150}
            height={50}
            className="object-contain"
          />
          <div className="flex gap-6">
            <Link href="/dashboard/citizen" className="text-[#176B29] font-semibold">Dashboard</Link>
            <Link href="/dashboard/citizen/pickup" className="text-gray-600 hover:text-[#176B29]">Request Pickup</Link>
            <Link href="/dashboard/citizen/pickups" className="text-gray-600 hover:text-[#176B29]">My Pickups</Link>
            <Link href="/dashboard/citizen/rewards" className="text-gray-600 hover:text-[#176B29]">Rewards</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#176B29] flex items-center justify-center text-white font-bold">
            {user.initials}
          </div>
          <span className="font-medium">{user.name.split(" ")[0]}</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 md:px-8 py-6 max-w-5xl mx-auto">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#176B29] flex items-center justify-center text-white font-bold text-sm">
              {user.initials}
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl"
            style={{ backgroundColor: "#176B29", border: "4px solid #FFD700" }}
          >
            {user.initials}
          </div>
          <div>
            <h1 
              className="text-2xl md:text-3xl font-bold"
              style={{ 
                background: "linear-gradient(90deg, #176B29, #8B7355)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Welcome,
            </h1>
            <p 
              className="text-xl md:text-2xl font-medium"
              style={{ color: "#8B7355" }}
            >
              {user.name}
            </p>
          </div>
        </div>

        {/* EcoWallet Balance Card */}
        <div 
          className="rounded-2xl p-6 mb-6 text-white relative overflow-hidden"
          style={{ 
            background: "linear-gradient(135deg, #8B7355 0%, #176B29 50%, #0D4A1A 100%)"
          }}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm opacity-90">EcoWallet</p>
              <p className="text-lg font-medium">Balance</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-sm opacity-90">
                <TrendingUp size={14} />
                <span>+{user.weeklyGain} this week</span>
              </div>
              <button 
                className="mt-2 px-6 py-2 rounded-full font-semibold text-sm"
                style={{ backgroundColor: "#FFD700", color: "#176B29" }}
              >
                Redeem
              </button>
            </div>
          </div>
          <p className="text-4xl md:text-5xl font-bold text-center my-4">
            {user.points} Points
          </p>
          <div className="flex justify-center items-center gap-2 mt-4 opacity-80">
            <ChevronRight size={20} className="rotate-180" />
            <span className="text-sm">Transactions</span>
            <ChevronRight size={20} />
          </div>
        </div>

        {/* Request Pickup Button */}
        <button 
          className="w-full py-4 rounded-xl text-white font-semibold text-lg mb-6 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#176B29" }}
        >
          Request Pickup
        </button>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
          {/* Recycled Card */}
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-xl md:text-2xl font-bold text-gray-800">{stats.recycled}</p>
            <p className="text-sm text-gray-600">recycled</p>
            <div className="mt-2 text-3xl">♻️</div>
          </div>

          {/* Pickups Card */}
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-xl md:text-2xl font-bold text-gray-800">{stats.pickups}</p>
            <p className="text-sm text-gray-600">Pickups</p>
            <div className="mt-2 text-3xl">🚛</div>
          </div>

          {/* Total Points Card */}
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <p className="text-xl md:text-2xl font-bold text-gray-800">{stats.totalPoints}</p>
            <p className="text-sm text-gray-600">Total Points</p>
            <p className="text-xs text-gray-500">Earned</p>
            <div className="mt-1 text-3xl">🏆</div>
          </div>
        </div>

        {/* High Demand Materials */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">High Demand Materials</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {materials.map((material) => (
              <div 
                key={material.name}
                className="rounded-xl p-3 flex items-center justify-between"
                style={{ backgroundColor: material.color }}
              >
                <div>
                  <p className="font-semibold text-sm text-gray-800">{material.name}</p>
                  <p className="text-xs text-gray-600">{material.points}pts per kg</p>
                </div>
                <span className="text-2xl">{material.icon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Leaderboard */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Weekly Leaderboard</h2>
            <Link href="#" className="text-sm text-[#176B29] font-medium">View All</Link>
          </div>
          <div className="space-y-3">
            {leaderboard.map((entry) => (
              <div 
                key={entry.rank}
                className={`flex items-center justify-between p-3 rounded-xl ${entry.isYou ? "bg-[#E8F5E9]" : "bg-gray-50"}`}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: entry.rank === 1 ? "#FFD700" : entry.rank === 2 ? "#C0C0C0" : "#CD7F32" }}
                  >
                    {entry.rank}
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: "#176B29" }}
                  >
                    {entry.initials}
                  </div>
                  <span className="font-medium text-gray-800">{entry.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-[#176B29]">{entry.points} points</span>
                  <span>🏆</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Badges */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Your Badges</h2>
          <div className="grid grid-cols-4 gap-2">
            {badges.map((badge) => (
              <div key={badge.name} className="text-center">
                <div 
                  className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-2xl mb-2 ${badge.earned ? "" : "opacity-40"}`}
                  style={{ backgroundColor: badge.earned ? "#FFD700" : "#E0E0E0" }}
                >
                  ⭐
                </div>
                <p className={`text-xs ${badge.earned ? "text-gray-800" : "text-gray-400"}`}>
                  {badge.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recycling Tip of the Day */}
        <div 
          className="rounded-xl p-4 mb-6"
          style={{ backgroundColor: "#E8EAF6" }}
        >
          <h2 className="text-lg font-bold text-gray-800 mb-2">Recycling Tip of the Day</h2>
          <p className="text-sm text-gray-600">
            Rinse plastic bottles before recycling to prevent contamination and earn more points!
          </p>
        </div>
      </main>
    </div>
  );
}
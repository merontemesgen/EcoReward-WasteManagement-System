import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const RedemptionSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    type = "Airtime",
    amount = "$7",
    pointsUsed = 700,
  } = location.state || {};

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

      <div className="max-w-sm mx-auto flex flex-col items-center text-center gap-6 mt-10">
        <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Redemption Successful!
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Your airtime will be processed within minutes
          </p>
        </div>

        <div className="w-full bg-green-50 rounded-2xl p-4 border border-green-100">
          {[
            { label: "Type:", value: type },
            { label: "Amount:", value: amount },
            { label: "Points Used:", value: pointsUsed },
          ].map((row) => (
            <div
              key={row.label}
              className="flex justify-between items-center py-1.5"
            >
              <span className="text-sm text-gray-500">{row.label}</span>
              <span className="text-sm font-semibold text-gray-800">
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <button
            onClick={() => navigate("/points/history")}
            className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold py-3 rounded-2xl text-sm transition"
          >
            View Points History
          </button>
          <button
            onClick={() => navigate("/dashboard/citizen")}
            className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-2xl text-sm transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedemptionSuccess;

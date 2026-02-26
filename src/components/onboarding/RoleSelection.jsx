import React from "react";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    key: "collector",
    title: "Collector",
    description: "Follow optimized routes and focus on high-value pickups.",
    image: "/assets/role-collector.png",
    alt: "Waste collector in orange uniform",
  },
  {
    key: "citizen",
    title: "Citizen",
    description: "Turn everyday waste into dynamic rewards.",
    image: "/assets/role-citizen.png",
    alt: "Citizen with phone",
  },
  {
    key: "sme",
    title: "Recycling SME",
    description: "Monitor materials, optimize operations, respond to demand.",
    image: "/assets/role-sme.png",
    alt: "SME worker sorting recyclables",
  },
];

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleGetStarted = (roleKey) => {
    // Save selected role so SignUp can use it
    localStorage.setItem("selectedRole", roleKey);
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "linear-gradient(135deg, #fde68a 0%, #fca5a5 30%, #86efac 60%, #67e8f9 100%)" }}>

      {/* Card */}
      <div className="w-full max-w-3xl bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl p-8 shadow-xl">

        {/* Title */}
        <p className="text-center text-white font-semibold text-lg mb-6 drop-shadow">
          Are you a ...
        </p>

        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((role) => (
            <div key={role.key}
              className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col">

              {/* Photo */}
              <div className="h-52 bg-gray-200 overflow-hidden">
                <img
                  src={role.image}
                  alt={role.alt}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // fallback if image missing
                    e.target.style.display = "none";
                    e.target.parentElement.style.background = "#d1fae5";
                  }}
                />
              </div>

              {/* Text + CTA */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="text-base font-bold text-gray-900">{role.title}</h3>
                <p className="text-sm text-gray-500 flex-1">{role.description}</p>
                <button
                  onClick={() => handleGetStarted(role.key)}
                  className="text-sm font-semibold text-green-700 hover:text-green-900 text-left underline underline-offset-2 transition mt-1"
                >
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;

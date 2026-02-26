"use client";
import Image from "next/image";
import Link from "next/link";

export default function CitizenDashboard() {
  const user = {
    name: "Olumide Charles B",
    initials: "OC",
    points: 1345,
    weeklyGain: 125,
  };

  const stats = {
    recycled: "32.8kg",
    pickups: 9,
    totalPoints: 7302,
  };

  return (
    <div style={{ width: "1440px", minHeight: "100vh", backgroundColor: "#FEF9EB", margin: "0 auto" }}>
      
      {/* Welcome Section with Gradient */}
      <div 
        style={{
          width: "1440px",
          height: "472px",
          borderRadius: "32px",
          background: "linear-gradient(180deg, #FFD189 0%, #7E643C 100%)",
          position: "relative",
          marginTop: "30px",
          overflow: "hidden",
        }}
      >
        {/* Welcome Header Row - Contains user info and notification bell */}
        <div 
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "58px 24px 0"
          }}
        >
          {/* Left - Avatar and Welcome Text */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div 
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#176B29",
                border: "4px solid #FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontFamily: "Commissioner",
                fontWeight: 700,
                fontSize: "32px",
                flexShrink: 0,
              }}
            >
              {user.initials}
            </div>
            
            <div>
              <h1 
                style={{
                  fontFamily: "Commissioner",
                  fontWeight: 500,
                  fontSize: "64px",
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: "1"
                }}
              >
                Welcome,
              </h1>
              <p 
                style={{
                  fontFamily: "Commissioner",
                  fontWeight: 500,
                  fontSize: "32px",
                  color: "#296049",
                  margin: "8px 0 0"
                }}
              >
                {user.name}
              </p>
            </div>
          </div>

          {/* Right - Notification Bell */}
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#176B29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#176B29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* EcoWallet */}
        <div 
          style={{
            width: "calc(100% - 48px)",
            height: "114px",
            margin: "24px auto",
            borderRadius: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            border: "3px solid rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            boxSizing: "border-box",
          }}
        >
          {/* Left - EcoWallet Label */}
          <div>
            <p style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "18px", color: "#FFFFFF", margin: 0 }}>
              EcoWallet
            </p>
            <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "16px", color: "#FFFFFF", margin: 0 }}>
              Balance
            </p>
          </div>

          {/* Center - Points with Transactions below */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <p style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "36px", color: "#FFFFFF", margin: 0 }}>
              {user.points} Points
            </p>
            
            {/* Transactions Link */}
            <Link 
              href="#" 
              style={{ 
                fontFamily: "Commissioner", 
                fontSize: "16px", 
                fontWeight: 500,
                color: "#FFFFFF",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5H14M2 5L5 2M2 5L5 8M14 11H2M14 11L11 8M14 11L11 14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Transactions</span>
            </Link>
          </div>

          {/* Right - Weekly gain + Redeem */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>
            {/* +125 this week */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12L6 8L9 11L14 4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p style={{ fontFamily: "Commissioner", fontSize: "14px", color: "#FFFFFF", margin: 0 }}>
                +{user.weeklyGain} this week
              </p>
            </div>
            
            {/* Redeem button - now a clickable Link */}
            <Link
              href="/points/redeem"
              style={{
                width: "162px",
                height: "32px",
                borderRadius: "16px",
                backgroundColor: "#B7E4C7",
                fontFamily: "Commissioner",
                fontWeight: 600,
                fontSize: "14px",
                color: "#176B29",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              Redeem
            </Link>
          </div>
        </div>
      </div>

      {/* Content Below */}
      <div style={{ padding: "24px" }}>
        
        {/* Request Pickup Button */}
        <Link 
          href="/dashboard/citizen/request-pickup"
          style={{
            width: "1348px",
            height: "100px",
            borderRadius: "32px",
            backgroundColor: "#176B29",
            border: "none",
            fontFamily: "Commissioner",
            fontWeight: 500,
            fontSize: "32px",
            color: "#FFFFFF",
            cursor: "pointer",
            margin: "0 auto 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
          }}
        >
          Request Pickup
        </Link>

        {/* Stats Cards */}
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "24px" }}>
          <div style={{ width: "400px", height: "180px", borderRadius: "20px", backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
            <p style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "32px", color: "#000", margin: 0 }}>{stats.recycled}</p>
            <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "18px", color: "#666", margin: "4px 0 12px" }}>recycled</p>
            <div style={{ width: "50px", height: "50px", position: "relative" }}>
              <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/rcpdf9tf_eco%20icons.png" alt="Recycle" fill className="object-contain" />
            </div>
          </div>

          <div style={{ width: "400px", height: "180px", borderRadius: "20px", backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
            <p style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "32px", color: "#000", margin: 0 }}>{stats.pickups}</p>
            <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "18px", color: "#666", margin: "4px 0 12px" }}>Pickups</p>
            <div style={{ width: "50px", height: "50px", position: "relative" }}>
              <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/zs69684f_eco%20icons%20%281%29.png" alt="Truck" fill className="object-contain" />
            </div>
          </div>

          <div style={{ width: "400px", height: "180px", borderRadius: "20px", backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
            <p style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "32px", color: "#000", margin: 0 }}>{stats.totalPoints}</p>
            <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "18px", color: "#666", margin: 0 }}>Total Points</p>
            <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "14px", color: "#999", margin: "2px 0 12px" }}>Earned</p>
            <div style={{ width: "50px", height: "50px", position: "relative" }}>
              <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/5w92206f_material-symbols-light_rewarded-ads-outline.png" alt="Trophy" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* High Demand Materials */}
        <div style={{ width: "1337px", minHeight: "249px", borderRadius: "20px", backgroundColor: "rgba(249, 115, 22, 0.05)", border: "2px solid rgba(249, 115, 22, 0.6)", padding: "16px", margin: "0 auto 24px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000", margin: "0 0 16px 0" }}>High Demand Materials</h2>
          <div style={{ display: "flex", gap: "24px", width: "100%", justifyContent: "space-between" }}>
            <div style={{ width: "280px", height: "150px", borderRadius: "16px", backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px" }}>
              <div>
                <p style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "18px", color: "#000", margin: 0 }}>Plastics</p>
                <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "14px", color: "#666", margin: "4px 0 0" }}>33pts per kg</p>
              </div>
              <div style={{ width: "80px", height: "80px", position: "relative" }}>
                <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/08dciocy_plastic.png" alt="Plastics" fill className="object-contain" />
              </div>
            </div>
            <div style={{ width: "280px", height: "150px", borderRadius: "16px", backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px" }}>
              <div>
                <p style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "18px", color: "#000", margin: 0 }}>Organic Waste</p>
                <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "14px", color: "#666", margin: "4px 0 0" }}>21pts per kg</p>
              </div>
              <div style={{ width: "80px", height: "80px", position: "relative" }}>
                <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/59gdagfs_organic.png" alt="Organic" fill className="object-contain" />
              </div>
            </div>
            <div style={{ width: "280px", height: "150px", borderRadius: "16px", backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px" }}>
              <div>
                <p style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "18px", color: "#000", margin: 0 }}>Metal</p>
                <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "14px", color: "#666", margin: "4px 0 0" }}>17pts per kg</p>
              </div>
              <div style={{ width: "80px", height: "80px", position: "relative" }}>
                <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/arfdjmmm_Metal.png" alt="Metal" fill className="object-contain" />
              </div>
            </div>
            <div style={{ width: "280px", height: "150px", borderRadius: "16px", backgroundColor: "#DFDFDF", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px" }}>
              <div>
                <p style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "18px", color: "#000", margin: 0 }}>Glass</p>
                <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "14px", color: "#666", margin: "4px 0 0" }}>6pts per kg</p>
              </div>
              <div style={{ width: "80px", height: "80px", position: "relative" }}>
                <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/xmo84rex_glass.png" alt="Glass" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Leaderboard */}
        <div style={{ width: "1337px", height: "340px", borderRadius: "20px", backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", padding: "24px", margin: "0 auto 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000", margin: 0 }}>Weekly Leaderboard</h2>
            <Link href="#" style={{ fontFamily: "Commissioner", fontSize: "14px", color: "#176B29", textDecoration: "none" }}>View All</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderRadius: "12px", backgroundColor: "#F5F5F5" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#F97316", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 700, fontSize: "16px", color: "#FFFFFF" }}>1</div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#176B29", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 600, fontSize: "14px", color: "#FFF" }}>SK</div>
                <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "16px", color: "#000", margin: 0 }}>Sarah K.</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <p style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "16px", color: "#F97316", margin: 0 }}>1250 points</p>
                <div style={{ width: "24px", height: "24px", position: "relative" }}>
                  <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/lnj7lke1_Icon.png" alt="Trophy" fill className="object-contain" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderRadius: "12px", backgroundColor: "rgba(149, 213, 178, 0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(249, 115, 22, 0.69)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 700, fontSize: "16px", color: "#364153" }}>2</div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#176B29", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 600, fontSize: "14px", color: "#FFF" }}>OC</div>
                <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "16px", color: "#000", margin: 0 }}>You</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <p style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "16px", color: "#F97316", margin: 0 }}>980 points</p>
                <div style={{ width: "24px", height: "24px", position: "relative" }}>
                  <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/lnj7lke1_Icon.png" alt="Trophy" fill className="object-contain" />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderRadius: "12px", backgroundColor: "#F5F5F5" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#FFB663", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 700, fontSize: "16px", color: "#CA3500" }}>3</div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#176B29", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 600, fontSize: "14px", color: "#FFF" }}>AR</div>
                <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "16px", color: "#000", margin: 0 }}>Arnold Rice</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <p style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "16px", color: "#F97316", margin: 0 }}>960 points</p>
                <div style={{ width: "24px", height: "24px", position: "relative" }}>
                  <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/lnj7lke1_Icon.png" alt="Trophy" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Your Badges */}
        <div style={{ width: "1307px", height: "197px", borderRadius: "20px", backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", padding: "24px", margin: "0 auto 24px" }}>
          <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000", margin: "0 0 16px" }}>Your Badges</h2>
          <div style={{ width: "884px", height: "80px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginLeft: "25px", marginTop: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "50px", height: "50px", position: "relative" }}>
                <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/scfkrjrt_Container.png" alt="First Pickup" fill className="object-contain" />
              </div>
              <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "12px", color: "#000", margin: 0 }}>First Pickup</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "50px", height: "50px", position: "relative" }}>
                <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/zrl443nb_Container%20%281%29.png" alt="10kg Club" fill className="object-contain" />
              </div>
              <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "12px", color: "#000", margin: 0 }}>10kg Club</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "50px", height: "50px", position: "relative" }}>
                <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/ny0essl8_Container%20%282%29.png" alt="100kg Club" fill className="object-contain" />
              </div>
              <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "12px", color: "#999", margin: 0 }}>100kg Club</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "50px", height: "50px", position: "relative" }}>
                <Image src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/ny0essl8_Container%20%282%29.png" alt="Top Glass Collector" fill className="object-contain" />
              </div>
              <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "12px", color: "#999", margin: 0 }}>Top Glass Collector</p>
            </div>
          </div>
        </div>

        {/* Recycling Tip of the Day */}
        <div style={{ width: "1307px", borderRadius: "20px", backgroundColor: "#E9EFFD", padding: "24px", margin: "0 auto 24px" }}>
          <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "20px", color: "#000", margin: "0 0 12px" }}>Recycling Tip of the Day</h2>
          <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "14px", color: "#333", margin: 0 }}>
            Rinse plastic bottles before recycling to prevent contamination and earn more points!
          </p>
        </div>

      </div>
    </div>
  );
}
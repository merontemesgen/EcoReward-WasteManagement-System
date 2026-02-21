// "use client";
// import Image from "next/image";
// import Link from "next/link";

// export default function CitizenDashboard() {
//   const user = {
//     name: "Olumide Charles B",
//     initials: "OC",
//     points: 980,
//     weeklyGain: 125,
//   };

//   const stats = {
//     recycled: "32.8kg",
//     pickups: 9,
//     totalPoints: 7302,
//   };

//   const materials = [
//     { name: "Plastics", points: 33, icon: "🧴" },
//     { name: "Organic Waste", points: 21, icon: "🥬" },
//     { name: "Metal", points: 17, icon: "🥫" },
//     { name: "Glass", points: 6, icon: "🍾" },
//   ];

//   const leaderboard = [
//     { rank: 1, name: "Sarah K.", initials: "SK", points: 1250 },
//     { rank: 2, name: "You", initials: "OC", points: 980, isYou: true },
//     { rank: 3, name: "Arnold Rice", initials: "AR", points: 960 },
//   ];

//   const badges = [
//     { name: "First Pickup", earned: true },
//     { name: "10kg Club", earned: true },
//     { name: "100kg Club", earned: false },
//     { name: "Top Glass Collector", earned: false },
//   ];

//   return (
//     <div style={{ width: "1440px", minHeight: "100vh", backgroundColor: "#FEF9EB", margin: "0 auto" }}>
      
//       {/* Main Container with gradient */}
//       <div 
//         style={{
//           width: "1440px",
//           height: "472px",
//           borderRadius: "32px",
//           background: "linear-gradient(180deg, #C29D64 0%, #8B7355 50%, #176B29 100%)",
//           padding: "30px 0",
//           position: "relative"
//         }}
//       >
//         {/* Welcome Section */}
//         <div 
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "16px",
//             padding: "0 24px",
//             marginTop: "28px"
//           }}
//         >
//           {/* Avatar */}
//           <div 
//             style={{
//               width: "80px",
//               height: "80px",
//               borderRadius: "50%",
//               backgroundColor: "#176B29",
//               border: "4px solid #FFFFFF",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               color: "#FFFFFF",
//               fontFamily: "Commissioner",
//               fontWeight: 700,
//               fontSize: "32px"
//             }}
//           >
//             {user.initials}
//           </div>
          
//           {/* Welcome Text */}
//           <div>
//             <h1 
//               style={{
//                 fontFamily: "Commissioner",
//                 fontWeight: 700,
//                 fontSize: "36px",
//                 color: "#176B29",
//                 margin: 0
//               }}
//             >
//               Welcome,
//             </h1>
//             <p 
//               style={{
//                 fontFamily: "Commissioner",
//                 fontWeight: 500,
//                 fontSize: "24px",
//                 color: "#8B7355",
//                 margin: 0
//               }}
//             >
//               {user.name}
//             </p>
//           </div>
//         </div>

//         {/* EcoWallet Container */}
//         <div 
//           style={{
//             width: "1392px",
//             height: "114px",
//             margin: "24px auto",
//             borderRadius: "20px",
//             backgroundColor: "rgba(0, 0, 0, 0.1)",
//             border: "3px solid rgba(255, 255, 255, 0.2)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             padding: "0 24px"
//           }}
//         >
//           {/* Left - EcoWallet Label */}
//           <div>
//             <p style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "18px", color: "#FFFFFF", margin: 0 }}>
//               EcoWallet
//             </p>
//             <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "16px", color: "#FFFFFF", margin: 0 }}>
//               Balance
//             </p>
//           </div>

//           {/* Center - Points */}
//           <p style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "36px", color: "#FFFFFF", margin: 0 }}>
//             {user.points} Points
//           </p>

//           {/* Right - Weekly gain + Redeem */}
//           <div style={{ textAlign: "right" }}>
//             <p style={{ fontFamily: "Commissioner", fontSize: "14px", color: "#FFFFFF", margin: "0 0 8px 0" }}>
//               ↗ +{user.weeklyGain} this week
//             </p>
//             <button 
//               style={{
//                 width: "162px",
//                 height: "32px",
//                 borderRadius: "16px",
//                 backgroundColor: "#B7E4C7",
//                 border: "none",
//                 fontFamily: "Commissioner",
//                 fontWeight: 600,
//                 fontSize: "14px",
//                 color: "#176B29",
//                 cursor: "pointer"
//               }}
//             >
//               Redeem
//             </button>
//           </div>
//         </div>

//         {/* Transactions Link */}
//         <div style={{ textAlign: "center", marginTop: "16px" }}>
//           <Link 
//             href="#" 
//             style={{ 
//               fontFamily: "Commissioner", 
//               fontSize: "16px", 
//               color: "#FFFFFF",
//               textDecoration: "none",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "8px"
//             }}
//           >
//             ← Transactions →
//           </Link>
//         </div>
//       </div>

//       {/* Content Below Gradient */}
//       <div style={{ padding: "24px" }}>
        
//         {/* Request Pickup Button */}
//         <button 
//           style={{
//             width: "1348px",
//             height: "100px",
//             borderRadius: "32px",
//             backgroundColor: "#176B29",
//             border: "none",
//             fontFamily: "Commissioner",
//             fontWeight: 600,
//             fontSize: "24px",
//             color: "#FFFFFF",
//             cursor: "pointer",
//             margin: "0 auto 24px",
//             display: "block",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
//           }}
//         >
//           Request Pickup
//         </button>

//         {/* Stats Cards - 3 Horizontal */}
//         <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "24px" }}>
//           {/* Recycled Card */}
//           <div 
//             style={{
//               width: "400px",
//               height: "180px",
//               borderRadius: "20px",
//               backgroundColor: "#FFFFFF",
//               boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "20px"
//             }}
//           >
//             <p style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "32px", color: "#000", margin: 0 }}>
//               {stats.recycled}
//             </p>
//             <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "18px", color: "#666", margin: "4px 0 12px" }}>
//               recycled
//             </p>
//             <span style={{ fontSize: "40px" }}>♻️</span>
//           </div>

//           {/* Pickups Card */}
//           <div 
//             style={{
//               width: "400px",
//               height: "180px",
//               borderRadius: "20px",
//               backgroundColor: "#FFFFFF",
//               boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "20px"
//             }}
//           >
//             <p style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "32px", color: "#000", margin: 0 }}>
//               {stats.pickups}
//             </p>
//             <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "18px", color: "#666", margin: "4px 0 12px" }}>
//               Pickups
//             </p>
//             <span style={{ fontSize: "40px" }}>🚛</span>
//           </div>

//           {/* Total Points Card */}
//           <div 
//             style={{
//               width: "400px",
//               height: "180px",
//               borderRadius: "20px",
//               backgroundColor: "#FFFFFF",
//               boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "20px"
//             }}
//           >
//             <p style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "32px", color: "#000", margin: 0 }}>
//               {stats.totalPoints}
//             </p>
//             <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "18px", color: "#666", margin: 0 }}>
//               Total Points
//             </p>
//             <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "14px", color: "#999", margin: "2px 0 12px" }}>
//               Earned
//             </p>
//             <span style={{ fontSize: "40px" }}>🏆</span>
//           </div>
//         </div>

//         {/* High Demand Materials
//         <div 
//           style={{
//             backgroundColor: "#FFFFFF",
//             borderRadius: "20px",
//             padding: "24px",
//             marginBottom: "24px",
//             boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
//           }}
//         >
//           <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000", margin: "0 0 20px" }}>
//             High Demand Materials
//           </h2>
//           <div style={{ display: "flex", gap: "16px", justifyContent: "space-between" }}>
//             {materials.map((material) => (
//               <div 
//                 key={material.name}
//                 style={{
//                   flex: 1,
//                   height: "80px",
//                   borderRadius: "16px",
//                   backgroundColor: "#F97316",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "0 20px"
//                 }}
//               >
//                 <div>
//                   <p style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "16px", color: "#FFF", margin: 0 }}>
//                     {material.name}
//                   </p>
//                   <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "12px", color: "#FFF", margin: 0 }}>
//                     {material.points}pts per kg
//                   </p>
//                 </div>
//                 <span style={{ fontSize: "32px" }}>{material.icon}</span>
//               </div>
//             ))}
//           </div>
//         </div> */}

        

//         {/* Weekly Leaderboard */}
//         <div 
//           style={{
//             backgroundColor: "#FFFFFF",
//             borderRadius: "20px",
//             padding: "24px",
//             marginBottom: "24px",
//             boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
//           }}
//         >
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//             <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000", margin: 0 }}>
//               Weekly Leaderboard
//             </h2>
//             <Link 
//               href="#" 
//               style={{ 
//                 fontFamily: "Commissioner", 
//                 fontSize: "14px", 
//                 color: "#176B29",
//                 textDecoration: "none"
//               }}
//             >
//               View All
//             </Link>
//           </div>
          
//           <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//             {leaderboard.map((entry) => (
//               <div 
//                 key={entry.rank}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "16px 20px",
//                   borderRadius: "12px",
//                   backgroundColor: entry.isYou ? "#95D5B2" : "#F5F5F5"
//                 }}
//               >
//                 <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
//                   {/* Rank Badge */}
//                   <div 
//                     style={{
//                       width: "28px",
//                       height: "28px",
//                       borderRadius: "50%",
//                       backgroundColor: entry.rank === 1 ? "#FFD700" : entry.rank === 2 ? "#34C759" : "#CD7F32",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontFamily: "Commissioner",
//                       fontWeight: 700,
//                       fontSize: "14px",
//                       color: "#FFF"
//                     }}
//                   >
//                     {entry.rank}
//                   </div>
                  
//                   {/* Avatar */}
//                   <div 
//                     style={{
//                       width: "40px",
//                       height: "40px",
//                       borderRadius: "50%",
//                       backgroundColor: "#176B29",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontFamily: "Commissioner",
//                       fontWeight: 600,
//                       fontSize: "14px",
//                       color: "#FFF"
//                     }}
//                   >
//                     {entry.initials}
//                   </div>
                  
//                   {/* Name */}
//                   <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "16px", color: "#000", margin: 0 }}>
//                     {entry.name}
//                   </p>
//                 </div>
                
//                 {/* Points */}
//                 <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                   <p style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "16px", color: "#176B29", margin: 0 }}>
//                     {entry.points} points
//                   </p>
//                   <span style={{ fontSize: "20px" }}>🏆</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Your Badges */}
//         <div 
//           style={{
//             backgroundColor: "#FFFFFF",
//             borderRadius: "20px",
//             padding: "24px",
//             marginBottom: "24px",
//             boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
//           }}
//         >
//           <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000", margin: "0 0 20px" }}>
//             Your Badges
//           </h2>
//           <div style={{ display: "flex", gap: "40px", justifyContent: "flex-start" }}>
//             {badges.map((badge) => (
//               <div key={badge.name} style={{ textAlign: "center" }}>
//                 <div 
//                   style={{
//                     width: "60px",
//                     height: "60px",
//                     borderRadius: "50%",
//                     backgroundColor: badge.earned ? "#FFD700" : "#E0E0E0",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     margin: "0 auto 8px",
//                     opacity: badge.earned ? 1 : 0.5
//                   }}
//                 >
//                   <span style={{ fontSize: "28px" }}>⭐</span>
//                 </div>
//                 <p 
//                   style={{ 
//                     fontFamily: "Commissioner", 
//                     fontWeight: 500, 
//                     fontSize: "12px", 
//                     color: badge.earned ? "#000" : "#999",
//                     margin: 0
//                   }}
//                 >
//                   {badge.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Recycling Tip of the Day */}
//         <div 
//           style={{
//             backgroundColor: "#E9EFFD",
//             borderRadius: "20px",
//             padding: "24px",
//             marginBottom: "24px"
//           }}
//         >
//           <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "20px", color: "#000", margin: "0 0 12px" }}>
//             Recycling Tip of the Day
//           </h2>
//           <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "14px", color: "#333", margin: 0 }}>
//             Rinse plastic bottles before recycling to prevent contamination and earn more points!
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";

export default function CitizenDashboard() {
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
          marginTop: "30px"
        }}
      >
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "58px 24px 0"
          }}
        >
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
              fontSize: "32px"
            }}
          >
            {user.initials}
          </div>
          
          <div style={{ width: "749px", height: "150px" }}>
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

        {/* EcoWallet */}
        <div 
          style={{
            width: "1392px",
            height: "114px",
            margin: "24px auto",
            borderRadius: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            border: "3px solid rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px"
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
            
            {/* Transactions Link - W100 H45.99 directly under points */}
            <Link 
              href="#" 
              style={{ 
                width: "100px",
                height: "45.99px",
                fontFamily: "Commissioner", 
                fontSize: "16px", 
                fontWeight: 500,
                color: "#FFFFFF",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <div style={{ width: "16px", height: "16px", position: "relative" }}>
                <Image
                  src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/s989h2e7_Vector.png"
                  alt="Transactions"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Transactions</span>
            </Link>
          </div>

          {/* Right - Weekly gain above Redeem button */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>
            {/* +125 this week - W113.61 H20, horizontal flow, gap 4, align left */}
            <div style={{ width: "113.61px", height: "20px", display: "flex", alignItems: "center", gap: "4px", justifyContent: "flex-start" }}>
              <div style={{ width: "16px", height: "16px", position: "relative" }}>
                <Image
                  src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/wm5240gm_graph.png"
                  alt="Chart"
                  fill
                  className="object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <p style={{ fontFamily: "Commissioner", fontSize: "14px", color: "#FFFFFF", margin: 0 }}>
                +{user.weeklyGain} this week
              </p>
            </div>
            
            {/* Redeem button */}
            <button 
              style={{
                width: "162px",
                height: "32px",
                borderRadius: "16px",
                backgroundColor: "#B7E4C7",
                border: "none",
                fontFamily: "Commissioner",
                fontWeight: 600,
                fontSize: "14px",
                color: "#176B29",
                cursor: "pointer"
              }}
            >
              Redeem
            </button>
          </div>
        </div>
      </div>

      {/* Content Below */}
      <div style={{ padding: "24px" }}>
        
        {/* Request Pickup Button - Now Clickable */}
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
          <div 
            style={{
              width: "400px",
              height: "180px",
              borderRadius: "20px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            <p style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "32px", color: "#000", margin: 0 }}>
              {stats.recycled}
            </p>
            <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "18px", color: "#666", margin: "4px 0 12px" }}>
              recycled
            </p>
            <div style={{ width: "50px", height: "50px", position: "relative" }}>
              <Image
                src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/rcpdf9tf_eco%20icons.png"
                alt="Recycle"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div 
            style={{
              width: "400px",
              height: "180px",
              borderRadius: "20px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            <p style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "32px", color: "#000", margin: 0 }}>
              {stats.pickups}
            </p>
            <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "18px", color: "#666", margin: "4px 0 12px" }}>
              Pickups
            </p>
            <div style={{ width: "50px", height: "50px", position: "relative" }}>
              <Image
                src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/zs69684f_eco%20icons%20%281%29.png"
                alt="Truck"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div 
            style={{
              width: "400px",
              height: "180px",
              borderRadius: "20px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            <p style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "32px", color: "#000", margin: 0 }}>
              {stats.totalPoints}
            </p>
            <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "18px", color: "#666", margin: 0 }}>
              Total Points
            </p>
            <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "14px", color: "#999", margin: "2px 0 12px" }}>
              Earned
            </p>
            <div style={{ width: "50px", height: "50px", position: "relative" }}>
              <Image
                src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/5w92206f_material-symbols-light_rewarded-ads-outline.png"
                alt="Trophy"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* High Demand Materials */}
        <div 
          style={{
            width: "1337px",
            minHeight: "249px",
            borderRadius: "20px",
            backgroundColor: "rgba(249, 115, 22, 0.05)",
            border: "2px solid rgba(249, 115, 22, 0.6)",
            padding: "16px",
            margin: "0 auto 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000", margin: "0 0 16px 0" }}>
            High Demand Materials
          </h2>
          
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
        <div 
          style={{
            width: "1337px",
            height: "340px",
            borderRadius: "20px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            padding: "24px",
            margin: "0 auto 24px",
            display: "flex",
            flexDirection: "column",
            gap: "40px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000", margin: 0 }}>
              Weekly Leaderboard
            </h2>
            <Link href="#" style={{ fontFamily: "Commissioner", fontSize: "14px", color: "#176B29", textDecoration: "none" }}>
              View All
            </Link>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderRadius: "12px", backgroundColor: "#F5F5F5" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#F97316", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 700, fontSize: "16px", color: "#FFFFFF" }}>
                  1
                </div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#176B29", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 600, fontSize: "14px", color: "#FFF" }}>
                  SK
                </div>
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
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(249, 115, 22, 0.69)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 700, fontSize: "16px", color: "#364153" }}>
                  2
                </div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#176B29", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 600, fontSize: "14px", color: "#FFF" }}>
                  OC
                </div>
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
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#FFB663", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 700, fontSize: "16px", color: "#CA3500" }}>
                  3
                </div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#176B29", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Commissioner", fontWeight: 600, fontSize: "14px", color: "#FFF" }}>
                  AR
                </div>
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
        <div 
          style={{
            width: "1307px",
            height: "197px",
            borderRadius: "20px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            padding: "24px",
            margin: "0 auto 24px"
          }}
        >
          <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000", margin: "0 0 16px" }}>
            Your Badges
          </h2>
          
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
        <div 
          style={{
            width: "1307px",
            borderRadius: "20px",
            backgroundColor: "#E9EFFD",
            padding: "24px",
            margin: "0 auto 24px"
          }}
        >
          <h2 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "20px", color: "#000", margin: "0 0 12px" }}>
            Recycling Tip of the Day
          </h2>
          <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "14px", color: "#333", margin: 0 }}>
            Rinse plastic bottles before recycling to prevent contamination and earn more points!
          </p>
        </div>

      </div>
    </div>
  );
}
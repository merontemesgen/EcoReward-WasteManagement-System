"use client";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEF9EB", width: "1440px", margin: "0 auto" }}>
      
      {/* Navbar */}
      <nav className="flex justify-between items-center" style={{ padding: "20px 100px" }}>
        <div style={{ width: "553px", height: "106px", position: "relative" }}>
          <Image
            src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/phl1o1bh_image.png"
            alt="EcoReward Logo"
            fill
            className="object-contain object-left"
          />
        </div>
        <Link 
          href="/auth/signup"
          style={{
            width: "150px",
            height: "50px",
            borderRadius: "32px",
            backgroundColor: "#FFFFFF",
            border: "2px solid #176B29",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Commissioner",
            fontWeight: 500,
            fontSize: "18px",
            color: "#176B29"
          }}
        >
          Sign Up
        </Link>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: "0 100px", marginTop: "20px" }}>
        <div 
          style={{
            width: "1240px",
            height: "600px",
            borderRadius: "32px",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Image
            src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/0dbfm1bz_ee8d444a29dce7e68c9824c2b368933cb9761c83%20%281%29.png"
            alt="Hero background"
            fill
            className="object-cover"
            style={{ opacity: 0.6 }}
          />
          <div 
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(149, 213, 178, 0.1)",
              backdropFilter: "blur(30px)"
            }}
          />
          <div 
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            <h1 
              style={{
                fontFamily: "Commissioner",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "100%",
                color: "#FFEAEA",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
              }}
            >
              Your Waste<br />Your Wealth
            </h1>
            <p 
              style={{
                fontFamily: "Commissioner",
                fontWeight: 500,
                fontSize: "32px",
                lineHeight: "100%",
                color: "#FFEAEA",
                marginTop: "24px",
                maxWidth: "922px",
                textShadow: "1px 1px 3px rgba(0,0,0,0.5)"
              }}
            >
              Transforming everyday recyclables into dynamic rewards powered<br />
              by real-time demand intelligence.
            </p>
            <button 
              style={{
                width: "902px",
                height: "100px",
                borderRadius: "32px",
                backgroundColor: "#176B29",
                color: "#FFFFFF",
                fontFamily: "Commissioner",
                fontWeight: 600,
                fontSize: "24px",
                marginTop: "48px",
                border: "none",
                cursor: "pointer",
                padding: "32px"
              }}
            >
              Start Earning
            </button>
          </div>
        </div>
      </section>

      {/* Are you a... Section */}
      <section 
        style={{
          width: "1258px",
          height: "778px",
          borderRadius: "16px",
          backgroundColor: "rgba(200, 200, 200, 0.4)",
          backdropFilter: "blur(8.7px)",
          margin: "60px auto",
          position: "relative",
          padding: "48px"
        }}
      >
        <h2 
          style={{
            fontFamily: "Commissioner",
            fontWeight: 500,
            fontSize: "32px",
            textAlign: "center",
            color: "#000000",
            fontStyle: "italic"
          }}
        >
          Are you a ...
        </h2>

        <div style={{ display: "flex", gap: "56px", marginTop: "36px", justifyContent: "center" }}>
          {/* Collector Card */}
          <div 
            style={{
              width: "344px",
              height: "661px",
              borderRadius: "32px",
              overflow: "hidden",
              boxShadow: "4px 6px 4.5px 0px rgba(0, 0, 0, 0.25)",
              backgroundColor: "#E8E4DB"
            }}
          >
            <div style={{ width: "344px", height: "447px", position: "relative" }}>
              <Image
                src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/fqi8pydt_Rectangle%2058.png"
                alt="Collector"
                fill
                className="object-cover object-top"
              />
            </div>
            <div 
              style={{
                width: "344px",
                height: "214px",
                backgroundColor: "#FFFFFF",
                borderBottomLeftRadius: "32px",
                borderBottomRightRadius: "32px",
                padding: "14px 12px"
              }}
            >
              <h3 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000" }}>
                Collector
              </h3>
              <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "16px", color: "#333", marginTop: "8px" }}>
                Follow optimized routes and focus on high-value pickups.
              </p>
              <Link 
                href="/auth/signup?role=collector"
                style={{
                  fontFamily: "Commissioner",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#176B29",
                  textDecoration: "underline",
                  fontStyle: "italic",
                  display: "block",
                  marginTop: "16px"
                }}
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Citizen Card */}
          <div 
            style={{
              width: "344px",
              height: "623px",
              borderRadius: "32px",
              overflow: "hidden",
              boxShadow: "4px 6px 4.5px 0px rgba(0, 0, 0, 0.25)",
              backgroundColor: "#E8E4DB",
              marginTop: "38px"
            }}
          >
            <div style={{ width: "344px", height: "409px", position: "relative" }}>
              <Image
                src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/5qrsk6vr_Rectangle%2086.png"
                alt="Citizen"
                fill
                className="object-cover object-top"
              />
            </div>
            <div 
              style={{
                width: "344px",
                height: "214px",
                backgroundColor: "#FFFFFF",
                borderBottomLeftRadius: "32px",
                borderBottomRightRadius: "32px",
                padding: "14px 12px"
              }}
            >
              <h3 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000" }}>
                Citizen
              </h3>
              <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "16px", color: "#333", marginTop: "8px" }}>
                Turn everyday waste into dynamic rewards.
              </p>
              <Link 
                href="/auth/signup?role=citizen"
                style={{
                  fontFamily: "Commissioner",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#176B29",
                  textDecoration: "underline",
                  fontStyle: "italic",
                  display: "block",
                  marginTop: "16px"
                }}
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Recycling SME Card */}
          <div 
            style={{
              width: "344px",
              height: "645px",
              borderRadius: "32px",
              overflow: "hidden",
              boxShadow: "4px 6px 4.5px 0px rgba(0, 0, 0, 0.25)",
              backgroundColor: "#E8E4DB"
            }}
          >
            <div style={{ width: "344px", height: "431px", position: "relative" }}>
              <Image
                src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/cngs7pyq_Rectangle%2090.png"
                alt="Recycling SME"
                fill
                className="object-cover object-top"
              />
            </div>
            <div 
              style={{
                width: "344px",
                height: "214px",
                backgroundColor: "#FFFFFF",
                borderBottomLeftRadius: "32px",
                borderBottomRightRadius: "32px",
                padding: "14px 12px"
              }}
            >
              <h3 style={{ fontFamily: "Commissioner", fontWeight: 700, fontSize: "24px", color: "#000" }}>
                Recycling SME
              </h3>
              <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "16px", color: "#333", marginTop: "8px" }}>
                Monitor materials, optimize operations, respond to demand.
              </p>
              <Link 
                href="/auth/signup?role=sme"
                style={{
                  fontFamily: "Commissioner",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#176B29",
                  textDecoration: "underline",
                  fontStyle: "italic",
                  display: "block",
                  marginTop: "16px"
                }}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        style={{
          width: "1258px",
          borderRadius: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          boxShadow: "4px 4px 30px 16px rgba(0, 0, 0, 0.25)",
          margin: "60px auto",
          padding: "48px"
        }}
      >
        <h2 
          style={{
            fontFamily: "Commissioner",
            fontWeight: 500,
            fontSize: "32px",
            textAlign: "center",
            color: "#000000",
            marginBottom: "48px"
          }}
        >
          How It Works
        </h2>

        {/* Top Row - 3 Cards */}
        <div style={{ display: "flex", gap: "48px", justifyContent: "center", marginBottom: "48px" }}>
          {/* Card 1 - Sort */}
          <div 
            style={{
              width: "352px",
              height: "416px",
              borderRadius: "32px",
              backgroundColor: "#FFD189",
              boxShadow: "10px 6px 12px 0px rgba(0, 0, 0, 0.25)",
              padding: "20px"
            }}
          >
            <div style={{ width: "120px", height: "120px", position: "relative", marginBottom: "18px" }}>
              <Image
                src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/6rn7qbcl_Ellipse%201.png"
                alt="Sort icon"
                fill
                className="object-contain"
              />
            </div>
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "24px", color: "#176B29" }}>
                1. Sort
              </h3>
              <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "20px", color: "#000", marginTop: "12px", lineHeight: "1.4" }}>
                Separate your plastic, paper, glass, and metal to ensure accurate classification and maximum reward value.
              </p>
            </div>
          </div>

          {/* Card 2 - Capture */}
          <div 
            style={{
              width: "352px",
              height: "416px",
              borderRadius: "32px",
              backgroundColor: "#FFD189",
              boxShadow: "10px 6px 12px 0px rgba(0, 0, 0, 0.25)",
              padding: "20px"
            }}
          >
            <div 
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: "#A8D5A2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "18px"
              }}
            >
              <span style={{ fontSize: "48px" }}>📷</span>
            </div>
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "24px", color: "#176B29" }}>
                2. Capture
              </h3>
              <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "20px", color: "#000", marginTop: "12px", lineHeight: "1.4" }}>
                your sorted materials for AI analysis to detect material type and estimate quantity.
              </p>
            </div>
          </div>

          {/* Card 3 - Locate */}
          <div 
            style={{
              width: "352px",
              height: "416px",
              borderRadius: "32px",
              backgroundColor: "#FFD189",
              boxShadow: "10px 6px 12px 0px rgba(0, 0, 0, 0.25)",
              padding: "20px"
            }}
          >
            <div 
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: "#A8D5A2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "18px"
              }}
            >
              <span style={{ fontSize: "48px" }}>📍</span>
            </div>
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "24px", color: "#176B29" }}>
                3. Locate
              </h3>
              <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "20px", color: "#000", marginTop: "12px", lineHeight: "1.4" }}>
                Submit your request for the system to find the nearest available certified collector.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row - 2 Cards Centered */}
        <div style={{ display: "flex", gap: "48px", justifyContent: "center", marginBottom: "48px" }}>
          {/* Card 4 - Verify */}
          <div 
            style={{
              width: "352px",
              height: "416px",
              borderRadius: "32px",
              backgroundColor: "#FFD189",
              boxShadow: "10px 6px 12px 0px rgba(0, 0, 0, 0.25)",
              padding: "20px"
            }}
          >
            <div 
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: "#A8D5A2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "18px"
              }}
            >
              <span style={{ fontSize: "48px" }}>✅</span>
            </div>
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "24px", color: "#176B29" }}>
                4. Verify
              </h3>
              <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "20px", color: "#000", marginTop: "12px", lineHeight: "1.4" }}>
                inspection, classification confirmation, weighing and validating of materials by the collector in the system.
              </p>
            </div>
          </div>

          {/* Card 5 - Earn */}
          <div 
            style={{
              width: "352px",
              height: "416px",
              borderRadius: "32px",
              backgroundColor: "#FFD189",
              boxShadow: "10px 6px 12px 0px rgba(0, 0, 0, 0.25)",
              padding: "20px"
            }}
          >
            <div 
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: "#A8D5A2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "18px"
              }}
            >
              <span style={{ fontSize: "48px" }}>💰</span>
            </div>
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "24px", color: "#176B29" }}>
                5. Earn
              </h3>
              <p style={{ fontFamily: "Commissioner", fontWeight: 500, fontSize: "20px", color: "#000", marginTop: "12px", lineHeight: "1.4" }}>
                Reward points are credited to your wallet based on verified weight and real-time material demand.
              </p>
            </div>
          </div>
        </div>

        {/* Try It Out Button */}
        <div style={{ textAlign: "center" }}>
          <button 
            style={{
              width: "902px",
              height: "100px",
              borderRadius: "32px",
              backgroundColor: "#B7E4C7",
              color: "#176B29",
              fontFamily: "Commissioner",
              fontWeight: 600,
              fontSize: "24px",
              border: "none",
              cursor: "pointer",
              padding: "32px"
            }}
          >
            Try It Out
          </button>
        </div>
      </section>

      {/* Material Demand Indices */}
      <section style={{ padding: "40px 100px" }}>
        <div 
          style={{
            width: "487px",
            margin: "0 auto",
            padding: "22px 72px",
            backgroundColor: "#FFFFFF",
            borderRadius: "16px"
          }}
        >
          <p style={{ fontFamily: "Commissioner", fontWeight: 400, fontSize: "32px", lineHeight: "50px", color: "#000" }}>
            <strong>Today&apos;s Material Demand Indices:</strong><br />
            Metal ↑ 12%<br />
            PET Plastic ↑ 8%<br />
            Paper ↓ 4%
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer 
        style={{
          width: "1440px",
          height: "787px",
          backgroundColor: "#2D2D2D",
          padding: "100px",
          marginTop: "60px"
        }}
      >
        <div style={{ display: "flex", gap: "60px" }}>
          {/* Brand Column */}
          <div style={{ width: "441px", padding: "10px" }}>
            <div style={{ width: "200px", height: "80px", position: "relative", marginBottom: "20px" }}>
              <Image
                src="https://customer-assets.emergentagent.com/job_eco-join/artifacts/phl1o1bh_image.png"
                alt="EcoReward Logo"
                fill
                className="object-contain object-left"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p style={{ fontFamily: "Commissioner", fontSize: "16px", color: "#AAAAAA", lineHeight: "1.6" }}>
              AI-powered recycling incentives that turn everyday waste into measurable economic value.
            </p>
            <div style={{ marginTop: "24px", fontFamily: "Commissioner", fontSize: "14px", color: "#AAAAAA" }}>
              <p>📍 Lagos, Nigeria</p>
              <p>✉ support@ecoreward.com</p>
              <p>📞 +234 666 777</p>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ width: "253px" }}>
            <h4 style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "18px", color: "#FFFFFF", marginBottom: "16px" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, fontFamily: "Commissioner", fontSize: "14px", color: "#AAAAAA" }}>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>How It Works</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Rewards System</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Material Demand Index</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>AI & Valuation Model</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Partners</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>FAQs</Link></li>
            </ul>
          </div>

          {/* User Portals */}
          <div style={{ width: "245px" }}>
            <h4 style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "18px", color: "#FFFFFF", marginBottom: "16px" }}>
              User Portals
            </h4>
            <ul style={{ listStyle: "none", padding: 0, fontFamily: "Commissioner", fontSize: "14px", color: "#AAAAAA" }}>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Citizen Portal</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>SME Dashboard</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Collector Hub</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Register as a Collector</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Register Your Business</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div style={{ width: "306px" }}>
            <h4 style={{ fontFamily: "Commissioner", fontWeight: 600, fontSize: "18px", color: "#FFFFFF", marginBottom: "16px" }}>
              Legal
            </h4>
            <ul style={{ listStyle: "none", padding: 0, fontFamily: "Commissioner", fontSize: "14px", color: "#AAAAAA" }}>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Terms of Service</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Privacy Policy</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Data & AI Transparency</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Cookie Policy</Link></li>
              <li style={{ marginBottom: "9px" }}><Link href="#" style={{ color: "#AAAAAA" }}>Compliance & Certifications</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div 
          style={{
            textAlign: "center",
            marginTop: "100px",
            fontFamily: "Commissioner",
            fontSize: "24px",
            lineHeight: "50px",
            color: "#AAAAAA"
          }}
        >
          <p>© 2026 EcoReward. All rights reserved.</p>
          <p>Building intelligent recycling economies.</p>
        </div>
      </footer>
    </div>
  );
}
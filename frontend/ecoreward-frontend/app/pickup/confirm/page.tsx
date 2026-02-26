'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function WasteConfirmationPage() {
  const router = useRouter();

  const progressSteps = [
    { number: 1, label: 'Get Started', completed: true },
    { number: 2, label: 'Sort Waste', completed: true },
    { number: 3, label: 'Capture Photo', completed: true },
    { number: 4, label: 'Review Summary', active: true, completed: false },
    { number: 5, label: 'Set Location', completed: false },
    { number: 6, label: 'Schedule Time', completed: false },
    { number: 7, label: 'Collector Assigned', completed: false },
    { number: 8, label: 'Verify Pickup', completed: false },
    { number: 9, label: 'Complete', completed: false },
  ];

  const handleBack = () => router.back();
  const handleContinueToLocation = () => router.push('/pickup/location');
  const handleEdit = () => router.push('/pickup/review');
  const handleProgressClick = (stepNumber: number) => {
    if (stepNumber === 1 || stepNumber === 2) router.push('/pickup/sort');
    else if (stepNumber === 3) router.push('/pickup/capture');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFF9E8',
      fontFamily: 'Arimo, sans-serif',
    }}>
      {/* Header Bar */}
      <div style={{
        width: '100%',
        height: '61px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      }}>
        <button
          onClick={handleBack}
          data-testid="back-button"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            color: '#1C1917',
            padding: '8px 12px',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F5F5F4';
            e.currentTarget.style.transform = 'translateX(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.95)'; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = 'translateX(-2px)'; }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '33px 35px 40px 141px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>

        {/* Left Content */}
        <div style={{
        //   flex: 1,
          width: '739px',
          flexShrink: '0',
        //   minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>
          {/* Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h1 style={{
              fontSize: '64px',
              fontWeight: '700',
              color: '#1C1917',
              margin: 0,
              lineHeight: '1.1',
            }}>
              Confirm Your Waste
            </h1>
            <p style={{ fontSize: '16px', color: '#78716C', margin: 0 }}>
              Review materials before scheduling pickup
            </p>
          </div>

          {/* EcoPoints Image */}
          <div style={{
            width: '100%',
            height: '142px',
            borderRadius: '20px',
            overflow: 'hidden',
            flexShrink: 0,
          }}>
            <Image
              src="https://customer-assets.emergentagent.com/job_33f30eda-18af-4403-99e4-544f4bab9945/artifacts/jmgwa7f3_Container%20%284%29.png"
              alt="Estimated EcoPoints"
              width={739}
              height={142}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Materials Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Materials Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#1C1917',
                margin: 0,
              }}>
                Materials
              </h2>
              <button
                onClick={handleEdit}
                data-testid="edit-button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '14px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F5F5F4'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4187 1.44775 12.6663 1.44775C12.914 1.44775 13.1592 1.49653 13.388 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17513 14.3137 2.383 14.4084 2.61178C14.5032 2.84055 14.552 3.08575 14.552 3.33337C14.552 3.58099 14.5032 3.82619 14.4084 4.05497C14.3137 4.28374 14.1748 4.49161 13.9997 4.66671L4.99967 13.6667L1.33301 14.6667L2.33301 11L11.333 2.00004Z" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: '14px', color: '#1C1917' }}>Edit</span>
              </button>
            </div>

            {/* Cardboard */}
            <div
              data-testid="material-cardboard"
              style={{
                width: '100%',
                height: '82px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  backgroundColor: '#FFE8C4', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 8L12 4L20 8V16L12 20L4 16V8Z" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 8L12 12L20 8" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V20" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6L16 10" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: '16px', color: '#1C1917', margin: 0 }}>Cardboard</p>
                  <p style={{ fontSize: '14px', color: '#78716C', margin: 0 }}>5 kg</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Image
                  src="https://customer-assets.emergentagent.com/job_33f30eda-18af-4403-99e4-544f4bab9945/artifacts/awuzabe4_Icon%20%285%29.png"
                  alt="Points" width={20} height={20}
                />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#10B981' }}>100</span>
              </div>
            </div>

            {/* Glass Bottles */}
            <div
              data-testid="material-glass-bottles"
              style={{
                width: '100%',
                height: '82px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  backgroundColor: '#FFE8C4', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  overflow: 'hidden', flexShrink: 0,
                }}>
                  <Image
                    src="https://customer-assets.emergentagent.com/job_33f30eda-18af-4403-99e4-544f4bab9945/artifacts/8l0kjay4_Icon%20%284%29.png"
                    alt="Glass" width={24} height={24} style={{ objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <p style={{ fontSize: '16px', color: '#1C1917', margin: 0 }}>Glass Bottles</p>
                  <p style={{ fontSize: '14px', color: '#78716C', margin: 0 }}>3.2 kg</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Image
                  src="https://customer-assets.emergentagent.com/job_33f30eda-18af-4403-99e4-544f4bab9945/artifacts/awuzabe4_Icon%20%285%29.png"
                  alt="Points" width={20} height={20}
                />
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#10B981' }}>80</span>
              </div>
            </div>
          </div>

          {/* Note */}
          <div style={{
            width: '100%',
            backgroundColor: '#EFF6FF',
            borderRadius: '12px',
            border: '1px solid #BEDBFF',
            padding: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            boxSizing: 'border-box',
          }}>
            <span style={{ fontSize: '16px', fontWeight: '700', color: '#1C398E' }}>Note:</span>
            <span style={{ fontSize: '16px', color: '#1C398E' }}>
              Final points may vary based on actual weight and quality verified by the collector.
            </span>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinueToLocation}
            data-testid="continue-to-location-btn"
            style={{
              width: '739px',
              height: '40px',
              backgroundColor: '#176B29',
              borderRadius: '14px',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: 'Arimo, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#145A22';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#176B29';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.99)'; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
          >
            Continue to Location
          </button>
        </div>

        {/* Right - Progress + Expected Outcome */}
        <div style={{
          width: '336px',
          flexShrink: 0,
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '24px',
          boxSizing: 'border-box',
        }}>
          {/* Progress */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1C1917', margin: '0 0 16px 0' }}>
              Progress
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {progressSteps.map((step) => (
                <div
                  key={step.number}
                  onClick={() => handleProgressClick(step.number)}
                  data-testid={`progress-step-${step.number}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    cursor: step.number <= 3 ? 'pointer' : 'default',
                    padding: '4px', borderRadius: '8px',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (step.number <= 3) e.currentTarget.style.backgroundColor = '#F0FDF4';
                  }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                    backgroundColor: step.completed ? '#10B981' : (step.active ? '#FFF8F3' : '#F5F5F4'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {step.completed ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <span style={{ fontSize: '14px', fontWeight: '500', color: step.active ? '#1C1917' : '#78716C' }}>
                        {step.number}
                      </span>
                    )}
                  </div>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: step.completed ? '600' : (step.active ? '700' : '400'),
                    color: step.completed ? '#10B981' : (step.active ? '#1C1917' : '#78716C'),
                  }}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Outcome */}
          <div
            onClick={handleContinueToLocation}
            data-testid="expected-outcome-container"
            style={{
              width: '100%',
              backgroundColor: 'rgba(249, 115, 22, 0.05)',
              borderRadius: '12px',
              border: '1px solid #F97316',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(249, 115, 22, 0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(249, 115, 22, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1C1917', margin: 0 }}>
              Expected Outcome
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', color: '#78716C' }}>Estimated Points:</span>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#F97316' }}>305</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', color: '#78716C' }}>Total Weight:</span>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#1C1917' }}>10.7 kg</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', color: '#78716C' }}>Materials:</span>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#1C1917' }}>3 types</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AIClassificationPage() {
  const router = useRouter();

  const classificationResults = [
    { name: 'Plastic Bottles', items: '15 items', confidence: '95%' },
    { name: 'Cardboard', items: '3 items', confidence: '92%' },
    { name: 'Glass Bottles', items: '5 items', confidence: '88%' },
  ];

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
  const handleConfirmContinue = () => router.push('/pickup/location');
  const handleRetakePhoto = () => router.push('/pickup/capture');

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
      {/* Back Button Bar */}
      <div style={{
        width: '100%',
        maxWidth: '1440px',
        height: '61px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        padding: '0 64px',
        margin: '0 auto',
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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '40px 64px',
      }}>
        {/* Title */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '700',
            color: '#1C1917',
            margin: '0 0 8px 0',
            lineHeight: '80px',
          }}>
            AI classification
          </h1>
          <p style={{ fontSize: '16px', color: '#78716C', margin: 0 }}>
            Ensure your picture is clear for the AI to classify well
          </p>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'flex', gap: '24px' }}>

          {/* Left - Waste Image */}
          <div style={{
            width: '513px',
            height: '524px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #000000',
            flexShrink: 0,
          }}>
            <Image
              src="https://customer-assets.emergentagent.com/job_33f30eda-18af-4403-99e4-544f4bab9945/artifacts/s0ic3r89_Rectangle%20107.png"
              alt="Waste Classification"
              width={513}
              height={524}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Right Section */}
          <div style={{ display: 'flex', gap: '0px', flex: 1 }}>

            {/* AI Classification + Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px' }}>

              {/* AI Classification Card */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                padding: '20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    backgroundColor: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '16px', fontWeight: '600', color: '#1C1917' }}>
                    AI Classification
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {classificationResults.map((item, index) => (
                    <div
                      key={index}
                      onClick={handleConfirmContinue}
                      data-testid={`classification-item-${index}`}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        cursor: 'pointer',
                        padding: '8px',
                        margin: '-8px',
                        borderRadius: '8px',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F0FDF4'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                    >
                      <div>
                        <p style={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px', color: '#1C1917', margin: '0 0 2px 0' }}>
                          {item.name}
                        </p>
                        <p style={{ fontSize: '12px', fontWeight: '400', lineHeight: '16px', color: '#78716C', margin: 0 }}>
                          {item.items}
                        </p>
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#10B981' }}>
                        {item.confidence}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={handleConfirmContinue}
                  data-testid="confirm-continue-btn"
                  style={{
                    width: '100%',
                    height: '48px',
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
                  onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; }}
                  onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                >
                  Confirm & Continue
                </button>

                <button
                  onClick={handleRetakePhoto}
                  data-testid="retake-photo-btn"
                  style={{
                    width: '100%',
                    height: '48px',
                    backgroundColor: '#FAFAF9',
                    borderRadius: '14px',
                    border: '1px solid #E7E5E4',
                    color: '#1C1917',
                    fontSize: '14px',
                    fontWeight: '400',
                    fontFamily: 'Arimo, sans-serif',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F5F5F4';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FAFAF9';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; }}
                  onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 2V6H10" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 14V10H6" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.0867 6.00001C12.6626 4.82755 11.8972 3.81049 10.8878 3.07933C9.87849 2.34817 8.67206 1.93591 7.42669 1.89531C6.18131 1.85471 4.95106 2.18751 3.89644 2.85073C2.84182 3.51395 2.0114 4.47695 1.51334 5.61334" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.91333 10C3.33743 11.1725 4.10283 12.1895 5.11222 12.9207C6.12162 13.6518 7.32805 14.0641 8.57342 14.1047C9.8188 14.1453 11.0491 13.8125 12.1037 13.1493C13.1583 12.4861 13.9887 11.5231 14.4867 10.3867" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Retake Photo
                </button>
              </div>
            </div>

            {/* Progress + Expected Outcome - Single White Frame */}
            <div style={{
              width: '385px',
              height: 'auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              flexShrink: 0,
              padding: '24px 25px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              overflow: 'hidden',
            }}>

              {/* Progress Section */}
              <div style={{ width: '100%' }}>
                <h2 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1C1917',
                  margin: '0 0 16px 0',
                }}>
                  Progress
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {progressSteps.map((step) => (
                    <div
                      key={step.number}
                      onClick={() => handleProgressClick(step.number)}
                      data-testid={`progress-step-${step.number}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: step.number <= 3 ? 'pointer' : 'default',
                        padding: '4px',
                        borderRadius: '8px',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (step.number <= 3) e.currentTarget.style.backgroundColor = '#F0FDF4';
                      }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                    >
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: step.completed ? '#10B981' : (step.active ? '#FFF8F3' : '#F5F5F4'),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
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
                onClick={handleConfirmContinue}
                data-testid="expected-outcome-container"
                style={{
                  width: '320px',
                  height: '166px',
                  backgroundColor: 'rgba(249, 115, 22, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid #F97316',
                  padding: '16px 16px 0px 16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '16px',
                  overflow: 'hidden',
                  flexShrink: 0,
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
      </div>
    </div>
  );
}
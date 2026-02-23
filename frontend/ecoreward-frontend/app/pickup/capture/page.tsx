'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CapturePhotoPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const progressSteps = [
    { number: 1, label: 'Get Started', completed: true },
    { number: 2, label: 'Sort Waste', completed: true },
    { number: 3, label: 'Capture Photo', active: true, completed: false },
    { number: 4, label: 'Review Summary', completed: false },
    { number: 5, label: 'Set Location', completed: false },
    { number: 6, label: 'Schedule Time', completed: false },
    { number: 7, label: 'Collector Assigned', completed: false },
    { number: 8, label: 'Verify Pickup', completed: false },
    { number: 9, label: 'Complete', completed: false },
  ];

  const handleBack = () => {
    router.back();
  };

  const handleCapturePhoto = () => {
    // In a real app, this would open camera
    // For now, simulate capture or navigate to next step
    router.push('/pickup/review');
  };

  const handleUploadFromGallery = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProgressClick = (stepNumber: number) => {
    if (stepNumber === 1 || stepNumber === 2) {
      router.push('/pickup/sort');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FFFDF5 0%, #FFFFFF 100%)',
      fontFamily: 'Arimo, sans-serif',
    }}>
      {/* Hidden file input for gallery upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {/* Header */}
      <div style={{
        padding: '40px 78px',
      }}>
        {/* Title Section */}
        <div style={{
          marginBottom: '24px',
        }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '700',
            color: '#1C1917',
            margin: '0 0 8px 0',
            fontFamily: 'Arimo, sans-serif',
            lineHeight: '80px',
          }}>
            Capture Your Waste
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#78716C',
            margin: 0,
          }}>
            Take a clear photo for AI classification
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 78px 40px 78px',
        gap: '40px',
      }}>
        {/* Left Side - How the AI Works Image */}
        <div style={{
          width: '500px',
          height: '733px',
          flexShrink: 0,
          borderRadius: '20px',
          overflow: 'hidden',
        }}>
          <Image
            src="https://customer-assets.emergentagent.com/job_33f30eda-18af-4403-99e4-544f4bab9945/artifacts/872h9hdk_Rectangle%20110.png"
            alt="How the AI Works"
            width={500}
            height={733}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        </div>
  {/* Middle Section - Camera Frame */}
        <div style={{
          width: '400px',
          height: '533px',
          backgroundColor: '#F5F5F4',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          overflow: 'hidden',
        }}>
          {/* Camera Preview Area - Takes remaining space and centers content */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            cursor: 'pointer',
          }}
          onClick={handleCapturePhoto}
          data-testid="camera-preview-area"
          >
            {capturedImage ? (
              <Image
                src={capturedImage}
                alt="Captured waste"
                width={360}
                height={360}
                style={{
                  borderRadius: '12px',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <>
                {/* Camera Icon - Clickable */}
                <div 
                  style={{
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#A8A29E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="13" r="4" stroke="#A8A29E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Position text */}
                <p style={{
                  fontSize: '16px',
                  color: '#78716C',
                  margin: 0,
                }}>
                  Position waste in frame
                </p>
              </>
            )}
          </div>

          {/* Buttons Container - Fixed at bottom */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '24px',
          }}>
            {/* Capture Photo Button */}
            <button
              onClick={handleCapturePhoto}
              data-testid="capture-photo-btn"
              style={{
                width: '100%',
                height: '48px',
                backgroundColor: '#176B29',
                borderRadius: '14px',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Arimo, sans-serif',
                lineHeight: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
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
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.98)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
            >
              {/* Camera Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="13" r="4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Capture Photo
            </button>

            {/* Upload from Gallery Button */}
            <button
              onClick={handleUploadFromGallery}
              data-testid="upload-from-gallery-btn"
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
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.98)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
            >
              Upload from Gallery
            </button>
          </div>
        </div>


        {/* Right Side - Progress Sidebar */}
        <div style={{
          width: '200px',
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          padding: '24px',
          flexShrink: 0,
          height: 'fit-content',
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1C1917',
            margin: '0 0 24px 0',
          }}>
            Progress
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            {progressSteps.map((step) => (
              <div
                key={step.number}
                onClick={() => handleProgressClick(step.number)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: step.number <= 2 ? 'pointer' : 'default',
                  padding: '4px',
                  borderRadius: '8px',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (step.number <= 2) {
                    e.currentTarget.style.backgroundColor = '#F0FDF4';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                data-testid={`progress-step-${step.number}`}
              >
                {/* Step Number/Checkmark */}
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: step.completed 
                    ? '#10B981' 
                    : (step.active ? '#FFF8F3' : '#F5F5F4'),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                }}>
                  {step.completed ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#78716C',
                    }}>
                      {step.number}
                    </span>
                  )}
                </div>

                {/* Step Label */}
                <span style={{
                  fontSize: '14px',
                  fontWeight: step.completed ? '600' : '400',
                  color: step.completed ? '#10B981' : '#78716C',
                }}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SortingChecklistPage() {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false]);

  const checklistItems = [
    'Separate plastics, paper, glass, and metals',
    'Rinse containers to remove food residue',
    'Remove caps and labels from bottles',
    'Flatten cardboard boxes to save space',
  ];

  const progressSteps = [
    { number: 1, label: 'Get Started', active: true, completed: true },
    { number: 2, label: 'Sort Waste', active: true, completed: false },
    { number: 3, label: 'Capture Photo', active: false, completed: false },
    { number: 4, label: 'Review Summary', active: false, completed: false },
    { number: 5, label: 'Set Location', active: false, completed: false },
    { number: 6, label: 'Schedule Time', active: false, completed: false },
    { number: 7, label: 'Collector Assigned', active: false, completed: false },
    { number: 8, label: 'Verify Pickup', active: false, completed: false },
    { number: 9, label: 'Complete', active: false, completed: false },
  ];

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleGetStartedClick = () => {
    setCheckedItems([true, true, true, true]);
  };

  // ✅ Back button - goes to Location Page (partner's page)
  const handleBack = () => {
    router.push('/pickup/location');
  };

  // ✅ Continue to Capture - already correct
  const handleContinue = () => {
    router.push('/pickup/capture');
  };

  const handleSkip = () => {
    router.push('/pickup/capture');
  };

  const allChecked = checkedItems.every(item => item === true);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'linear-gradient(180deg, #FEF9EB 0%, #FFE48C 100%)',
      fontFamily: 'Arimo, sans-serif',
    }}>
      {/* Back Button */}
      <div style={{
        padding: '24px 32px',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <button
          onClick={handleBack}
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
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F5F4'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '40px 32px',
        gap: '40px',
      }}>
        {/* Left Side - Sorting Tips Image */}
        <div style={{
          width: '528px',
          height: '639px',
          flexShrink: 0,
          borderRadius: '20px',
          overflow: 'hidden',
        }}>
          <Image
            src="https://customer-assets.emergentagent.com/job_33f30eda-18af-4403-99e4-544f4bab9945/artifacts/y8iijpku_image.png"
            alt="Sorting Tips"
            width={528}
            height={639}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Middle Section */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>
          {/* Title Section */}
          <div style={{ marginBottom: '8px' }}>
            <h1 style={{
              fontSize: '40px',
              fontWeight: '700',
              color: '#1C1917',
              margin: '0 0 8px 0',
              fontFamily: 'Arimo, sans-serif',
            }}>
              Sort Your Waste
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#78716C',
              margin: 0,
            }}>
              Properly sorted waste earns you more EcoPoints!
            </p>
          </div>

          {/* Sorting Checklist Card */}
          <div style={{
            width: '512px',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            padding: '24px',
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1C1917',
              margin: '0 0 20px 0',
            }}>
              Sorting Checklist
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              {checklistItems.map((item, index) => (
                <label
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    onClick={() => handleCheckboxChange(index)}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: checkedItems[index] ? 'none' : '2px solid #D6D3D1',
                      backgroundColor: checkedItems[index] ? '#10B981' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                    }}
                  >
                    {checkedItems[index] && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <span style={{
                    fontSize: '16px',
                    color: '#57534E',
                  }}>
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Tip Box */}
          <div style={{
            width: '512px',
            height: '74px',
            backgroundColor: '#E9EFFD',
            borderRadius: '20px',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <p style={{
              fontSize: '16px',
              fontFamily: 'Arimo, sans-serif',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#1756E0',
              margin: 0,
            }}>
              Tip: Clean and sorted waste can earn you up to 20% more points!
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{
            width: '512px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            <button
              onClick={handleContinue}
              style={{
                width: '100%',
                height: '48px',
                backgroundColor: '#176B29',
                opacity: allChecked ? 1 : 0.5,
                borderRadius: '14px',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: 'Arimo, sans-serif',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease, transform 0.1s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = allChecked ? '0.9' : '0.6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = allChecked ? '1' : '0.5';
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Continue to Capture
            </button>

            <button
              onClick={handleSkip}
              style={{
                width: '100%',
                height: '36px',
                backgroundColor: '#FAFAF9',
                borderRadius: '14px',
                border: 'none',
                color: '#1C1917',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Arimo, sans-serif',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease, transform 0.1s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F5F4'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FAFAF9'}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Skip for Now
            </button>
          </div>
        </div>

        {/* Right Side - Progress Sidebar */}
        <div style={{
          width: '259px',
          height: '551px',
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          padding: '24px',
          flexShrink: 0,
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
                onClick={step.number === 1 ? handleGetStartedClick : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: step.number === 1 ? 'pointer' : 'default',
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: step.completed ? '#10B981' : (step.number === 2 ? '#FFF8F3' : '#F5F5F4'),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
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
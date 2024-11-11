import React from 'react';

interface ServiceMetricProps {
  percentage: number;
  title: string;
  service: string;
  color: string;
}

const ServiceMetric: React.FC<ServiceMetricProps> = ({ percentage, title, service, color }) => {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-24 h-24"> {/* Reduced from w-32 h-32 */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48" // Adjusted from 64
            cy="48" // Adjusted from 64
            r="40" // Adjusted from 45
            className="stroke-gray-200"
            strokeWidth="6" // Reduced from 8
            fill="none"
          />
          <circle
            cx="48" // Adjusted from 64
            cy="48" // Adjusted from 64
            r="40" // Adjusted from 45
            className={color}
            strokeWidth="6" // Reduced from 8
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              transition: 'stroke-dashoffset 0.5s ease-in-out',
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">{percentage}%</span> {/* Reduced from text-2xl */}
        </div>
      </div>
      <div className="text-center space-y-0.5"> {/* Reduced from space-y-1 */}
        <h3 className="text-pink-500 font-medium text-sm">{title}</h3> {/* Added text-sm */}
        <p className={`font-medium text-sm ${color.includes('green') ? 'text-green-500' : 
          color.includes('yellow') ? 'text-yellow-500' : 
          color.includes('blue') ? 'text-blue-500' : 'text-pink-500'}`}>
          {service}
        </p>
      </div>
    </div>
  );
};

const ServiceMetrics = () => {
  const services = [
    {
      percentage: 70,
      title: 'Our Services',
      service: 'Web Development',
      color: 'stroke-green-500',
    },
    {
      percentage: 75,
      title: 'Our Services',
      service: 'Google Analytics',
      color: 'stroke-yellow-500',
    },
    {
      percentage: 80,
      title: 'Our Services',
      service: 'Competition Metrics',
      color: 'stroke-pink-500',
    },
    {
      percentage: 65,
      title: 'Our Services',
      service: 'App Development',
      color: 'stroke-blue-500',
    },
  ];

  return (
    <div className="bg-white p-4 mt-8"> {/* Reduced padding and removed min-h-screen */}
      <div className="max-w-4xl mx-auto"> {/* Reduced from max-w-6xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Reduced gap from 8 to 4 */}
          {services.map((service, index) => (
            <ServiceMetric key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMetrics;
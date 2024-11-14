import Link from 'next/link';
import Navbar from '../components/Navbar';
import AboutUsHeader from '../components/OtherComponents/Header';

interface ServiceCardProps {
    title: string;
    icon: string;
}

const services = [
    { title: "School Management", icon: "🏫",},
    { title: "GST Billing Software", icon: "📝",},
    { title: "Lead Management Software", icon: "📊",},
    { title: "Patient Management", icon: "👨‍⚕️",},
    { title: "Job Portal", icon: "👔", },
    { title: "Human Resource HRM", icon: "👥", },
    { title: "Institute Management", icon: "🏛️",  },
    { title: "Online Exam", icon: "📝", },
    { title: "Car Booking", icon: "🚗",  },
    { title: "Saloon Booking", icon: "💇",  },
    { title: "News Portal", icon: "📰",  },
    { title: "Tours And Travels", icon: "✈️",  },
    { title: "Courier Management", icon: "📦",  },
    { title: "Restaurant POS", icon: "🍽️",  },
    { title: "Election Portal", icon: "🗳️",  },
    { title: "Hospital Management", icon: "🏥",  },
    { title: "Hotel Management", icon: "🏨",  },
    { title: "Pharma Billing", icon: "💊",  },
    { title: "Event Management", icon: "🎪",  },
    { title: "College Management", icon: "🎓", },
    { title: "Music Portal", icon: "🎵", },
    { title: "Library Management", icon: "📚", },
    { title: "Coaching Management", icon: "👨‍🏫", },
    { title: "Car Pooling", icon: "🚗", },
    { title: "Transport Management", icon: "🚌", },
    { title: "Apartment Management", icon: "🏢", },
    { title: "Astrology Services", icon: "🔮", },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon }) => {
    return (
        <Link href={"#"} passHref>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-sm font-medium text-gray-900">{title}</h3>
                <p className="mt-2 text-xs text-purple-600">Demo</p>
            </div>
        </Link>
    );
};

export default function Home() {
    return (
        <>
            <Navbar />
            <AboutUsHeader 
                title="Home"
                breadcrumbText="Our Solutions"
            />
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                icon={service.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

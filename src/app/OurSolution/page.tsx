import Link from 'next/link';
import Navbar from '../components/Navbar';
import AboutUsHeader from '../components/OtherComponents/Header';

interface ServiceCardProps {
    title: string;
    icon: string;
    link: string;
}

const services = [
    { title: "School Management", icon: "🏫", link: "/demo/school-management" },
    { title: "GST Billing Software", icon: "📝", link: "/demo/gst-billing" },
    { title: "Lead Management Software", icon: "📊", link: "/demo/lead-management" },
    { title: "Patient Management", icon: "👨‍⚕️", link: "/demo/patient-management" },
    { title: "Job Portal", icon: "👔", link: "/demo/job-portal" },
    { title: "Human Resource HRM", icon: "👥", link: "/demo/hrm" },
    { title: "Institute Management", icon: "🏛️", link: "/demo/institute-management" },
    { title: "Online Exam", icon: "📝", link: "/demo/online-exam" },
    { title: "Car Booking", icon: "🚗", link: "/demo/car-booking" },
    { title: "Saloon Booking", icon: "💇", link: "/demo/saloon-booking" },
    { title: "News Portal", icon: "📰", link: "/demo/news-portal" },
    { title: "Tours And Travels", icon: "✈️", link: "/demo/tours-travels" },
    { title: "Courier Management", icon: "📦", link: "/demo/courier-management" },
    { title: "Restaurant POS", icon: "🍽️", link: "/demo/restaurant-pos" },
    { title: "Election Portal", icon: "🗳️", link: "/demo/election-portal" },
    { title: "Hospital Management", icon: "🏥", link: "/demo/hospital-management" },
    { title: "Hotel Management", icon: "🏨", link: "/demo/hotel-management" },
    { title: "Pharma Billing", icon: "💊", link: "/demo/pharma-billing" },
    { title: "Event Management", icon: "🎪", link: "/demo/event-management" },
    { title: "College Management", icon: "🎓", link: "/demo/college-management" },
    { title: "Music Portal", icon: "🎵", link: "/demo/music-portal" },
    { title: "Library Management", icon: "📚", link: "/demo/library-management" },
    { title: "Coaching Management", icon: "👨‍🏫", link: "/demo/coaching-management" },
    { title: "Car Pooling", icon: "🚗", link: "/demo/car-pooling" },
    { title: "Transport Management", icon: "🚌", link: "/demo/transport-management" },
    { title: "Apartment Management", icon: "🏢", link: "/demo/apartment-management" },
    { title: "Astrology Services", icon: "🔮", link: "/demo/astrology-services" },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, link }) => {
    return (
        <Link href={link} passHref>
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
                                link={service.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';
interface TeamMemberProps {
  name: string;
  title: string;
  quote: string;
  imageUrl: string;
  Linkedinurl:string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, quote, imageUrl , Linkedinurl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center h-full">
      {/* Image container with fixed aspect ratio */}
      <div className="w-48 h-48 mb-4 overflow-hidden rounded-lg">
        <Image 
        src={imageUrl}
        alt={name}
        width={400}
        height={400}
        className='object-cover'
        />
      </div>
      
      {/* Content container */}
      <div className="flex flex-col items-center flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{title}</p>
        
        {/* Quote with fixed height */}
        <p className="text-gray-700 text-center mb-6 h-24 overflow-hidden">
          {quote}
        </p>
        
        {/* Social links */}
        <div className="flex space-x-4 mt-auto">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <Facebook size={20} />
          </a>
          <a href={Linkedinurl} className="text-gray-600 hover:text-blue-600">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamGrid = () => {
  const teamMembers = [
    {
      name: "Mr. Harsh Saini",
      title: "Operations Head",
      quote: "Content is King but engagement is Queen, and the lady rules the house!",
      imageUrl: "/images/HarshSainiOperation.jpg",
      Linkedinurl : "https://www.linkedin.com/in/harsh-saini-46a12a2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Mr. Yash Saini",
      title: "Business Manager",
      quote: "Try not to become a man of success. Rather become a man of value.",
      imageUrl: "/images/YashSaini.jpg",
      Linkedinurl :"https://www.linkedin.com/in/yash-saini-259ba81b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEfkOM1m%2BSVaJi7Uwnyb18g%3D%3D"
    },
    {
      name: "Mr. Harsh Saini",
      title: "Marketing Manager",
      quote: "Success is walking from failure to failure with no loss of enthusiasm.",
      imageUrl: "/images/HarshSainiMarketing.jpg",
      Linkedinurl : "#"
    },
    {
      name: "Mr. Pratyaksh",
      title: "Website Development",
      quote: "Tradition becomes our security, and when the mind is secure it is in decay.",
      imageUrl: "/api/placeholder/300/300",
      Linkedinurl : "#"
    }
  ];

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              {...member}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
import Image from 'next/image';
import React from 'react';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  facebookLink: string;
  linkedinLink: string;
  instagramLink: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "John Doe",
      position: "Project Manager",
      image: "https://via.placeholder.com/150",
      facebookLink: "https://www.facebook.com/johndoe",
      linkedinLink: "https://www.linkedin.com/in/johndoe",
      instagramLink: "https://www.instagram.com/johndoe"
    },
    {
      name: "Jane Smith",
      position: "Architect",
      image: "https://via.placeholder.com/150",
      facebookLink: "https://www.facebook.com/janesmith",
      linkedinLink: "https://www.linkedin.com/in/janesmith",
      instagramLink: "https://www.instagram.com/janesmith"
    },
    {
      name: "Mike Johnson",
      position: "Construction Supervisor",
      image: "https://via.placeholder.com/150",
      facebookLink: "https://www.facebook.com/mikejohnson",
      linkedinLink: "https://www.linkedin.com/in/mikejohnson",
      instagramLink: "https://www.instagram.com/mikejohnson"
    }
  ];

  return (
    <div className="flex flex-col items-center min-h-[50vh] py-20 mb-20">
      <h2 className="text-5xl uppercase font-thin mb-4 text-center text-primary-gray">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 py-10">
      {teamMembers.map((member, index) => (
        <div key={index} className="p-6 rounded-lg flex flex-col items-center text-primary-gray ">
          <div className="mb-4">
          <Image src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 items-center">{member.name}</h3>
          <p className="mb-4 items-center">{member.position}</p>
          <div className="flex space-x-4 ">
            <a href={member.facebookLink} target="_blank" rel="noopener noreferrer" className=" hover:text-primary-red ">
              facebbok
            </a>
            <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer" className=" hover:text-primary-red">
              linkedin
            </a>
            <a href={member.instagramLink} target="_blank" rel="noopener noreferrer" className=" hover:text-primary-red">
              instagram
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Team;

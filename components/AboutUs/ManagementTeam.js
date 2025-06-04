import Image from 'next/image';
import React from 'react';

const ManagementTeamData = [{
  image: "/assets/ManagementTeam/Shyam-Chodankar.png",
  name: "Mr. Shyam Chodankar",
  role: "Managing Director",
  description: ["Shyam brings over 20 years of deep domain expertise in supply chain consulting and operations management, with a strong focus on the petrochemical, paints, and chemical sectors. Having worked at a senior level with global consulting firms, he has led the implementation of lean manufacturing practices, driving measurable efficiencies across production and procurement cycles.", "His strategic approach to cost optimization, vendor management, and process automation has helped transform supply chains for several large-scale industrial clients in India. With hands-on experience in procurement reengineering, Mr. Chodankar ensures MARCEL CHEMICALS operates with agility, precision, and cost leadership in a highly competitive market.", "His vision and executional depth make him an integral force behind the company’s drive for operational excellence and sustainable growth."],
},
{
  image: "/assets/ManagementTeam/Kaustubh-Hulyalkar.png",
  name: "Mr. Kaustubh Hulyalkar",
  role: "Director",
  description: ["With extensive experience in the global infrastructure sector, Mr. Hulyalkar has worked with top-tier USA-based consulting firms, contributing to the design and execution of large-scale civil and urban development projects. He has played a key role in mega infrastructure initiatives such as Mumbai-Nagpur Samruddhi Mahamarg under MSRDC (Maharashtra State Road Development Corporation), bringing technical and strategic excellence to the public infrastructure space.", "His cross-continental experience and deep industry insight have positioned him as a visionary leader steering MARCEL CHEMICALS toward scalable growth and operational excellence."],
},
{
  image: "/assets/ManagementTeam/Default-Avatar.png",
  name: "Mr. Mukund Hulyalkar",
  role: "Technical Advisor",
  description: ["Mr.Hulyalkar helping as the Technical Advisor to Marcel Paints, bringing with him decades of specialized expertise in the paints and coatings industry. He also holds the prestigious position of Honorary Secretary of the Indian Small Scale Paint Association (ISSPA), reflecting his deep-rooted involvement and leadership within the industry.", "With over 40 years of experience, Mr. Hulyalkar plays a crucial role in guiding Marcel Paints’ technical direction—overseeing product innovation, quality control, and formulation strategies.", "As a highly respected voice in the industry, Mr. Hulyalkar ensures that Marcel Paints remains aligned with both national and international standards, while also staying ahead of emerging market trends. His role as Technical Advisor strengthens the company’s foundation in R&D, sustainable practices, and manufacturing efficiency, helping Marcel Paints deliver trusted, innovative, and performance-driven products to its customers."],
},
{
  image: "/assets/ManagementTeam/Default-Avatar.png",
  name: "Dr. Sunil Tembe",
  role: "Technical Lead",
  description: ["Doctorate in Organic Chemistry from Mumbai University with an experience in Sale & marketing over 25 Years in Paints and Coating Industries", "Strong Techno-commercial background of Research and Technical Service in Sales and Marketing Field with thrust in Concept selling. Expertise as team leader for managing the operations by ensuring the optimal utilization of resources and technology", "Worked on International Projects in various countries- Australia, Oman, Kuwait, Saudi Arabia, UAE, Israel, China, Nepal and various Projects in India Viz: Oil and Gas, Water Pipelines, Water Treatment, Sewage and Effluent, Aviation tanks, and various market sectors", "Ex: - Shalimar Paints, Sigma Coatings, Tyco Adhesives, Akzo Nobel, NJS, Carboline, and Cleancoats HPC"],
},
];

function ManagementTeam() {
  return (
    <div className='flex flex-col items-center justify-center gap-[1.5rem] mx-[1rem] my-[1.5rem] sm:mx-[2.625rem] sm:my-[3.125rem]'>
      {/* Title */}
      <h2 className='text-[1.5rem] sm:text-[2.625rem] font-semibold text-gradient mb-[2.5rem] sm:mb-[5rem]'>Management Team</h2>

      {/* Management Team Members */}
      {ManagementTeamData.map((member, index) => (
        <div key={index} className={`flex ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-col items-center w-full rounded-3xl overflow-hidden bg-[#FFFFFF] shadow-lg text-[#232323]`}>
          <Image src={member.image} alt={member.name} width={360} height={522} className='w-[100%] h-auto sm:w-[22.5rem] sm:h-[32.625rem]' />
          <div className='px-[1rem] py-[1rem] sm:px-[3.875rem] sm:py-auto flex flex-col gap-3'>
            <div>
              <h2 className='text-[1.25rem] sm:text-[1.5rem] font-semibold'>{member.name}</h2>
              <p className='text-[1rem] sm:text-[1.125rem] font-normal'>{member.role}</p>
            </div>
            <div className='space-y-2'>
              {member.description.map((desc, index) => (
                <p key={index} className='text-[1rem] sm:text-[1.125rem] font-normal'>{desc}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ManagementTeam

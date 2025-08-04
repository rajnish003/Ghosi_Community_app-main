import React from 'react';
import { FaBriefcase, FaUsers, FaChartLine, FaLightbulb, FaHandshake, FaGraduationCap } from 'react-icons/fa';
import { MdWork, MdBusinessCenter, MdTrendingUp, MdSchool } from 'react-icons/md';

const Career = () => {
  const careerOpportunities = [
    {
      id: 1,
      title: "Government Jobs",
      description: "Opportunities in various government departments and public sector organizations.",
      icon: <MdWork className="text-4xl text-blue-600" />,
      positions: ["IAS/IPS Officers", "Banking Sector", "Teaching Positions", "Administrative Roles"],
      requirements: ["Educational qualifications", "Age criteria", "Written examinations", "Interview process"]
    },
    {
      id: 2,
      title: "Private Sector Careers",
      description: "Diverse opportunities in corporate sector, IT, healthcare, and other industries.",
      icon: <FaBriefcase className="text-4xl text-green-600" />,
      positions: ["Software Development", "Business Management", "Healthcare", "Finance & Banking"],
      requirements: ["Relevant degree", "Technical skills", "Experience", "Soft skills"]
    },
    {
      id: 3,
      title: "Entrepreneurship",
      description: "Support for community members to start their own businesses and ventures.",
      icon: <MdBusinessCenter className="text-4xl text-purple-600" />,
      positions: ["Dairy Business", "Agriculture", "Small Enterprises", "Service Sector"],
      requirements: ["Business plan", "Financial resources", "Market research", "Networking"]
    },
    {
      id: 4,
      title: "Traditional Occupations",
      description: "Modern approaches to traditional Ghosi community occupations.",
      icon: <FaHandshake className="text-4xl text-orange-600" />,
      positions: ["Dairy Farming", "Cattle Rearing", "Agricultural Business", "Food Processing"],
      requirements: ["Traditional knowledge", "Modern techniques", "Market access", "Quality standards"]
    }
  ];

  const careerServices = [
    {
      title: "Career Counseling",
      description: "Professional guidance to help you choose the right career path based on your interests and skills.",
      icon: <FaLightbulb className="text-3xl text-yellow-500" />
    },
    {
      title: "Skill Development",
      description: "Training programs to enhance your professional skills and increase employability.",
      icon: <FaGraduationCap className="text-3xl text-blue-500" />
    },
    {
      title: "Job Placement",
      description: "Direct assistance in finding suitable job opportunities and connecting with employers.",
      icon: <FaHandshake className="text-3xl text-green-500" />
    },
    {
      title: "Networking Events",
      description: "Regular events to connect with professionals and expand your professional network.",
      icon: <FaUsers className="text-3xl text-purple-500" />
    }
  ];

  const successProfiles = [
    {
      name: "Dr. Sarah Khan",
      position: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      story: "Started as a computer science graduate, now leading development teams and mentoring junior developers.",
      image: "/image/shahbazImg.jpg"
    },
    {
      name: "Ahmed Hassan",
      position: "Dairy Business Owner",
      company: "Green Valley Dairy",
      story: "Transformed traditional dairy farming into a modern, profitable business with 50+ employees.",
      image: "/image/afaqImg.jpg"
    },
    {
      name: "Fatima Ali",
      position: "Bank Manager",
      company: "State Bank of India",
      story: "First woman from the community to reach senior management position in banking sector.",
      image: "/image/sakil_ahmad.jpg"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <FaBriefcase className="text-6xl text-yellow-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Career Opportunities
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Building successful careers and professional growth for the Ghosi community
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300">1000+</div>
              <div className="text-sm">Jobs Placed</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300">200+</div>
              <div className="text-sm">Companies Partnered</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300">85%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Career Development Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            We are committed to creating pathways for professional success and economic empowerment within the 
            Ghosi community. Our comprehensive career development programs connect talented individuals with 
            opportunities that match their skills and aspirations, while preserving our cultural values and 
            traditional knowledge.
          </p>
        </div>

        {/* Career Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Career Opportunities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careerOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {opportunity.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-3">{opportunity.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Available Positions:</h4>
                  <ul className="space-y-1">
                    {opportunity.positions.map((position, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {position}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {opportunity.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Career Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Profiles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Success Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successProfiles.map((profile, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-600 flex items-center justify-center">
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{profile.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{profile.position}</p>
                  <p className="text-gray-500 text-sm mb-3">{profile.company}</p>
                  <p className="text-gray-600 text-sm">{profile.story}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-6 opacity-90">
            Explore opportunities and take the next step in your professional journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Jobs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Get Career Advice
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career; 
// import React from 'react';
import { FaGraduationCap, FaLaptop } from 'react-icons/fa';
import { MdSchool, MdComputer } from 'react-icons/md';

const Education = () => {
  const educationalPrograms = [
    {
      id: 1,
      title: "Primary Education Support",
      description: "Supporting children from the Ghosi community to access quality primary education with scholarships and resources.",
      icon: <MdSchool className="text-4xl text-blue-600" />,
      features: ["Free textbooks", "School supplies", "Transportation assistance", "Tutoring programs"]
    },
    {
      id: 2,
      title: "Higher Education Scholarships",
      description: "Comprehensive scholarship programs for undergraduate and postgraduate studies in various fields.",
      icon: <FaGraduationCap className="text-4xl text-green-600" />,
      features: ["Merit-based scholarships", "Need-based assistance", "Study abroad opportunities", "Research grants"]
    },
    {
      id: 3,
      title: "Technical & Vocational Training",
      description: "Skill development programs focusing on technical education and vocational training for better employment opportunities.",
      icon: <FaLaptop className="text-4xl text-purple-600" />,
      features: ["Computer training", "Technical skills", "Certification programs", "Industry partnerships"]
    },
    {
      id: 4,
      title: "Digital Literacy Programs",
      description: "Modern education initiatives to bridge the digital divide and prepare community members for the digital age.",
      icon: <MdComputer className="text-4xl text-orange-600" />,
      features: ["Computer basics", "Internet skills", "Digital tools", "Online learning platforms"]
    }
  ];

  const successStories = [
    {
      name: "Ahmad Khan",
      achievement: "Completed Computer Science Engineering",
      story: "From a small village to becoming a software engineer at a leading tech company.",
      image: "/image/shahbazImg.jpg"
    },
    {
      name: "Fatima Begum",
      achievement: "Masters in Business Administration",
      story: "First woman from her family to pursue higher education, now working as a business analyst.",
      image: "/image/afaqImg.jpg"
    },
    {
      name: "Mohammad Ali",
      achievement: "PhD in Agricultural Sciences",
      story: "Researching sustainable farming methods to help improve community agricultural practices.",
      image: "/image/sakil_ahmad.jpg"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <FaGraduationCap className="text-6xl text-yellow-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Education for Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Empowering the Ghosi community through quality education and lifelong learning
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300">500+</div>
              <div className="text-sm">Students Supported</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300">50+</div>
              <div className="text-sm">Educational Programs</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-300">95%</div>
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
            Our Educational Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            We believe that education is the cornerstone of community development. Our comprehensive educational 
            programs are designed to provide equal opportunities for all members of the Ghosi community, 
            regardless of their economic background. Through quality education, we aim to create future leaders, 
            innovators, and responsible citizens who will contribute positively to society.
          </p>
        </div>

        {/* Educational Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Educational Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {educationalPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {program.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-3">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{story.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{story.achievement}</p>
                  <p className="text-gray-600 text-sm">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join our educational programs and unlock your potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education; 
import React from 'react';
import { FaGraduationCap, FaAward, FaHandshake, FaUsers, FaChartLine, FaLightbulb } from 'react-icons/fa';
import { MdSchool, MdLibraryBooks, MdComputer, MdPayment } from 'react-icons/md';

const Scholarship = () => {
  const scholarshipTypes = [
    {
      id: 1,
      title: "Merit-Based Scholarships",
      description: "Scholarships awarded based on academic excellence and outstanding achievements.",
      icon: <FaAward className="text-4xl text-gold-600" />,
      amount: "₹50,000 - ₹2,00,000",
      criteria: ["Minimum 85% in previous academic year", "Outstanding academic record", "Leadership qualities", "Community service"],
      benefits: ["Full tuition fee coverage", "Monthly stipend", "Book allowance", "Mentorship program"]
    },
    {
      id: 2,
      title: "Need-Based Scholarships",
      description: "Financial assistance for students from economically disadvantaged backgrounds.",
      icon: <MdPayment className="text-4xl text-green-600" />,
      amount: "₹25,000 - ₹1,50,000",
      criteria: ["Family income below ₹5 lakhs annually", "Demonstrated financial need", "Good academic standing", "Community recommendation"],
      benefits: ["Partial to full fee coverage", "Transportation allowance", "Study material support", "Career counseling"]
    },
    {
      id: 3,
      title: "Technical Education Scholarships",
      description: "Special scholarships for students pursuing technical and engineering courses.",
      icon: <MdComputer className="text-4xl text-blue-600" />,
      amount: "₹75,000 - ₹3,00,000",
      criteria: ["Enrolled in technical courses", "Strong mathematics background", "Innovation projects", "Industry interest"],
      benefits: ["Course fee coverage", "Laptop/equipment allowance", "Industry internships", "Technical workshops"]
    },
    {
      id: 4,
      title: "Girl Child Education Scholarships",
      description: "Dedicated scholarships to promote education among girls in the community.",
      icon: <FaGraduationCap className="text-4xl text-pink-600" />,
      amount: "₹30,000 - ₹2,00,000",
      criteria: ["Female students only", "Academic excellence", "Family support", "Career aspirations"],
      benefits: ["Complete educational support", "Skill development programs", "Women leadership training", "Mentorship network"]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Application Submission",
      description: "Complete the online application form with all required documents and information.",
      icon: <MdLibraryBooks className="text-3xl text-blue-500" />
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Submit supporting documents including academic records, income certificates, and recommendations.",
      icon: <FaHandshake className="text-3xl text-green-500" />
    },
    {
      step: 3,
      title: "Interview Process",
      description: "Participate in a personal interview to assess motivation, goals, and community commitment.",
      icon: <FaUsers className="text-3xl text-purple-500" />
    },
    {
      step: 4,
      title: "Final Selection",
      description: "Receive notification of scholarship award and begin the disbursement process.",
      icon: <FaAward className="text-3xl text-gold-500" />
    }
  ];

  const successStories = [
    {
      name: "Aisha Khan",
      course: "Computer Science Engineering",
      university: "IIT Delhi",
      story: "Received full scholarship covering tuition and living expenses. Now working as a software engineer at Google.",
      image: "/image/shahbazImg.jpg",
      year: "2023"
    },
    {
      name: "Rahul Ahmad",
      course: "Medical Sciences",
      university: "AIIMS Delhi",
      story: "Merit-based scholarship recipient who is now pursuing specialization in cardiology.",
      image: "/image/afaqImg.jpg",
      year: "2022"
    },
    {
      name: "Fatima Hassan",
      course: "Business Administration",
      university: "Delhi University",
      story: "First generation college student who received need-based scholarship and now runs her own business.",
      image: "/image/sakil_ahmad.jpg",
      year: "2023"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gold-50 to-yellow-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gold-600 via-yellow-600 to-orange-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <FaGraduationCap className="text-6xl text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Scholarship Programs
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Empowering education through comprehensive scholarship opportunities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white">₹2.5 Cr+</div>
              <div className="text-sm">Total Scholarships Awarded</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm">Students Supported</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white">95%</div>
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
            Our Scholarship Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            We believe that financial constraints should never be a barrier to quality education. Our comprehensive 
            scholarship programs are designed to support talented students from the Ghosi community, enabling them 
            to pursue their educational dreams and contribute to the development of our community and society.
          </p>
        </div>

        {/* Scholarship Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Scholarship Types
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {scholarshipTypes.map((scholarship) => (
              <div key={scholarship.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {scholarship.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-3">{scholarship.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{scholarship.description}</p>
                <div className="bg-gradient-to-r from-gold-100 to-yellow-100 p-4 rounded-lg mb-4">
                  <p className="text-lg font-bold text-gold-800">Amount: {scholarship.amount}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Eligibility Criteria:</h4>
                  <ul className="space-y-1">
                    {scholarship.criteria.map((criterion, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {scholarship.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationProcess.map((process) => (
              <div key={process.step} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {process.icon}
                </div>
                <div className="bg-gradient-to-r from-gold-500 to-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
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
                <div className="h-48 bg-gradient-to-br from-gold-400 to-yellow-600 flex items-center justify-center">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{story.name}</h3>
                  <p className="text-gold-600 font-semibold mb-1">{story.course}</p>
                  <p className="text-gray-500 text-sm mb-2">{story.university}</p>
                  <p className="text-gray-600 text-sm mb-3">{story.story}</p>
                  <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {story.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-gold-600 to-yellow-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply for a Scholarship?</h2>
          <p className="text-xl mb-6 opacity-90">
            Take the first step towards your educational dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gold-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gold-600 transition-colors">
              Check Eligibility
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Scholarship; 
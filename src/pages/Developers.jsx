import React from 'react';

const developers = [
  {
    name: "Baig Abdul Ali",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    description: "Specializes in MERN Stack and AI integrations."
  },
  {
    name: "Bhagyashree Sonar",
    role: "Frontend Engineer",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    description: "Expert in UI/UX design and React.js."
  },
  {
    name: "Sukanya Indore",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    description: "Focuses on Node.js, Firebase, and databases."
  }
];

const Developer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">Meet Our Developers</h1>
      <p className="text-lg mb-8">The brilliant minds behind this project</p>

      {/* Master Card for Affan Momin */}
      <div className="bg-white text-black rounded-lg shadow-lg p-8 flex flex-col items-center w-full max-w-md border-4 border-yellow-500 mb-10 transform hover:scale-105 transition duration-300">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Affan Momin" className="w-32 h-32 rounded-full mb-4 border-4 border-yellow-500" />
        <h2 className="text-3xl font-bold text-black-600">Affan Momin</h2>
        <p className="text-xl font-semibold text-gray-700">Full Stack Developer</p>
        <p className="text-center mt-2 text-gray-600">Developing and managing the team with innovation and expertise in AI & Web Development.</p>
      </div>

      {/* Developer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {developers.map((dev, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
            <img src={dev.image} alt={dev.name} className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500" />
            <h2 className="text-2xl font-semibold">{dev.name}</h2>
            <p className="text-blue-600">{dev.role}</p>
            <p className="text-center mt-2 text-gray-600">{dev.description}</p>
          </div>
        ))}
      </div>

      {/* WhatsApp Contact Button */}
      <a href="https://wa.me/8793930643" target="_blank" rel="noopener noreferrer">
        <button className="mt-10 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300">
          Contact Us on WhatsApp
        </button>
      </a>
    </div>
  );
};

export default Developer;

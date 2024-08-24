import React from 'react';
import SpeakerCard from './SpeakerCard';

const SpeakerSection = () => {
  const speakers = [
    { name: "John Doe", designation: "Keynote Speaker", bio: "John is a renowned expert in AI and machine learning." },
    { name: "Jane Smith", designation: "Data Scientist", bio: "Jane has over 10 years of experience in data analysis and visualization." },
    { name: "Mike Johnson", designation: "Software Engineer", bio: "Mike specializes in cloud computing and distributed systems." },
    { name: "Sarah Lee", designation: "DevOps Engineer", bio: "Sarah is a thought leader in CI/CD pipelines and automation." },
    { name: "David Brown", designation: "Cybersecurity Expert", bio: "David has been working in the field of cybersecurity for 15 years." }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

export default SpeakerSection;

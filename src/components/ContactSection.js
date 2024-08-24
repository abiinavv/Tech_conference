import React from 'react';

// Sample data for contact cards
const contacts = [
  {
    name: 'Abhinav P S',
    designation: 'CEO',
    email: 'psabhinav2126@gmail.com',
    phone: '+91 6282522883',
    linkedin: 'https://www.linkedin.com/in/abhinav-p-s-059179284',
  },
  {
    name: 'Jane Smith',
    designation: 'CTO',
    email: 'jane.smith@example.com',
    phone: '+0987654321',
    linkedin: 'https://www.linkedin.com/in/janesmith',
  },
  {
    name: 'Emily Johnson',
    designation: 'CFO',
    email: 'emily.johnson@example.com',
    phone: '+1122334455',
    linkedin: 'https://www.linkedin.com/in/emilyjohnson',
  },
  {
    name: 'Michael Brown',
    designation: 'COO',
    email: 'michael.brown@example.com',
    phone: '+2233445566',
    linkedin: 'https://www.linkedin.com/in/michaelbrown',
  },
];

const ContactCard = ({ contact }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
    <div className="text-xl font-bold mb-2">{contact.name}</div>
    <div className="text-gray-700 mb-2">{contact.designation}</div>
    <a href={`mailto:${contact.email}`} className="text-blue-500 mb-2">{contact.email}</a>
    <a href={`tel:${contact.phone}`} className="text-blue-500 mb-2">{contact.phone}</a>
    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
  </div>
);

const ContactSection = () => (
  <section id="contact" className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;

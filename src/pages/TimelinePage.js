import React from 'react';
import TimelineCard from '../components/TimelineCard';

const timelineData = [
  {
    date: '2024-09-01',
    title: 'Opening Keynote',
    description: 'The conference opens with a keynote address from our keynote speaker.',
  },
  {
    date: '2024-09-02',
    title: 'Tech Talks',
    description: 'A series of technical talks from leading experts in the field.',
  },
  {
    date: '2024-09-03',
    title: 'Workshops',
    description: 'Hands-on workshops covering various technologies and tools.',
  },
  {
    date: '2024-09-04',
    title: 'Networking Event',
    description: 'An evening dedicated to networking and socializing with fellow attendees.',
  },
  {
    date: '2024-09-05',
    title: 'Closing Ceremony',
    description: 'The conference concludes with a closing ceremony and farewell address.',
  },
];

const TimelinePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Conference Timeline</h1>
      <div className="max-w-4xl mx-auto">
        {timelineData.map((event, index) => (
          <TimelineCard
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;

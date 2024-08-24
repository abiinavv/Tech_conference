import React from 'react';

const Sponsors = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Sponsors</h2>
        <div className="flex justify-center space-x-6">
          {/* Placeholder for sponsor logos */}
          <img src="http://purepng.com/public/uploads/large/purepng.com-intel-logologobrand-logoiconslogos-251519939644r68ft.png" alt="Sponsor 1" className="h-12"/>
          <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" alt="Sponsor 2" className="h-12"/>
          <img src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Simbolo.png" alt="Sponsor 3" className="h-12"/>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

'use client';

import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import des styles de la librairie

const TechnicalPlate = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const featureCards = [
    <div key="1" className="feature">
      <span>01</span>
      <h3>Radiographie rétro-alvéolaire numérique</h3>
      <p>
        Vitae volutpat commodo velit vel donec mus nisl eleifend tincidunt. Scelerisque et et pellentesque arcu bibendum...
      </p>
    </div>,
    <div key="2" className="feature-1">
      <div className="feature-image">
        <Image alt='teeth' src={'/images/teeth.svg'} width={40} height={40} />
      </div>
      <p>Empreintes optiques par caméra</p>
    </div>,
    <div key="3" className="feature-2">
      <div className="feature-image">
        <Image alt='teeth' src={'/images/teeth.svg'} width={40} height={40} />
      </div>
      <p>Loupes Binoculaires</p>
    </div>
  ];

  return (
    <section className="technical-plate">
      <div className='bg-technique'>
        <div className='text1'>
          <h2>Un plateau technique de pointe</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="1" viewBox="0 0 40 1" fill="none">
            <path d="M0 0.5H39.5" stroke="#4F7D79"/>
          </svg>
          <p>
            Vitae volutpat commodo velit vel donec mus nisl eleifend tincidunt. Scelerisque et et pellentesque arcu bibendum eleifend elementum nec rutrum consectetur. Ultrices eleifend elementum nec rutrum consectetur...
          </p>
          <button><span>En savoir plus →</span></button>
        </div>
      </div>
      <div className={`features ${isMobile ? 'carousel-features' : ''}`}>
        {isMobile ? (
          <Carousel  showArrows={true}
          showStatus={false}
          showIndicators={true}
          infiniteLoop={true}
          interval={3000}
          transitionTime={500}
          swipeable={true}
          idth="200px" 
          height="200px"
          >
            {featureCards}
          </Carousel>
        ) : (
          featureCards
        )}
      </div>
    </section>
  );
};

export default TechnicalPlate;

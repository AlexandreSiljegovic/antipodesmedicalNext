import Image from 'next/image';

const TechnicalPlate = () => {
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
      </div>
      <button><span>En savoir plus →</span></button>
      </div>
      <div className="features">
        <div className="feature">
          <span>01</span>
          <h3>Radiographie rétro-alvéolaire numérique</h3>
          <p>
            Vitae volutpat commodo velit vel donec mus nisl eleifend tincidunt. Scelerisque et et pellentesque arcu bibendum...
          </p>
          {/* <Image src="/images/radiography.png" alt="Radiography" width={200} height={150} /> */}
        </div>
        <div className="feature-1"> <Image alt='teeth' src={'/images/teeth.svg'} width={40} height={40}/>Empreintes optiques par caméra</div>
        <div className="feature-2"> <Image alt='teeth' src={'/images/teeth.svg'} width={40} height={40}/>Loupes Binoculaires</div>
      </div>
    </section>
  );
};

export default TechnicalPlate;
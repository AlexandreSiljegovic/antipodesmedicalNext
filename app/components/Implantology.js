import Image from 'next/image';

const Implantology = () => {
  return (
    <section className="implantology">
     
       <div className="image-container">
        <Image src="/images/implantsvg.svg" alt="Implantology" width={690} height={700} layout="responsive" />
        
      </div> 
      <div className="bg-implantology">
        <div className='text'> 
      <h2>Implantologie</h2>
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="1" viewBox="0 0 40 1" fill="none">
           <path d="M0 0.5H39.5" stroke="#4F7D79"/>
       </svg>
      
      <p>
        Vitae volutpat commodo velit vel donec mus nisl eleifend tincidunt. Scelerisque at et pellentesque arcu bibendum. 
Ultrices eleifend elementum nec rutrum consectetur cursus eleifend. Scelerisque at et pellentesque arcu bibendum. Ultrices eleifend elementum nec. Ultrices rutrum consectetur. Vitae volutpat commodo velit vel donec mus nisl eleifend tincidunt. Scelerisque at et pellentesque arcu bibendum. 
Consectetur cursus eleifend. Scelerisque at et pellentesque arcu bibendum. Ultrices eleifend elementum nec.Ultrices eleifend elementum nec rutrum consectetur.
      </p>
       <button><span>En savoir plus →</span></button>
        </div>
        </div>
     
    </section>
  );
};

export default Implantology;
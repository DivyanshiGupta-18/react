import React from 'react';

const HeroSection = () => {
  return (
    <section>
      <div
        className="d-flex absolute w-100 fs-1 fw-bold text-center "
        style={{
          backgroundImage: 'url("https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0917/usr/images/news/main_image/137/abstract-elegance-6-.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          color: 'white'
        }}
      >
        <h1 className='container pt-5'>Sole melts here where words end</h1>
      </div>
    </section>
  );
};

export default HeroSection;

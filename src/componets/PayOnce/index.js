import React from 'react';

const PayOnce = () => {
  return (
    <div className="container">
      <div 
        className="" 
        style={{ backgroundImage: "url('/images/download (20).svg')" }}
      >
        <div className="flex justify-center lg:mt-[100px] md:mt-[70px] mt-[50px]">
          <img 
            src="/images/4-small-Dl1zRJyK.png" 
            alt="img" 
            className="w-[300px] h-[300px]" 
          />
        </div>

        <div className='pt-16'><p className='text-[#c4b9ad] flex justify-center'>[  Get started with Mindblowing  ]</p>
        <h1 className='text-white lg:text-[50px] md:text-[35px] text-[30px] text-center flex justify-center pt-4 font-medium'>Pay once, use forever</h1>
        </div>
      </div>
    </div>
  );
};

export default PayOnce;

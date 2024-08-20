import React from "react";

const Genretive = () => {
  return (
    <div className="container">
      <div className="lg:pt-[60px] md:pt-[40px]">
        <h1 className="text-white lg:text-[50px] md:text-[35px] text-[25px] text-center flex justify-center items-center">
          Generative AI made for creators.
        </h1>
      </div>
      <div>
        <p className="text-[#c4b9ad] text-[15px] flex justify-center items-center text-center">
          Mindblowing unlocks the potential of AI-powered applications
        </p>
      </div>

      <div className="pt-[80px] pb-[30px] relative">
        <div className="flex border border-slate-800 rounded-2xl">
          <div className="w-full relative">
          <div className="lg:w-[88%] md:w-full w-full">

            <img
              src="/images/bee-2984342_1280 (1).webp"
              alt="img"
              className="rounded-tl-2xl rounded-bl-2xl"
            />
          </div>
          <div className="lg:w-[12%] hidden"></div>
           
            <div className="absolute lg:top-24 md:top-0 right-0 p-4 !pr-10 box-smartest-ai">
              <h1 className="text-white lg:text-[35px] md:text-[30px] text-[28px]">Smartest AI</h1>
              <p className="text-white max-w-[320px] lg:pt-5 md:pt-3 pt-3 pb-3 lg:pb-14 md:pb-7">
                Mindblowing unlocks the potential of AI-powered applications
              </p>
              <hr className="border border-customBorder"/>
              <div className="flex pt-[15px] pb-[15px]">
              <img
                src="/images/download (13).svg"
                alt=""
                className="w-[24px] h-[24px]"
              />
              <p className="ml-4 text-white">Photo generating</p>
            </div>
            <hr className="border border-customBorder"/>
            <div className="flex pt-[15px] pb-[15px]">
              <img
                src="/images/download (13).svg"
                alt=""
                className="w-[24px] h-[24px]"
              />
              <p className="ml-4 text-white">Photo enhance</p>
            </div>
            <hr className="border border-customBorder"/>
            <div className="flex pt-[15px] pb-[15px]">
              <img
                src="/images/download (13).svg"
                alt=""
                className="w-[24px] h-[24px]"
              />
              <p className="ml-4 text-white">Seamless Integration</p>
            </div>

            </div>
            <div className="absolute lg:bottom-9 md:bottom-5 right-0 lg:mr-10 md:mr-0 flex items-center lg:w-[60%] md:w-full w-full h-[60px] bg-slate-900 rounded-3xl p-3 ai-power">
                  <img
                    src="/images/loading-CllQEGx_.png"
                    alt="loader"
                    className="w-[35px] h-[35px] ml-4"
                  />
                  <p className="text-white ml-[20px]">Ai is power</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genretive;

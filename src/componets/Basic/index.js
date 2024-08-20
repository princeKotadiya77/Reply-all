import React from "react";

const Basic = () => {
  return (
    <div className="container pt-20 pb-12">
      <div className="lg:flex justify-between items-center flex-wrap">
        <div className="border border-customColor rounded-2xl flex-1 mt-3 py-8 px-5 mx-2 max-h-[700px]">
          <div className="h-[150px]">
            <h4 className="text-white text-[40px] Basic">Basic</h4>
            <p className="text-[20px] text-[#c4b9ad] pt-5 mb-3 ">
              AI chatbot, personalized recommendations
            </p>
          </div>
          <div>
            <h1 className="text-[5.5rem] leading-none font-bold mb-6 text-white flex">
              <span className="text-[50px] flex items-center">₹</span>0
            </h1>
            <button type="submit" className="uppercase bg-white btn4">
              get started
            </button>
          </div>
          <hr className="mt-6 border-customColor" />
          <div className="flex pt-[20px] pb-[20px]">
            <img
              src="/images/download (13).svg"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="ml-4 xl:text-[20px] lg:text-[18px] text-white">An AI chatbot that can understand your queries</p>
          </div>
          <hr className=" border-customColor" />
          <div className="flex pt-[20px] pb-[20px]">
            <img
              src="/images/download (13).svg"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="ml-4 xl:text-[20px] lg:text-[18px] text-white">Personalized recommendations based on your preferences</p>
          </div>
          <hr className=" border-customColor" />
          <div className="flex pt-[20px] pb-[20px]">
            <img
              src="/images/download (13).svg"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="ml-4 xl:text-[20px] lg:text-[18px] text-white">Ability to explore the app and its features without any cost</p>
          </div>
        </div>

        <div className="border border-customColor rounded-2xl mt-3 flex-1 py-14 px-5 mx-2 max-h-[750px]">
          <div className="h-[180px]">
            <h4 className="text-white text-[40px] Enterprise">Enterprise</h4>
            <p className="text-[20px] text-[#c4b9ad] pt-5 mb-3">
            Custom AI chatbot, advanced analytics, dedicated account
            </p>
          </div>
          <div>
            <h1 className="text-[5.5rem] leading-none font-bold mb-6 text-white flex opacity-0">
              <span className="text-[50px] flex items-center opacity-0">₹</span>0
            </h1>
            <button type="submit" className="uppercase bg-white btn4">
              get started
            </button>
          </div>
          <hr className="mt-6 border-customColor" />
          <div className="flex pt-[20px] pb-[20px]">
            <img
              src="/images/download (13).svg"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="ml-4 xl:text-[20px] lg:text-[18px] text-white">An AI chatbot that can understand your queries</p>
          </div>
          <hr className=" border-customColor" />
          <div className="flex pt-[20px] pb-[20px]">
            <img
              src="/images/download (13).svg"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="ml-4 xl:text-[20px] lg:text-[18px] text-white">Personalized recommendations based on your preferences</p>
          </div>
          <hr className=" border-customColor" />
          <div className="flex pt-[20px] pb-[20px]">
            <img
              src="/images/download (13).svg"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="ml-4 xl:text-[20px] lg:text-[18px] text-white">Ability to explore the app and its features without any cost</p>
          </div>
        </div>

        <div className="border border-customColor rounded-2xl mt-3 flex-1 py-8 px-5 mx-2 max-h-[700px]">
          <div className="h-[150px]">
            <h4 className="text-white text-[40px] Premium">Premium</h4>
            <p className="text-[20px] text-[#c4b9ad] pt-5 mb-3">
            Advanced AI chatbot, priority support, analytics dashboard
            </p>
          </div>
          <div>
            <h1 className="text-[5.5rem] leading-none font-bold mb-6 text-white flex">
              <span className="text-[50px] flex items-center">₹</span>0
            </h1>
            <button type="submit" className="uppercase bg-white btn4">
              get started
            </button>
          </div>
          <hr className="mt-6 border-customColor" />
          <div className="flex pt-[20px] pb-[20px]">
            <img
              src="/images/download (13).svg"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="ml-4 xl:text-[20px] lg:text-[18px] text-white">An AI chatbot that can understand your queries</p>
          </div>
          <hr className=" border-customColor" />
          <div className="flex pt-[20px] pb-[20px]">
            <img
              src="/images/download (13).svg"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="ml-4 xl:text-[20px] lg:text-[18px] text-white">Personalized recommendations based on your preferences</p>
          </div>
          <hr className=" border-customColor" />
          <div className="flex pt-[20px] pb-[20px]">
            <img
              src="/images/download (13).svg"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="ml-4 xl:text-[20px] lg:text-[18px] text-white">Ability to explore the app and its features without any cost</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-white underline mt-12 flex justify-center text-center">See the full details</p>
      </div>

      <div className="ld:pt-[150px] md:pt-[80px] pt-[70px]"><p className="uppercase flex justify-center text-center text-[#c4b9ad]">[  ready to get started  ]</p></div>
      <div><h2 className="text-white lg:text-[50px] md:text-[35px] text-[30px] text-center flex justify-center mb-4 mt-4">What we’re working on</h2></div>
    </div>
  );
};

export default Basic;

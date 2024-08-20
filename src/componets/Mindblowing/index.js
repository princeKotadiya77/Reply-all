import React from "react";

const MindBlowing = () => {
  return (
    <div className="container">
      <div className="lg:pt-[100px] md:pt[70px] pt-[10px] pb-[50px]">
        <div className="lg:flex justify-between flex-wrap">
          <div className="lg:w-[40%] w-[100%]">
            <div>
              <h1 className="lg:w-[35%] md:w-[50%] w-[100%] lg:text-[40px] md:text-[35px] text-[35px] text-white font-semibold">
                AI For mindblowing Creativity
              </h1>
            </div>
            <div className="flex pt-[25px]">
              <img
                src="/images/download (13).svg"
                alt=""
                className="w-[24px] h-[24px]"
              />
              <p className="ml-4 text-white">Seamless Integration</p>
            </div>
            <div className="pt-[10px]">
              <p className="text-[#c4b9ad] xl:w-[80%] lg:w-[80%] md:w-[50%] w-[50%]">
                With smart automation, it makes your thinking mindblowing
              </p>
            </div>
            <div className="flex pt-[25px]">
              <img
                src="/images/download (13).svg"
                alt=""
                className="w-[24px] h-[24px]"
              />
              <p className="ml-4 text-white">Smart Automation</p>
            </div>
            <div className="flex pt-[25px]">
              <img
                src="/images/download (13).svg"
                alt=""
                className="w-[24px] h-[24px]"
              />
              <p className="ml-4 text-white">Top-notch Security</p>
            </div>
            <div className="mt-[35px]">
              <button className="btn uppercase">Try it now</button>
            </div>
          </div>

          <div>
            <img
              src="images/vecteezy_ai-conversations-dynamic-interactions-of-two-robots-created_23841798.png"
              alt="img"
              className="lg:w-[500px] w-full h-[500px] robot-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindBlowing;

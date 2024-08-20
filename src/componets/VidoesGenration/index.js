import React from "react";

const VidoesGenration = () => {
  return (
    <div className="container">
      <div className="lg:flex justify-between flex-wrap">
        <div
          className="lg:w-[49%] md:w-[100%] lg:h-auto md:h-[500px] h-[500px] w-full bg-cover bg-center flex flex-col justify-between rounded-2xl"
          style={{
            backgroundImage:
              "url('/images/photo-1534723328310-e82dad3ee43f.avif')",
          }}
        >
          <div className="flex justify-end  p-[30px]">
            <div className="flex relative items-end text-white max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[7.75rem] lg:max-w-[17.5rem] ">
              <span>Hey Mindblowing, enhance this photo</span>
              <svg
                className="absolute left-full bottom-0 fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="37"
              >
                <path d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"></path>
              </svg>
            </div>
          </div>
          <div className="mb-[60px] lg:p-[50px] md:p-[30px] p-[25px]">
            <h3 className="text-white text-[30px] font-semibold">Photo editing</h3>
          <p className="text-[#c4b9ad] pt-6">Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
          </div>
        </div>

        <div className="lg:w-[49%] md:w-[100%] w-full relative">
          <div className="pt-20">
            <h1 className="text-white text-[30px]">Video Generation</h1>
          </div>
          <div>
            <p className="text-[#c4b9ad] pb-10 pt-5">
              The world’s most powerful AI photo and video art generation
              engine. What will you create?
            </p>
          </div>

          <div className="flex justify-between items-center pb-12">
            <li className="rounded-2xl bg-gray-800 items-center justify-center flex w-14 h-14 bg-n-6 md:w-15 md:h-15">
              <img src="/images/download (14).svg" alt="img" />
            </li>
            <li className="rounded-2xl bg-gray-800 items-center justify-center flex w-14 h-14 bg-n-6 md:w-15 md:h-15">
              <img src="/images/download (15).svg" alt="img" />
            </li>
            <li className="rounded-2xl bg-gray-800 items-center justify-center flex w-14 h-14 bg-n-6 md:w-15 md:h-15">
              <img src="/images/download (16).svg" alt="img" />
            </li>
            <li className="rounded-2xl bg-gray-800 items-center justify-center flex w-14 h-14 bg-n-6 md:w-15 md:h-15">
              <img src="/images/download (17).svg" alt="img" />
            </li>
            <li className="rounded-2xl bg-gray-800 items-center justify-center flex w-14 h-14 bg-n-6 md:w-15 md:h-15">
              <img src="/images/download (18).svg" alt="img" />
            </li>
          </div>

          <div className="relative">
            <img
              src="/images/premium_photo-1680607980708-d2532db7a529.avif"
              alt="img"
              className="w-full rounded-lg h-[500px]"
            />
          </div>

          <div className="absolute top-[280px] left-0 mt-[110px] ml-10 w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-gray-800 rounded-t-xl rounded-br-xl font-code text-white text-base md:max-w-[17.5rem]">
            Video generated!
            <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem]  rounded-full">
              <img
                src="/images/hummingbird-1935665_1280.webp"
                alt="img"
                className="w-[26px] h-[26px]"
              />
            </div>
            <p class="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
              just now
            </p>
            <svg
              className="absolute right-full bottom-0 -scale-x-100 fill-current text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="37"
            >
              <path d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"></path>
            </svg>
          </div>

          <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
            <img src="/images/download (19).svg" alt="img" />
            <div className="flex-1 ml-3 bg-[#D9D9D9]">
              <div className="w-1/2 h-0.5 bg-color-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VidoesGenration;

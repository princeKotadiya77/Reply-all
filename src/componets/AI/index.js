import React, { useEffect, useRef } from "react";

const AiPower = () => {
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      leftBoxRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      rightBoxRef.current.style.transform = `translateY(${scrollY * -0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="container">
        <div className="flex justify-center pt-[110px]">
          <div className="relative lg:w-[80%] md:w-full w-full h-[700px]">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: "url('/images/ai-5202869_1280.webp')" }}
            ></div>

            {/* Top Line */}
            <div className="h-[20px] w-full bg-slate-600 absolute top-0 left-0 rounded-tl-3xl rounded-tr-3xl z-10"></div>

            {/* Two Boxes with Scroll Effect */}
            <div className="justify-between absolute top-[45%] w-full px-4 z-20 lg:flex hidden Ai-box">
              <div
                ref={leftBoxRef}
                className="bg-slate-700 rounded-2xl w-[30%] h-[80px] p-[26px] lg:-ml-28"
              >
                <div className="text-white flex justify-between items-center">
                  <img src="/images/download.svg" alt="symbol" />
                  <img src="/images/download (1).svg" alt="symbol" />
                  <img src="/images/download (2).svg" alt="symbol" />
                  <img src="/images/download (3).svg" alt="symbol" />
                </div>
              </div>

              <div
                ref={rightBoxRef}
                className="bg-slate-700 rounded-2xl w-[30%] h-[80px] p-4 lg:-mr-28"
              >
                <div className="text-white">
                  <div className="flex">
                    <img
                      src="/images/image-1-CTP7EhT0.png"
                      alt="img"
                      className="h-[50px] w-[50px] rounded-lg"
                    />
                    <div>
                      <p className="flex items-center ml-[20px]">
                        Mindblowing AI
                      </p>
                      <div className="flex items-center mt-[5px]">
                        <img
                          src="/images/download.png"
                          alt="img"
                          className="h-[20px] w-[20px] ml-[20px] rounded-lg"
                        />
                        <img
                          src="/images/download (1).png"
                          alt="img"
                          className="h-[20px] w-[20px] ml-[5px] rounded-lg"
                        />
                        <img
                          src="/images/download (2).png"
                          alt="img"
                          className="h-[20px] w-[20px] ml-[5px] rounded-lg"
                        />
                        {/* <p className="flex items-center ml-[40px]">1m ago</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="flex justify-center">
              <div className="rounded-2xl bg-slate-900 ml-[50%] w-[50%] absolute bottom-[60px] left-0 z-10">
                <div className="flex items-center h-[60px] ml-[20px]">
                  <img
                    src="/images/loading-CllQEGx_.png"
                    alt="loader"
                    className="w-[35px] h-[35px]"
                  />
                  <p className="text-white ml-[20px]">Ai is power</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPower;

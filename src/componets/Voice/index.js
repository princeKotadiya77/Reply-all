import React from "react";

// Reusable Box Component
const Box = ({ date, status, imageSrc, title, description }) => {
  return (
    <div className="w-[100%] border border-customColor rounded-2xl p-[40px] mt-5">
      <div className="flex justify-between">
        <div className="text-[#c4b9ad]">{`[ ${date} ]`}</div>
        <div className="bg-white flex items-center rounded-md lg:max-w-[25%] md:max-w-[35%]">
          <img
            src={status.icon}
            alt="status-icon"
            className="h-4 ml-2"
          />
          <span className="ml-3 mr-2">{status.text}</span>
        </div>
      </div>

      <div className="mb-10 mt-10">
        <img src={imageSrc} alt="img" className="w-[628px] h-[426px]" />
      </div>

      <div>
        <h4 className="h4 mb-4 text-white lg:text-[40px] md:text-[30px] text-[25px]">
          {title}
        </h4>
        <p className="body-2 text-n-4 text-[#c4b9ad] mb-3 text-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
};

// Main Voice Component
const Voice = () => {
  const boxData = [
    {
      date: "May 2024",
      status: { icon: "/images/download (21).svg", text: "done" },
      imageSrc: "/images/image-1-BL_C2sN6.png",
      title: "Voice recognition",
      description: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free."
    },
    {
      date: "May 2024",
      status: { icon: "/images/download (21).svg", text: "done" },
      imageSrc: "/images/image-3-DL8wGSR2.png",
      title: "Chatbot customization",
      description: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with."
    },
    {
      date: "May 2024",
      status: { icon: "/images/download (22).svg", text: "In progress" },
      imageSrc: "/images/image-2-C8poHMFX.png",
      title: "Gamification",
      description: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently."
    },
    {
      date: "May 2024",
      status: { icon: "/images/download (22).svg", text: "In progress" },
      imageSrc: "/images/image-4-Cbi5cq1J.png",
      title: "Integration with APIs",
      description: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations."
    },
  ];

  return (
    <div className="container pb-10">
      <div className="lg:flex justify-between flex-wrap">
        <div className="lg:w-[49%] md:w-full w-full">
          {boxData.slice(0, 2).map((box, index) => (
            <Box key={index} {...box} />
          ))}
        </div>
        <div className="lg:w-[49%] md:w-full w-full lg:mt-20">
          {boxData.slice(2).map((box, index) => (
            <Box key={index} {...box} />
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-16 pb-24">
        <button type="submit" className=" btn5 uppercase">our roadmap</button>
      </div>
    </div>
  );
};

export default Voice;

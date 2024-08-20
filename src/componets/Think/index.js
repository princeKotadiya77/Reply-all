import React, { useState } from "react";

const Think = () => {
  const boxData = [
    {
      title: "Ask anything",
      description:
        "Lets users quickly find answers to their questions without having to search through multiple sources.",
      linkText: "explore more",
      imageUrl: "/images/ai-generated-7832245_1280.webp",
      images: "/images/download (5).svg",
    },
    {
      title: "Discover Topics",
      description:
        "Explore a wide range of topics that interest you and find in-depth articles and resources.",
      linkText: "explore more",
      imageUrl: "/images/ai-generated-7832245_1280.webp",
      images: "/images/download (6).svg",
    },
    {
      title: "Get Support",
      description:
        "Reach out to our support team for assistance with any issues or questions you may have.",
      linkText: "explore more",
      imageUrl: "/images/ai-generated-7832245_1280.webp",
      images: "/images/download (7).svg",
    },
    {
      title: "Join the Community",
      description:
        "Become a part of our growing community and share your experiences and knowledge.",
      linkText: "explore more",
      imageUrl: "/images/ai-generated-7832245_1280.webp",
      images: "/images/download (8).svg",
    },
    {
      title: "Learn More",
      description:
        "Deep dive into our extensive knowledge base and find detailed guides and tutorials.",
      linkText: "explore more",
      imageUrl: "/images/ai-generated-7832245_1280.webp",
      images: "/images/download (9).svg",
    },
    {
      title: "Stay Updated",
      description:
        "Subscribe to our newsletter to stay updated with the latest news and updates.",
      linkText: "explore more",
      imageUrl: "/images/ai-generated-7832245_1280.webp",
      images: "/images/download (10).svg",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container">
      <div className="lg:text-[50px] text-center md:text-[30px] text-[30px] font-bold text-white flex justify-center">
        <p>Think more creative with</p>
      </div>
      <div className="lg:text-[50px] md:text-[30px] text-[30px] text-white font-bold flex justify-center">
        <p>Mindblowing</p>
      </div>

      {/* <div className='pt-[70px] pb-[50px]'>
            <div className='w-[30%] max-h-96  p-11 clip-path-triangle'>
                <div className=''>
                    <h1 className='text-white text-[25px]'>Ask anything</h1>
                    <p className='pt-[20px] text-[#c4b9ad] text-[20px]'>Lets users quickly find answers to their questions without having to search through multiple sources.</p>
                </div>
                <div className='pt-[80px]'>
                    <p className='text-white'>read more</p>   
                </div>
            </div>
        </div> */}

      <div className="lg:pt-[80px] md:pt-[75px] pt-[40px] pb-[50px] flex flex-wrap gap-4 justify-between">
        {boxData.map((box, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] lg:w-[30%] p-11 clip-path-triangle relative rounded-[20px] bg-[#333] group overflow-hidden flex flex-col justify-between"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `url(${box.imageUrl})`,
              }}
            ></div>

            {/* Overlay for Background Color */}
            <div className="absolute inset-0 bg-black cursor-pointer bg-opacity-70 group-hover:bg-opacity-50 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <h1 className="text-white text-[25px] cursor-pointer">{box.title}</h1>
              <p className="pt-[20px] text-[#c4b9ad] text-[20px] cursor-pointer">
                {box.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-[80px] relative z-10">
              <img src={box.images} alt="img" className="w-[48px] h-[48px]" />
              <p className="text-white cursor-pointer uppercase text-[11px] flex items-center">
                {box.linkText}{" "}
                <span>
                  <svg class="ml-2 fill-white" width="24" height="24">
                    <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z"></path>
                  </svg>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Think;

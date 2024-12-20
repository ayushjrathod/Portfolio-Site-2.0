import React,{useEffect} from "react";

const TypingText = () => {
    useEffect(()=>{
        const text = document.querySelector(".sec-text");

        const textLoad = ()=>{
            setTimeout(() => {
                text.textContent = 'Developer';
            }, 0);
            setTimeout(() => {
                text.textContent = 'Designer';
            }, 4000);
            setTimeout(() => {
                text.textContent = 'ML Enthusiast';
            }, 8000);
        };
        textLoad();

        const intervalId = setInterval(textLoad, 12000);

        return () => clearInterval(intervalId);
    },[]);

    return (
    <div className="flex items-center justify-center bg-[#010718]">
      <div className="w-[246px] overflow-hidden">
        {/* <span className="relative text-[30px] font-semibold text-white">I'm a</span> */}
        <span className="relative text-[30px] font-semibold text-[#ffb039] sec-text before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[#010718] before:border-l-2 before:border-[#4070F4] before:animate-typing">
          Freelancer
        </span>
      </div>
    </div>
  );
}

export default  TypingText;
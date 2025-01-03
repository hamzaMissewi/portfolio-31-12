"use client";
type BackgroundCirclesProps = {};

function BackgroundCircles({}: BackgroundCirclesProps) {
  return (
    <div className={"relative flex justify-center items-center"}>
      <div
        className={
          "absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"
        }
      />
      <div
        className={
          "absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping"
        }
      />
      <div
        className={
          "absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping"
        }
      />
      <div
        className={
          "absolute border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-52 animate-ping"
        }
      />
    </div>
  );
}

export default BackgroundCircles;

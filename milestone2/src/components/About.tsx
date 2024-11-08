import React from "react";
import Image from "next/image";
import images from "../../public/images.jpeg"

export default function Page() {
  return (
    <div className="bg-slate-950 w-screen h-screen" id="about">
      <div className="flex justify-between items-center  mx-12 flex-wrap ">
        <div className="">
          <h1 className="font-extrabold text-4xl text-slate-300 my-6">
            HI, I&apos;M <span className="text-yellow-500">HOORIA SIDDIQUI</span>
          </h1>

          <p className="text-xl text-slate-300 font-medium w-[400px] my-4 leading-7">
            I&apos;m based in Karachi, Pakistan. As a brilliant student in 9th grade
            at Modern Islamic Grammar School, I&apos;m also passionate about Web 3.0,
            AI, and the metaverse, actively learning at the Governor Initiative
            for Generative AI, Metaverse, and Web 3.0.
          </p>

          <p className="text-xl text-slate-300 font-medium w-[400px] my-4 leading-7">
            I&apos;m building a strong foundation in technology with skills in HTML,
            CSS, JavaScript, TypeScript, and Tailwind CSS, and I&apos;m now exploring
            Next.js and React.js
          </p>

          <p className="text-xl text-slate-300 font-medium w-[400px] my-4 leading-7">
          My vision is to apply my knowledge to solve real-world challenges, develop impactful solutions, and keep growing in the fields of web development and artificial intelligence.
          </p>

          <button className="w-48 h-9 rounded-2xl bg-pink-600 text-white text-xl font-semibold p-1 my-3">
            <a href="https://milestone-1-sigma-eight.vercel.app/">View Resume</a>
          </button>
        </div>

        <div>
          <Image
            src={images}
            alt="Description of the image"
            width={502}
            height={465}
            className="object-cover rounded-full w-[400px] h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

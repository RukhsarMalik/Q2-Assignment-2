import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center w-full overflow-hidden image">
        <div className="px-10 md:w-1/2 mt-10 md:mt-0">
          <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-[#055085] sm:text-5xl sm:leading-none md:text-left lg:text-6xl">
            Governor Sindh
          </h1>
          <h1 className="whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider text-[#055085] sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
            Kamran Khan Tessori
          </h1>
          <p className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-bold leading-[2rem] tracking-wider  text-[#14c2ed] sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.8rem]">
            Certified Cloud
            <br />
            Applied Generative AI
            <br />
            Engineer (GenEng)
          </p>
          <p className=" my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-[#055085] sm:text-2xl md:text-left">
            Earn up to $5,000 / month
          </p>
          <p className="my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-[#055085] sm:text-2xl md:w-[80%] md:text-left">
            Now admissions are open in Hyderabad
          </p>
        <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
          <a className="w-full md:w-auto" href="/apply">
            <button className="w-full rounded-md bg-[#055085] py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
              APPLY NOW
            </button>
          </a>
          <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
            <div className="flex-col text-center text-xl tracking-widest text-[#055085] sm:text-3xl">
              <div className="w-40 font-extrabold">562,143</div>
            </div>
            <div className="text-center text-xs tracking-wider text-[#055085] sm:mb-0 sm:text-sm">
              Accepted Applications
            </div>
          </div>
        </div>
        </div>
        <div className=" relative  mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end">
          <Image
            src="/img/kt.png"
            alt="kamaran tessori"
            width={1600}
            height={1212}
            className=" md: ml-40 h-auto min-w-[900px] lg:w-[600px]"
          />
        </div>
      </div>
    </>
  );
}

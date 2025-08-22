

import picture from "../public/resume-picture.webp";


function Dot({text}) {
  return (
    <div className="flex flex-row items-center">
      <span className="h-1 w-1 border-2 border-solid border-white"></span>
      <span className="mr-2 ml-2 text-white cursor-pointer hover:text-gray-400 transition-all">{text}</span>
    </div>
  );
}

function Header() {
  return (
    <section className="w-full h-auto p-5 flex flex-col gap-3 bg-[#101010] rounded-sm"> {/* TODO: make this whole layout responsible. */}
      <div className="w-full h-full flex flex-row gap-5 justify-between">
        <section className="h-full flex flex-col justify-center items-center">
	  <img src={picture.src} alt="pipi(picture-picture)" className="w-[160px] h-[100px] rounded-full" /> {/* TODO: prepare another picture. */}
	</section>
        <section className="w-full h-full p-3">
	  <span className="text-xl font-bold">Daniel Teixeira</span>
	  <p>
	    Front End Developer
	  </p>
	  <ul className="list-disc list-inside m-2 pl-3">
	    <li>Three+ years of React, Javscript and Typescript.</li>
	    <li>Open to work in a fast and highly collaborative environment, being the "swiss army knife" for every problem.</li>
	    <li>Strong writing skills and a true lover of challenges.</li>
	  </ul>
	</section>
	<div className="w-[1px] border-1 border-solid border-[--foreground] mr-1 ml-1 p-o"></div>
	
	<nav className="w-2/4 h-full flex flex-col gap-2 justify-start">
	    <span className="w-full text-xs"><Dot text="nunesteixeiradaniel12@gmail.com"/></span>
	    <span className="w-full text-xs"><Dot text="55+ (16) 99355-2723" /></span>
	    <span className="h-[1px border-1 border-solid border-[--foreground] mb-1 mt-1 p-0"></span>
	    <span className="w-full text-xs"><Dot text="Personal Website" /></span>
	    <span className="w-full text-xs"><Dot text="Linkedin" /></span>
	    <span className="w-full text-xs"><Dot text="GitHub" /></span>
	</nav>
      </div>
      <div className="h-[1px  border-1 border-solid border-[--foreground] mb-1 mt-1 p-0"></div>
      <nav className="w-full h-1/4 flex flex-row justify-center items-center text-xs">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2 mr-2">
	  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
	  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
	</svg>
	Bauru, São Paulo - Brazil</nav>
    </section>
  );
}

function Line({colour, width}) {
  return <div className="h-[5px] mr-1 ml-1 p-0" style={{backgroundColor: `${colour}`, width: `${width}`}}></div>;
}

function Timeline() {
  return (
    <section className="w-full h-[250px] p-5 flex flex-col justify-center bg-[#101010] rounded-sm">
      <Line colour="orange" width="50%" />
      
      <div className="h-[1px] border-1 border-solid border-[--foreground] mb-1 mt-1 mt-5 p-0"></div> {/* Timeline main line */}
      <div className="flex flex-row justify-between">
        <span>2018</span>
	<span>2020</span>
	<span>2023</span>
        <span>Present</span>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="w-full h-full p-5 flex flex-row justify-center bg-[#101010] rounded-sm">
      <section className="w-1/3 h-full p-5"> {/* Filters */}
        <span className="text-xl font-bold">Skills</span>
	<p>
	  Skills buttons.
	</p>
      </section>
      <div className="w-[1px] border-1 border-solid border-[--foreground] mr-1 ml-1 p-o"></div>
      <section className="w-full h-full p-5"> {/* Experience Panel */}
        <span className="text-xl font-bold">Experience</span>
	<p>
	  Experience text.
	</p>
      </section>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="w-full p-5 flex flex-row justify-center">
        <main className="w-3/4 flex flex-col gap-3">
	  <Header />
	  <Timeline />
	  <Experience />
        </main>
      </div>
    </>
  );
}



import picture from "../public/resume-picture.webp";

function Header() {
  return (
    <section className="w-full h-[250px] p-5 flex flex-col border-2 border-solid border-white rounded-sm"> {/* TODO: make this whole layout responsible. */}
      {/* TODO: DIV hell */}
      <div className="w-full h-full flex flex-row">
        <section className="h-full">
	  <img src={picture.src} alt="pipi(picture-picture)" className="w-[200px] h-[150px] rounded-full" /> {/* TODO: prepare another picture. */}
	</section>
        <section className="w-full h-full p-3">
	  <span className="text-xl font-bold">Daniel Teixeira</span>
	  <p>
	    Front End Developer
	  </p>
	  <ul className="list-disc list-inside m-2 pl-3">
	    <li>Three+ years of React, Javscript and Typescript;</li>
	    <li>Open to work in a fast and highly collaborative environment, being the "swiss army knife" for every problem;</li>
	  </ul>
	</section>
        <nav className="w-1/3 h-full border-2 border-solid border-white">Data</nav>
      </div>
      <nav className="w-full h-1/4 border-2 border-solid border-white"></nav>
    </section>
  );
}

function Timeline() {
  return (
    <section className="w-full h-[250px] p-5 flex flex-col justify-center border-2 border-solid border-white rounded-sm">
      <div className="h-[1px] border-1 border-solid border-[--foreground] mb-1 mt-1 p-0"></div> {/* Timeline main division */}
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
    <section className="w-full h-full p-5 flex flex-row justify-center border-2 border-solid border-white rounded-sm">
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
        <main className="w-2/3 flex flex-col gap-3">
	  <Header />
	  <Timeline />
	  <Experience />
        </main>
      </div>
    </>
  );
}


"use client";
import React, { useState, useEffect } from 'react';
import picture from "../public/resume-picture.webp";


function Tooltip({ children, content }) {
  // TODO: Style tooltip.
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    document.addEventListener('mousemove', function(e) {
      let _content = document.getElementById("tooltip_content");
      if (_content != null) {
        _content.style.left = (e.pageX + 20) + 'px';
        _content.style.top  = (e.pageY + 20) + 'px';
      }
    });
  });
  
  return (
    <div
      className = "transition-all"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div id="tooltip_content" className="absolute bg-[#242424] pointer-events-none rounded-sm p-2">{content}</div> }
    </div>
  );
}

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
	    <li>Open to work in a fast and highly collaborative environment, truly being the "swiss army knife" for every kind of problem.</li>
	    <li>Strong writing skills and a true lover of challenges.</li>
	  </ul>
	</section>
	<div className="w-[1px] border-1 border-solid border-[--foreground] mr-1 ml-1 p-0"></div>
	
	<nav className="w-2/4 h-full flex flex-col gap-2 justify-start">
	    <span className="w-full text-xs"><Dot text="nunesteixeiradaniel12@gmail.com"/></span>
	    <span className="w-full text-xs"><Dot text="55+ (16) 99355-2723" /></span>
	    <span className="h-[1px border-1 border-solid border-[--foreground] mb-1 mt-1 p-0"></span>
	    <span className="w-full text-xs"><a target="blank" href="https://asgooffeeasme.neocities.org"><Dot text="Personal Website" /></a></span>
	    <span className="w-full text-xs"><a target="blank" href="www.linkedin.com/in/daniel-nunes-teixeira"><Dot text="Linkedin" /></a></span>
	    <span className="w-full text-xs"><a target="blank" href="https://github.com/nobody-but-me"><Dot text="GitHub" /></a></span>
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

function TruncatedLabel({text, max_length}) {
  const style = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: `${max_length}ch`
  };
  return <div className="text-xs" style={style}>{text}</div>;
}

function Line({text, colour, width, text_length = 0, tooltip_title, tooltip_text, tooltip_tags}) { // TODO: too many arguments.
  return (
    <div style={{width: `${width}`, minWidth: `${width}`}}>
      <Tooltip
        content={(
	  <div>
	    <span className="text-md font-bold">{tooltip_title}</span>
	    <p className="text-xs">
	      {tooltip_text}
	    </p>
	    <span className="text-gray-300">{tooltip_tags}</span>
	  </div>
	)}
      >
        <span className="w-full mt-1 mb-2 flex flex-row justify-center text-white hover:text-gray-400 cursor-pointer transition-all"><TruncatedLabel text={text} max_length={(text_length == 0) ? 15 : text_length} /></span>
      </Tooltip>
      <div className="h-[5px] m-1 p-0 w-full" style={{backgroundColor: `${colour}`}}></div>
    </div>
  );
}

function Timeline() {
  // TODO: change the colour pallete.
  // TODO: standardize colours.
  return (
    <section className="w-full p-5 flex flex-col justify-center bg-[#101010] rounded-sm">
      <div className="flex flex-col items-end justify-center">
        <div className="w-full flex flex-row justify-end gap-1">
	  <Line text_length={25} text="JavaScript Developer" colour="orange" width="40%" tooltip_title="Non-professional JavaScript Developer" tooltip_text="For small groups of game development and personal use."/>
	  <span className="w-full"></span>
          <Line text_length={35} text="B.S. in Journalism" colour="red" width="35%" tooltip_title="B.S. in Journalism" tooltip_text="Universidade Estadual Paulista 'Júlio de Mesquita Filho' (UNESP)" />
	</div>
	<Line text_length={25} text="C/C++ Developer" colour="cyan" width="70%" tooltip_title="C/C++ Developer" tooltip_text="Student and non-professional contact" />
	<div className="w-full flex flex-row items-center justify-end gap-1">
	  <span className="w-full"></span>
          <Line text_length={15} text="Web-development course" colour="red" width="30%" tooltip_title="General web-development course" tooltip_text="ISPAC São Paulo’s arts and culture institute" />
	  <span className="w-3/3"></span>
	  <Line text_length={25} text="Front-end Developer" colour="orange" width="25%" tooltip_title="Front-end Developer" tooltip_text="Desperta Startup (May, 2025 - )" />
	</div>
	<div className="w-full flex flex-row items-center justify-end">
          <Line text_length={10} text="E-commerce Website" colour="cyan" width="5%" tooltip_title="E-Commerce WebSite" tooltip_text="Cristal Brindes, for Desperta Startup." />
	  <span className="w-[5px]"></span>
          <Line text_length={10} text="Government Website" colour="cyan" width="8%" tooltip_title="Government website" tooltip_text="BNAP Atas públicas, for Desperta Startup." />
	  <span className="w-[5px]"></span>
          <Line text_length={10} text="Security Website" colour="cyan" width="8%" tooltip_title="Website version of security application" tooltip_text="Engseg, for Desperta Startup." />
	  <span className="w-[5px]"></span>
	</div>
      </div>
      
      <div className="h-[1px] border-1 border-solid border-[--foreground] mb-1 mt-1 mt-5 p-0"></div> {/* Timeline main line */}
      <div className="flex flex-row justify-between">
	<span>2020</span>
	<span>2022</span>
	<span>2024</span>
        <span className="w-1/4">2025 (Present)</span>
      </div>
    </section>
  );
}

function Button(props) {
  return <button onClick={props.click} className="w-full bg-[#242424] pb-1 pt-1 text-sm cursor-pointer rounded-sm text-md hover:bg-[#070707] hover:scale-105 transition-all">{props.name}</button>;
}

function SelectableButton({text, click}) {
  const [selected, setSelected] = useState(false);
  const clicked = () => {
    const new_select = !selected;
    if (click) click(new_select, text);
    setSelected(new_select);
  };
  return <button onClick={clicked} className="w-full pb-1 pt-1 text-sm cursor-pointer rounded-sm text-md hover:scale-105 transition-all" style={{ backgroundColor: selected ? '#070707' : '#242424' }}>{text}</button>;
}

function ExperienceCard({title, content, category}) {
  return (
    <div className="bg-[#242424] w-full p-3 flex flex-col rounded-sm">
      <span className="text-xl font-bold">{title}</span>
      {content}
    </div>
  );
}

function Experience() {
  
  const [ filters, setFilters ] = useState<string[]>([]);
  // TODO: Refactoring needed.
  const cards = [
    ["BNAP atas públicas", (
      <>
        <p>
	  Brazil's government e-bank of legal documents.<br /> <a className="" href="https://www.produtosbnap.com.br/pagina/quem-somos.html" target="_blank">https://www.produtosbnap.com.br/pagina/quem-somos.html</a>
	</p>
      </>
    ), ["Next.js", "Tailwind", "PostgreSQL", "Redux", "Typescript"]],
    ["Engseg", (
      <>
        <p>
	  Engineering security website version of Engseg android application.<br /> <a className="" href="https://engseg-v1.pages.dev" target="_blank">https://engseg-v1.pages.dev</a>
	</p>
      </>
    ), ["Next.js", "Tailwind", "PostgreSQL", "MySQL", "Typescript", "Git"]],
    ["Cristal Brindes", (
      <>
        <p>
	  General refactoring of the brazilian gifts and varieties e-commerce website Cristal Brindes. <br /><a className="" href="https://cristalbrindes.com.br/" target="_blank">https://cristalbrindes.com.br/</a>
	</p>
      </>
    ), ["JavaScript", "PostgreSQL", "HTML", "CSS"]],
    ["Execurator static website generator (WIP)", (
      <>
        <p>
	  Execurator is meant to be an all-in-one single-binary static website generator for Razomentalist, my new project of personal website.<br /> <a className="" href="https://asgooffeeasme.neocities.org" target="_blank">https://asgooffeeasme.neocities.org</a>
	</p>
      </>
    ), ["C/C++", "HTML", "CSS", "Git"]],
    ["City builder game", (
      <>
        <p>
	  A tiny city builder game for web written with Next.js, Tailwind and PostgreSQL (supabase).<br /> <a className="" href="https://github.com/nobody-but-me/city_builder.git" target="_blank">https://github.com/nobody-but-me/city_builder.git</a>
	</p>
      </>
    ), ["Next.js", "Typescript", "PostgreSQL", "Tailwind", "Git"]],
    ["Itoi", (
      <>
        <p>
	  A text editor for web written with Next.js and Tailwind.<br /> <a className="" href="https://github.com/nobody-but-me/itoi.git" target="_blank">https://github.com/nobody-but-me/itoi.git</a>
	</p>
      </>
    ), ["Next.js", "Typescript", "PostgreSQL", "Tailwind", "Git"]],
    ["Personal Website Gooffee", (
      <>
        <p>
	  A simple blog-like website written with React.<br /> <a className="" href="https://asgooffeeasme.neocities.org" target="_blank">https://asgooffeeasme.neocities.org</a>
	</p>
      </>
    ), ["React", "HTML", "CSS", "JavaScript", "Git"]],
    ["MoL Game Engine (WIP)", (
      <>
        <p>
	  A 2D Game Engine written in C++ and using OpenGL as Graphics API.<br />
	  <a href="https://github.com/nobody-but-me/MoL25.git" target="_blank">https://github.com/nobody-but-me/MoL25.git</a>
	</p>
      </>
    ), ["C/C++", "OpenGL", "Git", ]],
    ["Golf-game", (
      <>
        <p>
	  A game written from scratch with C++ and OpenGL.<br />
	  <a href="https://github.com/nobody-but-me/Golf-game.git" target="_blank">https://github.com/nobody-but-me/Golf-game.git</a>
	</p>
      </>
    ), ["C/C++", "OpenGL", "Git" ]],
    ["Hello World Operating System", (
      <>
        <p>
	  Simple bootable operating system written in C.<br />
	  <a href="https://github.com/nobody-but-me/EveOs-prototype" target="_blank">https://github.com/nobody-but-me/EveOs-prototype</a>
	</p>
      </>
    ), ["C/C++", "Git", "Linux" ]],
  ];
  
  let filtered_cards = cards.filter(card =>
    filters.length === 0 ? true : card[2].some(tag => filters.includes(tag))
  );
  
  const setting_filter = (selected: boolean, texts: string) => { 
    let new_filters = [...filters];
    if (selected === true) {
      new_filters.push(texts);
    }
    else {
      new_filters = new_filters.filter(f => !texts.includes(f));
    }
    setFilters(new_filters);
    filtered_cards = cards.filter(card =>
      filters.length === 0 ? true : card[2].some(tag => filters.includes(tag))
    );
    return;
  };
  
  return (
    <section className="w-full h-full p-5 flex flex-row justify-center bg-[#101010] rounded-sm">
      <section className="w-1/3 h-full p-5 flex flex-col"> {/* Filters */}
        <span className="text-xl font-bold">Skills</span>
	<p className="mb-2">Front-end</p>
	<div className="w-full h-full grid grid-cols-2 gap-2 justify-start">
	  <SelectableButton text="React"      click={setting_filter} />
	  <SelectableButton text="Redux"      click={setting_filter} />
	  <SelectableButton text="Next.js"    click={setting_filter} />
	  <SelectableButton text="JavaScript" click={setting_filter} />
	  <SelectableButton text="HTML"       click={setting_filter} />
	  <SelectableButton text="CSS"        click={setting_filter} />
	  <SelectableButton text="Typescript" click={setting_filter} />
	  <SelectableButton text="Tailwind"   click={setting_filter} />
	</div>
	<p className="mt-2 mb-2">Back-end</p>
	<div className="w-full h-full grid grid-cols-2 gap-2 justify-start">
	  <SelectableButton text="Python"     click={setting_filter} />
	  <SelectableButton text="PostgreSQL" click={setting_filter} />
	  <SelectableButton text="MySQL"      click={setting_filter} />
	</div>
	<p className="mt-2 mb-2">Misc</p>
	<div className="w-full h-full grid grid-cols-2 gap-2 justify-start">
	  <SelectableButton text="Electron.js" click={setting_filter} />
	  <SelectableButton text="Linux"       click={setting_filter} />
	  <SelectableButton text="Git"         click={setting_filter} />
	  <SelectableButton text="C/C++"       click={setting_filter} />
	  <SelectableButton text="OpenGL"      click={setting_filter} />
	</div>
	<div className="w-full min-h-full"></div>
      </section>
      <div className="w-[1px] border-1 border-solid border-[--foreground] mr-1 ml-1 p-o"></div>
      
      <section className="w-full h-full p-5"> {/* Experience Panel */}
        <span className="text-xl font-bold">Experience</span>
	<div className="flex flex-col justify-start pt-5 pb-5 gap-2">
	  { filtered_cards.map((cards, idx) => <ExperienceCard key={idx} title={cards[0]} content={cards[1]} />)}
	</div>
      </section>
      
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="w-full p-5 flex flex-row justify-center">
        <main className="w-[60em] flex flex-col gap-3">
	  <Header />
	  <Timeline />
	  <Experience />
        </main>
      </div>
    </>
  );
}

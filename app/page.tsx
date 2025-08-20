

function Header() {
  return (
    <section className="w-full h-[250px] p-5 flex flex-col border-2 border-solid border-white rounded-sm">
      {/* TODO: DIV hell */}
      <div className="w-full h-full flex flex-row">
        <div className="w-full h-full border-2 border-solid border-white">Picture</div>
        <div className="w-full h-full border-2 border-solid border-white">Info.</div>
        <nav className="w-full h-full border-2 border-solid border-white">Data</nav>
      </div>
      <nav className="w-full h-1/4 border-2 border-solid border-white"></nav>
    </section>
  );
}

function Timeline() {
  return (
    <section className="w-full h-[250px] p-5 flex flex-col justify-center border-2 border-solid border-white rounded-sm">
      <div className="h-[1px] border-1 border-solid border-white mb-1 mt-1 p-0"></div> {/* Timeline main division */}
      <div className="flex flex-row justify-between">
        <span>2018</span>
	<span>2020</span>
	<span>2023</span>
        <span>Present</span>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="w-full h-screen p-5 flex flex-row justify-center">
        <main className="w-2/3 border-2 border-solid border-white flex flex-col">
	  <Header />
	  <Timeline />
        </main>
      </div>
    </>
  );
}

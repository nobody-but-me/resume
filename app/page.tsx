

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
  )
}

export default function Home() {
  return (
    <>
      <div className="w-full h-screen p-5 flex flex-row justify-center">
        <main className="w-2/3 border-2 border-solid border-white flex flex-col">
	  <Header />
        </main>
      </div>
    </>
  );
}

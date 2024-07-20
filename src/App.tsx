function App() {
  return (
    <div className="bg-zinc-700 flex flex-col w-screen h-screen">
      <div
        className="w-screen h-12 px-8 items-center
       flex flex-row align-middle space-x-6
      text-zinc-50 font-bold bg-zinc-600 shadow-md"
      >
        <p>stuff</p>
        <p>here</p>
      </div>

      <div className="w-screen h-full grow flex-col">
        <div
          className="w-1/5 h-full px-4 py-8
          flex-col space-y-6
        text-zinc-50 font-extrabold bg-zinc-800 shadow-md"
        >
          <p>Stuff</p>
          <p>also</p>
          <p>here</p>
        </div>
      </div>
    </div>
  );
}

export default App;

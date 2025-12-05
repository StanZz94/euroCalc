function App() {
  const lev = 1;
  const euro = 1.95583;

  return (
    <div className="max-w-xs mx-auto">
      <div className="w-[250px] h-auto mx-auto my-4">
        <img src="/logo.png" alt="logo" className="w-full h-auto" />
      </div>

      <div>
        <div className="flex flex-row w-full h-auto justify-between mt-12 font-extrabold mx-auto px-6">
          <button className="text-center rounded-2xl border-2 border-[#A6CD36] text-[#A6CD36] px-3 py-1">Euro to BGN</button>
          <button className="text-center rounded-2xl border-2 border-[#A6CD36] text-[#A6CD36] px-3 py-1">BGN to Euro</button>
        </div>
      </div>

    </div>
  );
}

export default App;

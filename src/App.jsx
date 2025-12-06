import { useState, useEffect } from "react";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("bgnToEuro");

  const euro = 1.95583;

  function convert(value, mode) {
    if (value === "" || isNaN(value)) return "";
    if (mode === "bgnToEuro") return (value / euro).toFixed(2);
    if (mode === "euroToBgn") return (value * euro).toFixed(2);
    return "";
  }

  // 🔥 Live convert when input or mode changes
  useEffect(() => {
    setResult(convert(num, mode));
  }, [num, mode]);

  function resetHandler() {
    setNum("");
    setResult("");
  }

  return (
    <div className="max-w-xs mx-auto text-center">

      <div className="w-[250px] h-auto mx-auto my-8">
        <img src="/logo.png" alt="logo" className="w-full h-auto" />
      </div>

      {/* Mode Buttons */}
      <div className="flex flex-row justify-between mt-6 font-extrabold mx-auto px-2">
        <button
          className={`rounded-2xl border-2 px-3 py-1 ${mode === "bgnToEuro"
            ? "drop-shadow-[0_0_15px_#A6CD36] bg-black text-[#A6CD36] border-[#A6CD36]"
            : "text-white border-white"
            }`}
          onClick={() => setMode("bgnToEuro")}
        >
          BGN to EURO
        </button>

        <button
          className={`rounded-2xl border-2 px-3 py-1 ${mode === "euroToBgn"
            ? "drop-shadow-[0_0_15px_#A6CD36] bg-black text-[#A6CD36] border-[#A6CD36]"
            : "text-white border-white"
            }`}
          onClick={() => setMode("euroToBgn")}
        >
          EURO to BGN
        </button>
      </div>

      {/* Input */}
      <div className="flex flex-row mt-8 items-center justify-center">
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter amount"
          className="border px-3 h-10 rounded-tl rounded-bl w-[170px]
               outline-none focus:outline-none focus:ring-0"
        />

        <button
          className="text-white bg-red-500 px-4 h-10 rounded-tr rounded-br"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>


      {/* Result */}
      <div className="flex flex-row mt-6 w-full font-bold text-xl text-center">
        <p className="text-white mx-auto">Result: {result !== "" && (<span className="text-[#A6CD36]">{result} {mode === "euroToBgn" ? "BGN" : "EURO"}</span>)}</p>
      </div>


    </div>
  );
}

export default App;

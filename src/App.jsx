import { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("bgnToEuro"); // default mode

  const euro = 1.95583; // 1 EUR = 1.95583 BGN

  function euroToBgn() {
    if (!num) return;
    setResult((num * euro).toFixed(2));
  }

  function bgnToEuro() {
    if (!num) return;
    setResult((num / euro).toFixed(2));
  }

  function resetHandler() {
    setNum("");
    setResult("");
  }

  function convertHandler() {
    if (mode === "bgnToEuro") bgnToEuro();
    if (mode === "euroToBgn") euroToBgn();
  }

  return (
    <div className="max-w-xs mx-auto text-center">
      <div className="w-[250px] h-auto mx-auto my-4">
        <img src="/logo.png" alt="logo" className="w-full h-auto" />
      </div>

      {/* Mode Buttons */}
      <div className="flex flex-row justify-between mt-6 font-extrabold mx-auto px-6">
        <button
          className={`rounded-2xl border-2 px-3 py-1 ${
            mode === "bgnToEuro"
              ? "bg-[#A6CD36] text-white border-[#A6CD36]"
              : "text-[#A6CD36] border-[#A6CD36]"
          }`}
          onClick={() => setMode("bgnToEuro")}
        >
          BGN to EURO
        </button>

        <button
          className={`rounded-2xl border-2 px-3 py-1 ${
            mode === "euroToBgn"
              ? "bg-[#A6CD36] text-white border-[#A6CD36]"
              : "text-[#A6CD36] border-[#A6CD36]"
          }`}
          onClick={() => setMode("euroToBgn")}
        >
          EURO to BGN
        </button>
      </div>

      {/* Input */}
      <div className="flex flex-row mt-4 gap-2 items-center">
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter amount"
          className="border px-2 py-1 rounded w-full"
        />

        <button className="text-white bg-red-500 px-3 py-1 rounded" onClick={resetHandler}>
          Reset
        </button>
      </div>

      {/* Convert button */}
      <button
        onClick={convertHandler}
        className="mt-4 w-full bg-[#A6CD36] text-white py-2 rounded-2xl font-bold"
      >
        Convert
      </button>

      {/* Result */}
      {result && (
        <div className="mt-4 font-bold text-lg">
          Result: <span className="text-[#A6CD36]">{result}</span>
        </div>
      )}
    </div>
  );
}

export default App;

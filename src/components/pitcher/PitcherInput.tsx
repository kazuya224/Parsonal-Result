"use client";

interface PitcherInputProps {
  inputs: {
    label: string;
    val: number;
    set: (v: number) => void;
  }[];
}

export default function PitcherInput({ inputs }: PitcherInputProps) {
  return (
    <section className="w-full bg-slate-800/40 backdrop-blur-md p-5 md:p-6 rounded-3xl border border-slate-700/50 shadow-xl">
      <h2 className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em] mb-6">
        投手成績入力
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {inputs.map((item) => (
          <div key={item.label} className="flex flex-col">
            <label className="text-[10px] font-bold text-slate-500 ml-1 mb-1 uppercase">
              {item.label}
            </label>
            <input
              type="number"
              // 投球回(IP)の場合は0.1刻みで入力可能にする
              step={item.label.includes("IP") ? "0.1" : "1"}
              value={item.val || ""}
              onChange={(e) => item.set(Number(e.target.value))}
              className="bg-slate-900/80 border border-slate-700 rounded-xl p-3 text-right text-white font-mono focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
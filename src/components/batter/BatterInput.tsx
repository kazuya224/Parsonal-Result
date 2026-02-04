"use client";

interface BatterInputProps {
  inputs: {
    label: string;
    val: number;
    set: (v: number) => void;
  }[];
}

export default function BatterInput({ inputs }: BatterInputProps) {
  return (
    <section className="w-full bg-slate-800/40 backdrop-blur-md p-5 md:p-6 rounded-3xl border border-slate-700/50 shadow-xl">
      <h2 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-6">
        打者成績入力
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {inputs.map((item) => (
          <div key={item.label} className="flex flex-col">
            <label className="text-[10px] font-bold text-slate-500 ml-1 mb-1 uppercase">
              {item.label}
            </label>
            <input
              type="number"
              value={item.val || ""}
              onChange={(e) => item.set(Number(e.target.value))}
              className="bg-slate-900/80 border border-slate-700 rounded-xl p-3 text-right text-white font-mono focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
// src/components/common/ModeTabs.tsx

type Mode = 'batter' | 'pitcher';

interface ModeTabsProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export default function ModeTabs({ mode, setMode }: ModeTabsProps) {
  return (
    <div className="flex justify-center p-1 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 w-fit mx-auto mb-10">
      <button
        onClick={() => setMode('batter')}
        className={`px-8 py-3 rounded-xl font-black transition-all ${
          mode === 'batter' 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
          : 'text-slate-500 hover:text-slate-300'
        }`}
      >
        野手成績
      </button>
      <button
        onClick={() => setMode('pitcher')}
        className={`px-8 py-3 rounded-xl font-black transition-all ${
          mode === 'pitcher' 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
          : 'text-slate-500 hover:text-slate-300'
        }`}
      >
        投手成績
      </button>
    </div>
  );
}
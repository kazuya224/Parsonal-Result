export function StatCard({ label, value, highlight = false, span2 = false }: { label: string; value: number | string; highlight?: boolean; span2?: boolean }) {
    return (
      <div className={`
        ${span2 ? 'col-span-2' : ''} 
        ${highlight ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-900/20' : 'bg-slate-800/60 border-slate-700/50'} 
        min-h-[100px] md:min-h-[120px] p-4 rounded-2xl border flex flex-col items-center justify-center text-center transition-all
      `}>
        <span className={`text-[10px] font-bold uppercase mb-1 tracking-wider ${highlight ? 'text-blue-100' : 'text-slate-500'}`}>
          {label}
        </span>
        <span className={`text-xl md:text-3xl font-black font-mono leading-none ${highlight ? 'text-white' : 'text-blue-400'}`}>
          {value}
        </span>
      </div>
    );
  }
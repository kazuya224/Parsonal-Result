"use client";

import { StatCard } from "@/components/common/StatsCard";
import { 
  calcIso, calcBabip, calcBbk, calcIsod, calcAbhr 
} from "@/app/utils/calc";

interface BatterResultsProps {
  stats: {
    avg: string | number;
    ops: string | number;
    obp: string | number;
    slg: string | number;
  };
  rawValues: {
    atBats: number;
    oneHits: number;
    twoHits: number;
    threeHits: number;
    homerun: number;
    fourball: number;
    deads: number;
    frys: number;
    strikes: number;
  };
  handleShare: () => void;
}

export default function BatterResults({ stats, rawValues, handleShare }: BatterResultsProps) {
  const { oneHits, twoHits, threeHits, homerun, atBats, strikes, frys, fourball, deads } = rawValues;

  return (
    <div className="w-full flex flex-col gap-6">
      <section className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <StatCard label="AVG" value={stats.avg} highlight />
        <StatCard label="OPS" value={stats.ops} highlight />
        <StatCard label="OBP" value={stats.obp} />
        <StatCard label="SLG" value={stats.slg} />
        <StatCard label="ISO" value={calcIso(oneHits, twoHits, threeHits, homerun, atBats)} />
        <StatCard label="BABIP" value={calcBabip(oneHits, twoHits, threeHits, homerun, atBats, strikes, frys)} />
        <StatCard label="BB/K" value={calcBbk(fourball, strikes)} />
        <StatCard label="IsOD" value={calcIsod(oneHits, twoHits, threeHits, homerun, atBats, fourball, deads, frys)} />
        <StatCard label="AB/HR" value={calcAbhr(atBats, homerun)} span2 />
      </section>

      <div className="bg-slate-800/20 rounded-3xl p-6 md:p-8 border border-slate-700/30 text-center">
        <button 
          onClick={handleShare}
          className="w-full max-w-sm bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-full transition-all active:scale-95 shadow-lg shadow-blue-900/20 uppercase tracking-tighter"
        >
          SNSで成績を共有する
        </button>
      </div>
    </div>
  );
}
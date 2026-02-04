"use client";

import { StatCard } from "@/components/common/StatsCard";
import { calcEra, calcWhip, calcK9, calcBb9, calcWinRate, calcKbb } from "@/app/utils/calc";

interface PitcherResultsProps {
  rawValues: {
    innings: number;     // 投球回
    earnedRuns: number;  // 自責点
    hits: number;        // 被安打
    walks: number;       // 与四球
    strikes: number;     // 奪三振
    wins: number;
    losses: number;
  };
  handleShare: () => void;
}

export default function PitcherResults({ rawValues, handleShare }: PitcherResultsProps) {
  const { innings, earnedRuns, hits, walks, strikes, wins, losses } = rawValues;

  const era = calcEra(earnedRuns, innings);
  const whip = calcWhip(hits, walks, innings);
  const k9 = calcK9(strikes, innings);
  const bb9 = calcBb9(walks, innings);
  const winRate = calcWinRate(wins, losses);
  const kbb = calcKbb(strikes, walks);

  return (
    <div className="w-full flex flex-col gap-6">
      <section className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {/* 重要指標をハイライト */}
        <StatCard label="ERA (防御率)" value={era} highlight />
        <StatCard label="WHIP" value={whip} highlight />
        <StatCard label="K/9 (奪三振率)" value={k9} />
        <StatCard label="K/BB" value={kbb} highlight />
        <StatCard label="BB/9 (与四球率)" value={bb9} />
        <StatCard label="WIN RATE (勝率)" value={winRate} />
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
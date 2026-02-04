"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ModeTabs from "@/components/common/ModeTabs";
import StructuredData from "@/components/seo/StructuredData";
import ExplanatoryText from "@/components/seo/ExplanatoryText";

// Hooks
import { useBatterStats } from "@/hooks/useBatterStats";
import { usePitcherStats } from "@/hooks/usePitcherStats";

// Components
import BatterInput from "@/components/batter/BatterInput";
import BatterResults from "@/components/batter/BatterResults";
import PitcherInput from "@/components/pitcher/PitcherInput";
import PitcherResults from "@/components/pitcher/PitcherResults";

export default function Home() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<'batter' | 'pitcher'>('batter');
  const batterData = useBatterStats(searchParams);
  const pitcherData = usePitcherStats();

  // データを含んだURLを生成して共有
  const handleShare = async () => {
    const params = new URLSearchParams();
    let shareText = "【野球成績計算機】\n";
  
    if (mode === 'batter') {
      // 野手データのセット
      const { rawValues, stats } = batterData;
      params.set("mode", "batter");
      params.set("ab", rawValues.atBats.toString());
      params.set("h1", rawValues.oneHits.toString());
      params.set("h2", rawValues.twoHits.toString());
      params.set("h3", rawValues.threeHits.toString());
      params.set("hr", rawValues.homerun.toString());
      params.set("bb", rawValues.fourball.toString());
      params.set("hbp", rawValues.deads.toString());
      params.set("sf", rawValues.frys.toString());
      params.set("k", rawValues.strikes.toString());
      
      shareText += `打率: ${stats.avg}\nOPS: ${stats.ops}\n`;
    } else {
      // 投手データのセット
      const { rawValues, stats } = pitcherData;
      params.set("mode", "pitcher");
      params.set("ip", rawValues.innings.toString());
      params.set("er", rawValues.earnedRuns.toString());
      params.set("ph", rawValues.hits.toString()); // pHits
      params.set("pb", rawValues.walks.toString()); // pWalks
      params.set("pk", rawValues.strikes.toString()); // pStrikes
      params.set("wins", rawValues.wins.toString())
      params.set("wins", rawValues.losses.toString())
      
      shareText += `防御率: ${stats.era}\nWHIP: ${stats.whip}\n`;
    }
  
    const shareUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    shareText += "詳細は以下のリンクからチェック！\n";
  
    if (navigator.share) {
      try {
        await navigator.share({ title: 'マイ成績シート', text: shareText, url: shareUrl });
      } catch (e) {
        // ユーザーがキャンセルした場合は何もしない
      }
    } else {
      await navigator.clipboard.writeText(`${shareText}${shareUrl}`);
      alert("共有用URLをコピーしました！");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 py-6 md:py-12 px-4 border-t-4 border-blue-500">
      <StructuredData />
      
      <main className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 uppercase">
            野球成績計算機
          </h1>
        </header>

        <ModeTabs mode={mode} setMode={setMode} />

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {mode === 'batter' ? (
            <>
              <div className="lg:col-span-3"><BatterInput inputs={batterData.batterInputs} /></div>
              <div className="lg:col-span-7">
                <BatterResults stats={batterData.stats} rawValues={batterData.rawValues} handleShare={handleShare} />
              </div>
            </>
          ) : (
            <>
              <div className="lg:col-span-3"><PitcherInput inputs={pitcherData.pitcherInputs} /></div>
              <div className="lg:col-span-7">
                <PitcherResults rawValues={pitcherData.rawValues} handleShare={handleShare} />
              </div>
            </>
          )}
        </div>

        <ExplanatoryText mode = {mode} />
      </main>
    </div>
  );
}


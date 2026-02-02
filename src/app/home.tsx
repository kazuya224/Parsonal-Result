"use client";

import { useState, useEffect } from "react";
import { 
  calcAbhr, calcAvg, calcBabip, calcBbk, 
  calcIso, calcIsod, calcObp, calcOps, calcSlg 
} from "./utils/calc";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  const [atBats, setAtBats] = useState(0);
  const [oneHits, setOneHits] = useState(0);
  const [twoHits, setTwoHits] = useState(0);
  const [threeHits, setThreeHits] = useState(0);
  const [homerun, setHomerun] = useState(0);
  const [fourball, setFourball] = useState(0);
  const [deads, setDeads] = useState(0);
  const [frys, setFrys] = useState(0);
  const [strikes, setStrikes] = useState(0);

  // 初回読み込み時にURLのパラメータを確認
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    if (params.ab) setAtBats(Number(params.ab));
    if (params.h1) setOneHits(Number(params.h1));
    if (params.h2) setTwoHits(Number(params.h2));
    if (params.h3) setThreeHits(Number(params.h3));
    if (params.hr) setHomerun(Number(params.hr));
    if (params.bb) setFourball(Number(params.bb));
    if (params.hbp) setDeads(Number(params.hbp));
    if (params.sf) setFrys(Number(params.sf));
    if (params.k) setStrikes(Number(params.k));
  }, [searchParams]);

  const avg = calcAvg(oneHits, twoHits, threeHits, homerun, atBats);
  const ops = calcOps(oneHits, twoHits, threeHits, homerun, atBats, fourball, deads, frys);
  const obp = calcObp(oneHits, twoHits, threeHits, homerun, atBats, fourball, deads, frys);
  const slg = calcSlg(atBats, oneHits, twoHits, threeHits, homerun);

  // データを含んだURLを生成して共有
  const handleShare = async () => {
    // クエリパラメータの構築
    const params = new URLSearchParams();
    params.set("ab", atBats.toString());
    params.set("h1", oneHits.toString());
    params.set("h2", twoHits.toString());
    params.set("h3", threeHits.toString());
    params.set("hr", homerun.toString());
    params.set("bb", fourball.toString());
    params.set("hbp", deads.toString());
    params.set("sf", frys.toString());
    params.set("k", strikes.toString());

    const shareUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    const shareText = `【野球成績計算機】\n打率: ${avg}\nOPS: ${ops}\n詳細は以下のリンクからチェック！\n`;

    if (navigator.share) {
      try {
        await navigator.share({ title: 'マイ成績シート', text: shareText, url: shareUrl });
      } catch (e) {}
    } else {
      await navigator.clipboard.writeText(`${shareText}${shareUrl}`);
      alert("共有用URLをコピーしました！");
    }
  };

  const inputs = [
    { label: "打数 (AB)", val: atBats, set: setAtBats },
    { label: "単打 (1B)", val: oneHits, set: setOneHits },
    { label: "二塁打 (2B)", val: twoHits, set: setTwoHits },
    { label: "三塁打 (3B)", val: threeHits, set: setThreeHits },
    { label: "本塁打 (HR)", val: homerun, set: setHomerun },
    { label: "四球 (BB)", val: fourball, set: setFourball },
    { label: "死球 (HBP)", val: deads, set: setDeads },
    { label: "犠飛 (SF)", val: frys, set: setFrys },
    { label: "三振 (K)", val: strikes, set: setStrikes },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 py-6 md:py-12 px-4 font-sans border-t-4 border-blue-500">
      <main className="max-w-6xl mx-auto">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 uppercase">
            Stat Tracker
          </h1>
        </header>

        {/* レイアウト：スマホは1列、PCは2列(入力3 : 結果7) */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 md:gap-8 items-start">
          
          {/* 左側：入力セクション (30%) */}
          <section className="lg:col-span-3 w-full bg-slate-800/40 backdrop-blur-md p-5 md:p-6 rounded-3xl border border-slate-700/50 shadow-xl">
            <h2 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-6">Game Data Input</h2>
            <div className="grid grid-cols-1 gap-4">
              {inputs.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <label className="text-[10px] font-bold text-slate-500 ml-1 mb-1 uppercase">{item.label}</label>
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

          {/* 右側：結果 & 共有セクション (70%) */}
          <div className="lg:col-span-7 w-full flex flex-col gap-6">
            <section className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <StatCard label="AVG" value={avg} highlight />
              <StatCard label="OPS" value={ops} highlight />
              <StatCard label="OBP" value={obp} />
              <StatCard label="SLG" value={slg} />
              <StatCard label="ISO" value={calcIso(oneHits, twoHits, threeHits, homerun, atBats)} />
              <StatCard label="BABIP" value={calcBabip(oneHits, twoHits, threeHits, homerun, atBats, strikes, frys)} />
              <StatCard label="BB/K" value={calcBbk(fourball, strikes)} />
              <StatCard label="IsOD" value={calcIsod(oneHits, twoHits, threeHits, homerun, atBats, fourball, deads, frys)} />
              <StatCard label="AB/HR" value={calcAbhr(atBats, homerun)} span2 />
            </section>

            <div className="bg-slate-800/20 rounded-3xl p-6 md:p-8 border border-slate-700/30">
              <div className="flex flex-col items-center">
                <p className="text-slate-500 text-[10px] font-bold mb-4 tracking-[0.2em] uppercase">Connect with teammates</p>
                <button 
                  onClick={handleShare}
                  className="w-full max-w-sm bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-full transition-all active:scale-95 shadow-lg shadow-blue-900/20 uppercase tracking-tighter"
                >
                  SNSで成績を共有する
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, highlight = false, span2 = false }: { label: string; value: number | string; highlight?: boolean; span2?: boolean }) {
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
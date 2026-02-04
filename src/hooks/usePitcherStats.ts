// src/hooks/usePitcherStats.ts
import { useState } from "react";
import { calcEra, calcWhip, calcK9, calcBb9, calcWinRate, calcKbb } from "@/app/utils/calc";

export const usePitcherStats = () => {
    // 投手用 State
    const [innings, setInnings] = useState(0);     // 投球回
    const [earnedRuns, setEarnedRuns] = useState(0); // 自責点
    const [hits, setHits] = useState(0);           // 被安打
    const [walks, setWalks] = useState(0);         // 与四球
    const [strikes, setStrikes] = useState(0);     // 奪三振
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);

    // 計算済み指標
    const stats = {
        era: calcEra(earnedRuns, innings),
        whip: calcWhip(hits, walks, innings),
        k9: calcK9(strikes, innings),
        bb9: calcBb9(walks, innings),
        winRate: calcWinRate(wins, losses),
        kbb: calcKbb(strikes, walks),
    };

    // 投手用入力項目の定義
    const pitcherInputs = [
        { label: "投球回 (IP)", val: innings, set: setInnings },
        { label: "勝利 (W)", val: wins, set: setWins },
        { label: "敗戦 (L)", val: losses, set: setLosses },
        { label: "自責点 (ER)", val: earnedRuns, set: setEarnedRuns },
        { label: "被安打 (H)", val: hits, set: setHits },
        { label: "与四球 (BB)", val: walks, set: setWalks },
        { label: "奪三振 (K)", val: strikes, set: setStrikes },
    ];

    return {
        stats,
        rawValues: { innings, earnedRuns, hits, walks, strikes, wins, losses },
        pitcherInputs,
    };
};
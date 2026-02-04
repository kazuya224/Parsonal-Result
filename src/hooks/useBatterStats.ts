// src/hooks/useBatterStats.ts
import { useState, useEffect } from "react";
import { calcAvg, calcOps, calcObp, calcSlg } from "@/app/utils/calc";

export const useBatterStats = (searchParams: URLSearchParams) => {
    const [atBats, setAtBats] = useState(0);
    const [oneHits, setOneHits] = useState(0);
    const [twoHits, setTwoHits] = useState(0);
    const [threeHits, setThreeHits] = useState(0);
    const [homerun, setHomerun] = useState(0);
    const [fourball, setFourball] = useState(0);
    const [deads, setDeads] = useState(0);
    const [frys, setFrys] = useState(0);
    const [strikes, setStrikes] = useState(0);

    // URLパラメータからの復元ロジック
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

    // 主要指標の計算
    const stats = {
        avg: calcAvg(oneHits, twoHits, threeHits, homerun, atBats),
        ops: calcOps(oneHits, twoHits, threeHits, homerun, atBats, fourball, deads, frys),
        obp: calcObp(oneHits, twoHits, threeHits, homerun, atBats, fourball, deads, frys),
        slg: calcSlg(atBats, oneHits, twoHits, threeHits, homerun),
    };

    // Inputコンポーネントに渡すための配列を生成
    const batterInputs = [
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

    return {
        stats,
        rawValues: { atBats, oneHits, twoHits, threeHits, homerun, fourball, deads, frys, strikes },
        batterInputs,
    };
};
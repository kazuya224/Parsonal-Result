// 打率
export const calcAvg = (oneHits: number, twoHits: number, threeHits: number, homerun: number, atBats: number): string => {
    if (atBats === 0) return ".000";
    const avg = (oneHits + twoHits + threeHits + homerun) / atBats;
    return avg.toFixed(3).replace(/^0/, "");
}

// 長打率
export const calcSlg = (atBats: number, oneHits: number, twoHits: number, threeHits: number, homerun: number): string => {
    if (oneHits === 0 && twoHits === 0 && threeHits === 0 && homerun === 0) return ".000";
    const slg = (oneHits + twoHits * 2 + threeHits * 3 + homerun * 4) / atBats;
    return slg.toFixed(3).replace(/^0/, "");
}

//　出塁率
export const calcObp = (atBats: number, oneHits: number, twoHits: number, threeHits: number, homerun: number, fourball: number, deads: number, frys: number): string => {
    const hits = oneHits + twoHits + threeHits + homerun;
    const num = hits + fourball + deads;
    const deno = atBats + fourball + deads + frys;
    if (deno === 0) return ".000";
    const obp = num / deno;
    return obp.toFixed(3).replace(/^0/, "");
}

// OPS
export const calcOps = (atBats: number, oneHits: number, twoHits: number, threeHits: number, homerun: number, fourball: number, deads: number, frys: number): string => {
    const obp = parseFloat(calcObp(oneHits, twoHits, threeHits, homerun, atBats, fourball, deads, frys));
    const slg = parseFloat(calcSlg(atBats, oneHits, twoHits, threeHits, homerun));
    const ops = obp / slg;
    const formattedOps = ops.toFixed(3);
    return ops < 1 ? formattedOps.replace(/^0/, "") : formattedOps;
}

// ISO（純粋な長打率）
export const calcIso = (
    oneHits: number,
    twoHits: number,
    threeHits: number,
    homerun: number,
    atBats: number
): string => {
    const slg = parseFloat(calcSlg(atBats, oneHits, twoHits, threeHits, homerun));
    const avg = parseFloat(calcAvg(oneHits, twoHits, threeHits, homerun, atBats));

    const iso = slg - avg;
    return iso.toFixed(3).replace(/^0/, "");
}
// IsOD（選球眼）
export const calcIsod = (
    oneHits: number,
    twoHits: number,
    threeHits: number,
    homerun: number,
    atBats: number,
    fourball: number,
    deads: number,
    frys: number
): string => {
    const obp = parseFloat(calcObp(oneHits, twoHits, threeHits, homerun, atBats, fourball, deads, frys));
    const avg = parseFloat(calcAvg(oneHits, twoHits, threeHits, homerun, atBats));

    const isod = obp - avg;
    return isod.toFixed(3).replace(/^0/, "");
}

// BB/K（選球眼指標）
export const calcBbk = (fourball: number, strikes: number): string => {
    if (strikes === 0) return fourball > 0 ? "1.000+" : ".000"; // 三振0の場合
    const bbk = fourball / strikes;
    return bbk.toFixed(3);
}

// BABIP（インプレー長打率）
export const calcBabip = (
    oneHits: number,
    twoHits: number,
    threeHits: number,
    homerun: number,
    atBats: number,
    strikes: number,
    frys: number
): string => {
    const hits = oneHits + twoHits + threeHits + homerun;
    const numerator = hits - homerun;
    const denominator = atBats - strikes - homerun + frys;

    if (denominator <= 0) return ".000";

    const babip = numerator / denominator;
    return babip.toFixed(3).replace(/^0/, "");
}

// AB/HR（本塁打率）
export const calcAbhr = (atBats: number, homerun: number): string => {
    if (homerun === 0) return "0.00";
    const abhr = atBats / homerun;
    return abhr.toFixed(2); // 本塁打率は通常、小数点第2位まで表示
}
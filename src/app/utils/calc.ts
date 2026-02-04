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

/**
 * 投球回(IP)を計算用数値に変換 (例: 7.1 -> 7.333)
 */
export const convertInnings = (ip: number): number => {
    const fullInnings = Math.floor(ip);
    const outs = Math.round((ip - fullInnings) * 10); // .1 や .2 を取り出す
    return fullInnings + outs / 3;
};

/**
 * 防御率 (ERA)
 */
export const calcEra = (earnedRuns: number, ip: number): string => {
    const convertedIp = convertInnings(ip);
    if (convertedIp === 0) return "-.---";
    return ((earnedRuns * 9) / convertedIp).toFixed(2);
};

/**
 * WHIP (1イニングあたりの許した走者)
 */
export const calcWhip = (hits: number, walks: number, ip: number): string => {
    const convertedIp = convertInnings(ip);
    if (convertedIp === 0) return "-.--";
    return ((hits + walks) / convertedIp).toFixed(2);
};

/**
 * 奪三振率 (K/9)
 */
export const calcK9 = (strikes: number, ip: number): string => {
    const convertedIp = convertInnings(ip);
    if (convertedIp === 0) return "-.--";
    return ((strikes * 9) / convertedIp).toFixed(2);
};

// 与四球率 (BB/9): (与四球 × 9) ÷ 投球回
export const calcBb9 = (walks: number, innings: number): string => {
    if (innings <= 0) return "0.00";
    const result = (walks * 9) / innings;
    return result.toFixed(2);
};

// 勝率: 勝利数 ÷ (勝利数 + 敗戦数)
export const calcWinRate = (wins: number, losses: number): string => {
    const totalDecisions = wins + losses;
    if (totalDecisions <= 0) return ".000";
    const result = wins / totalDecisions;
    return result.toFixed(3);
};

// K/BB: 奪三振 ÷ 与四球
export const calcKbb = (strikes: number, walks: number): string => {
    if (walks <= 0) return strikes > 0 ? strikes.toFixed(2) : "0.00";
    const result = strikes / walks;
    return result.toFixed(2);
};
import ExplanatoryText from "@/components/seo/ExplanatoryText";

export default function PitcherGuide() {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 text-slate-200 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">
        投手成績（防御率・WHIP）の計算方法と目安
      </h1>
      <p className="mb-8 text-slate-400">
        投手の安定感を示す「防御率」や、1イニングに出したランナー数を示す「WHIP」について解説します。
      </p>
      
      {/* 既存のコンポーネントをピッチャーモードで呼び出す */}
      <ExplanatoryText mode="pitcher" />

      <div className="mt-8">
        <a href="/" className="text-blue-400 hover:underline">← 計算機に戻る</a>
      </div>
    </main>
  );
}
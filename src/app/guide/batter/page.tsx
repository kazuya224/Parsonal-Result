import ExplanatoryText from "@/components/seo/ExplanatoryText";

export default function BatterGuide() {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 text-slate-200">
      <h1 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">
        野手成績の計算方法と評価基準
      </h1>
      <ExplanatoryText mode="batter" />
      <div className="mt-12">
        <a href="/" className="text-blue-400 hover:underline">← 計算機に戻る</a>
      </div>
    </main>
  );
}
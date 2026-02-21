interface ExplanatoryTextProps {
    mode: 'batter' | 'pitcher';
  }
  
  export default function ExplanatoryText({ mode }: ExplanatoryTextProps) {
    return (
      <article className="mt-16 prose prose-invert max-w-none border-t border-slate-800 pt-10">
        {mode === 'batter' ? (
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">打率・OPS・出塁率の計算方法と早見表【野球成績計算機】</h2>
            <p className="text-slate-400">
              このスタットトラッカーは、草野球プレーヤーやマネージャー向けに開発された<strong>野球成績計算機</strong>です。
              基本的な打率の計算はもちろん、現代野球で重視されるOPSやBABIP、ISOなどのセイバーメトリクス指標にも対応しています。
            </p>
  
            <div className="grid md:grid-cols-2 gap-8 mt-8 border-t border-slate-800 pt-8">
              <section>
                <h3 className="text-lg font-bold text-white mb-2">打率（AVG）の計算方法</h3>
                <p className="text-sm text-slate-400">
                  打率は「安打数 ÷ 打数」で算出されます。四球や死球、犠飛は打数に含まれないため、これらを正確に入力することが正確な個人成績算出のコツです。
                  打率 = 安打 ÷ 打数
                    例）100打数30安打の場合 → 30 ÷ 100 = .300
                </p>
              </section>
  
              <section>
                <h3 className="text-lg font-bold text-white mb-2">OPS</h3>
                <p className="text-sm text-slate-400">
                OPS ＝ 出塁率 + 長打率。打者の得点貢献度を最も正確に表す指標の一つと言われています。
                目安
                  .700 → 平均
                  .800 → 優秀
                  .900 → 一流
                  1.000以上 → MVP級
                  OPSは打者の総合力を最も簡単に表す指標です。
                </p>
              </section>
  
              <section>
                <h3 className="text-lg font-bold text-white mb-2">長打率（SLG）</h3>
                <p className="text-sm text-slate-400">
                  1打数あたりの平均塁打数を示します。単打より二塁打、三塁打、本塁打の価値を高く評価するため、パワーヒッターの能力を測るのに適しています。
                  長打率 = （単打×1 + 二塁打×2 + 三塁打×3 + 本塁打×4）÷ 打数
                  目安
                    .400 → 平均
                    .450 → 優秀
                    .500以上 → パワーヒッター
                </p>
              </section>
  
              <section>
                <h3 className="text-lg font-bold text-white mb-2">出塁率（OBP）</h3>
                <p className="text-sm text-slate-400">
                  安打だけでなく、四球・死球を含めて「いかにアウトにならずに出塁したか」を計る指標です。打率より重視されることも多く、犠飛は分母に含まれる点に注意が必要です。
                  出塁率 = （安打 + 四球 + 死球）÷（打数 + 四球 + 死球 + 犠飛）
                  出塁率の目安
                    .320 → 平均
                    .350 → 優秀
                    .400 → 一流打者
                </p>
              </section>
  
              <section>
                <h3 className="text-lg font-bold text-white mb-2">ISO（純粋な長打力）</h3>
                <p className="text-sm text-slate-400">
                  「長打率 - 打率」で算出され、単打の要素を完全に排除した純粋な長打力を示します。プロ野球では、0.200を超えれば屈指の強打者と評価されます。
                  ISO ＝ 長打率 − 打率
                  目安：
                    .140 → 平均
                    .200 → 強打者
                    .250以上 → 超一流
                </p>
              </section>
  
              <section>
                <h3 className="text-lg font-bold text-white mb-2">BABIP（インプレー打率）</h3>
                <p className="text-sm text-slate-400">
                  本塁打を除いた打球がフェアゾーンに飛んだ際の安打率です。一般的に0.300前後に収束するため、運の良し悪しや打球の質を分析するのに使われます。
                  BABIP = （安打 − 本塁打）÷（打数 − 三振 − 本塁打 + 犠飛）
                </p>
              </section>
  
              <section>
                <h3 className="text-lg font-bold text-white mb-2">BB/K（選球眼の指標）</h3>
                <p className="text-sm text-slate-400">
                  四球数を三振数で割った値です。1.00を超えると、三振が少なく四球を選べる「選球眼の良い打者」とされ、プロ野球の強打者でも高く評価される指標です。
                  BB/K = 四球 ÷ 三振
                </p>
              </section>
  
              <section>
                <h3 className="text-lg font-bold text-white mb-2">IsOD（選球眼の純粋値）</h3>
                <p className="text-sm text-slate-400">
                  「出塁率 - 打率」で計算されます。ヒット以外の方法でどれだけ出塁したかを示し、安打に頼らない出塁能力（四死球を選ぶ能力）を可視化します。
                </p>
              </section>
              <section>
                <h2>よくある質問（FAQ）</h2>

                <h3>打率は何割からすごい？</h3>
                <p>一般的に.300を超えると好打者、.350を超えるとトップクラスとされます。</p>

                <h3>OPSはどれくらいが優秀？</h3>
                <p>.800以上で優秀、.900以上で一流打者と評価されます。</p>
              </section>
            </div>
          </section>
        ) : (
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">投手成績の指標解説と計算方法</h2>
            <p className="text-slate-400 mb-6">
              防御率やWHIPなど、投手の支配力や安定感を測るためのセイバーメトリクス指標を解説します。
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-lg font-bold text-white mb-2">防御率 (ERA)</h3>
                <p className="text-sm text-slate-400">
                  投手の最も基本的な指標で、「9イニング（1試合）投げた場合に何点取られるか」を示します。
                  自責点と投球回から算出されます。
                  防御率 = （自責点 × 9）÷ 投球回
                  目安:
                    4点台 → 平均
                    3点台 → 優秀
                    2点台 → エース級
                </p>
              </section>
  
              <section>
                <h3 className="text-lg font-bold text-white mb-2">WHIP</h3>
                <p className="text-sm text-slate-400">
                  1イニングあたりに許した走者（被安打＋与四球）を示す指標です。
                  1.20以下なら非常に優秀とされます。
                  WHIP = （被安打 + 与四球）÷ 投球回
                  目安:
                    1.30 → 平均
                    1.20 → 優秀
                    1.00以下 → 超一流
                </p>
              </section>
  
              <section>
                <h3 className="text-lg font-bold text-white mb-2">奪三振率 (K/9)</h3>
                <p className="text-sm text-slate-400">
                  9イニングあたりいくつ三振を奪えるかを示します。
                  投手の支配力を測る指標です。
                  奪三振率 = （奪三振 × 9）÷ 投球回
                  9.0以上で三振を取れる投手と評価されます。
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">与四球率 (BB/9)</h3>
                <p className="text-sm text-slate-400">
                    9イニングあたりにいくつ四球を出すかを示す指標です。3.00以下なら制球が良いとされ、2.00を下回ると非常に優秀なコントロールの持ち主と言えます。
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">K/BB</h3>
                <p className="text-sm text-slate-400">
                    「奪三振 ÷ 与四球」で算出され、投手の総合的な能力を示す非常に重要な指標です。3.50を超えればトップクラスの投手と評価されます。
                    K/BB = 奪三振 ÷ 与四球
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2">勝率</h3>
                <p className="text-sm text-slate-400">
                    登板試合でどれだけ勝利に貢献したかを示します。野球の勝率は、小数第3位まで表示し、1割を「.100」と表記するのが一般的です。
                    勝率 = 勝利 ÷ （勝利 + 敗戦）
                </p>
              </section>
              <section>
                <h3>防御率は何点台が良い？</h3>
                <p>3点台前半で優秀、2点台ならエース級とされます。</p>
              </section>
            </div>
          </section>
        )}
      </article>
    );
  }
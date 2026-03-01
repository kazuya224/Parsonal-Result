import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 text-slate-200 leading-relaxed">
      <h1 className="text-3xl font-bold mb-8 border-b border-slate-700 pb-2">
        プライバシーポリシー
      </h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. 広告の配信について</h2>
        <p>
          当サイトでは、第三者配信の広告サービス「Google アドセンス」を利用しています。
          広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報 「Cookie」(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. アクセス解析ツールについて</h2>
        <p>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
          このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. 免責事項</h2>
        <p>
          当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          特に、野球成績の計算結果の正確性については万全を期しておりますが、公式な記録を保証するものではありません。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. 著作権について</h2>
        <p>
          当サイトに掲載されている文章・画像の無断転載を禁止します。
          当サイトは著作権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、
          <Link href="/contact" className="text-blue-600 hover:underline">
            お問い合わせフォーム
          </Link>
          よりご連絡ください。
        </p>
      </section>

      <footer className="mt-12 text-sm text-gray-500">
        策定日：2026年2月13日
      </footer>
    </main>
  );
}
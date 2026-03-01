export default function ContactPage() {
    return (
      <main className="max-w-4xl mx-auto p-6 md:p-12 text-slate-200">
        <h1 className="text-3xl font-bold mb-8 border-b border-slate-700 pb-2">お問い合わせ</h1>
        <p className="mb-6">
          当サイトに関するご意見・ご質問、または著作権等に関する問題がございましたら、以下のフォームよりご連絡ください。
        </p>
        <div className="aspect-video w-full">
          {/* Googleフォームの埋め込みコードをここに貼り付け */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdtdm9AxBQqN44Vw5zJ6utU6I3IkUqUNy_Fv8MT2fbUwYw38g/viewform?usp=header"
            width="100%"
            height="800"
            className="rounded-lg bg-slate-800"
          >
            読み込んでいます…
          </iframe>
        </div>
      </main>
    );
  }
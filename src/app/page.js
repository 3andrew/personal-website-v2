import { Header } from "@/components/Header";
import { Content } from "@/components/Content";

export default function Home() {
  return (
    <div>
      <head>
        <title>Andrew Lin</title>
        <meta name="description" content="personal website" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <Content />
          </div>
        </div>
      </div>
    </div>
    
  );
}

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
            {/* Left static column */}
            <header className="w-1/2 p-4 sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-24">
              <h1 className="text-xl font-bold">Static Column</h1>
              <p>This column does not scroll.</p>
            </header>

            {/* Right scrollable column */}
            <main className="w-1/2 p-4 h-full">
              <h1 className="text-xl font-bold">Scrollable Column</h1>
              <div className="space-y-4">
                {[...Array(50)].map((_, i) => (
                  <p key={i}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
                  </p>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
    
  );
}

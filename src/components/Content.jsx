export function Content() {
    return (
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
    );
    
}
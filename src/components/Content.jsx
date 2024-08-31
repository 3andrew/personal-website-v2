export function Content() {
    return (
        <main className="w-1/2 p-4 h-full">
            <h1 className="text-xl font-bold">Scrollable Column</h1>
            <div className="space-y-4">
            {[...Array(50)].map((_, i) => (
                <p key={i}>
                    text text text text text text text text text text text text text text         
                </p>
            ))}
            </div>
        </main>
    );
    
}
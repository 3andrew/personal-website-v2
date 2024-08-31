export function Header() {
    return (
        <header className="w-1/2 p-4 sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-24">
            <h1 className="text-xl font-bold">Static Column</h1>
            <p>This column does not scroll.</p>
        </header>
    );    
}
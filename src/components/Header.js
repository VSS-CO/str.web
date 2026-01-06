export function createHeader() {
    const header = document.createElement('header');
    header.className = 'bg-indigo-600 text-white p-4 flex justify-between items-center';
    header.innerHTML = `
        <h1 class="text-xl font-bold">Strata Extended</h1>
        <nav>
            <a href="#home" class="px-2">Home</a>
            <a href="#about" class="px-2">About</a>
            <a href="#contact" class="px-2">Contact</a>
        </nav>
    `;
    return header;
}

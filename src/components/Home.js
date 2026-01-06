export function createHome() {
    const main = document.createElement('main');
    main.innerHTML = `
        <h2 class="text-2xl font-semibold mb-2">Welcome to Strata Extended!</h2>
        <p class="mb-4">This is a fully modular, production-ready frontend served by a Ruby backend.</p>
        <button id="demo-btn" class="bg-indigo-500 text-white px-4 py-2 rounded">Click me</button>
    `;
    main.querySelector('#demo-btn').addEventListener('click', () => {
        alert('Hello from Strata frontend!');
    });
    return main;
}

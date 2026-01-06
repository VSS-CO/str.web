export function initRouter(app) {
    function renderRoute() {
        const hash = location.hash.replace('#', '');
        app.find('main').remove();
        const main = document.createElement('main');
        main.innerHTML = `<p class="text-lg">Current route: ${hash || 'home'}</p>`;
        app.append(main);
    }

    window.addEventListener('hashchange', renderRoute);
    renderRoute(); // initial render
}

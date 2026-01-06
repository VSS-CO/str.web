import { createHeader } from './components/Header.js';
import { createFooter } from './components/Footer.js';
import { createHome } from './components/Home.js';
import { initRouter } from './utils/router.js';

$(document).ready(() => {
    const app = $('#app');
    app.append(createHeader());
    app.append(createHome());
    app.append(createFooter());

    initRouter(app);
});

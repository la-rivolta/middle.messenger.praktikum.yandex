import tpl from './index.hbs';
import chats from './src/pages/chats/index.js';
import error_404 from './src/pages/errors/404/index.js';
import error_500 from './src/pages/errors/500/index.js';
import login_form from './src/pages/login-form/index.js';
import reg_form from './src/pages/reg-form/index.js';
import settings from './src/pages/settings/profile/index.js';

import server from './server.js';


console.log(tpl);

let path = window.location.href;
let urlPage = path.toString().substr(21, path.length);;
console.log(urlPage);

if(urlPage == "/"){
    document.getElementById('root').innerHTML = tpl({
        login_form: login_form()
    });
}

else if(urlPage == "/chats"){
    document.getElementById('root').innerHTML = tpl({
        chats: chats()
    });
}
else if(urlPage == "/error_404"){
    document.getElementById('root').innerHTML = tpl({
        error_404: error_404()
    });
}

else if(urlPage == "/error_500"){
    document.getElementById('root').innerHTML = tpl({
        error_500: error_500()
    });
}

else if(urlPage == "/reg_form"){
    document.getElementById('root').innerHTML = tpl({
        reg_form: reg_form()
    });
}

else if(urlPage == "/settings"){
    document.getElementById('root').innerHTML = tpl({
        settings: settings()
    });
}



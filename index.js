import tpl from './index.hbs';
import chats from './src/pages/chats/index.js';
import error_404 from './src/pages/errors/404/index.js';
import error_500 from './src/pages/errors/500/index.js';
import login_form from './src/pages/login-form/index.js';
import reg_form from './src/pages/reg-form/index.js';
import settings from './src/pages/settings/profile/index.js';

let path = window.location.pathname;
let rootId = document.getElementById('root');

switch (path) {
    case "/chats":
        rootId.innerHTML = tpl({
            content: chats()
        });  
        break;
    case "/error_404":
        rootId.innerHTML = tpl({
            content: error_404()
        });  
        break;
    case "/error_500":
        rootId.innerHTML = tpl({
            content: error_500()
        });
        break;
    case "/reg_form":
        rootId.innerHTML = tpl({
            content: reg_form()
        });
        break;
    case "/settings":
        rootId.innerHTML = tpl({
            content: settings()
        });
        break;
    default:
      rootId.innerHTML = tpl({
        content: login_form()
    });
  }
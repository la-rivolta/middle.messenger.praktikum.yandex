import tpl from './tpl.hbs';
import title from '../../components/form/title/index.js';
import login_field from '../../components/form/fields/login/index.js';
import password_field from '../../components/form/fields/password/index.js';
import button from '../../components/form/button/index.js';
import link from '../../components/form/link/index.js';
import './style.scss';


export default document.getElementById('root').innerHTML = tpl({
    title: title('Вход'),
    button: button('btn1', 'Авторизация'),
    login_field: login_field('inp1', 'логин'),
    password_field: password_field('inp2', 'пароль'),
    link: link('#', 'Зарегистрироваться')
});
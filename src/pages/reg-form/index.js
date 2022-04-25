import tpl from './tpl.hbs';
import title from '../../components/form/title/index.js';
import login_field from '../../components/form/fields/login/index.js';
import password_field from '../../components/form/fields/password/index.js';
import button from '../../components/form/button/index.js';
import link from '../../components/form/link/index.js';
import mail_field from '../../components/form/fields/email/index.js';
import name_field from '../../components/form/fields/name/index.js';
import './style.scss';


export default document.getElementById('root').innerHTML = tpl({
    title: title('Регистрация'),
    button: button('btn1', 'Зарегистрироваться'),
    name_field: name_field('inp5', 'имя'),
    name_field1: name_field('inp6', 'имя'),
    mail_field:  mail_field('inp4', 'почта'),
    login_field: login_field('inp1', 'логин'),
    password_field: password_field('inp2', 'пароль'),
    password_field1: password_field('inp3', 'пароль'),
    link: link('#', 'Войти')
});
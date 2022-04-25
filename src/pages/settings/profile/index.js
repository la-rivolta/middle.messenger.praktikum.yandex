import tpl from './tpl.hbs';
import avatar_img from '../../../components/profile/profile_avatar/avatar_img/index.js';
import avatar_title from '../../../components/profile/profile_avatar/avatat_title/index.js';
import profile_email from '../../../components/profile/profile_fields/email/index.js';
import profile_login from '../../../components/profile/profile_fields/login/index.js';
import profile_name from '../../../components/profile/profile_fields/name/index.js';
import profile_name_in_chat from '../../../components/profile/profile_fields/name_in_chat/index.js';
import profile_password from '../../../components/profile/profile_fields/password/index.js';
import profile_phone from '../../../components/profile/profile_fields/phone/index.js';
import avatar_picture from '../../../static/img/avatar.svg';
import button from '../../../components/form/button/index.js';
import '../change_password/style.scss';
import './style.scss';


export default document.getElementById('root').innerHTML = tpl({
    avatar_img: avatar_img(avatar_picture),
    avatar_title: avatar_title('Иван'),
    profilse_email: profile_email('input1', 'почта', 'ivanov@gmail.com'),
    profile_login: profile_login('input2', 'логин', 'ivanovi'),
    profile_name: profile_name('input3', 'имя', 'Иван'),
    profile_name: profile_name('input4', 'фамилия', 'Иванов'),
    profile_name_in_chat: profile_name_in_chat('input5', 'имя в чате', 'ivanovi'),
    profile_password: profile_password('input6', 'пароль', 'dsfsdfs'),
    profile_phone: profile_phone('input6', 'телефон', '+79889335678'),
    button: button('btn1', 'Сохранить')
});
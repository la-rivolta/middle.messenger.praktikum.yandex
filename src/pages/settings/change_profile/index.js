import tpl from './tpl.hbs';
import avatar_img from '../../../components/profile/profile_avatar/avatar_img/index.js';
import profile_email from '../../../components/profile/profile_fields/email/index.js';
import profile_login from '../../../components/profile/profile_fields/login/index.js';
import profile_name from '../../../components/profile/profile_fields/name/index.js';
import profile_name_in_chat from '../../../components/profile/profile_fields/name_in_chat/index.js';
import profile_phone from '../../../components/profile/profile_fields/phone/index.js';
import avatar_picture from '../../../static/img/avatar.svg';
import link_profile from '../../../components/profile/links/link_profile/index.js';
import link_exit from '../../../components/profile/links/link_exit/index.js';
import '../change_password/style.scss';
import './style.scss';


export default document.getElementById('root').innerHTML = tpl({
    avatar_img: avatar_img(avatar_picture),
    profile_email: profile_email('input1', 'почта', 'ivanov@gmail.com'),
    profile_login: profile_login('input2', 'логин', 'ivanovi'),
    profile_name: profile_name('input3', 'имя', 'Иван'),
    profile_name1: profile_name('input4', 'фамилия', 'Иванов'),
    profile_name_in_chat: profile_name_in_chat('input5', 'имя в чате', 'ivanovi'),
    profile_phone: profile_phone('input6', 'телефон', '+79889335678'),
    link_profile: link_profile('#', 'Изменить данные'),
    link_profile1: link_profile('#', 'Изменить пароль'),
    link_exit: link_exit('#', 'Выйти')
});
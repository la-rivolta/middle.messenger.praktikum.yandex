import tpl from './tpl.hbs';
import avatar_img from '../../../components/profile/profile_avatar/avatar_img/index.js';
import profile_password from '../../../components/profile/profile_fields/password/index.js';
import avatar_picture from '../../../static/img/avatar.svg';
import './style.scss';


export default document.getElementById('root').innerHTML = tpl({
    avatar_img: avatar_img(avatar_picture),
    profile_password: profile_password('inp1', 'Старый пароль', 'dfgdsf'),
    profile_password1: profile_password('inp2', 'Новый пароль', 'dfgdfd'),
    profile_password2: profile_password('inp3', 'Повторите пароль', 'dsfgsdfg')
});
import tpl from './tpl.hbs';
import './style.scss';


export default document.getElementById('root').innerHTML = tpl({ value: 'Тут будут чаты'});
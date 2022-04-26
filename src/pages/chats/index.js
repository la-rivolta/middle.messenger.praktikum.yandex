import tpl from './tpl.hbs';
import './style.scss';


export default () => tpl({ value: 'Тут будут чаты'});

//export default document.getElementById('root').innerHTML = tpl({ value: 'Тут будут чаты'});
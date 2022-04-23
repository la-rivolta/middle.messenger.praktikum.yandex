import tpl from './tpl.hbs';
import error_number from '../../../components/error_view/error_number/index.js';
import error_link from '../../../components/error_view/error_link/index.js';
import error_descr from '../../../components/error_view/error_descr/index.js';
import './style.scss';


document.getElementById('root').innerHTML = tpl({
    error_number: error_number('404'),
    error_descr: error_descr('Не туда попали'),
    error_link: error_link('#', 'Назад к чатам'),
});
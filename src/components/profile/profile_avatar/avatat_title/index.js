import Handlebars from 'handlebars/dist/handlebars.runtime';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('input_login', tpl);

export default (value) => {
    return tpl({value});
}
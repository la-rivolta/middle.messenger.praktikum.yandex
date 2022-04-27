import Handlebars from 'handlebars/dist/handlebars.runtime';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('input_password', tpl);

export default (id, input_value, value) => {
    return tpl({id, input_value, value});
}
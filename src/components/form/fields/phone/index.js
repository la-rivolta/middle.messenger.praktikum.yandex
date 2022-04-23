import Handlebars from 'handlebars/dist/handlebars.runtime';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('input_phone', tpl);

export default (id, value) => {
    return tpl({id, value});
}
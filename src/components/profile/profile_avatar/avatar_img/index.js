import Handlebars from 'handlebars/dist/handlebars.runtime';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('avatar_img', tpl);

export default (src) => {
    return tpl({src});
}
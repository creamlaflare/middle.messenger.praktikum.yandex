import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages = {
  'chat': [ Pages.ChatPage ],
  'login': [ Pages.LoginPage ],
  'register': [ Pages.RegisterPage ],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page) {
  const [ source, args ] = pages[page];
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(args);
}

document.addEventListener('DOMContentLoaded', () => navigate('register'));

document.addEventListener('click', e => {
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
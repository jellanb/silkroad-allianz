import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SilkroadSurvivalApp from "./silkroad-survival-app";
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import Turk from './lang/tr.json';
import English from './lang/en.json';
import UseLanguageSetting from './hooks/useLanguageSetting'

const locale = navigator.language;
let lang;
    switch (locale) {
        case 'es':{
            lang = Spanish;
            break;
        }
        case 'en':{
            lang = English;
            break;
        }
        case 'tr':{
            lang = Turk;
            break;
        }
        default :{
            lang = English;
            break;
        }
    }

ReactDOM.render(
  <div>
      <IntlProvider locale ={locale} messages={lang}>
          <SilkroadSurvivalApp hooksLanguage={UseLanguageSetting}/>
      </IntlProvider>
  </div>,
  document.getElementById('root')
);


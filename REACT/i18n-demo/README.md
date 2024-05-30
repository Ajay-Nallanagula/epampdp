# React_i18n
https://lokalise.com/blog/react-i18n-intl/ 

npm i -S react-intl

package : "react-intl": "^5.4.7",

This application is a demonstration of the Internationalization in React. 

Step 0:
install package : "react-intl": "^5.4.7",

Step 1:
Create different languages files 
src/lang 
    ar.json,fr.json,en.json

Step 2: 
Create a context , to wrap the user-preferred language change and pass it in the context  

import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import French from '../lang/fr.json';
import Arabic from '../lang/ar.json';
import English from '../lang/en.json';

export const Context = React.createContext();

//
const local = navigator.language;

let lang;
if (local === 'en') {
    lang = English;
}else {
    if (local === 'fr') {
        lang = French;
    } else {
        lang = Arabic;
    }
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'en') {
            setMessages(English);
        } else {
            if (newLocale === 'fr'){
                setMessages(French);
            } else {
                setMessages(Arabic);
            }
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

    );
}


export default Wrapper;

Step 3:
import {IntlProvider} from 'react-intl';
Inside custom-provider wrap the component in IntlProvider
 <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

Step 4: Inside the component 
import {FormattedMessage, FormattedDate, FormattedNumber, FormattedPlural, FormattedTime} from 'react-intl';
import {Context} from "./components/Wrapper";

//There are many other components 
  <FormattedMessage
          id = "app.channel.plug"
          defaultMessage="Tutorial brought to you by Lokalise"
          values = {{blogName: "Lokalise"}}
        />
        <br/>
        <FormattedPlural
            id = "app.plural"
            defaultMessage="{amount, plural, =0 {no languages} one {# one language} few {# several languages} many {# lots of languages} other {# wrong fromat}}"
            values = {{amount: 90}}
        />
        <br/>
        <FormattedDate
            value={props.date}
            year = 'numeric'
            month= 'long'
            day = 'numeric'
            weekday = 'long'
        />
        <br/>
        <FormattedNumber
            value={20.42}
            style="currency"
            currencyDisplay="symbol"
            currency="USD"
        /><br/>

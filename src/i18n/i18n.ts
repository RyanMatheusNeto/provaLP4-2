import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslate from '../locale/en.json'
import frTranslate from '../locale/fr.json'
import itTranslate from '../locale/it.json'
import esTranslate from '../locale/es.json'

i18n.use(initReactI18next).init({

    resources: {
        en: {
            ...enTranslate
        },
        es: {
            ...esTranslate
        },
        fr: {
            ...frTranslate
        },
        it: {
            ...itTranslate
        },
    },
    lng: 'en', 
})

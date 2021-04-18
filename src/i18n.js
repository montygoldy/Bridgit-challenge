import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from 'i18next-xhr-backend';

i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: `${process.env.PUBLIC_URL}/i18n/{{lng}}.json`,
        },

        fallbackLng: "en",
        debug: false,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }

    });

export default i18n;
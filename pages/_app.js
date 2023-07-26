import '@/styles/globals.css'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['sr_SP', 'en'],
    fallbackLng: "sr_SP",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json'
    }
  });

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

import '@/styles/globals.css'
import '@/styles/css/style.css'
import Link from 'next/link'
import { useRouter } from 'next/router'


import {
  HydrationProvider,
  Server,
  Client,
} from "react-hydration-provider";


import i18n from "i18next";
import i18next from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next";
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
  const { t } = useTranslation();

  const router = useRouter();

  return (
    // <HydrationProvider>
    <div>
      {/* <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link onClick={() => {
                if (locale == 'en') {
                  i18next.changeLanguage('en')
                } else {
                  i18next.changeLanguage('sr_SP')
                }
              }} href={router.asPath} locale={locale}>
                {locale == 'en' ? 'engleski' : 'srpski'} ide
              </Link>
            </li>
          ))}
        </ul>
        <p>ovaj ostaje uvek</p>
        <Link href={'/'}>Back Home</Link>

        <h1>krecemo</h1>
        <div>
          <button>
            padajuci meni
          </button>
        </div>
        <Client>
          <h2>{t('nav1')}</h2>
        </Client> */}

      <Component {...pageProps} />
    </div>
    // {/* </HydrationProvider> */}
  )
}

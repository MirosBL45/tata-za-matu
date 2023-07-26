'use client'

import { HydrationProvider, Server, Client } from 'react-hydration-provider';
import styles from './LandingPage.module.css';

import i18n from 'i18next';
import i18next from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['sr_SP', 'en'],
    fallbackLng: 'sr_SP',
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

function LandingPage() {
  const { t } = useTranslation();

  return (
    <HydrationProvider>
      <Client>
        <div className={styles.landingMain}>
          <div className={styles.masterContainer}>
            <div className={styles.landingContainer}>
              <header>
                <h1 className={styles.mainHeadline}>{t('landing')}</h1>
              </header>
            </div>
          </div>
        </div>
      </Client>
    </HydrationProvider>
  );
}

export default LandingPage;

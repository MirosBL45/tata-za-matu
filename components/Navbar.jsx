import Link from 'next/link';
import Image from 'next/image';
import { HydrationProvider, Server, Client } from 'react-hydration-provider';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { GrLanguage } from 'react-icons/gr';
import { AiOutlineRight } from 'react-icons/ai';
import { MdOutlineDarkMode } from 'react-icons/md';
import { ImSun } from 'react-icons/im';

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

function Navbar() {
  //set light/dark theme
  const [light, setLight] = useState(true);
  function onDarkLight() {
    if (light) {
      setLight(false);
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
      setLight(true);
    }
  }

  //get theme from local storage
  useEffect(() => {
    getLocalTheme();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    saveLocalTheme();
    // eslint-disable-next-line
  }, [light]);

  function saveLocalTheme() {
    localStorage.setItem('lightTheme', JSON.stringify(light));
  }

  function getLocalTheme() {
    if (localStorage.getItem('lightTheme') === null) {
      localStorage.setItem('lightTheme', 'true');
    } else {
      let themeLocal = JSON.parse(localStorage.getItem('lightTheme'));
      setLight(themeLocal);
      if (!themeLocal) {
        document.body.classList.add('darkMode');
      } else {
        document.body.classList.remove('darkMode');
      }
    }
  }

  const { t } = useTranslation();
  const router = useRouter();

  return (
    <HydrationProvider>
      <Client>
        <div className="navMain">
          <div className="masterContainer">
            <div className="navContainer">
              <div>
                <Link href="/">
                  <Image
                    src="/logoBioetera.png"
                    alt="logo"
                    width={59}
                    height={72}
                  />
                </Link>
              </div>
              <div className="navinks">
                <nav>
                  <Link className="navLink" href="/">
                    <div className="linkText">{t('nav1')}</div>
                    <div className="lineHover"></div>
                  </Link>
                  <Link className="navLink" href="/">
                    <div className="linkText">{t('nav2')}</div>
                    <div className="lineHover"></div>
                  </Link>
                  <Link className="navLink" href="/">
                    <div className="linkText">{t('nav3')}</div>
                    <div className="lineHover"></div>
                  </Link>
                </nav>
                <div className="lngTheme">
                  <div className="lng">
                    <GrLanguage className="planet" />
                    <AiOutlineRight className="arrow" />
                    <span>{t('lang')}</span>
                    <ul className="choose_language">
                      {router.locales.map((locale) => (
                        <li key={locale}>
                          <Link
                            className="the_lang"
                            onClick={() => {
                              if (locale == 'en') {
                                i18next.changeLanguage('en');
                              } else {
                                i18next.changeLanguage('sr_SP');
                              }
                            }}
                            href={router.asPath}
                            locale={locale}
                          >
                            {locale == 'en' ? 'EN' : 'SR'}
                            <Image
                              className="lang"
                              width={23}
                              height={23}
                              src={
                                locale == 'en' ? '/britain.png' : '/serbia.png'
                              }
                              alt={locale == 'en' ? 'EN' : 'SR'}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div onClick={onDarkLight}>
                    {light ? (
                      <MdOutlineDarkMode className="theme" />
                    ) : (
                      <ImSun className="theme" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Client>
    </HydrationProvider>
  );
}

export default Navbar;

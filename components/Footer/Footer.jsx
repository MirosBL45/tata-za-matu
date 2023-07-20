import { useTranslation } from 'react-i18next';
import { HydrationProvider, Server, Client } from 'react-hydration-provider';
import styles from './Footer.module.css';

function Footer() {
  const { t } = useTranslation();
  let year = new Date().getFullYear();

  return (
    <HydrationProvider>
      <Client>
        <div className={styles.greenBackground}>
          <footer>
            <div>
              <p>
                {t('footer1')}{' '}
                <a target={'_blank'} href="https://github.com/MirosBL45">
                  Miroslav Jović
                </a>
              </p>
              <p>
                {t('footer2')} &copy; {year} Miroslav Jović. {t('footer3')}
              </p>
            </div>
          </footer>
        </div>
      </Client>
    </HydrationProvider>
  );
}

export default Footer;

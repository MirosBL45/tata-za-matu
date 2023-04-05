import { useTranslation } from 'react-i18next';
import {
  // HydrationContext,
  HydrationProvider,
  // useHydrated,
  Server,
  Client,
  // createHydration,
  // useComponentHydrated,
} from 'react-hydration-provider';

function Footer() {
  const { t } = useTranslation();
  let year = new Date().getFullYear();

  return (
    <HydrationProvider>
      <Client>
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
      </Client>
    </HydrationProvider>
  );
}

export default Footer;

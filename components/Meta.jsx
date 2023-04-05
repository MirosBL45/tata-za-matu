import Head from 'next/head';

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/logoMJ.png" />
      <link rel="shortcut icon" href="/logoMJ.png" type="image/x-icon" />
    </Head>
  );
}

//! SMISLITI KLJUCNE RECI I SVE TO

Meta.defaultProps = {
  title: 'Bioetera kreme | Home',
  keywords: 'Bioetera kreme | Home',
  description: 'Bioetera kreme | Home',
};

export default Meta;

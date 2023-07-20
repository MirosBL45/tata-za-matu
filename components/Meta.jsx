import Head from 'next/head';

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/tatazamatu_logo.svg" />
      <link
        rel="shortcut icon"
        href="/tatazamatu_logo.svg"
        type="image/x-icon"
      />
    </Head>
  );
}

//! SMISLITI KLJUCNE RECI I SVE TO

Meta.defaultProps = {
  title: 'Tata za matu | Matematika za sve',
  keywords: 'Tata za matu | Matematika za sve',
  description: 'Tata za matu | Matematika za sve',
};

export default Meta;

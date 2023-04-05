import { gql } from 'graphql-request';

import graphCmsClient from '../lib/graphCmsClient';

function ProductPage({ zalice }) {
  return (
    <>
      <pre>{JSON.stringify(zalice, null, 2)}</pre>
      <p>Ispod da se najzad uradi</p>
      <div className="masterContainer">
        <div className="gridContent">
          <div className="contentBox bigBox">
            <div className="bigImage">
              <img
                className="bigImage"
                src={zalice.images[0].url}
                alt={zalice.name}
              />
            </div>
            <div className="bigImage">
              <img
                className="bigImage"
                src={zalice.coverPhoto.url}
                alt={zalice.name}
              />
            </div>
            <div className="bigBoxText">
              <p className="titlecontentBox">lorem ipsum</p>
              <h2 className="headlinecontentBox">{zalice.name}</h2>
              <p
                className="descriptionBox"
                dangerouslySetInnerHTML={{
                  __html: zalice.description.html,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths({ locales }) {
  let paths = [];

  const { zalices } = await graphCmsClient.request(gql`
    {
      zalices {
        id
      }
    }
  `);

  for (const locale of locales) {
    paths = [
      ...paths,
      ...zalices.map((product) => ({ params: { id: product.id }, locale })),
    ];
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  const { zalice } = await graphCmsClient.request(
    gql`
      query zalicePageQuery($id: ID!, $locale: Locale!) {
        zalice(where: { id: $id }, locales: [$locale]) {
          id
          name
          slug
          description {
            html
          }
          images {
            height
            url
          }
          coverPhoto {
            height
            url
          }
        }
      }
    `,
    { id: params.id, locale }
  );

  return {
    props: {
      zalice,
    },
    revalidate: 30,
  };
}

export default ProductPage;

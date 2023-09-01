import Head from "next/head";

import { useRouter } from "next/router";
import graphCmsClient from "@/library/graphCmsClient";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

import {
  HydrationContext,
  HydrationProvider,
  useHydrated,
  Server,
  Client,
  createHydration,
  useComponentHydrated,
} from "react-hydration-provider";
import Navbar from "@/components/Navbar/Navbar";
import LandingPage from "@/components/LandingPage/LandingPage";

const QUERY = gql`
  query IndexPageQuery($locale: Locale!) {
    zalices(locales: [$locale]) {
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
`;

export async function getStaticProps({ locale }) {
  const { zalices } = await graphCmsClient.request(QUERY, { locale });

  return {
    props: {
      zalices,
    },
    revalidate: 30,
  };
}

export default function Home({ zalices }) {
  const router = useRouter();

  return (
    <>
      <Head>
        {/* <title>{t('title')}</title> */}
        <title>Tata za matu | Matematika za sve</title>
        <meta name="description" content="Tata za matu | Matematika za sve" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tatazamatu_logo.svg" />
        <link
          rel="shortcut icon"
          href="/tatazamatu_logo.svg"
          type="image/x-icon"
        />
      </Head>
      <HydrationProvider>
        <Navbar />
        <LandingPage />
        <main>
          <div>
            {zalices.map((product, index) => (
              // <div key={index}>
              //   <Link href={`/posts/${product.slug}`} locale={router.locale}>
              //     <h1>{product.name}</h1>
              //   </Link>
              // </div>
              <div key={product.id}>
                <Link href={product.id} locale={router.locale}>
                  <h1>{product.name}</h1>
                </Link>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </HydrationProvider>
    </>
  );
}

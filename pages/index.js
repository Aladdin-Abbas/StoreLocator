import axios from "axios";
import Head from "next/head";
import { HomePage } from "../src/components/home/home-page";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Store Locator</title>
        <meta name="description" content="Store Locator" />
        <link rel="icon" href="/images/icons/store-locator.svg" />
      </Head>

      <HomePage data={data} />
    </div>
  );
}

export async function getStaticProps() {
  let data, error;
  try {
    data = await Promise.all([
      axios.get("https://api-task.bit68.com/en/api/slider_image"),
      axios.get("https://api-task.bit68.com/en/api/categories"),
      axios.get("https://api-task.bit68.com/en/api/brands"),
      axios.get("https://api-task.bit68.com/en/api/items/?type=featured"),
      axios.get("https://api-task.bit68.com/en/api/items/?type=most_viewed"),
    ]);
  } catch (error) {
    error = error;
  }

  if (error || !data) {
    return {
      notFound: true,
    };
  }

  data = data.map(data => data.data.results);

  return {
    props: {
      data: data,
    },
    revalidate: 10 * 60 * 10,
  };
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FormProvider } from "../context/FormContext";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FormProvider>
  );
}

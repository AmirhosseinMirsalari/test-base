import MainLayout from "@/components/layout/mainLayout";
import Providers from "@/components/providers/providers";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Providers>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Providers>
  );
};

export default App;

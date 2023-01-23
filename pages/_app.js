import '@/styles/globals.css';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const supportedChainIds = [5];
// const connectors = {
// };

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider supportedChains={supportedChainIds}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
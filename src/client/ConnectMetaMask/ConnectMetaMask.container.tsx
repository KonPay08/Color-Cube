import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEtherBalance, useEthers, Config } from '@usedapp/core';
import { ConnectMetamaskTemplate } from "./ConnectMetamask.template";

type ConnectMetamaskProps = {
  config: Config,
};

export const ConnectMetamask: React.FC<ConnectMetamaskProps> = ({ config }) => {
  const { activateBrowserWallet, account, deactivate, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);
  const router = useRouter();
  const props: Parameters<typeof ConnectMetamaskTemplate>[0] = {
    activateBrowserWallet,
    account,
    router,
    etherBalance,
  };
  
  if (!config.readOnlyUrls[chainId]) return <p>Please use either Mainnet or Goerli testnet.</p>
  return (
    <ChakraProvider>
      <ConnectMetamaskTemplate {...props} />
    </ChakraProvider>
  );
};

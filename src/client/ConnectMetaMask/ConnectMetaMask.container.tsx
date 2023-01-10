import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEtherBalance, useEthers, Config } from '@usedapp/core';
import { ConnectMetamaskTemplate } from "./ConnectMetamask.template";
import { useCallNFTLogin } from "./useCallNFTLogin";
import { useState } from "react";

type ConnectMetamaskProps = {
  config: Config,
};

export const ConnectMetamask: React.FC<ConnectMetamaskProps> = ({ config }) => {
  const { activateBrowserWallet, account, deactivate, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);
  const router = useRouter();
  const hasValidNFT = useCallNFTLogin();
  const [authenticated, setAuthenticated] = useState(false);
  async function handleClick() {
    setAuthenticated(await hasValidNFT(account))
  };


  const props: Parameters<typeof ConnectMetamaskTemplate>[0] = {
    activateBrowserWallet,
    account,
    router,
    etherBalance,
    handleClick,
    authenticated,
  };
  
  if (!config.readOnlyUrls[chainId]) return <p>Please use either Mainnet or Goerli testnet.</p>
  return (
    <ChakraProvider>
      <ConnectMetamaskTemplate {...props} />
    </ChakraProvider>
  );
};

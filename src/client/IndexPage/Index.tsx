import { css } from "@emotion/react";
import { Mainnet, DAppProvider, Config, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import { ConnectMetamask } from "../ConnectMetaMask/ConnectMetaMask.container";

export const IndexPage = () => {
  const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: getDefaultProvider('mainnet'),
      [Goerli.chainId]: getDefaultProvider('goerli'),
    },
  };
  return (
    <div css={$IndexPage}>
      <DAppProvider config={config}>
        <div css={$container}>
          <ConnectMetamask config={config} />
        </div>
      </DAppProvider>
    </div>
  );
};
const $IndexPage = css`
  height: 100vh;
  width: 100vw;
`;
const $container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
`;
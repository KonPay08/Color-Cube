import { ActivateBrowserWallet } from "@usedapp/core/dist/esm/src/providers"
import { BigNumber } from "ethers"
import { NextRouter } from "next/router"
import { formatEther } from "@ethersproject/units";
import { Box, Text } from "@chakra-ui/react";
import { ChakraButtonTemplate } from "../../presentation/ChakraButton/ChakraButton.template";
import { MouseEvent } from "react";
import { css } from "@emotion/react";

type ConnectMetamaskTemplateProps = {
  activateBrowserWallet: ActivateBrowserWallet,
  account: string,
  router: NextRouter,
  etherBalance: BigNumber,
};

export const ConnectMetamaskTemplate: React.FC<ConnectMetamaskTemplateProps> = props => {
  const handleConnectWallet = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.activateBrowserWallet();
  };
  const handlePostRouter = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.router.push("/PlayPage");
  };
  
  return (
    <div css={$container}>
      {props.account 
        ? <Box>
            <Text color="black" fontSize="md">
              {props.etherBalance && parseFloat(formatEther(props.etherBalance)).toFixed(5)} ETH
            </Text>
            <ChakraButtonTemplate 
              label="Play"
              onClickHandler={handlePostRouter}
            />
            Let's Click to Play!
          </Box>
        : <div>
            <ChakraButtonTemplate
              label="Connect Metamask"
              onClickHandler={handleConnectWallet}
            />
            Please Connect Metamask Wallet
          </div>
      }
    </div>
  );
};

const $container = css`
  text-align: center;
`;
import { ActivateBrowserWallet } from "@usedapp/core/dist/esm/src/providers"
import { BigNumber } from "ethers"
import { NextRouter } from "next/router"
import { formatEther } from "@ethersproject/units";
import { Box, Text, Button } from "@chakra-ui/react";
import { ChakraButtonTemplate } from "../../presentation/ChakraButton/ChakraButton.template";
import { MouseEvent } from "react";
import { css } from "@emotion/react";

type ConnectMetamaskTemplateProps = {
  activateBrowserWallet: ActivateBrowserWallet,
  account: string,
  router: NextRouter,
  etherBalance: BigNumber,
  handleClick(): Promise<void>,
  authenticated: boolean,
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
      {/* {props.account 
        ? <Box>
            <Text color="black" fontSize="md">
              {props.etherBalance && parseFloat(formatEther(props.etherBalance)).toFixed(5)} ETH
            </Text>
            <Button
              onClick={props.handleClick}
            >
              Show the limited contents?
            </Button>
            {props.authenticated && 
              <Text fontSize="2xl" fontWeight="600">
                You are a special user!
              </Text>
            }
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
      } */}  <ChakraButtonTemplate 
      label="Play"
      onClickHandler={handlePostRouter}
    />
    Let's Click to Play!
    </div>
  );
};

const $container = css`
  text-align: center;
`;
import { useEthers } from "@usedapp/core";
import { Contract, utils } from "ethers";
import ABI from "../../../mock/nft-login-abi.json";

const CONTRACT_ADDRESS = "0x43dD8ca6f882F4B80EA65dF6707858a407CE5252";

export const useCallNFTLogin = () => {
  const { library } = useEthers();
  const inteface = new utils.Interface(ABI.abi)
  const contract = new Contract(CONTRACT_ADDRESS, inteface, library);
  return async (address: string): Promise<boolean> => {
    const balance = await contract.balanceOf(address);
    return parseInt(balance.toString()) > 0 // NFTを持っているとtrueを返す
  };
};

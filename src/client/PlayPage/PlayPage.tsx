import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { ChakraButtonTemplate } from "../../presentation/ChakraButton/ChakraButton.template";
import { View } from "./View/View.container";

export const PalyPage = () => {
  const router = useRouter();
  const handlePostRouter = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/");
  };
  
  return (
    <div css={$IndexPage}>
      <div css={$viewcontainer}>
        <ChakraButtonTemplate
          label="HOME"
          onClickHandler={handlePostRouter}
        />
        <View />
      </div>
    </div>
  );
};

const $IndexPage = css`
  margin: -8px;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(90deg, rgba(65, 164, 253, 0.42), rgba(14, 244, 255, 0.42));
`;

const $viewcontainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
`
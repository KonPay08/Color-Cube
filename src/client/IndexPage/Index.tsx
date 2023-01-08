import { css } from "@emotion/react";
import { View } from "../View.container"

export const IndecPage = () => {
  return (
    <div css={$IndexPage}>
      <div css={$viewcontainer}>
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
/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import { Surface } from "../useSurface"
import { CubeBack } from "./Cube.back"
import { CubeBottom } from "./Cube.bottom"
import { CubeFront } from "./Cube.front"
import { CubeLeft } from "./Cube.left"
import { CubeRight } from "./Cube.right"
import { CubeTop } from "./Cube.top"

type Props = {
  view: Surface,
};

export const Cube: React.FC<Props> = props => {
  return (
    <div css={$canvas}>
      <div css={$cube}>
        <CubeFront view={props.view}/>
        <CubeBack view={props.view}/>
        <CubeLeft view={props.view}/>
        <CubeRight view={props.view}/>
        <CubeTop view={props.view}/>
        <CubeBottom view={props.view}/>
      </div>
    </div>
  );
};

const $canvas = css`
  margin: 0 80px;
  height: 100px;
  transform-style: preserve-3d;
  perspective: 30cm;
  perspective-origin: 10cm -10cm;
`;
const $cube = css`
  margin: 0 auto;
  width: 100px;
  transform-style: preserve-3d;
  transform-origin: 50px 50px;
  transform: rotate3d(1,1,1,1deg);
  /* animation: 15s linear infinite CubeRotation; */
  @keyframes CubeRotation {
  0% { transform: rotate3d(1,1,1,0deg); }
  100% { transform: rotate3d(1,1,1,360deg); }
}
`;
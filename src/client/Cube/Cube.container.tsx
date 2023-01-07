import { css } from "@emotion/react";
import { Surface } from "../useSurface"
import { CubeTemplate } from "./Cube.template";

type Props = {
  view: Surface,
};

export const Cube: React.FC<Props> = props => {
  return (
    <div css={$canvas}>
      <div css={$cube}>
        <CubeTemplate view={props.view.surface1} direction="front" />
        <CubeTemplate view={props.view.surface6} direction="bottom" />
        <CubeTemplate view={props.view.surface3} direction="back" />
        <CubeTemplate view={props.view.surface4} direction="left" />
        <CubeTemplate view={props.view.surface2} direction="right" />
        <CubeTemplate view={props.view.surface5} direction="top" />
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
import { css } from "@emotion/react";

export const $main_container = css`
  margin: 10px 10px;
  display: flex;
  width: 100px;
  height: 100px;
  border: 1px solid;
  box-sizing: border-box;
  position: absolute;
  background-color: white;
  
  &[data-is-direction="front"] {
    transform: translateZ(50px);
  };
  &[data-is-direction="back"] {
    transform: rotateY(180deg) translateZ(50px);
  };
  &[data-is-direction="left"] {
    transform: rotateY(-90deg) translateZ(50px);
  };
  &[data-is-direction="right"] {
    transform: rotateY(90deg) translateZ(50px);
  };
  &[data-is-direction="top"] {
    transform: rotateX(90deg) translateZ(50px);
  };
  &[data-is-direction="bottom"] {
    transform: rotateX(-90deg) translateZ(50px);
  };
`;

export const $color = (color: string) =>  css`
  background-color: ${color};
  width: 48px;
  height: 48px;
  border: 1px solid;
  border-radius: 3px;
`;
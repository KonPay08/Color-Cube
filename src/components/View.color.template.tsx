/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
import { Cube } from "./Cube/Cube";
import { Surface } from "./useSurface";

type Props = {
  view: Surface,

  handleSurface_Vertica_Left_Back(): void,
  handleSurface_Vertical_Left_Front(): void,
  handleSurface_Vertica_Right_Back(): void,
  handleSurface_Vertical_Right_Front(): void,

  handleSurface_Beside_Top_Left(): void,
  handleSurface_Beside_Bottom_Left(): void,
  handleSurface_Beside_Top_Right(): void,
  handleSurface_Beside_Bottom_Right(): void,
};

export const ViewColorTemplate: React.FC<Props> = props => {

  return(
    <div css={$container}>
      <div css={$top_rotation_button}>
        <button onClick={props.handleSurface_Vertica_Left_Back}>↑</button>
        <button onClick={props.handleSurface_Vertica_Right_Back}>↑</button>
      </div>

      <div css={$cube_container}>
        <div css={$left_rotation_button}>
          <button onClick={props.handleSurface_Beside_Top_Left}>←</button>
          <button onClick={props.handleSurface_Beside_Bottom_Left}>←</button>
        </div>

        <Cube view={props.view} />

        <div css={$right_rotation_button}>
          <button onClick={props.handleSurface_Beside_Top_Right}>→</button>
          <button onClick={props.handleSurface_Beside_Bottom_Right}>→</button>
         </div>
      </div>

      <div css={$buttom_rotation_button}>
        <button onClick={props.handleSurface_Vertical_Left_Front}>↓</button>
        <button onClick={props.handleSurface_Vertical_Right_Front}>↓</button>
      </div>
    </div>
  )
};

const $container = css`
  margin-top: 100px;
  & button {
    margin: 10px;
  }
`

const $cube_container = css`
  display: flex;
  justify-content: center;
  margin: 40px 0 60px;
`
const $top_rotation_button = css`
  text-align: center;
`
const $left_rotation_button = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`
const $right_rotation_button = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`
const $buttom_rotation_button = css`
  text-align: center;
`
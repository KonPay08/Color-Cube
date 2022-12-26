/** @jsxImportSource @emotion/react */ 
import { css } from "@emotion/react";
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

export const ViewTemplate: React.FC<Props> = props => {

  return(
    <div css={$wraper}>
      <div>
        <button onClick={props.handleSurface_Vertica_Left_Back}>↑回転</button>
        <button onClick={props.handleSurface_Vertica_Right_Back}>↑回転</button>
      </div>

      <div css={$surface_wraper}>
        <div css={$surface_wraper_container}>
          <div css={$surface_button}>
            <div>
              <button onClick={props.handleSurface_Beside_Top_Left}>←回転</button>
            </div>
            <div>
              <button onClick={props.handleSurface_Beside_Bottom_Left}>←回転</button>
            </div>
          </div>

          <div css={$container}>
            <div>
              {props.view.surface1[0]}
              {props.view.surface1[2]}
            </div>
            <div>
              {props.view.surface1[1]}
              {props.view.surface1[3]}
            </div>
          </div>

          <div css={$surface_button}>
            <div>
              <button onClick={props.handleSurface_Beside_Top_Right} >回転→</button>
            </div>
            <div>
              <button onClick={props.handleSurface_Beside_Bottom_Right} >回転→</button>
            </div>
          </div>
        </div>

        <button onClick={props.handleSurface_Vertical_Left_Front}>↓回転</button>
        <button onClick={props.handleSurface_Vertical_Right_Front}>↓回転</button>
      </div>

      <div css={$container}>
        <div>
          {props.view.surface2[0]}
          {props.view.surface2[2]}
        </div>
        <div>
          {props.view.surface2[1]}
          {props.view.surface2[3]}
        </div>
      </div>

      <div css={$container}>
        <div>
          {props.view.surface3[0]}
          {props.view.surface3[2]}
        </div>
        <div>
          {props.view.surface3[1]}
          {props.view.surface3[3]}
        </div>
      </div>

      <div css={$container}>
        <div>
          {props.view.surface4[0]}
          {props.view.surface4[2]}
        </div>
        <div>
          {props.view.surface4[1]}
          {props.view.surface4[3]}
        </div>
      </div>

      <div css={$container}>
        <div>
          {props.view.surface5[0]}
          {props.view.surface5[2]}
        </div>
        <div>
          {props.view.surface5[1]}
          {props.view.surface5[3]}
        </div>
      </div>

      <div css={$container}>
        <div>
          {props.view.surface6[0]}
          {props.view.surface6[2]}
        </div>
        <div>
          {props.view.surface6[1]}
          {props.view.surface6[3]}
        </div>
      </div>

      

    </div>
  )
};

const $wraper = css`
  margin: 100px auto 0;
  text-align: center;
`

const $container = css`
  margin: 10px 10px;
`;

const $surface_button = css`
  /* display: flex; */
`

const $surface_wraper_container = css`
  display: flex;
  text-align: center;
  justify-content: center;
  
`;

const $surface_wraper = css`
  margin-bottom: 100px;
`
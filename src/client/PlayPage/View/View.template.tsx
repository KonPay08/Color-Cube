import React from 'react'
import { css } from "@emotion/react";
import { useEffect } from "react";
import { DirectionButton } from "../../../presentation/DirectionButton/DirectionButton.template";
import { CubeTemplate } from "../../PlayPage/Cube/Cube.template";
import { MyDialogTemplate, MyDialogProps } from "../../../presentation/MyDialog.template";
import { surface, Surface } from "../useSurface";

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

  handleDestination_right(): void,
  handleDestination_left(): void,
  
  modalConfig?: MyDialogProps | undefined
  randomSurface(): void,
  handleResetClick: () => Promise<void>,
  handleRandomClick: () => Promise<void>,
  complete: () => Promise<void>,
};

export const ViewTemplate: React.FC<Props> = props => {

  useEffect(() => {
    props.randomSurface();
  },[]);

  useEffect(() => {
    if(props.view === surface) props.complete();
  },[props.view]);
  
  return (
    <>
      {props.modalConfig && <MyDialogTemplate {...props.modalConfig} />}
      <div css={$container}>
        <div css={$surface_button}>
          <DirectionButton onClickhandler={props.handleDestination_left}  size="medium" label="左回転" />
          <DirectionButton onClickhandler={props.handleDestination_right}  size="medium" label="右回転" />
          {/* <DirectionButton onClickhandler={props.handleResetClick}  size="medium" label="Reset" /> */}
          <DirectionButton onClickhandler={props.handleRandomClick}  size="medium" label="Random" />
        </div>
        <div css={$top_rotation_button}>
          <DirectionButton onClickhandler={props.handleSurface_Vertica_Left_Back} direction="top" size="small" />
          <DirectionButton onClickhandler={props.handleSurface_Vertica_Right_Back} direction="top" size="small" />
        </div>

        <div css={$cube_container}>
          <div css={$left_rotation_button}>
          <DirectionButton onClickhandler={props.handleSurface_Beside_Top_Left} direction="left" size="small" />
          <DirectionButton onClickhandler={props.handleSurface_Beside_Bottom_Left} direction="left" size="small" />
          </div>

          <CubeTemplate view={props.view} />

          <div css={$right_rotation_button}>
            <DirectionButton onClickhandler={props.handleSurface_Beside_Top_Right} direction="right" size="small" />
            <DirectionButton onClickhandler={props.handleSurface_Beside_Bottom_Right} direction="right" size="small" />
          </div>
        </div>

        <div css={$buttom_rotation_button}>
          <DirectionButton onClickhandler={props.handleSurface_Vertical_Left_Front} direction="bottom" size="small" />
          <DirectionButton onClickhandler={props.handleSurface_Vertical_Right_Front} direction="bottom" size="small" />
        </div>
      </div>
    </>
  )
};

const $container = css`
  & button {
    margin: 10px;
  };
`

const $surface_button = css`
  text-align: center;
`

const $cube_container = css`
  display: flex;
  justify-content: center;
  margin: 40px 0 40px;
`
const $top_rotation_button = css`
  text-align: center;
`
const $left_rotation_button = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const $right_rotation_button = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const $buttom_rotation_button = css`
  text-align: center;
`
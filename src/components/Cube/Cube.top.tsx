/** @jsxImportSource @emotion/react */ 
import { Surface } from "../useSurface"
import { $color, $main_container } from "./$Cube.style";

type Props = {
  view: Surface,
};

export const CubeTop: React.FC<Props> = props => {

  return (
    <div css={$main_container} data-is-direction="top">
      <div>
        <div css={$color(props.view.surface5[0])} />
        <div css={$color(props.view.surface5[1])} />
      </div>
      <div>
        <div css={$color(props.view.surface5[2])} />
        <div css={$color(props.view.surface5[3])} />
      </div>
    </div>
  );
};
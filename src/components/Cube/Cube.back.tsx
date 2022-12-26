/** @jsxImportSource @emotion/react */ 
import { Surface } from "../useSurface"
import { $color, $main_container } from "./$Cube.style";

type Props = {
  view: Surface,
};

export const CubeBack: React.FC<Props> = props => {

  return (
    <div css={$main_container} data-is-direction="back">
      <div>
        <div css={$color(props.view.surface3[0])} />
        <div css={$color(props.view.surface3[1])} />
      </div>
      <div>
        <div css={$color(props.view.surface3[2])} />
        <div css={$color(props.view.surface3[3])} />
      </div>
    </div>
  );
};
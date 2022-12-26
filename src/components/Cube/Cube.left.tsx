/** @jsxImportSource @emotion/react */ 
import { Surface } from "../useSurface"
import { $color, $main_container } from "./$Cube.style";

type Props = {
  view: Surface,
};

export const CubeLeft: React.FC<Props> = props => {

  return (
    <div css={$main_container} data-is-direction="left">
      <div>
        <div css={$color(props.view.surface4[0])} />
        <div css={$color(props.view.surface4[1])} />
      </div>
      <div>
        <div css={$color(props.view.surface4[2])} />
        <div css={$color(props.view.surface4[3])} />
      </div>
    </div>
  );
};
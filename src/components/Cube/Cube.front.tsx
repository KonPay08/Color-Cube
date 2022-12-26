/** @jsxImportSource @emotion/react */ 
import { Surface } from "../useSurface"
import { $color, $main_container } from "./$Cube.style";

type Props = {
  view: Surface,
};

export const CubeFront: React.FC<Props> = props => {

  return (
    <div css={$main_container} data-is-direction="front">
      <div>
        <div css={$color(props.view.surface1[0])} />
        <div css={$color(props.view.surface1[1])} />
      </div>
      <div>
        <div css={$color(props.view.surface1[2])} />
        <div css={$color(props.view.surface1[3])} />
      </div>
    </div>
  );
};
/** @jsxImportSource @emotion/react */ 
import { Surface } from "../useSurface"
import { $color, $main_container } from "./$Cube.style";

type Props = {
  view: Surface,
};

export const CubeRight: React.FC<Props> = props => {

  return (
    <div css={$main_container} data-is-direction="right">
      <div>
        <div css={$color(props.view.surface2[0])} />
        <div css={$color(props.view.surface2[1])} />
      </div>
      <div>
        <div css={$color(props.view.surface2[2])} />
        <div css={$color(props.view.surface2[3])} />
      </div>
    </div>
  );
};
/** @jsxImportSource @emotion/react */ 
import { Surface } from "../useSurface"
import { $color, $main_container } from "./$Cube.style";

type Props = {
  view: Surface,
};

export const CubeBottom: React.FC<Props> = props => {

  return (
    <div css={$main_container} data-is-direction="bottom">
      <div>
        <div css={$color(props.view.surface6[0])} />
        <div css={$color(props.view.surface6[1])} />
      </div>
      <div>
        <div css={$color(props.view.surface6[2])} />
        <div css={$color(props.view.surface6[3])} />
      </div>
    </div>
  );
};
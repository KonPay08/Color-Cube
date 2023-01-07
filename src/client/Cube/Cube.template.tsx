/** @jsxImportSource @emotion/react */ 
import { $color, $main_container } from "./$Cube.style";

type Props = {
  view: string[],
  direction: string,
};

export const CubeTemplate: React.FC<Props> = props => {

  return (
    <div css={$main_container} data-is-direction={props.direction}>
      <div>
        <div css={$color(props.view[0])} />
        <div css={$color(props.view[1])} />
      </div>
      <div>
        <div css={$color(props.view[2])} />
        <div css={$color(props.view[3])} />
      </div>
    </div>
  );
};
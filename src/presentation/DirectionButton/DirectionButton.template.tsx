import { css } from "@emotion/react";
import { DirectionIcon } from "./DirectionIcon";

interface ButtonProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClickhandler?: () => void;
  direction?:  "left" | "right" | "top" | "bottom";
}

export const DirectionButton: React.FC<ButtonProps> = props => {

  return (
    <button
      css={$button}
      type="button"
      data-is-size={props.size}
      onClick={props.onClickhandler}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <DirectionIcon direction={props.direction}/>
      {props.label}
    </button>
  );
};

const $button = css`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border-color: #1ea7fd;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  background-color: #0ea0fa;
  color: white;

  &:hover {
    opacity: 0.8;
  }

  &[data-is-size="small"] {
    font-size: 20px;
    padding: 5px 8px;
  }
  &[data-is-size="medium"] {
    font-size: 14px;
    padding: 11px 20px;
  }
  &[data-is-size="large"] {
    font-size: 16px;
    padding: 12px 24px;
  }
`


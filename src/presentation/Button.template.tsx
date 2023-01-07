import { css } from "@emotion/react";

interface ButtonProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClickhandler?: () => void;
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      css={$button}
      type="button"
      data-is-size={props.size}
      onClick={props.onClickhandler}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.label}
    </button>
  );
};

const $button = css`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  background-color: #1ea7fd;
  color: white;

  &[data-is-size="small"] {
    font-size: 12px;
    padding: 10px 16px;
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


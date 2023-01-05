/** @jsxImportSource @emotion/react */ 
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from '@mui/material';
import { css } from "@emotion/react";

export type MyDialogProps = {
  onClose: (value: string) => void,
  title?: string,
  message?: string,
};

export const MyDialog: React.FC<MyDialogProps> = props => {
  return (
    <div css={$container}>
      <Dialog open onClose={() => props.onClose("close")} >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.message}</DialogContentText>
          <DialogActions>
            <Button onClick={() => props.onClose("ok")}>OK</Button>
            <Button onClick={() => props.onClose("cancel")} autoFocus>Cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const $container = css`
  z-index: 100;
`;

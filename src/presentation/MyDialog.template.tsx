import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from '@mui/material';

export type MyDialogProps = {
  onClose: (value: string) => void,
  title?: string,
  message?: string,
  approveText?: string,
  rejectionText?: string,
  isComplete?: boolean,
};

export const MyDialogTemplate: React.FC<MyDialogProps> = props => {
  return (
      <Dialog open onClose={() => props.onClose("close")} >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.message}</DialogContentText>
          <DialogActions>
            <Button onClick={() => props.onClose("ok")}>{props.approveText}</Button>
            {!props.isComplete && <Button onClick={() => props.onClose("cancel")} autoFocus>{props.rejectionText}</Button>}
          </DialogActions>
        </DialogContent>
      </Dialog>
  );
};

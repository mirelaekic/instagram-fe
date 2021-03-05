import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { ListGroup } from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  settingButton: {
    cursor: "pointer",
  },
  classes: { borderRadius: "20px" },
});

const DialogContent = withStyles((theme) => ({
  root: { padding: "0" },
}))(MuiDialogContent);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <span>
        <SettingsIcon
          onClick={handleClickOpen}
          className={classes.settingButton}
        />
      </span>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={classes.dialog}
      >
        <DialogContent dividers>
          <ListGroup variant="flush" className="text-center">
            <ListGroup.Item className="px-5">Change Password</ListGroup.Item>
            <ListGroup.Item className="px-5">Nametag</ListGroup.Item>
            <ListGroup.Item className="px-5">Apps and Websites</ListGroup.Item>
            <ListGroup.Item className="px-5">Notifications</ListGroup.Item>
            <ListGroup.Item className="px-5">
              Privacy and security
            </ListGroup.Item>
            <ListGroup.Item className="px-5">Login Activity</ListGroup.Item>
            <ListGroup.Item className="px-5">
              Emails from instagram
            </ListGroup.Item>
            <ListGroup.Item className="px-5">Report a problem</ListGroup.Item>
            <ListGroup.Item className="px-5">Log Out</ListGroup.Item>
            <ListGroup.Item className="px-5">Cancel</ListGroup.Item>
          </ListGroup>
        </DialogContent>
      </Dialog>
    </div>
  );
}

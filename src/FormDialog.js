
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';

function FormDialog (props) {

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const uid = props.auth.currentUser.uid;

  const resetData = () => {
    setTitle("");
    setDescription("");
    setCompany("");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    resetData()
    setOpen(false);
  };

  const sendJobData = async (event) => {
      event.preventDefault();
      
      await props.firestore.collection('jobs').add({
          title: title,
          description: description,
          company: company,
          applied: false,
          interview: false,
          offer: false,
          uid: uid,
          createDate: new Date(),
      })

      resetData();

      handleClose()
  }

  return (
    <div>
      <Button size="large" variant="contained" color="secondary" onClick={handleClickOpen}>
       New Job
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Track A New Job</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out all the information about the job to save.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="job title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            type=""
            fullWidth
          />
          <TextField 
            label="company"
            onChange={(event) => setCompany(event.target.value)}
            value={company}
            type=""
            fullWidth
          />
          <TextField
            margin="dense"
            label="job description"
            onChange={(event) => setDescription(event.target.value)}
            type=""
            rows={5}
            fullWidth
            multiline
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={sendJobData} color="primary" disabled={title && description && company ? false: true}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;
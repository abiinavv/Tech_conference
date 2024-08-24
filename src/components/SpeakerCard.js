import React from 'react';
import { Card, CardContent, Typography, CardActionArea, Modal, Box } from '@mui/material';

const SpeakerCard = ({ speaker }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card className="m-4 bg-white shadow-lg hover:shadow-xl">
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <Typography variant="h5" component="div">
              {speaker.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {speaker.designation}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box className="p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto my-20">
          <Typography variant="h4" component="h2">
            {speaker.name}
          </Typography>
          <Typography variant="h6" className="my-4">
            {speaker.designation}
          </Typography>
          <Typography variant="body1">
            {speaker.bio}
          </Typography>
          <button
            onClick={handleClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default SpeakerCard;

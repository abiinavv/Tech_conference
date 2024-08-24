import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TimelineCard = ({ date, title, description }) => {
  return (
    <Card className="mb-4 border border-gray-300 shadow-md">
      <CardContent>
        <Typography variant="body2" color="textSecondary" className="text-sm mb-2">
          {date}
        </Typography>
        <Typography variant="h6" component="div" className="mb-2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TimelineCard;

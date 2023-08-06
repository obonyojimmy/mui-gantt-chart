import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { Icon } from '@mui/icons-material';

const GanttChart = ({ text, icon }) => {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      startIcon={icon ? <Icon>{icon}</Icon> : null}
    >
      {text}
    </MuiButton>
  );
};

export default GanttChart;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CopyRight from './CopyRight';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'block',
    marginBottom: '-40px',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box>
      <svg
        className={classes.root}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#074207 "
          d="M0,160L80,154.7C160,149,320,139,480,122.7C640,107,800,85,960,85.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <CopyRight />
    </Box>
  );
};

export default Footer;

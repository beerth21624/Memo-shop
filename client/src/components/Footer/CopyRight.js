import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';

function CopyRight({ color }) {
  return (
    <Typography variant="body2" style={{ color: `${color}` }} align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Memo shop
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default CopyRight;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 35,
    margin: '20px 0 40px 0',
  },
  icon: {
    width: 130,
    height: 92,
  },
});

const Sponser = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img
        className={classes.icon}
        src="https://static.wixstatic.com/media/b3db52_89393d7b201d49e8aa6ac36e701b3dea~mv2.png/v1/crop/x_168,y_120,w_912,h_904/fill/w_94,h_91,al_c,q_85,usm_0.66_1.00_0.01/b3db52_89393d7b201d49e8aa6ac36e701b3dea~mv2.webp"
        alt=""
      />
      <img
        className={classes.icon}
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQG6FH2hQ87Big/company-logo_200_200/0/1539248921511?e=2159024400&v=beta&t=9CKUq7x5WmPuYwflBVU11HaA9YzYk_TcwmoEb_eR6Gs"
        alt=""
      />
      <img
        className={classes.icon}
        src="https://static.wixstatic.com/media/b3db52_0c064a0e43434143bfc2f49853f5331b~mv2.png/v1/fill/w_50,h_80,al_c,q_85,usm_0.66_1.00_0.01/b3db52_0c064a0e43434143bfc2f49853f5331b~mv2.webp"
        alt=""
      />
      <img
        className={classes.icon}
        src="https://static.wixstatic.com/media/b3db52_ad0aafc770f7476f915632b4da2b40a9~mv2.png/v1/fill/w_140,h_51,al_c,q_85,usm_0.66_1.00_0.01/b3db52_ad0aafc770f7476f915632b4da2b40a9~mv2.webp"
        alt=""
      />
      <img
        className={classes.icon}
        src="https://static.wixstatic.com/media/b3db52_e02cc7f3897b413380cc15f5cec666e8~mv2.png/v1/fill/w_135,h_80,al_c,q_85,usm_0.66_1.00_0.01/b3db52_e02cc7f3897b413380cc15f5cec666e8~mv2.webp"
        alt=""
      />
      <img
        className={classes.icon}
        src="https://static.wixstatic.com/media/b3db52_3caf774a9ab74e0d971aa221274a9ea5~mv2.png/v1/fill/w_109,h_71,al_c,q_85,usm_0.66_1.00_0.01/b3db52_3caf774a9ab74e0d971aa221274a9ea5~mv2.webp"
        alt=""
      />
      <img
        className={classes.icon}
        src="https://static.wixstatic.com/media/b3db52_804fc0e0e2034cd8a820ff972701ff03~mv2.png/v1/fill/w_131,h_70,al_c,q_85,usm_0.66_1.00_0.01/b3db52_804fc0e0e2034cd8a820ff972701ff03~mv2.webp"
        alt=""
      />
      <img
        className={classes.icon}
        src="https://static.wixstatic.com/media/b3db52_9d13e0db4f6f45df9807e7ec9b70d5a1~mv2.png/v1/fill/w_99,h_69,al_c,q_85,usm_0.66_1.00_0.01/b3db52_9d13e0db4f6f45df9807e7ec9b70d5a1~mv2.webp"
        alt=""
      />
    </Box>
  );
};

export default Sponser;

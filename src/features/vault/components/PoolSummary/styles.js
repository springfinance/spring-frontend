import { whiteColor } from "assets/jss/material-kit-pro-react";

const styles = (theme) => ({
  details: {
    display: 'flex',
    alignItems: 'center',
    background: whiteColor,
  },
  detailsPaused: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.paused,
  },
  detailsRetired: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.retired,
  },
  mobilePadding: {
    // paddingTop: '20px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 0,
    },
  },
});

export default styles;

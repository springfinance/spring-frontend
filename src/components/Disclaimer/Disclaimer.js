import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const useStyles = makeStyles(styles);

const Disclaimer = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    
    <Grid container item className={classes.root} justify="center">
      <section id="status_plate">
		      <div class="container">
      <h2 className={classes.h2_img}>
      <img src="img/com/logo_text.png"  alt="" class="wp100"  />
      </h2>
      </div>
      </section>
    </Grid>
  );
};

export default memo(Disclaimer);

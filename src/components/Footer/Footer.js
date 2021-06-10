import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      	<footer id="footer">
      <div class="container">
        <div>
          <p><strong>Business Inquiries</strong></p>
          <p>springdefi@gmail.com</p>
        </div>
        <div class="mt30-xs">
          <p><strong>Customer Support</strong></p>
          <p>springdefisupport@gmail.com</p>
        </div>
        <p class="copyright">Copyright © SPRING FINANCE 2021. ALL RIGHTS RESERVED</p>
      </div>
      </footer>
     
    </div>
  );
};

export default memo(Footer);

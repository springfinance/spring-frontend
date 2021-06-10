import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({
  showDetail: {
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // width: '100%',
    // height: '56px',
    // borderRadius: '26px',
    // fontSize: '18px',
    // color: theme.palette.text.primary,
    // lineHeight: '24px',
    // fontWeight: '500',
    // outline: 'none',
    background: '#f5f7f0',
    height: '54px',
    padding: '0px 20px',
    bordeR: '0',
    borderRadius: '50px',
    width: '100%',
    fontSize: '1.6rem',
    color: '#666',

  },
  focused: {
    '& fieldset': {
      //border: `1px solid${theme.palette.text.primary} !important`,
    },
  },
}));

export default function CustomOutlinedInput(props) {
  const { classes } = props;

  const commonStyle = useStyles();
  const commonClasses = {
    root: commonStyle.showDetail,
    focused: commonStyle.focused,
    classes
  };

  return <OutlinedInput {...props} classes={commonClasses} />;
}

CustomOutlinedInput.defaultProps = {
  //variant: 'outlined',
  fullWidth: true,
};

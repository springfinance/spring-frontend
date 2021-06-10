const styles = theme => ({
  container: {
    padding: '24px',
    //margin: '8px 0 2rem',
    //border: '1px solid ' + theme.palette.background.border,
    //backgroundColor: theme.palette.background.primary,
    //justifyContent: 'space-between',
    position: 'relative',
    fontSize: '1.6rem',
  },

  selectorContainer: {
    width: '100%',
    height: '36px',
    width: '20rem',
    border: '1px solid #f5f7f0',
    background: '#f5f7f0',
    lineHeight: '34px',
    padding: '0px 15px',
    color: '#222',
    fontSize: '1.6rem',
    borderRadius: '15px',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    border:'1px solid #5acb42',
    color:'#222',
    background:'#f5f7f0 url(../img/icon/ic_arrow_down.png) no-repeat 92% center / 9px auto'
  },

  selectorLabel: {
    //color: theme.palette.text.secondary,
    //marginBottom: '10px',
    fontSize: '1.6rem',
  },

  selector: {
    padding: '0',
    margin: '0',
    fontSize: '1.6rem',
  },

  label: {
    color: theme.palette.text.primary,
    '& .MuiTypography-root': {
      //fontSize: '14px',
      fontSize: '1.6rem',
    }
  },
  boost: {
    color: '#5a8f69',
    fontWeight: 'bold',
    '& .MuiAvatar-root': {
      position: 'absolute',
      top: 0,
      right: '-20px',
    },
  },
  reset: {
    border: '1px solid ' + theme.palette.background.border,
    padding: '4px 8px',
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: theme.palette.background.default,
    '& .MuiButton-label': {
      fontWeight: 'bold',
      textTransform: 'capitalize',
    }
  },
  optionLeft: {
    float:'left',
    fontSize: '1.3rem',
  },

  optionRight: {
    float:'right',
    paddingRight:'70px',
    fontSize: '1.3rem',
  },
  option: {
    fontSize: '1.3rem',
  },



});

export default styles;

import { primaryColor } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  noWalletButtonCon: {
    width:'100%',
    display: 'flex',
    justifyContent: 'space-around',
    padding:'30px',
  },
  noWalletButton: {
    margin: '20px 0',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '5px',
    //backgroundColor: primaryColor[0],
    '& .MuiButton-label': {
      color: 'white',
    },
  },
  detailBox: {
    background:'#fff',
    borderRadius:'15px',
    fontSize:'1.6rem',
    padding:'30px',
    width:'45%',
    border:'0px',
    minHeight:'564px',
    fontSize: '1rem',
    fontWeight: '400',
    color: '#212529',
    textAlign: 'left',
    
  },

  price:{
    background:' #f5f7f0;',
    height: '54px',
    padding:' 10px 20px',
    bordeR: '0',
    borderRadius: '50px',
    width: '100%',
    fontSize: '1.6rem',
    color: '#666',
    border:'0px',
  },

  container: {
    //backgroundColor: theme.palette.background.extra,
    padding: '24px',
    border: '1px solid ' + theme.palette.background.border,
  },
  heading: {
    color: theme.palette.primary.main,
  },
  summary: {
    paddingTop: '24px',
    paddingBottom: '24px',
  },
  statusIcon: {
    marginRight: '.5rem',
  },
  status: {
    padding: '24px',
    marginBottom: '8px',
    background: pool =>
      pool.status === 'eol'
        ? theme.palette.background.retired
        : pool.depositsPaused
        ? theme.palette.background.paused
        : theme.palette.background.primary,
  },
  description: {
    padding: '8px',
  },
});

export default styles;

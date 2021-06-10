import { primaryColor } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  sliderDetailContainer: {
    padding: '24px 30px',
  },
  showDetailLeft: {
    float: 'left',
    marginBottom: '10px',
    fontSize: '1rem',
    lineHeight: '20px',
    color: theme.palette.text.secondary,
    fontWeight: '500',
  },
  showDetailButtonCon: {
    // display: 'flex',
    justifyContent: 'space-around',
    '& + &': {
      marginLeft: '5px',
    },
  },
  showDetailButton: {
    background: '#5acb42',
    color: '#fff',
    border: '1px solid #5acb42',
    height: '54px',
    lineHeight: '52px',
    borderRadius: '30px',
    fontSize: '1.6rem',
    padding: '0 2rem',
    fontWeight: '600',
    width: '100% !important',
    background: '#5acb42',
  },
  showDetailButtonOutlined: {
    // backgroundColor: 'transparent',
    // border: `1px solid ${theme.palette.primary.main}`,
    // color: primaryColor[0],
    // '&:hover': {
    //   '& .MuiButton-label': {
    //     color: 'white',
    //   },
    // },
    // '& .MuiTouchRipple-root span': {
    //   backgroundColor: primaryColor[0],
    // },
  },
  showDetailButtonContained: {
    backgroundColor: '#5acb42',
    marginTop:'10px',
    '& .MuiButton-label': {
      color: 'white',
    },
  },

  showDetailButtonCon1: {
    // display: 'flex',
    justifyContent: 'space-around',
    '& + &': {
      marginLeft: '5px',
    },
  },
  showDetailButton1: {
    background: '#787878',
    color: '#fff',
    border: '1px solid #787878',
    height: '54px',
    lineHeight: '52px',
    borderRadius: '30px',
    fontSize: '1.6rem',
    padding: '0 2rem',
    fontWeight: '600',
    width: '100% !important',
    background: '#787878',
  },
  showDetailButtonOutlined1: {
    // backgroundColor: 'transparent',
    // border: `1px solid ${theme.palette.primary.main}`,
    // color: primaryColor[0],
    // '&:hover': {
    //   '& .MuiButton-label': {
    //     color: 'white',
    //   },
    // },
    // '& .MuiTouchRipple-root span': {
    //   backgroundColor: primaryColor[0],
    // },
  },
  showDetailButtonContained1: {
    backgroundColor: '#787878',
    marginTop:'10px',
    '& .MuiButton-label': {
      color: 'white',
    },
  },
  numericInput: {
    color: primaryColor[0],
  },
  balanceMax: {
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    borderBottom: '1px dashed',
  },
  zapNote: {
    width: '100%',
    textAlign: 'left',
    fontSize: '14px',
    color: theme.palette.text.secondary,
  },
  zapFormControl: {
    minWidth: "auto",
    maxWidth: "50%",
    width: "80%",
  },
  zapSelect: {
    border: "none",
    borderLeft: `1px solid ${theme.palette.text.secondary}`,
    paddingLeft: "10px",
    "& > div": {
      padding: "6px 0"
    },
    "&::before": {
      content: "none",
    },
    "&::after": {
      content: "none",
    },
  },
  box: {
    background: '#fff',
    borderRadius: '15px',
    padding: '30px',
    border: '1px solid #f0f0f0',
    minHeight: '564px',
    
  },
  h4 :{
    textAlign: 'left',
    fontWeight: '600',
    color: '#444',
    marginBottom: '3rem',
    fontSize: '1.6rem',
  },

  h5 :{
    textAlign: 'left',
    fontWeight: '600',
    marginTop:'50px',
    color: '#444',
    marginBottom: '3rem',
    fontSize: '1.6rem',
  },


  priceinput: {
    background: '#f5f7f0',
    height: '54px',
    padding: '0px 20px',
    bordeR: '0',
    borderRadius: '50px',
    width: '100%',
    fontSize: '1.6rem',
    color: '#666',
  },


  pricea : {
    position:'absolute',
    right:'7px',
    top:'7px',
    height:'40px',
    width:'80px',
    textAlign:'center',
    lineHeight:'40px',
    background:'#fff',
    color:'#5acb42',
    borderRadius:'50px',
    fontSize:'1.5rem',
    textDecoration: 'none !important',
  },

  price:{
    position:'relative',
  },

  dl:{
    textAlign: 'left',
    marginTop: '4rem',
  },
  dt:{
    fontWeight: '600',
    fontSize: '1.5rem',
    color: '#444',
  },
  dd:{
    fontSize: '12px',
    color: '#888',
    paddingTop: '10px',
  },
  mt60 : {
    marginTop: '60px !important',
    fontSize:'1.5rem',
    textAlign:'center',
  },
  pullLeft : {
    float: 'left',
  },
  pullRight : {
    float: 'right',
  },

  

});

export default styles;

const buttons = {
  buttons: {
    primary: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      paddingX: '6',
      paddingY: '3',
      margin: '0rem 0.5rem 0rem 0rem',
      textAlign: 'center',
      textDecoration: 'none',
      color: 'textOnPrimary',
      backgroundColor: 'primary1',
      borderRadius: '10px',
      border: 'solid 2px',
      borderColor: 'primary1',
      transition: 'all ease-in-out 0.6s',
      svg: {
        margin: '0rem 0.5rem 0rem 0rem',
      },
      ':hover': {
        backgroundColor: 'transparent',
        color: 'primary1',
      },
    },
    textOnly: {
      padding: '0rem',
      backgroundColor: 'none',
      border: 'none',
      transition: 'all ease-in-out 0.5s',
      ':hover': {
        textDecoration: 'underline',
        color: 'lightgrey',
      },
    },
    iconText: {
      display: 'flex',
      alignItems: 'center',
      svg: {
        marginRight: '0.5rem',
      },
    },
  },
};
export default buttons;

const flexDefault = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const padStyle = {
  height: '150px',
  width: '150px',
  borderRadius: '5px',
  margin: '6px',
}

const canvasStyle = {
  ...flexDefault,
  height: '100%',
  width: '648px',
  flexWrap: 'wrap',
}

const startStopButtonStyle = {
  ...flexDefault,
  height: '45px',
  width: '200px',
  borderRadius: '5px',
  marginTop: '30px',
  backgroundColor: '#2F2E3E',
  boxShadow: '3px 3px 3px #9E9E9E',
  color: 'white',
}

const titleStyle = {
  fontSize: '54px',
  margin: '40px 0px 20px 0px',
  textAlign: 'center',
}

const linkStyle = {
  fontSize: '10px',
  fontFamily: 'sans-serif',
  marginTop: '20px',
  textDecoration: 'none',
  color: '#000000'
}

const inputStyle = {
  fontFamily: 'PhatBoy',
  width: '42px',
  padding: '4px',
  textAlign: 'center',
}

const appStyle = {
  ...flexDefault,
  flexDirection: 'column',
  fontFamily: 'PhatBoy',
}


export default {
  flexDefault,
  padStyle,
  canvasStyle,
  startStopButtonStyle,
  titleStyle,
  linkStyle,
  inputStyle,
  appStyle,
}

import PropTypes from 'prop-types';

function UserGreeting(props) {
    /*
  if (props.isLoggedIn) {
    return <h1>Welcome back, {props.username}</h1>
  }
  else {
    return <h1>Welcome Guest</h1>
  }
    */
  const welcomeMessage = <h1 className="welcome-message">Welcome back, {props.username}</h1>
  const loginPrompt = <h1 className="login-prompt">Please log in:</h1>

   return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: 'Guest'
}

export default UserGreeting
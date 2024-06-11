import PropTypes from 'prop-types';

function UserGreeting(props){
    if(props.isLoggedIn){
        return <h2 className="welcomeMessage">Bem-Vindo {props.username}</h2>
    }else{
        return<h2 className="loginPrompt">Por favor, faça login para continuar!</h2>
    }
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Convidado",
}
export default UserGreeting;
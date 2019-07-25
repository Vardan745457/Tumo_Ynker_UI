import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { logoutUser } from '../../redux/actions'
import NavigationBar from './NavigationBar';

const mapStateToProps = state => ({
  // TODO: Provide user data from state
  user: state.user.data,
  withUser: state.network.withUser
})

const mapDispatchToProps = dispatch => {
  // TODO: Provide logout to user
  return {
    logoutUser: (email,password) => {
      dispatch(logoutUser({email,password}))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));

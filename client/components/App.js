import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';


const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments
});

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

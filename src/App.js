import {connect} from 'react-redux';


import apiDataOne from './actions/apiDataOne';
import apiDataTwo from './actions/apiDataTwo';
import apiDataThree from './actions/apiDataThree';
import Home from './components/Home';


// function mapStateToProps(state){
//   return{
//     gameData: state.apiInfo
//   }
// }

// function mapDispatchToProps(dispatch){
//   return{
//     onFetchOne: (response) => dispatch(apiDataOne(response)),
//     onFetchTwo: (response) => dispatch(apiDataTwo(response)),
//     onFetchThree: (response) => dispatch(apiDataThree(response))
//   }
// }

var connectedComponents = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);



export default connectedComponents;



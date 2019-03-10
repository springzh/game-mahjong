'use strict';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.game
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch
  }
};
export default function (ele) {
  return connect(mapStateToProps, mapDispatchToProps)(ele)
};
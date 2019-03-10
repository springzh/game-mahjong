'use strict';
import { combineReducers } from 'redux'
import game from './game'

const todoApp = combineReducers({
  game
});

export default todoApp

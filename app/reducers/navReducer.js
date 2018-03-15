import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../config/routes';

const initialNavState = AppNavigator.router.getStateForAction(NavigationActions.init(), null);

export default function nav(state = initialNavState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

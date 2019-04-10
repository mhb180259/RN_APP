import Routers from '../../routers';
const nav = (state, action) => {
  const newState = Routers.router.getStateForAction(action, state);
  return newState || state;
};
export default nav;

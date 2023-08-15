import { useDispatch } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";
import { pageInfoSlice } from "../redux/pageInfoSlice";

export const useReduxActions = (action: ActionCreatorsMapObject<any>) => {
  const dispatch = useDispatch();

  return bindActionCreators(Object.assign({}, action), dispatch);
};

export const usePageInfoActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(Object.assign({}, pageInfoSlice.actions), dispatch);
};

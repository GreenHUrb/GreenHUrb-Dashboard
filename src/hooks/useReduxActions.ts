import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { appSliceActions, authSliceActions,productSliceActions } from "@redux";

export const useAppActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(Object.assign({}, appSliceActions), dispatch);
};

export const useAuthActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(Object.assign({}, authSliceActions), dispatch);
};

export const useProductActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(Object.assign({}, productSliceActions), dispatch);
};

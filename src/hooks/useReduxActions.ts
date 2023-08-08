import { useDispatch } from 'react-redux'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'
import { themeSlice } from '../redux/themeSlice'

export const useReduxActions = (action: ActionCreatorsMapObject<any>) => {
  const dispatch = useDispatch()

  return bindActionCreators(Object.assign({}, action), dispatch)
}

export const useThemeActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(Object.assign({}, themeSlice.actions), dispatch)
}
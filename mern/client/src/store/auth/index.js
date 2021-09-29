import reducerReducers from "reduce-reducers";
import commonReducer from "./common/index";

export default reducerReducers({
  user: null,
  isLoading: false,
  error: null,
  success: false
}, commonReducer)
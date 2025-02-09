import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productReducer from "./ProductSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

//const dispatch = useDispatch();

// const handalremove = (item) => {
//console.log(item)
//  dispatch(remove(item));
//};

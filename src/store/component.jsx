import React,{useContext} from 'react'
import {UseStoreContext} from './store'
import {
    useUser,
useLogin,
useCounter,
useGetCounter,
} from './store'

//------------------------------------
const LoginSection = () => {
  
    const login = useLogin()

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={login}>Logout</button>
    </div>
  );
};


//------------------------------------
const UserSection = () => {
    const [user] = useContext(UseStoreContext)
    //   const user = useUser();
  return <div>User: {user}</div>;
};



//------------------------------------
const AddToCartSection = () => {
//   const addToCart = useAddToCart();
  return (
    <div>
      <button onClick={()=>{}}>Add To Cart</button>
    </div>
  );
};


//------------------------------------
const CartCountSection = () => {
//   const cartCount = useCartCount();
  return <div>Cart count: {()=>{}}</div>;
};


//------------------------------------
export function ContextPage() {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default ContextPage
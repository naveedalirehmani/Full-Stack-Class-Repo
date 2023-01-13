import {
  mutations
} from "./store";


//------------------------------------
const LoginSection = () => {
  
  const login = mutations().useLogin();


  return (
    <div>
      <button onClick={()=>login('karim')}>Login</button>
      <button onClick={()=>login('')}>Logout</button>
    </div>
  );
};

//------------------------------------
const UserSection = () => {
  const user = mutations().useGetUser();
  return <div>User: {user}</div>;
};


//------------------------------------
const AddToCartSection = () => {
  const addToCart = mutations().useSetCount();
  return (
    <div>
      <button onClick={()=>addToCart(2)}>Add To Cart</button>
    </div>
  );
};

//------------------------------------
const CartCountSection = () => {
  const cartCount = mutations().useGetCount();
  return <div>Cart count: {cartCount}</div>;
};


//------------------------------------
 const ContextPage = () => {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  );
}

export default ContextPage

// //------------------------------------
// export default function ContextPageWrapper() {
//   return (
//     <StoreContextProvider>
//       <ContextPage />
//     </StoreContextProvider>
//   );
// }
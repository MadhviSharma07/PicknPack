import { createContext, useState, useEffect } from "react";
export const GroceryContext = createContext();

export function GroceryProvider({ children }) {
    const [orderSummary, setOrderSummary] = useState(false);
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [activePanel, setActivePanel] = useState("");

  // totals
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalWishlistItems = wishlist.length;
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingFee = totalItems * 2;
  const orderTotal = subtotal + shippingFee;

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist]);

  // functions
  //   addtocart function
  const addToCart = (product) => {
    const alreadyAdded = cart.find((i) => i.id === product.id);
    if (alreadyAdded) return alert("Already in cart");
    setCart([...cart, { ...product, quantity: 1 }]);
  };
  // removeitems
  const removeCartItem = (product) => {
    setCart(cart.filter((i) => i.id !== product.id));
  };
  // addtowishlist
  
  const addToWishlist = (product) => {
    const exists = wishlist.find((i) => i.id === product.id);
    if (exists) setWishlist(wishlist.filter((i) => i.id !== product.id));
    else setWishlist([...wishlist, product]);
  };

  const isInWishlist =(product)=>{
    return wishlist.some((i)=> i.id === product.id)
  }
  
const wishlistColor = (product) => {
   return isInWishlist(product) ? "text-red-600" : "text-zinc-400";
};


  // handle scroll
  const handleScroll = () => {
    const section = document.querySelector("#product-section");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // quantityIncrement
  const quantityIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  // quantityDecrement
  const quantityDecrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  // removeItems function 
  const removeItems = (product) => { setCart(cart.filter((items) => items.id !== product.id)); }; 
  const removeWishlistItems = (product) => { setWishlist(wishlist.filter((items) => items.id !== product.id)); }; 
  // clear wishlist 
  const clearAll = () => { setWishlist([]); };
  // cart and wishlist function
  const handlePanel = (tabName) => {
    setActivePanel((prev) => (prev === tabName ? null : tabName));
  };
  const closePanel = () => setActivePanel(null);
  return (
    <GroceryContext.Provider
      value={{
        cart,
        setCart,
        wishlist,
        setWishlist,
        searchTerm,
        setSearchTerm,
        activePanel,
        setActivePanel,
        totalItems,
        totalWishlistItems,
        subtotal,
        shippingFee,
        orderTotal,
        addToCart,
        removeCartItem,
        addToWishlist,
        handlePanel,
        handleScroll,
        closePanel,
        quantityIncrement,
        quantityDecrement,
        removeItems,
        removeWishlistItems,
        clearAll,
        orderSummary,
        setOrderSummary,
        wishlistColor
      }}
    >
      {children}
    </GroceryContext.Provider>
  );
}

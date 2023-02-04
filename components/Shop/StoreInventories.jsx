import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import commifyViet from "../../utils/commifyViet";
import storeInventories from "./StoreInventories.json";

export default function StoreInventories() {
  const router = useRouter();
  const [checkout, setCheckout] = useState(false);
  const [view, setView] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("cart") === null && sessionStorage.getItem("cartTotal") === null) {
      sessionStorage.setItem("cart", JSON.stringify(cart));
      sessionStorage.setItem("cartTotal", JSON.stringify(cartTotal));
    } else {
      setCart(JSON.parse(sessionStorage.getItem("cart")));
      setCartTotal(JSON.parse(sessionStorage.getItem("cartTotal")));
    }
  }, []);

  // // set session storage with new cart for nextjs with useEffect
  useEffect(() => {
    if (checkout === false && view === false) return;
    sessionStorage.setItem("cart", JSON.stringify(cart));
    sessionStorage.setItem("cartTotal", JSON.stringify(cartTotal));
  }, [checkout, view]);

  // function to update cart
  const updateCart = (inventory) => {
    const newCart = [...cart];
    newCart.push(inventory);
    setCart(newCart);
    setCartTotal(cartTotal + inventory.price);
  };

  // function to update checkout state then redirect cart page
  const handleCheckout = () => {
    setCheckout(true);
    router.push("/shop/checkout");
  };

  // const handleView = () => {
  //   setView(true);
  //   router.push("/shop/cart");
  // };

  const handleClearCart = () => {
    setCart([]);
    setCartTotal(0);
  };

  return (
    <>
      <div className="shop-cart-info-container">
        <div>Total: <span className="shop-cart-total">{commifyViet(cartTotal)} ₫</span></div>
        <div className="shop-cart-info-checkout">
          <div className="shop-checkout-button" onClick={handleCheckout}>Checkout</div>
          {/* <div className="shop-clear-button" onClick={handleView}>View</div> */}
          <div className="shop-clear-button" onClick={handleClearCart}>Clear</div>
        </div>
      </div>
      <div className="shop-container">
        {storeInventories.map((inventory, index) => (
          <div key={inventory.id + index} className="shop-item">
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            ></div> */}
            <div className="shop-item-name">
              {router.locale === "en" ? inventory.name : inventory.nameVi}
            </div>
            <div className="shop-action-container">
              <div className="shop-item-price">{commifyViet(inventory.price)} ₫</div>
              <div className="shop-add-to-cart-button" onClick={() => updateCart(inventory)}>Add to cart</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

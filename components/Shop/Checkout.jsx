import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import commifyViet from "../../utils/commifyViet";

export default function Checkout() {
  const router = useRouter();
  const { t } = useTranslation("checkout");
  const [cart, setCart] = useState([]);
  const [cartView, setCartView] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  var paymentMethods = [
    {
      id: 1,
      name: "Domestic cards",
      nameVi: "Thẻ nội địa"
    },
    {
      id: 2,
      name: "International cards",
      nameVi: "Thẻ quốc tế"
    },
    {
      id: 3,
      name: "ZaloPay",
      nameVi: "ZaloPay"
    },
    {
      id: 4,
      name: "MoMo",
      nameVi: "MoMo"
    },
  ];
  const [paymentMethodSelected, setPaymentMethodSelected] = useState(
    paymentMethods[0]
  );

  // set session storage with new cart for nextjs with useEffect
  useEffect(() => {
    // set cart and cart total in session storage
    setCart(removeDuplicate(JSON.parse(sessionStorage.getItem("cart"))));
    setCartView(JSON.parse(sessionStorage.getItem("cart")));
    setCartTotal(JSON.parse(sessionStorage.getItem("cartTotal")));
  }, []);

  // function to count duplicate items in cart
  const countDuplicate = (cart, inventory) => {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === inventory.id) {
        count++;
      }
    }
    return count;
  };

  // function to convert cart to have only unique values
  const removeDuplicate = (cart) => {
    let uniqueCart = [
      ...new Map(cart.map((inventory) => [inventory.id, inventory])).values(),
    ];
    return uniqueCart;
  };

  // function to update cart
  const updateCart = (inventory) => {
    const newCart = [...cart];
    newCart.push(inventory);
    setCart(newCart);
    setCartTotal(cartTotal + inventory.price);
  };

  // function to apply discount code
  const applyDiscount = () => {
    if (discountCode === "defi") {
      setDiscount(10000);
    }
  };

  const handleSelectPaymentMethod = (item) => {
    setPaymentMethodSelected(item);
  };

  function renderPaymentMethod(paymentMethod) {
    switch (paymentMethod.id) {
      case 3:
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "black",
                color: "white",
                height: "100px",
                width: "100px",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "16px",
                marginBottom: "16px"
              }}
            >
              ZaloPay QR
            </div>
          </div>
        );
        break;
      case 4:
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "black",
                color: "white",
                height: "100px",
                width: "100px",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "16px",
                marginBottom: "16px"
              }}
            >
              MoMo QR
            </div>
          </div>
        );
      default:
        return (
          <div className="payment-card-info-container">
            <div>{t("card-name")}</div>
            <input
              placeholder="name"
              onChange={(event) => setNameOnCard(event.target.value)}
              className="payment-card-info"
            />
            <div>{t("card-number")}</div>
            <input
              placeholder="card number"
              onChange={(event) => setCardNumber(event.target.value)}
              className="payment-card-info"
            />
            <div>{t("card-expiry")}</div>
            <input
              placeholder="expiry date"
              onChange={(event) => setCardExpiry(event.target.value)}
              className="payment-card-info"
            />
            <div>{t("card-cvc")}</div>
            <input
              placeholder="cvc"
              onChange={(event) => setCardCVC(event.target.value)}
              className="payment-card-info"
            />
            <div>{t("contact-email")}</div>
            <input
              placeholder="email"
              onChange={(event) => setContactEmail(event.target.value)}
              className="payment-card-info"
            />
          </div>
        );
    }
  }

  return (
    <>
      <div className="cart-buy-more-button">
        <Link href="/shop">
          <div>{t("return-shop")}</div>
        </Link>
      </div>
      <div className="checkout-grid">
        <div className="cart-container">
          {cart.map((inventory) => (
            <div className="cart-item-info-container" key={inventory.id}>
              <div className="cart-item-info">
                <div className="cart-item-name">{inventory.name}</div>
                <div className="cart-item-price">
                  {commifyViet(inventory.price)} ₫
                </div>
              </div>
              <div className="cart-item-quantity">
                Quantity: {countDuplicate(cartView, inventory)}
              </div>
            </div>
          ))}
          <div className="cart-subtotal">
            <div className="cart-subtotal-info">
              <div className="cart-subtotal-text">{t("subtotal")}</div>
              <div className="cart-subtotal-amount">
                {commifyViet(cartTotal)} ₫
              </div>
            </div>
            <div className="cart-subtotal-discount">
              <input
                placeholder="Discount code"
                onChange={(event) => setDiscountCode(event.target.value)}
                className="cart-subtotal-discount-code"
              />
              <div
                onClick={applyDiscount}
                className="cart-subtotal-discount-apply"
              >
                Apply
              </div>
            </div>
            <div className="cart-subtotal-discount-info">
              <div className="cart-subtotal-discount-text">{t("discount")}</div>
              <div className="cart-subtotal-discount-amount">
                - {commifyViet(discount)} ₫
              </div>
            </div>
          </div>
          <div className="cart-total">
            <div className="cart-total-text">{t("total")}</div>
            <div className="cart-total-amount">
              {commifyViet(cartTotal - discount)} ₫
            </div>
          </div>
        </div>
        <div className="payment-container">
          <div className="payment-info">{t("pay-title")}</div>
          <div className="payment-type-container">
            {paymentMethods.map((paymentMethod) => (
              <div
                key={paymentMethod.id}
                className={
                  paymentMethodSelected.id === paymentMethod.id
                    ? "payment-type-selector-selected"
                    : "payment-type-selector"
                }
                onClick={() => handleSelectPaymentMethod(paymentMethod)}
              >
                {router.locale === "en" ? paymentMethod.name : paymentMethod.nameVi}
              </div>
            ))}
          </div>
          {renderPaymentMethod(paymentMethodSelected)}
          <div className="payment-button">{t("pay")}</div>
        </div>
      </div>
    </>
  );
}

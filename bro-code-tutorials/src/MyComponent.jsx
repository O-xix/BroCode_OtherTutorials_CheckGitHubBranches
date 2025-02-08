import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Grog");
    const [quantity, setQuantity] = useState(1);
    const [comments, setComments] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Standard");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentsChange(event) {
        setComments(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>


      <input type="number" value={quantity} onChange={handleQuantityChange}/>
        <p>Quantity: {quantity}</p>

        <textarea value={comments} name="" id="" onChange={handleCommentsChange} placeholder="Add additional instructions/details"></textarea>
        <p>Comments: {comments}</p>

        <select value={payment} onChange={handlePaymentChange} name="" id="">
            <option value="">Select an option</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
            <option value="Paypal">Paypal</option>
        </select>
        <p>Payment: {payment}</p>

        <label htmlFor="">
            <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
            Pick-Up
        </label>
        <br />
        <label htmlFor="">
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
            Delivery
        </label>

        <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;
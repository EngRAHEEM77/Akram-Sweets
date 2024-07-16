import React, { useContext, useState, useEffect } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    country: '',
    phone: ''
  });
  const [isInfoFilled, setIsInfoFilled] = useState(true);
  const [orderSummary, setOrderSummary] = useState(null);

  useEffect(() => {
    const storedOrderSummary = JSON.parse(localStorage.getItem('orderSummary'));
    setOrderSummary(storedOrderSummary);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleProcessToPayment = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, street, city, country, phone } = deliveryInfo;
    if (!firstName || !lastName || !email || !street || !city ||  !country || !phone) {
      setIsInfoFilled(false);
    } else {
      setIsInfoFilled(true);
      localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo));
      console.log('Proceeding to payment with info:', deliveryInfo);
      navigate('/order-summary');
    }
  };

  return (
    <form className='place-order' onSubmit={handleProcessToPayment}>
      <div className="place-order-left">
        <p className='title'>Your Info </p>
        <div className="multi-fields">
          <input
            type="text"
            name="firstName"
            placeholder='First Name'
            value={deliveryInfo.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder='Last Name'
            value={deliveryInfo.lastName}
            onChange={handleInputChange}
          />
        </div>
        <input
          type='text'
          name="email"
          placeholder='Email Address'
          value={deliveryInfo.email}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name="street"
          placeholder='Street'
          value={deliveryInfo.street}
          onChange={handleInputChange}
        />
        <div className="multi-fields">
          <input
            type="text"
            name="city"
            placeholder='City'
            value={deliveryInfo.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            name="country"
            placeholder='Country'
            value={deliveryInfo.country}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          name="phone"
          placeholder='Phone'
          value={deliveryInfo.phone}
          onChange={handleInputChange}
        />
        <button className="place-order-right" type="submit">CLICK HERE TO PAY IT</button>
        {!isInfoFilled && <p className="error-message">Please fill the required info.</p>}
      </div>

    </form>
  );
}

export default PlaceOrder;

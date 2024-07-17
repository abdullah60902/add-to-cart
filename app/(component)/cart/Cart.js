import React, { useState, useEffect } from 'react';

export default function Cart({ Image, title, price, id, card, setCard }) {

  const [addprice, setAddprice] = useState(price);
  const [isadd, setIsadd] = useState(1);
  const [honi, setHoni] = useState(true);

  useEffect(() => {
    if (honi) {
      var g = 1;
      updateQuantity(g);
      setHoni(false);
    }
  }, [honi]);

  const updateQuantity = (quantity) => {
    const updatedCard = card.map((item) => (item.id === id ? { ...item, quantity } : item));
    setCard(updatedCard);
  };

  const add = (price) => {
    setHoni(false);
    var adder = isadd + 1;
    setAddprice(addprice + price);
    setIsadd(adder);
    updateQuantity(adder);
  };

  const sub = (price) => {
    setHoni(false);
    if (isadd === 1) {
      return;
    }
    var subtract = isadd - 1;
    setIsadd(subtract);
    setAddprice(addprice - price);
    updateQuantity(subtract);
  };

  const removed = (id) => {
    const reminder = card.filter((item) => item.id !== id);
    setCard(reminder);
  };

  return (
    <div className='w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden'>
      <div className='flex items-center p-4 border-b border-gray-200'>
        <img src={Image} alt={title} className='w-16 h-16 object-cover mr-4 rounded-md shadow-md' />
        <p className='text-lg font-semibold text-gray-800'>{title}</p>
      </div>
      <div className='flex items-center p-4'>
        <button
          className='bg-gray-200 text-gray-800 w-8 h-8 flex justify-center items-center rounded-full mr-2 hover:bg-gray-300 focus:outline-none transform hover:scale-110 transition duration-300'
          onClick={() => sub(price)}
        >
          -
        </button>
        <input type='text' className='w-16 h-8 text-center bg-gray-100 text-gray-800 font-semibold outline-none' readOnly value={isadd} />
        <button
          className='bg-gray-200 text-gray-800 w-8 h-8 flex justify-center items-center rounded-full ml-2 hover:bg-gray-300 focus:outline-none transform hover:scale-110 transition duration-300'
          onClick={() => add(price)}
        >
          +
        </button>
      </div>
      <div className='flex justify-between items-center p-4'>
        <p className='text-gray-800 font-semibold'>Price: ${addprice}</p>
        <button
          className='text-red-500 font-semibold hover:text-red-700 focus:outline-none transform hover:scale-110 transition duration-300'
          onClick={() => removed(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

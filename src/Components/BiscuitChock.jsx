import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBiscuitSnacks } from '../Redux/App/BiscuitsSnacksChocklates/action';
import "./Style/Items.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

export const BiscuitChock = () => {
  const biscuitSnacks = useSelector(store => store.BiscuitsSnacksChocolates);
  const { data } = biscuitSnacks;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBiscuitSnacks());
  }, []);

  const [counts, setCounts] = useState({});

  const handleIncrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1
    }));
  };

  const handleDecrement = (id) => {
    if (counts[id] > 1) {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [id]: prevCounts[id] - 1
      }));
    } else {
      delete counts[id];
      setCounts({ ...counts });
    }
  };

  const handleAdd = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: 1
    }));
  };

  return (
    <div id="items">
      <div id="items-head">
        <h2>Biscuit Snacks & Chocklates</h2>
        <Link to="biscuitchock"><p id='see-all'>See all</p></Link>
      </div>
      <div id="items-products">
        {data.length > 0 && data.map(el => (
          <div key={el.id}>
            <LazyLoadImage src={el.image} alt={el.id} effect="blur" />
            <p id='item-title'>{el.title}</p>
            <p>{el.quantity}</p>
            <div id="items-price-div">
              <p>{el.price}</p>
              {!counts[el.id] ? (
                <button onClick={() => handleAdd(el.id)}>Add</button>
              ) : (
                <>
                  <button onClick={() => handleDecrement(el.id)}>-</button>
                  <span>{counts[el.id]}</span>
                  <button onClick={() => handleIncrement(el.id)}>+</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

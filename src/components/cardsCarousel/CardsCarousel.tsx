import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid'
import './CardsCarousel.scss';

const initialCards = [
  {
    id: uuid(),
    image: 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    className: 'card left-level-three',
    animationClassName: '',
  },
  {
    id: uuid(),
    image: 'https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80',
    className: 'card left-level-two',
    animationClassName: '',
  },
  {
    id: uuid(),
    image: 'https://images.unsplash.com/photo-1429277096327-11ee3b761c93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80',
    className: 'card level-one',
    animationClassName: '',
  },
  {
    id: uuid(),
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80',
    className: 'card right-level-two',
    animationClassName: '',
  },
  {
    id: uuid(),
    image: 'https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80',
    className: 'card right-level-three',
    animationClassName: '',
  },
];

export const CardsCarousel: React.FC = () => {
  const [items, setItems] = useState(initialCards);


  const getCardAnimation = (index: number) => {
    switch (index) {
      case 0:
        return 'card left-level-two to-level-three';
      case 1:
        return 'card level-one to-left-level-two';
      case 2:
        return 'card right-level-two to-level-one';
      case 3:
        return 'card right-level-three to-level-two';
      case 4:
        return 'card right-level-three to-appear';
      default:
        return 'card level-three';
    }
  };

  const getCardAnimation2 = (index: number) => {
    switch (index) {
      case 0:
        return 'card left-level-three to-appear';
      case 1:
        return 'card left-level-three to-level-two';
      case 2:
        return 'card left-level-two to-level-one';
      case 3:
        return 'card level-one to-right-level-two';
      case 4:
        return 'card right-level-two to-level-three';
      default:
        return 'card level-three';
    }
  };

  const move = () => {
    const [aa] = items.splice(0, 1);
    const asd: typeof initialCards = [
      ...items,
      aa,
    ].map((item, i) => ({
      ...item,
      className: getCardAnimation(i),
    }));
    setItems(asd as any);
    // setTimeout(() => {
    //   setItems(asd.map((item, i) => ({
    //     ...item,
    //     animationClassName: '',
    //     className: getCardClassName(i),
    //   })));
    //
    // }, 500);
  };

  const mover = () => {
    const [aa] = items.splice(items.length - 1, 1);
    const asd: typeof initialCards = [
      aa,
      ...items,
    ].map((item, i) => ({ ...item, className: getCardAnimation2(i) }));
    setItems(asd as any);
  };

  return (
    <div className="carousel-container">
      <div className="slide-button left" onClick={move}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      {items
        .filter((item, index) => index < 6)
        .map(item => (
          <div className={item.className} key={item.id}>
            <img src={item.image} />
          </div>
        ))}
      <div className="slide-button right" onClick={mover}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  )
};

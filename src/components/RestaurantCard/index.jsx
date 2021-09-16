import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import Skeleton from '../Skeleton';

import restaurantPlaceholderImage from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfos, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfos>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
        <Address>{restaurant.viicinity || restaurant.formatted_address}</Address>
      </RestaurantInfos>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantPlaceholderImage}
        alt={restaurant.name}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;

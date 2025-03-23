import React from 'react';
import "./deliveryCollections.css";
import Slider from "react-slick";
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
const deliveryItems = [
    {
        id: 1,
        title: "pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id: 2,
        title: "Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },

    {
        id: 3,
        title: "Noodles",
        cover:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
    },

    {
        id: 4,
        title: "Cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    },

    {
        id: 5,
        title: "Biryani",
        cover:"https://www.zomato.com/patna/delivery/dish-biryani.png",
    },

    {
        id: 6,
        title: "Dosa",
        cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    },

    
];

const settings ={
    infinite: false,
    slidesToShow: 4,
    slidesToScroll:1,
    nextArrow: <NextArrow/>,
    preArrow: <PrevArrow/>,

};


const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
        <div className='max-width'>
            <div className='collection-title'>Eat What Makes you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item)=>{
                    return <div>{item.title}</div>

                })}
            </Slider>
        </div>
    </div>
  );
};

export default DeliveryCollections ;
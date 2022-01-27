import React from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";

export default () => (
  <Carousel showStatus={false} showThumbs={false} showArrows={true} autoPlay>
    <CarouselItem
      image="https://i.ytimg.com/vi/AY2RzayWqC8/maxresdefault.jpg"
      title="The Batman Official Trailer "
    />
    <CarouselItem
      image="https://lumiere-a.akamaihd.net/v1/images/image_e7bacecc.png"
      title="Moonknight Official Trailer Released"
    />
    <CarouselItem
      image="https://cdn.mos.cms.futurecdn.net/ZhrbP5tnyRtxJstXWGD5qe-768-80.jpg"
      title="The Lord of the rings: The rings of powers "
    />
  </Carousel>
);

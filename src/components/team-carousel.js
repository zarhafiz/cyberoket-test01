import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { TeamOneData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "@/components/team-card";
import "swiper/swiper-bundle.min.css";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const TeamCarousel = () => {
  const { sectionContent, posts } = TeamOneData;
  const carouselOptions = {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "#team-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  };

  return (
    <section className="commonSection team">
      
      
    </section>
  );
};

export default TeamCarousel;

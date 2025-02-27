import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/greg.png',
      memberName: 'Gregory Ajayi',
      memberDesignation: 'Founder and CEO',
      memberSocial: {
        linkedin: 'https://www.linkedin.com/in/gregoryajayi',
        twitter: 'https://www.twitter.com/lagosnco_',
        instagram: 'https://www.instagram.com/lagosnco',
        
      },
    },
    {
      memberImage: '/images/femi.jpeg',
      memberName: 'Femi Ogundayo',
      memberDesignation: 'Co-founder & CTO',
      memberSocial: {
        twitter: 'https://www.twitter.com/flimsyfemi',
        instagram: 'https://www.instagram.com/femisavy',
      },
    },
    {
      memberImage: '/images/katherine.png',
      memberName: 'Katherine Koo',
      memberDesignation: 'Co-founder & Board Director',
      memberSocial: {
        linkedin: 'https://www.linkedin.com/in/katherinekoo',
        instagram: 'https://www.instagram.com/katherinewhoo',
      },
    },
    // {
    //   memberImage: '/images/katherine.png',
    //   memberName: 'Cheecky',
    //   memberDesignation: 'Creative Director',
    //   memberSocial: {
    //     linkedin: 'https://www.linkedin.com/in/gregoryajayi',
    //     twitter: 'https://www.twitter.com/lagosnco_',
    //     instagram: 'https://www.instagram.com/lagosnco',
    //   },
    // },
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}

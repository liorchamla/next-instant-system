// Import Swiper React components
import { StoryblokComponent } from "@storyblok/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Partenaire = ({ blok }) => {
  return (
    <div className="Carrousel-item" aria-label={blok.name}>
      <img className="Carrousel-logo" alt={blok.name} src={blok.image} />
    </div>
  );
};

export const Partenaires = ({ blok }) => {
  return (
    <div className="TrustedBy">
      <div className="TrustedBy-carrousel">
        <div className="Carrousel">
          <h2 className="Carrousel-title" aria-label={blok.title}>
            {blok.title}
          </h2>
          <Swiper
            autoplay={{
              delay: 2000,
            }}
            spaceBetween={50}
            slidesPerView={6}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              type: "bullets",
              bulletActiveClass: "active",
              bulletElement: "button",
              bulletClass: "owl-dot",
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
          >
            {blok.partenaires.map((childBlok) => (
              <SwiperSlide key={childBlok._uid}>
                <StoryblokComponent blok={childBlok} />
              </SwiperSlide>
            ))}
            {blok.partenaires.map((childBlok) => (
              <SwiperSlide key={childBlok._uid}>
                <StoryblokComponent blok={childBlok} />
              </SwiperSlide>
            ))}
            {blok.partenaires.map((childBlok) => (
              <SwiperSlide key={childBlok._uid}>
                <StoryblokComponent blok={childBlok} />
              </SwiperSlide>
            ))}
            {blok.partenaires.map((childBlok) => (
              <SwiperSlide key={childBlok._uid}>
                <StoryblokComponent blok={childBlok} />
              </SwiperSlide>
            ))}
            {blok.partenaires.map((childBlok) => (
              <SwiperSlide key={childBlok._uid}>
                <StoryblokComponent blok={childBlok} />
              </SwiperSlide>
            ))}
            {blok.partenaires.map((childBlok) => (
              <SwiperSlide key={childBlok._uid}>
                <StoryblokComponent blok={childBlok} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

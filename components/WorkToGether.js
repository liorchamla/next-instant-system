import { StoryblokComponent } from "@storyblok/react";

export const Explanation = ({ blok, isSpecial = false }) => {
  return isSpecial ? (
    <div class="Solutions">
      <img class="Solutions-logo" alt={blok.title} src={blok.image} />
      <div class="Solutions-texts">
        <h2 class="Common-title Solutions-title" aria-label={blok.title}>
          {blok.title}
        </h2>
        <p
          class="Common-subtitle Common-subtitle--withoutMarginBottom Solutions-subtitle"
          aria-label={blok.description}
        >
          {blok.description}
        </p>
      </div>
      <a class="Solutions-button" aria-label="En savoir plus" href={blok.link}>
        <div class="Solutions-buttonLogoContainer">
          <span class="Solutions-buttonLogo is-website-arrow-right"></span>
        </div>
        <span class="Solutions-buttonLabel">En savoir plus</span>
      </a>
    </div>
  ) : (
    <div class="Explanations-container">
      <img
        class="Explanations-logo"
        tabindex="0"
        alt={blok.title}
        src={blok.image}
      />
      <h2
        class="Common-title Explanations-title"
        tabindex="0"
        aria-label={blok.title}
      >
        {blok.title}
      </h2>
      <p
        class="Common-subtitle Common-subtitle--withoutMarginBottom Explanations-subtitle"
        tabindex="0"
        aria-label={blok.description}
      >
        {blok.description}
      </p>
      <a
        class="Explanations-button"
        aria-label="En savoir plus"
        href={blok.link}
      >
        <div class="Explanations-buttonLogoContainer">
          <span class="Explanations-buttonLogo is-website-arrow-right"></span>
        </div>
        <span class="Explanations-buttonLabel">En savoir plus</span>
      </a>
    </div>
  );
};

export const WorkToGether = ({ blok }) => {
  return (
    <div class="Start-workTogether">
      <div class="WorkTogether">
        <div>
          <div
            class="WorkTogether-ellipseContainer WorkTogether-ellipseContainer--topSmall rellax"
            data-rellax-speed="-1"
            style={{
              transform: `translate3d(0px, 174px, 0px) translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)`,
            }}
          >
            <img
              alt="Ellipse"
              class="Common-ellipse Common-ellipse--small"
              src="https://instant-system.com/images/ellipse-small.png"
            />
          </div>
          <div
            class="WorkTogether-ellipseContainer WorkTogether-ellipseContainer--topLarge rellax"
            data-rellax-desktop-speed="-2"
            style={{
              transform: `translate3d(0px, 270px, 0px) translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)`,
            }}
          >
            <img
              alt="Ellipse"
              class="Common-ellipse Common-ellipse--large"
              src="https://instant-system.com/images/ellipse-large.png"
            />
          </div>
          <div
            class="WorkTogether-ellipseContainer WorkTogether-ellipseContainer--bottomLeftSmall rellax"
            data-rellax-speed="1"
            style={{
              transform: `translate3d(0px, -174px, 0px) translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)`,
            }}
          >
            <img
              alt="Ellipse"
              class="Common-ellipse Common-ellipse--small"
              src="https://instant-system.com/images/ellipse-small.png"
            />
          </div>
          <div
            class="WorkTogether-ellipseContainer WorkTogether-ellipseContainer--bottomLeftLarge rellax"
            data-rellax-speed="2"
            style={{
              transform: `translate3d(0px, -270px, 0px) translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)`,
            }}
          >
            <img
              alt="Ellipse"
              class="Common-ellipse Common-ellipse--large"
              src="https://instant-system.com/images/ellipse-large.png"
            />
          </div>
          <div
            class="WorkTogether-ellipseContainer WorkTogether-ellipseContainer--bottomRightSmall rellax"
            data-rellax-speed="2"
            style={{
              transform: `translate3d(0px, -347px, 0px) translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)`,
            }}
          >
            <img
              alt="Ellipse"
              class="Common-ellipse Common-ellipse--small"
              src="https://instant-system.com/images/ellipse-small.png"
            />
          </div>
          <div
            class="WorkTogether-ellipseContainer WorkTogether-ellipseContainer--bottomRightMedium rellax"
            data-rellax-speed="1"
            style={{
              transform: `translate3d(0px, -149px, 0px) translate3d(0px, 0px, 0px) translate3d(0px, 0px, 0px)`,
            }}
          >
            <img
              alt="Ellipse"
              class="Common-ellipse Common-ellipse--medium"
              src="https://instant-system.com/images/ellipse-medium.png"
            />
          </div>
        </div>

        <div class="WorkTogether-explanations">
          {blok.explanations.map((subBlok) => (
            <StoryblokComponent blok={subBlok} key={subBlok._uid} />
          ))}
        </div>

        <div class="WorkTogether-solutions">
          <StoryblokComponent
            blok={blok.specialExplanation[0]}
            key={blok.specialExplanation[0]._uid}
            isSpecial={true}
          />
        </div>

        <div class="WorkTogether-whyWorkTogether">
          <div class="Common-section">
            <h2
              class="Common-title WhyWorkTogether-title"
              aria-label={blok.title}
            >
              {blok.title}
            </h2>
            <p
              class="Common-subtitle WhyWorkTogether-subtitle"
              aria-label={blok.description}
            >
              {blok.description}
            </p>
            <a
              class="WhyWorkTogether-button ButtonRounded ButtonRounded--transparent"
              aria-label={blok.linkText}
              href="#nouscontacter"
            >
              <span class="ButtonRounded-label">{blok.linkText}</span>
            </a>
          </div>
          <div
            id="js-why-work-together-rocket"
            class="Common-section Common-section--stickedOnLeft WhyWorkTogether-rocket WhyWorkTogether-rocket--visible"
          >
            <img
              class="Presentation-logoRocket"
              alt={blok.title}
              src={blok.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

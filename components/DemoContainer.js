import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState } from "react";

export const DemoItem = ({ blok, setImageVisible }) => {
  return (
    <div className="js-signature-features-bloc SignatureFeatures-infoBloc SignatureFeatures-infoBloc--visible full-visible">
      <h3 className="SignatureFeatures-infoTitle">
        <span
          className={"SignatureFeatures-infoIcon is-website-" + blok.icon}
        ></span>
        <span
          className="SignatureFeatures-infoText"
          tabindex="0"
          aria-label={blok.title}
        >
          {blok.title}
        </span>
      </h3>
      <p
        className="SignatureFeatures-infoDescription"
        tabindex="0"
        aria-label={blok.description}
      >
        {blok.description}
      </p>

      <button
        className="SignatureFeatures-infoButton"
        type="button"
        onClick={() => setImageVisible(blok.img)}
        aria-label={blok.buttonText}
      >
        <span className="SignatureFeatures-infoIcon SignatureFeatures-infoIcon--small is-website-eye"></span>
        <span className="SignatureFeatures-infoButtonLabel">
          {blok.buttonText}
        </span>
      </button>
    </div>
  );
};

export const DemoContainer = ({ blok }) => {
  const images = blok.items.map((subBlok) => subBlok.img);

  const [visibleImage, setCurrentImage] = useState(images[0]);

  const setImageVisible = (img) => {
    setCurrentImage(img);
  };

  console.log(images);
  return (
    <div className="Start-signatureFeatures">
      <div className="SignatureFeatures">
        <h2
          className="Common-title SignatureFeatures-title"
          tabindex="0"
          aria-label={blok.title}
        >
          {blok.title}
        </h2>
        <p
          className="Common-subtitle SignatureFeatures-subtitle"
          tabindex="0"
          aria-label={blok.intro}
        >
          {blok.intro}
        </p>
        <div className="SignatureFeatures-demoContainer">
          <div id="js-signature-phone" className="Common-section">
            <div className="SignatureFeatures-phoneContainer">
              <div className="SignatureFeatures-phoneContent">
                {images.map((img, index) => (
                  <img
                    key={index}
                    className={
                      "SignatureFeatures-phone " +
                      (visibleImage === img
                        ? "SignatureFeatures-phone--visible"
                        : "")
                    }
                    alt="Écran avec une représentation du rendu de l'application"
                    src={img}
                  />
                ))}
              </div>
              <div className="SignatureFeatures-dot"></div>
              <div className="SignatureFeatures-background"></div>
            </div>
          </div>
          <div className="Common-section Common-section--stickedOnLeft">
            {blok.items.length > 0 &&
              blok.items.map((item) => (
                <StoryblokComponent
                  blok={item}
                  key={item._uid}
                  setImageVisible={setImageVisible}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

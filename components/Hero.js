export const Hero = ({ blok }) => {
  return (
    <div className={"Page " + blok.background}>
      <div className="Presentation">
        <div className="Presentation-sectionBig">
          <h1
            className="Presentation-title Presentation-title--withMarginTopSmall"
            tabindex="0"
            aria-label={blok.title}
          >
            {blok.title}
          </h1>
          <p
            className="Presentation-description"
            tabindex="0"
            aria-label={blok.description}
          >
            {blok.description}
          </p>
          <div className="Presentation-buttons">
            <button
              className="Presentation-button ButtonRounded ButtonRounded--transparent"
              type="button"
              aria-label="Découvrir"
            >
              <span className="ButtonRounded-label">Découvrir</span>
            </button>
            <a
              className="Presentation-button ButtonRounded ButtonRounded--reversed"
              aria-label="Contactez-nous"
              href="#nouscontacter"
            >
              <span className="ButtonRounded-label">Contactez-nous</span>
            </a>
          </div>
        </div>
        <div className="Presentation-sectionBig Presentation-sectionBig--stickedOnLeft">
          <img
            className="Presentation-logo Presentation-logo--big"
            tabindex="0"
            alt="Image avec un smart phone et des éléments de mobilités, un vélo, une trottinette et un bus."
            src={blok.image}
          />
        </div>
      </div>
    </div>
  );
};

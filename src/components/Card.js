import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div className="container-card">
        <section className="card-dentro">
          <h1 data-testid="name-card">{cardName}</h1>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{cardDescription}</p>
          <h3 data-testid="attr1-card">
            Prêmios Literários:.........................
            {cardAttr1}
          </h3>
          <h3 data-testid="attr2-card">
            Edições Publicadas:........................
            {cardAttr2}
          </h3>
          <h3 data-testid="attr3-card">
            Impacto Social:................................
            {cardAttr3}
          </h3>
          <h3 data-testid="rare-card">{cardRare}</h3>
          {cardTrunfo && <h3 data-testid="trunfo-card" className="trun">Super Trunfo</h3>}
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

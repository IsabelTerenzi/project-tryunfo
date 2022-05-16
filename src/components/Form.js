import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <fieldset className="container-inputs">
        <div className="name-descricao">
          <label htmlFor="cardName">
            Nome Livro
            <br />
            <input
              id="cardName"
              type="text"
              data-testid="name-input"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="descricao">
            Descrição
            <br />
            <textarea
              id="descricao"
              type="textarea"
              cols="25"
              rows="5"
              data-testid="description-input"
              name="descricao"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="atributos">
          <label htmlFor="atributo1">
            Prêmios Literários
            <input
              id="atributo1"
              type="number"
              data-testid="attr1-input"
              name="atributo1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atributo2">
            Edições Publicadas
            <input
              id="atributo2"
              type="number"
              data-testid="attr2-input"
              name="atributo2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="atributo3">
            Impacto Social
            <input
              id="atributo3"
              type="number"
              data-testid="attr3-input"
              name="atributo3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="imagem-raridade-trunfo">
          <label htmlFor="imagem">
            Imagem
            <br />
            <input
              id="imagem"
              type="text"
              data-testid="image-input"
              name="imagem"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="raridade">
            Raridade
            <br />
            <select
              id="raridade"
              data-testid="rare-input"
              name="raridade"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          { hasTrunfo ? ('Você já tem um Super Trunfo em seu baralho') : (
            <label htmlFor="trunfo">
              Super Trunfo
              <input
                type="checkbox"
                id="trunfo"
                data-testid="trunfo-input"
                name="trunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label> // verifica se hasTrunfo, como chamado no App, é true. Se for, retorna a mensagem, se não, cria o super trunfo na carta
          )}
        </div>
        <div>
          <button
            className="button-7"
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </fieldset>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

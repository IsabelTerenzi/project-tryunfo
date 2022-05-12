import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            type="text"
            data-testid="name-input"
            name="name"
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="textarea"
            data-testid="description-input"
            name="descricao"
          />
        </label>
        <label htmlFor="atributo1">
          Atributo 1:
          <input
            id="atributo1"
            type="number"
            data-testid="attr1-input"
            name="atributo1"
          />
        </label>
        <label htmlFor="atributo2">
          Atributo 2:
          <input
            id="atributo2"
            type="number"
            data-testid="attr2-input"
            name="atributo2"
          />
        </label>
        <label htmlFor="atributo3">
          Atributo 3:
          <input
            id="atributo3"
            type="number"
            data-testid="attr3-input"
            name="atributo3"
          />
        </label>
        <label htmlFor="imagem">
          Imagem:
          <input
            id="imagem"
            type="text"
            data-testid="image-input"
            name="imagem"
          />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select
            id="raridade"
            data-testid="rare-input"
            name="raridade"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="trunfo"
          />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;

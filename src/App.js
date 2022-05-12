import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    descricao: '',
    atributo1: '',
    atributo2: '',
    atributo3: '',
    imagem: '',
    raridade: 'normal',
    trunfo: false,
  }

  onInputChange = (event) => {
    const { target: { value, name } } = event;
    this.setState({ [name]: value });
  }

  render() {
    const { name, descricao, atributo1, atributo2,
      atributo3, imagem, raridade, trunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <Form
          cardName={ name }
          cardDescription={ descricao }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ imagem }
          cardRare={ raridade }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ descricao }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ imagem }
          cardRare={ raridade }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    descricao: '',
    atributo1: '0',
    atributo2: '0',
    atributo3: '0',
    imagem: '',
    raridade: 'normal',
    trunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  }

  verificaBotaoSalvar = () => {
    const somaAtrib = 210;
    const numeroMax = 90;
    const numeroMin = 0;
    const { name, descricao, imagem, raridade, atributo1,
      atributo2, atributo3 } = this.state;
    const at1 = parseInt(atributo1, 10);
    const at2 = parseInt(atributo2, 10);
    const at3 = parseInt(atributo3, 10);

    if (name === '' || descricao === '' || imagem === '' || raridade === '') {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }

    if (at1 + at2 + at3 > somaAtrib) {
      this.setState({ isSaveButtonDisabled: true });
    }

    if (atributo1 > numeroMax || atributo2 > numeroMax || atributo3 > numeroMax) {
      this.setState({ isSaveButtonDisabled: true });
    }

    if (atributo1 < numeroMin || atributo2 < numeroMin || atributo3 < numeroMin) {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [name]: value }),
      this.verificaBotaoSalvar);
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

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
    formPreenchido: [], // array que irá receber as informações da carta a ser salva, iniciando vazio
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

  onSaveButtonClick = () => {
    const { name, descricao, atributo1, atributo2, atributo3,
      imagem, raridade, trunfo } = this.state;
    const cartaCriada = {
      name, descricao, atributo1, atributo2, atributo3, imagem, raridade, trunfo,
    }; // essa constante cria o objeto da carta que será salva

    this.setState(({ formPreenchido }) => ({
      formPreenchido: [...formPreenchido, cartaCriada],
    }), // pega o array do formulário preenchido, inicialmente vazio, e coloca as informações preenchidas, a partir dos elementos do objeto cartaCriada
    () => {
      this.setState({
        name: '',
        descricao: '',
        imagem: '',
        atributo1: '0',
        atributo2: '0',
        atributo3: '0',
        raridade: 'normal',
      });
    }); // após a carta ser salva, volta os elementos aos seus estados iniciais, ou seja, zerados

    if (trunfo) {
      this.setState({
        trunfo: false,
        hasTrunfo: true });
    }
  } // verifica se o trunfo é true e se for, muda a hasTrunfo para true, que está sendo chamada no form

  botaoDeleta = (name, trunfo) => {
    const { formPreenchido } = this.state;
    const deletaCarta = formPreenchido.filter((carta) => carta.name !== name);
    this.setState({
      formPreenchido: deletaCarta,
      hasTrunfo: !trunfo,
    });
  }

  render() {
    const { name, descricao, atributo1, atributo2,
      atributo3, imagem, raridade, trunfo, hasTrunfo,
      isSaveButtonDisabled, formPreenchido } = this.state;
    return (
      <div>
        <h1 className="titulo">Trunfo Literário</h1>
        <section>
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
        </section>
        <section>
          { formPreenchido.map((carta, index) => (
            <div key={ index } className="card-criado">
              <Card
                cardName={ carta.name }
                cardDescription={ carta.descricao }
                cardAttr1={ carta.atributo1 }
                cardAttr2={ carta.atributo2 }
                cardAttr3={ carta.atributo3 }
                cardImage={ carta.imagem }
                cardRare={ carta.raridade }
                cardTrunfo={ carta.trunfo }
              />
              <button
                type="button"
                className="botao-delete"
                data-testid="delete-button"
                onClick={ () => this.botaoDeleta(carta.name, carta.trunfo) }
              >
                Excluir
              </button>
            </div>))}
        </section>
      </div>
    );
  }
}

export default App;

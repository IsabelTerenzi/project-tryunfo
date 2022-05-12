import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <Form
          cardName={ this.cardName }
          cardDescription={ this.cardDescription }
          cardAttr1={ this.cardAttr1 }
          cardAttr2={ this.cardAttr2 }
          cardAttr3={ this.cardAttr3 }
          cardImage={ this.cardImage }
          cardRare={ this.cardRare }
          cardTrunfo={ this.cardTrunfo }
          hasTrunfo={ this.hasTrunfo }
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ this.cardName }
          cardDescription={ this.cardDescription }
          cardAttr1={ this.cardAttr1 }
          cardAttr2={ this.cardAttr2 }
          cardAttr3={ this.cardAttr3 }
          cardImage={ this.cardImage }
          cardRare={ this.cardRare }
          cardTrunfo={ this.cardTrunfo }
          hasTrunfo={ this.hasTrunfo }
        />
      </div>
    );
  }
}

export default App;

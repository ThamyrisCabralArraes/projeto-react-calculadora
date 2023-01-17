import React, { Component } from 'react';
import './Calculator.css';
import Button from '../componets/Button';
import Display from '../componets/Display';

class Calculadora extends Component {
  clearMemory = () => {
    console.log('limpar');
  };

  setOperation = (operation) => {
    console.log('setOperat');
  };

  addDigit = (n) => {
    console.log('addDig');
  };

  render() {
    return (
      <div className='calculadora'>
        <Display value={100} />
        <Button
          label='AC'
          click={this.clearMemory}
        />
        <Button
          label='/'
          click={this.setOperation}
        />
        <Button
          label='7'
          click={this.addDigit}
        />
        <Button
          label='8'
          click={this.addDigit}
        />
        <Button
          label='9'
          click={this.addDigit}
        />
        <Button
          label='*'
          click={this.setOperation}
        />
        <Button
          label='4'
          click={this.addDigit}
        />
        <Button
          label='5'
          click={this.addDigit}
        />
        <Button
          label='6'
          click={this.addDigit}
        />
        <Button
          label='-'
          click={this.setOperation}
        />
        <Button
          label='1'
          click={this.addDigit}
        />
        <Button
          label='2'
          click={this.addDigit}
        />
        <Button
          label='3'
          click={this.addDigit}
        />
        <Button
          label='+'
          click={this.setOperation}
        />
        <Button
          label='0'
          click={this.addDigit}
        />
        <Button label='.' />
        <Button label='=' />
      </div>
    );
  }
}

export default Calculadora;

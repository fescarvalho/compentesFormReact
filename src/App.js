import React from 'react';
import Input from './components/Input';
import Select from './components/Select';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState('');
  const [termos, setTermos] = React.useState('');
  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
      <Input
        label="Email"
        id="email"
        type="text"
        value={nome}
        setValue={setNome}
        required
      />

      <Select
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Radio
        options={['azul', 'amarelo', 'vermelho']}
        value={cor}
        setValue={setCor}
      />
      <h2>Frutas</h2>
      <Checkbox
        options={['Uva', 'Laranja', 'Melancia']}
        value={fruta}
        setValue={setFruta}
      />
      <h2>Termos</h2>
      <Checkbox
        options={['Termos e condiçoes']}
        value={termos}
        setValue={setTermos}
      />
      <br />
      <br />
      <button>Enviar Dados</button>
    </form>
  );
};

export default App;

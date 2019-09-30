import React, { useState } from 'react';

const Form = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  const addSmurf = event => {
    event.preventDefault();
    const smurf = {
      name: name,
      age: age,
      height: height
    };

    props.addSmurf(smurf);

    clearInputs();
  };

  const clearInputs = () => {
    setName('');
    setAge('');
    setHeight('');
  };

  return (
    <form onSubmit={addSmurf}>
      <input
        onChange={e => setName(e.target.value)}
        value={name}
        type="text"
        name="name"
        placeholder="Add smurf name"
      />
      <input
        onChange={e => setAge(e.target.value)}
        value={age}
        type="text"
        name="age"
        placeholder="Add smurf age"
      />
      <input
        onChange={e => setHeight(e.target.value)}
        value={height}
        type="text"
        name="height"
        placeholder="Add smurf height"
      />
      <button onClick={addSmurf}>Add Smurf</button>
    </form>
  );
};

export default Form;

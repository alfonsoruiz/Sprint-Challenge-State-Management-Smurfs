import React from 'react';

const Smurf = props => {
  const { name, age, height } = props.smurf;
  return (
    <div className="smurf">
      <h2>{name}</h2>
      <p>age: {age}</p>
      <p>height: {height}</p>
    </div>
  );
};

export default Smurf;

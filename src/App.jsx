import React from 'react';
import RFC from './RFC';

const App = () => {
  // Ejemplo de datos que se pasarán como props
  const props = {
    nombre: 'angelica',
    apellidoPaterno: 'de la pena',
    apellidoMaterno: 'canto',
    fechaNacimiento: '2000-02-25', // Formato: YYYY-MM-DD
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>RFC</h1>
      <RFC {...props} />
    </div>
  );
};

export default App;

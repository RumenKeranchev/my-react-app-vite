import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('hello');

    // calling setValue here will cause an infinite loop
    //setValue(value + 1);
  }

  // runs every time the component renders and re-renders
  sayHello();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' />
      </div>
      <div className='form-group'>
        <label htmlFor='jobrole'>Job Role:</label>
        <select id='jobrole'>
          <option value=''>Select a job role</option>
          <option value='developer'>Developer</option>
          <option value='tester'>Tester</option>
        </select>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default App;

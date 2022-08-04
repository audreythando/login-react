import './App.css';
import React, {useState} from 'react';

import Info from './components/Form/Modal/Modal';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeUsernameHandler = (e) => {
      setUsername(e.target.value)
  }
  const changeEmailHandler = (e) => {
      setEmail(e.target.value)
  }
  const changePasswordHandler = (e) => {
      setPassword(e.target.value)

  }

  
  const submit = (e) => {
      e.preventDefault();
  }

  return (
    <div className="App">
      <div className='form'>
            <h1>Login Form</h1>
                <form className='login-form' onSubmit={submit}>
                <div className='input-box'> 
                    <input type="text" name="username" value={username} onChange={(e) => changeUsernameHandler(e)} placeholder='Enter Username' />
                    </div>
                    <div className='input-box'> 
                    <input type="text" name="email" value={email} onChange={(e) => changeEmailHandler(e)} placeholder='Email' />
                    </div>
                     <div>
                    <input type="password" name="password" value={password} onChange={(e) => changePasswordHandler(e)} placeholder='Password' />
                    </div>
                    {/* <div className='login-btn'>
                        <button type='submit' onClick={submit}>LOGIN</button>
                    </div> */}
                </form>
                {/* {<p>{username}</p>}
                {<p>{email}</p>}
                {<p>{password}</p>} */}
                <Info name={username} email={email} password={password}/>
            

            </div>
  
    </div>

  );
}

export default App;

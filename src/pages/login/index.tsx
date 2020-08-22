import React, { useState, FormEvent } from 'react';
import Grid from '@material-ui/core/Grid';

import api from '../../services/api'

import { Form,NeoInc, TextForm,ClickedText } from './styles'

import Logo from '../../assets/images/neologo.png'

const Login: React.FC = () => {
  const [user, setUser] = useState('neotradingbr@gmail');
  const [password, setPassword] = useState('Neoinc20$');
  console.log(user)

  async function handleGetUser(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const response = await api.get(`login.json?email=${user}.com&password=${password}$`);
    console.log(response.data)

  }
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <NeoInc >
            <img width='80%' src={Logo}  alt="logo"/>
          </NeoInc>
          <Form onSubmit={handleGetUser}>
            <TextForm>Login</TextForm>
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <TextForm>Senha</TextForm>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Entrar</button>
            <div style={{textAlign:'center'}}>
              <TextForm>Precisa de uma conta ? <ClickedText>Crie agora! </ClickedText></TextForm>
            </div>
          </Form>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login

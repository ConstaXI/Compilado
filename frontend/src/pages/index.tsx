import React from "react";

import {
  Compilado,
  Container,
  Form,
  Login,
  People,
  Perfil,
  PerfilContainer,
  PerfilHeader,
  PerfilText,
} from "../styles/pages";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <Container>
      <People>
        <PerfilHeader>
          <h2>Pessoas já cadastradas</h2>
          <p>
            Venha fazer parte você também. O site é completamente inútil, porém
            muito divertido e esteticamente bonito (bem... eu tentei)
          </p>
          <hr />
        </PerfilHeader>
        <PerfilContainer>
          <Perfil>
            <div className="Photo" />
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
          <hr />
          <Perfil>
            <div className="Photo" />
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
          <hr />
          <Perfil>
            <div className="Photo" />
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
          <hr />
          <Perfil>
            <div className="Photo"/>
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
          <hr />
          <Perfil>
            <div className="Photo"/>
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
          <hr />
          <Perfil>
            <div className="Photo"/>
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
          <hr />
          <Perfil>
            <div className="Photo"/>
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
          <hr />
          <Perfil>
            <div className="Photo"/>
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
          <hr />
          <Perfil>
            <div className="Photo"/>
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
          <hr />
          <Perfil>
            <div className="Photo"/>
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
          <hr />
          <Perfil>
            <div className="Photo"/>
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
          <hr />
          <Perfil>
            <div className="Photo"/>
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
        </PerfilContainer>
      </People>
      <Compilado>
        <h1 className="Compilado">Compilado</h1>
        <Login>
          <h1>Login</h1>
          <Form>
            <Input name="email" placeholder="Email" type="email" />
            <Input name="password" placeholder="Senha" type="password" />
            <Button name="Entrar" type="submit" />
          </Form>
          <p>Esqueci minha senha</p>
          <strong>Criar uma conta</strong>
        </Login>
      </Compilado>
    </Container>
  );
}

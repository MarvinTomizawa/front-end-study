import React, { useState } from 'react';
import {ThemeProvider} from 'styled-components';
import {temaClaro, temaEscuro} from './Components/UI/temas';
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import GlobalStyle from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [temaClaroAtivo, setTema] = useState(true);
  
  const toggleTema = ()=>{
    setTema((temaClaroAtivo) => !temaClaroAtivo );  
  }

  return (
    <ThemeProvider theme={temaClaroAtivo? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={temaClaroAtivo}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;

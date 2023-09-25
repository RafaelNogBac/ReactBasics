import './App.css';
import './Componentes.js'
import { ExemploUseState, BotaoPrimario, BotaoSecundario } from './Componentes.js';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='sectioninicial'>
        <Painel titulo="Botão Primário" children={<BotaoPrimario />} />
        <Painel titulo="Botão Secundário" children={<BotaoSecundario />} />
        <Painel titulo="Tags" children={<TagA />} />
        <Painel titulo="ExemploUseState" children={<ExemploUseState />} />
      </section>
    </div>
  );
}
function Header() {
  return (
    <div className='App-header'>
      <h1>React Sandbox</h1>
    </div>
  );
}
function Painel(props) {
  return (
    <div className='painelExterno'>
      <h4>{props.titulo}</h4>
      <div className='painelInterno'>
        {props.children}
      </div>
    </div>
  )
}
function TagA() {
  return (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mattis arcu,
          ac mollis eros. Duis eu nisl nisi. Vivamus viverra neque dolor, eu vulputate sem
          ornare sit amet. Nam accumsan ante eget quam vestibulum, in efficitur urna congue.
          Donec sagittis sit amet risus et vehicula. Donec scelerisque, risus vitae consequat
          viverra, massa est luctus tortor, non blandit nisi ex sed augue. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vestibulum blandit rutrum.
          Nunc sodales, erat a laoreet dignissim, arcu sem condimentum dui, vel semper mauris orci ac neque.
        </p>
  );
}

export default App;

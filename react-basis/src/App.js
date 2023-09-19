import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1>Vamos relembrar</h1>
        <section className='sectioninicial'>
          <SectionPrimaria />
        </section>
      </div>
    </div>
  );
}
function SectionPrimaria() {
  return (
    <div className='painelExterno'>
      <h4>Teste de componentes</h4>
      <div className='painelInterno'>
        <h4 className='subTitle'>Tag p</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mattis arcu,
          ac mollis eros. Duis eu nisl nisi. Vivamus viverra neque dolor, eu vulputate sem
          ornare sit amet. Nam accumsan ante eget quam vestibulum, in efficitur urna congue.
          Donec sagittis sit amet risus et vehicula. Donec scelerisque, risus vitae consequat
          viverra, massa est luctus tortor, non blandit nisi ex sed augue. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vestibulum blandit rutrum.
          Nunc sodales, erat a laoreet dignissim, arcu sem condimentum dui, vel semper mauris orci ac neque.
        </p>
      </div>
      <div className='painelInterno'>
        <h4 className='subTitle'>Botões</h4>
        <div className='btns'>
          <BotaoPrimario />
          <BotaoSecundario />
        </div>
      </div>
      <div className='painelInterno'>
        <h4 className='subTitle'>Inputs texto</h4>
        <p>Em breve...</p>
      </div>
    </div>
  );
}
function BotaoPrimario() {
  return (
    <div className='buttonContainer'>
      <button className='btn-primario'>Botao Secundario</button>
    </div>
  );
}

function BotaoSecundario() {
  return (
    <div className='buttonContainer'>
      <button className='btn-secundario'>Botao Secundario</button>
    </div>
  );
}

export default App;

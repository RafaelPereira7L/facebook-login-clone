import './Modules/styles.css'

function App() {

  function redirect() {
    alert('Você será redirecionado ao meu site :)');
    window.location.href='https://faeldev.tk';
  }

  return (
    <div className="App">

      <div>
        <img className='facebookImg' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
        <h1 className='texto'>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h1>

        <div className='content'>
          <form className='formulario'>
            <input className='inputText' type="email" name='email' placeholder='Email ou telefone' />
            <input className='inputText' type="password" name='pwd' placeholder='Senha' />
            <input className='formBtn' type="submit" name='submit' value='Entrar' />
          </form>
            <a href="#">Esqueceu a senha?</a>
            <hr className='linha'/>
            <button onClick={redirect} className='createAccountBtn'>Criar nova conta</button>
        </div>
        <h2 onClick={redirect}>Página recriada por faeldev.tk usando React.JS</h2>
      </div>

    </div>
  );
}

export default App;

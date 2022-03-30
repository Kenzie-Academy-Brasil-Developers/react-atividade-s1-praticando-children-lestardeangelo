
import './App.css';
import CenteredCard from './components/CenteredCard';

function App() {
  return (
    <div className="App">
      <h1> Resumo React children </h1>

      <CenteredCard> 
        <p className='artigo'> 
          Children é uma propriedade que define onde estará localizado os filhos
          de um componente específico, dando flexibilidade no que estará substituindo 
          esse valor.Para a utilizarmos a propriedade children é necessário 
          desestruturar as props do componente. 
        </p> 
      </CenteredCard>

      <CenteredCard>
        <p className='artigo__dois'>
        <h3> Informação adicional </h3> 
        Um componente também aceita componentes filhos, 
        que podem ser outros componentes ou códigos como JSX, por exemplo:
        </p>
      </CenteredCard>
    </div>
  );
}

export default App;

import Card from './Componentes/Card/Card'
import CardList from './Componentes/CardList/CardList';
import './MeuApp.css';


const cardListInfo = [
  {title: 'card 1', imageUrl:'https://i.redd.it/b3esnz5ra34y.jpg'},
  {title: 'card 2', imageUrl:'https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif'},
  {title: 'card 3', imageUrl:'https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif'},
]


function App() {
  return (
    <div className='App'>
  
      <CardList cardListInfo={cardListInfo}/>

    </div>

  );
}

export default App;

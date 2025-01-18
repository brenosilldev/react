import './App.css';
import { Component } from 'react';
import  CardList from './componentes/card_list/card-list';
import Search from './componentes/search/search';

class App extends Component {
  constructor(){
    super();
    this.state ={
        monsters : [],
        searchField : ''
         
    }
  }

  componentDidMount(){

      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>
        response.json())
      .then((item) => {
          this.setState(() => {
            return { monsters : item}
          })
      })

  }

  FiltrarBuscar = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }


  render(){

    const { FiltrarBuscar } = this
 
    const novomonster = this.state.monsters.filter((item) =>{
        return item.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    
    return (
      <div className="App">
        <Search type={'Search'} placeholder={'Procure um robo'} onChangeHandler={FiltrarBuscar} />
        <CardList monsters={novomonster} />
      </div>
    );
  }

}

export default App;

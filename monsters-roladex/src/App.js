import './App.css';
import { Component } from 'react';


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
      return { searchField}
    })
  }


  render(){

    const novomonster = this.state.monsters.filter((item) =>{
        return item.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    
    return (
      <div className="App">
          <div>
            <input type='search' placeholder='Pesquise monstros' className='input-busca' 
              onChange={this.FiltrarBuscar}/>
          </div>
          {novomonster.map((item) => {
            return (
              <div key={item.id} className='container'>
                  <h1>{item.name} - {item.username}</h1>
                  <p>Email: {item.email}</p>
                  
                  


              </div>
            )
        })}
      </div>
    );
  }

}

export default App;

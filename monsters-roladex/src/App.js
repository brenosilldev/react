import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state ={
        monsters : [

        ]
       
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

  render(){
    return (
      <div className="App">
          <div>
            <input type='search' placeholder='Pesquise monstros' className='input-busca' onChange={(event) => {
                const valor = event.target.value.toLocaleLowerCase()

                const novomonster = this.state.monsters.filter((item) =>{
                    return item.name.toLocaleLowerCase().includes(valor)
                })

                  this.setState(() => {
                    return { monsters : novomonster}
                  })
               
            }}/>
          </div>
          {this.state.monsters.map((item) => {
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

import { useEffect, useState } from 'react';
import './App.css';
// import { Component } from 'react';
import  CardList from './componentes/card_list/card-list';
import Search from './componentes/search/search';

const App =  () =>{
   const [monsters,setmonsters] = useState([])
   const [pesquisa,setpesquisa] = useState('')
   const [filtermonster,setfiltermonster] = useState(monsters)


  const filtrarbuscar = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    setpesquisa(searchField)
  }


  useEffect(() =>{

      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>
        response.json())
      .then((item) => {
          setmonsters(item)
      })

  },[])

  useEffect(() =>{
      
      const newnovomoster = monsters.filter((item) =>{
        return item.name.toLocaleLowerCase().includes(pesquisa)
      })

      
      setfiltermonster(newnovomoster)

  },[monsters, pesquisa])

  return(
    <>  
    
      <div className="App">
        <h1 className='app-title'>Monster Roladex </h1>
        <Search className='container-input' type={'Search'} placeholder={'Procure um robo'} onChangeHandler={filtrarbuscar} />
        <CardList monsters={filtermonster} />
      </div>
 
    
    </>
  )
}


// class App extends Component {
//   constructor(){
//     super();
//     this.state ={
//         monsters : [],
//         searchField : ''
         
//     }
//   }

//   componentDidMount(){

//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) =>
//         response.json())
//       .then((item) => {
//           this.setState(() => {
//             return { monsters : item}
//           })
//       })

//   }

//   FiltrarBuscar = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchField }
//     })
//   }


//   render(){

//     const { FiltrarBuscar } = this
 
//     const novomonster = this.state.monsters.filter((item) =>{
//         return item.name.toLocaleLowerCase().includes(this.state.searchField)
//     })
    
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Roladex </h1>
//         <Search className='container-input' type={'Search'} placeholder={'Procure um robo'} onChangeHandler={FiltrarBuscar} />
//         <CardList monsters={novomonster} />
//       </div>
//     );
//   }

// }

export default App;

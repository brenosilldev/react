import './style.css'

const CardList = ({ monsters }) => {
    return (
      <div className='card-list'>
        {monsters.map((item) => (
          <div key={item.id} className="card-container">
            <img alt="Monster" src={`https://robohash.org/${item.id}?set=set2&size=140x140`} />
            <h1>{item.name} - {item.username}</h1>
            <p>Email: {item.email}</p>
          </div>
        ))}
      </div>
    );
  };
  


// class CardList extends Component{
    
//     render(){

//         const { monsters} = this.props
//         return(
//             <>
//                 <div className='card-list'>
//                     {monsters.map((item,index) => (
//                         <>
//                             <div key={item.id} className="card-container">
//                                 <img alt="Monster" src={`https://robohash.org/${index}?set=set2&size=140x140`} />
//                                 <h1>{item.name} - {item.username}</h1>
//                                 <p>Email: {item.email}</p>
//                             </div>
//                         </>
                    
//                     ))}
//                 </div>
            
//             </>
//         )
//     }

// }

export default CardList 


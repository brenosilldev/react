import { Component } from"react"

class CardList extends Component{
    
    render(){

        const { monsters} = this.props
        return(
            <>
                {monsters.map((item) => (
                    <>

                        <div key={item.id} className='container'>
                            <h1>{item.name} - {item.username}</h1>
                            <p>Email: {item.email}</p>
                        </div>
                    </>
                
                ))}
            
            </>
        )
    }

}

export default CardList 


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            palauteH: 0,
            palauteNeut: 0,
            palauteHuono: 0,
            tilastot: []
        }
       
    }

    hyva = (arvo) => {
        return () => {
        this.setState ({ palauteH: arvo , tilastot: this.state.tilastot.concat(1)})

        }
    }
    neutraali = (arvo) => {
        return () => {
        this.setState ({ palauteNeut: arvo, tilastot: this.state.tilastot.concat(0) })
        }
    }
    huono = (arvo) => {
        return () => {
        this.setState ({ palauteHuono: arvo,  tilastot: this.state.tilastot.concat(-1)})
        }
    }

    
    render () {
        const Button2 = ({handleClick, nimi}) => {
            return (
            <button onClick={handleClick} >
                {nimi}
            </button>
            )
        }
        const Statistics = () => {
            return (
               <table>
                   <thead>
                  <tr>
                    <td>hyvä</td>
                    <td>{this.state.palauteH}</td>
                  </tr>  
                  </thead>
                  <thead>
                  <tr>
                    <td>neutraali</td>
                    <td>{this.state.palauteNeut}</td>
                  </tr>
                  </thead>
                  <thead>
                  <tr>   
                    <td>huono</td>
                    <td>{this.state.palauteHuono}</td>
                  </tr>
                  </thead>
                  
                  
                </table>
               
               

            )
        }


        const Statistic = () => {
            const summa = this.state.tilastot.reduce((x, y) => x + y, 0)/ this.state.tilastot.length;
        
            const positiivnen = this.state.tilastot.filter(x => x === 1)
                         .reduce((x,y) => x + y ,0) / this.state.tilastot.length * 100;
            
            if (this.state.tilastot.length === 0){
                return (
                    <table>
                    <thead>
                      <tr>
                        <td>ei yhtään palautetta annettu</td>
                      </tr>
                    </thead>
                    </table>
                
                )
            }             
            return (
                <table>
                  <thead>
                  <tr>
                    <td>keskiarvo</td>
                    <td>{summa.toFixed(2)}</td>
                  </tr>
                  </thead>
                  <thead>
                  <tr>
                    <td>positiivisiä</td>
                    <td>{positiivnen.toFixed(2)} %</td>
                  </tr>
                  </thead> 
                </table>
                

            )
        }
       
       
        return(
            <div>
            <h1> Anna palautetta</h1>
            < Button2 handleClick={this.hyva(this.state.palauteH + 1)} 
                   nimi="hyvä"/>
          
            < Button2 handleClick = {this.neutraali(this.state.palauteNeut + 1)} 
                    nimi="neutraali"  />
                
            
            < Button2 handleClick= {this.huono(this.state.palauteHuono + 1)} 
                    nimi="huono" />
                
           
            
            <h1> satatistiikka </h1>
            < Statistics />
            < Statistic />

            </div>
           
        )

    }
}
ReactDOM.render( <App />, document.getElementById('root'))
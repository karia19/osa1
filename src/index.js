import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    /*
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14
  
    */
   const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
   }
   console.log(kurssi.osat[0].nimi)
 
    const Otsikko = (props) => {
        return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>

        )
    }
    const Sisalto = (props) => {
        return (
            <div>
                <p>{props.osa} {props.määrä}</p>
            </div>
        )
    }
    const Yhteensä = (props) => {
        return (
            <div>
              <p>yhteensä {props.summa} tehtävää </p>
            </div>
        )
    }
    
    return (
      <div>
        <Otsikko kurssi={kurssi.nimi} />
        <Sisalto osa={kurssi.osat[0].nimi} määrä={kurssi.osat[0].tehtavia} />
        <Sisalto osa={kurssi.osat[1].nimi} määrä={kurssi.osat[1].tehtavia} />
        <Sisalto osa={kurssi.osat[2].nimi} määrä={kurssi.osat[2].tehtavia} />
        <Yhteensä summa={kurssi.osat[0].tehtavia + kurssi.osat[1].tehtavia + kurssi.osat[2].tehtavia} />
       
        
      </div>
    )
}






ReactDOM.render(<App />, document.getElementById('root'));


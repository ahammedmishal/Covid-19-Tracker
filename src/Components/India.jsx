import React,{useEffect,useState,useContext} from 'react'
import {AppContext} from '../context'
import {Card} from 'react-bootstrap'
import Header from './Header'
import StateData from './StateData'
import axios from 'axios'
import  './App.css'


function India() {
    const [state, setstate] = useState('')
    const {dark,setMode} = useContext(AppContext)
   

useEffect(() => {
    axios.get('https://corona.lmao.ninja/v2/countries/india').then((response)=>{
        console.log(response.data);
        setstate(response.data)
    })
}, [])

    return (
        
         
        <div className={dark ? "dark-mode": "App"}>
        <div className="row">


            <div className="col-md-12">

                
                <h3 style={dark ? {color:'dark'}: {color:'white'}}><img src="https://www.countryflags.io/in/flat/64.png" alt="" /> INDIA</h3>

            </div>

            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3">

                        <Card  className="bade badge-primary" style={{ width: '18rem',height:'9rem'  }}>
                            
                            <Card.Body className="text-center">
                                <Card.Title > TOTAL CASES </Card.Title>
                                <h3>{state.cases}</h3>

                                <Card.Text>
                                    [Today : {state.todayCases}]
                                </Card.Text>

                            </Card.Body>

                        </Card>
                        

                    </div>
                    <div className="col-md-3">

                        <Card  className="bade badge-warning" style={{ width: '18rem',height:'9rem' }}>
                            
                            <Card.Body className="text-center">
                                <Card.Title > ACTIVE CASES </Card.Title>
                                <h3>{state.active}</h3>

                                <Card.Text>
                                    
                                </Card.Text>

                            </Card.Body>

                        </Card>
                        

                    </div>
                    <div className="col-md-3">

                        <Card  className="bade badge-success" style={{ width: '18rem',height:'9rem' }}>
                            
                            <Card.Body className="text-center">
                                <Card.Title > RECOVERED CASES </Card.Title>
                                <h3>{state.recovered}</h3>

                                <Card.Text>
                                    [Today : {state.todayRecovered}]
                                </Card.Text>

                            </Card.Body>

                        </Card>
                        

                    </div>
                    <div className="col-md-3">

                        <Card  className="bade badge-danger" style={{ width: '18rem',height:'9rem' }}>
                            
                            <Card.Body className="text-center">
                                <Card.Title > Deaths </Card.Title>
                                <h3>{state.deaths}</h3>

                                <Card.Text>
                                    [Today : {state.todayDeaths}]
                                </Card.Text>

                            </Card.Body>

                        </Card>
                        

                    </div>
                    
                </div>
            </div>
            <div className="col-md-12">
                <StateData/>
            </div>
        </div>
        </div>
    )
}

export default India

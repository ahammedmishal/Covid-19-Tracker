import React,{useState,useEffect,useContext} from 'react'
import {AppContext} from '../context'
import axios from 'axios'
import {Accordion,Card,Button} from 'react-bootstrap'

function StateData() {
    const [state,setState] = useState('')
    const {dark,setMode} = useContext(AppContext)
    useEffect(()=>{
        axios.get("https://api.covid19india.org/state_district_wise.json").then((response)=>{
            // console.log(response.data);
            setState(response.data)

        })
    },[])

    let keys = Object.keys(state);
    // console.log(keys)
    return (
      <div className="dark-mod">
        <div className="row">
            <div className="col-md-12">
                <Accordion defaultActiveKey="0">
                  {
                    keys.map((obj,ky)=>{

                      let districts = state[obj].districtData;
                      let district_keys = Object.keys(districts)
                      // console.log(district_keys)

                      let total_active = 0;
                      let total_confirmed = 0;
                      let total_deaths = 0;
                      let total_recover = 0;
                     
                      let district_list = []
                      for(let x in districts){
                        total_active += districts[x].active
                        total_confirmed += districts[x].confirmed
                        total_deaths += districts[x].deceased
                        total_recover +=  districts[x].recovered
                      
                        let ob = districts[x]
                        ob["district_name"] = x
                        district_list.push(ob)
                      }
                      // console.log(district_list)

                      return(
                        
                        <Card className={dark ? "dark-mode": "App"} >
                          <Card.Header>
                            <Accordion.Toggle as={Button} eventKey={ky}>{obj} <span className="btn-dark p-1 mr-2">  Total Cases - {total_confirmed} </span>  <span className="btn-dark p-1 mr-2">  Active - {total_active} </span> <span className="btn-dark p-1 mr-2">  Recovered - {total_recover} </span> <span className="btn-dark p-1 mr-2"> Death - {total_deaths} </span></Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={ky}>
                            <Card.Body>
                              
                              <table style={dark ? {color:'white'}: {color:'black'}} className="table table-bordered table-striped">
                                <thead>
                                  <tr>
                                    
                                    <td>Districts</td>
                                    <td>Confirmed</td>
                                    <td>Active</td>
                                    <td>Recovered</td>
                                    <td>Deaths</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  
                                    {
                                      district_list.map((obj,ky)=>{
                                        return(
                                          <tr>
                                            <td>{obj.district_name}</td>
                                            <td>{obj.confirmed}</td>
                                            <td>{obj.active}</td>
                                            <td>{obj.recovered}</td>
                                            <td>{obj.deceased}</td>
                                          </tr>
                                        )
                                      })
                                    }
                                  
                                </tbody>
                              </table>
                          
                            </Card.Body>
                          </Accordion.Collapse>
                       </Card>
                       
                      )
                    })
                  }
                  
                </Accordion>
            </div>
        </div>
        </div>
    )
}

export default StateData

import React,{useState,useEffect,useContext} from 'react'
import {AppContext} from '../context'
import axios from 'axios'
import {Accordion,Card,Button} from 'react-bootstrap'

function World() {
    const [state,setState] = useState([])
    const {dark,setMode} = useContext(AppContext)
    useEffect(()=>{
        axios.get("https://corona.lmao.ninja/v2/countries?yesterday&sort").then((response)=>{
            console.log(response.data);
            setState(response.data)
            console.log(response.data);

        })
    },[])

    return (
        <div className={dark ? "dark-mode": "App"}>
        <div className="row">
            <div className="col-md-12">
            <table className="table table-light table-bordered table-striped">
            <thead   className={dark ? "dark-mode": "App"}>
                
                    <tr>
                    <td>Country</td>
                    <td>Total Cases</td>
                    <td>Recovered</td>
                    <td>Death</td>
                    </tr>
                
            </thead>
            
            <tbody  className={dark ? "dark-mode": "App"}>
                {
                    state.map((obj,ky)=>{
                        return(
                            <tr>
                                
                                <td> <img style={{width : '64px',marginLeft : '10px'}} src={obj.countryInfo.flag} alt="" /> {obj.country}</td>
                                <td>{obj.cases}</td>
                                <td>{obj.recovered}</td>
                                <td>{obj.deaths}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
                </table>
                
            </div>
        </div>
        </div>
    )
}

export default World

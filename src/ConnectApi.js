import { Component } from "react";
import axios from "axios";

export class ConnectApi extends Component{

    constructor(){
        super();
        this.state=({
            emps:[]
        })
    }
    componentDidMount(){
        axios.get("http://localhost:8080/getemps").then(
            success => {
                console.log(success)
                this.setState({emps:success.data})
            }).catch((error) => {
                console.error("Error fetching employees:", error); // Log the actual error
            })
            
    
    }
    render(){
        return(
            <>
            <h3>List of Employees</h3>
            <table border="1px">
                <thead>
                <tr>
                    <th>empid</th>
                    <th>ename</th>
                    <th>salary</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.emps.map(
                        emp =>
                     <tr key={emp.id}>
                     <td>{emp.id}</td>
                     <td>{emp.name}</td>
                     <td>{emp.salary}</td>
                  
                 </tr>
                 
                 )
                }
                </tbody>
            </table>
            </>
        )
    }



}
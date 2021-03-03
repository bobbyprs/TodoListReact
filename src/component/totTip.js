import React from 'react'
export default class Totip extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col-sm-8">Total customer</th>
                <th scope="col--sm-4">Total Tip</th>
                </tr>
            </thead>
            <tbody>
              <tr>
              <th scope="row-sm-8">{this.props.nper}</th>
              <td scope="row-sm-4">{this.props.total}</td>
               
              </tr>
             </tbody>
             <dashBord/>
          </table>
        )
    }
}

import React from 'react'
 class ProductTitle extends React.Component{
     constructor(props){
         super(props)
         this.state ={
             name:'',
            dateTime:''
         }
     }
     render(){
         return(
            <div class="input-group mb-3">
            {/* <div class="input-group-prepend">
             <select name="tipper" class="btn btn-outline-secondary dropdown-toggle" value={Number (this.state.perc)} onChange={(evt) =>{this.setState({perc:evt.target.value})}} required>
             <option class="dropdown-item" value="20">Excelent-20%</option>
             <option class="dropdown-item" value="10">Medium-10%</option>
             <option class="dropdown-item" value="5">not so good-5%</option>
             </select>
            </div> */}
        <input type="datetime-local" value={this.state.dateTime} min={new Date().toLocaleDateString} onChange={(e) =>{this.setState({dateTime:e.target.value})}} />
          <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="enter the toDo hear" value={this.state.name} onChange={(evt) =>{this.setState({name:evt.target.value})}} style={{textAlign:"center"}}></input>
          <button class="btn btn-outline-secondary " type="button" aria-haspopup="true" aria-expanded="false" onClick={() =>{this.props.hand(this.state);this.setState({name:"",dateTime:''});}}>Add name</button>
        
        </div>
         )
     }
 }
 export default ProductTitle
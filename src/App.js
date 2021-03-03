
import './App.css';
import ProductTitle from './ProductTitle'
import React from 'react'
// import Percomp from './component/component';
// import Component from './component/component.js'
// import Totip from './component/totTip'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      product : [],
     
      
    }
  }
  // hadleCount = () =>{
  // this.temp=  setInterval(() => {
  //     this.setState({count:this.state.count+1})
  //   }, 1000);
  // }
  // reshand=() =>{
  //   clearInterval(this.temp)
  // }
  handleclick =(val) =>{
    this.setState({product:[...this.state.product,{checkboxChecked:false,dateTime:new Date(val.dateTime),name:val.name}]})
  }
  handleChange =(ind) =>{
  
     this.setState({product:[...this.state.prouduct.slice(0,ind),{...this.state.product[ind],dateTime:alert()},...this.state.product.slice(ind+1)]})
    
  } 
  // handleCal=(evt) =>{
  //   this.setState({nper:[this.state.product.length]})
  //   var tot =this.state.product.map(item =>(Number(this.state.valu))*(Number(item.perc)/100)).reduce((a,b) => a+b,0)
  //   this.setState({total:tot})
  // }
 handleDelete=(index) =>{
      var newItem = this.state.product.filter((product,ind) =>{
     return index!=ind
      })
    
    // const newItem = Object.assign([],this.state.product)
    // this.state.product.splice(index,1)
      this.setState({product:newItem})
 }
handleCheck=(ind) =>{
  // this.setState({checkboxChecked: !this.state.checkboxChecked})
// if (this.state.strike ==='none'){
//   this.setState({strike: 'line-through'})
// } else {
//   this.setState({strike: ''})
// }
// var value=this.checkbox.value
// console.log(value)
// this.state.product  
// [{checkboxChecked:false,name:'bobby',date:new Date()},{checkboxChecked:false,name:'tommy',date:new Date()},{checkboxChecked:false,name:'sai',date:new Date()}]  
this.setState({product:[...this.state.product.slice(0,ind),{...this.state.product[ind],checkboxChecked:!this.state.product[ind].checkboxChecked},...this.state.product.slice(ind+1)]})
}

render() {
  console.log(this.state.product)
    return(
      
      <main>
        
       <div class="container mt-5  " style={{maxWidth: "1000px",height:"auto"}}>
        
 <div class="card text-center"style={{boxShadow: "3px 3px 15px 3px",}}>
  
    <div class="card-header"style={{backgroundColor:"#1c1c1c"}} >
   <span class='txt'>TODoList </span>
   <span class="gradient"></span>
     <span class="dodge"></span>
  </div>
 
  <div class="card-body">
    <h5 class="card-title">Welcome To My To-Do-List</h5>
    {/* <label style={{ display: "block",marginTop:"30px"}}>Enter Bill amount</label>
    <input type="text" class="form-control" aria-label="Text input with dropdown button" value={this.state.valu} onChange={(evt) =>{this.handleChange(evt)}} style={{marginBottom:"30px"}}></input> */}
    {/* <label style={{ display: "block"}} ></label> */}
    <div className='input-group mb-3'></div>
    <ProductTitle hand={this.handleclick} handleChange={this.handleChange} />
    
<div style={{display:"block"},{border:"1px solid #D5DADA"}}>
  <div class="card-header">List</div>
  <ul>
    {this.state.product.map ((item,index) =><li style={{fontFamily:'Helvetica Neue LT Std',fontSize:'15px',textShadow:' 1px 1px 2px darkslategrey'}}>
      <div class='textDisplay' style={{borderRadius:'10px',border:'1px solid',marginBottom:'8px',boxShadow:' 3px 3px 3px darkslategrey',maxWidth: '833px',backgroundColor:''}}>
        <input type="checkbox" className='check' checked={item.checkboxChecked} onClick={(ind) => this.handleCheck(index)}/> <span className={item.checkboxChecked ?'textDoc':''}>{item.name} </span>  <span className={item.dateTime < new Date() ?alert(`due date passed for ${item.name} ${item.dateTime.toLocaleDateString()}`):''}>{item.dateTime.toLocaleDateString()}</span>
        <button type="button" class="btn btn-outline-secondary " style={{borderRadius:"10px",boxShadow: "1px 1px 5px 1px #2d3436",fontSize:'small',marginBottom:"10px",marginTop:"10px"}} onClick={this.handleDelete.bind(this,index)}>
          X</button></div></li>)}
  </ul>
  </div>
  {/* <button onClick={this.handleCal} class="btn btn-primary"style={{margin:"20px"}}>calculate</button> */}
    {/* <Totip nper={this.state.nper} total={this.state.total}/> */}
    </div>
    <footer class="card-footer text-muted" 
    style={{position:"bottom",left:"0",bottom:"0",width:"100%",textAlign:"center",color:"white",fontSize:"20px" ,backgroundColor:"#172E4D"}}>
    @2020 ToDo List
  </footer>
    </div>
  </div>  
</main>
    )
  }
}
export default App;

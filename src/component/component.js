
import React from 'react'
import Percomp2 from './Component2'

export default class Percomp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            updatedState:8,
            hideChild:false
        }
        
    }
    
    
    // handleClick=(evt) =>{
    //     this.setState({produlist:[...this.state.produlist,evt]})
    // }
    render(){
        
        return(
            <>
            <button type='button' onClick={() =>this.setState({updatedState:this.state.updatedState+1})}>change</button>
            {this.state.hideChild ? null:<Percomp2 updatedState={this.state.updatedState}/>}
            </>
        )
    }
}
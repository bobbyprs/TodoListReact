import React, { Component } from 'react'

 
export default class Percom2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // temp:''
            updatedState:this.props.updatedState,
            countInterval:0
        }
        this.temp=''
    }
    componentDidMount(){
        console.log('didmount')
     this.temp= setInterval(() => {this.setState({countInterval:this.state.countInterval + 1})},1000)
    }
    componentWillUnmount(){
        console.log('component unmount')
        clearInterval(this.temp)
    }
    
    static getDerivedStateFromProps(props,state){
        if(props.updatedState !== state.updatedState){
            return{
                updatedState:props.updatedState
            }
        }
        return null
    }
    // shouldComponentUpdate(nextProps,prevProps){
    //     return false
    // }
    render(){
        return(
            <>
            {/* <input type='text' onChange={(evt) =>{this.setState({temp:evt.target.value})}}/>
           <button  type="button" onClick={() =>{this.props.handleClick(this.state.temp)}} >Add name</button> */}
            <div>
                <p>updated State:{this.props.updatedState}</p>
                <p>countstate:{this.state.countInterval}</p>
            </div>
            </>
        )
    }
}
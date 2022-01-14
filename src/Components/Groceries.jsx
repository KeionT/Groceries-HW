import React, {Component} from "react";

class Groceries extends Component{
    constructor(){
        super()
        this.state ={
            item:'',
            units:'',
            quantity:'',
            isPurchased:''
        }
    }
saveInfo = addItems=>{
    this.setState({[addItems.target.id]:addItems.target.value})
    console.log(this.saveInfo)

}
submitButton=event=>{
    event.preventDefault()
    console.log(this.state)
    this.props.getList(this.state)
    
}
    render(){
        return(
            <div className="divOne">
                <h2>Groceries List</h2>
                <form onSubmit={this.submitButton}>
                    <label htmlFor='item' >Item</label>
                        <input id='item' placeholder='Type Here'
                        onChange={this.saveInfo}
                        value={this.state.item}/>
                    
                    <label htmlFor='units'>Units</label>
                        <input id="units" placeholder='Type Here'
                        onChange={this.saveInfo}
                        value={this.state.units}/>
                        
                    
                    <label htmlFor='quantity'>Quantity</label>
                        <input id='quantity' placeholder='Type Here'
                        onChange={this.saveInfo}
                        value={this.state.quantity}/>
                        
                    
                    <button type="submit">Add item</button>
                </form>
            </div>
        )
    }
}
export default Groceries
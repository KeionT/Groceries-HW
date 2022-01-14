import React,{Component} from "react";

class GroceriesList extends Component{

    constructor(){
        super()
        
    }

    // createList=(list)=>saveInfo()

    render(){
        return(
            <ul>
                {this.props.getgroceries.map((listItems,index)=> {
                    return <div key={index}> Item: {listItems.item} Units:{listItems.units} Quantity:{listItems.quantity} </div>
                }
                )}
            </ul>
        )
    }
}

export default GroceriesList
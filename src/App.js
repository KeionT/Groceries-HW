import React,{Component} from "react"
import Groceries from "./Components/Groceries"
import GroceriesList from "./Components/GroceriesList"
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      groceries: [],
    }
  }
  getList=(list)=>{
    this.setState({groceries:[...this.state.groceries,list]})
  }

  render() {

    return (
      <div className="App">
        
        <Groceries  getList={this.getList}/>
        <GroceriesList getgroceries={this.state.groceries}/>
        
      </div>
    );

  }
}




export default App;
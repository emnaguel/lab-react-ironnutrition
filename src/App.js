import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'
import Search from './components/Search'
import './App.css';
import foods from './foods.json';

class App extends Component {
  state= {
    showForm: false,
    allFoods: foods,
    name: "",
    image: "",
    calories: "",
    list: [], 
    total: 0,


  }

  handleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state);
    const newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    }
    const copyAllFoods = [newFood, ...this.state.allFoods]
    this.setState({
      showForm: !this.state.showForm,
      allFoods: copyAllFoods
    })
  }



  handleFoodAdd = (foodName) => {
    console.log("yo", foodName)
    const copyList = [...this.state.list, foodName]

    let totalCalories = 0
    copyList.forEach((food) => totalCalories += food.calories)

    this.setState({

      list: copyList,
      total: totalCalories
    }
    )
    console.log(this.state.list)
    // const findFood = this.state.allFoods.find((food) => food.name === foodName)
    // const listFood = [findFood, ...this.state.list]
    // console.log(totalCalories)
    // this.setState({
    //   list: listFood,
    //   total: totalCalories
    // })
  }



  handleSearch = (foodSearch) => {

    const copyAllFoods = [...this.state.allFoods]
    const foodFiltered = copyAllFoods.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(foodSearch.toLowerCase());
    });

    this.setState({
      allFoods: foodSearch.length === 0 ? foods : foodFiltered
    })
  }

  render() {
    return (
      <div className="container">

      <Search callbackFn={this.handleSearch}/>
        <button style={{margin: "20px"}} className="button is-link" onClick={this.handleForm}>Add a new food</button>
        
        { this.state.showForm && <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="input is-primary"
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              defaultValue={this.state.name}
            />
            <label htmlFor="calories">Calories</label>
            <input
              className="input is-primary"
              type="text"
              name="calories"
              id="calories"
              onChange={this.handleChange}
              defaultValue={this.state.calories}
            />
            <label htmlFor="image">Image</label>
            <input
              className="input is-primary"
              type="text"
              name="image"
              id="image"
              onChange={this.handleChange}
              defaultValue={this.state.image}
            />
          </div>
          <button style={{marginTop: "20px", marginBottom: "20px" }} className="button is-primary">Submit</button>
        </form>
        }
        <div className="columns">
          <div className="column">
          
          {this.state.allFoods.map((food, index) =>{
            return <FoodBox  callbackFn={this.handleFoodAdd} food={food} key={index}/>
          })}
          </div>
          <div className="column">
            <h3><b>Today's foods</b></h3>
            {this.state.list.map((food) => {
              return <ul key={food.name}>
                <li> ✓{food.quantity} {food.name} = {food.calories} calories</li>
           
              </ul>
            })}
            <h3><b>Total</b>: {this.state.total}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

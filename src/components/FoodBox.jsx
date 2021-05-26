import React, { Component } from 'react'

class FoodBox extends Component {


    handleClick = (event) => {
        const quantity = Number(event.target.parentNode.previousSibling.firstChild.value)
        const quantityByFood = {
            name: this.props.food.name, 
            quantity: quantity,
            calories: this.props.food.calories * quantity

        }
        this.props.callbackFn(quantityByFood);
      };

    render(props) {

   
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={this.props.food.image} alt={this.props.food.name} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{this.props.food.name}</strong> <br />
                    <small>{this.props.food.calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" defaultValue={1} />
                        </div>
                        <div className="control">
                            <button onClick={(event) => this.handleClick(event, this.props.food.name, this.props.food.calories)} className="button is-info">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
}

export default FoodBox

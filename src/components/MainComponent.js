import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import DishDetail from './DishdetailComponent';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish : dish});
}


  render() {
    return (
      <div className="App">
       <Navbar dark color="primary">
       <div className="container">
         <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
       </div>
       </Navbar>
       <Menu dishes={this.state.dishes} 
       onDishSelect/>
       <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />+

      </div>
    );
  }
}

export default Main;

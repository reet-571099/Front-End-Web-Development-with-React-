import React from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';



    // constructor(props) {
    //     super(props);
        
    //    // console.log("Menu Component constructor is invoked");
    // }

  

    // componentDidMount(){
    //     console.log("Menu Component componentDidmount is invoked");
    // }

    
    // renderDish(dish) {
    //     if (dish != null) {
    //         return(
    //             <Card>
    //                 <CardImg top src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                   <CardTitle>{dish.name}</CardTitle>
    //                   <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     else {
    //         return(
    //             <div></div>
    //         );
    //     }
    // }

    function RenderMenuItem({dish, onClick}) {
        return(
            <Card >
            <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
          </Card>
        );
    }
  
    const Menu = (props) =>{

        const menu = props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1 text-left">
               <RenderMenuItem dish={dish} ></RenderMenuItem>
              </div>
            );
        });
        console.log("Menu Component render is invoked");
        return (
            <div className="container">
                <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Menu</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>Menu</h3>
                  <hr />
              </div>
            </div>
                <div className="row">
                    {menu}
                </div>

            </div>
        );
    }
        
    



export default Menu;
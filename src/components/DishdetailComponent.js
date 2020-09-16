import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';



    // componentDidMount(){
    //     console.log("DishDetail Component componentDidmount is invoked");
    // }
    // componentDidUpdate() {
    //     console.log("DishDetail Component componentDidupdate is invoked");
    // }

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish});
    // }

    function RenderComments({comments}) {
        if(comments==null) {
            return(
                <div></div>
            );
        }
        const comm= comments.map(comment => {
            return (
                <li key= {comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day:'2-digit'
                    }).format(new Date(Date.parse(comment.date)))}
                   </p>
                </li>
            );
        });

        return(
           
            <div className="col-12 col-md-5 m-1 text-left">
            <h4> Comments</h4>
            <ul className="list-unstyled">{comm}</ul>
            </div>
          
          );
    }


    function RenderDish({dish}) {
            if(dish!=null) {
                return(
                    <div className="col-12 col-md-5 m-1">
                        <Card className="text-left">
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                        </Card>
                    </div>
                );
            }
            else {
                return(
                    <div></div>
                );
            }
        }

        const DishDetail = (props) =>{

            console.log("DishDetail Component component render is invoked");

            const dish= props.dish
        
            if (dish==null){
              return(
                <div></div>
              );
            }
            return (
              <div className="container">
              <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.dish.comments}/>
              </div>
              </div>
            );
          }

export default DishDetail;


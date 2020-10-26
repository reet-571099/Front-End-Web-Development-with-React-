// import React , { Component }from 'react';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, Button, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import { Control, LocalForm, Errors } from 'react-redux-form';  
// import { Loading } from './LoadingComponent';
// import { baseUrl } from '../shared/baseURL';
// import { FadeTransform, Fade, Stagger } from "react-animation-components";


//     // componentDidMount(){
//     //     console.log("DishDetail Component componentDidmount is invoked");
//     // }
//     // componentDidUpdate() {
//     //     console.log("DishDetail Component componentDidupdate is invoked");
//     // }

//     // onDishSelect(dish) {
//     //     this.setState({ selectedDish: dish});
//     // }

//     const required = (val) => val && val.length;
//     const maxLength = (len) => (val) => !(val) || (val.length <= len);
//     const minLength = (len) => (val) => val && (val.length >= len);



//     class CommentForm extends Component {
//         constructor(props) {
//             super(props);
    
//             this.state = {
//                 isModalOpen: false
//             };
//             this.toggleModal = this.toggleModal.bind(this);
//             this.handleSubmit = this.handleSubmit.bind(this);
//         }
    
//         toggleModal() {
//             this.setState({
//               isModalOpen: !this.state.isModalOpen
//             });
//         }
    

//         handleSubmit(values) {
//             this.toggleModal();
//             this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
//         }
    
//         render() {
//             return(
//                 <div>
//                     <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span>Submit Comment</Button>
    
//                     <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//                         <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
//                         <ModalBody>
//                             <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
//                                 <Row  className="form-group">
//                                     <Label for="rating" md={12}>Rating</Label>
//                                     <Col  md={12}>
//                                         <Control.select defaultValue="5" model=".rating" id="rating" name="rating" className="form-control" >
//                                             <option value="1">1</option>
//                                             <option value="2">2</option>
//                                             <option value="3">3</option>
//                                             <option value="4">4</option>
//                                             <option value="5">5</option>
//                                         </Control.select>
//                                     </Col>
//                                 </Row>
//                                 <Row className="form-group">
//                                     <Label htmlFor="author"  md={12}>Your Name</Label>
//                                     <Col  md={12}>
//                                         <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
//                                         <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less' }} />
//                                     </Col>
//                                 </Row>
    
//                                 <Row className="form-group">
//                                     <Label htmlFor="feedback"  md={12}>Your feedback</Label>
//                                     <Col  md={12}>
//                                         <Control.textarea model=".comment" id="comment" name="comment" resize="none" rows="6" className="form-control" validators={{ required }} />
//                                         <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
//                                     </Col>
//                                 </Row>
    
//                                 <Button type="submit" value="submit" color="primary">Submit</Button>
//                             </LocalForm>
//                         </ModalBody>
//                     </Modal>
    
//                 </div>
//             )
//         }
//     }


//     function RenderComments({comments, postComment, dishId}) {
//         if(comments==null) {
//             return(
//                 <div></div>
//             );
//         }
//         const comm= comments.map(comment => {
//             return (
//                 <li key= {comment.id}>
//                     <p>{comment.comment}</p>
//                     <p>-- {comment.author},
//                     &nbsp;
//                     {new Intl.DateTimeFormat('en-US', {
//                     year: 'numeric',
//                     month: 'short',
//                     day:'2-digit'
//                     }).format(new Date(Date.parse(comment.date)))}
//                    </p>
//                 </li>
//             );
//         });

//         return(
           
//             <div className="col-12 col-md-5 m-1 text-left">
//             <h4> Comments</h4>
//             <ul className="list-unstyled">
//               <Stagger in>
//                 {comm}
//                 </Stagger>
//             </ul>
//             <CommentForm dishId={dishId} postComment={postComment} />

//             </div>
          
//           );
//     }


//     function RenderDish({dish}) {
//             if(dish!=null) {
//                 return(
//                   <FadeTransform
//                     in
//                     transformProps={{
//                       exitTransform: "scale(0.5) translateY(-50%)",
//                     }}>
//                     <div className="col-12 col-md-5 m-1">
//                         <Card className="text-left">
//                         <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
//                         <CardBody>
//                             <CardTitle>{dish.name}</CardTitle>
//                             <CardText>{dish.description}</CardText>
//                         </CardBody>
//                         </Card>
//                     </div>
//                     </FadeTransform>

//                 );
//             }
//             else {
//                 return(
//                     <div></div>
//                 );
//             }
//         }

//         const DishDetail = (props) => {
//             if (props.isLoading) {
//               return (
//                 <div className="container">
//                   <div className="row">
//                     <Loading />
//                   </div>
//                 </div>
//               );
//             } else if (props.errMess) {
//               return (
//                 <div className="container">
//                   <div className="row">
//                     <h4>{props.errMess}</h4>
//                   </div>
//                 </div>
//               );
//             } else if (props.dish != null) {
//               return (
//                 <div className="container">
//                   <div className="row">
//                     <Breadcrumb>
//                       <BreadcrumbItem>
//                         <Link to="/menu">Menu</Link>
//                       </BreadcrumbItem>
          
//                       <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
//                     </Breadcrumb>
          
//                     <div className="col-12">
//                       <h3>{props.dish.name}</h3>
//                       <hr />
//                     </div>
//                   </div>
          
//                   <div className="row">
//                     <RenderDish dish={props.dish} />
//                     <RenderComments
//                       comments={props.comments}
//                       postComment={props.postComment}
//                       dishId={props.dish.id}
//                     />
//                   </div>
//                 </div>
//               );
//             } else {
//               return <div></div>;
//             }
//           };
// export default DishDetail;

  
import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";
import { FadeTransform, Fade, Stagger } from "react-animation-components";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseURL";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleModal(event) {
    this.toggleModal();
    alert(
      "Rating: " +
        this.rating.value +
        " Name: " +
        this.name.value +
        " Comment: " +
        this.comment.value
    );
    event.preventDefault();
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil"></span> Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comments</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    className="form-control"
                    name="rating"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    className="form-control"
                    name="author"
                    placeholder="Your Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Must be greater than 2 characters ",
                      maxLength: "Must be 15 characters or less ",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    className="form-control"
                    name="comment"
                    rows="6"
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={12}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg top src={baseUrl + dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    </div>
  );
}

function RenderComments({ comments, postComment, dishId }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">
        <Stagger in>
          {comments.map((comment) => {
            return (
              <Fade in>
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author} ,{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              </Fade>
            );
          })}
        </Stagger>
      </ul>
      <CommentForm dishId={dishId} postComment={postComment} />
    </div>
  );
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>

            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>

          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>

        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments
            comments={props.comments}
            postComment={props.postComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;




    
    

    
    
    
    
    
    
    
    
    
          

import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import { getRepeats, deleteRepeat } from "../actions/repeatActions";
import PropTypes from "prop-types";

class RepeatableList extends Component {
  static propTypes = {
    getRepeats: PropTypes.func.isRequired,
    repeat: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getRepeats();
  }

  onDeleteClick = (id) => {
    this.props.deleteRepeat(id);
  };

  onAddClick = (name, department, quantity) => {
    //   console.log("name = " + name)
      const { user } = this.props.auth;

      const repeatItem = {
          name: name,
          department: department,
          quantity: quantity,
          uName: user.userName
      }

      console.log("repeatItem = " + JSON.stringify(repeatItem))
      this.props.addItem(repeatItem);
  }

  render() {
    const { repeats } = this.props.repeat;
    const { user } = this.props.auth;

    let current = "";

    // console.log("userName - " + current)
    if (user) {
      current = user.userName;
    } else {
      current = "none";
    }

    const userRepeats = repeats.filter((repeat) => repeat.uName === current);

    // console.log("Items " + JSON.stringify(items));
    // console.log("Items work " + items.item.department[Produce]);
    const produce = userRepeats.filter((repeat) => repeat.department === "Produce");
    const cheeses = userRepeats.filter((repeat) => repeat.department === "Cheeses");
    const meats = userRepeats.filter((repeat) => repeat.department === "Meats");
    const breads = userRepeats.filter((repeat) => repeat.department === "Breads");
    const chips_snacks = userRepeats.filter(
      (repeat) => repeat.department === "Chips/Snacks"
    );
    const drinks = userRepeats.filter((repeat) => repeat.department === "Drinks");
    const misc = userRepeats.filter((repeat) => repeat.department === "Misc");
    const supplies = userRepeats.filter((repeat) => repeat.department === "Supplies");
    const dairy = userRepeats.filter((repeat) => repeat.department === "Dairy");
    const frozen = userRepeats.filter((repeat) => repeat.department === "Frozen");

    const produceLink = (
      <ListGroup className="produce">
        <h2 className="mt-35">Produce</h2>
        <Row>
          <Col md={3}>
            <h5>Delete</h5>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
          </Col>
          <Col md={3}>
            <h5>Quantity</h5>
          </Col>
          <Col md={3}>
            <h5>Add to List</h5>
          </Col>
        </Row>
        <TransitionGroup className="shopping-list">
          {/* {items.map(({ _id, name, department, quantity, repeat }) => ( */}
          {produce.map(({ _id, name, department, quantity, repeat }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem className="list-text">
                <Row>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                        >
                        &times;
                        </Button>
                    </Col>
                    <Col md={3}>{name}</Col>
                    <Col md={3}>{quantity}</Col>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="success"
                        size="sm"
                        onClick={this.onAddClick.bind(this, name, department, quantity)}
                        >
                        +
                        </Button>
                    </Col>
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );

    const cheeseLink = (
      <ListGroup className="cheese">
        <h2>Cheeses</h2>
        <Row>
            <Col md={3}>
                <h5>Delete</h5>
            </Col>
            <Col md={3}>
                <h5>Product</h5>
            </Col>
            <Col md={3}>
                <h5>Quantity</h5>
            </Col>
            <Col md={3}>
                <h5>Add to List</h5>
            </Col>
        </Row>
        <TransitionGroup className="shopping-list">
          {cheeses.map(({ _id, name, department, quantity, repeat }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem className="list-text">
                <Row>
                  <Col md={3}>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                  </Col>
                  <Col md={3}>{name}</Col>
                  <Col md={3}>{quantity}</Col>
                  <Col md={3}>
                    <Button
                      className="remove-btn"
                      color="success"
                      size="sm"
                      onClick={this.onAddClick.bind(this, name, department, quantity)}
                    >
                      +
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );

    const meatsLink = (
      <ListGroup className="meat">
        <h2>Meats</h2>
        <Row>
            <Col md={3}>
                <h5>Delete</h5>
            </Col>
            <Col md={3}>
                <h5>Product</h5>
            </Col>
            <Col md={3}>
                <h5>Quantity</h5>
            </Col>
            <Col md={3}>
                <h5>Add to List</h5>
            </Col>
        </Row>
        <TransitionGroup className="shopping-list">
          {meats.map(({ _id, name, department, quantity, repeat }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem className="list-text">
                <Row>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                        >
                        &times;
                        </Button>
                    </Col>
                    <Col md={3}>{name}</Col>
                    <Col md={3}>{quantity}</Col>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="success"
                        size="sm"
                        onClick={this.onAddClick.bind(this, name, department, quantity)}
                        >
                        +
                        </Button>
                    </Col>
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );

    const breadsLink = (
      <ListGroup className="bread">
        <h2>Breads</h2>
        <Row>
            <Col md={3}>
                <h5>Delete</h5>
            </Col>
            <Col md={3}>
                <h5>Product</h5>
            </Col>
            <Col md={3}>
                <h5>Quantity</h5>
            </Col>
            <Col md={3}>
                <h5>Add to List</h5>
            </Col>
        </Row>
        <TransitionGroup className="shopping-list">
          {breads.map(({ _id, name, department, quantity, repeat }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem className="list-text">
                <Row>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                        >
                        &times;
                        </Button>
                    </Col>
                    <Col md={3}>{name}</Col>
                    <Col md={3}>{quantity}</Col>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="success"
                        size="sm"
                        onClick={this.onAddClick.bind(this, name, department, quantity)}
                        >
                        +
                        </Button>
                    </Col>
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );

    const chips_snacksLink = (
      <ListGroup className="snack">
        <h2>Chips/Snacks</h2>
        <Row>
            <Col md={3}>
                <h5>Delete</h5>
            </Col>
            <Col md={3}>
                <h5>Product</h5>
            </Col>
            <Col md={3}>
                <h5>Quantity</h5>
            </Col>
            <Col md={3}>
                <h5>Add to List</h5>
            </Col>
        </Row>
        <TransitionGroup className="shopping-list">
          {chips_snacks.map(({ _id, name, department, quantity, repeat }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem className="list-text">
                <Row>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                        >
                        &times;
                        </Button>
                    </Col>
                    <Col md={3}>{name}</Col>
                    <Col md={3}>{quantity}</Col>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="success"
                        size="sm"
                        onClick={this.onAddClick.bind(this, name, department, quantity)}
                        >
                        +
                        </Button>
                    </Col>
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );

    const drinksLink = (
      <ListGroup className="drink">
        <h2>Drinks</h2>
        <Row>
            <Col md={3}>
                <h5>Delete</h5>
            </Col>
            <Col md={3}>
                <h5>Product</h5>
            </Col>
            <Col md={3}>
                <h5>Quantity</h5>
            </Col>
            <Col md={3}>
                <h5>Add to List</h5>
            </Col>
        </Row>
        <TransitionGroup className="shopping-list">
          {drinks.map(({ _id, name, department, quantity, repeat }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem className="list-text">
                <Row>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                        >
                        &times;
                        </Button>
                    </Col>
                    <Col md={3}>{name}</Col>
                    <Col md={3}>{quantity}</Col>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="success"
                        size="sm"
                        onClick={this.onAddClick.bind(this, name, department, quantity)}
                        >
                        +
                        </Button>
                    </Col>
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );

    const miscLink = (
      <ListGroup className="misc">
        <h2>Misc</h2>
        <Row>
            <Col md={3}>
                <h5>Delete</h5>
            </Col>
            <Col md={3}>
                <h5>Product</h5>
            </Col>
            <Col md={3}>
                <h5>Quantity</h5>
            </Col>
            <Col md={3}>
                <h5>Add to List</h5>
            </Col>
        </Row>
        <TransitionGroup className="shopping-list">
          {misc.map(({ _id, name, department, quantity, repeat }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem className="list-text">
                <Row>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                        >
                        &times;
                        </Button>
                    </Col>
                    <Col md={3}>{name}</Col>
                    <Col md={3}>{quantity}</Col>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="success"
                        size="sm"
                        onClick={this.onAddClick.bind(this, name, department, quantity)}
                        >
                        +
                        </Button>
                    </Col>
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );

    const suppliesLink = (
      <ListGroup className="supplies">
        <h2>Supplies</h2>
        <Row>
            <Col md={3}>
                <h5>Delete</h5>
            </Col>
            <Col md={3}>
                <h5>Product</h5>
            </Col>
            <Col md={3}>
                <h5>Quantity</h5>
            </Col>
            <Col md={3}>
                <h5>Add to List</h5>
            </Col>
        </Row>
        <TransitionGroup className="shopping-list">
          {supplies.map(({ _id, name, department, quantity, repeat }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem className="list-text">
                <Row>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                        >
                        &times;
                        </Button>
                    </Col>
                    <Col md={3}>{name}</Col>
                    <Col md={3}>{quantity}</Col>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="success"
                        size="sm"
                        onClick={this.onAddClick.bind(this, name, department, quantity)}
                        >
                        +
                        </Button>
                    </Col>
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );

    const dairyLink = (
      <ListGroup className="dairy">
        <h2>Dairy</h2>
        <Row>
            <Col md={3}>
                <h5>Delete</h5>
            </Col>
            <Col md={3}>
                <h5>Product</h5>
            </Col>
            <Col md={3}>
                <h5>Quantity</h5>
            </Col>
            <Col md={3}>
                <h5>Add to List</h5>
            </Col>
        </Row>
        <TransitionGroup className="shopping-list">
          {dairy.map(({ _id, name, department, quantity, repeat }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem className="list-text">
                <Row>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                        >
                        &times;
                        </Button>
                    </Col>
                    <Col md={3}>{name}</Col>
                    <Col md={3}>{quantity}</Col>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="success"
                        size="sm"
                        onClick={this.onAddClick.bind(this, name, department, quantity)}
                        >
                        +
                        </Button>
                    </Col>
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );

    const frozenLink = (
      <ListGroup className="frozen">
        <h2>Frozen</h2>
        <Row>
            <Col md={3}>
                <h5>Delete</h5>
            </Col>
            <Col md={3}>
                <h5>Product</h5>
            </Col>
            <Col md={3}>
                <h5>Quantity</h5>
            </Col>
            <Col md={3}>
                <h5>Add to List</h5>
            </Col>
        </Row>
        <TransitionGroup className="shopping-list">
          {frozen.map(({ _id, name, department, quantity, repeat }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem className="list-text">
                <Row>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                        >
                        &times;
                        </Button>
                    </Col>
                    <Col md={3}>{name}</Col>
                    <Col md={3}>{quantity}</Col>
                    <Col md={3}>
                        <Button
                        className="remove-btn"
                        color="success"
                        size="sm"
                        onClick={this.onAddClick.bind(this, name, department, quantity)}
                        >
                        +
                        </Button>
                    </Col>
                </Row>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );

    return (
      <Container className="list">
        {produce.length === 0 ? "" : produceLink}
        {cheeses.length === 0 ? "" : cheeseLink}
        {meats.length === 0 ? "" : meatsLink}
        {breads.length === 0 ? "" : breadsLink}
        {chips_snacks.length === 0 ? "" : chips_snacksLink}
        {drinks.length === 0 ? "" : drinksLink}
        {misc.length === 0 ? "" : miscLink}
        {supplies.length === 0 ? "" : suppliesLink}
        {dairy.length === 0 ? "" : dairyLink}
        {frozen.length === 0 ? "" : frozenLink}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  repeat: state.repeat,
  item: state.item,
  auth: state.auth,
});

export default connect(mapStateToProps, { addItem, getRepeats, deleteRepeat })(RepeatableList);
import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import uuid from 'react-uuid';
import { connect } from "react-redux";
import { getItems, deleteItem, updateItem } from "../actions/itemActions";
// import UpdateModal from "../components/UpdateModal";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  state = {
    id: "",
    quantity: "",
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const updatedQty = {
      id: this.state.id,
      quantity: this.state.quantity,
    };

    // Add item via addItem action
    this.props.updateItem(updatedQty);

    // Close Modal
    this.toggle();

    this.display();
  };

  display = () => {
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  onUpdateClick = (id) => {
    this.setState({
      id: id,
    });

    this.toggle();

    // console.log("id = " + id)
  };

  render() {
    const { items } = this.props.item;
    const { user } = this.props.auth;

    let current = "";

    // console.log("userName - " + current)
    if (user) {
      current = user.userName;
    } else {
      current = "none";
    }

    const userItems = items.filter((item) => item.uName === current);

    // console.log("Items " + JSON.stringify(items));
    // console.log("Items work " + items.item.department[Produce]);
    const produce = userItems.filter((item) => item.department === "Produce");
    const cheeses = userItems.filter((item) => item.department === "Cheeses");
    const meats = userItems.filter((item) => item.department === "Meats");
    const breads = userItems.filter((item) => item.department === "Breads");
    const chips_snacks = userItems.filter(
      (item) => item.department === "Chips/Snacks"
    );
    const drinks = userItems.filter((item) => item.department === "Drinks");
    const misc = userItems.filter((item) => item.department === "Misc");
    const supplies = userItems.filter((item) => item.department === "Supplies");
    const dairy = userItems.filter((item) => item.department === "Dairy");
    const frozen = userItems.filter((item) => item.department === "Frozen");

    const produceLink = (
      <ListGroup className="produce">
        <Row>
          <Col md={12}>
            <h2 className="mt-35 produce">Produce</h2>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <h5>Purchased</h5>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
          </Col>
          <Col md={3}>
            <h5>Quantity</h5>
          </Col>
          <Col md={3}>
            <h5>Update Quantity</h5>
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
                      className="update-btn"
                      color="info"
                      size="sm"
                      onClick={this.onUpdateClick.bind(this, _id)}
                    >
                      Update
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
            <h5>Purchased</h5>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
          </Col>
          <Col md={3}>
            <h5>Quantity</h5>
          </Col>
          <Col md={3}>
            <h5>Update Quantity</h5>
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
                      className="update-btn"
                      color="info"
                      size="sm"
                      onClick={this.onUpdateClick.bind(this, _id)}
                    >
                      Update
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
            <h5>Purchased</h5>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
          </Col>
          <Col md={3}>
            <h5>Quantity</h5>
          </Col>
          <Col md={3}>
            <h5>Update Quantity</h5>
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
                      className="update-btn"
                      color="info"
                      size="sm"
                      onClick={this.onUpdateClick.bind(this, _id)}
                    >
                      Update
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
            <h5>Purchased</h5>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
          </Col>
          <Col md={3}>
            <h5>Quantity</h5>
          </Col>
          <Col md={3}>
            <h5>Update Quantity</h5>
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
                      className="update-btn"
                      color="info"
                      size="sm"
                      onClick={this.onUpdateClick.bind(this, _id)}
                    >
                      Update
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
            <h5>Purchased</h5>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
          </Col>
          <Col md={3}>
            <h5>Quantity</h5>
          </Col>
          <Col md={3}>
            <h5>Update Quantity</h5>
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
                      className="update-btn"
                      color="info"
                      size="sm"
                      onClick={this.onUpdateClick.bind(this, _id)}
                    >
                      Update
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
            <h5>Purchased</h5>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
          </Col>
          <Col md={3}>
            <h5>Quantity</h5>
          </Col>
          <Col md={3}>
            <h5>Update Quantity</h5>
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
                      className="update-btn"
                      color="info"
                      size="sm"
                      onClick={this.onUpdateClick.bind(this, _id)}
                    >
                      Update
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
            <h5>Purchased</h5>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
          </Col>
          <Col md={3}>
            <h5>Quantity</h5>
          </Col>
          <Col md={3}>
            <h5>Update Quantity</h5>
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
                      className="update-btn"
                      color="info"
                      size="sm"
                      onClick={this.onUpdateClick.bind(this, _id)}
                    >
                      Update
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
            <h5>Purchased</h5>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
          </Col>
          <Col md={3}>
            <h5>Quantity</h5>
          </Col>
          <Col md={3}>
            <h5>Update Quantity</h5>
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
                      className="update-btn"
                      color="info"
                      size="sm"
                      onClick={this.onUpdateClick.bind(this, _id)}
                    >
                      Update
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
            <h5>Purchased</h5>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
          </Col>
          <Col md={3}>
            <h5>Quantity</h5>
          </Col>
          <Col md={3}>
            <h5>Update Quantity</h5>
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
                      className="update-btn"
                      color="info"
                      size="sm"
                      onClick={this.onUpdateClick.bind(this, _id)}
                    >
                      Update
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
            <h5>Purchased</h5>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
          </Col>
          <Col md={3}>
            <h5>Quantity</h5>
          </Col>
          <Col md={3}>
            <h5>Update Quantity</h5>
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
                      className="update-btn"
                      color="info"
                      size="sm"
                      onClick={this.onUpdateClick.bind(this, _id)}
                    >
                      Update
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

        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Update Item Quantity</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup row>
                  <Label for="quantityText" sm={2}>
                    New Quantity
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="textarea"
                      name="quantity"
                      id="quantityText"
                      onChange={this.onChange}
                    />
                  </Col>
                </FormGroup>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Update Quantity
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
});

export default connect(mapStateToProps, { getItems, updateItem, deleteItem })(
  ShoppingList
);

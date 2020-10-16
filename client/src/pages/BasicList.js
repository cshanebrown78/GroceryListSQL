import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types'

class BasicList extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        const { items } = this.props.item;
        const { user} = this.props.auth;

        let current = '';

        if (user) {
            current = user.userName
        } else {
            current = "none"
        };

        const userItems = items.filter(item => item.uName === current);
        
        return(
            <Container className="blist" fixed="top">
                <ListGroup className="dairy">
                    <h2>Items</h2>
                    <Row>
                        <Col md={3}>
                            <h5>Purchased</h5>
                        </Col>
                        <Col md={3}>
                            <h5>Product</h5>
                        </Col>
                        <Col md={3}>
                            <h5>Department</h5>
                        </Col>
                        <Col md={3}>
                            <h5>Quantity</h5>
                        </Col>
                    </Row>
                    <TransitionGroup className="shopping-list">
                        {/* {items.map(({ _id, name, department, quantity, repeat }) => ( */}
                        {userItems.map(({ _id, name, department, quantity, repeat }) => (        
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
                                        <Col md={3}>
                                            {name}
                                        </Col>
                                        <Col md={3}>
                                            {department}
                                        </Col>
                                        <Col md={3}>
                                            {quantity}
                                        </Col>    
                                    </Row>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
    }
}



const mapStateToProps = (state) => ({
    item: state.item,
    auth: state.auth
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
)(BasicList);
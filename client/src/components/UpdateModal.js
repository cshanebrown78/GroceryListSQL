import React, { Component, useReducer } from 'react';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    NavLink
 } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem, updateItem, getItems } from '../actions/itemActions';
import { addRepeat } from '../actions/repeatActions';
import PropTypes from 'prop-types';


class UpdateModal extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
    }

    
    state = {
        modal: false,
        _id: '',
        quantity: '',
        uName: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
        console.log("Id - " + this.state._id)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const { user } = this.props.auth;
        // console.log("this - " + user.userName)

        const updatedQty = {
            quantity: this.state.quantity,
            // uName: user.userName
        }

        console.log('Quantity - ' + updatedQty.quantity);

        // Add item via addItem action
            this.props.updateItem(updatedQty);

        // Close Modal
        this.toggle();

        
    }

    render() {
        return(
            <div>
                <Button onClick={this.toggle} className="navigation" href="#">
                    Update
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                                <FormGroup row>
                                    <Label for="quantityText" sm={2}>New Quantity</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="quantity" id="quantityText" onChange={this.onChange} />
                                    </Col>
                                </FormGroup>
                            <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                            >
                                Update Quantity
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item,
    repeat: state.repeat,
    auth: state.auth
})

export default connect(mapStateToProps, { addItem, updateItem, addRepeat })(UpdateModal);
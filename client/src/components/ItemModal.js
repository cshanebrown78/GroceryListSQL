import React, { Component } from 'react';
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
import { addItem } from '../actions/itemActions';
import { addRepeat } from '../actions/repeatActions';
import PropTypes from 'prop-types';


class ItemModal extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    
    state = {
        modal: false,
        name: '',
        department: '',
        quantity: '',
        repeatable: 'no',
        uName: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const { user } = this.props.auth;

        const newItem = {
            name: this.state.name,
            department: this.state.select,
            quantity: this.state.quantity,
            repeatable: this.state.repeatable,
            uName: user.userName
        }

        if(newItem.repeatable === "yes") {
            this.props.addItem(newItem);
            this.props.addRepeat(newItem);
        } else {
            this.props.addItem(newItem);
        }
        

        // Close Modal
        this.toggle();

        
    }

    render() {
        return(
            <div>
                <NavLink onClick={this.toggle} className="navigation" href="#">
                    Add Item
                </NavLink>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="deptSelect">Select</Label>
                                    <Input type="select" name="select" id="deptSelect" onChange={this.onChange}>
                                        <option hidden>Choose One</option>
                                        <option>Produce</option>
                                        <option>Cheeses</option>
                                        <option>Meats</option>
                                        <option>Breads</option>
                                        <option>Chips/Snacks</option>
                                        <option>Drinks</option>
                                        <option>Misc</option>
                                        <option>Supplies</option>
                                        <option>Dairy</option>
                                        <option>Frozen</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="quantityText" sm={2}>Quantity Needed</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="quantity" id="quantityText" onChange={this.onChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="checkboxRepeatable" sm={10}>Repeatable Weekly?</Label>
                                    <Col sm={{ size: 2 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="repeatable" id="checkboxRepeatable" value="yes" onChange={this.onChange} />{' '}
                                                    Yes
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="repeatable" id="checkboxRepeatable" value="no" onChange={this.onChange} />{' '}
                                                    No
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>    
                            <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                            >
                                Add Item
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

export default connect(mapStateToProps, { addItem, addRepeat })(ItemModal);

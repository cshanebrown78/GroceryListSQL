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
    Alert
 } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';


class LoginModal extends Component {
    state = {
        modal: false,
        userName: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate (prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error) {
            // Check for register error
            if(error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }

        // If authenticated close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }

    toggle = () => {
        //Clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const { userName, password } = this.state;

        const user = {
            userName,
            password
        }

        // Attempt to login
        this.props.login(user)

        // Redirects to the shopping list page after 5 seconds
        // setTimeout(function(){
        //     window.location.href = '/shoppinglist';
        //     }, 5000)

                
                    
                  
                
    };

    

    render() {
        return(
            <div>
                <Button
                    // color="dark"
                    className="navigation"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Login
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                    <ModalBody>
                        { this.state.msg ? <Alert color="danger">{ this.state.msg }</Alert> : null }
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="userName">Username</Label>
                                <Input
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    placeholder="Username"
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password. Must be at least 8 characters long."
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <Button
                                    // color="dark"
                                    className="navigation"
                                    style={{marginTop: '2rem'}}
                                    block
                            >
                                Login
                            </Button>
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
})

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
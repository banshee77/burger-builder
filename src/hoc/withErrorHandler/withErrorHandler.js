import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        state = {
            error: null            
        }

        componentWillMount() {
            this.reqInterceprot = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });
            this.resInterceprot = axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            // console.log("[componentWillUnmount]");
            axios.interceptors.request.eject(this.reqInterceprot);
            axios.interceptors.response.eject(this.resInterceprot);
        }
        

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render () {
            return (
                <Auxiliary>
                    <Modal show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                        Something didn't work !
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Auxiliary>
            );
        }
    }
}

export default withErrorHandler;
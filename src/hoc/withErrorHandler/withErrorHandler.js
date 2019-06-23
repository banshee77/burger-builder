import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import useHttpErrorHandler from '../../hooks/http-error-handler';


const withErrorHandler = (WrapperComponent, axios) => {
    return props => {
        const [err, clearErr] = useHttpErrorHandler(axios);

        return (
            <Auxiliary>
                <Modal show={err}
                    modalClosed={clearErr}>
                    {err ? err.message : null}
                    Something didn't work !
                    </Modal>
                <WrapperComponent {...props} />
            </Auxiliary>
        );
    }
}

export default withErrorHandler;
import { useState, useEffect } from 'react';

export default httpClient => {
    const [error, setErrorr] = useState(null);

    const reqInterceprot = httpClient.interceptors.request.use(request => {
        setErrorr(null);
        return request;
    });
    const resInterceprot = httpClient.interceptors.response.use(response => response, err => {
        setErrorr(err);
    });

    useEffect(() => {
        return () => {
            httpClient.interceptors.request.eject(reqInterceprot);
            httpClient.interceptors.response.eject(resInterceprot);
        }
    }, [reqInterceprot, resInterceprot])


    const errorConfirmedHandler = () => {
        setErrorr(null);
    }

    return [error, errorConfirmedHandler];
}
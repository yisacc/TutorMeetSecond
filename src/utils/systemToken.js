import React, { useEffect } from 'react';
import axiosInstance from '../utils/axios';
import Cookies from 'universal-cookie';

function SystemToken() {
    const cookies = new Cookies();

var data={
    username: 'tutor_admin',
    password: 'Abcd@1234',
};

    useEffect( () => {
axiosInstance.post('/User/api/V1.0/Account/SignIn',data)
           .then(async (response) => {
               cookies.set('SY_TO', response.data.accessToken);
               cookies.set('RF_TO', response.data.refreshToken);
            });
    }, []);
    return <div></div>;
}

export default SystemToken;

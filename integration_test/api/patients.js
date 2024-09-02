import request from 'supertest';
import dotenv from 'dotenv';
dotenv.config();

const apiPatients = `${process.env.BASE_URL}/patients`;

const getPatients = async () => {
    console.log(apiPatients);
    const response = await request(apiPatients).get('/');
    return response;
};

export {
    getPatients,
}
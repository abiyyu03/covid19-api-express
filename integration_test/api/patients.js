import request from 'supertest';
import dotenv from 'dotenv';
dotenv.config();

const apiPatients = `${process.env.BASE_URL}/patients`;

const getPatients = async () => {
    console.log(apiPatients);
    const response = await request(apiPatients).get('/');
    return response;
};

const createPatient = async (payload) => {
    const response = await request(apiPatients).post('/')
        .send(JSON.stringify(payload))
        .set('Content-type', 'application/json');
    return response;
};

export {
    getPatients,
    createPatient,
}
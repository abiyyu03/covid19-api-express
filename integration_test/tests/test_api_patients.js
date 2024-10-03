import dotenv from 'dotenv';
import chai from 'chai';
import chaiJsonSchema from 'chai-json-schema';
import { expect } from 'chai';
import { getPatients, createPatient } from '../api/patients.js';
import { createPatientData } from '../data/patients_data.js';
import { schemaGetPatients } from '../schema/patients_schema.js';
chai.use(chaiJsonSchema);
dotenv.config();

describe('Test API Patients | Integration Level Test API Patients', async () => {
    it('should succeed fetch Patients', async () => {
        const resApi = await getPatients();
        console.log(resApi.body);
        expect(resApi.status).to.equal(200);
        expect(resApi.body).to.be.jsonSchema(schemaGetPatients);
    });

    it('should succeed save data Patients', async () => {
        const payloadCreate = createPatientData({
            name: 'bima',
            phone: '628457126147',
            address: 'Jl Akamai No 72 Jakarta Selatan',
            status: 'admitted',
            in_date_at: '2024-09-01',
            out_date_at: '2024-09-06'
        });

        const resApi = await createPatient(payloadCreate);
        console.log(resApi.body);
        expect(resApi.status).to.equal(201);
        expect(resApi.body.message).to.equal('Resource is added successfully');
    });
});
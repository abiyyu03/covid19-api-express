import dotenv from 'dotenv';
import chai from 'chai';
import chaiJsonSchema from 'chai-json-schema';
import { expect } from 'chai';
import { getPatients } from '../api/patients.js';
import { schemaGetPatients } from '../data/patients_schema.js';
chai.use(chaiJsonSchema);
dotenv.config();

describe('Test API Patients | Integration Level Test API Patients', async () => {
    it('should fetch Patients', async () => {
        const resApi = await getPatients();
        console.log(resApi.body);
        expect(resApi.status).to.equal(200);
        expect(resApi.body).to.be.jsonSchema(schemaGetPatients);
    });
});
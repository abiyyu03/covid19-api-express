const Patient = require('../models/Patient');

// buat class PatientController
class PatientController {
  async index(req, res){
    const patients = await Patient.all();

    if(patients){
      const data = {
        message:"Get All Resource",
        statusCode:200,
        data:patients,
      }
      res.status(200).json(data);
    } else {
      const data = {
        message:"Data is empty",
        statusCode:200,
      }
      res.status(200).json(data);
    }
  }

  async store(req, res){
    const { name, phone, address, status, in_date_at, out_date_at, timestamp } = req.body;
    // const timestamp = new Date().getTime();
    const patient = {
      name, phone, address, status, in_date_at, out_date_at, timestamp
    };

    if(name != null && phone != null && address != null && status != null && in_date_at != null && out_date_at != null && timestamp != null){
      const patients = await Patient.create(patient);
      
      const data = {
        message:"Resource is added successfully",
        statusCode:201,
        data:patient,
      }
      
      res.status(201).json(data);
    } else {
      const data = {
        message:"All fields must be filled correctly",
        statusCode:422,
      }

      res.status(422).json(data);
    }
  }

  async show(req, res){
    const { id } = req.params;

    const patient = await Patient.find(id);

    if(patient){
      const data = {
        message:"Get Detail Resource",
        statusCode:200,
        data:patient,
      }
      res.status(200).json(data);
    } else {
      const data = {
        message:"Resource not found",
        statusCode:404,
      }
      res.status(404).json(data);
    }
  }

  async update(req, res){
    const { id } = req.params;

    const patient = await Patient.find(id);

    if(patient){
      await Patient.update(id, req.body);
      const data = {
        message:"Resource is update successfully",
        statusCode:200,
        data:patient,
      }
      res.status(200).json(data);
    }else {
      const data = {
        message:"Resource not found",
        statusCode:404,
      }
      res.status(404).json(data);
    }
  }

  async destroy(req, res){
    const { id } = req.params;

    const patient = await Patient.find(id);

    if(patient){
      await Patient.delete(id);
      const data = {
        message:"Resource is delete successfully",
        statusCode:200,
      }
      res.status(200).json(data);
    }else {
      const data = {
        message:"Resource not found",
        statusCode:404,
      }
      res.status(404).json(data);
    }
  }

  async search(req, res){
    const { name } = req.params;

    const patient = await Patient.search(name);

    if(patient.length !== 0){ 
      const data = {
        message:"Get searched resource",
        statusCode:200,
        data:patient,
      }
      res.status(200).json(data);
    }else {
      const data = {
        message:"Resource not found",
        statusCode:404,
      }
      res.status(404).json(data);
    }
  }
  
  async positive(req, res){
    const status = 'positive';

    const patient = await Patient.findByStatus(status);
    let patientTotal = Object.keys(patient).length;

    if(patient){ 
      const data = {
        message:"Get positive resource",
        statusCode:200,
        total:patientTotal,
        data:patient,
      }
      res.status(200).json(data);
    }else {
      const data = {
        message:"no positive resource found",
        statusCode:404,
      }
      res.status(404).json(data);
    }
  }
  
  async recovered(req, res){
    const status = 'recovered';

    const patient = await Patient.findByStatus(status);
    let patientTotal = Object.keys(patient).length;

    if(patient){ 
      const data = {
        message:"Get recovered resource",
        statusCode:200,
        total:patientTotal,
        data:patient,
      }
      res.status(200).json(data);
    }
  }
  
  async dead(req, res){
    const status = 'dead';

    const patient = await Patient.findByStatus(status);
    let patientTotal = Object.keys(patient).length;

    if(patient){ 
      const data = {
        message:"Get dead resource",
        statusCode:200,
        total:patientTotal,
        data:patient,
      }
      res.status(200).json(data);
    }
  }
}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;

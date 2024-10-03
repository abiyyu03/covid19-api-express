// import database
import { db } from '../config/database.js';

// membuat class Patient
class Patient {
  static all(){
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients";

      db.query(sql, (err,results) => {
        resolve(results);
      });
    });
  }

  static create(data){
    db.query("INSERT INTO patients SET ?",data, (err,results) => {
      if(err) throw err;
    });
  }

  static find(id){
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE id = ?`;

      db.query(sql, id, (err,results) => {
        const [patient] = results;
        resolve(patient);
      });
    });
  }

  static update(id, data){
    return new Promise((resolve, reject) => {
      const sql = `UPDATE patients SET ? WHERE id = ?`;

      db.query(sql, [data, id], (err,results) => {
        resolve(results);
      });
    });
  }

  static delete(id){
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM patients WHERE id = ?`;

      db.query(sql, id, (err,results) => {
        resolve(results);
      });
    });
  }

  static search(name){
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE name LIKE '%${name}%'`;

      db.query(sql, (err,results) => {
        resolve(results);
      });
    });
  }

  static findByStatus(status){
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE status = '${status}'`;

      db.query(sql, (err,results) => {
        resolve(results);
      });
    });
  }
}

export default Patient;

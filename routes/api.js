// import PatientController
import PatientController from '../controllers/PatientController.js';

// import express
import express from 'express';

// membuat object router
const router = express.Router();
const patientController = new PatientController();

/**
 * Membuat routing
 */
// router.get("/", (req, res) => {
//   res.send("Hello Covid API Express");
// });

router.get('/patients',patientController.index);
router.post('/patients',patientController.store);
router.put('/patients/:id',patientController.update);
router.delete('/patients/:id',patientController.destroy);
router.get('/patients/:id',patientController.show);
router.get('/patients/search/:name',patientController.search);
router.get('/patients/status/positive',patientController.positive);
router.get('/patients/status/recovered',patientController.recovered);
router.get('/patients/status/dead',patientController.dead);

// Membuat routing patient

// export router
export {
    router,
}

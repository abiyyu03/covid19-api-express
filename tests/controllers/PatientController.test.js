import PatientController from '@controllers/PatientController';
import Patient from '@models/Patient'; // Import the original module for mocking

// Mock the Patient module
jest.mock('@model/Patient', () => {
  const mockMethodAll = jest.fn();
  const mockMethodCreate = jest.fn();

  return {
    all: mockMethodAll,
    create: mockMethodCreate,
  }
});

describe('Patient Controller Test | Controller Test', () => {
  let patientController;

  beforeEach(() => {
    jest.clearAllMocks(); 
    patientController = new PatientController();
  });

  test('should return all data when data exist', async () => {
        const request = {};
        const response = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
        // Mock `Patient.all` for this specific test case
        Patient.all.mockResolvedValueOnce(global.mockDataPatients);
        
        await patientController.index(request, response);
        
        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.json).toHaveBeenCalledWith({
          message:"Get All Resource",
          statusCode:200,
          data:global.mockDataPatients,
        });
  });

  test('should return empty data when data not exist', async () => {
    const request = {};
    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    // Mock `Patient.all` for this specific test case
    Patient.all.mockResolvedValueOnce('');
    
    await patientController.index(request, response);
    
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({
      message:"Data is empty",
      statusCode:200
    });
  });

  test('should succeess create a new data', async () => {
    const request = {
      "name": "bima",
      "phone": "628457126147",
      "address": "Jl Akamai No 72 Jakarta Selatan",
      "status": "admitted",
      "in_date_at": "2024-09-01",
      "out_date_at": "2024-09-06",
      "timestamp": "2024-09-05T23:33:13.090"
    };

    const response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    // Mock `Patient.create` for this specific test case
    Patient.create.mockResolvedValueOnce(request);
    
    await patientController.store({body: request}, response);
    
    expect(response.status).toHaveBeenCalledWith(201);
    expect(response.json).toHaveBeenCalledWith({
      message:"Resource is added successfully",
      statusCode:201,
      data: request,
    });
  });
});
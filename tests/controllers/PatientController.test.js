import PatientController from '@controllers/PatientController';
import Patient from '@models/Patient'; // Import the original module for mocking

// Mock the Patient module
jest.mock('@model/Patient', () => {
  const mockMethodAll = jest.fn().mockResolvedValue(global.mockDataPatients);
        
  return {
    all: mockMethodAll,
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
        
        await patientController.index(request, response);
        
        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.json).toHaveBeenCalledWith({
          message:"Get All Resource",
          statusCode:200,
          data:global.mockDataPatients,
        });
      });
});
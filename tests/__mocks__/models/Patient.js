// __mocks__/model/Patient.js
const mockDataPatients = global.mockDataPatients || [];

const Patient = {
  all: jest.fn().mockResolvedValue(mockDataPatients),
};

export default Patient;

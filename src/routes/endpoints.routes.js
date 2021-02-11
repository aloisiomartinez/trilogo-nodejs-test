const Router = require('express');

const endPoints = Router();

endPoints.get('/', (req, res) => {
  res.status(200).json({
    api: 'Trilogo Node-JS Teste',
    endpoints: [
      {
        route: '[POST] /user',
        description: 'Create a new USER.',
      },
      {
        route: '[DELETE] /user/:id',
        description: 'Delete a user by Id.',
      },
      {
        route: '[GET] /user',
        description: 'List all Users.',
      },
      {
        route: '[GET] /user/:email',
        description: 'List a user by Email.',
      },
      {
        route: '[POST] /session',
        description: 'Log into the application with a registered User.',
      },
      {
        route: '[POST] /chatRoom',
        description: 'Create a new Chat Room',
      },
      {
        route: '[GET] /chatRoom',
        description: 'List all Chat Rooms',
      },
      {
        route: '[GET] /messages',
        description: 'List all messages in a Room.',
      },
    ],
  });
});

module.exports = endPoints;

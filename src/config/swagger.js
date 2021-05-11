const options = {
  swaggerDefinition: {
    info: {
      description: 'Test task API',
      title: 'Swagger',
      version: '1.0.0',
    },
    host: 'localhost:5000',
    basePath: '/api',
    produces: ['application/json'],
    schemes: ['http'],
  },
  basedir: process.cwd(), //app absolute path
  files: ['./src/routes/*.js'], //Path to the API handle folder
};

module.exports = options;

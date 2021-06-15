const dbClient = require('monk')('mongodb+srv://root:root121@cluster0.a17ad.mongodb.net/nutrify?retryWrites=true&w=majority')

module.exports = dbClient;
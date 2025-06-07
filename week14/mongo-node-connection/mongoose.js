
const  mongoose = require('mongoose');

// your MongoDB connection string
const dbURL = 'mongodb+srv://onomecyril1998:Histopathology1998@cluster0.gfym44y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
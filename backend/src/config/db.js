module.exports = {
    connect: async () => {
        const mongoose = require('mongoose');
        const dbURI = process.env.DB_URI; // Database URI from environment variables

        try {
            await mongoose.connect(dbURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Database connection successful');
        } catch (error) {
            console.error('Database connection error:', error);
            throw error;
        }
    },
};
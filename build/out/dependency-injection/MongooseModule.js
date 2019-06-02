Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const mongoose = require("mongoose");
class MongooseModule extends inversify_1.ContainerModule {
    constructor() {
        super(null);
        mongoose.connect('mongodb://localhost:27017/movies', err => {
            if (err) {
                console.log(`Could not connect to the database. ${err}`);
                throw err;
            }
            else {
                console.log('Successfully connected to the database.');
            }
        });
    }
}
exports.MongooseModule = MongooseModule;

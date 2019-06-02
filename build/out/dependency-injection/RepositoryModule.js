Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const MongooseModule_1 = require("./MongooseModule");
require("../repositories/ActorRepository");
require("../repositories/UserRepository");
class RepositoryModule extends inversify_1.ContainerModule {
    constructor() {
        super(() => {
        });
        /* tslint:disable: no-unused-expression */
        new MongooseModule_1.MongooseModule();
    }
}
exports.RepositoryModule = RepositoryModule;

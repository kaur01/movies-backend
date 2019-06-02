Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("../services/ActorService");
require("../services/UserService");
class ServiceModule extends inversify_1.ContainerModule {
    constructor() {
        super(() => {
        });
    }
}
exports.ServiceModule = ServiceModule;

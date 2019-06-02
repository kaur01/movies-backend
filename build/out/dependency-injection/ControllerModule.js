Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("../controllers/ActorController");
require("../controllers/UserController");
require("../controllers/HealthCheckController");
require("../controllers/DirectorsController");
require("../controllers/MoviesController");
class ControllerModule extends inversify_1.ContainerModule {
    constructor() {
        super(() => {
        });
    }
}
exports.ControllerModule = ControllerModule;

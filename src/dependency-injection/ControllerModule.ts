import {ContainerModule} from 'inversify';
import '../controllers/ActorController';
import '../controllers/UserController';
import '../controllers/HealthCheckController';
import '../controllers/DirectorsController';
import '../controllers/MoviesController';

export class ControllerModule extends ContainerModule {
    constructor() {
        super(() => {
        });
    }
}

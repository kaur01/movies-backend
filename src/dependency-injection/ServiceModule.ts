import {ContainerModule} from 'inversify';
import '../services/ActorService';
import '../services/UserService';

export class ServiceModule extends ContainerModule {
    constructor() {
        super(() => {
        });
    }
}

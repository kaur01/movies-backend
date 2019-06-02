import {ContainerModule} from 'inversify';
import {MongooseModule} from './MongooseModule';
import '../repositories/ActorRepository';
import '../repositories/UserRepository';

export class RepositoryModule extends ContainerModule {
    constructor() {
        super(() => {
        });
        /* tslint:disable: no-unused-expression */
        new MongooseModule();
    }
}

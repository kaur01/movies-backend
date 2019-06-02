import {ActorRepository} from "../repositories/ActorRepository";
import {injectable} from "inversify";
import {Actor} from "../models/Actor";

@injectable()
export class ActorService {
    private respository: ActorRepository;

    constructor(actorRepository: ActorRepository) {
        this.respository = actorRepository;

    }

    public async findActor(name: string): Promise<Actor> {
        return await this.respository.findOne(name);
    }
}

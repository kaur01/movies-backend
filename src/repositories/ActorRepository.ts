import {injectable} from "inversify";
import {Actor, ActorModel} from "../models/Actor";

@injectable()
export class ActorRepository {

    public async findOne(name: string): Promise<Actor> {
       return await ActorModel.findOne({actorName: name}).lean();
    }
}

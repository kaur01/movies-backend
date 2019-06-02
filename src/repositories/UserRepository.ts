import {User, UserModel} from "../models/User";
import {injectable} from "inversify";

@injectable()
export class UserRepository {

    public async findOne(number: string): Promise<User> {
        return await UserModel.findOne({number: number});
    }

    public async create(userRequest: User): Promise<User> {
        return await UserModel.create(userRequest);
    }
}

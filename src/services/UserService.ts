import {UserRepository} from "../repositories/UserRepository";
import {injectable} from "inversify";
import {User} from "../models/User";

@injectable()
export class UserService {
    private respository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.respository = userRepository;

    }

    public async findUser(number: string): Promise<User> {
        return await this.respository.findOne(number);
    }

    public async create(userRequest: User): Promise<User> {
        return await this.respository.create(userRequest);
    }
}

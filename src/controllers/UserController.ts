import {Request, Response} from 'express';
import {controller, httpGet, httpPost, request, requestParam, response} from 'inversify-express-utils';
import {UserService} from "../services/UserService";
import {param} from "express-validator/check";
import {User} from "../models/User";

@controller('/user')
export class UserController {
    private service: UserService;

    constructor(userService: UserService) {
        this.service = userService;
    }

    @httpGet('/:phoneNumber', param('phoneNumber').exists().not().isEmpty())
    public async getByPhone(@requestParam('phoneNumber') number: string, @response() res: Response): Promise<void> {
        const user = await this.service.findUser(number);
        res.json(user);
    }

    @httpPost('')
    public async create(@request() req: Request, @response() res: Response): Promise<void> {
        const userRequest = new User(req.body.name, req.body.number);
        const createdUser = await this.service.create(userRequest);
        res.status(201).json(createdUser);
    }
}

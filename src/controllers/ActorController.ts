import {Response} from 'express';
import {controller, httpGet, requestParam, response} from 'inversify-express-utils';
import {ActorService} from "../services/ActorService";
import {param} from "express-validator/check";

@controller('/actor')
export class ActorController {
    private service: ActorService;

    constructor(actorService: ActorService) {
        this.service = actorService;
    }

    @httpGet('/:actorName', param('actorName').exists().not().isEmpty())
    public async getByName(@requestParam('actorName') name: string, @response() res: Response): Promise<void> {
        const actor = await this.service.findActor(name);
        res.json(actor);
    }
}

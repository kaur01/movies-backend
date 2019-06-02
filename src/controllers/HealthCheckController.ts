import {controller, httpGet, response} from 'inversify-express-utils';
import {Response} from 'express';

@controller('/health-check')
export class HealthCheckController {

    @httpGet('')
    public async healthCheck(@response() res: Response): Promise<void> {
        res.status(200).end();
    }
}

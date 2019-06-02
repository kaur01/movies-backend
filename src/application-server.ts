import * as cors from 'cors';
import {Application} from 'express';
import {Container} from 'inversify';
import {createServer, Server} from 'https';
import bodyParser = require('body-parser');
import {InversifyExpressServer} from 'inversify-express-utils';
import {ServiceModule} from "./dependency-injection/ServiceModule";
import {ControllerModule} from "./dependency-injection/ControllerModule";
import {RepositoryModule} from "./dependency-injection/RepositoryModule";
import * as fs from "fs";
import * as path from "path";

export class ApplicationServer {
    private app: any;

    constructor(app: any) {
        this.app = app;
    }

    public start(server: Server): Server {
        const port = 8080;
        return server.listen(port, () => console.log(`Server listening at port ${port}.`));
    }

    public prepareServer(): Server {
        const container = new Container({autoBindInjectable: true});
        container.load(new ControllerModule(), new ServiceModule(), new RepositoryModule());


        const application = new InversifyExpressServer(container, null, {rootPath: '/api'}, this.app)
            .setConfig((app: Application) => {
                app.use(bodyParser.json())
                    .use(cors());
            })
            .build();

        const sslKey = fs.readFileSync(path.resolve(process.cwd(), `/Users/harpreet/Documents/movies-backend/client-key.pem`));
        const sslCertificate = fs.readFileSync(path.resolve(process.cwd(), `/Users/harpreet/Documents/movies-backend/client-cert.pem`));

        return createServer({key: sslKey, cert: sslCertificate}, application);
    }
}


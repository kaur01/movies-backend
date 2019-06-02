Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const inversify_1 = require("inversify");
const https_1 = require("https");
const bodyParser = require("body-parser");
const inversify_express_utils_1 = require("inversify-express-utils");
const ServiceModule_1 = require("./dependency-injection/ServiceModule");
const ControllerModule_1 = require("./dependency-injection/ControllerModule");
const RepositoryModule_1 = require("./dependency-injection/RepositoryModule");
const fs = require("fs");
const path = require("path");
class ApplicationServer {
    constructor(app) {
        this.app = app;
    }
    start(server) {
        const port = 8080;
        return server.listen(port, () => console.log(`Server listening at port ${port}.`));
    }
    prepareServer() {
        const container = new inversify_1.Container({ autoBindInjectable: true });
        container.load(new ControllerModule_1.ControllerModule(), new ServiceModule_1.ServiceModule(), new RepositoryModule_1.RepositoryModule());
        const application = new inversify_express_utils_1.InversifyExpressServer(container, null, { rootPath: '/api' }, this.app)
            .setConfig((app) => {
            app.use(bodyParser.json())
                .use(cors());
        })
            .build();
        const sslKey = fs.readFileSync(path.resolve(process.cwd(), `/Users/harpreet/Documents/movies-backend/client-key.pem`));
        const sslCertificate = fs.readFileSync(path.resolve(process.cwd(), `/Users/harpreet/Documents/movies-backend/client-cert.pem`));
        return https_1.createServer({ key: sslKey, cert: sslCertificate }, application);
    }
}
exports.ApplicationServer = ApplicationServer;

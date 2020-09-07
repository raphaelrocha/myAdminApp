import Service from "../service/Service";
import { config } from "./constants";

const Request = class Request extends Service {
    changeStep = () => this.get(config.changeStep());

    patchUser = (document, body) => this.patch(config.patchUser(document), {body});
}

export default Request;
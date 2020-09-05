import Service from "../service/Service";
import { config } from "./constants";

const Request = class Request extends Service {
    changeStep = () => this.get(config.changeStep());
}

export default Request;
import axios from "axios";

export default class CustomersService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/customers`,
    });
  }

  get = () => this.instance.get("/");
}

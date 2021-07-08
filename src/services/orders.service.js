import axios from "axios";

export default class OrderService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/orders`,
      
    });
  }

  
  get = () => this.instance.get("/");
  
}

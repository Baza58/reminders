import Server from './server';


export default class App {
  server: Server;

  constructor() {

    this.server = new Server();
  }
}
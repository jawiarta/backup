export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      {route: '', moduleId:'index', title:'HOME'},
      {route: 'tambah-user', moduleId:'add-user', title:'HOME'},
      {route: 'users', moduleId:'data-user', title:'HOME'},
      {route: 'hapus-user', moduleId:'delete-user', title:'HOME'}
    ])
    this.router = router;
  }
}

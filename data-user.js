import {HttpClient, json} from 'aurelia-fetch-client';

var http = new HttpClient();
let base = 'http://localhost:3000/api/users';

export class DataUser{

  

  constructor(){
    let init = {
      method: "GET",
      body: JSON.stringify(),
      headers: new Headers({'content-type':'application/json'})
    }
    http.fetch(base,init)
    .then(res => res.json())
    .then(data => {
      this.users = data;
      console.log(data);
    }) 
  }
  delete(user){
    let init = {
      method: "DELETE"
    }
    http.fetch(`${base}/${user.id}`,init)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
}

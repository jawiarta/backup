import {HttpClient, json} from 'aurelia-fetch-client';

var http = new HttpClient();
let base = 'http://localhost:3000/api/users';

export class AddUser{
  simpan(){

    let mydata = {
      username : this.username,
      password : this.password
    }
    console.log(mydata);

    let init = {
      method: "POST",
      body: JSON.stringify(mydata),
      headers: new Headers({'content-type':'application/json'})
    }
    
    http.fetch(base,init)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
}

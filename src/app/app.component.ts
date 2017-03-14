import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {FirebaseService} from "./services/firebase.service";
import {Business} from "./business.interface";
import {Category} from "./category.interface";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  businesses:Business[];
  business:Business;
  categories:Category[];
  appState:string;
  activeKey:string;
  constructor(af:AngularFire, private _firebaseService:FirebaseService){
    this.items=af.database.list('/items');
  }
  ngOnInit(){
    this._firebaseService.getBusinesses()
        .subscribe(
            businesses=>{
              this.businesses=businesses;
            });
    this._firebaseService.getCategories()
        .subscribe(
            categories=>{
              this.categories=categories;
            });
  }
  changeState(state:string, key?:string){
    console.log(`change state ${state}`);
    if(key){
      console.log(`key ${key}`);
      this.activeKey=key;
    }
    this.appState=state;
  }
  onChange(category:string){
    this._firebaseService.getBusinesses(category)
        .subscribe(
            businesses=>{
              this.businesses=businesses;
            });
    console.log(category);
  }
  onSubmit(form:NgForm){
    this._firebaseService.addBusiness(form.value);
    console.log(form.value);
  }
  onUpdate(form:NgForm){
    this._firebaseService.editBusiness(this.activeKey,form.value);
    this.appState='default';
    console.log(form.value);
  }
  onEdit(business:Business){
    this.business=business;
    this.appState="edit";
    this.activeKey=business.$key;
    console.log(business);
  }
  onDelete(key:any){
    this._firebaseService.deleteBusiness(key);
  }
}

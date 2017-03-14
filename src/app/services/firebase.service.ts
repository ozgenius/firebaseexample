import {Injectable} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Business} from "../business.interface";
import {Category} from "../category.interface";
import {NgForm} from "@angular/forms";

@Injectable()
export class FirebaseService {
    businesses:FirebaseListObservable<Business[]>;
    categories:FirebaseListObservable<Category[]>;
    constructor(private af:AngularFire) { }
    getBusinesses (category:string=null){
        if(category != null){
            this.businesses=this.af.database.list('/businesses', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            }) as
                FirebaseListObservable<Business[]>
        } else {
            this.businesses = this.af.database.list('/businesses') as
                FirebaseListObservable<Business[]>
        }
        return this.businesses;
    }
    getCategories (){
        this.categories=this.af.database.list('/categories') as
            FirebaseListObservable<Category[]>
        return this.categories;
    }
    addBusiness(business:Business){
        return this.businesses.push(business);
    }
    editBusiness(key,business:Business){
        this.businesses.update(key,business);
    }
    deleteBusiness(key:any){
        this.businesses.remove(key);
    }
}
import { Component } from "@angular/core";


@Component({
    selector : 'app-college',
    templateUrl : './college.component.html',
    styleUrls : ['./college.component.css']
})

export class CollegeComponent {

    serverName : any = "Production Server";
    collegeName : string = "MCIT College";
    year : number = 1234;

    flag : boolean = true;
    empname : string = "place holder";

    uname: string = "temp";
    pwd :any = 123;
   

    onClick(){
        console.log("Button Click event executed from typescript ");

        // if(this.flag){ // button is already disabled
        //     this.flag = false // Enable it
        // }else{ // If the button is enalbed
        //     this.flag = true; // Disable it
        // }

        this.flag = ! this.flag;
    }

    onLogIn(){
        console.log("Entered user name is : "+this.uname+ " and the password is : "+this.pwd);

       
    
    }
    onClear(){
        this.uname = '';
        this.pwd = '';
    }
   


}
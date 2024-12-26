import { Component } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  title = 'angularForms';
  public cities: String[] = ["Tbilisi", "Kutaisi","Batumi","Telavi"]
  public userObject = {
    name: "",
    email: "",
    city: ""
  }

  
  onSubmit() {
    Swal.fire({
            title: `წარმატებით გაიგზავნა!`,
            icon: 'success',
            confirmButtonText: 'OK'
          });
    console.log(this.userObject);
    
  }

}

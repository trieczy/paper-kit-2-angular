import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import "assets/js/smtp.js";
import { environment } from "environments/environment";
declare let Email: any;
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  focus: any;
  contactUsForm: FormGroup;
  displayNotif: boolean = false;
  formIsSending: boolean = false;
  loading: boolean = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      fname: [""],
      lname: [""],
      email: [""],
      phoneNumber: [""],
      messages: [""],
    });
  }

  onSubmit(): void {
    this.formIsSending = true;
    (document.getElementById("submit") as HTMLButtonElement).disabled = true;
    Email.send({
      Host: environment.hostname,
      Username: environment.username,
      Password: environment.password,
      To: environment.adminemail,
      From: environment.adminemail,
      Subject: "Contact Us",
      Body:
        "<b>First Name:</b> " +
        this.contactUsForm.controls.fname.value +
        "<br />" +
        "<b>Last Name:</b> " +
        this.contactUsForm.controls.lname.value +
        "<br />" +
        "<b>Email Address:</b> " +
        this.contactUsForm.controls.email.value +
        "<br />" +
        "<b>Phone Number:</b> " +
        this.contactUsForm.controls.phoneNumber.value +
        "<br />" +
        "<b>Message:</b> " +
        this.contactUsForm.controls.messages.value,
    }).then((message) => {
      this.updateNotif();
      this.formIsSending = false;
      (document.getElementById("submit") as HTMLButtonElement).disabled = false;
      this.contactUsForm.reset();
      setTimeout(() => {
        this.updateNotif();
      }, 3000);
    });
  }

  updateNotif(): boolean {
    return (this.displayNotif = !this.displayNotif);
  }
}

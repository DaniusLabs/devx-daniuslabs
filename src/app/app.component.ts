import { NgModule, Component, enableProdMode, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { DxDataGridModule } from "devextreme-angular";
import { Service, Employee, State } from "./app.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "demo-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Service]
})
export class AppComponent implements OnInit {
  employees: Employee[];
  states: State[];

  constructor(private service: Service) {
    
    this.states = service.getStates();
  }

  ngOnInit() {
     this.service.getEmployees().subscribe(x => {
      this.employees = x;
     }) ;
  }
  moreTags() {
    alert("more tags");
  }
}

@NgModule({
  imports: [BrowserModule, DxDataGridModule, FontAwesomeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

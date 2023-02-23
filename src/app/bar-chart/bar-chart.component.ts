import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

import { DBService } from "../db.service";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})
export class BarChartComponent implements OnInit {
  constructor(private hospitalService: DBService) {}

  Play = false;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[];
  barChartType: ChartType = "bar";
  barChartLegend = true;
  barChartPlugins = [];
  rating7data: number[] = [];
  barChartData: ChartDataSets[];
  selectedTypeQuestion: number = 1;
  selectQuestion() {
    this.hospitalService
      .GetRating7ofHospitals(this.selectedTypeQuestion)
      .subscribe((res) => {
        this.rating7data = res;
        this.Play = true;
        this.barChartLabels = [
          "בלינסון",
          "מעייני הישועה",
          "איכילוב",
          "שיבא-תל השומר",
          "רמבם",
          "זיו",
          "פוריה",
          "העמק",
          "שערי צדק",
          "הדסה עין כרם",
          "משגב לדך",
          "המרכז הרפואי-סורוקה",
        ];
        this.barChartData = [
          {
            data: this.rating7data,
            label: "בטיחות המטופל",
            backgroundColor: "#b72323",
            hoverBackgroundColor: "white",
            hoverBorderColor: "#ffdf79",

            borderColor: "black",
          },
        ];
      });
  }
  ngOnInit(): void {
    this.selectQuestion();
  }
}

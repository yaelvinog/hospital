import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  NgZone,
  AfterViewInit,
} from "@angular/core";
import { MapsAPILoader } from "@agm/core";

import { DBService } from "../db.service";

import { Hospital } from "../hospital";
import { Department } from "../department";

declare const google: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild("search", { static: false }) searchElementRef: ElementRef;
  search1: boolean = false;
  HospitalsArr: Hospital[] = [];
  HospitalArrAll: Hospital[] = [];
  arr2: Department[];
  starColor: string = "primary";
  starCount: number = 5;
  rating: number = 1;
  isFilter: boolean = false;
  p: number = 1;
  map: any;
  radioSelected: string;
  HospitalsArray: Hospital[] = [];
  isSpiner: boolean = false;
  SourceAddress = "סמינר מאיר, בני ברק";
  constructor(
    private HospitalService: DBService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  ratingLevelsFunc(TotalRatingAvg): string {
    switch (true) {
      case TotalRatingAvg >= 0.5 && TotalRatingAvg <= 1:
        return "טעון שיפור";
      case TotalRatingAvg >= 1.5 && TotalRatingAvg <= 2:
        return "גרוע";
      case TotalRatingAvg >= 2.5 && TotalRatingAvg <= 3:
        return "טוב";
      case TotalRatingAvg >= 3.5 && TotalRatingAvg <= 4:
        return "טוב מאד";
      case TotalRatingAvg >= 4.5 && TotalRatingAvg <= 5:
        return "מצוין";
      default:
        return " ";
    }
  }
  calculateDistancesHospitals(hospitals: Hospital[]): void {
    this.mapsAPILoader.load().then(() => {
      this.calculateDistances(this.SourceAddress, hospitals);
    });
  }
  //The function receives a source address as well as an array of hospitals
  calculateDistances(sourceAddress: string, hospitals: Hospital[]) {
    //Defining a self-variable so that we can access variables outside the function
    let self = this;
    var service = new google.maps.DistanceMatrixService();
    var request = {
      origins: [sourceAddress],
      destinations: [],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    };
    //A loop that passes through the array of hospitals and inserts in each iteration the address of the current hospital into the array of destinations
    for (var i = 0; i < hospitals.length; i++) {
      request.destinations.push(hospitals[i].HospitalAddress);
    }
    service.getDistanceMatrix(request, function (response, status) {
      if (status != google.maps.DistanceMatrixStatus.OK) {
        alert("Error was: " + status);
      } else {
        var results = response.rows[0].elements;
        // save title, address and index of marker in record for sorting
        for (var i = 0; i < hospitals.length; i++) {
          results[i].hospital = hospitals[i];
          results[i].hospital.Duration = results[i].duration.value / 60;
        }
        //Sort the array by duration from the source address
        results.sort(self.sortByDistDM);
        self.HospitalsArr = results.map((x) => x.hospital);
        self.HospitalArrAll = self.HospitalsArr;
        self.isSpiner = false;
      }
    });
  }
  //ממינת את התוצאה שחזרה
  sortByDistDM(a, b) {
    return a.duration.value - b.duration.value;
  }
  ngOnInit(): void {
    this.getHospitalAll();
  }
  ngAfterViewInit() {
    this.findAddress();
  }
  findAddress() {
    if (!this.searchElementRef) {
      setTimeout(() => {
        this.findAddress();
      }, 2000);
    } else {
      this.mapsAPILoader.load().then(() => {
        //A variable that contains what is selected in Autocomplete
        let autocomplete = new google.maps.places.Autocomplete(
          this.searchElementRef.nativeElement
        );
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //A variable that contains some datails of the selected address
            let place = autocomplete.getPlace();
            //The source address contains the selected address
            this.SourceAddress = place.formatted_address;
            this.isSpiner = true;
            this.calculateDistancesHospitals(this.HospitalsArray);
          });
        });
      });
    }
  }
  getHospitalAll() {
    this.isSpiner = true;
    this.HospitalService.GetAllData().subscribe((response) => {
      this.calculateDistancesHospitals(response);
      this.HospitalsArray = response;
    });
  }
  isfilter(): void {
    this.isFilter = !this.isFilter;
    if (!this.isFilter) this.getHospitalAll();
  }
  filteringOk(): void {
    //Sort by high average
    if (this.radioSelected == "sortAvg") {
      this.HospitalsArr.sort(function (a, b) {
        return b.TotalRatingAvg - a.TotalRatingAvg;
      });
    } else {
      //Sort by letters A and B
      if (this.radioSelected == "sortLetter") {
        this.HospitalsArr.sort(function (a, b) {
          return a.HospitalName > b.HospitalName
            ? 1
            : a.HospitalName < b.HospitalName
            ? -1
            : 0;
        });
      }
    }
  }

  valueChanged(e): void {
    if (e.target.value.length == 0) {
      this.isSpiner = true;
      this.SourceAddress = "סמינר מאיר, בני ברק";
      this.calculateDistancesHospitals(this.HospitalsArray);
    }
  }
}

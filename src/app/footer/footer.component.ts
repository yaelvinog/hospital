import { Component, OnInit } from '@angular/core';
import { DBService } from '../db.service';
import { Hospital } from '../hospital';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { Department } from '../department';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],

})
export class FooterComponent implements OnInit {
  public images = [];
  public imagesFiles: File;
  public imageSrc = '';
  public counter = 0;
  public panelOpenState = false;
  starColor:string="primary";
  starCount:number=5;
  rating:number=1;
  open:boolean=false;
  //HosImage = "hos1212121.jpg, hos2243243.jpg"
  HospitalObj: Hospital = new Hospital();
  DepartmentArr:Department[]=[];
  imagesMultiFiles: File[];
  constructor(public HospitalService: DBService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(res => {
      if (Number(res.get("id")))
        this.HospitalService.GetHospitalById(Number(res.get("id"))).subscribe(res => {
          this.HospitalObj = res;
          if (this.HospitalObj.HosImage) {
            this.images = this.HospitalObj.HosImage.split(',');
            this.imageSrc = this.images[0];
            setInterval(() => {
              this.toggleImg();
            }, 5000);
          }
          this.HospitalService.getDeprtmentbyHospitalId(this.HospitalObj.HospitalId).subscribe(response=>{
            this.DepartmentArr=<Department[]>response;
          })
        }
        );
    });
  }

  onRatingChanged(stars:number){
    this.rating=stars
  }
  openUrl(url: string) {
    if (url != "" && url != undefined) {
        window.open(url, "_blank");  
    }    
  }
  toggleImg() {

    if (this.counter === this.images.length - 1) {
        this.counter = 0;
    }
    else{
      this.counter = this.counter+1;
    }
    
  //  this.imageSrc = this.images[this.counter++];
  }

  ngOnInit(): void {

  }
  uploadHos() {
    for (let index = 0; index < this.imagesMultiFiles.length; index++) {
      this.HospitalService.uploadImage(this.imagesMultiFiles[index], this.HospitalObj.HospitalId).subscribe(x => { });

    }
    // this.HospitalService.uploadMultiImages(this.imagesMultiFiles, this.HospitalArr.HospitalId).subscribe(x => { });
  }
  onSelectFiles(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {

      this.imagesMultiFiles = event.target.files;

    }
  }
  
  onPreviousClick():void{
    if (this.counter ===  0) {
      this.counter = this.images.length -1;
  }
  else{
    this.counter = this.counter-1;
  }

  }
  onNextClick():void{
    if (this.counter === this.images.length - 1) {
      this.counter = 0;
  }
  else{
    this.counter = this.counter+1;
  }
  }
  text():string{
    return this.open?"הסתר":"קרא עוד";
    }
}

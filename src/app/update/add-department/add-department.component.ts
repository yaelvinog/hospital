import { Component, OnInit, ViewChild } from '@angular/core';
import { DBService } from 'src/app/db.service';
import { Hospital } from 'src/app/hospital';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Department } from 'src/app/department';
import { DepartmentService } from 'src/app/department.service';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  selectedHospital: number;
  selectedHospitalName: string = "";
  arrHos: Hospital[] = [];
  departmentOriginal: Department[] = [];
  public displayedColumns = ['Delete', 'Cancel', 'Edit', 'Tel', 'VisitTime', 'IsConfirmed', 'DepartmentManagerName', 'FullName'];
  @ViewChild(MatTable) table: MatTable<any>;
  public dataSource = new MatTableDataSource<Department>();
  constructor(private hospitalService: DBService, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.hospitalService.GetAllData().subscribe(res => {
      this.arrHos = res;
      this.selectedHospital = this.arrHos[0].HospitalId;
      this.selectedHospitalName = this.arrHos[0].HospitalName;
      this.selectHospital()
    })
  }
  refreshTable(): void {
    this.table.renderRows();
  }
  selectHospital() {
    this.selectedHospitalName = this.arrHos.find(x => x.HospitalId == this.selectedHospital).HospitalName;
    this.hospitalService.getDeprtmentbyHospitalId(this.selectedHospital).subscribe(res => {
      this.dataSource.data = res;
      this.departmentOriginal = res.map(x => Object.assign({}, x));
    });
  }
  addNewDepartment() {
    if (!(this.dataSource.data.find(x => x.DepartmentId == 0))) {
      const newDep = new Department(0, this.selectedHospital, null, "", "", "", true, false, "", "");
      newDep.ISEDITED = true;
      this.dataSource.data.splice(0, 0, newDep);
      this.refreshTable();
    }
  }
  redirectToUpdate(depId: number) {
    if (depId == 0) {
      let newDep: Department = this.dataSource.data.find(x => x.DepartmentId == depId);
      this.departmentService.addNewDepartment(newDep).subscribe(res => {
        alert("addion");
      })
    }
    else {
      let dep: Department = this.dataSource.data.find(d => d.DepartmentId == depId);
      this.departmentService.updateDepartment(dep).subscribe(res => { });
    }
    this.refreshTable();
  }
  redirectToCancel(depId: number) {
    if (depId == 0) {
      let index = this.dataSource.data.findIndex(x => x.DepartmentId == depId);
      this.dataSource.data.splice(index, 1);
    }
    else {
      let department: Department = this.departmentOriginal.find(d => d.DepartmentId == depId);
      let indexDep = this.dataSource.data.findIndex(i => i.DepartmentId == depId);
      this.dataSource.data[indexDep] = Object.assign({}, department);
      this.dataSource.data[indexDep].ISEDITED = false;
    }
    this.refreshTable();
  }
  redirectToDelete(depId: number) {
    let deleteDp: Department = this.dataSource.data.find(x => x.DepartmentId == depId);
    deleteDp.IsConfirmed = false;
    this.departmentService.updateDepartment(deleteDp).subscribe(res => { });
    this.refreshTable();
  }
}

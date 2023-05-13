import { Component, OnInit } from '@angular/core';
import { CycleService } from 'src/app/Services/cycle.service';

@Component({
  selector: 'app-cycle-list',
  templateUrl: './cycle-list.component.html',
  styleUrls: ['./cycle-list.component.css']
})
export class CycleListComponent implements OnInit{
  Cycles:any=[];

  constructor( private cycleService:CycleService){}

  ngOnInit(): void {
    this.cycleService.GetCycles().subscribe(res=>{
      console.log(res)
      this.Cycles=res;
    });
  }

  delete(id:any,i:any){
    console.log(id);
    if (window.confirm('Are you sure !!')){
      this.cycleService.deleteCycle(id).subscribe((res)=>{
      this.Cycles.splice(i,1);
    })
  }
}

}

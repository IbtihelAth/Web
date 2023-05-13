import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CycleService } from 'src/app/Services/cycle.service';


@Component({
  selector: 'app-edit-cycle',
  templateUrl: './edit-cycle.component.html',
  styleUrls: ['./edit-cycle.component.css']
})
export class EditCycleComponent implements OnInit{
  getId:any;
  updateForm:FormGroup;
  constructor(public formBuilder:FormBuilder,private router:Router,
    private ngZone:NgZone,private activatedRoute:ActivatedRoute,
    private cycleService:CycleService){

      this.getId=this.activatedRoute.snapshot.paramMap.get('id');
      this.cycleService.GetCycle(this.getId).subscribe(res=>{
        this.updateForm.setValue({
          nom:res['nom'], description:res['description'],periode:res['periode']
        });
      });
      this.updateForm=this.formBuilder.group({
        nom:[''],description:[''],periode:['']
      })
    }


    ngOnInit(): void {}

    onUpdate():any{
      this.cycleService.updateCycle(this.getId,this.updateForm.value).subscribe(()=>{
        console.log('data updated successfully !')
        this.ngZone.run(()=>this.router.navigateByUrl('/cycle-list'))
      },(err)=>{
        console.log(err);
      });
    }

}
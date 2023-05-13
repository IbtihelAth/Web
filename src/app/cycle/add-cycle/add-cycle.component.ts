import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CycleService } from 'src/app/Services/cycle.service';

@Component({
  selector: 'app-add-cycle',
  templateUrl: './add-cycle.component.html',
  styleUrls: ['./add-cycle.component.css']
})
export class AddCycleComponent implements OnInit{
  cycleForm:FormGroup;

  constructor(public formBuilder:FormBuilder,private router:Router,
    private ngZone:NgZone, private cycleService:CycleService){
      this.cycleForm=this.formBuilder.group({
        nom:[''], description:[''], periode:['']
      })
    }

    ngOnInit(): void {}
  onSubmit():any{
    this.cycleService.AddCycle(this.cycleForm.value).subscribe(()=>{
      console.log('data added successfully! ')
      this.ngZone.run(()=>this.router.navigateByUrl('cycle-list'))
    },(err)=>{
      console.log(err);
    });
  }

}

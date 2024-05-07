import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  barHeight = '100%'
  dataForChart = [
    {
      progress:'50%',
      day:'1',
      color:'black'
    },
    {
      progress:'30%',
      day:'2',
      color:'#ADB5C0'
    },
    {
      progress:'60%',
      day:'3',
      color:'black'
    },
    {
      progress:'80%',
      day:'4',
      color:'#ADB5C0'
    },
    {
      progress:'90%',
      day:'5',
      color:'black'
    },
    {
      progress:'10%',
      day:'6',
      color:'#ADB5C0'
    },
    {
      progress:'90%',
      day:'7',
      color:'black'
    },
    {
      progress:'80%',
      day:'8',
      color:'#ADB5C0'
    },
    {
      progress:'30%',
      day:'9',
      color:'black'
    },
    {
      progress:'20%',
      day:'10',
      color:'#ADB5C0'
    },
    {
      progress:'10%',
      day:'11',
      color:'black'
    },
    {
      progress:'40%',
      day:'12',
      color:'#ADB5C0'
    } ,
       {
      progress:'80%',
      day:'13',
      color:'black'
    },
    {
      progress:'70%',
      day:'14',
      color:'#ADB5C0'
    },
    {
      progress:'60%',
      day:'15',
      color:'black'
    },
    {
      progress:'30%',
      day:'16',
      color:'#ADB5C0'
    },
    {
      progress:'90%',
      day:'17',
      color:'black'
    },
    {
      progress:'20%',
      day:'18',
      color:'#ADB5C0'
    },
    {
      progress:'10%',
      day:'19',
      color:'black'
    },
    {
      progress:'60%',
      day:'20',
      color:'#ADB5C0'
    }
  ]

  ngOnInit(){
    console.log(this.dataForChart);
    
  }
}

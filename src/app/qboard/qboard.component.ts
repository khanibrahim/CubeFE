import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qboard',
  templateUrl: './qboard.component.html',
  styleUrls: ['./qboard.component.css']
})
export class QBoardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.page.html',
  styleUrls: ['./correction.page.scss'],
})
export class CorrectionPage implements OnInit {
  public setup: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.setup = this.activatedRoute.snapshot.paramMap.get('id');
  }
}

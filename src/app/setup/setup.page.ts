import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
  public setup: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.setup = this.activatedRoute.snapshot.paramMap.get('id');
  }
}

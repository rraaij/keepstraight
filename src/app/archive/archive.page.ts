import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.page.html',
  styleUrls: ['./archive.page.scss'],
})
export class ArchivePage implements OnInit {
  public setup: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.setup = this.activatedRoute.snapshot.paramMap.get('id');
  }
}

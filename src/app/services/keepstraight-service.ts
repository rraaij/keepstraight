import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { GameSetup } from '../models/game-setup';

import * as PouchDB from 'pouchdb';

@Injectable()
export class KeepstraightService {
  private db;

  constructor(private platform: Platform) {}

  initDB(): Promise<any> {
    return this.platform.ready()
      .then(() => {
        this.db = new PouchDB('keepstraight', { adapter: 'websql'});
      });
  }

  getSetup() : Observable<any> {
    return Observable.fromPromise(
      this.initDB()
        .then(() => {
          return this.db.allDocs({ include_docs: true });
        })
        .then(docs => {
          if (docs.rows && docs.rows.length > 0) {
            return docs.rows[docs.rows.length-1].doc;
          }
          return;
        })
    )
  }

  getGamedataChanges(): Observable<any> {
    return Observable.create(observer => {

      if (this.db) {
        // listen for changes on the database
        this.db.changes({
          live: true,
          since: 'now',
          include_docs: true
        })
        .on('change', change => {
          observer.next(change.doc);
        });
      }
    });
  }

  saveSetup(gamesetup: GameSetup) : Promise<any> {
    return this.db.post(gamesetup);
  }
}

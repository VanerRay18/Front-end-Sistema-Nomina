import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileTransferService {

  constructor() { }

  private fileSource = new BehaviorSubject<File | null>(null);

  setFile(file: File) {
    this.fileSource.next(file);
  }

  getFile() {
    return this.fileSource.asObservable();
  }
}

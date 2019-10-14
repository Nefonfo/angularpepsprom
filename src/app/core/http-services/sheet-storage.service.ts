import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewSheetDto } from 'src/app/dtos/newSheet.dto';
import { url } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class SheetStorageService {

  constructor(private readonly http: HttpClient) { }


  async newSheet(newSheetData: NewSheetDto): Promise<object> | null {
    return this.http.post(url + '/sheets-storage/new', newSheetData).subscribe(
      data => {
        return data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  }

  async findAllSheet(): Promise<object> | null {
    return new Promise(async (resolve, reject) => {
      this.http.get(`${url}/sheets-storage/all`).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async findOneSheet(query: string, param: string): Promise<object> | null {
    return new Promise(
      async (resolve, reject) => {
        this.http.get(`${url}/sheets-storage/findOne?fieldName=${query}&data=${param}`).subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

}

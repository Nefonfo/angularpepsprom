import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewSheetDto } from 'src/app/dtos/newSheet.dto';
import { url } from 'src/app/config/config';
import { SheetStorage } from 'src/app/interface/sheet-storage.interface';
import { NewStorageInfoDto } from 'src/app/dtos/new-storage-info.dto';

@Injectable({
  providedIn: 'root'
})
export class SheetStorageService {

  constructor(private readonly http: HttpClient) { }


  async newSheet(newSheetData: NewSheetDto): Promise<any> {
    return this.http.post(url + '/sheets-storage/new', newSheetData).subscribe(
      data => {
        return data;
      },
      (error) => {
        return null;
      }
    );
  }

  async findAllSheet(): Promise<any> {
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

  async findOneSheet(query: string, param: string): Promise<SheetStorage> {
    return new Promise(
      async (resolve, reject) => {
        this.http.get(`${url}/sheets-storage/findOne?fieldName=${query}&data=${param}`).subscribe(
          (data: SheetStorage) => {
            resolve(data);
          },
          (error) => {
            resolve(error);
          }
        );
      }
    );
  }

  async newSheetInfo(data: NewStorageInfoDto): Promise<any>{
    return new Promise(
      async(resolve, reject) => {
        this.http.post(`${url}/storage-info/newStorageInfo`, data).subscribe(
          (data) => {
          resolve(data);
          },
          (error) => {
            resolve(error);
          }
        );
      }
    );
  }

}

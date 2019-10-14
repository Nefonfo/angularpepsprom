import {Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewSheetDialogComponent } from '../../components/new-sheet-dialog/new-sheet-dialog.component';
import { SheetStorageService } from 'src/app/core/http-services/sheet-storage.service';
import { NewSheetDto } from 'src/app/dtos/newSheet.dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-activities-page',
  templateUrl: './all-activities-page.component.html',
  styleUrls: ['./all-activities-page.component.scss']
})
export class AllActivitiesPageComponent implements OnInit{

  loading: boolean;
  sheets: object;

  ngOnInit(): void {
    this.sheets = null;
    this.findAllSheet();
  }

  constructor(private dialog: MatDialog, private readonly httpSheetStorageService: SheetStorageService) {}

  async newSheet() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(NewSheetDialogComponent, dialogConfig).afterClosed().subscribe(
      async (data) => {
        if (data == null) {
          return;
        }
        const newSheet = new NewSheetDto(
          data.name,
          data.type
        );
        const res = await this.httpSheetStorageService.newSheet(newSheet);
        Swal.fire({
          title: 'Agregado',
          text: `${data.name} agregado exitosamente`,
          type: 'success',
          confirmButtonText: 'ok'
        });
        setTimeout(() => this.findAllSheet(), 100);
      }
    );

  }

  async findAllSheet() {
    this.loading = true;
    this.sheets = await this.httpSheetStorageService.findAllSheet();
    this.loading = false;
    console.log(this.sheets);
  }
}



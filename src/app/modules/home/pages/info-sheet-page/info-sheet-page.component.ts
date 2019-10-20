import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SheetStorageService } from 'src/app/core/http-services/sheet-storage.service';
import { SheetStorage } from 'src/app/interface/sheet-storage.interface';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewInfoDialogComponent } from '../../components/new-info-dialog/new-info-dialog.component';
import { NewStorageInfoDto } from 'src/app/dtos/new-storage-info.dto';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-info-sheet-page',
  templateUrl: './info-sheet-page.component.html',
  styleUrls: ['./info-sheet-page.component.scss']
})
export class InfoSheetPageComponent implements OnInit, AfterViewInit {
loading: boolean;
urlData: any;
sheet: SheetStorage;
dataInfo;
displayedColumns: string[] = [
  'operation',
  'quantity',
  'unitCost',
  'type',
  'existence',
  'balancequantity',
  'balanceunitCost',
  'balancetotal'];
  constructor(
    private activeRoute: ActivatedRoute,
    private readonly sheetsStorageService: SheetStorageService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.cdr.detach();
  }

  trackById(index, item){
    return item._id;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.searchSheet(params.id);
    });
  }

  async searchSheet(id: string) {
    this.loading = true;
    this.cdr.detectChanges();
    this.sheet = await this.sheetsStorageService.findOneSheet('_id', id);
    const { info } = this.sheet;
    this.dataInfo = info;
    this.loading = false;
    this.cdr.detectChanges();
  }

  async openInfo() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(NewInfoDialogComponent, dialogConfig).afterClosed().subscribe(
      async (data) => {
        if(!data) {
          Swal.fire({
            title: 'Cancelado',
            text: 'La operación fue cancelada',
            type: 'warning'
          });
          return null;
        }
        const u = new NewStorageInfoDto();
        u.idRefTo = this.sheet._id;
        u.operation = data.name;
        // tslint:disable-next-line: no-bitwise
        u.unitCost = Number(data.unitCost) | 0;
        u.type = data.type;
        u.existence = Number(data.quantity);
        u.quantity = Number(data.quantity);
        u.balance = {
          quantity: 0,
          unitCost: 0,
          total: 0
          };
        const res = await this.sheetsStorageService.newSheetInfo(u);
        if (!res.ok && res.error) {
          Swal.fire({
            title: 'Error',
            text: res.error.message,
            type: 'error'
          });
        } else {
          Swal.fire({
            title: 'AGREGADO',
            type: 'success'
          });
          this.activeRoute.params.subscribe(params => {
            this.searchSheet(params.id);
          });
        }
      }
    );
  }

}

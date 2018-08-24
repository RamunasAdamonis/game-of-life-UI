import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GridService } from '../core/services/grid.service';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  public canvas: ElementRef;
  public grid: any;
  private cx: CanvasRenderingContext2D;

  constructor(protected gridService: GridService) {}

  ngOnInit() {
    // this.gridService.getGrid().subscribe((values: any) => {
    //  this.grid = values;
    // this.drawGrid();
    // });
  }

  ngAfterViewInit() {
    // const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    // this.cx = canvasEl.getContext('2d');
    // canvasEl.width = 20;
    // canvasEl.height = 20;
    // this.drawGrid(this.cx);
    // this.cx.rect(20, 20, 150, 100);
    // this.cx.stroke();
    this.getStuff().then(data => {
      console.log(data);
      this.grid = data;
    });
    console.log(this.grid);
  }

  public getStuff(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.gridService.getGrid().subscribe(success => {
        resolve(success);
      });
    });
  }

  public drawGrid(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = 20;
    canvasEl.height = 20;
    // this.drawGrid(this.cx);
    console.log(this.grid);

    this.cx.rect(0, 0, 20, 20);
    this.cx.stroke();
  }

  public onClick() {
    console.log(this.grid);
  }
}

import { Component } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from "../environments/environment";
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import RoadmapItemDto from "./contracts/RoadmapItemDto";
import RoadmapItem from "./contracts/roadmapItem";
import ChartPoint from "./contracts/ChartPoint";
import {SeriesLabels, ValueAxisLabels} from "@progress/kendo-angular-charts";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public data: RoadmapItem[] = []
  public chart_data: any = []
  public today: ChartPoint[] = [new ChartPoint(new Date(), "today", 0)]

  public dataNoteStyle: any = {
    label: {
      position: 'outside'
    },
    line: {
      length: 0
    },
    icon: {
      type: 'square'
    },
    position: 'bottom'
  };

  public todayNoteStyle: any = {
    label: {
      position: 'outside'
    },
    line: {
      length: 800
    },
    icon: {
      type: 'circle',
      size: 20,
      background: 'rgba(255,0,0,1)'
    },
    position: 'top'
  }



  public sort: SortDescriptor[] = [
    {
      field: 'plannedComplete',
      dir: 'asc'
    }
  ];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get<RoadmapItemDto[]>(environment.api_url)
      .subscribe(result => {
        this.data = result.map(x=> new RoadmapItem(x));

        this.chart_data = this.data.map( x => new ChartPoint(x.plannedComplete!, x.name, x.id))

        console.log(this.chart_data);
      });
  }

  private loadProducts(): void {
    this.data = orderBy(this.data, this.sort);
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }

  public labelContent = (e:any) => {
    return e.dataItem.name.substring(0,46);
  };
}

import { Component } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import RoadmapItemDto from "./contracts/RoadmapItemDto";
import RoadmapItem from "./contracts/roadmapItem";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'susanin-face'
  public data: any = []

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
      });
  }

  private loadProducts(): void {
    this.data = orderBy(this.data, this.sort);
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }
}
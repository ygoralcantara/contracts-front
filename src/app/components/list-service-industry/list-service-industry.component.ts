import { Component, OnInit } from '@angular/core';
import {
  ListServiceIndustryQueryParams,
  ServiceIndustry,
} from '../../services/service-industry/service-industry.interface';
import { ServiceIndustryService } from '../../services/service-industry/service-industry.service';

@Component({
  selector: 'app-list-service-industry',
  templateUrl: './list-service-industry.component.html',
  styleUrls: ['./list-service-industry.component.css'],
})
export class ListServiceIndustryComponent implements OnInit {
  servicesIndustry: ServiceIndustry[] = [];
  displayedColumns: string[] = [
    'cpfCnpj',
    'name',
    'email',
    'type',
    'zipCode',
    'street',
    'number',
    'addressLine',
    'district',
    'city',
    'stateCode',
  ];

  constructor(private serviceIndustryService: ServiceIndustryService) {}

  ngOnInit(): void {
    const paginationConfig: ListServiceIndustryQueryParams = {
      page: 1,
      limit: 10,
    };

    this.serviceIndustryService.listServiceIndustry(paginationConfig).subscribe(
      (data) => {
        console.log(data);
        this.servicesIndustry = data.data;
      },
      (error) => console.log(error),
    );
  }
}

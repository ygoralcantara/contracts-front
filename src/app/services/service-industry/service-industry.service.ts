import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ListServiceIndustryQueryParams,
  ListServiceIndustryResponse,
} from './service-industry.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceIndustryService {
  private readonly listUrl = 'service-industry';

  constructor(private http: HttpClient, private authService: AuthService) {}

  listServiceIndustry(
    params: ListServiceIndustryQueryParams,
  ): Observable<ListServiceIndustryResponse> {
    let url = `${environment.apiBaseUrl}/${this.listUrl}?`;
    const token = this.authService.getAccessToken();
    const config = {
      params: {
        page: params.page,
        limit: params.limit,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return this.http.get<ListServiceIndustryResponse>(url, config);
  }
}

///
/// Copyright © 2016-2020 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { defaultHttpOptionsFromConfig, RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { DeviceProfile, DeviceProfileInfo } from '@shared/models/device.models';

@Injectable({
  providedIn: 'root'
})
export class DeviceProfileService {

  constructor(
    private http: HttpClient
  ) { }

  public getDeviceProfiles(pageLink: PageLink, config?: RequestConfig): Observable<PageData<DeviceProfile>> {
    return this.http.get<PageData<DeviceProfile>>(`/api/deviceProfiles${pageLink.toQuery()}`, defaultHttpOptionsFromConfig(config));
  }

  public getDeviceProfile(deviceProfileId: string, config?: RequestConfig): Observable<DeviceProfile> {
    return this.http.get<DeviceProfile>(`/api/deviceProfile/${deviceProfileId}`, defaultHttpOptionsFromConfig(config));
  }

  public saveDeviceProfile(deviceProfile: DeviceProfile, config?: RequestConfig): Observable<DeviceProfile> {
    return this.http.post<DeviceProfile>('/api/deviceProfile', deviceProfile, defaultHttpOptionsFromConfig(config));
  }

  public deleteDeviceProfile(deviceProfileId: string, config?: RequestConfig) {
    return this.http.delete(`/api/deviceProfile/${deviceProfileId}`, defaultHttpOptionsFromConfig(config));
  }

  public setDefaultDeviceProfile(deviceProfileId: string, config?: RequestConfig): Observable<DeviceProfile> {
    return this.http.post<DeviceProfile>(`/api/deviceProfile/${deviceProfileId}/default`, defaultHttpOptionsFromConfig(config));
  }

  public getDefaultDeviceProfileInfo(config?: RequestConfig): Observable<DeviceProfileInfo> {
    return this.http.get<DeviceProfileInfo>('/api/deviceProfileInfo/default', defaultHttpOptionsFromConfig(config));
  }

  public getDeviceProfileInfo(deviceProfileId: string, config?: RequestConfig): Observable<DeviceProfileInfo> {
    return this.http.get<DeviceProfileInfo>(`/api/deviceProfileInfo/${deviceProfileId}`, defaultHttpOptionsFromConfig(config));
  }

  public getDeviceProfileInfos(pageLink: PageLink, config?: RequestConfig): Observable<PageData<DeviceProfileInfo>> {
    return this.http.get<PageData<DeviceProfileInfo>>(`/api/deviceProfileInfos${pageLink.toQuery()}`, defaultHttpOptionsFromConfig(config));
  }

}

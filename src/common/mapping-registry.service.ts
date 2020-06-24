import { Injectable } from "@nestjs/common";
import { MappingService } from "./mapping.service";

import 'automapper-ts';
import { MappingService } from './mapping.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class MappingRegistryService {
    private readonly mappingService: MappingService[] = [];

    public registerMappingService(mappingService: MappingService){
        this.mappingServices.push(mappingService);
        mappingService.addMapping();
    }

    public map<T>(source: string, target: string, object: any): T {
        return automapper.map(source, target, Object) as T;
    }
}
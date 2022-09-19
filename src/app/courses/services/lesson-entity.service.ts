import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, EntityCollectionServiceFactory } from "@ngrx/data";
import { Lesson } from "../model/lesson";

@Injectable()
export class LessonEntityService extends EntityCollectionServiceBase<Lesson>{
    constructor(serviceElementsFactory : EntityCollectionServiceElementsFactory){
        super('Lesson', serviceElementsFactory)
    }
}


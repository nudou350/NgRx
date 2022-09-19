import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from '../reducers';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, map, tap} from 'rxjs/operators';
import { CourseEntityService } from './services/course.entity.service';


@Injectable()
export class CoursesResolver implements Resolve<boolean> {

    loading = false;

    constructor(private courseService : CourseEntityService) {

    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> {
            
        return this.courseService.loaded$.pipe(
            tap(loaded => {
                if(!loaded){
                    this.courseService.getAll();
                }
            }),
            filter(loaded => !!loaded),
            first()
        )

    }

}

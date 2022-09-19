import {compareCourses, Course} from '../model/course';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';


export interface CoursesState extends EntityState<Course> {
    allCoursesLoaded: boolean
}


export const adapter = createEntityAdapter<Course>({
    sortComparer: compareCourses
});


export const initialCoursesState = adapter.getInitialState({
    allCoursesLoaded:false
});


export const coursesReducer = createReducer(

    initialCoursesState,


);


export const {
    selectAll
} = adapter.getSelectors();


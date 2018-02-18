import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component'; 
import { PinchDirective } from './pinch.directive'; 

@NgModule({
    declarations: [
        SwiperComponent,
        PinchDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SwiperComponent
    ],
    providers: [
        
    ],
    bootstrap: [
        
    ],
    entryComponents: [

    ]
})
export class SwiperModule { }

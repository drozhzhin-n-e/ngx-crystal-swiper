import { Component, Input, OnInit, ElementRef, ViewChild, ChangeDetectorRef, HostBinding } from '@angular/core';

@Component({
	selector: 'swiper', 
	templateUrl: './swiper.component.html',
    styleUrls: ['./css/swiper.component.css'],
})
export class SwiperComponent {
    @Input('images') images: any = [];
    @Input('config') config: any = {};
    @Input('height') containerHeight: string;

	_index: any;
    prevIndex: any;
    nextIndex: any;

    currImage = {
        show: true,
        loaded: false,
        index: 0
    }; 

    prevImage = {
        loaded: false
    }; 

    nextImage = {
        loaded: false
    }; 

    wrapperProp: any;
    landscapeMode: any;

    @ViewChild('wrapper') wrapperEl: ElementRef;

    @HostBinding('style.height') hostHeight:string;

    get index(){
        return this.currImage.index;
    }

    get currImagePath(){
        let image = this.images[this.index];
        if (image){
        	return image.path;
        }
    }

    get prevImagePath(){
        let image = this.images[this.prevIndex];
        if (image){
        	return image.path;
        }
    }

    get nextImagePath(){
        let image = this.images[this.nextIndex];
        if (image){
        	return image.path;
        }
    }

    get isFirst(){
    	return this.index === 0;
    }

    get isLast(){
    	return this.index === this.latestImageIndex;
    }

    get latestImageIndex(){
        return this.images.length - 1;
    }

    get isLandscape(){
        return window.innerWidth > window.innerHeight;
    }

/*
    @HostListener('window:resize', ['$event'])
    onWindowResize(event: any) {
        this.landscapeMode = this.isLandscape;
        this.ref.detectChanges();
    }
*/
    constructor(private elementRef: ElementRef, private ref: ChangeDetectorRef){
    }

    ngOnInit(){
        this.prevIndex = this.currImage.index-1;
        this.nextIndex = this.currImage.index+1;
        this.hostHeight = this.containerHeight;
    }

    slide(event: any){
        if (event === 'next'){

            if (this.isLast){
                if (!this.config.loop){
                    return;
                } else {
                    setTimeout(() => {
                        this.currImage.index = 0;
                    }, 200); 
                }
            } else {
                setTimeout(() => {
                    this.currImage.index++;
                }, 200); 
            }

            setTimeout(() => {
                this.afterSlide('next');
            }, 300); 
        }

        if (event === 'prev'){

            if (this.isFirst){
                if (!this.config.loop){
                    return;
                } else {
                    setTimeout(() => {
                        this.currImage.index = this.latestImageIndex;
                    }, 200); 
                }
            } else {
                setTimeout(() => {
                    this.currImage.index--;
                }, 200); 
            }

            setTimeout(() => {
                this.afterSlide('prev');
            }, 300); 
        }
    }

    afterSlide(eventType: any){
        this.currImage.show = true;
        
        if (this.index === this.latestImageIndex && this.config.loop){
            this.nextIndex = 0;
        } else {
            this.nextIndex = this.index+1;
        }

        if (this.index === 0 && this.config.loop){
            this.prevIndex = this.latestImageIndex;
        } else {
            this.prevIndex = this.index-1;
        }

        if (eventType === 'prev'){

            if (!this.prevImage.loaded){
                this.currImage.loaded = false;
                this.prevImage.loaded = false;
            }
            if (!this.currImage.loaded){
                this.nextImage.loaded = false;
            }
        }

        if (eventType === 'next'){

            if (!this.nextImage.loaded){
                this.currImage.loaded = false;
                this.nextImage.loaded = false;
            }
            if (!this.currImage.loaded){
                this.prevImage.loaded = false;
            }
        }

        this.defaultWrapperPosition();
        this.ref.detectChanges();
    }

    onImageLoaded(elem: any){
        this[elem].loaded = true;
        this.ref.detectChanges();
    }

    handlePinchEvents($event){
        if ($event === 'prev'){
            this.slide('prev');
        }
        if ($event === 'next'){
            this.slide('next');
        }
    }

    defaultWrapperPosition(){
        let elem = this.wrapperEl.nativeElement;
        elem.style.transition = 'all 0ms';
        elem.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        elem.style.webkitTransform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
}
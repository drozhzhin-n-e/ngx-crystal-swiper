## Installation

Install the npm package.

    npm i ngx-crystal-swiper
        
Import module:

    import { SwiperComponent } from 'ngx-crystal-swiper/components';
 
	@NgModule({
	    declarations: [ SwiperComponent ]
	})

## Usage
    
	myImages = [
		{
			path: 'path_to_image'
		}
	];

	<swiper [images]="myImages" height="100%"></swiper> 

## Properties

| name             | type                                | description                                                               |
|------------------|-------------------------------------|---------------------------------------------------------------------------|
| height           | string                              | Container height (in pixels or percentages).                              |
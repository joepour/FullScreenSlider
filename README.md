FullScreenSlider
================

A jQuery plugin which spans the full width of the screen and adapt the images background colour. 
You can see what is looks like in the [demo](http://joepour.com/full-screen-slider/).

Usage
================

1. Include jQuery and jQueryUI
2. Add your html:
``` html

    <div id="stretch-container">
    	<div data-bg-hex="#f8981d"><img width="960" height="378" src="banners/1.jpg" /></div>
    	<div data-bg-hex="#4e9acf"><img width="960" height="378" src="banners/2.jpg" /></div>
    	<div data-bg-hex="#000000"><img width="960" height="378" src="banners/3.jpg" /></div>
    </div>
```
3. Add data-bg-hex to each div with the background colour of your image.
4. Add height and width to img to support multiple browsers.
5. Initialise jQuery plugin
``` javascript

    $('#stretch-container').FullScreenSlider();
```


Options
================
``` javascript

    {
    	pause: 	    5000,
    	autoSlide:  true,
    	autostart:  true,
    	nextButton: '.next',
    	prevButton: '.prev',
    	slideSpeed: 700
    }
```
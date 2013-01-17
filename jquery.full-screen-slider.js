(function($){
	$.fn.FullScreenSlider = function(options) {
		var 
			_bannerCount  = 0,
			_position     = 0,
			_bgColours    = [],
			_direction    = 1,
			_container    = '',
			_bannerWidth  = 960,
			_bannerHeight = 300,
			
			defaults = {
				pause		: 5000,
				autoSlide	: true,
				autoStart	: true,
				nextButton	: '.next',
				prevButton	: '.prev',
				slideSpeed	: 700
			},
			
			options =  $.extend(defaults, options),

			prev = function(){
				$('#gallery-container').animate({ left: '+=' + _bannerWidth }, options.slideSpeed);
				_position--;
				setBg();
			},
			
			next = function(){
				$('#gallery-container').animate({ left: '-=' + _bannerWidth }, options.slideSpeed);
				_position++;
				setBg();
			},
			
			setBg = function(){
				// TODO: Add support if no jQuery UI 
				_container.animate( { backgroundColor: _bgColours[_position] }, options.slideSpeed);
			},
			
			move = function(){
				if(_direction == 1) 
					next();
				else
					prev();
				
				if(options.autoSlide){
					if(_position == _bannerCount)
						_direction = 0;
					
					if(_position == 0)
						_direction = 1;
				
					setTimeout(move, options.pause);
				}
			};
		
		//
		//
		// Set Constants
		_container    = this;
		_bannerCount  = _container.find('div').length -1;
		_bannerWidth  = _container.find('div img').width();
		_bannerHeight = _container.find('div img').height();
		
		_container.find('div').each(function(i, el){
			_bgColours.push($(el).attr('data-bg-hex')); 
		});
		
		_container.find('div').addClass('banner').wrapAll('<div id="gallery-view"><div id="gallery-container"></div></div>');
		
		
		//
		//
		// Set Styles
		_container.css('background-color', _bgColours[0]);
		
		$('#gallery-view').css({
			'width'   : _bannerWidth,
			'margin'  : '0 auto',
			'height'  : _bannerHeight,
			'position': 'relative',
			'overflow': 'hidden'
		});
		
		$('#gallery-container').css({
			'top'  : 0,
			'left' : 0,
			'width': _bannerWidth * (_bannerCount + 1),
			'position': 'absolute'
		});
		$('.banner').css({'float': 'left', 'width': _bannerWidth})
		$('.banner img').css({'width': _bannerWidth, 'height': _bannerHeight, 'position': 'relative'});
		
		//
		//
		// Sliding logic
		if(options.autoStart)
			move();
		
		$(options.nextButton).click(function(){
			if(_position == _bannerCount) return;
				
			_direction = 1;
			move();
		});
		
		$(options.prevButton).click(function(){
			if(_position == 0) return;
				
			_direction = 0;
			move();
		});
	};
})(jQuery);
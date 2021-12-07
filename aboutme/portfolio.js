;(function(window,document,undefined){
    "use strict";
        var init = function(){    
            var canvas = document.querySelector('#x');
            var icon_template = document.querySelector('#template');
            var icon_width = 40;
            var icon_height = 30;
            var the_images = [
                'media/star2.png',
                'media/star3.png',
                'media/star4.png',
                'media/star5.png'
            ];
            var pickRandomImage = function(){
                var i = Math.floor( Math.random() * the_images.length );
                return the_images[i];
            };
            var total_number_of_images = 25;
            var max_height = canvas.offsetHeight - icon_height;
            var max_width = canvas.offsetWidth - icon_width;
            var randomCoordinate = function(){
                var r = [];
                var x = Math.floor( Math.random() * max_width );
                var y = Math.floor( Math.random() * max_height );
                r = [x,y];
                return r;
            };
            var createImage = function(){
                var node = icon_template.cloneNode(true);
                var xy = randomCoordinate();
                node.removeAttribute('id');
                node.removeAttribute('hidden');
                node.style.top = xy[1] + 'px';
                node.style.left = xy[0] + 'px';
                node.setAttribute('src',pickRandomImage());
                canvas.appendChild(node);
            };
            for (var i=0;i<total_number_of_images;i++){
                createImage();
            };
        };
       window.addEventListener('load',init);
       
})(window,document);

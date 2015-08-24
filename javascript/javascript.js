(function($){
	$.fn.percentPie = function(options){

		var settings = $.extend({
			width: 100,
			trackColor: "EEEEEE",
			barColor: "777777",
			barWeight: 30,
			startPercent: 0,
			endPercent: 1,
			fps: 60
		}, options);

		this.css({
			width: settings.width,
			height: settings.width
		});

		var that = this,
			hoverPolice = false,
			canvasWidth = settings.width,
			canvasHeight = canvasWidth,
			id = $('canvas').length,
			canvasElement = $('<canvas id="'+ id +'" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas>'),
			canvas = canvasElement.get(0).getContext("2d"),
			centerX = canvasWidth/2,
			centerY = canvasHeight/2,
			radius = settings.width/2 - settings.barWeight/2;
			counterClockwise = false,
			fps = 2500 / settings.fps,
			update = .01;
			this.angle = settings.startPercent;

		this.drawArc = function(startAngle, percentFilled, color){
			var drawingArc = true;
			canvas.beginPath();
			canvas.arc(centerX, centerY, radius, (Math.PI/180)*(startAngle * 360 - 90), (Math.PI/180)*(percentFilled * 360 - 90), counterClockwise);
			canvas.strokeStyle = color;
			canvas.lineWidth = settings.barWeight;
			canvas.stroke();
			drawingArc = false;
		}

		this.fillChart = function(stop){
			var loop = setInterval(function(){
				hoverPolice = true;
				canvas.clearRect(0, 0, canvasWidth, canvasHeight);

				that.drawArc(0, 360, settings.trackColor);
				that.angle += update;
				that.drawArc(settings.startPercent, that.angle, settings.barColor);

				if(that.angle > stop){
					clearInterval(loop);
					hoverPolice = false;
				}
			}, fps);
		}
		
		this.fillChart2 = function(stop){
			var loop = setInterval(function(){
				hoverPolice = true;
				canvas.clearRect(0, 0, canvasWidth, canvasHeight);

				that.drawArc(0, 360, settings.trackColor);
				that.angle += update;
				that.drawArc(settings.startPercent, that.angle, settings.barColor);

				if(that.angle > stop){
					clearInterval(loop);
					hoverPolice = false;
				}
			}, fps);
		}

		this.mouseover(function(){
			if(hoverPolice == false){
				that.angle = settings.startPercent;
				that.fillChart(settings.endPercent);
				that.fillChart2(settings.endPercent);
			}
		});

		this.fillChart(settings.endPercent);
		this.fillChart2(settings.endPercent);
		this.append(canvasElement);
		return this;
	}
}(jQuery));

$(document).ready(function() {
  	$(window).scroll(function(){
	  //var bebas
	  var scrollNow = $(window).scrollTop();
	  
	  //tinggi yang diinginkan
	  var scrollTop = 2910;
	  
	  if(scrollNow > scrollTop){
		  //alert("effect dijalankan");
		  $(".chart").mouseover();
		  $(".chart2").mouseover();
	  }else{
		  //alert("effect dihapus");
	  }
  });
	$('.pie4').percentPie({
		width: 230,
		trackColor: "#e0d3d3",
		barColor: "#f78b8b",
		barWeight: 42,
		endPercent: .75,
		fps: 60
	});
  
  $('.pie3').percentPie({
		width: 230,
		trackColor: "#e0d3d3",
		barColor: "#f78b86",
		barWeight: 42,
		endPercent: .8,
		fps: 60
	});
  
  $('.pie2').percentPie({
		width: 230,
		trackColor: "#e0d3d3",
		barColor: "#f78b86",
		barWeight: 42,
		endPercent: .85,
		fps: 60
	});
    $('.pie1').percentPie({
		width: 230,
		trackColor: "#e0d3d3",
		barColor: "#f78b86",
		barWeight: 42,
		endPercent: .8,
		fps: 60
	});
    
});

//validation form
function validation()
			{
				var name = document.getElementById("name").value;
				var email = document.getElementById("email").value;
				var address = document.getElementById("message").value;				
				var error = document.getElementById("msg");
				
				
				var email=document.getElementById("email").value;
				var atpos=email.indexOf("@");
				var dotpos=email.lastIndexOf(".");
				
				var abc = "0123456789`~@#$%^&*()-_;:',.<>\\/";
				var name = document.getElementById("name").value;
				var Checkname;
				var check = true;
		
				for (i=0 ; i<name.length ; i++)
				{
					Checkname = name.charAt(i);
					for (z=0;z<abc.length;z++)
					{
						if(Checkname==abc.charAt(z))
						{
							check=false;
							break;
						}
					}
				}		
				//Validasi Name
				if(name == "")
				{					
					error.innerHTML = "*Name must be filled.";
					return false;
				}
				else if(name.length < 3 || name.length > 20)
				{
					error.innerHTML = "*Name must be between 3 to 20 characters.";
					return false;
				}
				else if(check==false)
				{
					error.innerHTML = "*Name must be alphabets.";
					return false;
				}
				//Validasi Email
				else if	(email == "" && atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
				{
					error.innerHTML = "*Not a valid e-mail address.";
					return false;
				}
				//Validasi Message
				else if(message == "")
				{					
					error.innerHTML = "*Message must be filled.";
					return false;
				}
			}
			
//smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//active
$(document).ready(function(){
	$("a.btn").click(function() {
		$("a.btn.active").removeClass("active");
		$(this).addClass("active");
	});
});

//parallax scrolling
$(document).ready(function() {
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;

<!----- JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE #DIV--->   
         $(this).click(function() {
            $("#nav li a").removeClass("active");
            $(this).addClass('active');
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });
      }
    }
  });

});
//content 1 text effect
$(document).ready(function() {
		var animasi1 = $(".animationBlockA01");
		var animasi2 = $(".animationBlockA02");
		var animasi3 = $(".animationBlockA03");
		
		animasi3.show("slow").delay(100).animate({
				opacity: "1"
			}, 1000);
			animasi1.show("slow").delay(150).animate({
				opacity: "1"
			}, 1500);
			animasi2.show("slow").delay(200).animate({
				opacity: "1"
			}, 2000);
});
//lightbox
$(document).ready(function(){
  $("#show-panel").click(function(){
    $("#lightbox, #lightbox-panel").fadeIn(300);
  });
  $("#show-panel2").click(function(){
    $("#lightbox, #lightbox-panel2").fadeIn(300);
  });
    $("#close-panel").click(function(){
    $("#lightbox, #lightbox-panel").fadeOut(300);
  });
  $("#close-panel2").click(function(){
    $("#lightbox, #lightbox-panel2").fadeOut(300);
  });
});

//resize navigation
$(document).on("scroll",function(){
    $(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("header").removeClass("large").addClass("small");
    } else{
        $("header").removeClass("small").addClass("large");
    }
});
});
		
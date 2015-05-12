	var score = 100;
	var colors = Array("colour1","colour2","colour3","colour4","colour5","colour6","colour7","colour8");
	var colorSet =  colors.concat(colors);
	var cardFlag = 0;
	var openCard='';
	var openCardID='';
	var Opencount =0;
	
$(document).ready(function(){

	preloader();
	reset();
	
	$("#cardCont .cell").on('click',function(){
			if($(this).hasClass('closed')&& openCardID !=$(this).attr('id')){
				showCard($(this));
				if(!cardFlag){				
					openCard = $(this);
					openCardID = $(this).attr('id');
					cardFlag =1;
				}else {
					col1 = openCard.data('color');
					col2 = $(this).data('color');
					
					if(col1 != col2){
						setTimeout(hideCards, 500);
						cardFlag =0; 
						openCard ='';
						openCardID='';
						scoreCard(-1);  //Reduce Point
					}else{
						
						$(this).removeClass('closed');
						$(this).removeClass('selected');
						openCard.removeClass('closed');
						openCard.removeClass('selected');
						cardFlag =0; 
						openCard ='';
						openCardID='';
						Opencount++;
						scoreCard(+2);  //Add point
						
						if(Opencount==8){
								complete();
								
						}
					}
					
				}
			}
			
			
	});
	$('.reset').on('click',function(){
		reset();	
	});	
	$('.resetForm').on('click',function(){
		$('.container' ).removeClass('disable');
		$('.submitForm' ).hide();	
		reset();	
	});
	$('#submitScoreForm').on('submit',function(event){
			
			var fullName = $('#submitScoreForm input[name="fullname"]').val();
			var email = $('#submitScoreForm input[name="email"]').val();
			
			if(fullName != '' && email!=''){
				var frm = Array();
				frm['email'] = email;
				frm['name'] = fullName;
				
				var data = {
					"action": "saveData"
				};
				data = $(this).serialize() + "&" + $.param(data);
    
				$.ajax({
						url : "form.php",
						type: "POST",
						data :data, 
						success: function(resp){
							htm = '<p>'+resp+'</p><input type="button" value="Restart"  class="resetForm myButton" ></p>';
							
							$(".submitForm").hide();
							$(".submitFormResponse").html(htm);
							$(".submitFormResponse").show();
							$('.resetForm').on('click',function(){
								$('.container' ).removeClass('disable');
								$('.submitFormResponse' ).hide();	
								reset();	
							});
						}
						
			});
			
			}else {
					alert("Please fill the details");
			}
			event.preventDefault();
	});
});


function complete(){
	$('.container' ).addClass('disable');	
	$('#scoreVal' ).attr("value",score);
	$('.submitForm' ).show();
	
	
}
function scoreCard(val){
	score = score + val;
	if(score <0) score = 0;
	$('.score').html(score);
}

function reset(){
	var newColorSet =  colorSet.slice(0);;
	shuffle(newColorSet);	
	console.log(newColorSet);
	hideCards();
	assign(newColorSet);
	score =100;
	cardFlag = 0;
	openCard='';
	openCardID='';
	Opencount =0;
	scoreCard(0);
	
}
function hideCards(){
	$('#cardCont .cell.closed').each(function(){				
				$(this).css("background-image",'url(img/card_bg.gif)');
				$(this).removeClass('selected');
		});
}
function showCard(cellobj){
	
	cellobj.addClass("selected");
	color = cellobj.data('color');
	cellobj.css("background-image",'url(img/'+color+'.gif)');
}
function assign(popColorSet){
		$('#cardCont .cell').each(function(){				
				 col = popColorSet.pop();
				 $(this).data('color', col);
				 $(this).removeClass('selected');
				 $(this).addClass('closed');
				 $(this).css("background-image",'url(img/card_bg.gif)');
		});
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function preloader() {
	if (document.images) {
		var imgs = Array();
		var img1 = new Image();
		for(xx=1;xx<=8; xx++){
			
			imgs[xx] = new Image();
			imgs[xx].src = "img/colour"+xx+".gif";
		
		}
	}
}
window.onload = function() {
  shuffle();
};

function shuffle()
{

	$.ajax({
	 url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/shuffle/',
		type:"get",
		success: (function(data){
			for (var i; i < mid; i++)
			{
				$('#mid' + mid).attr('src', "");
			}

			mid = 1;
				getCard();
			})
	});

}

function getCard()
{

			//Send to php
			$.ajax({
			 // url:'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
			 url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/draw/?count=4',
			  type:"get",
			 // data: {}})
			  //contentType:"application/json; charset=utf-8",
			  //dataType:"text",
			  success: (function(data){
					//alert("server says " + msg);
			//alert(data);
			//$('#poke').src=data.cards[0].image;
			$('#poke1').attr('src', data.cards[0].image);
			$('#poke2').attr('src', data.cards[1].image);
			$('#op1').attr('src', data.cards[2].image);
			$('#op2').attr('src', data.cards[3].image);

		})
	});

}

var mid = 1;

function flop()
{
	$.ajax({
	 url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/draw/?count=1',
		type:"get",
		success: (function(data){
			$('#mid' + mid).attr('src', data.cards[0].image);
			mid++;
			})
	});

}

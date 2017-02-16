console.log('connected');

var counter = 0;

$('.buyButton').click(function(){
  $('buyButton').css('color', 'blue').css('font','50px').html('Add to cart!');
});

$('.buyButton').click(function(){
        var $this = $(this);
        $this.toggleClass('buyButton');
        if($this.hasClass('buyButton')){
            $this.text('Buy Now');
        } else {
            $this.text('Add to Cart');
        }
    });

$(".buyButton").click(function(){
  counter++;
  $("#item").text(counter);
});

//trying to figure out how to click on the tabs and get them to appear
$(".size").click(function(){
    $("#size").css("display", "block");
});

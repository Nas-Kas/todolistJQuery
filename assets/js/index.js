//check off li by clicking
//important concept below on is diff from click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to delete 
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	})
	event.stopPropagation();
});

// if user hits enter create a new todo
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
	var newTodo = $(this).val();
	 
//make a new li look up append
	$("ul").append("<li><span><i class='fa fa-trash-o'></i></span>" + newTodo +  "</span></li>");
	$(this).val("");
	}	
});
//toggleInput
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});
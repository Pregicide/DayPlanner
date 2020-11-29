$(document).ready(function(){

    $(".saveBtn").on("click",function(){   
        
        var calenderInput = $(this).siblings(".textInput").val() 
        
        var selectedHour = $(this).parent().attr("id") 
       
        localStorage.setItem(selectedHour, calenderInput) 
        console.log("this is logged")
    })



    function updateTimeBlock(){
        
        var currentHour = moment().hours(); 
      
        $(".calendar-row").each(function(){
        
        var timeBlock = parseInt($(this).attr("id").split("-")[1])
    
     
        if (timeBlock < currentHour){
            $(this).addClass("past") 
        }
        else if (timeBlock === currentHour){
            $(this).addClass("present") 
            $(this).removeClass("past")
        }
        else {
            $(this).addClass("future")
            $(this).removeClass("past")
            $(this).removeClass("present")
        }
        })
        }


    updateTimeBlock()
    $("#Hour1 .textInput").val(localStorage.getItem("timeOne"))
    $("#Hour2 .textInput").val(localStorage.getItem("timeTwo"))
    $("#Hour3 .textInput").val(localStorage.getItem("timeThree"))
    $("#Hour4 .textInput").val(localStorage.getItem("timeFour"))

$("#currentDay").text(moment().format("MMMM Do YYYY")); 
});

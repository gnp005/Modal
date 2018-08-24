$(document).ready(()=>{
  $('#Modal').click(()=>{
    $('.text').addClass("hide")
    // $('#Modal').css("display","none")
    $('.modal-hidden').removeClass("modal-hidden").addClass("modal")
  })

  $("#Close").click(()=>{
    $(".modal").removeClass("modal").addClass("modal-hidden")
    $(".text").removeClass("hide")
  })
})

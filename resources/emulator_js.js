                  $(document).ready(function(){
                    $("button").click(function(){
                      console.log($("#test").val()); 
                      //$("#obj").attr("src", $("#test").val());
                      $("#obj_iphone6").hide();
                      $("#obj_iphone5").hide();
                      $("#obj_motog").hide();
                      $("#obj_nexus5").hide();

                      if ($(":selected").val() === "iphone6"){ 
                          console.log("iphone6");
                          $("#obj_iphone6").attr("src", $("#test").val());
                          $("#obj_iphone6").show();
                          $("#iphone6").show(); 
                          $("#iphone5").hide();
                          $("#motog").hide();
                          $("#nexus5").hide();
                        }
                      if ($(":selected").val() === "iphone5") {
                          console.log("iphone5");
                          $("#obj_iphone5").attr("src", $("#test").val());
                          $("#obj_iphone5").show(); 
                          $("#iphone5").show();
                          $("#iphone6").hide();
                          $("#motog").hide();
                          $("#nexus5").hide();
                      }
                      if ($(":selected").val() === "motog") {
                          console.log("motog");
                          $("#obj_motog").attr("src", $("#test").val());
                          $("#obj_motog").show();
                          $("#motog").show();
                          $("#iphone5").hide();
                          $("#iphone6").hide();
                          $("#nexus5").hide();
                      }
                      if ($(":selected").val() === "nexus5"){ 
                          console.log("nexus5");
                          $("#obj_nexus5").attr("src", $("#test").val());
                          $("#obj_nexus5").show(); 
                          $("#nexus5").show();
                          $("#iphone5").hide();
                          $("#motog").hide();
                          $("#iphone6").hide();
                        }
    });
           
});
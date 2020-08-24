function submit() 
    {
      const checkboxes = document.querySelectorAll(`input[name="item"]:checked`);
      let values = [];

      checkboxes.forEach((checkbox) => 
      {
        values.push(checkbox.value);
        if(checkbox.value=="toothbrush" || checkbox.value=="whisk" || checkbox.value=="fish")
        {
          document.getElementById("alert1").style.display="block";
        }
      });

      var correct = ["calculator","pcase","sandwich","notebook","hsan"];
      var success = true;
      var i;
      for (i=0; i < 4; i++){
        if (values[i] != correct[i]){
          success = false;
        }
      }

      if (success == true && values.length == 5){
        document.getElementById("success").style.display="block";
        setTimeout(function(){
          window.location.replace("bus.html");
        }, 2000);
      } 

      else{
        document.getElementById("alert2").style.display="block";
      } 
    }
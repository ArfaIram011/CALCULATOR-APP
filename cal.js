var history_value = document.getElementById('in');
var output = document.getElementById('ans');
function calculate() {


    try {
        output.value = eval(history_value.value);
        

        //  document.getElementById('ans').value=eval(document.getElementById('in').value);
    }

    catch {
        alert('invalid input');
        history_value = "";
    }
    
}
console.log(history_value.value);

  document.getElementById('delete').onclick=function() {
    history_value.value = history_value.value.slice(0,-1);
  }

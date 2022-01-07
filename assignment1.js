
               function calculate(operation){
                    var first = parseInt(document.getElementById('first').value);
                    var second = parseInt(document.getElementById('second').value);
                    var ans;
                    switch (operation) {
                         case "+":
                              ans = first + second;
                              break;
                    
                         case "-":
                              ans = first - second;
                              break;
                    
                         case "*":
                              ans = first * second;
                              break;
                    
                         case "/":
                              if(first != 0 && second != 0){
                                   ans = first / second;
                              }else{
                                   ans = 'Please enter correct value';
                              }
                              break;
                    
                         default:
                              ans ="error";
                              break;
                    }
                    var setAns = document.getElementById('answer');
                    setAns.value = ans;
               }

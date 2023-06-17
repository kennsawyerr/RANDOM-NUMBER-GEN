
let btn = document.getElementById('btn');
let output= document.getElementById('outputtext');
let number = [Math.floor(Math.random() * 10) + 1];

console.log(number)

btn.addEventListener('click', function() {
    let input = document.getElementById('userinput').value;

    if(input == number){
        output.innerHTML ='You guessed correctly. The number is ${number}'
    }

     else if ( input < number) {
        output.innerHTML = `No. Too Low`
     }

      if (input > number)
        {  output.innerHTML = `NO. Too High`

    };
}) ; 


/* math.floor rounds it to a whole number 
   math.random generates a number between 0 and 1 with decimals. You need to use * 6 to multiply it to a  bigger number. see more from this link:  https://youtube.com/watch?v=UZqSpuUJPa0&feature=shares
*/
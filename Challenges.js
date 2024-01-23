var txtTitle = document.getElementById('txtTitle');
var txtChallenge = document.getElementById('txtChallenge');

var Title = [
    "Compute Days to Seconds", 
    "Simple Chat Bot",
    "Total Price",
    "Sum",
    "Simple Calculator",
    "Conductor Tickets",
    "Coffee Machine",
    "Countdown",
    "Vowel Counter",
    "Text Reverse"
];

var Challenge = [
    "Create a program that converted the number of input days into seconds. <br><br>--- Example Output --- <br>Num of Days : 2 <br>172800", 
    "Create a simple chat bot program that requires the user to input time and his/her name.  <br><br>--- Example Output ---  <br>What is  your name? : John Doe <br>What time is it? : 9:32 AM <br>Good Morning, John Doe!",
    "You are making an app for an online Shopping portal. <br>Create a program to calculate and output the total of the order. <br><br>--- Example Output --- <br>Order #1 : 140.5 <br>Order #2 : 74.45 <br>Order #3 : 22.32 <br>Total : 237.27",
    "Create a program that calculates the sum of the numbers 1 to N, where N is taken from input. For example, when N is equal to 5, the output should be 15, because 1+2+3+4+5=15.",
    "Create a simple calculator program that will add, subtract, multiply, and divide two numbers input by a user.",
    "Create a program that requires the age of the passenger and define if he/she is free, discounted, or regular.<br><br>> Free - Ages 0-7<br>> Discounted - 60 and above<br>> Regular - 8-59 yrs old",
    "Create a program that outputs the correct coffee type based on the user's choice.<br><br>Types of coffee: <br>1. Espresso<br>2. Americano<br>3. Cappuccino<br>4. Latte",
    "Create a timer program that will take the number of seconds as input, and coutdown to 0.<br>Sample output for input 5: <br>5<br>4<br>3<br>2<br>1<br>0",
    "Write a program that counts the number of vowels from user's input text.  <br><br>--- Example Output --- <br>Enter words : Hello World <br>Vowels : 3",
    "Take a word in English that you would like to say, and make it reversed.  <br><br>--- Example Output --- <br>Enter words : Hello World <br>Result : dlroW olleH"
];



//Load
function onload(){ 
    var random = Math.floor(Math.random() * Title.length);
    console.log("Hello World " + random);
    //var random = Title.length - 1;
    txtTitle.innerHTML = Title[random];
    txtChallenge.innerHTML = Challenge[random];
}

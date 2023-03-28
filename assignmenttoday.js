
</head>

<body>
 <input type="text" />
<script>
     
    {/* write a progam that takes a number as input and checks if its a positive, negative, or zero. The proogram should log a message to the 
    console and indicates whether the number is positive, negative, or zero 
      */}
    const input = prompt();
    const value -= parsefloat(input);

    checkNumber();
    function checkNumber() {
        if(isNaN(input)) return console.error ("you did not enter a number");
        else if (input.length == 0) return console.error("you entered nothing");
        else if (value >= 1) console.log("This is a positive number");
        else if (value == 0) console.log("This is zero");
        else if (value < 0) console.log("This is a negative number");
        else console.error("invalid number");
    }
</script>


</body>
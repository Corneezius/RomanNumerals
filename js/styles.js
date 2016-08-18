// front end logic

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();




  var romanArray = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];
  var regularNumbers = ["1","2","3","4","5","6","7","8","9","10"];
  var userInput = "8";
  var currentIndex = 0;

  regularNumbers.forEach(function(currentInteger) {
    	if (userInput === currentInteger) {
      currentIndex = regularNumbers.indexOf(currentInteger);
      };
    });
   var outputRoman = romanArray[currentIndex];

   console.log(outputRoman);

	//for (index = 0; index <= 10; index += 1) {
  	//romanArray[index]
  }

}
var userInput = parseInt($("#inputNumber").val()); {
      if (isNaN(userInput)) {
      $(".output").text("Please Enter an actual valid number!");
    }
      else if (userInput === 1) {
      $(".output").text("I");
    }
      else if (userInput === 2) {
      $(".output").text("II");
    }
      else if (userInput === 3) {
      $(".output").text("III");
    }
      else if (userInput === 4) {
      $(".output").text("IV");
    }
      else if (userInput === 5) {
      $(".output").text("V");
    }
      else if (userInput === 6) {
      $(".output").text("VI");
    }
      else if (userInput === 7) {
      $(".output").text("VII");
    }
      else if (userInput === 8) {
      $(".output").text("VIII");
    }
      else if (userInput === 9) {
      $(".output").text("IX");
    }
      else if (userInput === 10) {
      $(".output").text("X");
    }

  };


    // alert(userInput);

  });
});

// if (isNaN(year)) {
//        $(".determinalized").append(" not a numeric value. Please try again.")
//      } else {
//
//        var yearOutput = leapYear(year);
//
//        $(".determinalized").empty();
//
//        $(".determinalized").append(yearOutput);
//      }
//    });
//  });

// back end logic
//
//  function leapYear(year) {
//    if (year < -45) {
//      return " earlier than when leap years were established.";
//    } else if (year % 400 === 0) {
//      return " indeed a leap year!";
//    } else if (year % 100 === 0) {
//      return " not a leap year.";
//    } else if (year % 4 === 0) {
//      return " indeed a leap year!";
//    } else {
//      return " not a leap year.";
//    }
//  };
// Contact GitHub API Training Shop Blog About
//
//
//   });
// });

// back end logic

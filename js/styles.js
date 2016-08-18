// front end logic

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#inputNumber").val()); {
      if (userInput === 1) {
      $(".output").text("I");
    
    };
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

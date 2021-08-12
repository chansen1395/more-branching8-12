$(document).ready(function () {

  $("#formTriangle").submit(function (event) {
    event.preventDefault();
    var sideA = parseFloat($("input#sideA").val());
    var sideB = parseFloat($("input#sideB").val());
    var sideC = parseFloat($("input#sideC").val());


    // alert(sideA);
    // alert(sideB);
    // alert(sideC);

    // Hide all 4 in one statement if the user changes input and resubmits.
    $("#equTri,#isoTri,#scaTri,#notTri").hide();

    // Old code, hiding with multiple statements.
    // $("#isoTri").hide();
    // $("#scaTri").hide();
    // $("#notTri").hide();

    $("#showResult").show();
    if (sideA === sideB && sideB === sideC) {
      $("#equTri").show();

    } else if ((sideA === sideB) && (sideA != sideC)
        || (sideA === sideC) && (sideA != sideB)
        || (sideB === sideC) && (sideB != sideA)) {
        $("#isoTri").show();

    } else if ((sideA != sideB) && (sideA != sideC)) {
      $("#scaTri").show();

    } else {
      $("#notTri").show();
    }

    $("#btnReset").click(function () {
      location.reload();
    });
  });

});



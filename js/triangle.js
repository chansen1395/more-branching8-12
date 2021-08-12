$(document).ready(function () {

  $("#formTriangle").submit(function (event) {
    event.preventDefault();
    var sideA = parseFloat($("input#sideA").val());
    var sideB = parseFloat($("input#sideB").val());
    var sideC = parseFloat($("input#sideC").val());
    alert(sideA);
    alert(sideB);
    alert(sideC);

    // isEqu(sideA, sideB, sideC);
    //   if (sideA === sideB === sideC) {
    //     const equ = true;
    //     return equ;
    //   }
      
    // isIso(sideA, sideB, sideC);
    // isSca(sideA, sideB, sideC);


    $("#showResult").show();
    if (sideA === sideB && sideB === sideC) {
      // $("#formRadio1").hide();
      $("#equTri").show();

    } else if ((sideA === sideB) && (sideA != sideC)
        || (sideA === sideC) && (sideA != sideB)
        || (sideB === sideC) && (sideB != sideA)) {
        // $("#formRadio1").hide();
        $("#isoTri").show();

    } else if ((sideA != sideB) && (sideA != sideC)) {
      // $("#formRadio1").hide();
      $("#scaTri").show();

    } else {
      $("#notTri").show();
    }

    $("#btnReset").click(function () {
      location.reload();
    });
  });

  // $("#formRadio2").submit(function (event) {
  //   event.preventDefault();
  //   const food = $("input:radio[name=answer2]:checked").val();
  //   if (food === "kermit") {
  //     $("#formRadio2").hide();
  //     $("#formRadio3").show();
  //     return kermit++;
  //   } else if (food === "mspiggy") {
  //     $("#formRadio2").hide();
  //     $("#formRadio3").show();
  //     return mspiggy++;
  //   } else if (food === "chef") {
  //     $("#formRadio2").hide();
  //     $("#formRadio3").show();
  //     return chef++;
  //   } else {
  //   }
  // });


  // $("#formRadio3").submit(function (event) {
  //   event.preventDefault();
  //   const home = $("input:radio[name=answer3]:checked").val();
  //   if (home === "kermit") {
  //     kermit++;
  //     $("#formRadio3").hide();
  //     // alert(kermit);
  //     // alert(mspiggy);
  //     // alert(chef);

  //   } else if (home === "mspiggy") {
  //     mspiggy++;
  //     $("#formRadio3").hide();
  //     // alert(kermit);
  //     // alert(mspiggy);
  //     // alert(chef);
  //   } else if (home === "chef") {
  //     chef++;
  //     $("#formRadio3").hide();
  //     // Test whether scores are being tabulated
  //     // alert(kermit);
  //     // alert(mspiggy);
  //     // alert(chef);   
  //   } else {
  //   }
  //   // Calculate and show Results
  //   $("#showResult").show();
  //   if (kermit >= 2) {
  //     // alert("testfrog");
  //     $("#kermitResult").show();
  //   } else if (mspiggy >= 2) {
  //     // alert("testpig");
  //     $("#mspiggyResult").show();
  //   } else if (chef >= 2) {
  //     // alert("testchef");
  //     $("#chefResult").show();
  //   } else {
  //     // $("#showResult").hide();
  //     $("#noResult").show()
  //     // alert("testno");
  //   }

  //   // adds a reset button at the end of the quiz.
  //   $("#btnReset").click(function () {
  //     location.reload();
  //   });

});



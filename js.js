$(document).ready(function() {
  const words = [
    {en: "obsession", uk: "одержимість"},
    {en: "silent", uk: "мовчазний"},
    {en: "eternity", uk: "вічність"},
    {en: "talkative", uk: "говіркий"},
    {en: "freedom", uk: "свобода"},
    {en: "adventure", uk: "пригода"},
    {en: "loyalty", uk: "вірність"},
    {en: "wisdom", uk: "мудрість"},
    {en: "courage", uk: "відвага"},
    {en: "happiness", uk: "щастя"}
  ];
  
  let array = words.sort(() => 0.7 - Math.random()); 
  let Ind = 0;
  let right = 0;
  let incorrect = 0;

  
  function updating() {
    $("#words").text(array[Ind].en); 
    $("#number").text(Ind + 1); 
    $("#all").text(words.length); 
    $("#correctly").text(right); 
    $("#wrongly").text(incorrect); 
    $("#write").val(""); 
  }

  
  $("#check").click(function() {
    const answer = $("#write").val().trim().toLowerCase();
    const correct = array[Ind].uk.toLowerCase();
    if (answer == correct) {
      right++;
    } else {
      incorrect++;
    }
    Ind++;
    if (Ind < words.length) {
      updating();
    } else {
      result();
    }
  });

 
  $("#write").keypress(function(event) {
    if (event.which === 13) { 
      $("#check").click(); 
    }
  });

  // Result and modal display
  function result() {
    const score = (right / words.length) * 100;
    let sms = `Your level is: ${score.toFixed(1)}%`;
    if (score >= 85) {
      sms += " C1 level";
    } else if (score >= 60) {
      sms += " B2 level";
    } else {
      sms += " B1 level. Take more extra lessons";
    }
    $(".content").prepend(`<p>${sms}</p>`);
    $("#modalw").fadeIn();
  }


  $("#close").click(function() {
    $("#modalw").fadeOut();
  });

  $("#reset").click(function() {
    Ind = 0;
    right = 0;
    incorrect = 0;
    array = words.sort(() => 0.7 - Math.random()); 
    updating();
    $("#modalw").fadeOut(); 
  });


  $("#next").click(function() {
    if (Ind < words.length - 1) {
      Ind++;
      updating();
    }
  });

 
  $("#prev").click(function() {
    if (Ind > 0) {
      Ind--;
      updating();
    }
  });

 
  updating();
});

/*!
 * HTML Editor by Learn Computer Academy
 * app.js
 * Copyright 2019 LCA
 */
$(document).ready(function(){

  // <head></head> element must be exist in HTML panel.
  function appendJSLib(txt) {
  var textArea=codeeditorhtml.getValue();
	var searchText = textArea.search("<head>");
	if(searchText>0) {
	txt = "<head>"+"\n"+txt;
	var updatedTextArea = textArea.replace("<head>",txt);
	codeeditorhtml.setValue(updatedTextArea);
	}
	else {
	reset();
	alert("<head> is missing, please write <head></head> element to confirm.");
	txt = txt+textArea;
	codeeditorhtml.setLine(0, txt);
	return false;
	}
 }

  // HTML, CSS and Javascript Libraries
  $(function() {

  // add your custom HTML, CSS and Javascript Library

	// Bootstrap 3    // This is bootstrap library Example
  // set your custom ID (#bootstrap3 is the ID) then, refer to index.html, find the menu, it should be match this ID
	$("#bootstrap3").click(function() {
	// Put your tags between single quotes (' ') the quotes before + sign
	txt ='<meta charset="utf-8" />' + "\n";   /*  <meta charset="utf-8" /> is inside single quotes */
	txt +='<meta name="viewport" content="width=device-width, initial-scale=1.0" />' + "\n";
	txt +='<link rel="stylesheet" href="files/bootstrap/bootstrap.min.3_3_7.css" />' + "\n";
  txt +="  <"+"script src=\"files/jquery/jquery-3.3.1.min.js\">"+"</"+"script"+">"+"\n";
	txt +='<script src="files/bootstrap/bootstrap.min.3_3_7.js"></script>' + "\n";
  // need more line? just add the following (remove comment //):
  // txt +=' ' + "\n";
	appendJSLib(txt);  });
  // End bootstrap library

	// Bootstrap 4
	$("#bootstrap4").click(function() {
	txt ="  <"+"meta charset=\"utf-8\""+" />"+"\n";
	txt +="  <"+"meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\""+" />"+"\n";
	txt +="  <"+"link rel=\"stylesheet\" href=\"files/bootstrap/bootstrap.min.4_3_1.css\""+" />"+"\n";
	txt +="  <"+"script src=\"files/jquery/jquery-3.3.1.min.js\">"+"</"+"script"+">"+"\n";
	txt +="  <"+"script src=\"files/bootstrap/bootstrap.min.4_3_1.js\">"+"</"+"script"+">";
	appendJSLib(txt);  });

	// normalize.css
	$("#normalizecss").click(function() {
	txt ="   <"+"link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css\""+"/>";
	appendJSLib(txt);  });

  // fontawesome.css
	$("#fontawesome").click(function() {
	txt ="   <"+"link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\""+"/>";
	appendJSLib(txt);  });


  // foundation
	$("#foundation").click(function() {
	txt ="  <"+"meta charset=\"utf-8\""+" />"+"\n";
	txt +="  <"+"meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\""+" />"+"\n";
	txt +="  <"+"link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/css/foundation.min.css\""+" />"+"\n";
	txt +="  <"+"script src=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js\">"+"</"+"script"+">"+"\n";
	txt +="  <"+"script src=\"https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/js/foundation.min.js\">"+"</"+"script"+">";
	appendJSLib(txt);  });

  // materialize
	$("#materialize").click(function() {
	txt ="  <"+"meta charset=\"utf-8\""+" />"+"\n";
	txt +="  <"+"meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\""+" />"+"\n";
	txt +="  <"+"link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\""+" />"+"\n";
  txt +="  <"+"script src=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js\">"+"</"+"script"+">"+"\n";
	txt +="  <"+"script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\">"+"</"+"script"+">";
	appendJSLib(txt);  });

	// jQuery
  // v 1x
	$("#jquery1").click(function() {
	txt ="  <"+"script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\">"+"</"+"script"+">"+"\n";
	appendJSLib(txt);  });
  // v 2x
	$("#jquery2").click(function() {
	txt ="  <"+"script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js\">"+"</"+"script"+">"+"\n";
	appendJSLib(txt);  });
  // v 3x
  $("#jquery3").click(function() {
	txt ="  <"+"script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\">"+"</"+"script"+">"+"\n";
	appendJSLib(txt);  });

  // jQuery UI
  $("#jqueryui").click(function() {
 	txt ="  <"+"link rel=\"stylesheet\" href=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css\""+"/>"+"\n";
	txt +="  <"+"script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\">"+"</"+"script"+">"+"\n";
	txt +="  <"+"script src=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js\">"+"</"+"script"+">"+"\n";
	appendJSLib(txt);  });

});
    // Lorem Ipsum
    $('#generator-ipsum').click(function() {
    	codeeditorhtml.replaceSelection("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ipsum eu felis iaculis facilisis. Proin finibus libero sem, vitae tincidunt magna sodales eget. Nulla pretium molestie dapibus. Duis commodo neque ac libero maximus fringilla. Maecenas vitae metus auctor, accumsan urna a, lacinia nisl. Aenean ornare nec tellus at dignissim. Quisque cursus quis dui et ultricies. Sed congue rutrum semper. Aenean accumsan quis tellus vel pharetra. Quisque rutrum, velit id dapibus aliquet, augue arcu varius turpis, in fringilla mi turpis ultrices lorem. Cras fermentum venenatis lacus, id fringilla ex. Nulla ultrices ex eu erat tempor, sit amet dignissim massa cursus. Sed pulvinar dignissim odio, a fermentum quam gravida sed. Morbi vestibulum eros at metus porttitor, vitae commodo leo consectetur.</p> \n<p>Donec sit amet massa lorem. Aliquam tincidunt blandit risus, at pharetra sem efficitur ut. Mauris sit amet metus dignissim, efficitur risus sit amet, sagittis diam. Vestibulum accumsan lacus vitae eros sodales, ac efficitur enim tincidunt. Etiam a dolor sit amet nisi tristique aliquam. Morbi vitae hendrerit magna. Donec in venenatis odio, eu condimentum libero. Aenean iaculis ligula ut commodo hendrerit. Duis ornare nulla eget bibendum pharetra. Mauris pretium velit ut laoreet lacinia.</p> \n<p>Aliquam gravida justo finibus nisl vulputate congue. Suspendisse mollis ante elit, eu facilisis odio dignissim in. Cras ut interdum velit. Proin ante leo, faucibus ut tristique et, mollis ut lacus. Donec condimentum varius vestibulum. Nam gravida dui sit amet arcu molestie sagittis. Proin tincidunt, lectus sit amet elementum luctus, justo ipsum placerat magna, in vehicula erat dui nec nunc. In varius, lacus quis placerat ultricies, mi tellus molestie nulla, et semper lacus eros vitae diam. Pellentesque ut auctor enim, ut tempor leo. Nunc nec dictum odio, at iaculis libero.</p> \n<p>Donec quis justo mauris. Aenean lobortis, arcu a ornare faucibus, nibh eros sagittis tellus, ut sagittis dui leo eget dui. Aliquam placerat mollis sagittis. Integer arcu lorem, facilisis ut purus sodales, accumsan sodales orci. Nunc odio nisi, ornare quis porta ac, malesuada eget urna. Pellentesque dolor purus, egestas et venenatis ac, rutrum sed nunc. Etiam finibus euismod elit, at rhoncus odio efficitur nec. Nullam felis augue, feugiat nec urna a, efficitur mattis velit. Proin leo libero, rutrum a tempor pharetra, congue quis dolor. Pellentesque eget nisi leo. Phasellus ante purus, ultrices sed imperdiet non, elementum a elit. Morbi ante magna, molestie a euismod ac, tempor in massa. Nunc efficitur hendrerit finibus. Curabitur vel nisi ut ligula sagittis dignissim. Nunc sagittis neque quis aliquet feugiat. Etiam gravida tempor ex vulputate auctor.</p> \n<p>In in aliquet ipsum. Quisque pellentesque purus nec ipsum molestie, sit amet rutrum massa pellentesque. Curabitur nec malesuada nunc, in placerat augue. Praesent a turpis vel tortor fringilla efficitur. Fusce pulvinar, sem vitae tempus ultricies, mauris nisl bibendum purus, sed finibus augue purus quis velit. Vestibulum consequat sed mauris eget tristique. Praesent ornare eros et mi imperdiet, ut suscipit turpis euismod. Nulla eleifend eros nunc, non ornare arcu vestibulum non. Aenean quis velit ut urna tristique venenatis. Proin non pretium est.</p>");
    });

  // Generator  - insert img (dark background)
  $('#insert-img-src1').click(function() {
  	codeeditorhtml.replaceSelection("<img src=\"https://via.placeholder.com/400X100/282923/ffffff?text=LCA+Image\" alt=\"Example Image\" />");
  });

  // Generator - insert img (light background)
  $('#insert-img-src2').click(function() {
  	codeeditorhtml.replaceSelection("<img src=\"https://via.placeholder.com/400X100/EBF3FF/282923?text=LCA+Image\" alt=\"Example Image\" />");
  });

  // Generator  - insert url image
  $('#insert-url-img').click(function() {
  	codeeditorcss.replaceSelection("background: url(\"media/img/bg.jpg\")");
  });

  // Generator  - insert HTML audio tag
  $("#insert-audio").click(function() {
	txt ="<"+"audio preload=\"auto\" controls>"+"\n";
	txt +="  <"+"source src=\"https://www.w3schools.com/html/horse.mp3\" type=\"audio/mpeg\" />"+"\n";
	txt +="  <"+"source src=\"https://www.w3schools.com/html/horse.ogg\" type=\"audio/ogg\" />"+"\n";
	txt +="  <"+"source src=\"myAudio.wav\" type=\"audio/wav\" />"+"\n";
	txt +="  <"+"/"+"audio"+">";
	codeeditorhtml.replaceSelection(txt);  });

    // Generator  - insert HTML video tag
  $("#insert-video").click(function() {
	txt ="<"+"video width=\"320\" preload=\"auto\" controls>"+"\n";
	txt +="  <"+"source src=\"https://www.w3schools.com/html/movie.mp4\" type=\"video/mp4\" />"+"\n";
	txt +="  <"+"source src=\"myVideo.webm\" type=\"video/webm\" />"+"\n";
	txt +="  <"+"source src=\"https://www.w3schools.com/html/movie.ogg\" type=\"video/ogg\" />"+"\n";
	txt +="  <"+"/"+"video"+">"+"\n";
	codeeditorhtml.replaceSelection(txt);  })
});

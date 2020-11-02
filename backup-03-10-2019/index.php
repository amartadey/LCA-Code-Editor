<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="main.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
  <link rel="prerender" href="https://docs.learncomputer.in/" />
  <link rel="shortcut icon" href="https://learncomputer.in/wp-content/uploads/2019/05/cropped-LC-fav.png" />
  <title>LCA Code Editor | Learn Computer Academy</title>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="#"><img src="LCA-code-editor-logo.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
           <button class="btn btn-outline-success m-2 my-sm-0" onclick="window.location.href='https://docs.learncomputer.in/'"><i class="fas fa-file-alt"></i> Back To Docs</button>
          <button id="blob" type="button" class="btn btn-outline-warning" onclick="download_zip()"><i class="fas fa-download fa-1x" ></i>&nbsp;Export</button>
          <button class="btn btn-outline-danger m-2 my-sm-0" onclick="reset_editor()">Clear all&nbsp;<i class="fas fa-trash fa-1x"></i></button>
        </li>
      </ul>
    </div>
  </nav>
  <div class="row no-gutters">
    <div class="col-lg-4 col-sm-12" id="editor-side">
      <div id="html-box">
        <div class="box-heading"><i class="fab fa-html5 fa-1x" style="color:orange"></i>&nbsp;HTML
          <button type="button" id="html_clr" onclick="clear_html()" style="color:red" class="btn btn-link btn-sm"><i class="fas fa-trash fa-1x" style="color:#ff3535"></i></button>
        </div>
        <div class="editor" id="html-editor"></div>
      </div>
      <div id="css-box">
        <div class="box-heading"><i class="fab fa-css3 fa-1x" style="color:#ff41d6"></i>&nbsp;CSS
          <button type="button" id="css_clr" onclick="clear_css()" style="color:red" class="btn btn-link btn-sm"><i class="fas fa-trash fa-1x" style="color:#ff3535"></i></button>
        </div>
        <div class="editor" id="css-editor"></div>
      </div> 
      <div id="js-box">
        <div class="box-heading"><i class="fab fa-js fa-1x" style="color:yellow"></i>&nbsp;JS
          <button type="button" id="js_clr" onclick="clear_js()" style="color:red" class="btn btn-link btn-sm"><i class="fas fa-trash fa-1x" style="color:#ff3535"></i></button>
        </div>
        <div class="editor" id="js-editor"></div>
      </div>
    </div>
    <div class="col-lg-8 col-sm-12" id="preview-box">
      <div class="box-heading">Preview</div>
      <iframe class="preview" id="preview-target">
        <body bg-color=black;>
          
        </body>
      </iframe>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.3.1/ace.js"></script>
  <script src="https://cloud9ide.github.io/emmet-core/emmet.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.3.1/ext-emmet.js"></script>
  <script src="FileSaver.js"></script>
  <script src="jszip.min.js"></script>
  <script>
    var htmlEditor = ace.edit("html-editor");
    htmlEditor.session.setMode("ace/mode/html");
    htmlEditor.setTheme("ace/theme/tomorrow_night");
    htmlEditor.setOption("enableEmmet", true);
    htmlEditor.setFontSize(15);
    htmlEditor.session.setTabSize(2);
  </script>
  <script>
    var cssEditor = ace.edit("css-editor");
    cssEditor.session.setMode("ace/mode/css");
    cssEditor.setTheme("ace/theme/tomorrow_night");
    cssEditor.setFontSize(15);
    cssEditor.session.setTabSize(2);
  </script>
  <script>
    var jsEditor = ace.edit("js-editor");
    jsEditor.session.setMode("ace/mode/javascript");
    jsEditor.setTheme("ace/theme/tomorrow_night");
    jsEditor.setFontSize(15);
    jsEditor.session.setTabSize(2);
  </script>
  <script>
    $(document).ready(function() {
      $('.editor').on('keyup', function() {
        var iframeContent = '<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
          '\n\t\t<style>' + '\n\t\t\t' + cssEditor.getValue() + '\n\t\t</style>' + '\n\t</head>\n\t<body>' + '\n\t' + htmlEditor.getValue() + '\n\t<script>' + '\n\t\t\t' + jsEditor.getValue() + '\n\t<\/script>\n\t</body>\n</html>';
        var target = $('#preview-target')[0].contentWindow.document;
        target.open();
        target.write(iframeContent);
        target.close();
      });
    });
  </script>
  <script>
    var download_zip=function(){
      var zip = new JSZip();
      var html_doc='<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n\t\t<link rel="stylesheet" href="css/style.css">\n\t</head>\n\t<body>\n\t'+htmlEditor.getValue()+'\n\t<script src="js/script.js">\n\t<\/script>\n\t</body>\n</html>';
      zip.file("index.html",html_doc);
      zip.file("css/style.css",cssEditor.getValue());
      zip.file("js/script.js",jsEditor.getValue());
      jQuery("#blob").on("click", function () {
      zip.generateAsync({type:"blob"}).then(function (blob) {
          saveAs(blob, "LCA-Code-Editor.zip");
          }, function (err) {
              jQuery("#blob").text(err);
              });
      });
    }
    var reset_editor=function(){
      htmlEditor.setValue("");
      cssEditor.setValue("");
      jsEditor.setValue("");
      document.getElementById("preview-target").src = "about:blank";
      console.clear();
    }
    var clear_html=function(){
      htmlEditor.setValue("");
    }
    var clear_css=function(){
      cssEditor.setValue("");
    }
    var clear_js=function(){
      jsEditor.setValue("");
    }
  </script>

</body>
</html>
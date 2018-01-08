jQuery(document).ready(function($){

    if($('.add-file').length){
        $('.add-file').change(function() {
           $("#send_button").attr('disabled',true);
           $('.progress').show();

           var file = this.files[0],
                progressPerc = 0,
                data;

           progressPerc = 0;

           if (file) {
                  var xhr = new XMLHttpRequest();

               xhr.upload.onprogress = function(event) {
                    progressPerc = Math.round(event.loaded / event.total * 100);
                    $('#progressBar .progress-bar').css("width", progressPerc+ "%");
                    $('#progressBar .progress-number').css("left", progressPerc + "%").attr("aria-valuenow", progressPerc);
                    // console.log(event.loaded + ' / ' + event.total);
                    // console.log(event);
                    // console.log(file);
                  };
                  
                 xhr.onload = xhr.onerror = function() {
                    if (this.status == 200) {
                      $("#send_button").removeAttr('disabled');  
                      $('.name-file').html('');
                      $('.progress').hide();    
                    } else {
                      $("#send_button").removeAttr('disabled');  
                      // console.log("error" + this.status);
                    }
                  };

                 xhr.open("POST", "/wp-admin/admin-ajax.php", true);
                  xhr.send(file);
            }
        });

       function addFile(fileName) {
            var templ = '<span>' + fileName;
            $('.name-file').html(templ);

       }
        $('body').on('click', '.name-file' , function(){
            $(this).html('No file chosen');
        });
        
       
   };

   });
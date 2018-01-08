jQuery(document).ready(function($){
    //filter date post month
    // $('.table-condensed').on('click','.month',function (e) {//datepicker-days
    //     e.preventDefault();
    //     var mymonth = $(this).html();
    //     // var pagin = $(this).html();
    //     $.ajax({
    //         url:'/wp-admin/admin-ajax.php',
    //         method:'post',
    //         data:{
    //             action:'filter_date_post',
    //             searchm:mymonth
    //             // searchp:pagin
    //         },
    //         success:function(result){
    //             console.log(result);
    //             $('.content-blog').html(result);
    //             // $('.blog-items').html(result);
    //             // window.location.href=window.location.origin+'/thank-you-page';
    //         }
    //     });
    //
    //     // $('body').on('click','#mc-embedded-subscribe');
    // });
    // 
    // 
    var formData = new FormData();
        
    
    $('.table-condensed').on('click','.month',function (e) {//datepicker-days
        e.preventDefault();
        var mymonth = $(this).html();
        window.location.href=window.location.origin+'/date-page/?date-page='+mymonth;

        // $('body').on('click','#mc-embedded-subscribe');
    });

    //pagination
    // $('body').on('click','.pagination ul li a',function (e) {//datepicker-days
    //     e.preventDefault();
    //     var pagin = $(this).html();
    //     $.ajax({
    //         url:'/wp-admin/admin-ajax.php',
    //         method:'post',
    //         data:{
    //             action:'filter_date_post',
    //             searchp:pagin
    //         },
    //         success:function(result){
    //             console.log(result);
    //             $('.content-blog').html(result);
    //             // $('.blog-items').html(result);
    //             // window.location.href=window.location.origin+'/thank-you-page';
    //         }
    //     });
    //
    //     // $('body').on('click','#mc-embedded-subscribe');
    // });

//filter date post day
//     $('.table-condensed').on('click','.day',function (e) {//datepicker-days
//         e.preventDefault();
//         var mymonth = $(this).html();
//         $.ajax({
//             url:'/wp-admin/admin-ajax.php',
//             method:'post',
//             data:{
//                 action:'filter_date_post',
//                 searchd:mymonth
//             },
//             success:function(result){
//                 console.log(result);
// $('.content-blog').html(result);
//                 // window.location.href=window.location.origin+'/thank-you-page';
//             }
//         });
//
//         // $('body').on('click','#mc-embedded-subscribe');
//     });

    $('.add-file').change(function() {
       
        var file = document.getElementById('add-file'),
            formDataLength,
            fileName,
            index,
            lastFormDataObj,
            lastFormDataObjName,
            lastFormDataObjIndex,
            idIndex;

        for ( var i = 0; i < file.files.length; i++ ) {
            formDataLength = 0;
            index = 0;
            for (var pair of formData.entries()) {
                formDataLength++;
                index = formDataLength;
                lastFormDataObj = pair;
            }

            if (formDataLength < 1) {               
                fileName = 'file' + Number(index);
                idIndex = index;
            } else {
                // str.search(/d+/);
                lastFormDataObjName = lastFormDataObj[0];
                regFile = lastFormDataObjName.match(/[0-9]+/);
                lastFormDataObjIndex = Number(regFile[0]);
                idIndex = lastFormDataObjIndex + 1;
                fileName = "file" + idIndex;
            }

            formData.append(fileName, file.files[i], file.files[i].name); 
            $('#file_insert').append('<p>' + file.files[i].name + ' <span id='+ idIndex +'  class="del_icon" data-file-id=' + idIndex + ' > x </span> </p>' );   
        }

        console.log("after adding the entries");
        for (var pair of formData.entries()) {
            console.log(pair);
        }
        console.log("after adding the entries");
    });

    $('#file_insert').click(function(e){
      var file = document.getElementById('add-file'),
          spanToDelete,
          spanParent,
          index,
          fileInsert = document.getElementById('file_insert');

        if(e.target.getAttribute('data-file-id') != null){
            
            index = e.target.getAttribute('data-file-id');
            spanToDelete = document.getElementById(index);
            spanParent = spanToDelete.parentElement
            console.log(index + " is the index of the elem to delete");

            spanParent.parentElement.removeChild(spanParent);
            formData.delete("file" + index);

            //console.log(document.querySelectorAll(".del_icon"));
  
        }      
    });



    //send form footer
    $('#form_id_footer').submit(function (e) {//datepicker-days
        e.preventDefault();
        // $('#form_id_footer').validate();
        // get inputs values

        var services = $('.form .select p.placeholder.select-service').html();
        var Sourcelanguage = $('.form .select p.placeholder.select-language').html();

        var targetlanguage = $('.form .select.target-language .placeholder').html();

        var subject = $('.form .select p.placeholder.subject').html();
        var inputTextFirst = $('.form input[type="text"].mytextf').val();
        var inputTextLast = $('.form input[type="text"].mytext').val();
        var inputEmail = $('.form input.myemail').val();
        var inputTextArea = $('.form textarea').val();

        // formData for input[type="file"]
       // var formData1 = new FormData();
           //var file = document.getElementById('add-file');
           // file2 = document.getElementById('add-file2');
            //console.log(file.files);
            


        formData.append('action', 'send_form_footer');
        formData.append('keyservices', services);
        formData.append('keySourcelanguage', Sourcelanguage);
        formData.append('keytargetlanguage', targetlanguage);
        formData.append('keysubject', subject);
        formData.append('keyinputTextFirst', inputTextFirst);
        formData.append('keyinputTextLast', inputTextLast);
        formData.append('keyinputEmail', inputEmail);
        formData.append('keyinputTextArea', inputTextArea);
        formData.append('nonce_code', myajax.nonce);
        
        // if ( file.files.length ) {
        //     formData.append('file', file.files[0], file.files[0].name);
        //     var file_error = true;
        //     $('#file_req').html('');
        // }
        // else{
        //     $('#file_req').html('<p style="color: red;">insert File </p>');
        // }
        /*
        if ( file.files.length) {
            var file_error = true;
            $('#file_req').html('');
            for ( var i = 0; i < file.files.length; i++ ) {
            formData1.append('file' + i, file.files[i], file.files[i].name);
            //$('#file_insert').append('<p>' + file.files[i].name + ' <span class="del_icon" data-file-id=' + i + ' > x </span> </p>' );
           //console.log();
        }
        }else {$('#file_req').html('<p style="color: red;">insert File </p>');}
        */

        if (targetlanguage != 'Select language' && targetlanguage != '') {
            var target_error = true;
            $('#target_req').html('');
        }else{
            
            $('#target_req').html('<p style="color: red;">requaired Target language(s) *</p>');
            
        }
        
        if (services != 'Select service' && services != '') {
            var services_error = true;
           $('#serv_req').html('');
        }else{
           $('#serv_req').html('<p style="color: red;"> requaired Service *</p>');
           
           
        }
        if (Sourcelanguage != 'Select language' && Sourcelanguage != '') {
            var source_error = true;
            $('#source_req').html('');
        }else{
            
            $('#source_req').html('<p style="color: red;">requaired Source language *</p>');
            //setTimeout(function(){$('#source_req').html('')}, 5000);
        }
        if (subject != 'Select subject' && subject != '') {
            var subject_error = true;
            $('#subject_req').html('');
        }else{
            
            $('#subject_req').html('<p style="color: red;">requaired Subject:*</p>');
            //setTimeout(function(){$('#subject_req').html('')}, 5000);
        }
        
        if (inputTextFirst == ''){
            $('#first_req').html('<p style="color: red;">requaired First name*</p>');
            //setTimeout(function(){$('#first_req').html('')}, 5000);
        }
        else if (inputTextFirst.length < 2){
            $('#first_req').html('<p style="color: red;">Lenth more than 2 </p>');
            //setTimeout(function(){$('#first_req').html('')}, 5000);
        }
        else {
            var first_error = true;
            $('#first_req').html('');
        }

        if (inputTextLast == ''){
            $('#last_req').html('<p style="color: red;">requaired Last name*</p>');
            //setTimeout(function(){$('#last_req').html('')}, 5000);
        }
        else if (inputTextLast.length < 2){
            $('#last_req').html('<p style="color: red;">Lenth more than 2 </p>');
            //setTimeout(function(){$('#last_req').html('')}, 5000);
        }
        else {
            var last_error = true;
            $('#last_req').html('');
        }
        

        if (inputEmail == '') {
             $('#email_req').html('<p style="color: red;">requaired E-mail*</p>');
            //setTimeout(function(){$('#email_req').html('')}, 5000);
        }
        else if (!inputEmail.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)){
            $('#email_req').html('<p style="color: red;">incorrect E-mail*</p>');
            //setTimeout(function(){$('#email_req').html('')}, 5000);
        }
        else { 
            var email_error = true;
            $('#email_req').html('');
        }

        

        if(target_error == true && services_error == true && source_error == true && subject_error == true && first_error == true && last_error == true && email_error == true){
            console.log(formData);
            $.ajax({
                url: myajax.url,
                method: 'post',
                data: formData,
                contentType: false,
                processData: false,
                success: function (result) {
                    console.log(result);
                    window.location.href=window.location.origin+'/thanks';
                }
            });
        }
        else {
            formData.delete('action');
            formData.delete('keyservices');
            formData.delete('keySourcelanguage');
            formData.delete('keytargetlanguage');
            formData.delete('keysubject');
            formData.delete('keyinputTextFirst');
            formData.delete('keyinputTextLast');
            formData.delete('keyinputEmail');
            formData.delete('keyinputTextArea');
            formData.delete('nonce_code');
        }
        // $('body').on('click','#mc-embedded-subscribe');
    });

});



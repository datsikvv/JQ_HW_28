'use strict'

// createForm();

$.ajax({
    method: "get",
    url: `http://localhost:3030/data/`,
    success: (data) => {
        console.log(data);

        // console.log(data[0].title)
        // $(".title").text(data[0].title);
        // $(".description").text(data[0].description);

        // if(data[obj.id].done){
        //     $(".done").attr("checked", "true");
        //     $(".done").parent().css("color", "grey");
        //     $(".done").siblings(".control").children(".read").attr('disabled', true);
        // }

                        for(let obj of data) {
                            createForm();
                            $(this).children(".title").text(data[obj.id].title);
                            $(this).children(".description").text(data[obj.id].description);
                            console.log(data[obj.id].title)
                            if(data[obj.id].done){
                                $(".done").attr("checked", "true");
                                $(".done").parent().css("color", "grey");
                                $(".done").siblings(".control").children(".read").attr('disabled', true);
                            }
                }

        // $("p").text(data[0].name);
        // const titleList = $(".list");
        // for(let obj of data) {
        //     if  (obj.name) {
        //         titleList.append($("<li></li>").text(obj.name))
        //         console.log(obj.name);
        //     }
        // }
        // if  (data.name) {
        //         titleList.append($("<li></li>").text(data.name))
        //         console.log(data.name);
        //     }
    }
    });
    

function newFunction() {
    createForm();
}
    // let donePost = {

    //     done: true
    // }

    // if ($(".done").prop("checked")) {
    //     console.log("FFFFFFFFFFFFFFFFFFF")
    // }
    // $(".done").click(function() {
    //     if ($(".done").prop("checked")) {
            
    //         $.ajax({
    //             method: "put",
    //             url: `http://localhost:3030/data/0`,
    //             data: JSON.stringify(donePost),
    //                 success: (data) => {
    //                     console.log('success ' + data); 

    //                 },
    //                 error:  (err) => {
    //                     console.log('error ' + err)
    //                 },
    //                 complete: (data) => {
    //                     console.log('complete ' + data);  
    //                 },
    //                 cache: false,
    //                 headers: {
    //                     'Authrization': 'Basic xxxxxxxxxxx',
    //                     'X-CSFR-TOKEN': 'xxxxxxxxxxxxxxxxx',
    //                     'Content-Type': 'dddddddddddddd'
    //                 }
    //             });




    //     }
    // })
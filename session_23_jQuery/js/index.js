
let myBox = document.querySelector(".box");
let $myBox = $(".box");

let $$myBox = $(myBox)

console.log($myBox);
/* اوريدي ماسكالك كل العناصر اللي ينطبق عليها نفس السيليكتور */
console.log($myBox.eq(0));
/*هترجع object(jQuery من النوع) جواه عنصر واحد اللي انا ماسكه*/


console.log($myBox[0]);
console.log($myBox.get(0));
/* هيرجع object عشان ال jQuery من جوا ماسكه javaScript دي كدا هترجعلك object */


console.log(myBox);
/* هيرجعلك و object عشان انت ماسكه javaScript */


console.log($$myBox);
/* هيرجعهولك jQuery */


/* document.querySelectorAll(".box").forEach(function (box) {
    box.addEventListener("click", function () {
        console.log("OK");
    });
});


$(".box").click(function () {
    console.log("ok");
}); */

/*  ال jQuery مديالك امكانية ان انت تنادي ع كل ال events ك methods */


$(".box").hover(function () {
    console.log("mouseenter");
}, function () {
    console.log("mouseleave");
});


/* $(".box").on("click", function () {
    console.log("clicked");
}); */


/* $(".box").one("click", function () {
    console.log("clicked");
}); */
/* هينفذ ال event مره واحده */


document.querySelector(".box").addEventListener("click", function () {
    console.log("no");
},
    {
        once: true,
    }
);
/* طريقة ال javaScript عشان ينفذها مره واحده */

$(".box").on({
    'click': function (e) {
        console.log("clicked");
    },
    'mouseenter': function (e) {
        console.log("mouseentered");
    }
});

/* $ => function بتاخد السيليكتور وبترجع ال object ال object ده جواه فانكشن اسمها on بتت check لو اول باراميار str يبقي التاني ال function وال str ده ال event 
لكن لو اول باراميتر ده  object يبقي هيبقي جواه key اللي هو ال event وال value هتبقي ال function */


$("#hide").click(function () {
    $(".box").hide(1000);
});

/* hide => method بتخفي وبتبعتلها parameter اخفيها ف خلال قد ايه */

$("#show").click(function () {
    $(".box").show(1000);
});

$("#toggle").click(function () {
    $(".box").toggle(1000);
});
/* بيلعبوا بال width وال height */

$("#fadeOut").click(function () {
    $(".box").fadeOut(1000, function () {
        console.log("ok");
    });
});
$("#fadeIn").click(function () {
    $(".box").fadeIn(1000, function () {
        console.log("ok");
    });
});
$("#fadeToggle").click(function () {
    $(".box").fadeToggle(1000, function () {
        console.log("ok");
    });
});
$("#fadeTo").click(function () {
    $(".box").fadeTo(1000)
});
$("#slideUp").click(function () {
    $(".box").slideUp(1000)
});
$("#slideDown").click(function () {
    $(".box").slideDown(1000)
});
$("#slideTo").click(function () {
    $(".box").slideToggle(1000)
});
/* كل دول بياخدوا 2 parametrs الاول الوقت اللي هستناه والتاني ال call back function اللي هتتنفذ بعد ما الوقت يخلص كأنها setTimeout جاهزة  */
/* ال fadeOut بتلعب بال opacity */


$("#animate").click(function () {
    $(".box").animate({
        width: "300px",
        height: "300px",
    }, 1000);

});
/* كدا بيتغيروا ف نفس الوقت */
/* $("#animate").click(function () {
    $(".box").animate({
        width: "300px",
    }, 1000);

});

 */
$("#animate").click(function () {
    $(".box").animate({
        height: "300px",
    }, {
        duration: 1000,
        queue: false,/*  لو true السطر ده هيخليها تحترم اختها 
        false مش هتحترم حد*/
    });


});
$("#animate").click(function () {
    $(".box1").animate({
        height: "300px",
    }, 1000);


});
$("#animate").click(function () {
    $(".box2").animate({
        width: "300px",
    }, 1000);


});
/*كدا هيكبروا مع بعض او التأثير هيحصل ف نفس الوقت */


$("#animate").click(function () {
    $(".box1").animate({
        height: "300px",
    }, 1000, function () {
        $(".box2").animate({
            width: "300px",
        }, 1000);
    });
});


$("#Stop").click(function () {
    $(".box1").stop();

});


$("#Stop").click(function () {
    $(".box1").html(
        `<p>hello</p>`
    );
});
$("#Stop").click(function () {
    $(".box2").text(
        "hello"
    );
});

$("#Stop").click(function () {
    $("input").val("hello");/* .val("") => كدا بيفضيها  .val("بيغير محتواها")*/
});
$("#animate").click(function () {
    $(".box2").replaceWith(`<p>hello</p>`)/* .html بتغير اللي جوا العنصر لكن ال replaceWith بتغير العنصر كله*/
});
$("#animate").click(function () {
    $(".box1").prepend(`<p>hello</p>`)/* هيضيف قبل عيالها */
    $(".box1").append(`<p>hello</p>`)/* هيضيف بعد عيالها */
});

$("#animate").click(function () {
    $(".box2 h2").remove();/* بيمسحه */
});
$("#animate").click(function () {
    $(".box2 h2").empty();/* بيفضيه */
});


$("#animate").click(function () {
    $(".box2 h2").attr(data - eid);/* كدا هتجبلك الفاليو*/
});
$("#animate").click(function () {
    $(".box2 h2").attr('data-eid', 'omar');/* كدا هنعمل assign*/
});


$("#animate").click(function () {
    $(".box2 h2").prop('disabled')/* بترجع true او false */
});



$(".btn").click(function () {
    console.log($(".child1").offset())/* بعده عن ال document */
    /* لو اديت position للأب هيجيب البعد عن الاب */
});

$(".btn").click(function () {
    $(".child1").offset({
        top: 100,
        left: 60,
    });
});

$(".btn").click(function () {
    $(".child1").wrap("<div class='test'></div>")
});
/* هيخلي ال div اللي انت زودته ابوه */

$(".btn").click(function () {
    $(".child1").unwrap(".test")
});
/* هيشيل ابوه */


$(".btn").click(function () {
    $(".child1").css('width', "300px")
});

/* هيحطله استايل  لو عايز تبعت اكتر من property هتبعتله object*/

/* $(".btn").click(function () {
    $(".parent").has(".test").css('width', "50px");

}); */

/* has => معناها يحتوي */
/* $(".btn").click(function () {
    $(".child1").is(".vip").css('width', "50px");

}); */

/* بترجع true و false */


$(".btn").click(function () {
    $(".parent").html(`
        <button class="btn btn-info">go</button>
        `);
});

$(".parent").on("click", "button", function () {
    console.log("ok");
});
/* كدا انت خليته يستني لحد ما الزرار يتوجد  */


$(".btn").click(function () {
    $(".parent").width(100);
    console.log($(".parent").innerWidth());
    /* width+padding */
    console.log($(".parent").outerWidth());
    /* width+padding+border */
    console.log($(".parent").outerWidth(true));
    /* width+padding+border+margin */
});


$(".btn").click(function () {
    $(".parent").addClass('active')
})

$(".btn").click(function () {
    $(".parent").removeClass('active')
})

$(".btn").click(function () {
    $(".parent").toggleClass('active')
})

$(".btn").click(function () {
    $(".parent").hasClass('active')
})
/* بترجع true او false */


$(".child1").parent();/* بترجعلك jQuery ال parent */
$(".child1").parents();/* list بأبهاتها */
$(".child1").parents("body");/* بيجبهولك هو بالتحديد زي closest */
$(".child1").parentsUntill("body");/*لو مقل=ولتش حاجه هتجبلك كله لو قولتله هيجيبلك كله لحد ما  انت بعتله */
$(".child1").children();/* كل الابناء */
$(".child1").children("child3");/*السيليكتور ده بالتحديد */
$(".child1").children().first();
$(".child1").children("child3").last();/* لو عايز من النص يبقي eq */
$(".child1").children().filter(".test")/* دور ف ابنائه ع اللي واخدين test */
$(".child1").children().not(".test")/* اللي مش واخدين ال test */
$(".parent").find("child2");/* دور ع ده جوا */
$(".child3").siblimgs();/* كل اخواته */
$(".parent").nextUntill(".test")/* لغاية ويقف ع اللي قبله علطول */
$(".parent").nextAll()/*  كل الللي يعدي*/
$(".parent").nextAll(".test")/* العنصر ده بالتحديد */
$(".parent").next();/* اللي بعدي علطول */

/* .get عشان تحول من jQuery ل javaScript */
/* $(اسم الفاريبل اللي انت عرفته javaScript) عشان تحول من javaScript to jQuery*/

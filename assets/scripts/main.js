$(document).ready(function() {
    console.log("ready");

    var speed = 50;

    type("public class", speed, "r0_1", function(){
        type(" SayHelloBot {", speed, "r0_2", function(){
            type("    private void", speed, "r1_1", function(){
                type(" saySomething (String message) {", speed, "r1_2", function (){
                    type("        System.out.println(message);", speed, "r2", function(){
                        type("    }", speed, "r3", function(){
                            type("    public static void", speed, "r4_1", function(){
                                type(" main(String[] args) {", speed, "r4_2", function(){
                                    type("        SayHelloBot sayHelloBot =", speed, "r5_1", function(){
                                        type(" new ", speed, "r5_2", function() {
                                            type("SayHelloBot();", speed, "r5_3", function(){
                                                type("        sayHelloBot.saySomething(", speed, "r6_1", function(){
                                                    type("\"Willkommen.\"", speed, "r6_2", function(){
                                                        type(");", speed, "r6_3", function(){
                                                            type("    }", speed, "r7", function(){
                                                                type("}", speed, "r8", function(){
                                                                    setTimeout(type_finished, 1000);
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});

function type(word, speed, element_id, success) {
    var i = 0;
    var type_word = function () {
        if (i < word.length) {
            document.getElementById(element_id).innerHTML += word.charAt(i);
            i++;
            setTimeout(type_word, speed);
        } else {
            if (typeof success === "function") success();
        }
    };
    type_word();
}

function type_finished() {
    $('.r').addClass("disappearing");
    setTimeout(function(){
        $('.content').empty().html("<div id='welcome'>Willkommen.</div><div id='aufbau'></div>")
        setTimeout(function() {
            $('#welcome').addClass("appearing");
            setTimeout(function(){
                type("Die Seite wird gerade neu programmiert...", 100, "aufbau", function(){
                    $('.content').append("<div id='contact'>Schau' später wieder vorbei oder schreib' mir eine <a href='mailto:hi@klausfuhrmeister.de'>E-Mail</a></div>");
                    setTimeout(function(){
                        $('#contact').addClass("appearing");
                    }, 100)
                });
            })
        }, 100)
    }, 1000)
}
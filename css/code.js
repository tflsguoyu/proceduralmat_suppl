function addAnimation(id, height, start, end, step, fps, files) {
    'use strict'

    var canvasId = id + "_canvas";
    $("#" + id).css("background-image", "none").css("height", "auto")
               .append("<canvas id='" + canvasId + "'></canvas>");
    var canvasObj = $("#" + canvasId);
    var ctx = canvasObj[0].getContext("2d");

    var totImgs = (end - start)/step + 1, totLoaded = 0;
    var imgs = new Array(totImgs);
    for ( var i = 0; i < totImgs; ++i ) {
        imgs[i] = new Image();
        imgs[i].onload = function() {
            if ( ++totLoaded == totImgs ) {
                // var w = width, scl = width/imgs[0].width;
                // var h = imgs[0].height*scl;
                var h = height, scl = height/imgs[0].height;
                var w = imgs[0].width*scl;

                canvasObj.attr("width", w);
                canvasObj.attr("height", h);
                ctx.scale(scl, scl);

                canvasObj.css("display", "block");
                canvasObj.css("cursor", "pointer");
                ctx.drawImage(imgs[0], 0, 0);

                var playing = false;
                var curFrame = 0;
                var timer = null;
                canvasObj.click(function() {
                    if ( !playing ) {
                        playing = true;
                        timer = setInterval(function() {
                            if ( curFrame == totImgs ) {
                                clearTimeout(timer);
                                playing = false;
                                curFrame = 0;
                            }
                            else
                                ctx.drawImage(imgs[curFrame++], 0, 0);
                        }, 1000/fps);
                    } else {
                        clearTimeout(timer);
                        playing = false;
                    }
                }).contextmenu(function() {
                    clearTimeout(timer);
                    playing = false;
                    ctx.drawImage(imgs[curFrame = 0], 0, 0);
                    return false;
                });
            }
        };
        imgs[i].src = sprintf(files, start + i*step);
    }
}

$(document).ready(function() {
    'use strict'

    addAnimation("bump_syn_optim", 200, 0, 1000, 20, 10, "images/bump_syn_optim/frame_%04d.jpg");
    addAnimation("bump_syn_sample", 200, 0, 50, 1, 5, "images/bump_syn_sample/frame_%04d.jpg");

    addAnimation("leather_syn_optim", 200, 0, 500, 10, 10, "images/leather_syn_optim/frame_%04d.jpg");
    addAnimation("leather_syn_sample", 200, 0, 50, 1, 5, "images/leather_syn_sample/frame_%04d.jpg");

    addAnimation("plaster_syn_optim", 200, 0, 1000, 20, 10, "images/plaster_syn_optim/frame_%04d.jpg");
    addAnimation("plaster_syn_sample", 200, 0, 50, 1, 5, "images/plaster_syn_sample/frame_%04d.jpg");

    addAnimation("flake_syn_optim", 200, 0, 2000, 40, 10, "images/flake_syn_optim/frame_%04d.jpg");
    addAnimation("flake_syn_sample", 200, 1, 50, 1, 5, "images/flake_syn_sample/frame_%04d.jpg");

    addAnimation("metal_syn_optim", 200, 0, 1000, 20, 10, "images/metal_syn_optim/frame_%04d.jpg");
    addAnimation("metal_syn_sample", 200, 0, 50, 1, 5, "images/metal_syn_sample/frame_%04d.jpg");

    addAnimation("wood_syn_optim", 200, 0, 1000, 20, 10, "images/wood_syn_optim/frame_%04d.jpg");
    addAnimation("wood_syn_sample", 200, 0, 50, 1, 5, "images/wood_syn_sample/frame_%04d.jpg");

    addAnimation("bump_real_optim", 200, 0, 2000, 40, 10, "images/bump_real_optim/frame_%04d.jpg");
    addAnimation("bump_real_sample", 200, 0, 50, 1, 5, "images/bump_real_sample/frame_%04d.jpg");

    addAnimation("leather_real_optim", 200, 0, 2000, 40, 10, "images/leather_real_optim/frame_%04d.jpg");
    addAnimation("leather_real_sample", 200, 0, 50, 1, 5, "images/leather_real_sample/frame_%04d.jpg");
    
    addAnimation("plaster_real_optim", 200, 0, 1000, 20, 10, "images/plaster_real_optim/frame_%04d.jpg");
    addAnimation("plaster_real_sample", 200, 0, 50, 1, 5, "images/plaster_real_sample/frame_%04d.jpg");
    
    addAnimation("flake_real_optim", 200, 0, 1000, 20, 10, "images/flake_real_optim/frame_%04d.jpg");
    addAnimation("flake_real_sample", 200, 0, 50, 1, 5, "images/flake_real_sample/frame_%04d.jpg");
    
    addAnimation("metal_real_optim", 200, 0, 500, 10, 10, "images/metal_real_optim/frame_%04d.jpg");
    addAnimation("metal_real_sample", 200, 0, 50, 1, 5, "images/metal_real_sample/frame_%04d.jpg");
    
    addAnimation("wood_real_optim", 200, 0, 2000, 40, 10, "images/wood_real_optim/frame_%04d.jpg");
    addAnimation("wood_real_sample", 200, 0, 50, 1, 5, "images/wood_real_sample/frame_%04d.jpg");
});

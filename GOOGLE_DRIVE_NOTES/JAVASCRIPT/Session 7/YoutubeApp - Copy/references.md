
https://stackoverflow.com/questions/10000083/javascript-event-handler-with-parameters 

polluting globalscope:
https://stackoverflow.com/questions/8862665/what-does-it-mean-global-namespace-would-be-polluted

Horizontal display
https://stackoverflow.com/questions/27620564/bootstrap-row-of-images-that-scroll-horizontally
https://stackoverflow.com/questions/19800008/create-horizontally-scrolling-list-item-view-using-bootstrap-columns

YouTubeApi
Key :  AIzaSyA0MnWlMrelKfjezM_rRB4wp6Ptb98lxkg
nallanagulaajaykumar@gmail.com

http://jsfiddle.net/zub16fgt/ 

/*
                    var id = `player${k}`
                    var videoDiv = htmlUtility.createHtmlElements('div',{"id":id});
                    var player = new YT.Player(id, {
                        height: 320,
                        width: 400,
                        videoId : resp.items[k].id,
                        events : {
                            'onReady' : onPlayerReady
                        }
                     });
                     div.appendChild(player);
*/

                    /*
                    attrObj = {"width": "320","height": "240"};
                    var video1 = htmlUtility.createHtmlElements('video', attrObj);
                    var srcAttrObj = {"src":`https://www.youtube.com/watch?v=${resp.items[k].id}`,"type":"video/mp4"};
                    var source = htmlUtility.createHtmlElements('source',srcAttrObj);
                    srcAttrObj.type="video/ogg";
                    var source2 = htmlUtility.createHtmlElements('source',srcAttrObj);
                    video1.appendChild(source);
                    video1.appendChild(source2); 
                    //video1.appendChild("Your browser does not support the video tag.");
                    videoDiv.appendChild(video1);
                    */
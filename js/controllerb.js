
window.addEventListener('load', function() {

   
    
    $('#text').html('this is some text');

    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://www.facebook.com/events/510205582410097/", true);
    myRequest.send();
    myRequest.onreadystatechange=function()
    {
    if (myRequest.readyState==4 && myRequest.status==200)
      {
      facebook_html = myRequest.responseText;
      regex_pattern = /Going \((\d+)\)/ ;
      matches = regex_pattern.exec(facebook_html);
      going_string = matches[1];
      $('#text').text("'" + facebook_html + "'" );
      }
    };

    
    //chrome.browserAction.setBadgeText({text: going_string});
    
});


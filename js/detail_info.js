$.ajaxSetup({ cache: false });
$.get('https://raw.githubusercontent.com/OJMN/Kursach/master/xml/data.xml')
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const itemid = urlParams.get('id')
    $(data).find("place").each(
        function(index, element){
            let field = $(element)
            
            if (parseInt(field.find("id").text()) == parseInt(itemid)){
                document.getElementById("bodyname").innerHTML = field.find("name").text()
                field.find("image").each(
                    function(indx, img){
                        let image = $(img)
                        document.getElementById("img"+(indx+1)).setAttribute("src", image.text())
                    }
                )
                document.getElementsByClassName("maincontent")[0].innerHTML = field.find("description").text()
                document.getElementsByClassName("maincontent")[1].innerHTML += field.find("adress").text()
                document.getElementsByClassName("maincontent")[1].innerHTML += "<br> Время работы:"
                document.getElementsByClassName("maincontent")[1].innerHTML += field.find("work_time").text()


                field.find("review").each(
                    function(indx, reviews){
                        let review = $(reviews)
                        document.getElementsByClassName("maincontent")[2].innerHTML += "<div class='reviewdiv'>"+
                        "<img src='"+review.find("userimg").text()+"'/><span>"+review.find("username").text()+"</span>"+
                        "<p>"+review.find("reviewtext").text()+"</p></div>"
                    }
                )
            }
            
        }
    )
  })
  .fail(function(){
    alert('Check internet connection!');
  })
;
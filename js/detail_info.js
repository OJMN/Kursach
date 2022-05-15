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
                field.find("review").each()
            }
            
        }
    )
  })
  .fail(function(){
    alert('Check internet connection!');
  })
;
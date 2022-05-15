$.ajaxSetup({ cache: false });
$.get('https://raw.githubusercontent.com/OJMN/Kursach/master/xml/data.xml')
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    $(data).find("restaurants").find("place").each(
        function(index, element){
            let field = $(element)
            let image
            field.find("image").each(
                function(inx, elz){
                    let el = $(elz)
                    image = el.text()
                }
            )
            document.getElementById("items").innerHTML += '<div id="tem">'+field.find("category").text()+'</div>' +
            '<img id="foto" src="'+image+'" />'+
            '<div id="inf1">'+field.find("name").text()+'</div>'+
            '<div id="inf1_1">'+
              '<p>Время работы: '+field.find("work_time").text()+'</p>'+
              '<p>Адрес: ТЦ «Караван», ул. Налибокская 1, Минск 220055</p>'+
                + field.find("contacts").text()+'</div>'
        }
    )
  })
  .fail(function(){
    alert('Check internet connection!');
  })
;
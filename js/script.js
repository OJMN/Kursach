$.ajaxSetup({ cache: false });
$.get('https://raw.githubusercontent.com/OJMN/Kursach/master/xml/data.xml')
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const itemid = urlParams.get('filter')
    $(data).find(itemid).find("place").each(
        function(index, element){
            let field = $(element)
            let image
            field.find("image").each(
                function(inx, elz){
                    let el = $(elz)
                    image = el.text()
                }
            )
            document.getElementById("items").innerHTML += '<div class="item container"> <div class="tem">'+field.find("category").text()+'</div>' +
            '<img class="restaurant_photo" src="'+image+'" />'+
            '<div class="inf1"><a href="detail.html?id='+field.find("id").text()+'">'+field.find("name").text()+'<a/></div><br><br>'+
            '<div class="inf1_1">'+
              '<p>Время работы: '+field.find("work_time").text()+'</p><br>'+
              '<p>Адрес: ТЦ «Караван», ул. Налибокская 1, Минск 220055</p><br>'+
                 field.find("contacts").text()+'</div><div/>'
        }
    )
  })
  .fail(function(){
    alert('Check internet connection!');
  })
;
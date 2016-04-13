function echo(msg) {
    window.alert("Echoing: " + msg);
}

function welcome() {
    var al = document.getElementById('welcome');
    al.innerHTML = "Goodbye world!";
    al.style.backgroundColor = "#ffcccc";

    var listItems = document.getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "#00ff00";
    }

    var list = document.getElementById("fruits");
    var children = list.childNodes;
    var listItemsHTML = new Array();

    for (i = 0; i < children.length; i++) {
        /* the list also contains some "text nodes" representing the whitespace
 between the elements, so we only want to take the <li> elements */
        if (children[i].nodeName === "LI") {
            listItemsHTML.push(children[i].innerHTML);
        }
    }

    //sort
    listItemsHTML.sort();
    list.innerHTML = "";
    for (var i = 0; i < listItemsHTML.length; i++) {
        list.innerHTML += "<li>" + listItemsHTML[i] + "</li>";
    }
}

function myPrint() {
    var d = document.getElementById('stuff');
    d.innerHTML = window.location.href + "<br />" + Date();
}

function showThing() {
    var d = document.getElementById('box');
    d.style.backgroundColor = "blue";
}

function hideThing() {
    var d = document.getElementById('box');
    d.style.backgroundColor = "white";
}


function hideRatings() {
    var table = document.getElementById('ratingTable')

    table.rows[0].cells[1].style.visibility = "hidden";

    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (parseInt(col.innerHTML) < 3)
            {
                col.style.visibility = "hidden";
            }
        }
    }
}

function myjson() {
  var text = '{"parks" : [' +
    '{"Name" : "ANNA SMITH OBE QUOTA PARK", "Code" : "D0911", "Suburb" : "CARINDALE"},' +
    '{"Name" : "ABLINGTON WAY PARK", "Code" : "D1637", "Suburb" : "CARINDALE"},' +
    '{"Name" : "A. J. JONES RECREATION RESERVE", "Code" : "D0021", "Suburb" : "CHERMSIDE"}' +
  ']}';

  obj = JSON.parse(text);

  var div = document.getElementById('result');

  if (obj.parks[0].Suburb == obj.parks[1].Suburb) {
    div.innerHTML = "Yes";
  }
  else {
    div.innerHTML = "No";
  }
}

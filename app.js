
$.get( "https://api.covid19india.org/data.json", function( data ) {
    $( ".result" ).html( data );
    console.log(data['statewise'].length);   
    
    var tbval = document.getElementById('tbval');

    for(var i=1; i<(data['statewise'].length); i++){
        var x = tbval.insertRow();

        x.insertCell(0);
        tbval.rows[i].cells[0].innerHTML = data['statewise'][i-1]['state'];
        tbval.rows[i].cells[0].style.background = '#b0efeb';
        tbval.rows[i].cells[0].style.color = '#000';
        tbval.rows[i].cells[0].style.fontWeight = "650";
        x.insertCell(1);
        tbval.rows[i].cells[1].innerHTML = data['statewise'][i-1]['active'];
        x.insertCell(2);
        tbval.rows[i].cells[2].innerHTML = data['statewise'][i-1]['confirmed'];
        x.insertCell(3);
        tbval.rows[i].cells[3].innerHTML = data['statewise'][i-1]['recovered'];
        x.insertCell(4);
        tbval.rows[i].cells[4].innerHTML = data['statewise'][i-1]['deaths'];
        x.insertCell(5);
        tbval.rows[i].cells[5].innerHTML = data['statewise'][i-1]['deltaconfirmed'];
        x.insertCell(6);
        tbval.rows[i].cells[6].innerHTML = data['statewise'][i-1]['deltadeaths'];
        x.insertCell(7);
        tbval.rows[i].cells[7].innerHTML = data['statewise'][i-1]['deltarecovered'];
    }
  });
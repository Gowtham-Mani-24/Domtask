var ele = document.createElement("h1");
ele.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea natus maiores ipsa a aliquid exercitationem quam unde, enim, temporibus ipsum corporis mollitia praesentium voluptates totam alias, cupiditate ab pariatur accusamus?";
document.body.append(ele);

var ele2 = document.createElement("span");
ele2.innerHTML = "ipsum";
ele.append(ele2);

ele2.addEventListener('mouseover', function(event){
    var x= event.clientX;
    var y = event.clientY;
    console.log(`X:${x}, Y:${y}`);
});



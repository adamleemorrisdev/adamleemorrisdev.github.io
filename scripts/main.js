// Initialize and add the map
function initMap() {
    // The location of Leeds uni
    const leedsuni = { lat: 53.806814545321885, lng: -1.5549791557661776 };
    // The map, centered at Leeds uni
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: leedsuni,
      mapId: 'f6a7c0d51f114e7e',
    });
    // The marker, positioned at Leeds uni
    new google.maps.Marker({
      position: leedsuni,
      map: map,
      icon: {
        url: "/images/marker.png",
        scaledSize: new google.maps.Size(25, 25)
      }
    });
  }

  // Shows the current time and a welcome message to a visitor 
    // var today = new Date;
    //   var hourNow = today.getHours();
    //   var greeting;
    //   var currentTime = today.toLocaleTimeString();

    //   if (hourNow > 18) {
    //     greeting = 'Good evening!';
    //   } else if (hourNow > 12) {
    //     greeting = 'Good afternoon!';
    //   } else if (hourNow > 0) {
    //     greeting = 'Welcome!';
    //   }
    // document.write('<h3>' + greeting + ' The time is now ' + currentTime + '.' + '</h3>');
  
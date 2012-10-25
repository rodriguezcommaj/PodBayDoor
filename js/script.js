(function () {

    // function to open both doors with animation
    function openDoors() {

        var leftDoor = $('.leftDoor');
        var rightDoor = $('.rightDoor');

        leftDoor.animate({ left: '-=50%' }, {duration:800, easing: 'easeInOutExpo'});
        rightDoor.animate({ right: '-=50%' }, { duration: 800, easing: 'easeInOutExpo' });
    };

    // function to close both doors with animation
    function closeDoors() {

        var leftDoor = $('.leftDoor');
        var rightDoor = $('.rightDoor');

        leftDoor.animate({ left: '+=50%' }, { duration: 800, easing: 'easeInOutExpo' });
        rightDoor.animate({ right: '+=50%' }, { duration: 800, easing: 'easeInOutExpo' });
    };

    // toggle between the two functions on event
    $('#hal').toggle(
        function () {
            openDoors();
        }, function () {
            closeDoors();
        }
    );


})();
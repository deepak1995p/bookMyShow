
    var pvr = {
        pv: function() {
            var quantity = prompt('How many tickets do you want? ');
            var quantity2 = parseInt(quantity);
            console.log(' the price of the tickets  are: Silver seat - 250 rupees and Golden seat - 350');
            var c = prompt('which type of seat you want to book?: Silver or Gold ');
            console.log('you want ' + quantity2 + ' tickets and you want ' + c + ' seat ');

            if (c == "silver" || c == 'Silver') {
                console.log('You have to pay ' + (quantity2 * 250) + ' rupees ');
            } else if (c == "gold" || c == "Gold") {
                console.log('You have to pay ' + (quantity2 * 350) + ' rupees ');
            }
        }
    };

    var MegaCinema = {
        mt: function() {
            var quant = prompt('How many tickets do you want to book? ');
            var quant2 = parseInt(quant);
            console.log(' the price of the tickets are: Silver seat - 200 and Golden seat - 300 ');
            var t = prompt('which type of ticket do you want to book?: Silver or Gold ');
            console.log('you want ' + quant2 + 'tickets and you want ' + t + ' seat ');

            if (t == "silver" || t == "Silver") {
                console.log('You have to pay ' + (quant2 * 200) + ' rupees ');
            } else if (t == "gold" || t == "Gold") {
                console.log('You have to pay ' + (quant2 * 300));
            }
        }
    };

    var FunCinema = {
        fc: function() {
            var t = prompt('How many tickets do you want to book? ');
            var tt = parseInt(t);
            console.log(' the price of the tickets are: Silver seat - 150 and Golden seat - 250 ');
            var type = prompt('which type of ticket do you want to book?: Silver or  Gold ');
            console.log('you want ' + tt + 'tickets and you want ' + type + ' seat ');

            if (type == "silver" || type == "Silver") {
                console.log('You have to pay ' + (quant2 * 150) + ' rupees ');
            } else if (type == "gold" || type == "Gold") {
                console.log('You have to pay ' + (tt * 250));
            }
        }
    };

    function bookMyShow(PVR, Mcinema, Fcinema) {
        this.name = prompt(' whats your name ');
        console.log('which movie do you want to watch? \n 1. 3 Idiots \n 2. 2 States \n 3. Satyamev Jayate \n 4. LOC  ');
        this.movie = prompt(' enter movie name ');
        console.log(' list of available cimena hall: \n 1. PVR \n 2. Mega Cinema \n 3. Fun Cinema. ');
        this.cinema = prompt('enter name of cinema hall ');
        console.log('Dear ' + this.name + ' ' + this.cinema + ' welcomes you ');

        this.booking = function() {
            if (this.cinema == "pvr" || this.cinema == "PVR") {
                PVR.pv();
            } else if (this.cinema == "MegaCinema" || this.cinema == "megacinema" || this.cinema == "mega cinema" || this.cinema == "Mega Cinema") {
                Mcinema.mt();
            } else {
                Fcinema.fc();
            }
        }
    }
    bookMyShow.prototype.ticket = function() {
        console.log('---------------------------------------------------------------');
        console.log(' Congratulations! ' + this.name + ' your booking for the movie ' + this.movie + ' is successfully booked in ' + this.cinema + ' Enjoy the movie ');
    }

    let person1 = new bookMyShow(pvr, MegaCinema, FunCinema);
    person1.booking();
    person1.ticket();


      function randomNumber(min, max) {
            return Math.floor((Math.random() * max) + min);
        }
        var names = ['dxxshs11', 'daytron', 'pigsssss', 'ShadowMaster', 'guerrero1', '1F4ever', 'cloroplast', 'morbus', 'bukowski', 'rudie2311', 'ruben270795', 'wupbuysip', 'DiliyaSavik', 'letmein', 'hoekstra', 'iwant2se', 'coupe1987', 'Monday08', 'ninja', '007sexPH', 'wilsonmr', 'Cronos69', 'marilyn36', 'bigrimp1', 'm3driver', 'captain', 'GamingMaster', 'VaporiZer', 'sharks', 'pacom14lat', 'gibson', 'hd72b93', 'meawmeaw', 'sasha200', 'kubrick', 'SuaVeciTo', 'whatnot', 'sensationangel@hotmail.com', '4xx35kls@yahoo.com', 'reneaux@live.com', 'abhishekshrm12@gmail.com', 'Uwe.Gonser@t-online.de', 'nflmlb1@gmail.com', 'abboricua@hotmail.com', 'Imm0rtaL@hotmail.com', 'guitarplayer3333@yahoo.com', 'Uwe000@gmx.de', 'diegorskk@hotmail.com', 'info@hobbywinkelvanstraaten.nl', 'rubenalvessena@yahoo.com.br', 'dhabaleswapnil60@gmail.com', 'wupbuysip@hotmial.com', 'DiliyaSavik@yahoo.com', 'ksgormley@yahoo.com', 'dddkkk@hotmail.com', 'ILuvAmanda@live.com', 'Uwelix@hotmail.com', 'hello.howarewe@gmail.com', 'dcurrie@yahoo.com', 'Uwezerban@aol.com', 'UwillNG@gmail.com', 'gnlacerda@gmail.br', 'shogun1980@hotmail.com', 'pinaypride4eva@sbcglobal.net', 'atj@gmail.com', 'lnghrfan@hotmail.com'];
        var countriesCode = ['ch', 'at', 'nl', 'de', 'au', 'fr', 'be', 'lu', 'es', 'gb', 'ca', 'sg', 'it', 'pt', 'gr', 'sl', 'ae', 'mx', 'pl', 'nz', 'tr', 'za', 'ba', 'ro', 'us', 'ee', 'hk', 'my', 'id', 'dk', 'no', 'ar'];
        var judulbook =['Ebook_ Gwendys Button Box By Stephen King, Richard Chizmar.pdf','Ebook_ Al Franken, Giant of the Senate.pdf','Ebook_ Camino Island: A Novel By John Grisham.pdf','Ebook_Astrophysics for People in a Hurry By Neil deGrasse Tyson.pdf','Ebook_ The Handmaids Tale By Margaret Atwood.pdf','Ebook_ The Official SAT Study Guide, 2018 Edition.pdf','Ebook_Oh, the Places Youll Go.pdf','Ebook_The Four Agreements: A Practical Guide to Personal Freedom.pdf','Ebook_Uninvited: Living Loved When You Feel.pdf','Ebook_Players Handbook (Dungeons & Dragons).pdf'];

        function commentsStart() {
            setInterval(function() {
                $('#loadingActivity').fadeOut(100, function() {
                    $('#onlineActivity').fadeIn().removeClass('hidden');
                });
                if ($('.activityItem').length > 3) {
                    $($('.activityItem')[0]).fadeOut(450, function() {
                        $(this).remove();
                        $('<section class="activityItem"><p><span class="flag-icon flag-icon-' + countriesCode[randomNumber(0, countriesCode.length - 1)] + '"></span> <span id="commentUsername">' + names[randomNumber(0, names.length - 1)] + '</span> Success Downloaded <span id="commentUsername">' + judulbook[randomNumber(0, judulbook.length - 1)] + '</span></font></b></p></section>').appendTo('#activityBody').hide().fadeIn(450);
                        mySound.play();
                    });
                } else {
                    if ($('.activityItem').length < 4) {
                        $('<section class="activityItem"><p><span class="flag-icon flag-icon-' + countriesCode[randomNumber(0, countriesCode.length - 1)] + '"></span> <span id="commentUsername">' + names[randomNumber(0, names.length - 1)] + '</span> Success Downloaded <span id="commentUsername">' + judulbook[randomNumber(0, judulbook.length - 1)] + '</span></font></b></p></section>').appendTo('#activityBody').hide().fadeIn(450);
                        mySound.play();
                    }
                }
            }, randomNumber(2500, 10000));
        }
        commentsStart();

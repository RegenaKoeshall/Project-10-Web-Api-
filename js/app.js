$(document).ready(function () {
    var spotifyAPI = "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V/albums";
  
  
    function displayAlbums(data) {
        
        var albumHTML = '<ul id="albumGallery">';
        var albums = [data.items[0].images[1].url, 
                      data.items[1].images[1].url, 
                      data.items[5].images[1].url, 
                      data.items[8].images[1].url, 
                      data.items[14].images[1].url, 
                      data.items[16].images[1].url
                    ];
                   
        var albumInfo = [data.items[0].name, 
                    data.items[1].name,
                     data.items[5].name, 
                    data.items[8].name, 
                    data.items[14].name, 
                    data.items[16].name
                 ];
                 
        var i = 0;
        while (i < albums.length) {
            albumHTML += '<li>';
            albumHTML += '<a href="' + albums[i] + '">';
            albumHTML += '<img src="' + albums[i] + '" alt=" Album Title: ' + albumInfo[i] + '">';
            albumHTML += '</a>';
            albumHTML += '</li>';
            i += 1;     
        }
        albumHTML += '</ul>';
        $("#albums").html(albumHTML);


        var $overlay = $('<div id="overlay"></div>');
        var $overlayCover = $('<div class="cover"></div>');
        var $image = $('<img>');
        var $caption = $('<p class="captionInfo"></p>');
        var $artist = '<p class="captionInfo">Ed Sheeran</p>';

        $overlayCover.append($image);
        $overlayCover.append($caption);
        $overlay.append($overlayCover);
        $("body").append($overlay);

        $('#albumGallery').on('click', 'a', function (e) {
            var imageLocation = $(this).attr("href");
            $image.attr("src", imageLocation);
            $overlay.show();
            var captionText = $(this).children("img").attr("alt");
            $caption.html(captionText);
            $caption.append($artist);
            e.preventDefault();
        });

        $(document).on('click', function (e) {
            if ($(e.target).has('.cover').length) {
                $overlay.hide();
            }
        });
    }
    $.getJSON(spotifyAPI, displayAlbums);
});


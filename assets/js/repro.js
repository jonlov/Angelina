// $(document).ready(function(){
	Amplitude.init({
			"songs": [
				{
					"name": "Tu conmigo y yo contigo",
					"artist": "Angelina",
					"album": "LOUD",
					"url": "music/1.mp3",
					"live": false,
					"cover_art_url": "images/cover.png"
				},
				{
					"name": "Part II",
					"artist": "Angelina ft. Julio",
					"album": "How High",
					"url": "music/1.mp3",
					"live": false,
					"cover_art_url": "images/cover.png"
				},
				{
					"name": "Roll Up",
					"artist": "Angelina",
					"album": "Roll Up",
					"url": "music/1.mp3",
					"live": false,
					"cover_art_url": "images/cover.png"
				},
				{
					"name": "Block Runna'",
					"artist": "Angelina ft. Andres",
					"album": "Block Runna'",
					"url": "music/1.mp3",
					"live": false,
					"cover_art_url": "images/cover.png"
				},
			],
			"default_album_art": "images/no-cover-large.png",
			"callbacks": {
				"after_init": "album_change",
				"after_album_change": "album_change",
				"after_song_ended": "album_change"
			}
		});

		function album_change(){
			var activeSong = Amplitude.getActiveSongMetadata();

			$('.album-display').hide();
			$('.album-container').removeClass('active-album-container');

			switch( activeSong.album ){
				case 'The Weatherman':
					$('.the-weatherman-display').show();
					$('.the-weatherman').addClass('active-album-container');
				break;
				case 'Rooms For Adelaide':
					$('.rooms-for-adelaide-display').show();
					$('.rooms-for-adelaide').addClass('active-album-container');
				break;
				case 'The Suburbs':
					$('.the-suburbs-display').show();
					$('.the-suburbs').addClass('active-album-container');
				break;
			}
		}
		$('.album-container').click(function(){
			$('.album-display').hide();
			$('.album-container').removeClass('active-album-container');

			if( $(this).hasClass('the-weatherman') ){
				$('.the-weatherman-display').show();
				$('.the-weatherman').addClass('active-album-container');
			}

			if( $(this).hasClass('rooms-for-adelaide') ){
				$('.rooms-for-adelaide-display').show();
				$('.rooms-for-adelaide').addClass('active-album-container');
			}

			if( $(this).hasClass('the-suburbs') ){
				$('.the-suburbs-display').show();
				$('.the-suburbs').addClass('active-album-container');
			}
		});
// })

// Description:
// Grabs snippets of song lyrics
//
// Dependencies:
// None
//
// Configuration:
// None
//
// Commands:
// hubot song for <song> by <artist> - returns snippet of lyrics for this song
//
// Author:
//

module.exports = (robot) {
  robot.respond /lyrics for (.*) by (.*)/i, (msg) {
    song = msg.match[1];
    artist = msg.match[2];
    getLyrics msg, song, artist
    };
    };

  getLyrics = (msg, song, artist) {
    msg.http("http://lyrics.wikia.com/api.php")
      .query(artist: artist, song: song, fmt: "json")
      .get() (err, res, body) {
        result = eval body # can't use JSON.parse :(
        msg.send result['url']
        msg.send result['lyrics']

        };
        };

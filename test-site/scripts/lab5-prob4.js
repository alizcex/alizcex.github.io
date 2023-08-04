let Song = function(title, artist) {
    this.title = title;
    this.artist = artist;
}

Song.prototype.play = function() {
    console.log("Playing: " + this.title + " by " + this.artist);
}

const song1 = new Song("Clarity", "Zedd");
const song2 = new Song("ตั้งใจรัก", "พัด Vorapat x First Anuwat");
song1.play()
song2.play()
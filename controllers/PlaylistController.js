const Playlist = require('../models/Playlist');

class PlaylistController {
    static show(){
        Playlist.show();
    }
    static add(){
        console.log("Add controller")
    }
    static remove(){
        console.log("Remove controller")
    }
    static make(){
        console.log("Make controller")
    }
}

module.exports = PlaylistController;
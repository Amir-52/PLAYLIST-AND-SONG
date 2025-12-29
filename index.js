const command = process.argv[2];
const params = process.argv.slice(3);
const PlaylistController = require('./controllers/PlaylistController');


switch (command){
    case 'add':
        PlaylistController.add()
        break;
    case 'remove':
        PlaylistController.remove()
        break;
    case 'make':
        PlaylistController.make()
        break;
    case 'showPlaylist':
        PlaylistController.show()
        break;
    default:
        console.log('Masukkan command yang valid: add, remove, & make. Terima kasih.')
        break;
}

// console.log(command);
// console.log(params);

// node js : modul utama dan 3rd party modul
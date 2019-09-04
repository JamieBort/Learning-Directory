// flickr-fetcher.js
var FlickrFetcher;

// FlickrFetcher = {
//     photoObjToURL: function() {
//         // return "test";
//         return 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
//     }
// };
// module.exports = FlickrFetcher;


// flickr-fetcher.js
// FlickrFetcher = {
//     photoObjToURL: function(photoObj) {
//         return 'https://farm' + photoObj.farm + '.staticflickr.com/' + photoObj.server + '/' + photoObj.id + '_' +
//             photoObj.secret + '_b.jpg';
//     }
// };
// module.exports = FlickrFetcher;




// flickr-fetcher.js
FlickrFetcher = {
    photoObjToURL: function(photoObj) {
        return [ 'https://farm',
            photoObj.farm, '.staticflickr.com/', 
            photoObj.server, '/',
            photoObj.id, '_',
            photoObj.secret, '_b.jpg'
        ].join('');
    },

    transformPhotoObj: function(photoObj) {
        return {
            title: photoObj.title,
            url:   FlickrFetcher.photoObjToURL(photoObj)
        };
    }

};

module.exports = FlickrFetcher;
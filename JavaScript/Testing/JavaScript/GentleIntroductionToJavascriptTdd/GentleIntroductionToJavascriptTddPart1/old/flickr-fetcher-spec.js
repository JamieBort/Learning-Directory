// flickr-fetcher-spec.js for the code to test flickr-fetcher.js;


// flickr-fetcher-spec.js
'use strict';
// var expect = require('chai').expect;

// describe('FlickrFetcher', function() {
//     it('should exist', function() {
//         var FlickrFetcher = require('./flickr-fetcher.js');
//         expect(FlickrFetcher).to.not.be.undefined;
//     });
// });


// flickr-fetcher-spec.js
var FlickrFetcher = require('./flickr-fetcher.js');

// describe('#photoObjToURL()', function() {
//     it('should take a photo object from Flickr and return a string', function() {
//         var input = {
//             id:       '24770505034',
//             owner:    '97248275@N03',
//             secret:   '31a9986429',
//             server:   '1577',
//             farm:     2,
//             title:    '20160229090898',
//             ispublic: 1,
//             isfriend: 0,
//             isfamily: 0
//         };
//         var expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
//         var actual = FlickrFetcher.photoObjToURL(input);
//         expect(actual).to.eql(expected);
//     });
// });


// flickr-fetcher-spec.js
describe('#photoObjToURL()', function() {
    it('should take a photo object from Flickr and return a string', function() {
        var input = {
            id:       '24770505034',
            owner:    '97248275@N03',
            secret:   '31a9986429',
            server:   '1577',
            farm:     2,
            title:    '20160229090898',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
        };
        var expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
        var actual = FlickrFetcher.photoObjToURL(input);
        expect(actual).to.eql(expected);

        input = {
            id:       '24770504484',
            owner:    '97248275@N03',
            secret:   '69dd90d5dd',
            server:   '1451',
            farm:     2,
            title:    '20160229090903',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
        };
        expected = 'https://farm2.staticflickr.com/1451/24770504484_69dd90d5dd_b.jpg';
        actual = FlickrFetcher.photoObjToURL(input);
        expect(actual).to.eql(expected);
    });
});
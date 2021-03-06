/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeTruthy();
            expect(allFeeds.length).not.toBe(0);
        });

        it('allFeeds should have a defined URL and not be blank', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
                expect(feed.url).not.toEqual('');
            });
        });

        it('allFeeds should have a defined name and not be blank', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
                expect(feed.name).not.toEqual('');
            });
        });
    });

    describe('The menu', function() {
        /* A test that ensures the menu element is
         * hidden by default. */
        it('menu element should be hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        it('menu shows up when menu icon is clicked and disappears when clicked again', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('when loadFeed is called, there is at least one .entry element', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {
        let currFeed;

        // load first feed
        beforeEach(function(done) {
            loadFeed(0, function() {
                currFeed = $('.feed').html();
                done();
            });
        });

        it('make sure content changes when new feed is loaded by loadFeed', function() {
            loadFeed(1, function() {
                expect($('.feed').html()).not.toEqual(currFeed);
            });
        });

    });
}());
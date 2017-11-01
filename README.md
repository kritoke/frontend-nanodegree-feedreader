# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## How to Run Application Test Suites

* Include the 'jasmine/spec/feedreader.js' in the script src entry in the html file after app.js

## Test Suites

* RSS Feeds
  - are defined
  - have a URL
  - have a name
* The menu
  - is hidden by default
  - changes to be visible when clicked, invisible when clicked again
* Initial Entries
  - loadFeed is called and has at least one entry
* New Feed Selection
  - feed content changes when a new feed is added
var video = document.getElementById('currentVideo');
var videoSource = document.getElementById('videoSource');
var fileLocationLive = "http://127.0.0.1:65125/"; // Change port number from 65125 to whatever live server says in browser
var fileLocationPre = "file:///C:/Users/saaso/Desktop/Grad%20School/Spring%202022/DMS%20601%20ML/Diffusion%20Discussion/";
var fourWeeksThumbnail = document.getElementById("fourWeeksThumbnail");
var fourWeeksThumbnailText = document.getElementById("fourWeeksAgoText");
var threeWeeksThumbnail = document.getElementById("threeWeeksThumbnail");
var threeWeeksThumbnailText = document.getElementById("threeWeeksAgoText");
var twoWeeksThumbnail = document.getElementById("twoWeeksThumbnail");
var twoWeeksThumbnailText = document.getElementById("twoWeeksAgoText");
var oneWeekThumbnail = document.getElementById("oneWeekThumbnail");
var oneWeekThumbnailText = document.getElementById("oneWeekAgoText");
var dateRange = document.getElementById("dateRange");
var trendingTerms = document.getElementById("trendingTerms");

function changeVideo4Weeks() {
  if (videoSource.src != fileLocationLive + "videos/4Weeks.mp4") {
    if (videoSource.src == fileLocationLive + "videos/3Weeks.mp4"){
      threeWeeksThumbnail.src = "thumbnails/3Weeks.png";
      threeWeeksThumbnailText.textContent = "April 17th - April 23rd, 2022";
    }
    else if (videoSource.src == fileLocationLive + "videos/2Weeks.mp4") {
      twoWeeksThumbnail.src = "thumbnails/2Weeks.png";
      twoWeeksThumbnailText.textContent = "April 24th - April 30th, 2022";
    }
    else if (videoSource.src == fileLocationLive + "videos/1Week.mp4") {
      oneWeekThumbnail.src = "thumbnails/1Week.png";
      oneWeekThumbnailText.textContent = "May 1st - May 7th, 2022";
    }
    fourWeeksThumbnail.src = "thumbnails/thisWeek.png";
    fourWeeksThumbnailText.textContent = "May 8th - May 14th, 2022";
    dateRange.textContent = "April 10th - April 16th, 2022";
    trendingTerms.textContent = "Trending Search Terms: Scottie Scheffler | Britney Spears | Gilbert Gottfried | Pelicans | Rihanna | Clippers | Warriors";
    video.pause();
    video.getElementsByTagName('source')[0].src="videos/4Weeks.mp4";
    video.load();
    video.play();
  }
  else if (videoSource.src == fileLocationLive + "videos/4Weeks.mp4") {
    fourWeeksThumbnail.src = "thumbnails/4Weeks.png";
    fourWeeksThumbnailText.textContent = "April 10th - April 16th, 2022";
    video.pause();
    video.getElementsByTagName('source')[0].src="videos/thisWeek.mp4";
    video.load();
    video.play();
    dateRange.textContent = "May 8th - May 14th, 2022";
    trendingTerms.textContent = "Trending Search Terms: Happy Mother's Day | Celtics | Warriors vs Grizzlies | Warriors | Miami Heat | Lil Keed | Buffalo";
  }
}

function changeVideo3Weeks() {
  if (videoSource.src != fileLocationLive + "videos/3Weeks.mp4") {
    if (videoSource.src == fileLocationLive + "videos/4Weeks.mp4"){
      fourWeeksThumbnail.src = "thumbnails/4Weeks.png";
      fourWeeksThumbnailText.textContent = "April 10th - April 16th, 2022";
    }
    else if (videoSource.src == fileLocationLive + "videos/2Weeks.mp4"){
      twoWeeksThumbnail.src = "thumbnails/2Weeks.png";
      twoWeeksThumbnailText.textContent = "April 24th - April 30th, 2022";
    }
    else if (videoSource.src == fileLocationLive + "videos/1Week.mp4"){
      oneWeekThumbnail.src = "thumbnails/1Week.png";
      oneWeekThumbnailText.textContent = "May 1st - May 7th, 2022";
    }
    threeWeeksThumbnail.src = "thumbnails/thisWeek.png";
    threeWeeksThumbnailText.textContent = "May 8th - May 14th, 2022"
    video.pause();
    video.getElementsByTagName('source')[0].src="videos/3Weeks.mp4";
    video.load();
    video.play();
    dateRange.textContent = "April 17th - April 23rd, 2022";
    trendingTerms.textContent = "Trending Search Terms: Celtics | Warriors | Johnny Depp | Celtics | Climate Change | Tyson Fury | Celtics";
  }
  else if (videoSource.src == fileLocationLive + "videos/3Weeks.mp4") {
    threeWeeksThumbnail.src = "thumbnails/3Weeks.png";
    threeWeeksThumbnailText.textContent = "April 17th - April 23rd, 2022"
    video.pause();
    video.getElementsByTagName('source')[0].src="videos/thisWeek.mp4";
    video.load();
    video.play();
    dateRange.textContent = "May 8th - May 14th, 2022";
    trendingTerms.textContent = "Trending Search Terms: Happy Mother's Day | Celtics | Warriors vs Grizzlies | Warriors | Miami Heat | Lil Keed | Buffalo";
  }
}

function changeVideo2Weeks() {
  if (videoSource.src != fileLocationLive + "videos/2Weeks.mp4") {
    if (videoSource.src == fileLocationLive + "videos/4Weeks.mp4"){
      fourWeeksThumbnail.src = "thumbnails/4Weeks.png";
      fourWeeksThumbnailText.textContent = "April 10th - April 16th, 2022";
    }
    else if (videoSource.src == fileLocationLive + "videos/3Weeks.mp4"){
      threeWeeksThumbnail.src = "thumbnails/3Weeks.png";
      threeWeeksThumbnailText.textContent = "April 17th - April 23rd, 2022";
    }
    else if (videoSource.src == fileLocationLive + "videos/1Week.mp4"){
      oneWeekThumbnail.src = "thumbnails/1Week.png";
      oneWeekThumbnailText.textContent = "May 1st - May 7th, 2022";
    }
    twoWeeksThumbnail.src = "thumbnails/thisWeek.png";
    twoWeeksThumbnailText.textContent = "May 8th - May 14th, 2022"
    video.pause();
    video.getElementsByTagName('source')[0].src="videos/2Weeks.mp4";
    video.load();
    video.play();
    dateRange.textContent = "April 24th - April 30th, 2022";
    trendingTerms.textContent = "Trending Search Terms: Pelicans | Elon Musk | Champions League | NFL Draft | 2022 NFL Draft | Route 66 | Naomi Judd";
  }
  else if (videoSource.src == fileLocationLive + "videos/2Weeks.mp4") {
    twoWeeksThumbnail.src = "thumbnails/2Weeks.png";
    twoWeeksThumbnailText.textContent = "April 24th - April 30th, 2022"
    video.pause();
    video.getElementsByTagName('source')[0].src="videos/thisWeek.mp4";
    video.load();
    video.play();
    dateRange.textContent = "May 8th - May 14th, 2022";
    trendingTerms.textContent = "Trending Search Terms: Happy Mother's Day | Celtics | Warriors vs Grizzlies | Warriors | Miami Heat | Lil Keed | Buffalo";
  }
}

function changeVideo1Week() {
  if (videoSource.src != fileLocationLive + "videos/1Week.mp4") {
    if (videoSource.src == fileLocationLive + "videos/4Weeks.mp4"){
      fourWeeksThumbnail.src = "thumbnails/4Weeks.png";
      fourWeeksThumbnailText.textContent = "April 10th - April 16th, 2022";
    }
    else if (videoSource.src == fileLocationLive + "videos/3Weeks.mp4"){
      threeWeeksThumbnail.src = "thumbnails/3Weeks.png";
      threeWeeksThumbnailText.textContent = "April 17th - April 23rd, 2022";
    }
    else if (videoSource.src == fileLocationLive + "videos/2Weeks.mp4"){
      twoWeeksThumbnail.src = "thumbnails/2Weeks.png";
      twoWeeksThumbnailText.textContent = "April 24th - April 30th, 2022";
    }
    oneWeekThumbnail.src = "thumbnails/thisWeek.png";
    oneWeekThumbnailText.textContent = "May 8th - May 14th, 2022"
    video.pause();
    video.getElementsByTagName('source')[0].src="videos/1Week.mp4";
    video.load();
    video.play();
    dateRange.textContent = "May 1st - May 7th, 2022";
    trendingTerms.textContent = "Trending Search Terms: Met Gala 2022 | Roe v. Wade | Kailia Posey cause of death | Cinco de Mayo | Dr Strange | Kentucky Derby 2022 | Mother's Day";
  }
  else if (videoSource.src == fileLocationLive + "videos/1Week.mp4") {
    oneWeekThumbnail.src = "thumbnails/1Week.png";
    oneWeekThumbnailText.textContent = "May 1st - May 7th, 2022"
    video.pause();
    video.getElementsByTagName('source')[0].src="videos/thisWeek.mp4";
    video.load();
    video.play();
    dateRange.textContent = "May 8th - May 14th, 2022";
    trendingTerms.textContent = "Trending Search Terms: Happy Mother's Day | Celtics | Warriors vs Grizzlies | Warriors | Miami Heat | Lil Keed | Buffalo";
  }
}

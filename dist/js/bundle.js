'use strict';

/* jshint esversion: 6 */
var userpanel = document.querySelector('.userpanel');
var gobtn = document.querySelector('.gobtn');
var usericon = document.querySelector('.usericon');
var username = document.querySelector('.username');
var profession = document.querySelector('.profession');
var panel = document.querySelector('.panel');
var profile = document.querySelector('.profile');
gobtn.addEventListener("click", function (e) {
  userpanel.classList.toggle("userpanel");
  userpanel.classList.toggle("userpanel-toggled");
  usericon.classList.toggle('usericon');
  usericon.classList.toggle('usericon-toggled');
  username.classList.toggle('username');
  username.classList.toggle('username-toggled');
  profession.classList.toggle('profession');
  profession.classList.toggle('profession-toggled');
  gobtn.classList.toggle('gobtn');
  gobtn.classList.toggle('gobtn-toggled');
  profile.classList.toggle('profile');
  profile.classList.toggle('profile-toggled');
});
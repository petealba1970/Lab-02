'use strict';

const picsArray = [];
let allKeywords = [];
let hornsArray =[];

function Pics(hornObj){
  this.title = hornObj.title;
  this.image_url = hornObj.image_url;
  this.description = hornObj.description;
  this.keyword = hornObj.keyword;
  this.horns = hornObj.horns;

  picsArray.push(this);
}

Pics.prototype.render = function (){

var source = $('#photo-template-handlebars').html();
var template = Handlebars.compile(source);
$('#creatures').append(template(this))

};

$.get('page1.json', data => {
  data.forEach(pics => {
    new Pics(pics).render();
    if (!allKeywords.includes(pics.keyword)) {
      allKeywords.push(pics.keyword)
      $('#drop-down-menu').append($('<option></option>').attr('value', pics.keyword).text(pics.keyword).attr('class', pics.keyword))
    }
    if (!hornsArray.includes(pics.horns)) {
      hornsArray.push(pics.horns)
      $('#drop-down-horns').append($('<option></option>').attr('value', pics.horns).text(pics.horns).attr('class', pics.keyword).attr('data-horns', pics.horns))
    }
  })
})
$('#page-1').click(function () {
  $('section').html('')
  $('#drop-down-menu').html('')
  $('#drop-down-menu').append($('<option></option>').text(' keyword '))
  let allKeywords = [];
  $.get('page1.json', data => {
    data.forEach(pics => {
      new Pics(pics).render();
      if (!allKeywords.includes(pics.keyword)) {
        allKeywords.push(pics.keyword)
        $('#drop-down-menu').append($('<option></option>').attr('value', pics.keyword).text(pics.keyword).attr('class', pics.keyword))
      }
      if (!hornsArray.includes(pics.horns)) {
        hornsArray.push(pics.horns)
        $('#drop-down-horns').append($('<option></option>').attr('value', pics.horns).text(pics.horns).attr('class', pics.keyword).attr('data-horns', pics.horns))
      }
    })
  })
})
$('#page-2').click(function () {
  $('section').html('');
  $('#drop-down-menu').html('');
  $('#drop-down-menu').append($('<option></option>').text(' keyword '))
  $.get('page2.json', data => {
    data.forEach(pics => {
      new Pics(pics).render();
      if (!allKeywords.includes(pics.keyword)) {
        allKeywords.push(pics.keyword)
        $('#drop-down-menu').append($('<option></option>').attr('value', pics.keyword).text(pics.keyword).attr('class', pics.keyword))
      }
      if (!hornsArray.includes(pics.horns)) {
        hornsArray.push(pics.horns)
        $('#drop-down-horns').append($('<option></option>').attr('value', pics.horns).text(pics.horns).attr('class', pics.keyword).attr('data-horns', pics.horns))
      }
    })
  })
})
$('#drop-down-option').click(function () {
  $('section').html('')
  $.get('page1.json', data => {
    data.forEach(pics => {
      new Pics(pics).render();
      if (!allKeywords.includes(pics.keyword)) {
        allKeywords.push(pics.keyword)
        $('#drop-down-menu').append($('<option></option>').attr('value', pics.keyword).text(pics.keyword).attr('class', pics.keyword))
      }
      if (!hornsArray.includes(pics.horns)) {
        hornsArray.push(pics.horns)
        $('#drop-down-horns').append($('<option></option>').attr('value', pics.horns).text(pics.horns).attr('class', pics.keyword).attr('data-horns', pics.horns))
      }
    })
  })
})

$('#drop-down-menu').on('change', function () {

  let currentSelection = $('#drop-down-menu').find(':selected').text()
  event.preventDefault();

  $('h2').hide();
  $('img').hide();
  $('p').hide();
 
  $(`.${currentSelection}`).show();

  
})

$('#drop-down-horns').on('change', function () {

  let currentSelection = $('#drop-down-horns').find(':selected').text()
  event.preventDefault();

  $('h2').hide();
  $('img').hide();
  $('p').hide();

  $(`img[data-horns=${currentSelection}]`).show();

})







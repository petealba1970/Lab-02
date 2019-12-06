'use strict';

// var source = document.getElementById("entry-template").innerHTML;
// var template = Handlebars.compile(source);

const picsArray = [];
let allKeywords = [];

function Pics(hornObj){
  this.title = hornObj.title;
  this.image_url = hornObj.image_url;
  this.description = hornObj.description;
  this.keyword = hornObj.keyword;
  this.horns = hornObj.horns;

  picsArray.push(this);


}

Pics.prototype.render = function (){

//   const ourTemplate = $('#photo-template').html();
//   const $newSection = $('<section></section>');
//   // const ourKeys = $('#drop-down').html();
//   // $newSection.html(ourKeys);
//   $newSection.html(ourTemplate);
//   $newSection.find('h2').text(this.title);
//   $newSection.find('img').attr('src', this.image_url);
//   $newSection.find('p').text(this.description);
//   $newSection.find('img').attr('class', this.keyword);
//   $('main').append($newSection);
// };

var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

const hornTemplate = template(this);
console.log(hornTemplate);

var result = Handlebars.partials["test"]({title: ""})

};

$.get('page1.json', data => {
  allKeywords = [];
  
  data.forEach(pics => {
    if (!allKeywords.includes(pics.keyword)){
      allKeywords.push(pics.keyword);
    }

    $('#drop-down').append($('<option></option>').attr('value', allKeywords).text(pics.keyword).attr('class', pics.keyword));


    new Pics(pics).render();
  });
});


$('select').on('change', function () {

  let clickedPic = $(this).val();

  $('h2').hide();
  $('img').hide();
  $('p').hide();

  $(`.${clickedPic}`).show();

});






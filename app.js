'use strict';

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

    const ourTemplate = $('#photo-template').html();

    const $newSection = $('<section></section>');

    const $keySection = $('<select></select>');
    const ourKeys = $('#drop-down').html();
    
    $keySection.html(ourKeys);
    
    $newSection.html(ourTemplate);

    $newSection.find('h2').text(this.title);

    $newSection.find('img').attr('src', this.image_url);
    $newSection.find('img').attr('alt', this.title);

    $newSection.find('p').text(this.description);

    $keySection.find('drop-down').text(this.keyword);
    $keySection.find('img').attr('class', this.keyword);


    $('main').append($newSection);
    
}

$.get('page1.json', data => {
    allKeywords = [];
  
    data.forEach(pics => {
        if (!allKeywords.includes(pics.keyword)){
               allKeywords.push(pics.keyword)
        }

        $('#drop-down').append($('<option></option>').attr('value', pics.keyword).text(pics.keyword).attr('class', pics.keyword))

        new Pics(pics).render();
    })
})
allKeywords.forEach (keyword => {
    const $keySection = $(`<option value= ${keyword}</option>`);
    $('select').append($keySection);
    console.log('hi');
})



// console.log(allKeywords);

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

    $newSection.find('drop-down').text(this.keyword);


    $('main').append($newSection);
    // $('drop-down').append($keySection);
}

$.get('page1.json', data => {
    allKeywords = [];
    // let option ='';
    data.forEach(pics => {
        if (!allKeywords.includes(pics.keyword)){
               allKeywords.push(pics.keyword)
        // option += '<option value="' + allKeywords.forEach + '">' + '</option>';
        }
        
        // option += '<option value="' + allKeywords.forEach + '">' + '</option>';
        $('#drop-down').append(allKeywords);
        console.log(allKeywords);

        new Pics(pics).render();
    })
})

$.get('page1.json', key => {
    key.forEach(allKeywords => {
        $('#drop-down').append(allKeywords);
    })
}) 

// console.log(allKeywords);

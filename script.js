var imagesData = [
    {
        photo: "images/01.jpg ",
        thumb: "images/thumbnails/01.jpg ",
        title: "'Schönbrunn Palace' Vienna, Austria",
        description: "The Palace is a former imperial summer residence. One of the most important cultural monuments in the country, since the 1960s it has been one of the major tourist attractions in Vienna. The palace and gardens illustrate the tastes, interests, and aspirations of successive Habsburg monarchs. (From: castlesandmanorhouses.com)"
    },
    {
        photo: "images/02.jpg ",
        thumb: "images/thumbnails/02.jpg ",
        title: "'Gyeongbokgung Palace' Seoul, South Korea",
        description: "South Korea’s Gyeongbokgung Palace was built in 1936 and has served as the home of royalty since the Joseon era. Despite the best attempts of attackers to destroy the ancient castle throughout the ages, it still stands strong and is worth visiting. (From travelwanderlust.com)"
    },
    {
        photo: "images/03.jpg ",
        thumb: "images/thumbnails/03.jpg ",
        title: "'Palace of Mont-Saint-Michel', France ",
        description: "Regarded as one of the best castles in France, was built on a tidal island to give it a strategic advantage against aggressors. Legend has it that Archangel Michael ordered the bishop to build a church on the island and construction began in the 10th century. (From travelwanderlust.com)"
    },
    {
        photo: "images/04.jpg ",
        thumb: "images/thumbnails/04.jpg ",
        title: "'Dover Castle' Kent, England",
        description: "It was founded in the 12th century and has been described as the 'Key to England' due to its defensive significance throughout history. During the reign of Henry II began to take recognisable shape. The inner and outer baileys belong to this time. In 1216, a group of rebel barons invited Louis VIII of France to come and take the English crown. He had some success breaching the walls but was unable to take the castle. (castlesandmanorhouses.com)"
    },
    {
        photo: "images/05.jpg ",
        thumb: "images/thumbnails/05.jpg ",
        title: "'Palace of Versailles' Paris, France",
        description: "The Palace of Versailles (or Château de Versailles) is one of the most spectacular achievements of 18th-century French art. The site began as Louis XIII’s hunting lodge before his son Louis XIV transformed and expanded it, moving the court and government of France to Versailles in 1682. (From: castlesandmanorhouses.com)"
    },
    {
        photo: "images/06.jpg ",
        thumb: "images/thumbnails/06.jpg ",
        title: "'Neuschwanstein Castle' Hohenschwangau, Bayern, Germany",
        description: "Regarded by many as one of the best castles in Germany, the Neuschwanstein Castle is jaw-dropping. It was built for King Ludwig II where he resided until he died in 1886. The unique surroundings transition from Alpine foothills near the Austrian border to the hilly terrain in the north. (From: travelwanderlust.com)"
    },
    {
        photo: "images/07.jpg ",
        thumb: "images/thumbnails/07.jpg ",
        title: "'Himeji Castle' Himeji, Hyōgo Prefecture, Japan",
        description: "Himeji Castle is one of the most famous Japanese castles. It sits overlooking the city below. As one of the oldest castles in Japan, it has survived its fair share of bombing and destruction since it was built in 1333. It is widely regarded as the perfect example of Japanese castle architecture and has advanced defensive structures for a castle built in its period. (From: travelwanderlust.com)"
    },
    {
        photo: "images/08.jpg ",
        thumb: "images/thumbnails/08.jpg ",
        title: "'Red Fort' Delhi, India",
        description: "Unlike the architecture of famous medieval castles, the Red Fort is genuinely unique and one of the most beautiful castles in the world. It was commissioned by Shah Jahan in 1638 and was styled after his favourite colours, red and white. (From: travelwanderlust.com)"
    },
    {
        photo: "images/09.jpg ",
        thumb: "images/thumbnails/09.jpg ",
        title: "'Citadel of Aleppo' Aleppo, Syria",
        description: "It is a large medieval fortified palace in the centre of the old city of Aleppo, northern Syria. It is considered to be one of the oldest and largest castles in the world. Usage of the Citadel hill dates back at least to the middle of the 3rd millennium BC. Occupied by many civilizations over time like Armenians, Greeks, Byzantines, Ayyubids, the most of the construction as it stands today is thought to originate from the Ayyubid period. (From: wikipedia)"
    }
]

 
var currentPhoto = 0
var activeIndex = currentPhoto

 
var loadImageContainer = function(currentPhoto) {
    $("#photo").attr("src", imagesData[currentPhoto].photo)
    $("#image-title").text(imagesData[currentPhoto].title)
    $("#image-description").text(imagesData[currentPhoto].description)
}

  
function loadThumbnails(itemData, index) {
    $("#thumbnails-container").append(
        `<div class="thumbnail-box">
            <img class="thumbnail" data-idx="${index}" src="${itemData.thumb}">
            <p class="title">${itemData.title}</p>
        </div>`
    )
}

loadImageContainer(currentPhoto)
imagesData.forEach(loadThumbnails)
$(`.thumbnail[data-idx="${activeIndex}"]`).css({"box-shadow": "0 4px 8px black"})

$("#arrow-left").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto > 0) {
        currentPhoto--
    } else {
        currentPhoto = imagesData.length - 1
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})

$("#arrow-right").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto < imagesData.length - 1) {
        currentPhoto++
    } else {
        currentPhoto = 0
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})

 
$(".thumbnail").click(function(event) {
    activeIndex = currentPhoto
    var idxClicked = $(event.target).attr("data-idx")
    var idxNumber = parseInt(idxClicked)
    currentPhoto = idxNumber
    activeThumbnail(activeIndex)
    loadImageContainer(currentPhoto)
})

function activeThumbnail (activeIndex) {
    $(`.thumbnail[data-idx="${activeIndex}"]`).removeAttr("style")
    activeIndex = currentPhoto
    $(`.thumbnail[data-idx="${activeIndex}"]`).css("box-shadow", "0 4px 8px black")
}
const news = [
    {
        category: "JavaScript",
        title: "JavaScript оживляє сторінку",
        description: "DOM дає змогу змінювати вміст сайту без перезавантаження.",
        date: "12 листопада"
    },
    {
        category: "Дизайн",
        title: "Чому картки зручні для новин",
        description: "Короткі блоки допомагають швидко переглядати інформацію.",
        date: "13 листопада"
    },
    {
        category: "JavaScript",
        title: "Масив об'єктів замість десятків тегів",
        description: "Один цикл може створити багато однакових елементів.",
        date: "14 листопада"
    },
    {
        category: "Дизайн",
        title: "Адаптивна стрічка на Flexbox",
        description: "Картки переходять на новий рядок на невеликих екранах.",
        date: "15 листопада"
    },
    {
        category: "JavaScript",
        title: "Фільтрування новин",
        description: "Метод filter() повертає дані лише потрібної категорії.",
        date: "16 листопада"
    }
];
let card = document.createElement("article");
card.classList.add("news-card");


let newsList = document.querySelector('#news-list');
let newsCount = document.querySelector('#news-count');
function setActiveButton(activeButton){
    allButton.classList.remove('active');
    jsButton.classList.remove('active');
    designButton.classList.remove('active');
    activeButton.classList.add("active");


function renderNews(items){
    newsList.innerHTML = "";
    for (let item of items){
        let card = document.createElement("article");
        card.classList.add("news-card");

        let tag = document.createElement("span");
        tag.classList.add("tag");
        tag.textContent = item.category;

        let title = document.createElement("h2");
        title.textContent = item.title;

        let description = document.createElement("p");
        description.textContent = item.description;

        let date = document.createElement("small");
        date.textContent = item.date;

        card.append(tag, title, description, date);
        newsList.prepend(card);


    }
    newsCount.textContent = items.length;

}



renderNews(news);
let allButton = document.querySelector('#show-all')
let jsButton = document.querySelector('#show-js')
let designButton = document.querySelector('#show-design')

allButton.addEventListener('click', function (){
    renderNews(news);
    setActiveButton(allButton);
                                              })
jsButton.addEventListener('click', function(){
    let jsNews = news.filter(function(item){
        return item.category === "JavaScript"
    });
    renderNews(jsNews);
    setActiveButton(jsButton);
    })

designButton.addEventListener('click', function(){
    let designNews = news.filter(function(item){
        return item.category === "Дизайн"
    });
    renderNews(designNews);
    setActiveButton(designButton);
})
}

// card.textContent = news[0].title;
// newsList.append(card);
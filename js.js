// Теоретичне питання
// Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.
//використовується для предотвращения виконання коду у випадку якоїсь помилки    Частіше використовується для запитів на серверах

// Завдання
// Дано масив books.

// Виведіть цей масив на екран у вигляді списку (тег ul – список має бути згенерований за допомогою Javascript).
// На сторінці повинен знаходитись div з id="root", куди і потрібно буде додати цей список (схоже завдання виконувалось в модулі basic).
// Перед додаванням об'єкта на сторінку потрібно перевірити його на коректність (в об'єкті повинні міститися всі три властивості - author, name, price).
// Якщо якоїсь із цих властивостей немає, в консолі має висвітитися помилка із зазначенням - якої властивості немає в об'єкті.
// Ті елементи масиву, які не є коректними за умовами попереднього пункту, не повинні з'явитися на сторінці.

const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];

class NotEnoghInfoError extends Error{
    constructor(bookname, parametr){
        super()
        this.name = "NotEnoghInfoError"
        this.message = `can't add book ${bookname} because of parametr ${parametr} doesn't excist`
    }
}

class BookElement{
    constructor({author, name, price}){
        if(!author || !price){
            let param = "author"
            if(!price){
                param = "price"
            }
            throw new NotEnoghInfoError (name, param)
        } 
     this.author = author;
     this.name = name;
     this.price = price;
     this.li = document.createElement("li")
    }
    render(container){
        this.li.innerText = `book ${this.name} author ${this.author} price ${this.price} usd`
        container.append(this.li)
    }
}

const list = document.createElement("ul")
document.body.append(list)
books.forEach(book => {
    try{
        new BookElement(book).render(list)
    }
    catch(error){
     if(error.name === "NotEnoghInfoError"){
        console.error(error)
     } else{
        throw error;
     }
    }
})
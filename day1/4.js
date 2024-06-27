
async function getInfo(object) { 
    const response = await fetch(object).then(response => response.json());
    const { address: { city, street, house }, person: { lastName, firstName }, productsOrder: { count, product: { name } } } = response;
    console.log(`Город: ${city} Улица: ${street} Дом: ${house}`);
    console.log(`Фамилия: ${lastName} Имя: ${firstName} Купил: ${count}шт Товаров: ${name}`);
}
let url='https://raw.githubusercontent.com/jakiichu/data/main/data.json'
getInfo(url)
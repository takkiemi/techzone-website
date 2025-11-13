function addToCart(productName, price) {
    alert('✅ Товар "' + productName + '" додано в кошик!\n💰 Ціна: ' + price + ' ₴');
}

function buyNow(productName, price) {
    if (confirm('Ви дійсно хочете купити "' + productName + '" за ' + price + ' ₴?')) {
        alert('🎉 Вітаємо з покупкою! Товар "' + productName + '" буде доставлений протягом 1-2 днів.');
    }
}

function submitForm(event) {
    event.preventDefault();
    alert('📨 Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
    event.target.reset();
}
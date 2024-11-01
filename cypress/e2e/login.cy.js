describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашла на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })
     it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').click(); // Нажала забыли пароль
        cy.get('#mailForgot').type('marie_malkina@mail.ru'); // Ввела почту
        cy.get('#restoreEmailButton').click(); // Нажала Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после нажатия отправить код, вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio333'); // Ввела неверный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })    
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('german@dolnikov.ruyy'); // Ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввела  логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
    it('Чувствительность к регистру', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('GerMan@dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

})
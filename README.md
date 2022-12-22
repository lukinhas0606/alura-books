# Alura Books

[Veja esta página em português](#detalhes-do-projeto).

Development of a responsive Home Page for Alura Books (which is in Portuguese), a Form Page with autofill for address inputs when a valid ZIP Code is typed, and a Books Page where the user can filter/sort books.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Loja de livros Alura Books**
| :label: Tecnologias | HTML, CSS, JavaScript
| :rocket: URL         | https://zingarelli.github.io/alura-books/
| :fire: Course     | https://www.alura.com.br/curso-online-html-css-responsividade-mobile-first

![](https://user-images.githubusercontent.com/19349339/191834081-b8b3c1b2-368d-4763-a28a-cb14f1f25686.png#vitrinedev)

## Project Details

The [Home Page](https://zingarelli.github.io/alura-books) was created using a **"Mobile First"** approach, in which we first created the layout for smaller screens (up to 428 pixels) and then adapted the layout for larger screens (1024 and 1728 pixels). The design was [provided in a Figma file](https://www.figma.com/file/sSMbIqKaGBd66Y8roxTk2p/AluraBooks?node-id=37%3A94). 

For the [Form](https://zingarelli.github.io/alura-books/form.html) and [Books](https://zingarelli.github.io/alura-books/livros.html) pages, HTML and CSS files were already provided, and the focus was working with JavaScript. 

The **Form Page** is composed of several inputs for a customer to fill in his/her personal data (name, contact, address, etc.) We used **JavaScript** to autofill some of these inputs, by **fetching data from an API**. When the user types his/her ZIP Code (CEP in portuguese), we use an API called *viaCEP* to fetch data regarding the address for that ZIP code (or an error if the code is invalid or is a non-existent address). We then use this data to automatically fill the appropriate inputs (address, district, city and state) or show the user an error message.

The **Books Page** showed a list of books and buttons to filter books by category (Front End, Back End and Data Science books), by availability (books in stock) and also a button to sort books by price (ascending order). We used JavaScript to fetch information for each book from [this URL](https://guilhermeonrails.github.io/casadocodigo/livros.json) (which acted as response from an API), and also to add events to the buttons and handle the filter/sort options.

### List of pages developed

- [Home Page](https://zingarelli.github.io/alura-books);
- [Address Form](https://zingarelli.github.io/alura-books/form.html);
- [List of Books](https://zingarelli.github.io/alura-books/livros.html).

## Credits

This project was developed in three courses from [Alura](https://www.alura.com.br):

- "HTML e CSS: responsividade com mobile-first" (HTML and CSS: mobile-first responsive design);
- "JavaScript: consumindo e tratando dados de uma API" (JavaScript: consuming and dealing with data from an API);
- "JavaScript: métodos de array" (JavaScript: array methods).

**Instructors**: 
- **[Mônica Mazzochi Hillman](https://github.com/MonicaHillman)**
- **[Guilherme Lima](https://www.linkedin.com/in/guilherme-lima-458925178/)**

## How the project was developed

### Responsive Home Page

The Home Page was developed with a "mobile-first approach", which means that we structured HTML and CSS files in order to adapt the layout to a small screen and then proceeded to larger screens, where more space is available to position elements or even add new ones. In order to do that, we used "media queries":

```css
@media screen and (min-width: 1024px){ ... }
@media screen and (min-width: 1728px){ ... }
```

Since the Home Page has a lot of sections, CSS was split into several files, one for each section, for a better organization. These files were imported to a "main" CSS file, called `styles.css`, using the `@import` statement:

```css
@import url('styles/header.css');
@import url('styles/banner.css');
@import url('styles/carousel.css');
/* and so on */
```

We defined variables in the `styles.css` file for colors and fonts used, preventing repetition and favouring reuse and maintenance of our code. Whenever a change in color or font needs to be applied, we only modify these variables. For example:

```css
--light-grey: #858585;
--gradient-blue: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
--main-font: 'Poppins';
```

There's a submenu that is shown only when the user touches/clicks a button (an "hamburger" icon for smaller screens or a nav button for largers screens). We used only HTML and CSS to enable this interaction (by using a checkbox input, CSS selectors and the `display` property). This can be checked in the `header.css` file. Here's an animation of this interaction:

![gif showing a submenu appearing when an icon is touched](https://user-images.githubusercontent.com/19349339/191840550-8d416861-8c70-479b-976b-0751b2587588.gif)

The Home Page has two sections showing book covers, using a "carousel style" effect. For that, we used [Swiper](https://swiperjs.com), a free JavaScript plugin. We learned the basics to configuring it and then styled it using CSS. The next animation shows the Swiper in action:

![gif showing the usage of Swiper](https://user-images.githubusercontent.com/19349339/191842107-26dc4d92-386c-4d5e-aed5-d2b02c016e60.gif)

We also learned how to use advanced selectors (`~` and `>`),  pseudoclasses (`:hover` and `:checked`) and pseudoelements (`::placeholder`) to add more style options to the layout.

### Autofill in Form Page
For the Form Page, we focused on JavaScript and learned how to fetch and use data from an API. When the user types a ZIP Code (CEP in portuguese), we send that code to an API called ["viaCEP"](https://viacep.com.br), which returns data regarding the address for that code (or an error if the code is invalid or if it is a non-existent address). We then use this data to automatically fill the appropriate inputs (address, district, city and state). If an error is returned, a message is show right below the ZIP Code's input, informing the user to check if the code is correct.

The animation below shows the user typing valid and invalid ZIP codes:

![gif showing using typing a valid and then an invalid ZIP code](https://user-images.githubusercontent.com/19349339/191845910-dd756ccb-3bb6-4330-9d87-4229db96e8e8.gif)

During the development of this page, we learned several JavaScript topics:

- we learned how asynchronous JavaScript works;
- we used `fetch()` method to retrieve data from an API and learned the concept behind "promises" (the object returned by asynchronous functions);
- we learned how to work with promises using methods such as: `json()`, `then()`, `catch()`, `finally` and `Promise.all()`;
- we learned how to create asynchronous functions using keywords `async` and `await`;
- we manipulated the DOM using methods like `getElementById()` and `addEventListener()`;
- we modified values in the HTML file using the `innerText` and `value` properties.

### Manipulating arrays in the Books Page
![books page showing buttons and information of some books](https://user-images.githubusercontent.com/19349339/194153891-56ce96b7-3e7d-4269-8b14-69078d3efd87.png)

Books Page shows several books and details about them (a category tag, book cover, title, author and price). All this information comes from an API, so we use JavaScript to fetch that data, insert it into an array called `books` and manipulate this array to create the HTML elements for each book.

When a book is out of stock, we add CSS property `opacity: 0.3` to its cover, to indicate that the book is unavailable. 

There are five buttons that the user can click: three to filter books by category (Front End, Back End and Data Science), one to filter available books and one to sort books by price (ascending order). We use JavaScript to add an onclick event to each button and manipulate the `books` array in order to apply the appropriated filter/sort method. 

We learned how to manipulate arrays using these JavaScript methods:

- `forEach()`: to iterate `books` array and use its information to create the necessary HTML tags to display each book;
- `map()` and the spread operator (`[...book]`): to apply a discount to the price of every book and update the array;
- `filter()`: to select books based on its category or availability;
- `sort()`: to sort books by price;
- `reduce()`: to sum the price of all available books, in order to display a sales ad at the bottom of the page, showing the total price of purchasing all books. 

---

## Detalhes do projeto

Desenvolvimento de um site para a Alura Books, com uma página inicial responsiva, outra com um formulário que preenche automaticamente dados de endereço ao informar o CEP e uma página de livros em que a pessoa pode ordenar e filtrar os livros listados.

A [página inicial](https://zingarelli.github.io/alura-books) foi criada com o conceito de "mobile first", em que nós inicialmente desenvolvemos o layout para telas pequenas (até 428 pixels) e depois fazemos as adaptações necessárias para telas maiores (1024 e 1728 pixels). O design da página foi [disponibilizado em um arquivo Figma](https://www.figma.com/file/sSMbIqKaGBd66Y8roxTk2p/AluraBooks?node-id=37%3A94). 

Para as páginas de [Formulário](https://zingarelli.github.io/alura-books/form.html) e [Livros](https://zingarelli.github.io/alura-books/livros.html), os arquivos HTML e CSS foram disponibilizados prontos, com o foco sendo em desenvolver a interação por meio do JavaScript. 

A **página de formulário** é formada por diversos campos de entrada para que a pessoa preencha seus dados pessoais (nome, contato, endereço, etc.). Nós utilizamos o **JavaScript** para preencher automaticamente os dados de endereço, **obtendo estes dados de uma API**. Quando a pessoa digita um CEP, fazemos uma chamada à API *viaCEP* para obter os dados de endereço referentes a este CEP (ou um erro, caso tenha sido digitado um CEP inválido ou um endereço que não existe). Os dados são inseridos nos campos de entrada apropriados ou uma mensagem de erro é mostrada à pessoa.
 
A **página de livros** mostra uma lista de livros e possui botões para que possa ser aplicado um filtro de livros por categoria (Front End, Back End e Dados), por disponibilidade (livros em estoque) e também um botão para ordenar os livros por preço (ordem crescente). Utilizamos o JavaScript para recuperar as informações de cada livro, disponíveis [nesta URL](https://guilhermeonrails.github.io/casadocodigo/livros.json) (que atuou como sendo a resposta de uma API); e também para adicionar eventos aos botões para tratar as ações de filtro/ordenação.

### Páginas criadas

- [Página inicial](https://zingarelli.github.io/alura-books);
- [Formulário de cadastro](https://zingarelli.github.io/alura-books/form.html);
- [Lista de livros](https://zingarelli.github.io/alura-books/livros.html).

## Créditos

Este projeto foi construído a partir de três cursos da  [Alura](https://www.alura.com.br):

- "HTML e CSS: responsividade com mobile-first";
- "JavaScript: consumindo e tratando dados de uma API";
- "JavaScript: métodos de array".

**Instrutores**: 
- **[Mônica Mazzochi Hillman](https://github.com/MonicaHillman)**
- **[Guilherme Lima](https://www.linkedin.com/in/guilherme-lima-458925178/)**

## Como o projeto foi desenvolvido

### Página inicial responsiva

A página inicial foi feita com o conceito de "mobile-first", estruturando inicialmente os arquivos HTML e CSS de modo a criar um layout para telas pequenas (mobile) e a partir daí seguir para telas maiores, onde há mais espaço para posicionar os elementos ou até adicionar novos. Para que isso fosse possível, nós utilizamos as chamadas "media queries" no CSS:

```css
@media screen and (min-width: 1024px){ ... }
@media screen and (min-width: 1728px){ ... }
```

Como a página inicial possui várias seções, o CSS foi dividido em vários arquivos, um para cada seção, de modo a ficar mais organizado qual estilo pertencia a qual seção. Estes arquivos foram importados para um arquivo CSS "principal", chamado `styles.css`, usando a declaração `@import`:

```css
@import url('styles/header.css');
@import url('styles/banner.css');
@import url('styles/carousel.css');
/* e por aí vai */
```

Foram definidas variáveis no arquivo `styles.css` para as cores e fontes utilizadas, eliminando a repetição e favorecendo o reúso e manutenção do código. Toda vez que é necessária uma mudança na cor ou em uma fonte, precisamos somente modificar estas variáveis, ao invés de substituí-las em todo o código. Por exemplo

```css
--cinza-claro: #858585;
--azul-degrade: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
--fonte-principal: 'Poppins';
```
Há um submenu que somente é exibido quando a pessoa toca/clica em um botão (representado por um ícone de "hamburger" em telas mobile ou um botão de navegação em "CATEGORIAS" em telas maiores). Essa interação foi feita utilizando somente HTML e CSS (por meio de um input de `checkbox`, seletores CSS e a propriedade `display`). Isso pode ser verificado no arquivo `header.css` file. Segue um gif mostrando essa interação em tela mobile:

![gif mostrando um submenu aparecendo quando um ícone é tocado](https://user-images.githubusercontent.com/19349339/191840550-8d416861-8c70-479b-976b-0751b2587588.gif)

A página inicial possui duas seções mostrando capas de livros com um efeito "carrosel". Para aplicar este efeito, foi utilizado o [Swiper](https://swiperjs.com), um plugin JavaScript gratuito. Nós aprendemos o básico para configurá-lo e estilizá-lo com CSS. O gif a seguir mostra o efeito do Swiper em ação:

![gif mostrando o uso do Swiper deslizando as capas dos livros](https://user-images.githubusercontent.com/19349339/191842107-26dc4d92-386c-4d5e-aed5-d2b02c016e60.gif)

Também aprendemos a utilizar seletores CSS avançados (`~` e `>`),  pseudoclasses (`:hover` e `:checked`) e pseudoelementos (`::placeholder`) para adicionar mais opções de estilo customizadas ao layout.

### Autopreenchimento na página de formulário

Para a página de formulário, focamos no JavaScript e aprendemos como obter e usar dados vindos de uma API. Quando a pessoa digita um CEP, enviamos este CEP para a API ["viaCEP"](https://viacep.com.br), que retorna os dados referentes a este CEP (ou um erro caso o código seja inválido ou o endereço não exista). Depois, utilizamos estes dados para preencher os campos apropriados (endereço, bairro, cidade e estado). Se a API retornar um erro, é exibida uma mensagem logo abaixo do campo de CEP, informando à pessoa para verificar se o código digitado está correto.

O gif abaixo mostra uma pessoa digitando um CEP válido e outro inválido:

![gif mostrando uma pessoa digitando um cep válido e outro inválido](https://user-images.githubusercontent.com/19349339/191845910-dd756ccb-3bb6-4330-9d87-4229db96e8e8.gif)

No desenvolvimento desta página, aprendemos diversos tópicos sobre JavaScript:

- como funciona o JavaScript assíncrono;
- como usar o método `fetch()` para obter dados de uma API e o conceito por trás de "promises" (que é o objeto retornado por funções assíncronas);
- como trabalhar com promises usando métodos como: `json()`, `then()`, `catch()`, `finally` e `Promise.all()`;
- como criar funções assíncronas por meio das palavras reservadas `async` e `await`;
- como manipular o DOM com métodos `getElementById()` e `addEventListener()`;
- como modificar valores de elementos HTML utilizando as propriedades `innerText` e `value`.

### Manipulação de arrays na página de livros

![página de livros mostrando os botões e informações de alguns livros](https://user-images.githubusercontent.com/19349339/194153891-56ce96b7-3e7d-4269-8b14-69078d3efd87.png)

A página de livros mostra diversos livros e detalhes sobre cada um deles (uma tag com a categoria, a capa, o título, autor e preço). Todas essas informações vêm da API, então utilizamos o JavaScript para obter os dados, inserí-los em um array chamado `books` e manipular este array para criar os elementos HTML necessários para mostrar cada livro.

Quando não há algum livro disponível no estoque, nós aplicamos a propriedade CSS  `opacity: 0.3` na capa do livro, indicando sua indisponibilidade. 

Há cinco botões que podem ser clicados: três para filtrar os livros por categoria (Front-End, Back-End e Dados), um botão para filtrar livros por disponibilidade (remove os indisponíveis) e um para ordenar por preço (ordem crescente). Utilizamos o JavaScript para inserir evento de clique em cada botão e manipular o array de livros, de modo a aplicar o método apropriado para efetuar a filtragem/ordenação.

Apredemos a manipular arrays utilizando os seguintes métodos em JavaScript:

- `forEach()`: para iterar no array de livros e usar as informações para criação dos elementos HTML necessários;
- `map()` e o chamado ["spread operator"](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (`[...book]`): para aplicar um desconto no preço de todos os livros e atualizar o array;
- `filter()`: para selecionar os livros baseado na categoria ou disponibilidade;
- `sort()`: para ordenar os livros por preço;
- `reduce()`: para somar o preço de todos os livros disponíveis, de modo a exibir uma propaganda de oferta ao final da página, mostrando o valor total se comprar todos os livros. 
const tab = document.getElementById('main');
const button = document.getElementById('button');
button.onclick = func;
function func(){
    const main = document.getElementById('container-Ai');
    // to make the icon invisible
    const none = document.getElementById('center');
    none.style.display = "none";
    // header of the topic in the container
    const header = document.createElement('h1');
    header.className = "h1";
    const headerContent = document.createTextNode('class 9 mathematics');
    header.append(headerContent);
    // ending header
    // topic header "mathematics topic of class 9"
    const head = document.createElement('h2');
    head.className = "h2";
    const headContent = document.createTextNode('mathematics topics of class 9 ')
    head.append(headContent);
    // ending of the second header
    // list of the chapters 
    const li = document.createElement('li');
    li.className = "list-ai";
    const liContent = document.createTextNode('Number system');
    li.append(liContent);
    // ending of the number system list
    // startingof the liner equation list
    const liLin = document.createElement('li');
    liLin.className = "list-ai";
    const liLinContent = document.createTextNode('linear equation in two variables');
    liLin.append(liLinContent);
    // ending list
    //  list of polynomials
    const liPol = document.createElement('li');
    liPol.className = "list-ai";
    const liPolContent = document.createTextNode('polynomials');
    liPol.append(liPolContent);
    // polynomials list ending
    // statistics list starting
    const lista = document.createElement('li');
    lista.className = "list-ai";
    const contentLista = document.createTextNode('statistics');
    lista.append(contentLista);
    //  ending of list 
    // lines and angles list
    const line = document.createElement("li");   
    line.className = "list-ai";
    const lineContent = document.createTextNode('lines and angles');
    line.append(lineContent);
    // ending of lines and angles list
    // ending of the chapter list
    // message for the users
    const message = document.createElement('div');
    message.className = "message";
    const messageContent = document.createTextNode("these are the available chapters in infonet");
    message.append(messageContent);
    // message ending
    // intoduction to number system
    // header "number system"
    const headerNumberSys = document.createElement("h1");
    headerNumberSys.style.color = "#37cff0";
    headerNumberSys.style.fontSize = "2rem";
    const headerNumberSysContent = document.createTextNode('Number system');
    headerNumberSys.append(headerNumberSysContent);
    //  header ending
    // chapter startin introductiono
    const intro = document.createElement('h2');
    intro.className = "h2";
    const introContent = document.createTextNode('introduction to number system');
    intro.append(introContent);
    //  ending  of  header ofintroduction
    //  intro
    const itn = document.createElement('p');
    const inCo = document.createTextNode('The number system or the numeral system is the system of naming or representing numbers. We know that a number is a mathematical value that helps to count or measure objects and it helps in performing various mathematical calculations. There are different types of number systems in Maths like decimal number system, binary number system, octal number system, and hexadecimal number system. In this article, we are going to learn what is a number system in Maths, different types, and conversion procedures with many number system examples in detail.');
    itn.append(inCo);
    document.createElement('br');
    
    const introP = document.createElement('p');
    const introPContent = document.createTextNode('a number system is defined as a system of writing to express numbers. It is the mathematical notation for representing numbers of a given set by using digits or other symbols in a consistent manner. It provides a unique representation of every number and represents the arithmetic and algebraic structure of the figures.');
    introP.append(introPContent);
   









    button.onclick = func
    function func() {
        button.className="btn";
    }
    
    main.append(header,head,li,liLin,liPol,lista,line,message,headerNumberSys,intro,itn,introP);
}
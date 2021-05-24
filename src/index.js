import Chart from "chart.js/auto";
import "./styles/styles.scss";

const typeBox = document.querySelector(".type-box input");
const sendButton = document.querySelector(".type-box button");
const chatBox = document.getElementById("chat-box");
const myChart = document.getElementById("myChart").getContext("2d");
const maincontent = document.getElementsByClassName("main-content");
const request = document.getElementById("request");
const reviews = document.getElementById("reviews");
const credit = document.getElementById("credit");
const help = document.getElementById("help");
const nav = document.querySelectorAll('nav li');
const tabs = document.querySelectorAll('.tabs h4');
const typing = document.querySelector('.typing');
const mainContent = document.querySelector('.main-content');
const log = document.querySelector('.log');

// functions

const visibility = (element,cname) => {
  element.forEach( item => {
    item.addEventListener('click', () => {
      element.forEach( v => v.classList.remove(cname) );
      item.classList.add(cname);
    })
  })  
};


visibility(nav,'active');
visibility(tabs,'active');


reviews.addEventListener('click', () => mainContent.classList.add('visibility'));
request.addEventListener('click', () => mainContent.classList.remove('visibility'));

tabs[1].addEventListener('click', () => log.classList.add('visibility'));
tabs[0].addEventListener('click', () => log.classList.remove('visibility'));











// typing


typeBox.oninput = () => {
  if( typeBox.value.length === 0) {
    typing.classList.add('hide');
  } else {
    typing.classList.remove('hide');   
  }    
}







typeBox.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    sendButton.click();
  }
})


sendButton.addEventListener("click", () => {
  typing.classList.add('hide');
  if (typeBox.value.length > 0) {
    chatBox.innerHTML += `
        <div id="sent" class="sent"> 
        <div class="message">
                <p class="message-text">${typeBox.value}</p>
                <p class="message-date">
                10:39 AM
                <img class="read" src="./icons/tick (1).svg" alt="" />
                </p>
            </div>
                <img class="user-pic chat-person" src="./images/salt.jpg" alt="" />
        </div>        
        `;
    chatBox.scrollTop = chatBox.scrollHeight;
  } else {
    return false;
  }
});

Chart.defaults.font.size = 10;

let requestChart = new Chart(myChart, {

  type: "line",
  data: {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesay",
      "Tursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        data: [15, 12, 6, 27, 20, 13, 28, 80],
        lineTension: 0.3,
        backgroundColor: "#e755ba",
        fill: false,
        borderColor: "#4d8cf4",
        backgroundColor: "#e755ba",
        pointBackgroundColor: "white",
        borderWidth: 4,
        fillColor : "yellow",

      },
    ],
  },
  options: {
    scales: {
      y: {
        display : false,
        borderWidth : 4
      },
    },
    plugins: {
        legend: {
           display:false,
          }
    },
    layout: {
        padding: {
            bottom : 40,
            left : 30,
            right : 30

        }
    }
  },
});

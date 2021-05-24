import Chart from "chart.js/auto";
import "./styles/styles.scss";

const typeBox = document.querySelector(".type-box input");
const sendButton = document.querySelector(".type-box button");
const chatBox = document.getElementById("chat-box");
const myChart = document.getElementById("myChart");
const maincontent = document.getElementsByClassName("main-content");
const request = document.getElementById("request");
const reviews = document.getElementById("reviews");
const credit = document.getElementById("credit");
const help = document.getElementById("help");
const nav = document.querySelectorAll("nav li");
const tabs = document.querySelectorAll(".tabs h4");
const typing = document.querySelector(".typing");
const mainContent = document.querySelector(".main-content");
const log = document.querySelector(".log");
const users = document.querySelector(".users");

myChart.style.width = "100%";
myChart.style.height = "100%";
myChart.width = myChart.offsetWidth;
myChart.height = myChart.offsetHeight;

let userpics = [
  {
    pic: "https://images.unsplash.com/photo-1559548331-f9cb98001426?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    activity: "online",
  },
  {
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    activity: "online",
  },
  {
    pic: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80",
    activity: "",
  },
  {
    pic: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    activity: "",
  },
  {
    pic: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    activity: "online",
  },
  {
    pic: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  },
];

let activityLog = [
  {
    task: "Call Glenn M.",
    activity: "away",
    status: "Call",
  },
  {
    task: "Meet Glenn M.",
    activity: "online",
    status: "Appoinment",
  },
];

// generating users

userpics.forEach((item) => {
  users.innerHTML += `
  <figure>  
    <span class=${item.activity}></span> 
    <img
      class="user-pic"
      src=${item.pic}
      alt=""
    />
  </figure>
  `;
});

// generating activity log

activityLog.forEach((item) => {
  log.innerHTML += `
  <div class="log-item">
              <img src="/src/icons/ac.svg" alt="" />
              <p><span class=${item.activity}></span> ${item.task}</p>
              <div class="log-status ${item.activity}-color">${item.status} <img src="/src/icons/cancel.svg" alt="" /></div>
              <img src="/src/icons/trash (1).svg" alt="" />
  </div>
  `
});

// functions

const visibility = (element, cname) => {
  element.forEach((item) => {
    item.addEventListener("click", () => {
      element.forEach((v) => v.classList.remove(cname));
      item.classList.add(cname);
    });
  });
};

visibility(nav, "active");
visibility(tabs, "active");

reviews.addEventListener("click", () =>
  mainContent.classList.add("visibility")
);
request.addEventListener("click", () =>
  mainContent.classList.remove("visibility")
);

tabs[1].addEventListener("click", () => log.classList.add("visibility"));
tabs[0].addEventListener("click", () => log.classList.remove("visibility"));

// typing

typeBox.oninput = () => {
  if (typeBox.value.length === 0) {
    typing.classList.add("hide");
  } else {
    typing.classList.remove("hide");
  }
};

typeBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    sendButton.click();
  }
});

sendButton.addEventListener("click", () => {
  typing.classList.add("hide");
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
    typeBox.value = "";
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
        fillColor: "yellow",
      },
    ],
  },
  options: {
    scales: {
      y: {
        display: false,
        borderWidth: 4,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 30,
        right: 30,
        bottom: 20,
      },
    },
    // animation: {
    //   onComplete: function () {

    //     var ctx = myChart.getContext("2d");
    //     console.log(ctx);
    //     ctx.font = myChart.scale.font;
    //     ctx.fillStyle = myChart.scale.textColor
    //     ctx.textAlign = "center";
    //     ctx.textBaseline = "bottom";

    //     myChart.datasets.forEach(function (dataset) {
    //         dataset.points.forEach(function (points) {
    //             ctx.fillText(points.value, points.x, points.y - 10);
    //         });
    //     })
    // }
    // }
  },
});

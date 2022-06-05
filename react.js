// preloader action
window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});

// menu button toggle
document.getElementById("menu"),
  addEventListener("click", function () {
    document.getElementById("menuContent").classList.toggle("-left-full");
    document.getElementById("menuContent").classList.toggle("left-0");
    document.getElementById("close").classList.toggle("hidden");
    document.getElementById("harmbuger").classList.toggle("hidden");
  });

// fading in and sliding in of columns
const faders = document.querySelectorAll(".fade-in");

const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

// whatsapp chatbot
(function () {
  var options = {
    whatsapp: "+2348054945601", // WhatsApp number
    call_to_action: "Hire me", // Call to action
    position: "right", // Position may be 'right' or 'left'
  };
  var proto = document.location.protocol,
    host = "getbutton.io",
    url = proto + "//static." + host;
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = url + "/widget-send-button/js/init.js";
  s.onload = function () {
    WhWidgetSendButton.init(host, proto, options);
  };
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);
})();
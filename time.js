document.addEventListener("DOMContentLoaded", () => {
  const date = document.querySelector("#date");
  const time = document.querySelector("#time");

  updateTime(date, time);
  setInterval(() => updateTime(date, time), 10000);
});

const updateTime = (date, time) => {
  const now = new Date();
  
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const dateString = dateFormatter.format(now);
  const timeString = timeFormatter.format(now);

  date.textContent = dateString;
  time.textContent = timeString;
};
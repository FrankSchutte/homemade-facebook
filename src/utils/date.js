export function formatDateTime(timestamp) {
  const d = dateObj(timestamp);
  return date(d) + " " + time(d);
}

export function formatDate(timestamp) {
  const d = dateObj(timestamp);
  return date(d);
}

export function formatTime(timestamp) {
  const d = dateObj(timestamp);
  return time(d);
}

function date(d) {
  return ("0" + d.getDate()).slice(-2) + "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
    d.getFullYear();
}

function time(d) {
  return ("0" + d.getHours()).slice(-2) + ":" +
    ("0" + d.getMinutes()).slice(-2) + ":" +
    ("0" + d.getSeconds()).slice(-2);
}

function dateObj(timestamp) {
  return new Date(timestamp);
}
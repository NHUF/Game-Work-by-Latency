let geld = 0;

function doAction(action) {
  let status = document.getElementById("status");

  if (action === "arbeiten") {
    geld += 10;
    status.textContent = "Du hast gearbeitet und nun " + geld + " Münzen.";
  }

  if (action === "shop") {
    if (geld >= 20) {
      geld -= 20;
      status.textContent = "Du hast etwas im Shop gekauft! Verbleibend: " + geld + " Münzen.";
    } else {
      status.textContent = "Du hast nicht genug Münzen!";
    }
  }
}

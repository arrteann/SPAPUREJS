document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.nodeName != "I") return;

  let data = {};
  switch (e.target.getAttributeNode("item-id").value) {
    case "home":
      data = { title: "HOME", text: "HOME PAGE", itemId: "home" };
      update(data);
      history.pushState(data, "home", "/home");
      break;
    case "search":
      data = { title: "SEARCH", text: "SEARCH PAGE", itemId: "search" };
      update(data);
      history.pushState(data, "search", "search");
      break;
    case "mail":
      data = { title: "MAIL", text: "MAIL PAGE", itemId: "mail" };
      update(data);
      history.pushState(data, "mail", "/mail");
      break;
    case "game":
      data = { title: "GAME", text: "GAME PAGE", itemId: "game" };
      update(data);
      history.pushState(data, "game", "game");
      break;

    default:
      data = { title: "HOME", text: "HOME PAGE", itemId: "home" };
      update(data);
      history.pushState(data, "home", "/home");
      break;
  }
});

window.addEventListener("popstate", (e) => {
  if (history.state) {
    update(history.state);
  } else {
    update({ title: "HOME", text: "HOME PAGE", itemId: "home" });
  }
});

function update(data) {
  document.querySelector(".header span").textContent = data.title;
  document.querySelector(".content h1").textContent = data.text;
}

/**
 * products.js
 */

"use strict";

  $("#products").on("click", "a", function (evt) {
    evt.preventDefault();
    const header = $("<header>").append(
      $("<h4>", {
        text: "Product Name",
      })
    );
    const p = $("<P>", {
      text: "Here is a brief description/note about this product.",
    });
    const p2 = $("<P>", {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Mollitia consectetur iure expedita non pariatur porro enim sunt sed obcaecati saepe.",
    });
    const div = $("<div>", {
      class: "btnPanel",
    }).append(
      $("<a>", {
        href: "http://www.amazon.com",
        text: "Add a new Product",
        class: "lnkBtn",
      })
    );

    const article = $("<article>")
      .append(header)
      .append(p)
      .append(p2)
      .append(div);

    $("#products").append(article);
  });


"use strict";

const itemsEl = document.querySelectorAll('.item');

console.log(`Number of categories:${itemsEl.length}`);

for (let i = 0; i < itemsEl.length; i+=1) {
    const element = itemsEl[i];
    console.log(`Category: ${element.firstElementChild.textContent} `)
    console.log(`Elements: ${element.lastElementChild.children.length} `)
}

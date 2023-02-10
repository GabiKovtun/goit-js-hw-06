const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulEl = document.querySelector('.gallery')

const imagesEl = images.forEach((element) => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');

  const imgEl = document.createElement('img');
  imgEl.style.width = "200px";
  imgEl.src = element.url;
  imgEl.alt = element.alt;

  console.log(imgEl);

  // liEl.append(imgEl);
  liEl.insertAdjacentHTML("beforeend", `<li>${imgEl.outerHTML}</li>`);

  ulEl.append(liEl);
  console.log(liEl)
}  )


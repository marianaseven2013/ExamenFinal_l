

let hola = document.createElement('div');
hola.className = "Comp1"

let h1 = document.createElement('h1');
h1.className = "cc1"
h1.innerText = "COMPONENTE 1"
hola.appendChild(h1)


let imig = document.createElement('img')
imig.className = "iim1"
imig.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCGl6eEhQy7RMRu4loB6bL0APOpHDNZ1Gzg&s"
hola.appendChild(imig)
export {hola}
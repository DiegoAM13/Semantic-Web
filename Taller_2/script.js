document.addEventListener("DOMContentLoaded", function() { 
    const albumList = document.getElementById('album-list'); 
 
    fetch('data.json') 
        .then(response => response.json()) 
        .then(albums => { 
            albums.forEach(album => { 
                const article = document.createElement('article'); 
                article.setAttribute('vocab', 'http://schema.org/'); 
                article.setAttribute('typeof', 'MusicAlbum'); 
 
                article.innerHTML = ` 
                    <img src="${album.cover}" alt="Portada de 
${album.name}" property="image"> 
                    <h2 property="name">${album.name}</h2> 
                    <p><strong>Artista:</strong> <span 
property="byArtist">${album.artist}</span></p> 
                    <p><strong>Género:</strong> <span 
property="genre">${album.genre}</span></p> 
                    <p><strong>Fecha de Lanzamiento:</strong> <span 
property="datePublished">${album.releaseDate}</span></p> 
                    <button onclick="addToCart('${album.name}')">Agregar 
al Carrito</button> 
                `; 
                albumList.appendChild(article); 
            }); 
        }); 
}); 
 
function addToCart(albumName) { 
    alert(`${albumName} ha sido agregado al carrito.`); 
} document.addEventListener("DOMContentLoaded", function() { 
    const albumList = document.getElementById('album-list'); 
 
    fetch('data.json') 
        .then(response => response.json()) 
        .then(albums => { 
            albums.forEach(album => { 
                const article = document.createElement('article'); 
                article.setAttribute('vocab', 'http://schema.org/'); 
                article.setAttribute('typeof', 'MusicAlbum'); 
 
                article.innerHTML = ` 
                    <img src="${album.cover}" alt="Portada de 
${album.name}" property="image"> 
                    <h2 property="name">${album.name}</h2> 
                    <p><strong>Artista:</strong> <span 
property="byArtist">${album.artist}</span></p> 
                    <p><strong>Género:</strong> <span 
property="genre">${album.genre}</span></p> 
                    <p><strong>Fecha de Lanzamiento:</strong> <span 
property="datePublished">${album.releaseDate}</span></p> 
                    <button onclick="addToCart('${album.name}')">Agregar 
al Carrito</button> 
                `; 
                albumList.appendChild(article); 
            }); 
        }); 
}); 
 
function addToCart(albumName) { 
    alert(`${albumName} ha sido agregado al carrito.`); 
} 
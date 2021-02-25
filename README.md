# website-sederhana

Website portofolio sederhana dengan menggunakan HTML, CSS dan Javascript

## Menambahkan Menu Drop Down

### 1. Tambahkan di file index.html
Setelah baris 7, sisipkan kode berikut ini. Jangan lupa pastikan file script.js sudah ditambahkan di folder yang kamu punya

```html
<script src="script.js" defer></script>
```

Setelah baris 13, dan sebelum baris 14 sisipkan kode di bawah ini 
```html
<a href="#" class="tombol-menu">
    <span class="garis"></span>
    <span class="garis"></span>
    <span class="garis"></span>
</a>
```


### 2. Tambahkan di file style.css
Tambahkan di baris terakhir di file style.css yang sudah didownload
```css
.tombol-menu {
    position: absolute;
    top: 1.7rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
}

.tombol-menu .garis {
    height: 3px;
    background-color: #3f72af;
}

@media screen and (max-width: 991.98px) {
    .logo a {
        display: inline;
    }
    .tombol-menu {
        display: flex;
    }
    nav .menu {
        display: none;
    }
    nav .menu.active {
        display: flex;
    }
    nav ul li {
        width:100%;
        border-bottom:1px solid #333333;
    }
}
```

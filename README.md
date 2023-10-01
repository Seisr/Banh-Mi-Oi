Project BanhMioi

# 🔨 Add Header and Footer

### HTML FILE

#### Add package

Add this line to header to reuse code and icon

```bash
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

#### Add script

Add this line after "</body>"

```bash
<script>
  $(function () {
    $("#header").load("../header.html")
    $("#footer").load("../footer.html")
  })
</script>
```

#### Add header

Add this line to body (or replace your header in body element if it exist)

```bash
<header>
    <div id="header"></div>
</header>
```

#### Add footer

Add this line to body (or replace your footer in body element if it exist)

```bash
<footer id="footer"></footer>
```

### CSS FILE

Add or replace this header and footer class in your code

```bash
header {
    height: 100%;
    width: 100%;

    .header_content {
        & nav {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            overflow: hidden;
            background-color: #333;
            position: fixed;
            top: 0;
            width: 100%;
        }

        & .nav_content {
            display: flex;
            list-style: none;
            overflow: hidden;
        }

        & .nav_login {
            display: flex;
            list-style: none;
            overflow: hidden;
        }

        & .nav_logo img {
            max-width: 100%;
            max-height: 50px;
        }

        & li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        & li a:hover {
            background-color: #111;
        }

    }
}


footer {
    margin-top: 800px;
    display: flex;
    justify-content: space-between;
    padding: 5em 1em;
    color: #ffffff;
    background-image: url("/img/index/footer.webp");
    background-repeat: no-repeat;
    object-fit: calc();
    background-size: auto;

    .footer_item:nth-child(1) {
        width: 30%;
    }

    .footer_signup {
        width: 100%;
    }
}
```

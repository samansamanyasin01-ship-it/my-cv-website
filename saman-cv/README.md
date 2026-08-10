# Saman Yaseen — CV Site

A React (Vite) single-page CV with four clickable sections — **Profile, Contact,
Skills, Projects** — styled as a terminal/dashboard, fitting for a Cloud/DevOps
engineer. Includes a live "career uptime" counter in the footer.

## 1. Build locally

```bash
cd saman-cv
npm install
npm run build
```

This produces a static `dist/` folder — that's the only thing your server needs.

## 2. Deploy to Ubuntu + Nginx

Install Nginx if you haven't already:

```bash
sudo apt update
sudo apt install nginx -y
```

Copy the build output to the web root:

```bash
sudo mkdir -p /var/www/saman-cv
sudo cp -r dist/* /var/www/saman-cv/
sudo chown -R www-data:www-data /var/www/saman-cv
```

Create an Nginx site config:

```bash
sudo nano /etc/nginx/sites-available/saman-cv
```

Paste:

```nginx
server {
    listen 80;
    server_name your-domain.com;  # or server_name _; for IP-only access

    root /var/www/saman-cv;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

Enable it and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/saman-cv /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Visit `http://your-server-ip/` or your domain — the site should load.

(Optional) Add HTTPS with Certbot once a domain is pointed at the server:

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com
```

## Editing content

All CV content lives in one file: `src/data/cvData.js` — edit names, contact
info, skills, or project descriptions there, then re-run `npm run build` and
re-copy `dist/*` to `/var/www/saman-cv`.

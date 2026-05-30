#!/bin/bash

set -e

echo "🚀 STEP 1: Angular Build"
ng build --configuration production

echo "📦 STEP 2: Upload to server"
rsync -avz --delete dist/portfolio-angular/browser/ moha@138.199.202.126:/var/www/portfolio/

echo "🔐 STEP 3: Server fix + reload nginx"
ssh moha@138.199.202.126 << 'EOF'
sudo chmod -R 755 /var/www/portfolio
sudo chown -R moha:www-data /var/www/portfolio
sudo systemctl reload nginx
EOF

echo "✅ DEPLOY COMPLETE"
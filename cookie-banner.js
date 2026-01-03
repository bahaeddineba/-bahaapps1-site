(function() {
    // Check if the user has already accepted cookies
    if (localStorage.getItem('cookieConsent') === 'true') {
        return;
    }

    // Create banner element
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.style.position = 'fixed';
    banner.style.bottom = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = '#0e2a47'; // var(--brand-900)
    banner.style.color = '#fff';
    banner.style.padding = '15px 20px';
    banner.style.display = 'flex';
    banner.style.justifyContent = 'space-between';
    banner.style.alignItems = 'center';
    banner.style.boxShadow = '0 -2px 10px rgba(0,0,0,0.2)';
    banner.style.zIndex = '10000';
    banner.style.fontFamily = '"Cairo", sans-serif';
    banner.style.direction = 'rtl';
    banner.style.flexWrap = 'wrap';
    banner.style.gap = '10px';

    // Content
    const text = document.createElement('p');
    text.style.margin = '0';
    text.style.fontSize = '0.9rem';
    text.style.flex = '1';
    text.innerHTML = 'نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. من خلال الاستمرار في التصفح، فإنك توافق على <a href="/privacy-policy.html" style="color: #4da3ff; text-decoration: underline;">سياسة الخصوصية</a> الخاصة بنا.';

    // Button
    const button = document.createElement('button');
    button.textContent = 'موافق';
    button.style.backgroundColor = '#2563eb'; // var(--brand-600)
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.padding = '8px 20px';
    button.style.borderRadius = '6px';
    button.style.cursor = 'pointer';
    button.style.fontWeight = 'bold';
    button.style.fontSize = '0.9rem';
    button.style.whiteSpace = 'nowrap';
    
    // Hover effect
    button.addEventListener('mouseenter', () => button.style.backgroundColor = '#1d4ed8');
    button.addEventListener('mouseleave', () => button.style.backgroundColor = '#2563eb');

    // Click handler
    button.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'true');
        banner.style.display = 'none';
    });

    banner.appendChild(text);
    banner.appendChild(button);
    document.body.appendChild(banner);
})();

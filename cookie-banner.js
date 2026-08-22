(function () {
    const noticeKey = 'cookieNoticeDismissed';
    if (localStorage.getItem(noticeKey) === 'true') return;

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

    const text = document.createElement('p');
    text.style.margin = '0';
    text.style.fontSize = '0.9rem';
    text.style.flex = '1';
    text.innerHTML = 'يستخدم هذا الموقع ملفات تعريف الارتباط وإعلانات Google. اطّلع على <a href="/privacy-policy.html" style="color: #93c5fd; text-decoration: underline;">سياسة الخصوصية</a> لمعرفة كيفية استخدام البيانات وخياراتك.';

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'فهمت';
    button.style.backgroundColor = '#2563eb'; // var(--brand-600)
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.padding = '8px 20px';
    button.style.borderRadius = '6px';
    button.style.cursor = 'pointer';
    button.style.fontWeight = 'bold';
    button.style.fontSize = '0.9rem';
    button.style.whiteSpace = 'nowrap';
    
    button.addEventListener('mouseenter', () => button.style.backgroundColor = '#1d4ed8');
    button.addEventListener('mouseleave', () => button.style.backgroundColor = '#2563eb');

    button.addEventListener('click', function () {
        localStorage.setItem(noticeKey, 'true');
        banner.remove();
    });

    banner.appendChild(text);
    banner.appendChild(button);
    document.body.appendChild(banner);
})();

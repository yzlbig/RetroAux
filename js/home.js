document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetHref = this.getAttribute('href');
            if (targetHref) {
                // 直接跳转到目标页面
                window.location.href = targetHref;
            }
        });
    });
});
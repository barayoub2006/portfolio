// Functionality to show projects in batches
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const showMoreBtn = document.getElementById('show-more-btn');
    const hideBtn = document.getElementById('hide-btn');
    const projectsToShow = 3; // عدد المشاريع التي ستظهر في البداية وفي كل مرة
    let shownCount = 0;

    // إخفاء كل المشاريع في البداية
    projectCards.forEach(card => card.classList.add('hidden'));

    // دالة لإظهار الدفعة التالية من المشاريع
    const showNextProjects = () => {
        const remainingProjects = Array.from(projectCards).filter(card => card.classList.contains('hidden'));
        for (let i = 0; i < projectsToShow && i < remainingProjects.length; i++) {
            remainingProjects[i].classList.remove('hidden');
        }
        shownCount += projectsToShow;
        // إخفاء زر "عرض المزيد" إذا لم تعد هناك مشاريع أخرى
        if (showMoreBtn) {
            if (shownCount >= projectCards.length) {
                showMoreBtn.classList.add('hidden');
                hideBtn.classList.remove('hidden');
            }
        }
    };

    // دالة لإخفاء كل المشاريع باستثناء أول 3
    const hideProjects = () => {
        projectCards.forEach((card, index) => {
            if (index >= projectsToShow) {
                card.classList.add('hidden');
            }
        });
        shownCount = projectsToShow;
        showMoreBtn.classList.remove('hidden');
        hideBtn.classList.add('hidden');
    };

    if (showMoreBtn) {
        // إظهار الدفعة الأولى عند تحميل الصفحة
        showNextProjects();
        // إضافة حدث عند الضغط على الزر
        showMoreBtn.addEventListener('click', showNextProjects);
    }
    
    if (hideBtn) {
        hideBtn.addEventListener('click', hideProjects);
    }

    // New JavaScript for the mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navContent = document.getElementById('nav-content');
    
    navToggle.addEventListener('click', () => {
        navContent.classList.toggle('hidden');
    });

    // Optional: Hide the menu when a link is clicked
    const navLinks = document.querySelectorAll('#nav-content a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!navContent.classList.contains('lg:flex')) {
                navContent.classList.add('hidden');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. تحديث الساعة اللحظية
    const clockElement = document.getElementById("live-clock");
    
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    setInterval(updateClock, 1000);
    updateClock(); // تشغيل فوري لتفادي التأخير بثانية واحدة

    // 2. تدوير الشرائح (Carousel Slides) تلقائيًا وبشكل هادئ
    const slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0;
    const slideIntervalTime = 15000; // 15 ثانية لكل شريحة كما هو مطلوب

    function showNextSlide() {
        // إزالة الكلاس النشط من الشريحة الحالية
        slides[currentSlideIndex].classList.remove("active");
        
        // الانتقال للشريحة التالية
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        
        // تفعيل الشريحة الجديدة
        slides[currentSlideIndex].classList.add("active");
    }

    // بدء مؤقت تبديل الشرائح
    setInterval(showNextSlide, slideIntervalTime);
});
function scrollToTarget() {
    const targetElement = document.querySelector('#my-target');
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('目標元素未找到！');
    }
}

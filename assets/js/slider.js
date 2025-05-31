document.addEventListener('DOMContentLoaded', function() {
  initImageSlider();
});

function initImageSlider() {
  // 获取滑块元素
  const slider = document.querySelector('.image-slider');
  if (!slider) return;
  
  const sliderContainer = slider.querySelector('.slider-container');
  const prevButton = slider.querySelector('.slider-prev');
  const nextButton = slider.querySelector('.slider-next');
  const slides = slider.querySelectorAll('.slider-item');
  
  if (!sliderContainer || !prevButton || !nextButton || slides.length === 0) return;
  
  // 如果在较大屏幕上（使用网格布局），则不初始化滑块
  if (window.innerWidth >= 768) return;
  
  let currentIndex = 0;
  let slideWidth = slider.offsetWidth;
  let startX, moveX;
  let isPointerDown = false;
  
  // 设置初始位置
  updateSliderPosition();
  
  // 添加导航事件监听器
  prevButton.addEventListener('click', () => {
    navigateSlide(-1);
  });
  
  nextButton.addEventListener('click', () => {
    navigateSlide(1);
  });
  
  // 键盘导航
  slider.tabIndex = 0; // 使元素可聚焦
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      navigateSlide(-1);
    } else if (e.key === 'ArrowRight') {
      navigateSlide(1);
    }
  });
  
  // 触摸/鼠标事件
  sliderContainer.addEventListener('pointerdown', handlePointerDown);
  sliderContainer.addEventListener('pointermove', handlePointerMove);
  sliderContainer.addEventListener('pointerup', handlePointerUp);
  sliderContainer.addEventListener('pointerleave', handlePointerUp);
  
  // 更新滑块位置的函数
  function updateSliderPosition(animate = true) {
    if (animate) {
      sliderContainer.style.transition = 'transform 0.3s ease';
    } else {
      sliderContainer.style.transition = 'none';
    }
    
    const translateValue = -currentIndex * slideWidth;
    sliderContainer.style.transform = `translateX(${translateValue}px)`;
    
    // 更新按钮状态
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
    
    // 延迟重新添加过渡效果
    if (!animate) {
      setTimeout(() => {
        sliderContainer.style.transition = 'transform 0.3s ease';
      }, 50);
    }
  }
  
  function navigateSlide(direction) {
    currentIndex = Math.max(0, Math.min(currentIndex + direction, slides.length - 1));
    updateSliderPosition();
  }
  
  function handlePointerDown(e) {
    startX = e.clientX;
    isPointerDown = true;
    sliderContainer.style.transition = 'none'; // 移除过渡效果以实现平滑拖动
  }
  
  function handlePointerMove(e) {
    if (!isPointerDown) return;
    
    moveX = e.clientX;
    const diff = moveX - startX;
    const translateValue = -currentIndex * slideWidth + diff;
    
    // 限制拖动范围
    if (
      (currentIndex === 0 && diff > 0) || 
      (currentIndex === slides.length - 1 && diff < 0)
    ) {
      // 边缘阻尼效果
      sliderContainer.style.transform = `translateX(${translateValue * 0.3}px)`;
    } else {
      sliderContainer.style.transform = `translateX(${translateValue}px)`;
    }
  }
  
  function handlePointerUp(e) {
    if (!isPointerDown) return;
    isPointerDown = false;
    
    const diff = (moveX || startX) - startX;
    const threshold = slideWidth * 0.2; // 20% 的滑动阈值
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex > 0) {
        // 向右滑动
        currentIndex--;
      } else if (diff < 0 && currentIndex < slides.length - 1) {
        // 向左滑动
        currentIndex++;
      }
    }
    
    updateSliderPosition();
  }
  
  // 响应窗口调整大小
  window.addEventListener('resize', () => {
    // 如果屏幕宽度大于等于768px，不需要滑块功能
    if (window.innerWidth >= 768) return;
    
    slideWidth = slider.offsetWidth;
    updateSliderPosition(false);
  });
} 
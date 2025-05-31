document.addEventListener('DOMContentLoaded', function() {
  // 获取元素
  const gallery = document.querySelector('.simple-gallery');
  if (!gallery) return;
  
  const items = gallery.querySelectorAll('.gallery-item');
  const prevBtns = gallery.querySelectorAll('.gallery-btn.prev');
  const nextBtns = gallery.querySelectorAll('.gallery-btn.next');
  const dots = gallery.querySelectorAll('.gallery-dot');
  
  if (!items.length || !prevBtns.length || !nextBtns.length) return;
  
  let currentIndex = 0;
  let isTransitioning = false; // 防止快速点击导致的动画问题
  
  // 初始化显示第一张图片
  updateGallery();
  
  // 左右按钮事件 - 现在可能有多个按钮
  prevBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (isTransitioning) return;
      navigateSlide(-1);
    });
  });
  
  nextBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (isTransitioning) return;
      navigateSlide(1);
    });
  });
  
  // 点指示器点击事件
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      if (isTransitioning) return;
      const index = parseInt(this.getAttribute('data-index'));
      if (currentIndex !== index) {
        currentIndex = index;
        updateGallery();
      }
    });
  });
  
  // 键盘左右键控制
  document.addEventListener('keydown', function(e) {
    if (isTransitioning) return;
    
    // 只有在查看器可见且处于展开状态时才响应键盘事件
    const details = gallery.closest('details');
    if (details && !details.open) return;
    
    if (e.key === 'ArrowLeft') {
      navigateSlide(-1);
    } else if (e.key === 'ArrowRight') {
      navigateSlide(1);
    }
  });
  
  // 更新图片显示
  function updateGallery() {
    isTransitioning = true;
    
    // 当前激活的图片
    const activeItem = gallery.querySelector('.gallery-item.active');
    if (activeItem) {
      // 添加淡出效果
      activeItem.style.opacity = '0';
      
      setTimeout(() => {
        // 更新所有图片的状态
        items.forEach((item, index) => {
          if (index === currentIndex) {
            item.classList.add('active');
            item.style.opacity = '0';
            
            // 添加淡入效果
            setTimeout(() => {
              item.style.opacity = '1';
            }, 50);
          } else {
            item.classList.remove('active');
          }
        });
        
        // 更新点指示器状态
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
        
        // 过渡完成
        setTimeout(() => {
          isTransitioning = false;
        }, 300);
      }, 300);
    } else {
      // 初始化时没有激活的图片
      items.forEach((item, index) => {
        if (index === currentIndex) {
          item.classList.add('active');
          item.style.opacity = '1';
        } else {
          item.classList.remove('active');
        }
      });
      
      // 更新点指示器状态
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
      
      isTransitioning = false;
    }
  }
  
  function navigateSlide(direction) {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    updateGallery();
  }
  
  // 添加触摸滑动支持
  let touchStartX = 0;
  let touchEndX = 0;
  
  gallery.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  gallery.addEventListener('touchend', function(e) {
    if (isTransitioning) return;
    
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    // 向左滑动（下一张）
    if (touchStartX - touchEndX > 50) {
      navigateSlide(1);
    }
    // 向右滑动（上一张）
    else if (touchEndX - touchStartX > 50) {
      navigateSlide(-1);
    }
  }
}); 
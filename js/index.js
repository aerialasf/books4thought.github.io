function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const computedStyle = window.getComputedStyle(sidebar);
  const sidebarWidth = parseFloat(computedStyle.width);

  if (sidebar.style.transform === 'translateX(-250px)' || sidebar.style.transform === '') {
    sidebar.style.transform = `translateX(0)`;
  } else {
    sidebar.style.transform = `translateX(-${sidebarWidth}px)`;
  }
}

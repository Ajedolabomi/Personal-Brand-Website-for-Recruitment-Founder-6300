// Utility function for smooth scrolling to elements
export const scrollToElement = (elementId) => {
  // Remove the # from the ID
  const targetId = elementId.replace('#', '');
  const element = document.getElementById(targetId);
  
  if (element) {
    // Scroll to the element with smooth behavior
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
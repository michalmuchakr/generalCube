const scrollToAnchor = {
  init: (e) => {
    e.stopPropagation();
    let targetOffsetTop = document.querySelectorAll( event.target.getAttribute('data-anchor') )[0].offsetTop - 100;
    let scrollOptions = {
      left: 0,
      top: targetOffsetTop,
      behavior: 'smooth'
    }

    window.scrollTo(scrollOptions);
  }
}
export default scrollToAnchor;

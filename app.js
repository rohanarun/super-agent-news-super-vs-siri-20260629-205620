(function(){
  if (typeof window.gsap === 'undefined') return;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }});
  tl.from('.hero h1', { y: 40, opacity: 0, duration: 0.8 })
    .from('.hero-sub', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
    .from('.hero-actions .btn', { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.3')
    .from('.hero-video-frame', { scale: 0.96, opacity: 0, duration: 0.8 }, '-=0.4');
})();
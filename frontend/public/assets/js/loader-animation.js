(function () {
  function startAnimation() {
    var g = window.gsap;
    if (!g) return;

    var container = document.querySelector('.loader__spinner');
    if (!container) return;

    var speed = 1;

    function q(id) {
      return container.querySelector('#' + id);
    }

    var rightHead   = q('right-head');
    var rightArm    = q('right-arm');
    var rightCrank  = q('right-crank');
    var rightPiston = q('right-piston');
    var leftHead    = q('left-head');
    var leftArm     = q('left-arm');
    var leftCrank   = q('left-crank');
    var leftPiston  = q('left-piston');

    g.set(rightPiston, { rotation: 30, y: -123, x: 345, svgOrigin: '0 0' });
    g.set(leftPiston,  { rotation: -30, y: 275, x: -240, svgOrigin: '0 0' });

    var tlRightCrank = g.timeline({ repeat: -1 })
      .to(rightCrank, { duration: speed, rotation: 360, transformOrigin: '50% 184px', ease: 'none' });

    var tlRightHead = g.timeline({ repeat: -1 })
      .to(rightHead, { duration: speed / 2, y: 307, transformOrigin: '50% 184px', ease: 'power1.inOut' })
      .to(rightHead, { duration: speed / 2, y: 65,  transformOrigin: '50% 184px', ease: 'power1.inOut' });

    var tlRightArmRotation = g.timeline({ repeat: -1 })
      .to(rightArm, { duration: speed / 4, rotation: -24, transformOrigin: '50% 34px', ease: 'sine.out' })
      .to(rightArm, { duration: speed / 4, rotation:   0, transformOrigin: '50% 34px', ease: 'sine.in'  })
      .to(rightArm, { duration: speed / 4, rotation:  24, transformOrigin: '50% 34px', ease: 'sine.out' })
      .to(rightArm, { duration: speed / 4, rotation:   0, transformOrigin: '50% 34px', ease: 'sine.in'  });

    var tlRightArmYPos = g.timeline({ repeat: -1 })
      .to(rightArm, { duration: speed / 4, y: 280, transformOrigin: '50% 34px', ease: 'sine.in'  })
      .to(rightArm, { duration: speed / 4, y: 375, transformOrigin: '50% 34px', ease: 'sine.out' })
      .to(rightArm, { duration: speed / 4, y: 280, transformOrigin: '50% 34px', ease: 'sine.in'  })
      .to(rightArm, { duration: speed / 4, y: 135, transformOrigin: '50% 34px', ease: 'sine.out' });

    g.timeline({ repeat: -1 })
      .fromTo(tlRightCrank, { timeScale: 1 }, { duration: 6, timeScale: 4, ease: 'bounce.in'  })
      .to(tlRightCrank,                        { duration: 6, timeScale: 1, ease: 'bounce.out' });

    g.timeline({ repeat: -1 })
      .fromTo(tlRightHead, { timeScale: 1 }, { duration: 6, timeScale: 4, ease: 'bounce.in'  })
      .to(tlRightHead,                        { duration: 6, timeScale: 1, ease: 'bounce.out' });

    g.timeline({ repeat: -1 })
      .fromTo(tlRightArmRotation, { timeScale: 1 }, { duration: 6, timeScale: 4, ease: 'bounce.in'  })
      .to(tlRightArmRotation,                        { duration: 6, timeScale: 1, ease: 'bounce.out' });

    g.timeline({ repeat: -1 })
      .fromTo(tlRightArmYPos, { timeScale: 1 }, { duration: 6, timeScale: 4, ease: 'bounce.in'  })
      .to(tlRightArmYPos,                        { duration: 6, timeScale: 1, ease: 'bounce.out' });

    var tlLeftCrank = g.timeline({ repeat: -1 })
      .fromTo(leftCrank, { rotation: 180, transformOrigin: '50% 184px' },
                         { duration: speed, rotation: 540, transformOrigin: '50% 184px', ease: 'none' });

    var tlLeftHead = g.timeline({ repeat: -1 })
      .fromTo(leftHead, { y: 307, transformOrigin: '50% 184px' },
                        { duration: speed / 2, y: 65,  transformOrigin: '50% 184px', ease: 'power1.inOut' })
      .to(leftHead,     { duration: speed / 2, y: 307, transformOrigin: '50% 184px', ease: 'power1.inOut' });

    var tlLeftArmRotation = g.timeline({ repeat: -1 })
      .to(leftArm, { duration: speed / 4, rotation:  24, transformOrigin: '50% 34px', ease: 'sine.out' })
      .to(leftArm, { duration: speed / 4, rotation:   0, transformOrigin: '50% 34px', ease: 'sine.in'  })
      .to(leftArm, { duration: speed / 4, rotation: -24, transformOrigin: '50% 34px', ease: 'sine.out' })
      .to(leftArm, { duration: speed / 4, rotation:   0, transformOrigin: '50% 34px', ease: 'sine.in'  });

    var tlLeftArmYPos = g.timeline({ repeat: -1 })
      .fromTo(leftArm, { y: 375, transformOrigin: '50% 34px' },
                       { duration: speed / 4, y: 280, transformOrigin: '50% 34px', ease: 'sine.in'  })
      .to(leftArm, { duration: speed / 4, y: 135, transformOrigin: '50% 34px', ease: 'sine.out' })
      .to(leftArm, { duration: speed / 4, y: 280, transformOrigin: '50% 34px', ease: 'sine.in'  })
      .to(leftArm, { duration: speed / 4, y: 375, transformOrigin: '50% 34px', ease: 'sine.out' });

    g.timeline({ repeat: -1 })
      .fromTo(tlLeftCrank, { timeScale: 1 }, { duration: 6, timeScale: 4, ease: 'bounce.in'  })
      .to(tlLeftCrank,                        { duration: 6, timeScale: 1, ease: 'bounce.out' });

    g.timeline({ repeat: -1 })
      .fromTo(tlLeftHead, { timeScale: 1 }, { duration: 6, timeScale: 4, ease: 'bounce.in'  })
      .to(tlLeftHead,                        { duration: 6, timeScale: 1, ease: 'bounce.out' });

    g.timeline({ repeat: -1 })
      .fromTo(tlLeftArmRotation, { timeScale: 1 }, { duration: 6, timeScale: 4, ease: 'bounce.in'  })
      .to(tlLeftArmRotation,                        { duration: 6, timeScale: 1, ease: 'bounce.out' });

    g.timeline({ repeat: -1 })
      .fromTo(tlLeftArmYPos, { timeScale: 1 }, { duration: 6, timeScale: 4, ease: 'bounce.in'  })
      .to(tlLeftArmYPos,                        { duration: 6, timeScale: 1, ease: 'bounce.out' });

    window.__loaderAnimationStarted = true;
    container.classList.add('loader__spinner--gsap-ready');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startAnimation);
  } else {
    startAnimation();
  }
})();

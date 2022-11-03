
      // ScrollTrigger.create({
      //   trigger: "#rectangle",
      //   start: "top 50%+=100px",
      //   endTrigger: "#rectangle",
      //   end: "bottom 50%+=100px",
      //   animation: gsap.to('#rectangle span', {borderWidth: '3rem'}),
      //   onToggle: self => console.log("toggled, isActive:", self.isActive),
      //   onUpdate: self => {
      //     // document.
      //   }
      // });

      let body = document.querySelector("body")

      ScrollTrigger.create({
        trigger: "#section3",
        start: "top 50%+=100px",
        endTrigger: "#section5",
        toggleActions: "play reverse play reverse",
        end: "bottom bottom",
        onToggle: self => {
          if(!self.isActive) {
            body.setAttribute('class', 'dark-mode')
          }else {
            body.setAttribute('class', 'light-mode')
          }
          console.log("toggled, isActive:", self.isActive)
        },
        onUpdate: self => {
          // document.
        }
      });

      window.addEventListener("load", function () {
        let splitWords = function (selector) {
          var elements = document.querySelectorAll(selector);

          elements.forEach(function (el) {
            el.dataset.splitText = el.textContent;
            el.innerHTML = el.textContent
              .split(/\s/)
              .map(function (word) {
                return word
                  .split("-")
                  .map(function (word) {
                    return '<span class="word">' + word + "</span>";
                  })
                  .join('<span class="hyphen">-</span>');
              })
              .join('<span class="whitespace"> </span>');
          });
        };

        let splitLines = function (selector) {
          var elements = document.querySelectorAll(selector);

          splitWords(selector);

          elements.forEach(function (el) {
            var lines = getLines(el);

            var wrappedLines = "";
            lines.forEach(function (wordsArr) {
              wrappedLines += '<span class="line"><span class="words">';
              wordsArr.forEach(function (word) {
                wrappedLines += word.outerHTML;
              });
              wrappedLines += "</span></span>";
            });
            el.innerHTML = wrappedLines;
          });
        };

        let getLines = function (el) {
          var lines = [];
          var line;
          var words = el.querySelectorAll("span");
          var lastTop;
          for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (word.offsetTop != lastTop) {
              // Don't start with whitespace
              if (!word.classList.contains("whitespace")) {
                lastTop = word.offsetTop;

                line = [];
                lines.push(line);
              }
            }
            line.push(word);
          }
          return lines;
        };

        splitLines(".reveal-text");
        let revealText = document.querySelectorAll(".reveal-text");
        gsap.registerPlugin(ScrollTrigger);
        let revealLines = revealText.forEach((element) => {
          const lines = element.querySelectorAll(".words");
          const words = element.querySelectorAll(".word");
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              toggleActions: "restart none none reset"
            }
          });
          tl.set(element, { autoAlpha: 1 });

          tl.from([words], 1, {
            yPercent: 100,
            translateZ: 0,
            rotateZ: [10, 0],
            ease: Power3.out,
          });
          
        });


      const titles = document.querySelectorAll('.title');
      const h1Tags = document.querySelectorAll('h1');
      const pTags = document.querySelectorAll('p');

      titles.forEach((element) => {
        let span = element.querySelector("span")
        let titleTl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
          }
        })
        titleTl.from([element, span], 2, {
          duration:1,
          xPercent: gsap.utils.wrap([-100, 100]),
          ease: Power4.out,
        });
      })

      pTags.forEach((element) => {
        let pTagsTl = gsap.timeline({
          scrollTrigger: {
            trigger: element
          }
        })

        pTagsTl.set(element, { autoAlpha: 1 });
        pTagsTl.from(element, 1, {
          yPercent: 100,
          opacity:0,
          ease: Power3.out,
          stagger: 2.5,
          delay: 0.2
        });
      })

      h1Tags.forEach((element) => {
        let h1TagsTl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
          }
        })

        h1TagsTl.set(element, { autoAlpha: 1 });
        h1TagsTl.from(element, 1, {
          yPercent: 100,
          ease: Power3.out,
          stagger: 2.5,
          delay: 0.2
        });
      })

      // reveal image
      let revealImg = document.querySelectorAll(".reveal-img");

      revealImg.forEach((container) => {
        let image = container.querySelector("img");
        let imgTl = gsap.timeline({
          scrollTrigger: {
            trigger: container
          }
        });
      
        imgTl.set(container, { autoAlpha: 1 });
        imgTl.from(container, 1.5, {
          xPercent: -100,
          ease: Power2.out
        });
        imgTl.from(image, 1.5, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
          ease: Power2.out
        });
      });      
    });
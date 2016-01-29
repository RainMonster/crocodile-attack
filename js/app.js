(function() {


  var model = {
    currentCroc: null,

    crocs: [
      {
        name: "Croc01",
        imgSrc: 'images/01_large.jpg'
      },
      {
        name: "Croc02",
        imgSrc: 'images/02_large.jpg'
      },
      {
        name: "Croc03",
        imgSrc: 'images/03_large.jpg'
      },
      {
        name: "Croc04",
        imgSrc: 'images/04_large.jpg'
      },
      {
        name: "Croc05",
        imgSrc: 'images/05_large.jpg'
      }
    ]
  };


  var controller = {
    init: function() {
      model.currentCroc = model.crocs[0];
      crocView.init();
      arrowView.init();
    },

    getCurrentCroc: function() {
      return model.currentCroc;
    },

    updateCurrentCroc: function(direction) {
      var num = model.crocs.indexOf(model.currentCroc);
      var boundary = model.crocs.length;

      // num moves forward or backward in crocs array.
      // If next click goes out of range, num is modified to wrap to beginning or end of array
      if (direction == 'forward') {
        if ((num + 1) == boundary) {
          num = -1;
        }
        num++;
      } else {
        if ((num - 1) == -1) {
          num = boundary;
        }
        num--;
      }

      model.currentCroc = model.crocs[num];
      crocView.render();
    }
  };


  var crocView = {
    init: function() {
      this.crocElem = document.getElementsByClassName("slideshow")[0];
      this.crocImg = document.getElementsByClassName("crocContainer")[0];
      this.render();
    },

    render: function() {
      var currentCroc = controller.getCurrentCroc();
      this.crocImg.style.backgroundImage = "url(" + model.currentCroc.imgSrc + ")";
    }
  };


  var arrowView = {
    init: function() {
      this.back = document.getElementsByClassName("back")[0];
      this.forward = document.getElementsByClassName("forward")[0];

      this.back.addEventListener('click', function(event) {
        event.preventDefault();
        controller.updateCurrentCroc('back');
      });

      this.forward.addEventListener('click', function(event) {
        event.preventDefault();
        controller.updateCurrentCroc('forward');
      });
    }
  };

  controller.init();

})();
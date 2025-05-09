!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (e) {
        return t(e);
      })
    : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(e.jQuery);
})(this, function (p) {
  !(function () {
    "use strict";
    function t(e, t) {
      if (
        ((this.el = e),
        (this.$el = p(e)),
        (this.s = p.extend({}, o, t)),
        this.s.dynamic &&
          "undefined" !== this.s.dynamicEl &&
          this.s.dynamicEl.constructor === Array &&
          !this.s.dynamicEl.length)
      )
        throw "When using dynamic mode, you must also define dynamicEl as an Array.";
      return (
        (this.modules = {}),
        (this.lGalleryOn = !1),
        (this.lgBusy = !1),
        (this.hideBartimeout = !1),
        (this.isTouch = "ontouchstart" in document.documentElement),
        this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
        this.s.dynamic
          ? (this.$items = this.s.dynamicEl)
          : "this" === this.s.selector
            ? (this.$items = this.$el)
            : "" !== this.s.selector
              ? this.s.selectWithin
                ? (this.$items = p(this.s.selectWithin).find(this.s.selector))
                : (this.$items = this.$el.find(p(this.s.selector)))
              : (this.$items = this.$el.children()),
        (this.$slide = ""),
        (this.$outer = ""),
        this.init(),
        this
      );
    }
    var o = {
      mode: "lg-slide",
      cssEasing: "ease",
      easing: "linear",
      speed: 600,
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 150,
      hideBarsDelay: 6e3,
      useLeft: !1,
      closable: !0,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimatoin: !0,
      hideControlOnEnd: !1,
      mousewheel: !0,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 1,
      showAfterLoad: !0,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: !1,
      iframeMaxWidth: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      galleryId: 1,
    };
    (t.prototype.init = function () {
      var e = this;
      e.s.preload > e.$items.length && (e.s.preload = e.$items.length);
      var t = window.location.hash;
      0 < t.indexOf("lg=" + this.s.galleryId) &&
        ((e.index = parseInt(t.split("&slide=")[1], 10)),
        p("body").addClass("lg-from-hash"),
        p("body").hasClass("lg-on") ||
          (setTimeout(function () {
            e.build(e.index);
          }),
          p("body").addClass("lg-on"))),
        e.s.dynamic
          ? (e.$el.trigger("onBeforeOpen.lg"),
            (e.index = e.s.index || 0),
            p("body").hasClass("lg-on") ||
              setTimeout(function () {
                e.build(e.index), p("body").addClass("lg-on");
              }))
          : e.$items.on("click.lgcustom", function (t) {
              try {
                t.preventDefault(), t.preventDefault();
              } catch (e) {
                t.returnValue = !1;
              }
              e.$el.trigger("onBeforeOpen.lg"),
                (e.index = e.s.index || e.$items.index(this)),
                p("body").hasClass("lg-on") ||
                  (e.build(e.index), p("body").addClass("lg-on"));
            });
    }),
      (t.prototype.build = function (e) {
        var t = this;
        t.structure(),
          p.each(p.fn.lightGallery.modules, function (e) {
            t.modules[e] = new p.fn.lightGallery.modules[e](t.el);
          }),
          t.slide(e, !1, !1, !1),
          t.s.keyPress && t.keyPress(),
          1 < t.$items.length
            ? (t.arrow(),
              setTimeout(function () {
                t.enableDrag(), t.enableSwipe();
              }, 50),
              t.s.mousewheel && t.mousewheel())
            : t.$slide.on("click.lg", function () {
                t.$el.trigger("onSlideClick.lg");
              }),
          t.counter(),
          t.closeGallery(),
          t.$el.trigger("onAfterOpen.lg"),
          t.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
            t.$outer.removeClass("lg-hide-items"),
              clearTimeout(t.hideBartimeout),
              (t.hideBartimeout = setTimeout(function () {
                t.$outer.addClass("lg-hide-items");
              }, t.s.hideBarsDelay));
          }),
          t.$outer.trigger("mousemove.lg");
      }),
      (t.prototype.structure = function () {
        var e,
          t = "",
          o = "",
          s = 0,
          i = "",
          l = this;
        for (
          p("body").append('<div class="lg-backdrop"></div>'),
            p(".lg-backdrop").css(
              "transition-duration",
              this.s.backdropDuration + "ms",
            ),
            s = 0;
          s < this.$items.length;
          s++
        )
          t += '<div class="lg-item"></div>';
        if (
          (this.s.controls &&
            1 < this.$items.length &&
            (o =
              '<div class="lg-actions"><button class="lg-prev lg-icon">' +
              this.s.prevHtml +
              '</button><button class="lg-next lg-icon">' +
              this.s.nextHtml +
              "</button></div>"),
          ".lg-sub-html" === this.s.appendSubHtmlTo &&
            (i = '<div class="lg-sub-html"></div>'),
          (e =
            '<div class="lg-outer ' +
            this.s.addClass +
            " " +
            this.s.startClass +
            '"><div class="lg" style="width:' +
            this.s.width +
            "; height:" +
            this.s.height +
            '"><div class="lg-inner">' +
            t +
            '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' +
            o +
            i +
            "</div></div>"),
          p("body").append(e),
          (this.$outer = p(".lg-outer")),
          (this.$slide = this.$outer.find(".lg-item")),
          this.s.useLeft
            ? (this.$outer.addClass("lg-use-left"), (this.s.mode = "lg-slide"))
            : this.$outer.addClass("lg-use-css3"),
          l.setTop(),
          p(window).on("resize.lg orientationchange.lg", function () {
            setTimeout(function () {
              l.setTop();
            }, 100);
          }),
          this.$slide.eq(this.index).addClass("lg-current"),
          this.doCss()
            ? this.$outer.addClass("lg-css3")
            : (this.$outer.addClass("lg-css"), (this.s.speed = 0)),
          this.$outer.addClass(this.s.mode),
          this.s.enableDrag &&
            1 < this.$items.length &&
            this.$outer.addClass("lg-grab"),
          this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
          this.doCss())
        ) {
          var r = this.$outer.find(".lg-inner");
          r.css("transition-timing-function", this.s.cssEasing),
            r.css("transition-duration", this.s.speed + "ms");
        }
        setTimeout(function () {
          p(".lg-backdrop").addClass("in");
        }),
          setTimeout(function () {
            l.$outer.addClass("lg-visible");
          }, this.s.backdropDuration),
          this.s.download &&
            this.$outer
              .find(".lg-toolbar")
              .append(
                '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>',
              ),
          (this.prevScrollTop = p(window).scrollTop());
      }),
      (t.prototype.setTop = function () {
        if ("100%" !== this.s.height) {
          var e = p(window).height(),
            t = (e - parseInt(this.s.height, 10)) / 2,
            o = this.$outer.find(".lg");
          e >= parseInt(this.s.height, 10)
            ? o.css("top", t + "px")
            : o.css("top", "0px");
        }
      }),
      (t.prototype.doCss = function () {
        return !!(function () {
          var e = [
              "transition",
              "MozTransition",
              "WebkitTransition",
              "OTransition",
              "msTransition",
              "KhtmlTransition",
            ],
            t = document.documentElement,
            o = 0;
          for (o = 0; o < e.length; o++) if (e[o] in t.style) return !0;
        })();
      }),
      (t.prototype.isVideo = function (e, t) {
        var o;
        if (
          ((o = this.s.dynamic
            ? this.s.dynamicEl[t].html
            : this.$items.eq(t).attr("data-html")),
          !e)
        )
          return o
            ? { html5: !0 }
            : (console.error(
                "lightGallery :- data-src is not pvovided on slide item " +
                  (t + 1) +
                  ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html",
              ),
              !1);
        var s = e.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i,
          ),
          i = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
          l = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
          r = e.match(
            /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i,
          );
        return s
          ? { youtube: s }
          : i
            ? { vimeo: i }
            : l
              ? { dailymotion: l }
              : r
                ? { vk: r }
                : void 0;
      }),
      (t.prototype.counter = function () {
        this.s.counter &&
          p(this.s.appendCounterTo).append(
            '<div id="lg-counter"><span id="lg-counter-current">' +
              (parseInt(this.index, 10) + 1) +
              '</span> / <span id="lg-counter-all">' +
              this.$items.length +
              "</span></div>",
          );
      }),
      (t.prototype.addHtml = function (e) {
        var t,
          o,
          s = null;
        if (
          (this.s.dynamic
            ? this.s.dynamicEl[e].subHtmlUrl
              ? (t = this.s.dynamicEl[e].subHtmlUrl)
              : (s = this.s.dynamicEl[e].subHtml)
            : (o = this.$items.eq(e)).attr("data-sub-html-url")
              ? (t = o.attr("data-sub-html-url"))
              : ((s = o.attr("data-sub-html")),
                this.s.getCaptionFromTitleOrAlt &&
                  !s &&
                  (s = o.attr("title") || o.find("img").first().attr("alt"))),
          !t)
        )
          if (null != s) {
            var i = s.substring(0, 1);
            ("." !== i && "#" !== i) ||
              (s =
                this.s.subHtmlSelectorRelative && !this.s.dynamic
                  ? o.find(s).html()
                  : p(s).html());
          } else s = "";
        ".lg-sub-html" === this.s.appendSubHtmlTo
          ? t
            ? this.$outer.find(this.s.appendSubHtmlTo).load(t)
            : this.$outer.find(this.s.appendSubHtmlTo).html(s)
          : t
            ? this.$slide.eq(e).load(t)
            : this.$slide.eq(e).append(s),
          null != s &&
            ("" === s
              ? this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
          this.$el.trigger("onAfterAppendSubHtml.lg", [e]);
      }),
      (t.prototype.preload = function (e) {
        var t = 1,
          o = 1;
        for (t = 1; t <= this.s.preload && !(t >= this.$items.length - e); t++)
          this.loadContent(e + t, !1, 0);
        for (o = 1; o <= this.s.preload && !(e - o < 0); o++)
          this.loadContent(e - o, !1, 0);
      }),
      (t.prototype.loadContent = function (t, e, o) {
        var s,
          a,
          i,
          l,
          r,
          n,
          d = this,
          c = !1,
          u = function (e) {
            for (var t = [], o = [], s = 0; s < e.length; s++) {
              var i = e[s].split(" ");
              "" === i[0] && i.splice(0, 1), o.push(i[0]), t.push(i[1]);
            }
            for (var l = p(window).width(), r = 0; r < t.length; r++)
              if (parseInt(t[r], 10) > l) {
                a = o[r];
                break;
              }
          };
        r = d.s.dynamic
          ? (d.s.dynamicEl[t].poster &&
              ((c = !0), (i = d.s.dynamicEl[t].poster)),
            (n = d.s.dynamicEl[t].html),
            (a = d.s.dynamicEl[t].src),
            d.s.dynamicEl[t].responsive &&
              u(d.s.dynamicEl[t].responsive.split(",")),
            (l = d.s.dynamicEl[t].srcset),
            d.s.dynamicEl[t].sizes)
          : (d.$items.eq(t).attr("data-poster") &&
              ((c = !0), (i = d.$items.eq(t).attr("data-poster"))),
            (n = d.$items.eq(t).attr("data-html")),
            (a =
              d.$items.eq(t).attr("href") || d.$items.eq(t).attr("data-src")),
            d.$items.eq(t).attr("data-responsive") &&
              u(d.$items.eq(t).attr("data-responsive").split(",")),
            (l = d.$items.eq(t).attr("data-srcset")),
            d.$items.eq(t).attr("data-sizes"));
        var h = !1;
        d.s.dynamic
          ? d.s.dynamicEl[t].iframe && (h = !0)
          : "true" === d.$items.eq(t).attr("data-iframe") && (h = !0);
        var g = d.isVideo(a, t);
        if (!d.$slide.eq(t).hasClass("lg-loaded")) {
          if (h)
            d.$slide
              .eq(t)
              .prepend(
                '<div class="lg-video-cont lg-has-iframe" style="max-width:' +
                  d.s.iframeMaxWidth +
                  '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                  a +
                  '"  allowfullscreen="true"></iframe></div></div>',
              );
          else if (c) {
            var m;
            (m =
              g && g.youtube
                ? "lg-has-youtube"
                : g && g.vimeo
                  ? "lg-has-vimeo"
                  : "lg-has-html5"),
              d.$slide
                .eq(t)
                .prepend(
                  '<div class="lg-video-cont ' +
                    m +
                    ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                    i +
                    '" /></div></div>',
                );
          } else
            g
              ? (d.$slide
                  .eq(t)
                  .prepend(
                    '<div class="lg-video-cont "><div class="lg-video"></div></div>',
                  ),
                d.$el.trigger("hasVideo.lg", [t, a, n]))
              : d.$slide
                  .eq(t)
                  .prepend(
                    '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                      a +
                      '" /></div>',
                  );
          if (
            (d.$el.trigger("onAferAppendSlide.lg", [t]),
            (s = d.$slide.eq(t).find(".lg-object")),
            r && s.attr("sizes", r),
            l)
          ) {
            s.attr("srcset", l);
            try {
              picturefill({ elements: [s[0]] });
            } catch (e) {
              console.warn(
                "lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.",
              );
            }
          }
          ".lg-sub-html" !== this.s.appendSubHtmlTo && d.addHtml(t),
            d.$slide.eq(t).addClass("lg-loaded");
        }
        d.$slide
          .eq(t)
          .find(".lg-object")
          .on("load.lg error.lg", function () {
            var e = 0;
            o && !p("body").hasClass("lg-from-hash") && (e = o),
              setTimeout(function () {
                d.$slide.eq(t).addClass("lg-complete"),
                  d.$el.trigger("onSlideItemLoad.lg", [t, o || 0]);
              }, e);
          }),
          g && g.html5 && !c && d.$slide.eq(t).addClass("lg-complete"),
          !0 === e &&
            (d.$slide.eq(t).hasClass("lg-complete")
              ? d.preload(t)
              : d.$slide
                  .eq(t)
                  .find(".lg-object")
                  .on("load.lg error.lg", function () {
                    d.preload(t);
                  }));
      }),
      (t.prototype.slide = function (e, t, o, s) {
        var i = this.$outer.find(".lg-current").index(),
          l = this;
        if (!l.lGalleryOn || i !== e) {
          var r = this.$slide.length,
            a = l.lGalleryOn ? this.s.speed : 0;
          if (!l.lgBusy) {
            var n, d, c;
            if (this.s.download)
              (n = l.s.dynamic
                ? !1 !== l.s.dynamicEl[e].downloadUrl &&
                  (l.s.dynamicEl[e].downloadUrl || l.s.dynamicEl[e].src)
                : "false" !== l.$items.eq(e).attr("data-download-url") &&
                  (l.$items.eq(e).attr("data-download-url") ||
                    l.$items.eq(e).attr("href") ||
                    l.$items.eq(e).attr("data-src")))
                ? (p("#lg-download").attr("href", n),
                  l.$outer.removeClass("lg-hide-download"))
                : l.$outer.addClass("lg-hide-download");
            if (
              (this.$el.trigger("onBeforeSlide.lg", [i, e, t, o]),
              (l.lgBusy = !0),
              clearTimeout(l.hideBartimeout),
              ".lg-sub-html" === this.s.appendSubHtmlTo &&
                setTimeout(function () {
                  l.addHtml(e);
                }, a),
              this.arrowDisable(e),
              s || (e < i ? (s = "prev") : i < e && (s = "next")),
              t)
            )
              this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),
                2 < r
                  ? ((d = e - 1),
                    (c = e + 1),
                    0 === e && i === r - 1
                      ? ((c = 0), (d = r - 1))
                      : e === r - 1 && 0 === i && ((c = 0), (d = r - 1)))
                  : ((d = 0), (c = 1)),
                "prev" === s
                  ? l.$slide.eq(c).addClass("lg-next-slide")
                  : l.$slide.eq(d).addClass("lg-prev-slide"),
                l.$slide.eq(e).addClass("lg-current");
            else
              l.$outer.addClass("lg-no-trans"),
                this.$slide.removeClass("lg-prev-slide lg-next-slide"),
                "prev" === s
                  ? (this.$slide.eq(e).addClass("lg-prev-slide"),
                    this.$slide.eq(i).addClass("lg-next-slide"))
                  : (this.$slide.eq(e).addClass("lg-next-slide"),
                    this.$slide.eq(i).addClass("lg-prev-slide")),
                setTimeout(function () {
                  l.$slide.removeClass("lg-current"),
                    l.$slide.eq(e).addClass("lg-current"),
                    l.$outer.removeClass("lg-no-trans");
                }, 50);
            l.lGalleryOn
              ? (setTimeout(function () {
                  l.loadContent(e, !0, 0);
                }, this.s.speed + 50),
                setTimeout(function () {
                  (l.lgBusy = !1),
                    l.$el.trigger("onAfterSlide.lg", [i, e, t, o]);
                }, this.s.speed))
              : (l.loadContent(e, !0, l.s.backdropDuration),
                (l.lgBusy = !1),
                l.$el.trigger("onAfterSlide.lg", [i, e, t, o])),
              (l.lGalleryOn = !0),
              this.s.counter && p("#lg-counter-current").text(e + 1);
          }
          l.index = e;
        }
      }),
      (t.prototype.goToNextSlide = function (e) {
        var t = this,
          o = t.s.loop;
        e && t.$slide.length < 3 && (o = !1),
          t.lgBusy ||
            (t.index + 1 < t.$slide.length
              ? (t.index++,
                t.$el.trigger("onBeforeNextSlide.lg", [t.index]),
                t.slide(t.index, e, !1, "next"))
              : o
                ? ((t.index = 0),
                  t.$el.trigger("onBeforeNextSlide.lg", [t.index]),
                  t.slide(t.index, e, !1, "next"))
                : t.s.slideEndAnimatoin &&
                  !e &&
                  (t.$outer.addClass("lg-right-end"),
                  setTimeout(function () {
                    t.$outer.removeClass("lg-right-end");
                  }, 400)));
      }),
      (t.prototype.goToPrevSlide = function (e) {
        var t = this,
          o = t.s.loop;
        e && t.$slide.length < 3 && (o = !1),
          t.lgBusy ||
            (0 < t.index
              ? (t.index--,
                t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]),
                t.slide(t.index, e, !1, "prev"))
              : o
                ? ((t.index = t.$items.length - 1),
                  t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]),
                  t.slide(t.index, e, !1, "prev"))
                : t.s.slideEndAnimatoin &&
                  !e &&
                  (t.$outer.addClass("lg-left-end"),
                  setTimeout(function () {
                    t.$outer.removeClass("lg-left-end");
                  }, 400)));
      }),
      (t.prototype.keyPress = function () {
        var t = this;
        1 < this.$items.length &&
          p(window).on("keyup.lg", function (e) {
            1 < t.$items.length &&
              (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()),
              39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()));
          }),
          p(window).on("keydown.lg", function (e) {
            !0 === t.s.escKey &&
              27 === e.keyCode &&
              (e.preventDefault(),
              t.$outer.hasClass("lg-thumb-open")
                ? t.$outer.removeClass("lg-thumb-open")
                : t.destroy());
          });
      }),
      (t.prototype.arrow = function () {
        var e = this;
        this.$outer.find(".lg-prev").on("click.lg", function () {
          e.goToPrevSlide();
        }),
          this.$outer.find(".lg-next").on("click.lg", function () {
            e.goToNextSlide();
          });
      }),
      (t.prototype.arrowDisable = function (e) {
        !this.s.loop &&
          this.s.hideControlOnEnd &&
          (e + 1 < this.$slide.length
            ? this.$outer
                .find(".lg-next")
                .removeAttr("disabled")
                .removeClass("disabled")
            : this.$outer
                .find(".lg-next")
                .attr("disabled", "disabled")
                .addClass("disabled"),
          0 < e
            ? this.$outer
                .find(".lg-prev")
                .removeAttr("disabled")
                .removeClass("disabled")
            : this.$outer
                .find(".lg-prev")
                .attr("disabled", "disabled")
                .addClass("disabled"));
      }),
      (t.prototype.setTranslate = function (e, t, o) {
        this.s.useLeft
          ? e.css("left", t)
          : e.css({ transform: "translate3d(" + t + "px, " + o + "px, 0px)" });
      }),
      (t.prototype.touchMove = function (e, t) {
        var o = t - e;
        15 < Math.abs(o) &&
          (this.$outer.addClass("lg-dragging"),
          this.setTranslate(this.$slide.eq(this.index), o, 0),
          this.setTranslate(
            p(".lg-prev-slide"),
            -this.$slide.eq(this.index).width() + o,
            0,
          ),
          this.setTranslate(
            p(".lg-next-slide"),
            this.$slide.eq(this.index).width() + o,
            0,
          ));
      }),
      (t.prototype.touchEnd = function (e) {
        var t = this;
        "lg-slide" !== t.s.mode && t.$outer.addClass("lg-slide"),
          this.$slide
            .not(".lg-current, .lg-prev-slide, .lg-next-slide")
            .css("opacity", "0"),
          setTimeout(function () {
            t.$outer.removeClass("lg-dragging"),
              e < 0 && Math.abs(e) > t.s.swipeThreshold
                ? t.goToNextSlide(!0)
                : 0 < e && Math.abs(e) > t.s.swipeThreshold
                  ? t.goToPrevSlide(!0)
                  : Math.abs(e) < 5 && t.$el.trigger("onSlideClick.lg"),
              t.$slide.removeAttr("style");
          }),
          setTimeout(function () {
            t.$outer.hasClass("lg-dragging") ||
              "lg-slide" === t.s.mode ||
              t.$outer.removeClass("lg-slide");
          }, t.s.speed + 100);
      }),
      (t.prototype.enableSwipe = function () {
        var t = this,
          o = 0,
          s = 0,
          i = !1;
        t.s.enableSwipe &&
          t.doCss() &&
          (t.$slide.on("touchstart.lg", function (e) {
            t.$outer.hasClass("lg-zoomed") ||
              t.lgBusy ||
              (e.preventDefault(),
              t.manageSwipeClass(),
              (o = e.originalEvent.targetTouches[0].pageX));
          }),
          t.$slide.on("touchmove.lg", function (e) {
            t.$outer.hasClass("lg-zoomed") ||
              (e.preventDefault(),
              (s = e.originalEvent.targetTouches[0].pageX),
              t.touchMove(o, s),
              (i = !0));
          }),
          t.$slide.on("touchend.lg", function () {
            t.$outer.hasClass("lg-zoomed") ||
              (i
                ? ((i = !1), t.touchEnd(s - o))
                : t.$el.trigger("onSlideClick.lg"));
          }));
      }),
      (t.prototype.enableDrag = function () {
        var t = this,
          o = 0,
          s = 0,
          i = !1,
          l = !1;
        t.s.enableDrag &&
          t.doCss() &&
          (t.$slide.on("mousedown.lg", function (e) {
            t.$outer.hasClass("lg-zoomed") ||
              t.lgBusy ||
              p(e.target).text().trim() ||
              (e.preventDefault(),
              t.manageSwipeClass(),
              (o = e.pageX),
              (i = !0),
              (t.$outer.scrollLeft += 1),
              (t.$outer.scrollLeft -= 1),
              t.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
              t.$el.trigger("onDragstart.lg"));
          }),
          p(window).on("mousemove.lg", function (e) {
            i &&
              ((l = !0),
              (s = e.pageX),
              t.touchMove(o, s),
              t.$el.trigger("onDragmove.lg"));
          }),
          p(window).on("mouseup.lg", function (e) {
            l
              ? ((l = !1), t.touchEnd(s - o), t.$el.trigger("onDragend.lg"))
              : (p(e.target).hasClass("lg-object") ||
                  p(e.target).hasClass("lg-video-play")) &&
                t.$el.trigger("onSlideClick.lg"),
              i &&
                ((i = !1),
                t.$outer.removeClass("lg-grabbing").addClass("lg-grab"));
          }));
      }),
      (t.prototype.manageSwipeClass = function () {
        var e = this.index + 1,
          t = this.index - 1;
        this.s.loop &&
          2 < this.$slide.length &&
          (0 === this.index
            ? (t = this.$slide.length - 1)
            : this.index === this.$slide.length - 1 && (e = 0)),
          this.$slide.removeClass("lg-next-slide lg-prev-slide"),
          -1 < t && this.$slide.eq(t).addClass("lg-prev-slide"),
          this.$slide.eq(e).addClass("lg-next-slide");
      }),
      (t.prototype.mousewheel = function () {
        var t = this;
        t.$outer.on("mousewheel.lg", function (e) {
          e.deltaY &&
            (0 < e.deltaY ? t.goToPrevSlide() : t.goToNextSlide(),
            e.preventDefault());
        });
      }),
      (t.prototype.closeGallery = function () {
        var t = this,
          o = !1;
        this.$outer.find(".lg-close").on("click.lg", function () {
          t.destroy();
        }),
          t.s.closable &&
            (t.$outer.on("mousedown.lg", function (e) {
              o = !!(
                p(e.target).is(".lg-outer") ||
                p(e.target).is(".lg-item ") ||
                p(e.target).is(".lg-img-wrap")
              );
            }),
            t.$outer.on("mousemove.lg", function () {
              o = !1;
            }),
            t.$outer.on("mouseup.lg", function (e) {
              (p(e.target).is(".lg-outer") ||
                p(e.target).is(".lg-item ") ||
                (p(e.target).is(".lg-img-wrap") && o)) &&
                (t.$outer.hasClass("lg-dragging") || t.destroy());
            }));
      }),
      (t.prototype.destroy = function (e) {
        var t = this;
        e ||
          (t.$el.trigger("onBeforeClose.lg"),
          p(window).scrollTop(t.prevScrollTop)),
          e &&
            (t.s.dynamic || this.$items.off("click.lg click.lgcustom"),
            p.removeData(t.el, "lightGallery")),
          this.$el.off(".lg.tm"),
          p.each(p.fn.lightGallery.modules, function (e) {
            t.modules[e] && t.modules[e].destroy();
          }),
          (this.lGalleryOn = !1),
          clearTimeout(t.hideBartimeout),
          (this.hideBartimeout = !1),
          p(window).off(".lg"),
          p("body").removeClass("lg-on lg-from-hash"),
          t.$outer && t.$outer.removeClass("lg-visible"),
          p(".lg-backdrop").removeClass("in"),
          setTimeout(function () {
            t.$outer && t.$outer.remove(),
              p(".lg-backdrop").remove(),
              e || t.$el.trigger("onCloseAfter.lg");
          }, t.s.backdropDuration + 50);
      }),
      (p.fn.lightGallery = function (e) {
        return this.each(function () {
          if (p.data(this, "lightGallery"))
            try {
              p(this).data("lightGallery").init();
            } catch (e) {
              console.error("lightGallery has not initiated properly");
            }
          else p.data(this, "lightGallery", new t(this, e));
        });
      }),
      (p.fn.lightGallery.modules = {});
  })();
}),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
        ? (module.exports = t(require("jquery")))
        : t(jQuery);
  })(0, function (o) {
    !(function () {
      "use strict";
      var t = {
          autoplay: !1,
          pause: 5e3,
          progressBar: !0,
          fourceAutoplay: !1,
          autoplayControls: !0,
          appendAutoplayControlsTo: ".lg-toolbar",
        },
        e = function (e) {
          return (
            (this.core = o(e).data("lightGallery")),
            (this.$el = o(e)),
            !(this.core.$items.length < 2) &&
              ((this.core.s = o.extend({}, t, this.core.s)),
              (this.interval = !1),
              (this.fromAuto = !0),
              (this.canceledOnTouch = !1),
              (this.fourceAutoplayTemp = this.core.s.fourceAutoplay),
              this.core.doCss() || (this.core.s.progressBar = !1),
              this.init(),
              this)
          );
        };
      (e.prototype.init = function () {
        var e = this;
        e.core.s.autoplayControls && e.controls(),
          e.core.s.progressBar &&
            e.core.$outer
              .find(".lg")
              .append(
                '<div class="lg-progress-bar"><div class="lg-progress"></div></div>',
              ),
          e.progress(),
          e.core.s.autoplay &&
            e.$el.one("onSlideItemLoad.lg.tm", function () {
              e.startlAuto();
            }),
          e.$el.on("onDragstart.lg.tm touchstart.lg.tm", function () {
            e.interval && (e.cancelAuto(), (e.canceledOnTouch = !0));
          }),
          e.$el.on(
            "onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",
            function () {
              !e.interval &&
                e.canceledOnTouch &&
                (e.startlAuto(), (e.canceledOnTouch = !1));
            },
          );
      }),
        (e.prototype.progress = function () {
          var e,
            t,
            o = this;
          o.$el.on("onBeforeSlide.lg.tm", function () {
            o.core.s.progressBar &&
              o.fromAuto &&
              ((e = o.core.$outer.find(".lg-progress-bar")),
              (t = o.core.$outer.find(".lg-progress")),
              o.interval &&
                (t.removeAttr("style"),
                e.removeClass("lg-start"),
                setTimeout(function () {
                  t.css(
                    "transition",
                    "width " + (o.core.s.speed + o.core.s.pause) + "ms ease 0s",
                  ),
                    e.addClass("lg-start");
                }, 20))),
              o.fromAuto || o.core.s.fourceAutoplay || o.cancelAuto(),
              (o.fromAuto = !1);
          });
        }),
        (e.prototype.controls = function () {
          var e = this;
          o(this.core.s.appendAutoplayControlsTo).append(
            '<span class="lg-autoplay-button lg-icon"></span>',
          ),
            e.core.$outer
              .find(".lg-autoplay-button")
              .on("click.lg", function () {
                o(e.core.$outer).hasClass("lg-show-autoplay")
                  ? (e.cancelAuto(), (e.core.s.fourceAutoplay = !1))
                  : e.interval ||
                    (e.startlAuto(),
                    (e.core.s.fourceAutoplay = e.fourceAutoplayTemp));
              });
        }),
        (e.prototype.startlAuto = function () {
          var e = this;
          e.core.$outer
            .find(".lg-progress")
            .css(
              "transition",
              "width " + (e.core.s.speed + e.core.s.pause) + "ms ease 0s",
            ),
            e.core.$outer.addClass("lg-show-autoplay"),
            e.core.$outer.find(".lg-progress-bar").addClass("lg-start"),
            (e.interval = setInterval(function () {
              e.core.index + 1 < e.core.$items.length
                ? e.core.index++
                : (e.core.index = 0),
                (e.fromAuto = !0),
                e.core.slide(e.core.index, !1, !1, "next");
            }, e.core.s.speed + e.core.s.pause));
        }),
        (e.prototype.cancelAuto = function () {
          clearInterval(this.interval),
            (this.interval = !1),
            this.core.$outer.find(".lg-progress").removeAttr("style"),
            this.core.$outer.removeClass("lg-show-autoplay"),
            this.core.$outer.find(".lg-progress-bar").removeClass("lg-start");
        }),
        (e.prototype.destroy = function () {
          this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove();
        }),
        (o.fn.lightGallery.modules.autoplay = e);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
        ? (module.exports = t(require("jquery")))
        : t(jQuery);
  })(0, function (o) {
    !(function () {
      "use strict";
      var t = { fullScreen: !0 },
        e = function (e) {
          return (
            (this.core = o(e).data("lightGallery")),
            (this.$el = o(e)),
            (this.core.s = o.extend({}, t, this.core.s)),
            this.init(),
            this
          );
        };
      (e.prototype.init = function () {
        var e = "";
        if (this.core.s.fullScreen) {
          if (
            !(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            )
          )
            return;
          (e = '<span class="lg-fullscreen lg-icon"></span>'),
            this.core.$outer.find(".lg-toolbar").append(e),
            this.fullScreen();
        }
      }),
        (e.prototype.requestFullscreen = function () {
          var e = document.documentElement;
          e.requestFullscreen
            ? e.requestFullscreen()
            : e.msRequestFullscreen
              ? e.msRequestFullscreen()
              : e.mozRequestFullScreen
                ? e.mozRequestFullScreen()
                : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
        }),
        (e.prototype.exitFullscreen = function () {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.msExitFullscreen
              ? document.msExitFullscreen()
              : document.mozCancelFullScreen
                ? document.mozCancelFullScreen()
                : document.webkitExitFullscreen &&
                  document.webkitExitFullscreen();
        }),
        (e.prototype.fullScreen = function () {
          var e = this;
          o(document).on(
            "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",
            function () {
              e.core.$outer.toggleClass("lg-fullscreen-on");
            },
          ),
            this.core.$outer.find(".lg-fullscreen").on("click.lg", function () {
              document.fullscreenElement ||
              document.mozFullScreenElement ||
              document.webkitFullscreenElement ||
              document.msFullscreenElement
                ? e.exitFullscreen()
                : e.requestFullscreen();
            });
        }),
        (e.prototype.destroy = function () {
          this.exitFullscreen(),
            o(document).off(
              "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",
            );
        }),
        (o.fn.lightGallery.modules.fullscreen = e);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
        ? (module.exports = t(require("jquery")))
        : t(jQuery);
  })(0, function (r) {
    !(function () {
      "use strict";
      var t = { pager: !1 },
        e = function (e) {
          return (
            (this.core = r(e).data("lightGallery")),
            (this.$el = r(e)),
            (this.core.s = r.extend({}, t, this.core.s)),
            this.core.s.pager && 1 < this.core.$items.length && this.init(),
            this
          );
        };
      (e.prototype.init = function () {
        var s,
          e,
          t,
          o = this,
          i = "";
        if (
          (o.core.$outer
            .find(".lg")
            .append('<div class="lg-pager-outer"></div>'),
          o.core.s.dynamic)
        )
          for (var l = 0; l < o.core.s.dynamicEl.length; l++)
            i +=
              '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
              o.core.s.dynamicEl[l].thumb +
              '" /></div></span>';
        else
          o.core.$items.each(function () {
            o.core.s.exThumbImage
              ? (i +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  r(this).attr(o.core.s.exThumbImage) +
                  '" /></div></span>')
              : (i +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  r(this).find("img").attr("src") +
                  '" /></div></span>');
          });
        (e = o.core.$outer.find(".lg-pager-outer")).html(i),
          (s = o.core.$outer.find(".lg-pager-cont")).on(
            "click.lg touchend.lg",
            function () {
              var e = r(this);
              (o.core.index = e.index()),
                o.core.slide(o.core.index, !1, !0, !1);
            },
          ),
          e.on("mouseover.lg", function () {
            clearTimeout(t), e.addClass("lg-pager-hover");
          }),
          e.on("mouseout.lg", function () {
            t = setTimeout(function () {
              e.removeClass("lg-pager-hover");
            });
          }),
          o.core.$el.on("onBeforeSlide.lg.tm", function (e, t, o) {
            s.removeClass("lg-pager-active"),
              s.eq(o).addClass("lg-pager-active");
          });
      }),
        (e.prototype.destroy = function () {}),
        (r.fn.lightGallery.modules.pager = e);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
        ? (module.exports = t(require("jquery")))
        : t(jQuery);
  })(0, function (d) {
    !(function () {
      "use strict";
      var t = {
          thumbnail: !0,
          animateThumb: !0,
          currentPagerPosition: "middle",
          thumbWidth: 100,
          thumbHeight: "80px",
          thumbContHeight: 100,
          thumbMargin: 5,
          exThumbImage: !1,
          showThumbByDefault: !0,
          toogleThumb: !0,
          pullCaptionUp: !0,
          enableThumbDrag: !0,
          enableThumbSwipe: !0,
          swipeThreshold: 50,
          loadYoutubeThumbnail: !0,
          youtubeThumbSize: 1,
          loadVimeoThumbnail: !0,
          vimeoThumbSize: "thumbnail_small",
          loadDailymotionThumbnail: !0,
        },
        e = function (e) {
          return (
            (this.core = d(e).data("lightGallery")),
            (this.core.s = d.extend({}, t, this.core.s)),
            (this.$el = d(e)),
            (this.$thumbOuter = null),
            (this.thumbOuterWidth = 0),
            (this.thumbTotalWidth =
              this.core.$items.length *
              (this.core.s.thumbWidth + this.core.s.thumbMargin)),
            (this.thumbIndex = this.core.index),
            this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"),
            (this.left = 0),
            this.init(),
            this
          );
        };
      (e.prototype.init = function () {
        var e = this;
        this.core.s.thumbnail &&
          1 < this.core.$items.length &&
          (this.core.s.showThumbByDefault &&
            setTimeout(function () {
              e.core.$outer.addClass("lg-thumb-open");
            }, 700),
          this.core.s.pullCaptionUp &&
            this.core.$outer.addClass("lg-pull-caption-up"),
          this.build(),
          this.core.s.animateThumb && this.core.doCss()
            ? (this.core.s.enableThumbDrag && this.enableThumbDrag(),
              this.core.s.enableThumbSwipe && this.enableThumbSwipe(),
              (this.thumbClickable = !1))
            : (this.thumbClickable = !0),
          this.toogle(),
          this.thumbkeyPress());
      }),
        (e.prototype.build = function () {
          function t(e, t, o) {
            var s,
              i = r.core.isVideo(e, o) || {},
              l = "";
            i.youtube || i.vimeo || i.dailymotion
              ? i.youtube
                ? (s = r.core.s.loadYoutubeThumbnail
                    ? "//img.youtube.com/vi/" +
                      i.youtube[1] +
                      "/" +
                      r.core.s.youtubeThumbSize +
                      ".jpg"
                    : t)
                : i.vimeo
                  ? r.core.s.loadVimeoThumbnail
                    ? ((s = "//i.vimeocdn.com/video/error_" + n + ".jpg"),
                      (l = i.vimeo[1]))
                    : (s = t)
                  : i.dailymotion &&
                    (s = r.core.s.loadDailymotionThumbnail
                      ? "//www.dailymotion.com/thumbnail/video/" +
                        i.dailymotion[1]
                      : t)
              : (s = t),
              (a +=
                '<div data-vimeo-id="' +
                l +
                '" class="lg-thumb-item" style="width:' +
                r.core.s.thumbWidth +
                "px; height: " +
                r.core.s.thumbHeight +
                "; margin-right: " +
                r.core.s.thumbMargin +
                'px"><img src="' +
                s +
                '" /></div>'),
              (l = "");
          }
          var e,
            r = this,
            a = "",
            n = "";
          switch (this.core.s.vimeoThumbSize) {
            case "thumbnail_large":
              n = "640";
              break;
            case "thumbnail_medium":
              n = "200x150";
              break;
            case "thumbnail_small":
              n = "100x75";
          }
          if (
            (r.core.$outer.addClass("lg-has-thumb"),
            r.core.$outer
              .find(".lg")
              .append(
                '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>',
              ),
            (r.$thumbOuter = r.core.$outer.find(".lg-thumb-outer")),
            (r.thumbOuterWidth = r.$thumbOuter.width()),
            r.core.s.animateThumb &&
              r.core.$outer
                .find(".lg-thumb")
                .css({ width: r.thumbTotalWidth + "px", position: "relative" }),
            this.core.s.animateThumb &&
              r.$thumbOuter.css("height", r.core.s.thumbContHeight + "px"),
            r.core.s.dynamic)
          )
            for (var o = 0; o < r.core.s.dynamicEl.length; o++)
              t(r.core.s.dynamicEl[o].src, r.core.s.dynamicEl[o].thumb, o);
          else
            r.core.$items.each(function (e) {
              r.core.s.exThumbImage
                ? t(
                    d(this).attr("href") || d(this).attr("data-src"),
                    d(this).attr(r.core.s.exThumbImage),
                    e,
                  )
                : t(
                    d(this).attr("href") || d(this).attr("data-src"),
                    d(this).find("img").attr("src"),
                    e,
                  );
            });
          r.core.$outer.find(".lg-thumb").html(a),
            (e = r.core.$outer.find(".lg-thumb-item")).each(function () {
              var t = d(this),
                e = t.attr("data-vimeo-id");
              e &&
                d.getJSON(
                  "//www.vimeo.com/api/v2/video/" + e + ".json?callback=?",
                  { format: "json" },
                  function (e) {
                    t.find("img").attr("src", e[0][r.core.s.vimeoThumbSize]);
                  },
                );
            }),
            e.eq(r.core.index).addClass("active"),
            r.core.$el.on("onBeforeSlide.lg.tm", function () {
              e.removeClass("active"), e.eq(r.core.index).addClass("active");
            }),
            e.on("click.lg touchend.lg", function () {
              var e = d(this);
              setTimeout(function () {
                ((r.thumbClickable && !r.core.lgBusy) || !r.core.doCss()) &&
                  ((r.core.index = e.index()),
                  r.core.slide(r.core.index, !1, !0, !1));
              }, 50);
            }),
            r.core.$el.on("onBeforeSlide.lg.tm", function () {
              r.animateThumb(r.core.index);
            }),
            d(window).on(
              "resize.lg.thumb orientationchange.lg.thumb",
              function () {
                setTimeout(function () {
                  r.animateThumb(r.core.index),
                    (r.thumbOuterWidth = r.$thumbOuter.width());
                }, 200);
              },
            );
        }),
        (e.prototype.setTranslate = function (e) {
          this.core.$outer
            .find(".lg-thumb")
            .css({ transform: "translate3d(-" + e + "px, 0px, 0px)" });
        }),
        (e.prototype.animateThumb = function (e) {
          var t = this.core.$outer.find(".lg-thumb");
          if (this.core.s.animateThumb) {
            var o;
            switch (this.core.s.currentPagerPosition) {
              case "left":
                o = 0;
                break;
              case "middle":
                o = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                break;
              case "right":
                o = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            (this.left =
              (this.core.s.thumbWidth + this.core.s.thumbMargin) * e - 1 - o),
              this.left > this.thumbTotalWidth - this.thumbOuterWidth &&
                (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
              this.left < 0 && (this.left = 0),
              this.core.lGalleryOn
                ? (t.hasClass("on") ||
                    this.core.$outer
                      .find(".lg-thumb")
                      .css("transition-duration", this.core.s.speed + "ms"),
                  this.core.doCss() ||
                    t.animate({ left: -this.left + "px" }, this.core.s.speed))
                : this.core.doCss() || t.css("left", -this.left + "px"),
              this.setTranslate(this.left);
          }
        }),
        (e.prototype.enableThumbDrag = function () {
          var t = this,
            o = 0,
            s = 0,
            i = !1,
            l = !1,
            r = 0;
          t.$thumbOuter.addClass("lg-grab"),
            t.core.$outer
              .find(".lg-thumb")
              .on("mousedown.lg.thumb", function (e) {
                t.thumbTotalWidth > t.thumbOuterWidth &&
                  (e.preventDefault(),
                  (o = e.pageX),
                  (i = !0),
                  (t.core.$outer.scrollLeft += 1),
                  (t.core.$outer.scrollLeft -= 1),
                  (t.thumbClickable = !1),
                  t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
              }),
            d(window).on("mousemove.lg.thumb", function (e) {
              i &&
                ((r = t.left),
                (l = !0),
                (s = e.pageX),
                t.$thumbOuter.addClass("lg-dragging"),
                (r -= s - o) > t.thumbTotalWidth - t.thumbOuterWidth &&
                  (r = t.thumbTotalWidth - t.thumbOuterWidth),
                r < 0 && (r = 0),
                t.setTranslate(r));
            }),
            d(window).on("mouseup.lg.thumb", function () {
              l
                ? ((l = !1),
                  t.$thumbOuter.removeClass("lg-dragging"),
                  (t.left = r),
                  Math.abs(s - o) < t.core.s.swipeThreshold &&
                    (t.thumbClickable = !0))
                : (t.thumbClickable = !0),
                i &&
                  ((i = !1),
                  t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"));
            });
        }),
        (e.prototype.enableThumbSwipe = function () {
          var t = this,
            o = 0,
            s = 0,
            i = !1,
            l = 0;
          t.core.$outer.find(".lg-thumb").on("touchstart.lg", function (e) {
            t.thumbTotalWidth > t.thumbOuterWidth &&
              (e.preventDefault(),
              (o = e.originalEvent.targetTouches[0].pageX),
              (t.thumbClickable = !1));
          }),
            t.core.$outer.find(".lg-thumb").on("touchmove.lg", function (e) {
              t.thumbTotalWidth > t.thumbOuterWidth &&
                (e.preventDefault(),
                (s = e.originalEvent.targetTouches[0].pageX),
                (i = !0),
                t.$thumbOuter.addClass("lg-dragging"),
                (l = t.left),
                (l -= s - o) > t.thumbTotalWidth - t.thumbOuterWidth &&
                  (l = t.thumbTotalWidth - t.thumbOuterWidth),
                l < 0 && (l = 0),
                t.setTranslate(l));
            }),
            t.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
              t.thumbTotalWidth > t.thumbOuterWidth && i
                ? ((i = !1),
                  t.$thumbOuter.removeClass("lg-dragging"),
                  Math.abs(s - o) < t.core.s.swipeThreshold &&
                    (t.thumbClickable = !0),
                  (t.left = l))
                : (t.thumbClickable = !0);
            });
        }),
        (e.prototype.toogle = function () {
          var e = this;
          e.core.s.toogleThumb &&
            (e.core.$outer.addClass("lg-can-toggle"),
            e.$thumbOuter.append(
              '<span class="lg-toogle-thumb lg-icon"></span>',
            ),
            e.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
              e.core.$outer.toggleClass("lg-thumb-open");
            }));
        }),
        (e.prototype.thumbkeyPress = function () {
          var t = this;
          d(window).on("keydown.lg.thumb", function (e) {
            38 === e.keyCode
              ? (e.preventDefault(), t.core.$outer.addClass("lg-thumb-open"))
              : 40 === e.keyCode &&
                (e.preventDefault(),
                t.core.$outer.removeClass("lg-thumb-open"));
          });
        }),
        (e.prototype.destroy = function () {
          this.core.s.thumbnail &&
            1 < this.core.$items.length &&
            (d(window).off(
              "resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb",
            ),
            this.$thumbOuter.remove(),
            this.core.$outer.removeClass("lg-has-thumb"));
        }),
        (d.fn.lightGallery.modules.Thumbnail = e);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof module && module.exports
        ? (module.exports = t(require("jquery")))
        : t(e.jQuery);
  })(this, function (h) {
    !(function () {
      "use strict";
      var t = {
          videoMaxWidth: "855px",
          autoplayFirstVideo: !0,
          youtubePlayerParams: !1,
          vimeoPlayerParams: !1,
          dailymotionPlayerParams: !1,
          vkPlayerParams: !1,
          videojs: !1,
          videojsOptions: {},
        },
        e = function (e) {
          return (
            (this.core = h(e).data("lightGallery")),
            (this.$el = h(e)),
            (this.core.s = h.extend({}, t, this.core.s)),
            (this.videoLoaded = !1),
            this.init(),
            this
          );
        };
      (e.prototype.init = function () {
        var s = this;
        s.core.$el.on(
          "hasVideo.lg.tm",
          function (e, t, o, s) {
            var i = this;
            if (
              (i.core.$slide
                .eq(t)
                .find(".lg-video")
                .append(i.loadVideo(o, "lg-object", !0, t, s)),
              s)
            )
              if (i.core.s.videojs)
                try {
                  videojs(
                    i.core.$slide.eq(t).find(".lg-html5").get(0),
                    i.core.s.videojsOptions,
                    function () {
                      !i.videoLoaded &&
                        i.core.s.autoplayFirstVideo &&
                        this.play();
                    },
                  );
                } catch (e) {
                  console.error("Make sure you have included videojs");
                }
              else
                !i.videoLoaded &&
                  i.core.s.autoplayFirstVideo &&
                  i.core.$slide.eq(t).find(".lg-html5").get(0).play();
          }.bind(this),
        ),
          s.core.$el.on(
            "onAferAppendSlide.lg.tm",
            function (e, t) {
              var o = this.core.$slide.eq(t).find(".lg-video-cont");
              o.hasClass("lg-has-iframe") ||
                (o.css("max-width", this.core.s.videoMaxWidth),
                (this.videoLoaded = !0));
            }.bind(this),
          ),
          s.core.doCss() &&
          1 < s.core.$items.length &&
          (s.core.s.enableSwipe || s.core.s.enableDrag)
            ? s.core.$el.on("onSlideClick.lg.tm", function () {
                var e = s.core.$slide.eq(s.core.index);
                s.loadVideoOnclick(e);
              })
            : s.core.$slide.on("click.lg", function () {
                s.loadVideoOnclick(h(this));
              }),
          s.core.$el.on(
            "onBeforeSlide.lg.tm",
            function (e, t, o) {
              var s,
                i = this,
                l = i.core.$slide.eq(t),
                r = l.find(".lg-youtube").get(0),
                a = l.find(".lg-vimeo").get(0),
                n = l.find(".lg-dailymotion").get(0),
                d = l.find(".lg-vk").get(0),
                c = l.find(".lg-html5").get(0);
              if (r)
                r.contentWindow.postMessage(
                  '{"event":"command","func":"pauseVideo","args":""}',
                  "*",
                );
              else if (a)
                try {
                  $f(a).api("pause");
                } catch (e) {
                  console.error("Make sure you have included froogaloop2 js");
                }
              else if (n) n.contentWindow.postMessage("pause", "*");
              else if (c)
                if (i.core.s.videojs)
                  try {
                    videojs(c).pause();
                  } catch (e) {
                    console.error("Make sure you have included videojs");
                  }
                else c.pause();
              d &&
                h(d).attr(
                  "src",
                  h(d).attr("src").replace("&autoplay", "&noplay"),
                ),
                (s = i.core.s.dynamic
                  ? i.core.s.dynamicEl[o].src
                  : i.core.$items.eq(o).attr("href") ||
                    i.core.$items.eq(o).attr("data-src"));
              var u = i.core.isVideo(s, o) || {};
              (u.youtube || u.vimeo || u.dailymotion || u.vk) &&
                i.core.$outer.addClass("lg-hide-download");
            }.bind(this),
          ),
          s.core.$el.on("onAfterSlide.lg.tm", function (e, t) {
            s.core.$slide.eq(t).removeClass("lg-video-playing");
          }),
          s.core.s.autoplayFirstVideo &&
            s.core.$el.on("onAferAppendSlide.lg.tm", function (e, t) {
              if (!s.core.lGalleryOn) {
                var o = s.core.$slide.eq(t);
                setTimeout(function () {
                  s.loadVideoOnclick(o);
                }, 100);
              }
            });
      }),
        (e.prototype.loadVideo = function (e, t, o, s, i) {
          var l = "",
            r = 1,
            a = "",
            n = this.core.isVideo(e, s) || {};
          if (
            (o &&
              (r = this.videoLoaded
                ? 0
                : this.core.s.autoplayFirstVideo
                  ? 1
                  : 0),
            n.youtube)
          )
            (a = "?wmode=opaque&autoplay=" + r + "&enablejsapi=1"),
              this.core.s.youtubePlayerParams &&
                (a = a + "&" + h.param(this.core.s.youtubePlayerParams)),
              (l =
                '<iframe class="lg-video-object lg-youtube ' +
                t +
                '" width="560" height="315" src="//www.youtube.com/embed/' +
                n.youtube[1] +
                a +
                '" frameborder="0" allowfullscreen></iframe>');
          else if (n.vimeo)
            (a = "?autoplay=" + r + "&api=1"),
              this.core.s.vimeoPlayerParams &&
                (a = a + "&" + h.param(this.core.s.vimeoPlayerParams)),
              (l =
                '<iframe class="lg-video-object lg-vimeo ' +
                t +
                '" width="560" height="315"  src="//player.vimeo.com/video/' +
                n.vimeo[1] +
                a +
                '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
          else if (n.dailymotion)
            (a = "?wmode=opaque&autoplay=" + r + "&api=postMessage"),
              this.core.s.dailymotionPlayerParams &&
                (a = a + "&" + h.param(this.core.s.dailymotionPlayerParams)),
              (l =
                '<iframe class="lg-video-object lg-dailymotion ' +
                t +
                '" width="560" height="315" src="//www.dailymotion.com/embed/video/' +
                n.dailymotion[1] +
                a +
                '" frameborder="0" allowfullscreen></iframe>');
          else if (n.html5) {
            var d = i.substring(0, 1);
            ("." !== d && "#" !== d) || (i = h(i).html()), (l = i);
          } else
            n.vk &&
              ((a = "&autoplay=" + r),
              this.core.s.vkPlayerParams &&
                (a = a + "&" + h.param(this.core.s.vkPlayerParams)),
              (l =
                '<iframe class="lg-video-object lg-vk ' +
                t +
                '" width="560" height="315" src="//vk.com/video_ext.php?' +
                n.vk[1] +
                a +
                '" frameborder="0" allowfullscreen></iframe>'));
          return l;
        }),
        (e.prototype.loadVideoOnclick = function (o) {
          var s = this;
          if (
            o.find(".lg-object").hasClass("lg-has-poster") &&
            o.find(".lg-object").is(":visible")
          )
            if (o.hasClass("lg-has-video")) {
              var e = o.find(".lg-youtube").get(0),
                t = o.find(".lg-vimeo").get(0),
                i = o.find(".lg-dailymotion").get(0),
                l = o.find(".lg-html5").get(0);
              if (e)
                e.contentWindow.postMessage(
                  '{"event":"command","func":"playVideo","args":""}',
                  "*",
                );
              else if (t)
                try {
                  $f(t).api("play");
                } catch (o) {
                  console.error("Make sure you have included froogaloop2 js");
                }
              else if (i) i.contentWindow.postMessage("play", "*");
              else if (l)
                if (s.core.s.videojs)
                  try {
                    videojs(l).play();
                  } catch (o) {
                    console.error("Make sure you have included videojs");
                  }
                else l.play();
              o.addClass("lg-video-playing");
            } else {
              o.addClass("lg-video-playing lg-has-video");
              var r,
                a,
                n = function (e, t) {
                  if (
                    (o
                      .find(".lg-video")
                      .append(s.loadVideo(e, "", !1, s.core.index, t)),
                    t)
                  )
                    if (s.core.s.videojs)
                      try {
                        videojs(
                          s.core.$slide
                            .eq(s.core.index)
                            .find(".lg-html5")
                            .get(0),
                          s.core.s.videojsOptions,
                          function () {
                            this.play();
                          },
                        );
                      } catch (e) {
                        console.error("Make sure you have included videojs");
                      }
                    else
                      s.core.$slide
                        .eq(s.core.index)
                        .find(".lg-html5")
                        .get(0)
                        .play();
                };
              (a = s.core.s.dynamic
                ? ((r = s.core.s.dynamicEl[s.core.index].src),
                  s.core.s.dynamicEl[s.core.index].html)
                : ((r =
                    s.core.$items.eq(s.core.index).attr("href") ||
                    s.core.$items.eq(s.core.index).attr("data-src")),
                  s.core.$items.eq(s.core.index).attr("data-html"))),
                n(r, a);
              var d = o.find(".lg-object");
              o.find(".lg-video").append(d),
                o.find(".lg-video-object").hasClass("lg-html5") ||
                  (o.removeClass("lg-complete"),
                  o
                    .find(".lg-video-object")
                    .on("load.lg error.lg", function () {
                      o.addClass("lg-complete");
                    }));
            }
        }),
        (e.prototype.destroy = function () {
          this.videoLoaded = !1;
        }),
        (h.fn.lightGallery.modules.video = e);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
        ? (module.exports = t(require("jquery")))
        : t(jQuery);
  })(0, function (u) {
    !(function () {
      "use strict";
      var e,
        t,
        o = {
          scale: 1,
          zoom: !0,
          actualSize: !0,
          enableZoomAfter: 300,
          useLeftForZoom:
            ((e = !1),
            (t = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)),
            t && parseInt(t[2], 10) < 54 && (e = !0),
            e),
        },
        s = function (e) {
          return (
            (this.core = u(e).data("lightGallery")),
            (this.core.s = u.extend({}, o, this.core.s)),
            this.core.s.zoom &&
              this.core.doCss() &&
              (this.init(),
              (this.zoomabletimeout = !1),
              (this.pageX = u(window).width() / 2),
              (this.pageY = u(window).height() / 2 + u(window).scrollTop())),
            this
          );
        };
      (s.prototype.init = function () {
        var r = this,
          e =
            '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
        r.core.s.actualSize &&
          (e += '<span id="lg-actual-size" class="lg-icon"></span>'),
          r.core.s.useLeftForZoom
            ? r.core.$outer.addClass("lg-use-left-for-zoom")
            : r.core.$outer.addClass("lg-use-transition-for-zoom"),
          this.core.$outer.find(".lg-toolbar").append(e),
          r.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (e, t, o) {
            var s = r.core.s.enableZoomAfter + o;
            u("body").hasClass("lg-from-hash") && o
              ? (s = 0)
              : u("body").removeClass("lg-from-hash"),
              (r.zoomabletimeout = setTimeout(function () {
                r.core.$slide.eq(t).addClass("lg-zoomable");
              }, s + 30));
          });
        var a = 1,
          t = function (e) {
            var t = r.core.$outer.find(".lg-current .lg-image"),
              o = (u(window).width() - t.prop("offsetWidth")) / 2,
              s =
                (u(window).height() - t.prop("offsetHeight")) / 2 +
                u(window).scrollTop(),
              i = (e - 1) * (r.pageX - o),
              l = (e - 1) * (r.pageY - s);
            t
              .css("transform", "scale3d(" + e + ", " + e + ", 1)")
              .attr("data-scale", e),
              r.core.s.useLeftForZoom
                ? t
                    .parent()
                    .css({ left: -i + "px", top: -l + "px" })
                    .attr("data-x", i)
                    .attr("data-y", l)
                : t
                    .parent()
                    .css(
                      "transform",
                      "translate3d(-" + i + "px, -" + l + "px, 0)",
                    )
                    .attr("data-x", i)
                    .attr("data-y", l);
          },
          n = function () {
            1 < a ? r.core.$outer.addClass("lg-zoomed") : r.resetZoom(),
              a < 1 && (a = 1),
              t(a);
          },
          s = function (e, t, o, s) {
            var i,
              l = t.prop("offsetWidth");
            (i = r.core.s.dynamic
              ? r.core.s.dynamicEl[o].width || t[0].naturalWidth || l
              : r.core.$items.eq(o).attr("data-width") ||
                t[0].naturalWidth ||
                l),
              r.core.$outer.hasClass("lg-zoomed")
                ? (a = 1)
                : l < i && (a = i / l || 2),
              s
                ? ((r.pageX = u(window).width() / 2),
                  (r.pageY = u(window).height() / 2 + u(window).scrollTop()))
                : ((r.pageX =
                    e.pageX || e.originalEvent.targetTouches[0].pageX),
                  (r.pageY =
                    e.pageY || e.originalEvent.targetTouches[0].pageY)),
              n(),
              setTimeout(function () {
                r.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
              }, 10);
          },
          i = !1;
        r.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (e, t) {
          var o = r.core.$slide.eq(t).find(".lg-image");
          o.on("dblclick", function (e) {
            s(e, o, t);
          }),
            o.on("touchstart", function (e) {
              i
                ? (clearTimeout(i), (i = null), s(e, o, t))
                : (i = setTimeout(function () {
                    i = null;
                  }, 300)),
                e.preventDefault();
            });
        }),
          u(window).on(
            "resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",
            function () {
              (r.pageX = u(window).width() / 2),
                (r.pageY = u(window).height() / 2 + u(window).scrollTop()),
                t(a);
            },
          ),
          u("#lg-zoom-out").on("click.lg", function () {
            r.core.$outer.find(".lg-current .lg-image").length &&
              ((a -= r.core.s.scale), n());
          }),
          u("#lg-zoom-in").on("click.lg", function () {
            r.core.$outer.find(".lg-current .lg-image").length &&
              ((a += r.core.s.scale), n());
          }),
          u("#lg-actual-size").on("click.lg", function (e) {
            s(
              e,
              r.core.$slide.eq(r.core.index).find(".lg-image"),
              r.core.index,
              !0,
            );
          }),
          r.core.$el.on("onBeforeSlide.lg.tm", function () {
            (a = 1), r.resetZoom();
          }),
          r.zoomDrag(),
          r.zoomSwipe();
      }),
        (s.prototype.resetZoom = function () {
          this.core.$outer.removeClass("lg-zoomed"),
            this.core.$slide
              .find(".lg-img-wrap")
              .removeAttr("style data-x data-y"),
            this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
            (this.pageX = u(window).width() / 2),
            (this.pageY = u(window).height() / 2 + u(window).scrollTop());
        }),
        (s.prototype.zoomSwipe = function () {
          var i = this,
            l = {},
            r = {},
            a = !1,
            n = !1,
            d = !1;
          i.core.$slide.on("touchstart.lg", function (e) {
            if (i.core.$outer.hasClass("lg-zoomed")) {
              var t = i.core.$slide.eq(i.core.index).find(".lg-object");
              (d =
                t.prop("offsetHeight") * t.attr("data-scale") >
                i.core.$outer.find(".lg").height()),
                ((n =
                  t.prop("offsetWidth") * t.attr("data-scale") >
                  i.core.$outer.find(".lg").width()) ||
                  d) &&
                  (e.preventDefault(),
                  (l = {
                    x: e.originalEvent.targetTouches[0].pageX,
                    y: e.originalEvent.targetTouches[0].pageY,
                  }));
            }
          }),
            i.core.$slide.on("touchmove.lg", function (e) {
              if (i.core.$outer.hasClass("lg-zoomed")) {
                var t,
                  o,
                  s = i.core.$slide.eq(i.core.index).find(".lg-img-wrap");
                e.preventDefault(),
                  (a = !0),
                  (r = {
                    x: e.originalEvent.targetTouches[0].pageX,
                    y: e.originalEvent.targetTouches[0].pageY,
                  }),
                  i.core.$outer.addClass("lg-zoom-dragging"),
                  (o = d
                    ? -Math.abs(s.attr("data-y")) + (r.y - l.y)
                    : -Math.abs(s.attr("data-y"))),
                  (t = n
                    ? -Math.abs(s.attr("data-x")) + (r.x - l.x)
                    : -Math.abs(s.attr("data-x"))),
                  (15 < Math.abs(r.x - l.x) || 15 < Math.abs(r.y - l.y)) &&
                    (i.core.s.useLeftForZoom
                      ? s.css({ left: t + "px", top: o + "px" })
                      : s.css(
                          "transform",
                          "translate3d(" + t + "px, " + o + "px, 0)",
                        ));
              }
            }),
            i.core.$slide.on("touchend.lg", function () {
              i.core.$outer.hasClass("lg-zoomed") &&
                a &&
                ((a = !1),
                i.core.$outer.removeClass("lg-zoom-dragging"),
                i.touchendZoom(l, r, n, d));
            });
        }),
        (s.prototype.zoomDrag = function () {
          var i = this,
            l = {},
            r = {},
            a = !1,
            n = !1,
            d = !1,
            c = !1;
          i.core.$slide.on("mousedown.lg.zoom", function (e) {
            var t = i.core.$slide.eq(i.core.index).find(".lg-object");
            (c =
              t.prop("offsetHeight") * t.attr("data-scale") >
              i.core.$outer.find(".lg").height()),
              (d =
                t.prop("offsetWidth") * t.attr("data-scale") >
                i.core.$outer.find(".lg").width()),
              i.core.$outer.hasClass("lg-zoomed") &&
                u(e.target).hasClass("lg-object") &&
                (d || c) &&
                (e.preventDefault(),
                (l = { x: e.pageX, y: e.pageY }),
                (a = !0),
                (i.core.$outer.scrollLeft += 1),
                (i.core.$outer.scrollLeft -= 1),
                i.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"));
          }),
            u(window).on("mousemove.lg.zoom", function (e) {
              if (a) {
                var t,
                  o,
                  s = i.core.$slide.eq(i.core.index).find(".lg-img-wrap");
                (n = !0),
                  (r = { x: e.pageX, y: e.pageY }),
                  i.core.$outer.addClass("lg-zoom-dragging"),
                  (o = c
                    ? -Math.abs(s.attr("data-y")) + (r.y - l.y)
                    : -Math.abs(s.attr("data-y"))),
                  (t = d
                    ? -Math.abs(s.attr("data-x")) + (r.x - l.x)
                    : -Math.abs(s.attr("data-x"))),
                  i.core.s.useLeftForZoom
                    ? s.css({ left: t + "px", top: o + "px" })
                    : s.css(
                        "transform",
                        "translate3d(" + t + "px, " + o + "px, 0)",
                      );
              }
            }),
            u(window).on("mouseup.lg.zoom", function (e) {
              a &&
                ((a = !1),
                i.core.$outer.removeClass("lg-zoom-dragging"),
                !n ||
                  (l.x === r.x && l.y === r.y) ||
                  ((r = { x: e.pageX, y: e.pageY }),
                  i.touchendZoom(l, r, d, c)),
                (n = !1)),
                i.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
            });
        }),
        (s.prototype.touchendZoom = function (e, t, o, s) {
          var i = this,
            l = i.core.$slide.eq(i.core.index).find(".lg-img-wrap"),
            r = i.core.$slide.eq(i.core.index).find(".lg-object"),
            a = -Math.abs(l.attr("data-x")) + (t.x - e.x),
            n = -Math.abs(l.attr("data-y")) + (t.y - e.y),
            d =
              (i.core.$outer.find(".lg").height() - r.prop("offsetHeight")) / 2,
            c = Math.abs(
              r.prop("offsetHeight") * Math.abs(r.attr("data-scale")) -
                i.core.$outer.find(".lg").height() +
                d,
            ),
            u = (i.core.$outer.find(".lg").width() - r.prop("offsetWidth")) / 2,
            h = Math.abs(
              r.prop("offsetWidth") * Math.abs(r.attr("data-scale")) -
                i.core.$outer.find(".lg").width() +
                u,
            );
          (15 < Math.abs(t.x - e.x) || 15 < Math.abs(t.y - e.y)) &&
            (s && (n <= -c ? (n = -c) : -d <= n && (n = -d)),
            o && (a <= -h ? (a = -h) : -u <= a && (a = -u)),
            s
              ? l.attr("data-y", Math.abs(n))
              : (n = -Math.abs(l.attr("data-y"))),
            o
              ? l.attr("data-x", Math.abs(a))
              : (a = -Math.abs(l.attr("data-x"))),
            i.core.s.useLeftForZoom
              ? l.css({ left: a + "px", top: n + "px" })
              : l.css("transform", "translate3d(" + a + "px, " + n + "px, 0)"));
        }),
        (s.prototype.destroy = function () {
          var e = this;
          e.core.$el.off(".lg.zoom"),
            u(window).off(".lg.zoom"),
            e.core.$slide.off(".lg.zoom"),
            e.core.$el.off(".lg.tm.zoom"),
            e.resetZoom(),
            clearTimeout(e.zoomabletimeout),
            (e.zoomabletimeout = !1);
        }),
        (u.fn.lightGallery.modules.zoom = s);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
        ? (module.exports = t(require("jquery")))
        : t(jQuery);
  })(0, function (o) {
    !(function () {
      "use strict";
      var t = { hash: !0 },
        e = function (e) {
          return (
            (this.core = o(e).data("lightGallery")),
            (this.core.s = o.extend({}, t, this.core.s)),
            this.core.s.hash &&
              ((this.oldHash = window.location.hash), this.init()),
            this
          );
        };
      (e.prototype.init = function () {
        var t,
          s = this;
        s.core.$el.on("onAfterSlide.lg.tm", function (e, t, o) {
          history.replaceState
            ? history.replaceState(
                null,
                null,
                window.location.pathname +
                  window.location.search +
                  "#lg=" +
                  s.core.s.galleryId +
                  "&slide=" +
                  o,
              )
            : (window.location.hash =
                "lg=" + s.core.s.galleryId + "&slide=" + o);
        }),
          o(window).on("hashchange.lg.hash", function () {
            t = window.location.hash;
            var e = parseInt(t.split("&slide=")[1], 10);
            -1 < t.indexOf("lg=" + s.core.s.galleryId)
              ? s.core.slide(e, !1, !1)
              : s.core.lGalleryOn && s.core.destroy();
          });
      }),
        (e.prototype.destroy = function () {
          this.core.s.hash &&
            (this.oldHash &&
            this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0
              ? history.replaceState
                ? history.replaceState(null, null, this.oldHash)
                : (window.location.hash = this.oldHash)
              : history.replaceState
                ? history.replaceState(
                    null,
                    document.title,
                    window.location.pathname + window.location.search,
                  )
                : (window.location.hash = ""),
            this.core.$el.off(".lg.hash"));
        }),
        (o.fn.lightGallery.modules.hash = e);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
        ? (module.exports = t(require("jquery")))
        : t(jQuery);
  })(0, function (i) {
    !(function () {
      "use strict";
      var t = {
          share: !0,
          facebook: !0,
          facebookDropdownText: "Facebook",
          twitter: !0,
          twitterDropdownText: "Twitter",
          googlePlus: !0,
          googlePlusDropdownText: "GooglePlus",
          pinterest: !0,
          pinterestDropdownText: "Pinterest",
        },
        e = function (e) {
          return (
            (this.core = i(e).data("lightGallery")),
            (this.core.s = i.extend({}, t, this.core.s)),
            this.core.s.share && this.init(),
            this
          );
        };
      (e.prototype.init = function () {
        var s = this,
          e =
            '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
        (e += s.core.s.facebook
          ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
            this.core.s.facebookDropdownText +
            "</span></a></li>"
          : ""),
          (e += s.core.s.twitter
            ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.twitterDropdownText +
              "</span></a></li>"
            : ""),
          (e += s.core.s.googlePlus
            ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.googlePlusDropdownText +
              "</span></a></li>"
            : ""),
          (e += s.core.s.pinterest
            ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.pinterestDropdownText +
              "</span></a></li>"
            : ""),
          (e += "</ul></span>"),
          this.core.$outer.find(".lg-toolbar").append(e),
          this.core.$outer
            .find(".lg")
            .append('<div id="lg-dropdown-overlay"></div>'),
          i("#lg-share").on("click.lg", function () {
            s.core.$outer.toggleClass("lg-dropdown-active");
          }),
          i("#lg-dropdown-overlay").on("click.lg", function () {
            s.core.$outer.removeClass("lg-dropdown-active");
          }),
          s.core.$el.on("onAfterSlide.lg.tm", function (e, t, o) {
            setTimeout(function () {
              i("#lg-share-facebook").attr(
                "href",
                "https://www.facebook.com/sharer/sharer.php?u=" +
                  encodeURIComponent(
                    s.getSahreProps(o, "facebookShareUrl") ||
                      window.location.href,
                  ),
              ),
                i("#lg-share-twitter").attr(
                  "href",
                  "https://twitter.com/intent/tweet?text=" +
                    s.getSahreProps(o, "tweetText") +
                    "&url=" +
                    encodeURIComponent(
                      s.getSahreProps(o, "twitterShareUrl") ||
                        window.location.href,
                    ),
                ),
                i("#lg-share-googleplus").attr(
                  "href",
                  "https://plus.google.com/share?url=" +
                    encodeURIComponent(
                      s.getSahreProps(o, "googleplusShareUrl") ||
                        window.location.href,
                    ),
                ),
                i("#lg-share-pinterest").attr(
                  "href",
                  "http://www.pinterest.com/pin/create/button/?url=" +
                    encodeURIComponent(
                      s.getSahreProps(o, "pinterestShareUrl") ||
                        window.location.href,
                    ) +
                    "&media=" +
                    encodeURIComponent(s.getSahreProps(o, "src")) +
                    "&description=" +
                    s.getSahreProps(o, "pinterestText"),
                );
            }, 100);
          });
      }),
        (e.prototype.getSahreProps = function (e, t) {
          var o = "";
          if (this.core.s.dynamic) o = this.core.s.dynamicEl[e][t];
          else {
            var s = this.core.$items.eq(e).attr("href"),
              i = this.core.$items.eq(e).data(t);
            o = ("src" === t && s) || i;
          }
          return o;
        }),
        (e.prototype.destroy = function () {}),
        (i.fn.lightGallery.modules.share = e);
    })();
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
        ? (module.exports = e)
        : e(jQuery);
  })(function (h) {
    function t(e) {
      var t = e || window.event,
        o = b.call(arguments, 1),
        s = 0,
        i = 0,
        l = 0,
        r = 0,
        a = 0,
        n = 0;
      if (
        (((e = h.event.fix(t)).type = "mousewheel"),
        "detail" in t && (l = -1 * t.detail),
        "wheelDelta" in t && (l = t.wheelDelta),
        "wheelDeltaY" in t && (l = t.wheelDeltaY),
        "wheelDeltaX" in t && (i = -1 * t.wheelDeltaX),
        "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((i = -1 * l), (l = 0)),
        (s = 0 === l ? i : l),
        "deltaY" in t && (s = l = -1 * t.deltaY),
        "deltaX" in t && ((i = t.deltaX), 0 === l && (s = -1 * i)),
        0 !== l || 0 !== i)
      ) {
        if (1 === t.deltaMode) {
          var d = h.data(this, "mousewheel-line-height");
          (s *= d), (l *= d), (i *= d);
        } else if (2 === t.deltaMode) {
          var c = h.data(this, "mousewheel-page-height");
          (s *= c), (l *= c), (i *= c);
        }
        if (
          ((r = Math.max(Math.abs(l), Math.abs(i))),
          (!f || r < f) && m(t, (f = r)) && (f /= 40),
          m(t, r) && ((s /= 40), (i /= 40), (l /= 40)),
          (s = Math[1 <= s ? "floor" : "ceil"](s / f)),
          (i = Math[1 <= i ? "floor" : "ceil"](i / f)),
          (l = Math[1 <= l ? "floor" : "ceil"](l / f)),
          v.settings.normalizeOffset && this.getBoundingClientRect)
        ) {
          var u = this.getBoundingClientRect();
          (a = e.clientX - u.left), (n = e.clientY - u.top);
        }
        return (
          (e.deltaX = i),
          (e.deltaY = l),
          (e.deltaFactor = f),
          (e.offsetX = a),
          (e.offsetY = n),
          (e.deltaMode = 0),
          o.unshift(e, s, i, l),
          p && clearTimeout(p),
          (p = setTimeout(g, 200)),
          (h.event.dispatch || h.event.handle).apply(this, o)
        );
      }
    }
    function g() {
      f = null;
    }
    function m(e, t) {
      return (
        v.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
      );
    }
    var p,
      f,
      e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      o =
        "onwheel" in document || 9 <= document.documentMode
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      b = Array.prototype.slice;
    if (h.event.fixHooks)
      for (var s = e.length; s; ) h.event.fixHooks[e[--s]] = h.event.mouseHooks;
    var v = (h.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var e = o.length; e; ) this.addEventListener(o[--e], t, !1);
        else this.onmousewheel = t;
        h.data(this, "mousewheel-line-height", v.getLineHeight(this)),
          h.data(this, "mousewheel-page-height", v.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var e = o.length; e; ) this.removeEventListener(o[--e], t, !1);
        else this.onmousewheel = null;
        h.removeData(this, "mousewheel-line-height"),
          h.removeData(this, "mousewheel-page-height");
      },
      getLineHeight: function (e) {
        var t = h(e),
          o = t["offsetParent" in h.fn ? "offsetParent" : "parent"]();
        return (
          o.length || (o = h("body")),
          parseInt(o.css("fontSize"), 10) ||
            parseInt(t.css("fontSize"), 10) ||
            16
        );
      },
      getPageHeight: function (e) {
        return h(e).height();
      },
      settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
    });
    h.fn.extend({
      mousewheel: function (e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
      },
      unmousewheel: function (e) {
        return this.unbind("mousewheel", e);
      },
    });
  });

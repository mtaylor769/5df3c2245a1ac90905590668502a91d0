"use strict";
var users = [{
        name: "Glynis Proby",
        imgUrl: "./images/head_gal1.png",
        title: "Senior Vice President",
        location: "Philadelphia, PA",
        award: "a job well done",
        date: "2016-04-23T18:25:43.511Z",
        actions: {
            comments: [{
                user: "user 1",
                comment: "great job"
            }, {
                user: "user 2",
                comment: "excellent!"
            }, {
                user: "user 3",
                comment: "well done!"
            }],
            ecard: ["anniversary", "birthday", "congratulations", "thank you"],
            likes: ["Janice Camelo", "Steffanie Helbling", "Darcie Mcgurn", "Asia Germain", "Catrice Monnerjahn"]
        }
    }, {
        name: "Tawny Derbes",
        imgUrl: "./images/head_gal2.png",
        title: "Jr Developer",
        location: "Seattle, WA",
        award: "something noteable",
        date: "2017-07-23T18:25:43.511Z",
        actions: {
            comments: [{
                user: "user 1",
                comment: "great job"
            }, {
                user: "user 2",
                comment: "excellent!"
            }, {
                user: "user 3",
                comment: "well done!"
            }],
            ecard: ["anniversary", "birthday", "congratulations", "thank you"],
            likes: ["Janice Camelo", "Steffanie Helbling", "Darcie Mcgurn", "Asia Germain", "Catrice Monnerjahn"]
        }
    }, {
        name: "Jared Fausey",
        imgUrl: "./images/head_guy1.png",
        title: "Lead Business Analyst",
        location: "Port St. Lucie, FL",
        award: "a pat on the back",
        date: "2017-07-24T18:25:43.511Z",
        actions: {
            comments: [{
                user: "user 1",
                comment: "great job"
            }, {
                user: "user 2",
                comment: "excellent!"
            }, {
                user: "user 3",
                comment: "well done!"
            }],
            ecard: ["anniversary", "birthday", "congratulations", "thank you"],
            likes: ["Janice Camelo", "Steffanie Helbling", "Darcie Mcgurn", "Asia Germain", "Catrice Monnerjahn"]
        }
    }],
    users2 = [{
        name: "Janice Camelo",
        imgUrl: "./images/head_gal1.png",
        title: "Senior Vice President",
        location: "Philadelphia, PA",
        award: "a job well done",
        date: "2017-08-23T18:25:43.511Z",
        actions: {
            outlook: !0,
            ecard: ["anniversary", "birthday", "congratulations", "thank you"],
            likes: ["Janice Camelo", "Steffanie Helbling", "Darcie Mcgurn", "Asia Germain", "Catrice Monnerjahn"]
        }
    }, {
        name: "Tawny Derbes",
        imgUrl: "./images/head_gal2.png",
        title: "Jr Developer",
        location: "Seattle, WA",
        award: "something noteable",
        date: "2017-11-23T18:25:43.511Z",
        actions: {
            outlook: !0,
            ecard: ["anniversary", "birthday", "congratulations", "thank you"],
            likes: ["Janice Camelo", "Steffanie Helbling", "Darcie Mcgurn", "Asia Germain", "Catrice Monnerjahn"]
        }
    }, {
        name: "Company Picnic!",
        imgUrl: "./images/head_logo1.png",
        location: "Port St. Lucie, FL",
        award: "Signup starts...",
        date: "2018-01-23T18:25:43.511Z",
        actions: {
            outlook: !0,
            ecard: ["anniversary", "birthday", "congratulations", "thank you"],
            likes: ["Janice Camelo", "Steffanie Helbling", "Darcie Mcgurn", "Asia Germain", "Catrice Monnerjahn"]
        }
    }],
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
! function(t) {
    t.fn.userblocksItem = function(e) {
        return this.each(function() {
            var s = t(this),
                o = s.data("userblocksItem"),
                n = "object" == (void 0 === e ? "undefined" : _typeof(e)) && e;
            o || s.data("userblocksItem", o = new i(this, n)), "string" == typeof e && o[e]()
        })
    };
    var i = function(i, e) {
        this.defaults = {
            actions: [],
            colorScheme: "primary",
            commentLimitChars: 140,
            reconcileHeight: !1,
            standardOptionHeight: 155,
            commentTabName: "comment-tab-write"
        }, this.$item = t(i), this.options = t.extend({}, this.defaults, e), this.current = {}, this.user = this.options.user, this.icons = this.options.icons, this.build(), this.targetContainers(), this.bindOptionsOpen()
    };
    i.prototype = {
        constructor: i,
        build: function() {
            this.$item.html(this.buildImage() + this.buildInfo() + this.buildOptionsContainer() + this.buildOptions() + this.buildDate())
        },
        buildImage: function(t) {
            return '<div class="userblocks__img js__userblocks-avatar">          <img src="' + this.user.imgUrl + '" alt="' + this.user.name + '">        </div>'
        },
        buildInfo: function() {
            return '<div class="userblocks__copy">            <h5 class="copy__firm-' + this.options.colorScheme + '">' + this.user.name + '</h5>            <h5 class="copy__light-' + this.options.colorScheme + '">' + this.user.title + '</h5>            <h5 class="copy__light-' + this.options.colorScheme + '">' + this.user.location + '</h5>            <h5 class="copy__light">Received ' + this.user.award + "</h5>          </div>"
        },
        buildDate: function() {
            var t = new Date(this.user.date),
                i = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                e = t.getDate(),
                s = t.getFullYear(),
                o = i[t.getMonth()];
            return '<div class="userblocks__tag-' + this.options.colorScheme + '">          <div>            <div>' + o + "</div>            <div>" + e + "</div>            <div>" + s + "</div>          </div>        </div>"
        },
        buildOptionsContainer: function() {
            return '<div class="options__container js__options-container"></div>'
        },
        buildOptions: function(t) {
            var i = this,
                e = [];
            return Object.keys(this.user.actions).forEach(function(t, s) {
                switch (t) {
                    case "comments":
                        e.push(i.buildOptionsButton("comment", "comments"));
                        break;
                    case "likes":
                        e.push(i.buildOptionsButton("like", "likes"));
                        break;
                    case "ecard":
                        e.push(i.buildOptionsButton("ecard", "ecards"));
                        break;
                    case "outlook":
                        e.push(i.buildOptionsButton("add-to-calendar", "outlook"))
                }
            }), this.options.actionsHTML = e, '<ul class="userblocks__options-' + this.options.colorScheme + '">' + this.mapActions() + "</ul>"
        },
        buildOptionsButton: function(t, i) {
            return '<button type="button" data-section="' + i + '" class="btn__md icon__' + t + "-" + this.options.colorScheme + " js__options-open btn__contrast-" + this.options.colorScheme + '"></button>'
        },
        mapActions: function() {
            return this.options.actionsHTML.map(function(t, i) {
                return "<li>" + t + "</li>"
            }).join("")
        },
        initSectionComments: function() {
            this.$optionsCommentsTab = this.$item.find(".js__options-comment-tab"), this.$commentEntries = this.$item.find(".js__comment-entry"), this.$commentArea = this.$item.find(".js__comment-area"), this.$commentLimit = this.$item.find(".js__comment-limit"), this.$scrollComments = this.$item.find(".js__scroll-comments"), this.$scrollCommentsCurrent = this.$item.find(".js__scroll-comments-current"), this.$submitComments = this.$item.find(".js__comment-submit"), this.activeComment = 0, this.$optionsCommentsTab.bind("click", t.proxy(this.getTabTarget, this, void 0)), this.$scrollComments.bind("click", t.proxy(this.scrollComments, this, void 0)), this.$commentArea.bind("keyup", t.proxy(this.limitComment, this, void 0))
        },
        buildSectionComments: function() {
            var t = this.user.actions.comments;
            return '<div>          <header class="options__header-' + this.options.colorScheme + '">            <p>comment</p>            <div class="group__inline-pipe-' + this.options.colorScheme + '">              <button type="button" class="btn__md btn__hide-lg"><span>' + t.length + '</span></button>              <button type="button" class="btn__md icon__viewAll-' + this.options.colorScheme + ' js__options-comment-tab" data-target="comment-tab-view"></button>              <button type="button" class="btn__md icon__close-' + this.options.colorScheme + ' js__options-close"></button>            </div>          </header>          ' + this.buildCommentsWrite() + this.buildCommentsRead() + "        </div>"
        },
        buildCommentsWrite: function() {
            var t = this.user.name,
                i = this.user.award;
            return '<article class="options__body-write options__tab active" id="' + this.options.commentTabName + '">          <div>            <div class="copy__firm-' + this.options.colorScheme + '">' + t + '</div>            <div class="copy__light">Received ' + i + '</div>          </div>          <div>            <textarea class="input__comment-' + this.options.colorScheme + ' js__comment-area" maxlength="' + this.options.commentLimitChars + '" placeholder="my comment..."></textarea>            <div>              <p class="js__comment-limit">140</p>              <button class="btn__md icon__comment-submit js__comment-submit" type="submit" disabled="disabled"></button>            </div>          </div>        </article>'
        },
        buildCommentsRead: function() {
            var t = this.user.actions.comments;
            return '<article class="options__body-read options__tab" id="comment-tab-view">' + this.mapComments(t) + '<button class="btn__sm icon__like-' + this.options.colorScheme + '"></button>          <div>            <button class="btn__sm icon__up js__scroll-comments" data-direction="backward"></button>            <div class="js__scroll-comments-current">1</div>            <div>' + t.length + '</div>            <button class="btn__sm icon__down js__scroll-comments" data-direction="forward"></button>          </div>        </article>'
        },
        mapComments: function(t) {
            return t.map(function(t, i) {
                var e = "";
                return 0 === i && (e = "active"), '<p class="options__comment-entry js__comment-entry comment-' + i + " " + e + '">' + t.comment + "</p>"
            }).join("")
        },
        initSectionECard: function() {},
        buildSectionECard: function() {
            var t = this.user.actions.ecard;
            return '<header class="options__header-' + this.options.colorScheme + '">          <p>send an e-card</p>          <div class="group__inline-pipe-' + this.options.colorScheme + '">            <button type="button" class="btn__md icon__close-' + this.options.colorScheme + ' js__options-close"></button>          </div>        </header>        <article class="options__body-cards-' + this.options.colorScheme + '">' + this.mapEcard(t) + "</article>"
        },
        mapEcard: function(t) {
            var i = this;
            return t.map(function(t, e) {
	        	$('js__ecard-' + e).bind("click", function() { this.parent().append('<div class="congrats"></div>'); alert('yes');  });
                return '<button type="button" class="js__ecard-' + e + '">              <div class="icon__bg-sm-md icon__ecard-' + t.split(" ").join("") + "-" + i.options.colorScheme + '"></div>              <div>' + t + "</div>            </button>"
            }).join("")
        },
        initSectionLikes: function() {
            this.$likeContainer = this.$item.find(".options__body-like"), this.$likeToggle = this.$item.find(".js__options-toggle-likes"), this.$likeNumber = this.$item.find(".js__number-of-likes"), this.likeThis()
        },
        buildSectionLikes: function() {
            var t = this.user.actions.likes;
            return '<div>          <header class="options__header-' + this.options.colorScheme + '">            <p>like</p>            <div class="group__inline-pipe-' + this.options.colorScheme + '">              <button type="button" class="btn__md" disabled><span class="js__number-of-likes">' + t.length + '</span></button>              <button type="button" class="btn__md icon__close-' + this.options.colorScheme + ' js__options-close"></button>            </div>          </header>          <article class="options__body-like">            <ul>' + this.mapLikes(t) + "</ul>          </article>        </div>"
        },
        mapLikes: function(t) {
            return t.map(function(t, i) {
                return '<li id="js__likes-' + i + '" class="copy__firm">' + t + "</li>"
            }).join("")
        },
        initSectionOutlook: function() {
            this.makeActivePerm();
            var t = this;
            setTimeout(function() {
                t.closeOptions(), t.$currentOpenButton.prop("disabled", !0)
            }, 1500)
        },
        buildSectionOutlook: function() {
            this.user.actions.outlook;
            return '<div>          <header class="options__header-secondary">            <p>added to outlook</p>          </header>        </div>'
        },
        targetContainers: function() {
            this.$optionsOpen = this.$item.find(".js__options-open"), this.$optionsContainer = this.$item.find(".js__options-container"), this.$avatar = this.$item.find(".js__userblocks-avatar"), this.$actionsContainer = this.$item.find(".userblocks__options"), this.$tabTargets = this.$item.find(".options__tab")
        },
        makeActivePerm: function() {
            this.$currentOpenButton.hasClass("active-perm") || this.$currentOpenButton.addClass("active-perm")
        },
        bindOptionsOpen: function() {
            this.$optionsOpen.bind("click", t.proxy(this.openOptions, this, void 0))
        },
        bindOptionsClose: function() {
            this.$optionsClose = this.$item.find(".js__options-close"), this.$optionsClose.bind("click", t.proxy(this.closeOptions, this, void 0))
        },
        openOptions: function(i, e) {
            var s = e.target,
                o = s.dataset.section;
            switch (this.$currentOpenButton = t(s), o) {
                case "comments":
                    this.populateOptionsContainer(this.buildSectionComments()), this.initSectionComments();
                    break;
                case "likes":
                    this.populateOptionsContainer(this.buildSectionLikes()), this.initSectionLikes();
                    break;
                case "ecards":
                    this.populateOptionsContainer(this.buildSectionECard()), this.initSectionECard();
                    break;
                case "outlook":
                    this.populateOptionsContainer(this.buildSectionOutlook()), this.initSectionOutlook()
            }
            this.bindOptionsClose(), this.$optionsOpen.prop("disabled", !0), this.makeActive([this.$optionsContainer, this.$avatar, this.$currentOpenButton])
        },
        likeThis: function() {
	        console.log(this.$currentOpenButton);
            if (!this.$currentOpenButton.hasClass("liked")) {
                this.$currentOpenButton.addClass("liked").removeClass('unliked'), this.makeActivePerm();
                var t = parseInt(this.$likeNumber.html()) + 1;
                this.$likeNumber.html(t).addClass("grow-likes")
            } else {
                this.$currentOpenButton.removeClass("liked active-perm active").addClass('unliked');
                var t = parseInt(this.$likeNumber.html()); //- 1;
                this.$likeNumber.html(t).addClass("grow-likes")
	            
            }
        },
        populateOptionsContainer: function(t) {
            this.$optionsContainer.html(t)
        },
        destroyOptionsContainer: function() {
            var t = this;
            setTimeout(function() {
                t.$optionsContainer.empty()
            }, 150)
        },
        closeOptions: function(t, i) {
            this.$optionsOpen.prop("disabled", !1), this.makeInactive([this.$optionsContainer, this.$optionsHeader, this.$avatar, this.$currentOpenButton]), this.destroyOptionsContainer()
        },
        limitComment: function(t, i) {
            var e = i.currentTarget.value.length;
            this.$commentLimit.html(this.options.commentLimitChars - e), e > 0 ? (this.$commentLimit.addClass("active"), this.$submitComments.removeAttr("disabled").addClass("active")) : (this.$commentLimit.removeClass("active"), this.$submitComments.attr("disabled", "disabled").removeClass("active"))
        },
        makeActive: function(i) {
            "object" === (void 0 === i ? "undefined" : _typeof(i)) ? i.forEach(function(i, e) {
                t(i).addClass("active")
            }): i.addClass("active")
        },
        makeInactive: function(i) {
            "object" === (void 0 === i ? "undefined" : _typeof(i)) ? i.forEach(function(i, e) {
                t(i).removeClass("active")
            }): i.removeClass("active")
        },
        getTabTarget: function(i, e) {
            var s = t(e.currentTarget),
                o = s.attr("data-target");
            this.toggleTabs(o, s)
        },
        toggleTabs: function(i, e) {
            var s = this;
            this.$tabTargets.each(function(e, o) {
                var n = t('[data-target="' + t(this).attr("id") + '"]');
                t(this).attr("id") == i ? s.makeActive([t(this), n]) : s.makeInactive([t(this), n])
            })
        },
        scrollComments: function(i, e) {
            var s = t(e.currentTarget).attr("data-direction");
            "forward" === s && this.activeComment !== this.user.actions.comments.length - 1 && (this.$commentEntries.removeClass("active"), this.activeComment++, this.makeActive([this.$item.find(".comment-" + this.activeComment)]), this.$scrollCommentsCurrent.html(this.activeComment + 1)), "backward" === s && 0 !== this.activeComment && (this.$commentEntries.removeClass("active"), this.activeComment--, this.makeActive([this.$item.find(".comment-" + this.activeComment)]), this.$scrollCommentsCurrent.html(this.activeComment + 1))
        }
    }
}(jQuery);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
! function(t) {
    t.fn.userblocksHeader = function(e) {
        return this.each(function() {
            var s = t(this),
                o = s.data("userblocksHeader"),
                n = "object" == (void 0 === e ? "undefined" : _typeof(e)) && e;
            o || s.data("userblocksHeader", o = new i(this, n)), "string" == typeof e && o[e]()
        })
    };
    var i = function(i, e) {
        this.defaults = {
            colorScheme: "primary",
            searchPlaceholderCopy: "search by person, location, etc…",
            icons: {}
        }, this.$header = t(i), this.options = t.extend({}, this.defaults, e), this.icons = this.options.icons, this.currentHeaderCopy = "", this.build(), this.targetContainers(), this.bindActions()
    };
    i.prototype = {
        constructor: i,
        build: function() {
            this.$header.html(this.buildTitle() + this.buildOptionsGroup()).addClass("userblocks__header-" + this.options.colorScheme)
        },
        buildTitle: function() {
            return '<div class="userblocks__header-title">            <span>' + this.options.title + '&nbsp;</span>            <div class="header-copy js__userblocks-header-copy">              <span>|&nbsp;</span>              <span></span><div class="close"></div>            </div>          </div>'
        },
        buildOptionsGroup: function() {
            return '<div class="userblocks__header-choices">' + this.buildSearch() + this.buildOptions() + "</div>"
        },
        buildSearch: function() {
            return '<div class="userblocks__header-search-' + this.options.colorScheme + ' js__search-box">          <form>            <button class="btn__md icon__search-' + this.options.colorScheme + ' js__submit-search js__close-search" type="submit"></button>            <input type="search" class="input__search-' + this.options.colorScheme + ' js__search-input" name="js__userblocks-search" placeholder="' + this.options.searchPlaceholderCopy + '"/>          </form>          <button class="btn__md icon__search-' + this.options.colorScheme + ' js__open-search" type="button"></button>        </div>'
        },
        buildOptions: function() {
            if (this.options.filters) return '<div class="userblocks__quickactions-' + this.options.colorScheme + ' js__userblocks-choice-container">                <button type="button" class="btn__md icon__filter-' + this.options.colorScheme + ' js__open-header"></button>                <div class="group__inline-pipe-' + this.options.colorScheme + '">' + this.buildOptionsList() + "</div>            </div>"
        },
        buildOptionsList: function() {
            var t = this.options.filters.map(function(t, i) {
                return '<button type="button" class="btn__md js__choices">              <div class="icon__' + t.img + '"></div>              <div>' + t.copy + "</div>            </button>"
            }).join("");
            return t = '<button class="btn__md icon__search-' + this.options.colorScheme + ' js__open-search" type="button"></button>' + t
        },
        detectMobile: function() {
            return /Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)
        },
        targetContainers: function() {
            this.$searchInput = this.$header.find(".js__search-input"), this.$searchBox = this.$header.find(".js__search-box"), this.$openSearch = this.$header.find(".js__open-search"), this.$closeSearch = this.$header.find(".js__close-search"), this.$submitSearch = this.$header.find(".js__submit-search"), this.$choiceContainer = this.$header.find(".js__userblocks-choice-container"), this.$openHeader = this.$choiceContainer.find(".js__open-header"), this.$choices = this.$choiceContainer.find(".js__choices"), this.$headerCopyContainer = this.$header.find(".js__userblocks-header-copy"), this.$headerCopySpan = this.$headerCopyContainer.find("span:nth-child(2)")
        },
        bindActions: function() {
            this.$openSearch.bind("click", t.proxy(this.startSearching, this)), this.$closeSearch.bind("click", t.proxy(this.doneSearching, this)), this.$submitSearch.bind("click", t.proxy(this.goSearch, this)), this.$openHeader.bind("click", t.proxy(this.openHeader, this, void 0)), this.$choices.bind("click", t.proxy(this.makeChoiceSelection, this, void 0)), this.$searchInput.on("search", t.proxy(this.doneSearching, this, void 0))
        },
        makeActive: function(t) {
            t.hasClass("active") || t.addClass("active")
        },
        makeInactive: function(t) {
            t.hasClass("active") && t.removeClass("active")
        },
        startSearching: function() {
            this.closeHeader(), this.$openSearch.hide(), this.$submitSearch.show(), this.makeActive(this.$header), this.makeActive(this.$submitSearch), this.makeActive(this.$searchBox)
        },
        doneSearching: function() {
            this.$openSearch.show(), this.$submitSearch.hide(), this.makeInactive(this.$header), this.makeInactive(this.$submitSearch), this.makeInactive(this.$searchBox), this.$searchInput.val("")
        },
        delay: function(t, i) {
            var e = this;
            setTimeout(function() {
                e[t]()
            }, 1e3 * i)
        },
        showChoiceText: function() {
            this.$currentChoice.addClass("active")
        },
        hideChoiceText: function() {
            this.$currentChoice.removeClass("active")
        },
        openHeader: function(t, i) {
            this.doneSearching(), this.makeActive(this.$choiceContainer), this.makeActive(this.$header)
        },
        closeHeader: function() {
            this.makeInactive(this.$choiceContainer), this.makeInactive(this.$header)
        },
        makeChoiceSelection: function(i, e) {
            this.$currentChoice = t(e.currentTarget), this.$currentIcon = this.$currentChoice.find("div"), this.currentHeaderCopy = this.$currentChoice.find("div").text(), this.toggleIconActive(), this.showChoiceText(), this.delay("closeHeader", 1), this.delay("hideChoiceText", 1.2), /*this.delay("toggleIconActive", 1.2),*/ this.switchHeaderCopy()
        },
        switchHeaderCopy: function(currentHeaderCopy) {
            "" !== this.currentHeaderCopy && "view all" !== this.currentHeaderCopy ? (this.$headerCopySpan.text(this.currentHeaderCopy), this.$headerCopyContainer.css({
                display: "inline-block"
            })) : this.$headerCopyContainer.hide()
        },
        toggleIconActive: function() {
	        $('.js__choices div').removeClass('active');	        
            this.$currentIcon.hasClass("active") ? this.$currentIcon.removeClass("active") : this.$currentIcon.addClass("active")
        }
    }
}(jQuery);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
! function(t) {
    t.fn.userblocksContent = function(e) {
        return this.each(function() {
            var s = t(this),
                o = s.data("userblocksContent"),
                n = "object" == (void 0 === e ? "undefined" : _typeof(e)) && e;
            o || s.data("userblocksContent", o = new i(this, n)), "string" == typeof e && o[e]()
        })
    };      
    var i = function(i, e) {
        this.defaults = {
            actions: [],
            colorScheme: "primary",
            swipeTargets: "js__userblocks-swipe",
            swipeWidthStart: 992,
            icons: {}
        }, this.$body = t(i), this.options = t.extend({}, this.defaults, e), this.current = {}, this.icons = this.options.icons, this.options.toggleCopy = "primary" == this.options.colorScheme ? "upcoming events" : "recent recognition", this.options.toggleColor = "primary" == this.options.colorScheme ? "secondary" : "primary", this.build()
    };
    i.prototype = {
        constructor: i,
        build: function() {
            var i = this;
            this.options.users.forEach(function(t, e) {
                i.$body.append('<li class="' + i.options.swipeTargets + '"><div class="userblocks__item"></div></li>')
            }), this.$body.find(".userblocks__item").each(function(e, s) {
                t(this).userblocksItem({
                    colorScheme: i.options.colorScheme,
                    user: i.options.users[e],
                    icons: i.options.icons
                })
            }), this.$body.addClass("userblocks__container").after(this.buildOverlay() + this.buildToggle()).parent(".userblocks").addClass(this.options.colorScheme), this.targetContainers(), this.bindActions(), this.showOverlay()
        },
        bindActions: function() {
            this.$toggle.on("click", t.proxy(this.bindToggle, this))
        },
        targetContainers: function() {
            this.$container = this.$body.parent(".userblocks"), this.$targetUserblock = t("#" + this.$container.data("target")), this.$items = this.$body.find("." + this.options.swipeTargets), this.$overlay = this.$container.find(".js__overlay"), this.$toggle = this.$container.find(".js__toggle")
        },
        buildToggle: function() {
            return '<button class="userblocks__toggle-' + this.options.toggleColor + ' js__toggle">' + this.options.toggleCopy + "</button>"
        },
        buildOverlay: function() {
            return '<section class="userblocks__overlay js__overlay">          <div></div>        </section>'
        },
        bindToggle: function() {
            t(".userblocks").removeClass("active"), this.$targetUserblock.addClass("active")
        },
        detectMobile: function() {
            return /Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)
        },
        destroy: function() {
            this.$items.data("hammer").set({
                enable: !1
            }), this.$items.css({
                width: "initial"
            }), this.$body.css({
                width: "100%",
                transform: "translateX(0px)"
            })
        },
        delegateSwipeDirection: function(t, i) {
            this.detectMobile() && ("forwards" === i.target.dataset.direction ? this.swipeForward() : this.swipeBackward())
        },
        showOverlay: function() {
            var t = this;
            this.detectMobile() && (t.$overlay.addClass("active"), setTimeout(function() {
                t.$overlay.removeClass("active")
            }, 2500))
        },
        bindSwipeControl: function() {
            this.detectMobile() && t(window).width() < this.options.swipeWidthStart ? (this.setWidths(), this.currentBlock = 0, this.totalBlocks = this.options.users.length, this.$items.data("hammer").set({
                enable: !0
            })) : this.destroy()
        },
        setWidths: function() {
            var i = this,
                e = t(window).width();
            this.$items.each(function() {
                t(this).css({
                    width: e
                })
            }), this.$body.css({
                width: e * i.options.users.length
            })
        },
        swipe: function(t, i) {
            var e = i.gesture;
            if (this.detectMobile()) switch (e.direction) {
                case 4:
                    this.swipeBackward();
                    break;
                case 2:
                    this.swipeForward()
            }
        },
        getCurrentBlock: function() {
            return this.currentBlock
        },
        swipeForward: function() {
            this.currentBlock !== this.totalBlocks - 1 && (this.currentBlock++, this.translateContainer())
        },
        swipeBackward: function() {
            0 !== this.currentBlock && (this.currentBlock--, this.translateContainer())
        },
        translateContainer: function() {
            var i = t(window).width(),
                e = this.currentBlock,
                s = i * e * -1;
            this.$body.css({
                transform: "translateX(" + s + "px)",
                transition: "transform .25s ease-in-out"
            })
        }
    }
}(jQuery);
var isOpera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
    isFirefox = "undefined" != typeof InstallTrigger,
    isSafari = /constructor/i.test(window.HTMLElement) || function(t) {
        return "[object SafariRemoteNotification]" === t.toString()
    }(!window.safari || safari.pushNotification),
    isIE = !!document.documentMode,
    isEdge = !isIE && !!window.StyleMedia,
    isChrome = !!window.chrome && !!window.chrome.webstore,
    isBlink = (isChrome || isOpera) && !!window.CSS,
    isMobile = /Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent);
$(function() {
    $(".js__calendar").flatpickr({
        mode: "range",
        dateFormat: "F d, Y",
		onReady: function(dateObj, dateStr, instance) {
		    var $cal = $(instance.calendarContainer);
		    if ($cal.find('.flatpickr-append').length < 1) {
		        $cal.append('<div class="flatpickr-append"><div class="flatpickr-clear">X</div><div class="flatpickr-check">✓</div></div>');
		        $cal.find('.flatpickr-clear').on('click', function() {
		            instance.clear();
		        });
		        $cal.find('.flatpickr-check').on('click', function() {
		            instance.close();
		        });
		    }
		},        
	    onOpen: function(selectedDates, dateStr, instance){
			instance.clear();
	    }

    }), $(".js__userblocks-header-rr").userblocksHeader({
        colorScheme: "primary",
        title: "recent recognition",
        filters: [{
            img: "recognition",
            copy: "my recognition"
        }, {
            img: "location",
            copy: "my location"
        }, {
            img: "my-team",
            copy: "my team"
        }, {
            img: "viewAll",
            copy: "view all"
        }]
    }), $(".js__userblocks-container-rr").userblocksContent({
        colorScheme: "primary",
        users: users,
        swipeClass: "js__userblocks-swipe"
    }), $(".js__userblocks-header-ue").userblocksHeader({
        colorScheme: "secondary",
        title: "upcoming events",
        filters: [{
            img: "company-secondary",
            copy: "company"
        }, {
            img: "anniversary-secondary",
            copy: "anniversary"
        }, {
            img: "birthday-secondary",
            copy: "birthday"
        }, {
            img: "location-secondary",
            copy: "my location"
        }, {
            img: "my-team-secondary",
            copy: "my team"
        }, {
            img: "viewAll-secondary",
            copy: "view all"
        }]
    }), $(".js__userblocks-container-ue").userblocksContent({
        colorScheme: "secondary",
        users: users2,
        swipeClass: "js__userblocks-swipe"
    })
});


    $(function() {  
      $(".js__userblocks-header-copy .close").on("click", function() {
	      $(this).parent().hide();
	  });
      $(".js__userblocks-swipe").swipe({
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
	      var $container = $(this).parent(), w = $container.width();
	      if(direction == 'left') $container.animate({'right':w+'px'});
	      else  $container.animate({'left':w+'px'});
        },
        allowPageScroll: "vertical",
		threshold:75
      });
    });

(this["webpackJsonpmarvel-app"]=this["webpackJsonpmarvel-app"]||[]).push([[0],{363:function(e,t,a){},364:function(e,t,a){},368:function(e,t,a){"use strict";a.r(t);a(156),a(158),a(159),a(160),a(161),a(162),a(163),a(164),a(165),a(166),a(167),a(168),a(169),a(170),a(171),a(172),a(173),a(174),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(183),a(184),a(70),a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(192),a(193),a(194),a(195),a(196),a(197),a(198),a(199),a(201),a(202),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(230),a(231),a(232),a(233),a(234),a(235),a(237),a(239),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(262),a(263),a(266),a(267),a(268),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(141),a(281),a(282),a(283),a(284),a(285),a(286),a(287),a(144),a(288),a(289),a(290),a(291),a(292),a(293),a(294),a(295),a(296),a(297),a(298),a(299),a(300),a(301),a(302),a(303),a(304),a(305),a(306),a(307),a(308),a(309),a(310),a(311),a(312),a(313),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(326),a(327),a(328),a(329),a(330),a(331),a(332),a(333),a(334),a(335),a(336),a(337),a(338),a(339),a(340),a(341),a(342),a(343),a(344),a(345),a(346),a(347),a(348),a(349),a(350),a(351),a(352),a(353),a(354),a(357),a(152);var r=a(3),n=a(18),c=a.n(n),s=a(154),o=a.n(s),i=(a(363),a(364),a(32)),h=a(33),l=a(35),u=a(34),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("h1",{children:"Marvel characters"})})}}]),a}(c.a.Component),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsxs)("p",{children:["\xa9  Anchi  ",(new Date).getFullYear()]})})}}]),a}(c.a.Component),j=a(155),m=a.n(j),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).updateBookmarkedCharacters=function(e,t){r.setState({bookmarked:!r.state.bookmarked}),setTimeout((function(){r.props.handleChange(t,r.state.bookmarked)}),0)},r.state={bookmarked:e.bookmarkedSearch},r}return Object(h.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.character;return e=this.state.bookmarked?Object(r.jsx)("span",{className:"star",children:"\u2605"}):Object(r.jsx)("span",{className:"star",children:"\u2606"}),Object(r.jsxs)("div",{className:"character",children:[Object(r.jsx)("p",{className:"name",children:a.name}),Object(r.jsx)("div",{className:"img-wrapper",children:Object(r.jsx)("img",{src:a.thumbnail.path+"."+a.thumbnail.extension,alt:a.name})}),Object(r.jsx)("div",{onClick:function(e){return t.updateBookmarkedCharacters(e,a)},children:e})]},a.id)}}]),a}(c.a.Component),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"characters",children:this.props.characters.map((function(t){return Object(r.jsx)(p,{character:t,bookmarkedSearch:e.props.bookmarkedSearch,handleChange:e.props.handleChange},t.id)}))})}}]),a}(c.a.Component),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleChange=function(e,t){var a=window.localStorage.getItem("bookmarkedCharacters"),n=a?JSON.parse(a):[];if(t)n.push(e);else if("bookmarkedCharacters"in localStorage)for(var c=0;c<n.length;c++)n[c].id===e.id&&n.splice(c,1);window.localStorage.setItem("bookmarkedCharacters",JSON.stringify(n)),r.setState({bookmarkedCharacters:n})},r.updateResults=function(e){r.setState({searchValue:e.currentTarget.value})},r.state={characters:[],bookmarkedCharacters:[],searchValue:""},r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=window.localStorage.getItem("bookmarkedCharacters"),a=t?JSON.parse(t):[];this.setState({bookmarkedCharacters:a});var r="ts"+10*Math.random(),n="263d98587f9be29f411909cd3287e8de",c=m()(r+"0a3a8637f82b31da552186601bcae2ae88340ba2"+n),s="".concat("https://gateway.marvel.com/v1/public/characters","?ts=").concat(r,"&apikey=").concat(n,"&hash=").concat(c,"&limit=").concat(100);fetch(s).then((function(e){return e.json()})).then((function(t){e.setState({characters:t.data.results})}))}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.characters,c=a.bookmarkedCharacters,s=a.searchValue;return s&&0===n.filter((function(e){return e.name.toLowerCase().includes(s)})).length?e=Object(r.jsx)("div",{className:"no-results",children:"No heroes found!"}):s?e=Object(r.jsx)(k,{characters:n.filter((function(e){return e.name.toLowerCase().includes(s)})).slice(0,20),bookmarkedSearch:!1,handleChange:this.handleChange}):!s&&c.length&&(e=Object(r.jsx)(k,{characters:c.slice(0,20),bookmarkedSearch:!0,handleChange:this.handleChange})),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"search-wrapper",children:Object(r.jsx)("input",{type:"search",placeholder:"Search for your favorite characters...",onChange:function(e){return t.updateResults(e)}})}),e]})}}]),a}(c.a.Component);var O=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(d,{}),Object(r.jsx)(f,{}),Object(r.jsx)(b,{})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,369)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};a(367);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),v()}},[[368,1,2]]]);
//# sourceMappingURL=main.b335f39f.chunk.js.map
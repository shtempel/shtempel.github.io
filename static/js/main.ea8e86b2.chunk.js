(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},103:function(e,t,n){},105:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n.n(r),i=n(45),o=n.n(i),s=n(12),u=n(11),l=n(21),m=n(20),v=n(13),f=n(30),d=n(3),_=Object(d.createAction)("SET_SEARCH_BY",function(e){return function(t){return e(t)}}),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"title",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(d.getType)(_):return t.payload;default:return e}},O=Object(d.createAction)("SET_SORT_BY",function(e){return function(t){return e(t)}}),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"date",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(d.getType)(O):return t.payload;default:return e}},b=n(23),g=Object(d.createAction)("SET_QUERY_STRING",function(e){return function(t){return e(t)}}),h=Object(d.createAction)("SET_CURRENT_MOVIE_ID",function(e){return function(t){return e(t)}}),j=Object(d.createAction)("FETCH_MOVIES"),y=Object(d.createAction)("FETCH_MOVIES_SUCCESS",function(e){return function(t){return e(t)}}),T=Object(d.createAction)("FETCH_MOVIES_FAIL",function(e){return function(t){return e(t)}}),N=Object(d.createAction)("FETCH_MOVIE_BY_ID "),S=Object(d.createAction)("FETCH_MOVIE_BY_ID_SUCCESS",function(e){return function(t){return e(t)}}),I=Object(d.createAction)("FETCH_MOVIE_BY_ID_FAIL",function(e){return function(t){return e(t)}}),M=Object(d.createAction)("SORT_BY_RATING"),w=Object(d.createAction)("SORT_BY_DATE"),A=Object(d.createAction)("FETCH_FAVORITE_MOVIE"),x=Object(d.createAction)("FETCH_FAVORITE_MOVIE_SUCCESS",function(e){return function(t){return e(t)}}),C=Object(d.createAction)("FETCH_FAVORITE_MOVIE_FAIL",function(e){return function(t){return e(t)}}),k=Object(d.createAction)("REMOVE_MOVIE_FROM_FAVORITES",function(e){return function(t){return e(t)}}),R=Object(d.createAction)("REHYDRATE_STATE"),L=Object(d.createAction)("REHYDRATE_STATE_DONE"),F=Object(d.createAction)("RESTORE_SAVED_STATE",function(e){return function(t){return e(t)}}),B={isFavoriteLoading:!1,isLoading:!1,currentMovieId:"",queryString:"",movies:[],favMovies:[],currentMovie:{}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(d.getType)(F):var n=t.payload,a=n.movies,r=n.currentMovie,c=n.favMovies;return Object(u.a)({},e,{movies:a||[],currentMovie:r||{},favMovies:c||[]});case Object(d.getType)(g):return Object(u.a)({},e,{queryString:t.payload});case Object(d.getType)(x):return Object(u.a)({},e,{favMovies:Object(b.a)(e.favMovies).concat([t.payload]),isFavoriteLoading:!1});case Object(d.getType)(k):return Object(u.a)({},e,{favMovies:Object(b.a)(e.favMovies.filter(function(e){return e.id!==parseInt(t.payload)}))});case Object(d.getType)(h):return Object(u.a)({},e,{currentMovieId:t.payload});case Object(d.getType)(A):return Object(u.a)({},e,{isFavoriteLoading:!0});case Object(d.getType)(j):case Object(d.getType)(N):return Object(u.a)({},e,{isLoading:!0});case Object(d.getType)(y):return Object(u.a)({},e,{isLoading:!1,movies:t.payload});case Object(d.getType)(C):return Object(u.a)({},e,{isFavoriteLoading:!1});case Object(d.getType)(I):case Object(d.getType)(T):return Object(u.a)({},e,{isLoading:!1});case Object(d.getType)(S):return Object(u.a)({},e,{currentMovie:t.payload,isLoading:!1});case Object(d.getType)(M):return Object(u.a)({},e,{movies:e.movies.sort(function(e,t){return e.voteAverage-t.voteAverage})});case Object(d.getType)(w):return Object(u.a)({},e,{movies:e.movies.sort(function(e,t){return parseInt(t.releaseDate)-parseInt(e.releaseDate)})});default:return e}},V=Object(d.createAction)("SET_SEARCH_LIMIT",function(e){return function(t){return e(t)}}),H=n(14),Y=n.n(H),P=n(10),G=Object(P.a)(function(e){return e},function(e){return e.searchLimit}),U="https://react-cdp-api.herokuapp.com/movies";!function(e){e.MAIN_TITLE="netflixroulette",e.SEARCH="search",e.SEARCH_BY="search by",e.SORT_BY="Sort by",e.FIND_YOUR_MOVIE="find your movie",e.TITLE="title",e.GENRE="genre",e.RELEASE_DATE="release date",e.RATING="rating",e.MOVIES_FOUND=" movies found",e.RESULTS_ON_PAGE="Show results on page: "}(a||(a={}));var J;n(66);!function(e){e.ten="10",e.twenty="20",e.thirty="30"}(J||(J={}));var Q={setSearchLimit:V,fetchMovies:j},q=Object(s.connect)(function(e){return{searchLimit:G(e)}},Q)(function(e){var t=function(t){var n=e.setSearchLimit,a=e.fetchMovies;e.searchLimit!==t.target.id&&n(t.target.id)&&a()},n=function(n){var a=e.searchLimit;return c.a.createElement("span",{id:n,onClick:t,className:Y()("single-control",{"single-control-active":a===n})},n)};return c.a.createElement("div",{className:"results-amount-controller"},c.a.createElement("span",null,a.RESULTS_ON_PAGE),n(J.ten),n(J.twenty),n(J.thirty))}),X=J.ten,K={moviesState:D,sortBy:p,searchBy:E,searchLimit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(d.getType)(V):return t.payload;default:return e}}},z=n(6),W=n.n(z),Z=n(5),$=Object(P.a)(function(e){return e},function(e){return e.searchBy}),ee=function(e){return e.moviesState},te=Object(P.a)([ee],function(e){return e.movies}),ne=Object(P.a)([ee],function(e){return e.isLoading}),ae=Object(P.a)([ee],function(e){return e.currentMovie}),re=Object(P.a)([te],function(e){return e.length}),ce=Object(P.a)([ee],function(e){return e.queryString}),ie=Object(P.a)([ee],function(e){return e.currentMovieId}),oe=Object(P.a)([ee],function(e){return e.favMovies}),se=n(28),ue=n(29),le=new(function(){function e(t){Object(se.a)(this,e),this.localStorage=t}return Object(ue.a)(e,[{key:"setItem",value:function(e,t){this.localStorage.setItem(e,JSON.stringify(t))}},{key:"getItem",value:function(e){var t=this.localStorage.getItem(e);return t?JSON.parse(t):null}}]),e}())(window.localStorage),me=n(37),ve=n.n(me),fe=new(function(){function e(){Object(se.a)(this,e)}return Object(ue.a)(e,[{key:"getMovies",value:function(e,t,n){return ve.a.get("".concat(U,"?search=").concat(e,"&searchBy=").concat(t,"&limit=").concat(n)).then(function(e){return e.data.data.map(function(e){return{title:e.title,id:e.id,posterPath:e.poster_path,releaseDate:e.release_date,genres:e.genres,voteAverage:e.vote_average}})})}},{key:"getMovieById",value:function(e){return ve.a.get("".concat(U,"/").concat(e)).then(function(e){return e.data={title:e.data.title,id:e.data.id,posterPath:e.data.poster_path,releaseDate:e.data.release_date,genres:e.data.genres,voteAverage:e.data.vote_average,tagLine:e.data.tagline,runtime:e.data.runtime,overview:e.data.overview}})}}]),e}()),de=W.a.mark(ge),_e=W.a.mark(he),Ee=W.a.mark(je),Oe=W.a.mark(ye),pe=W.a.mark(Te),be=W.a.mark(Ne);function ge(){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.g)(1e3,Object(d.getType)(j),he);case 2:case"end":return e.stop()}},de,this)}function he(){var e,t,n,a;return W.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Z.b)(f.b,1e3);case 2:return r.prev=2,r.next=5,Object(Z.d)(ce);case 5:return e=r.sent,r.next=8,Object(Z.d)($);case 8:return t=r.sent,r.next=11,Object(Z.d)(G);case 11:return n=r.sent,r.next=14,Object(Z.b)([fe,fe.getMovies],e,t,n);case 14:return a=r.sent,r.next=17,Object(Z.c)(y(a));case 17:r.next=23;break;case 19:return r.prev=19,r.t0=r.catch(2),r.next=23,Object(Z.c)(T(r.t0));case 23:case"end":return r.stop()}},_e,this,[[2,19]])}function je(){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.g)(1e3,Object(d.getType)(N),ye);case 2:case"end":return e.stop()}},Ee,this)}function ye(){var e,t;return W.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Z.d)(ie);case 3:return e=n.sent,n.next=6,Object(Z.b)([fe,fe.getMovieById],e);case 6:return t=n.sent,n.next=9,Object(Z.c)(S(t));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(Z.c)(I(n.t0));case 15:case"end":return n.stop()}},Oe,this,[[0,11]])}function Te(){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.g)(1e3,Object(d.getType)(A),Ne);case 2:case"end":return e.stop()}},pe,this)}function Ne(){var e,t;return W.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Z.d)(ie);case 3:return e=n.sent,n.next=6,Object(Z.b)([fe,fe.getMovieById],e);case 6:return t=n.sent,n.next=9,Object(Z.c)(x(t));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(Z.c)(C(n.t0));case 15:case"end":return n.stop()}},be,this,[[0,11]])}var Se=[ge(),je(),Te()],Ie=Object(P.a)([function(e){return e.router}],function(e){return e.location.pathname}),Me=Object(P.a)(Ie,function(e){return{location:{pathname:e}}}),we=Object(P.a)([Me,ae,te,oe],function(e,t,n,a){return{router:e,currentMovie:t,movies:n,favMovies:a}}),Ae=W.a.mark(Be),xe=W.a.mark(De),Ce=W.a.mark(He),ke=W.a.mark(Ye),Re=[m.LOCATION_CHANGE,Object(d.getType)(S),Object(d.getType)(x),Object(d.getType)(k),Object(d.getType)(j)],Le=500,Fe="MOVIES_state";function Be(){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.f)(Object(d.getType)(R),De);case 2:case"end":return e.stop()}},Ae,this)}function De(){var e;return W.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.b)(Ve);case 2:if(!(e=t.sent)){t.next=9;break}if(!e.router){t.next=7;break}return t.next=7,Object(Z.c)(Object(m.push)(e.router.location.pathname));case 7:return t.next=9,Object(Z.c)(F(e));case 9:return t.next=11,Object(Z.c)(L());case 11:case"end":return t.stop()}},xe,this)}var Ve=function(){return le.getItem(Fe)};function He(){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.g)(Le,Re,Ye);case 2:case"end":return e.stop()}},Ce,this)}function Ye(){var e;return W.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.d)(we);case 2:return e=t.sent,t.next=5,Object(Z.b)([le,le.setItem],Fe,e);case 5:case"end":return t.stop()}},ke,this)}var Pe=[He(),Be()],Ge=Object(d.createAction)("INIT"),Ue=W.a.mark(qe),Je=W.a.mark(Xe),Qe=W.a.mark(Ke);function qe(){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.e)(Object(d.getType)(Ge));case 2:return e.next=4,Object(Z.c)(R());case 4:case"end":return e.stop()}},Ue,this)}function Xe(){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.e)(Object(d.getType)(L));case 2:case"end":return e.stop()}},Je,this)}function Ke(){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.a)(Object(b.a)(Se).concat(Object(b.a)(Pe),[qe(),Xe()]));case 2:case"end":return e.stop()}},Qe,this)}var ze,We=Object(v.a)(),Ze=Object(f.a)(),$e=[Ze,Object(m.routerMiddleware)(We)],et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,tt=Object(l.e)((ze=We,Object(l.c)(Object(u.a)({},K,{router:Object(m.connectRouter)(ze)}))),et(l.a.apply(void 0,$e)));Ze.run(Ke);var nt=n(48),at=(n(89),{fetchMovies:j,setSearchBy:_,setQueryString:g}),rt=Object(s.connect)(function(e){return{searchBy:e.searchBy,favorites:oe(e),isLoading:e.moviesState.isLoading,moviesCount:re(e)}},at)(function(e){var t=e.setQueryString,n=e.fetchMovies,i=e.isLoading,o=e.setSearchBy,s=Object(r.useState)(""),u=Object(nt.a)(s,2),l=u[0],m=u[1],v=function(){We.push("/search/:".concat(l)),t(l),n()},f=function(e){o(e.target.value)},d=function(t){return t===e.searchBy};return c.a.createElement("div",{className:"header column"},c.a.createElement(ut,{className:"header__title",title:a.MAIN_TITLE}),c.a.createElement("span",{className:"header__find_your"},a.FIND_YOUR_MOVIE),c.a.createElement("input",{className:"header__search-input",type:"search",onKeyPress:function(e){"Enter"===e.key&&v()},value:l,onChange:function(e){m(e.target.value)}}),c.a.createElement("div",{className:"header__controls row"},c.a.createElement("div",{className:"header__controls__left"},c.a.createElement("span",null,a.SEARCH_BY),c.a.createElement(it,{value:a.TITLE,onClick:f,type:"button",disabled:d(a.TITLE),className:Y()("btn",{"active-button":d(a.TITLE)}),name:a.TITLE}),c.a.createElement(it,{value:a.GENRE,onClick:f,type:"button",disabled:d(a.GENRE),className:Y()("btn",{"active-button":d(a.GENRE)}),name:a.GENRE})),c.a.createElement(it,{className:"header__controls__search-button btn",onClick:v,disabled:i,type:"submit",name:a.SEARCH})))}),ct=(n(91),function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("span",null,a.MAIN_TITLE))}),it=function(e){return c.a.createElement("button",e,e.name)},ot=(n(93),{setSortBy:O,sortByRating:M,sortByDate:w}),st=Object(s.connect)(function(e){return{moviesCount:re(e),sortBy:e.sortBy}},ot)(function(e){var t=e.moviesCount,n=e.setSortBy,r=e.sortByDate,i=e.sortByRating,o=function(e){"rating"===e.target.id?i():r(),n(e.target.id)},s=function(t){return t===e.sortBy};return c.a.createElement("div",{className:"sort-by row"},c.a.createElement("span",null,t,a.MOVIES_FOUND),c.a.createElement("div",{className:"row sort-by__buttons"},c.a.createElement("span",null,a.SORT_BY),c.a.createElement("span",{id:"date",className:Y()("link",{"active-link":s("date")}),onClick:o},a.RELEASE_DATE),c.a.createElement("span",{id:"rating",className:Y()("link",{"active-link":s("rating")}),onClick:o},a.RATING)))}),ut=function(e){return c.a.createElement("span",e,e.title)},lt=(n(95),function(){return c.a.createElement("div",{className:"loading-div"},c.a.createElement("p",{className:"loading"}))}),mt=function(e){return c.a.createElement("i",{className:"".concat(e.className,"  ").concat(e.iconPrefix," fa-").concat(e.icon),title:e.title,id:e.id,onClick:e.onIconClick})},vt=n(109),ft=function(e){var t=e.favorites.some(function(t){return t.id===e.movie.id}),n=t?"fas":"far";return c.a.createElement("div",{className:"search-result__movie-card column"},c.a.createElement(vt.a,{to:"/movie/".concat(e.movie.id)},c.a.createElement("img",{className:"search-result__movie-card__poster",id:e.movie.id.toString(),src:e.movie.posterPath,alt:e.movie.title,onClick:e.onPosterClick})),c.a.createElement("div",{className:"search-result__movie-card__header row"},c.a.createElement("span",{className:"search-result__movie-card__title"},e.movie.title),c.a.createElement("span",{className:"search-result__movie-card__date"},e.movie.releaseDate.slice(0,4))),c.a.createElement("div",{className:"search-result__movie-card__header row"},c.a.createElement("span",{className:"search-result__movie-card__genres"},e.movie.genres.join(" & ")),c.a.createElement(mt,{className:Y()("search-result__movie-card__favorite",{fav:t}),id:e.movie.id.toString(),iconPrefix:n,icon:"star",onIconClick:e.onStarClick})))},dt=(n(97),{fetchMovieById:N,setCurrentMovieId:h,fetchFavoriteMovie:A,removeMovieFromFavorites:k}),_t=Object(s.connect)(function(e){return{favorites:oe(e)}},dt)(function(e){var t=e.setCurrentMovieId,n=e.fetchMovieById,a=e.movies,r=e.favorites,i=e.removeMovieFromFavorites,o=e.fetchFavoriteMovie,s=function(e){t(e.target.id),n()},u=function(e){var n=e.target.id,a=r.some(function(e){return e.id===parseInt(n,10)});t(e.target.id),a?i(n):o()};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"search-result-wrapper row"},c.a.createElement("div",{className:"search-result row"}," ",a.map(function(e){return c.a.createElement(ft,{key:e.id,movie:e,onPosterClick:s,onStarClick:u,favorites:r})})),c.a.createElement(Et,{fetchFavoriteMovie:s,favorites:r})),c.a.createElement(q,null))}),Et=(n(99),function(e){return c.a.createElement("div",{className:"favorites"},e.favorites&&e.favorites.map(function(t){return c.a.createElement("div",{key:t.id,className:"favorites__item"},c.a.createElement(vt.a,{to:"/movie/".concat(t.id)},c.a.createElement("img",{className:"favorites__item__poster",id:t.id.toString(),src:t.posterPath,alt:t.title,onClick:e.fetchFavoriteMovie})))}))}),Ot=n(34),pt=n(25),bt={fetchMovies:j},gt=Object(s.connect)(function(e){return{movies:te(e),isLoading:ne(e)}},bt)(function(e){var t=e.fetchMovies,n=e.movies,a=e.isLoading;Object(r.useEffect)(function(){t()},[!n]);var i=n.length?c.a.createElement(_t,{movies:n}):c.a.createElement("div",{className:"no-films-found"},c.a.createElement("h1",null," No films found")),o=a?c.a.createElement(lt,null):i;return c.a.createElement("div",null,c.a.createElement(rt,null),c.a.createElement(st,null),o)}),ht=(n(101),{fetchFavoriteMovieSuccess:x,removeMovieFromFavorites:k}),jt=Object(s.connect)(function(e){return{currentMovie:ae(e),movies:te(e),favorites:oe(e),isLoading:ne(e)}},ht)(function(e){var t=e.currentMovie,n=t.posterPath,r=t.title,i=t.voteAverage,o=t.tagLine,s=t.releaseDate,u=t.runtime,l=t.overview,m=t.id,v=e.movies,f=e.isLoading,d=e.favorites,_=e.fetchFavoriteMovieSuccess,E=e.removeMovieFromFavorites,O=d.some(function(t){return t.id===e.currentMovie.id}),p=O?"fas":"far",b=function(e){return Number.isInteger(e)},g=f?c.a.createElement(lt,null):c.a.createElement(_t,{movies:v});return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"detailed-info column"},c.a.createElement("div",{className:"detailed-info__top row"},c.a.createElement(ut,{className:"detailed-info__top__title",title:a.MAIN_TITLE}),c.a.createElement(it,{type:"button",name:a.SEARCH,className:"btn detailed-info__top__to-search",onClick:function(){We.push("/")}})),c.a.createElement("div",{className:"detailed-info__film row"},c.a.createElement("img",{className:"detailed-info__film__poster",src:n,alt:r}),c.a.createElement("div",{className:"detailed-info__film__right column"},c.a.createElement("div",{className:"detailed-info__film__right__title-rating row"},c.a.createElement("span",{className:"detailed-info__film__right__title-rating__title"},r),c.a.createElement(mt,{className:Y()("search-result__movie-card__favorite",{fav:O}),id:m.toString(),iconPrefix:p,icon:"star",onIconClick:function(){d.some(function(e){return e.id===m})?E(m.toString()):_(e.currentMovie)}}),c.a.createElement("span",{className:Y()("detailed-info__film__right__title-rating__rating",{"integer-border ":b(i),"fractional-border":!b(i)})},i)),c.a.createElement("span",{className:"detailed-info__film__right__tagline"},o),c.a.createElement("div",{className:"detailed-info__film__right__date-runtime row"},c.a.createElement("span",{className:"detailed-info__film__right__date-runtime__date"},s&&s.slice(0,4)),c.a.createElement("span",{className:"detailed-info__film__right__date-runtime__runtime"},u," min")),c.a.createElement("span",{className:"detailed-info__film__right__overview"},l)))),g)}),yt=c.a.createElement("div",null,c.a.createElement(Ot.a,null,c.a.createElement(pt.a,{exact:!0,path:"/",component:gt}),c.a.createElement(pt.a,{path:"/search/:searchQuery",component:gt}),c.a.createElement(pt.a,{path:"/movie/:id",component:jt}))),Tt=(n(103),function(){return c.a.createElement("div",{className:"app"},c.a.createElement(m.ConnectedRouter,{history:We},yt),c.a.createElement(ct,null))});n(105);tt.dispatch(Ge()),o.a.render(c.a.createElement(s.Provider,{store:tt},c.a.createElement(Tt,null)),document.getElementById("root"))},50:function(e,t,n){e.exports=n(107)},66:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){}},[[50,2,1]]]);
//# sourceMappingURL=main.ea8e86b2.chunk.js.map
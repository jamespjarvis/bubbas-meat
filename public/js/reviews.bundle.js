!function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var a={};t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=152)}({123:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){var e=this;this.intervalDuration=8e3,this.componentContainer=document.querySelector(".quote-container"),this.quoteImage=document.querySelector(".quote-image"),this.quoteText=document.querySelector(".quote-text"),[this.quoteImage,this.quoteText].forEach(function(t){t.classList.add("fadeInOut"),t.style.animationDuration=e.intervalDuration+"ms"}),this.images=l.default,this.imageIndex=0,this.quotes=s.default,this.quoteIndex=Math.floor(Math.random()*this.quotes.length),this.createImage=function(t){e.imageElement=document.createElement("img"),e.imageElement.src=t,e.quoteImage.appendChild(e.imageElement)},this.displayQuote=function(t){void 0===t&&(t=e.quotes[e.quoteIndex]),e.quoteText.textContent=t},this.updateQuote=function(){e.quoteIndex++,e.quoteIndex>=e.quotes.length&&(e.quoteIndex=0),e.displayQuote(e.quotes[e.quoteIndex])},this.displayImage=function(t){e.imageElement.src=t},this.updateImage=function(){e.imageIndex++,e.imageIndex>=e.images.length&&(e.imageIndex=0),e.displayImage(e.images[e.imageIndex])},this.initialize=function(){e.createImage(e.images[e.imageIndex]),e.displayQuote(),e.interval=setInterval(function(){e.quoteIndex%3==0&&e.componentContainer.classList.toggle("reversed"),e.updateQuote(),e.updateImage()},e.intervalDuration)}}a(339);var i=a(154),s=n(i),r=a(153),l=n(r);(new o).initialize()},134:function(e,t){},137:function(e,t,a){e.exports=a.p+"assets/imgs/haley_approves200x252.6b6c276.jpeg"},152:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}a(134);var o=a(137),i=(n(o),a(123));n(i);document.querySelectorAll(".review").forEach(function(e){fetch("https://thecatapi.com/api/images/get?api_key=MTk4NjIw&format=src&size=small&type=jpg").then(function(e){return e.blob()}).then(function(t){var a=e.querySelector(".image");a.style.backgroundImage="url("+URL.createObjectURL(t)+")",a.style.backgroundSize="100% 100%",a.style.backgroundPosition="center center"})})},153:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(361),i=n(o),s=a(362),r=n(s),l=a(363),u=n(l),h=a(364),c=n(h),d=a(365),m=n(d);t.default=[i.default,r.default,u.default,c.default,m.default]},154:function(e,t,a){"use strict";e.exports=["Clear alcohols are for rich women on diets.","Crying: acceptable at funerals and the Grand Canyon.","I call this turf ‘n’ turf. It's a 16 oz T-bone and a 24 oz porterhouse. Also, whiskey and a cigar. I am going to consume all of this at the same time because I am a free American.","Under my tutelage, you will grow from boys to men. From men into gladiators. And from gladiators into Swansons.","I'm a simple man. I like pretty, dark-haired women, and breakfast food.","Never half-ass two things. Whole-ass one thing.","[On bowling] Straight down the middle. No hook, no spin, no fuss. Anything more and this becomes figure skating.","I don't want to paint with a broad brush here, but every single contractor in the world is a miserable, incompetent thief.","Fishing relaxes me. It's like yoga, except I still get to kill something.","No home is complete without a proper toolbox. Here's April and Andy's: A hammer, a half eaten pretzel, a baseball card, some cartridge that says Sonic and Hedgehog, a scissor half, a flashlight filled with jellybeans.","Just give me all the bacon and eggs you have. Wait...wait. I worry what you just heard was: Give me a lot of bacon and eggs. What I said was: Give me all the bacon and eggs you have. Do you understand?","When people get a little too chummy with me I like to call them by the wrong name to let them know I don't really care about them.","There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk.","The government is a greedy piglet that suckles on a taxpayer's teat until they have sore, chapped nipples.","The less I know about other people's affairs, the happier I am. I'm not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.","When I eat, it is the food that is scared.","My only official recommendations are US Army-issued mustache trimmers, Morton's Salt, and the C.R. Lawrence Fein two inch axe-style scraper oscillating knife blade.","Are you going to tell a man that he can't fart in his own car?","Turkey can never beat cow.","It's always a good idea to demonstrate to your coworkers that you are capable of withstanding a tremendous amount of pain.","There are three acceptable haircuts: high and tight, crew cut, buzz cut.","Capitalism: God's way of determining who is smart and who is poor.","Any dog under fifty pounds is a cat and cats are useless.","Fish, for sport only, not for meat. Fish meat is practically a vegetable.","There is only one bad word: taxes.","History began July 4th, 1776. Anything before that was a mistake.","Cultivating a manly musk puts opponent on notice.","Give a man a fish and feed him for a day. Don't teach a man to fish… and feed yourself. He's a grown man. And fishing's not that hard.","Child labor laws are ruining this country.","Great job, everyone. The reception will be held in each of our individual houses, alone.","America: The only country that matters. If you want to experience other ‘cultures,’ use an atlas or a ham radio.","The key to burning an ex-wife effigy is to dip it in paraffin wax and then toss the flaming bottle of isopropyl alcohol from a safe distance. Do not stand too close when you light an ex-wife effigy.","There are only three ways to motivate people: money, fear, and hunger.","Shorts over six inches are capri pants, shorts under six inches are European.","Friends: one to three is sufficient.","Breakfast food can serve many purposes.","Honor: if you need it defined, you don't have it.","One rage every three months is permitted. Try not to hurt anyone who doesn't deserve it.","Strippers do nothing for me…but I will take a free breakfast buffet anytime, anyplace.","I like saying ‘No,’ it lowers their enthusiasm.","You had me at meat tornado.","There must be a mistake, you've accidentally given me the food that my food eats.","Son, there is no wrong way to consume alcohol.","Keep your tears in your eyes where they belong.","I've cried twice in my life. Once when I was seven and hit by a school bus. And then again when I heard that Li'l Sebastian has passed.","I hate everything.","I love nothing.","I love riddles!","Don't waste energy moving unless necessary.","I'll take that steak to go. Please and thank you.","Creativity is for people with glasses who like to lie.","Children are terrible artists and artists are crooks.","Tom put all my records into this rectangle!","I believe luck is a concept invented by the weak to explain their failures.","What's cholesterol?","People who buy things are suckers.","I'm going to get 12 eggs and part of a dead animal. Dealer's choice. Please and thank you.","What the f*ck is a German muffin?!?","I wanna punch you in the face so bad right now."]},339:function(e,t){},361:function(e,t,a){e.exports=a.p+"assets/imgs/image01_640x400.ab164e6.jpeg"},362:function(e,t,a){e.exports=a.p+"assets/imgs/image02_640x400.6ef8df6.jpeg"},363:function(e,t,a){e.exports=a.p+"assets/imgs/image03_640x400.b1bdfa8.jpeg"},364:function(e,t,a){e.exports=a.p+"assets/imgs/image04_640x400.60026cb.jpeg"},365:function(e,t,a){e.exports=a.p+"assets/imgs/image05_640x400.ff643b9.jpeg"}});
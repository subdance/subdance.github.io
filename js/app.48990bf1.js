(function(t){function e(e){for(var n,s,r=e[0],l=e[1],m=e[2],c=0,u=[];c<r.length;c++)s=r[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(u.length)u.shift()();return i.push.apply(i,m||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var m=0;m<r.length;m++)e(r[m]);var h=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1e42":function(t,e,a){"use strict";a("8b82")},"238f":function(t,e,a){},"528a":function(t,e,a){"use strict";a("84b7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],s=a("2877"),r={},l=Object(s["a"])(r,o,i,!1,null,null,null),m=l.exports,h=a("8c4f"),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-page-main-container"},[e("div",{staticClass:"cover-container",on:{click:t.toPost}},[t._m(0)]),e("div",{staticClass:"sns-wrapper"},[e("sns-list")],1)])},u=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner-text-container"},[e("div",{staticClass:"banner-text"},[t._v("笔记")]),e("div",{staticClass:"banner-text"},[t._v("乐园")]),e("div",{staticClass:"banner-text"},[t._v("极东")])])}],g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sns-main-container"},t._l(t.snsList,(function(a,n){return e("div",{key:n,staticClass:"single-sns-container"},[e("a",{staticClass:"sns-text",attrs:{href:a.url}},[t._v(t._s(a.name))])])})),0)},p=[],d={name:"SNS_LIST",data(){return{snsList:[{value:"twitter",name:"twitter",url:"https://twitter.com/H1gh_and_Dry",iconUrl:""},{value:"bilibili",name:"bilibili",url:"https://space.bilibili.com/31986715",iconUrl:""},{value:"mail",name:"mail",url:"mailto:subdance@126.com",iconUrl:""}]}}},f=d,b=(a("84a3"),Object(s["a"])(f,g,p,!1,null,"8ec9b734",null)),y=b.exports,v={name:"HOME_PAGE",components:{snsList:y},methods:{toPost(){this.$router.push("/post/kon-eternal")}}},_=v,P=(a("61f2"),Object(s["a"])(_,c,u,!1,null,"e968b030",null)),k=P.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-post-main-container"},[e("div",{staticClass:"column-item blank-space"}),e("div",{staticClass:"column-item post-content"},[e("post-body"),e("div",{staticClass:"floating-index-menu"},[e("index-menu")],1)],1),e("div",{staticClass:"column-item index-menu"},[e("index-menu")],1)])},x=[],w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-body-main-container"},[t.currentArticle?e("div",[e("div",{staticClass:"title-section"},[e("div",{staticClass:"article-title-text"},[t._v(" "+t._s(t.currentArticle.title)+" ")]),e("div",{staticClass:"article-intro-text"},[t._v(" "+t._s(t.currentArticle.intro)+" ")])]),t._l(t.currentArticle.para,(function(t,a){return e("line-render",{key:a,attrs:{"line-data":t}})}))],2):e("div",{staticClass:"empty-post-container"},[t._v(" no post found ")])])},j=[];const S=[{title:"那一日的梦",intro:"献给永远的轻音",route:"kon-eternal",para:["在轻音部第一次合宿的那个海边的夜晚，唯晃晃悠悠地将放音机搬到了澪的面前。","一瞬间，早已准备好的烟花在唯的背后划向天空。唯夸张地划动着拨片，开怀地跳跃着。","!https://konfan.oss-cn-beijing.aliyuncs.com/image/article/3.jpeg","澪的眼前被点亮了。是被绚丽的烟火，或许也是被眼前的唯。唯像摇滚巨星一样、像站在最灿烂的舞台上一样，忘我地表演。","向来羞涩的澪已经忘了自己的表情，痴痴地望着唯——","还可以这样呀!","原来就算弹着不成调的曲子，就算舞台只是海滩，也可以演奏地如此盛大，开心。","澪心里软软的地方被触动了，是那个存放着梦想的地方。","海风拂过澪的眼角，肌肤传来些许的清凉感。","“我们的目标，武道馆！”律曾经夸下的海口，似乎在此刻变得不那么遥远了。","梦想啊，好像总是很遥远，就像烟火之上淡淡的星光那样遥远。","可那又是为什么，烟花下的众人，在这一瞬间，都感觉到了最真切的永恒呢？","烟花的光晕随着海潮消散，海风又起。带着汗珠的唯，傻傻地笑着。","原来是这样啊。","原来我的梦想并不是要站在最大的舞台上演奏。","原来我的梦想，只是一边演奏，一边和你们在一起——","~“这里就是我们的武道馆。”"]},{title:"一岁除",intro:"2018",route:"new-year-2019",para:["~“似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢愉和不幸。”","在2018的末尾注视这一年，感觉自己越来越迷糊了。","‘不甘于成为被豢养的家畜，于是有些人来到了高墙之外他们想看看外面的世界。’","但是那一天——","在中关村科技中心，无数和我年龄相仿的人从四面八方涌来，然后再交汇到百度，新浪微博等中国一线公司，我感到一种手足无措的惊讶。","在面试中受到打击的我，一瞬间意识到：","原来这个世界上满是跟你差不多年纪，却比你更加努力，更加聪明，更加有价值的人。","我从小以来的优越感不见了，取而代之的是悔恨。","以前的我也知道世界很大，强人很多，但当这一事实用逼真的方式将我笼罩在其中时，我才理解到这一点：‘你很弱，你自幼以来的成功、优越、满足感毫无意义，你的家乡只是一个池塘，你只是池塘里的一条小鱼。’","就是在那时，我不再想呆在那个南方小城的温柔乡了。我想去外面看看。","我想知道，自己的‘器’。","以上，是我2018最想记录的一件事。其他的事，如鱼饮水就足够了。","跨年夜时，我窝在寝室里，一边擦鼻涕（感冒了）一边看红白歌会。虽然独自一人，但我却不知从何处感到了升腾的幸福感。","!https://konfan.oss-cn-beijing.aliyuncs.com/image/article/komi-shock.jpeg","地球只是公转一周，却足够让人世手舞足蹈，这就是人类伟大的浪漫吧。","This is the stand-alone-complex.","所以，以上，新年快乐。"]},{title:"爷爷奶奶",intro:"19/2.23",route:"hometown",para:["爷爷今年84，奶奶72.","我从他们家出发的时候，奶奶没有向往常一样躲在厕所里。她扶着门，一遍又一遍叮嘱我注意安全。奶奶在慈祥地笑着。","爷爷也没有向往常一样笑着说“你要好点”，而是有些严肃在奶奶背后望着我，我笨拙地装作没看到爷爷哭了。","我即将参加工作了，在北京。他们也知道，这次离别，以后见面越来越难了。","奶奶为我做了18年的饭。","爷爷很喜欢我和我的两个姐姐，每次回家都能感到他的牵挂与喜悦。我无法形容准确，但是很浓烈。","也许他们不懂我，也不了解我的苦闷，但是和他们呆在一起总是很安心。","这是18年朝夕相处的默契吧。","在回京的火车上，云彩飞驰，山风在窗外的田间穿梭。","下次再回家，应该是2020年的除夕了吧。","下次再看到爷爷奶奶，我会说：“我过的很好，我回家了。”"]},{title:"再见，然后吹响下一曲",intro:"19/3.25",route:"after-lenovo",para:["!https://konfan.oss-cn-beijing.aliyuncs.com/image/article/lenovo.jpeg","上周从联想前端开发离职了！","也舍不得。半年的实习，我很感谢联想。作为我的第一份工作，这是一个有某种意义的地方。","多年以后，我也许仍会记得在这儿面试那天，悠悠的风与颠簸的333路。还有那个手心冒汗的自己，在联想大厦气派的穹顶下不安地等待","离开时，中关村的天空依然像那个遥远的夏日般，碧空如洗。"]},{title:"致两千年后的你",intro:"19/7.10",route:"graduation",para:["毕业了，实在有点措不及防。","离校前一天的夜里，大伙儿挤到打好的地铺上，喝啤酒玩儿游戏。还是嘻嘻哈哈没心没肺的，没半点伤感的样子，就算到最后，也没有一个人开口提明天寝室就散了这件事。","是不是对于那些避免不了的事情，平平淡淡的迎接它的到来，才是最温柔的方式呢？","四年也太久了，久到我都忘了大家只是从天涯海角而来暂居的过客。“总有一天得分别的”，时间竟然让人忘了这么重要的事。","“你暑假什么时候回寝啊？”已经听不到这样的话了。","大学的四年，在寝室里有他们陪伴着，我过得很快乐。这些记忆是我的财富，我会好好收藏。","我拖着行李，站在再也不会进入的宿舍楼前，突然感觉这一切好像一场很漫长的梦，也许睁开眼，就会回到四年前开学时那个树影婆娑的夏天。","!https://konfan.oss-cn-beijing.aliyuncs.com/image/article/1215.jpg"]},{title:"向一塌糊涂的人生索求幸福",intro:"19/7.17",route:"Shōjo-Fujūbun",para:["!https://konfan.oss-cn-beijing.aliyuncs.com/image/article/10-10.jpg","真厉害啊，这本书。","一开始，大段大段想到哪说哪的的随笔式写法真的有点劝退，但毕竟号称用了十年写成的书，我倒想看看后面到底是怎样一番惊天动地，能让西尾维新说出这样的话。","少女U对日常用语的一丝不苟，是一个非常非常漂亮的伏笔。巧妙，有误导性，但却又顺理成章，震撼人心。我第一次看到少女U专程下楼对“我”说晚安时的场景，反应是欸这小孩子有点可爱啊，倒没有多想。之后因为“我”在吃晚饭时没有说“我开动了”而导致少女U的情绪爆发，我也仅仅是当成了二次元里很常见的那种“必须讲礼貌的偏执少女”那种设定。而最后，当“我”查看少女的笔记本时，我与书中的“我”才恍然大悟：","原来U一直是一个不能再乖的好孩子。她根本称不上乖张或心里畸形，她只是在那个已经被过世的父母搞砸了的世界里，天真地，不，应该说是顽固吧，顽固地看护着爸爸和妈妈留下的唯一遗产。","“我”最后与少女摊牌，少女用属于少女的语调，虚弱地要求“我”，像“爸爸妈妈”过去那样给她讲睡前故事——我是从这里开始流泪的。","","~我对U说的……从我嘴里编织出的故事，是关于非一般的人类就用非一般的方式得到了幸福；思想怪异的人就维持着怪异的思想，然后获得幸福；异常的人就当个异常的人，从此也能得到幸福，不管是没有朋友的家伙、没办法用语言表达心中所想的家伙、无法适应周遭的家伙、个性扭曲的家伙、喜欢唱反调的家伙，都这么抱有自我本色最终得到幸福的故事。得不到恩惠的人就算得不到恩惠，也能好好活下去的故事。","","本来是一段有点没头没尾的话。但是，若是出自此时抱着这个误入歧途的少女的“我”之口，对这个千疮百孔却不自知的娇小少女而说的话，那么这段话便显得完整了。","","~黄昏不知何时已悄悄降临，纵使夜幕升起，我们还是什么都没做，我依然为U说着'故事'，U就继续听我说。”","","U认真的听着。是因为爸爸妈妈留下的那句“别人说话时要注意听”，还是因为我的'故事'本就动听呢？","","~没问题的。虽然有很多的谬误，虽然出了很多纰漏，虽然搞砸了很多事情，虽然造成了许多无法挽回，或许再也无法回到正常的人生轨道，但是没关系的，这种事情也没什么大不了的……我一而再地这么告诉她。不是英雄的故事，也不是救世主的故事，仿佛没有尽头般，我持续不断的净是说些关于异端者的故事","","虽然在前面多次表现自己的“与社会不和”、“不会与人打交道”、“为人铁石心肠”，到头来却还是干起了“这种事”的“我”，已经把西尾老师这十年来小说的核心，或者说眼前那个不十分的少女所带给我的触动，娓娓道来了。","","~所以仔细听我说吧，U。那被你父母称为真面目——那天我所目击到的你的本质，确实是只要活在这个世上就不得不隐藏起来的一面，但你绝不能因此感到羞愧。虽然你的人生早已经一塌糊涂了……但无论如何，这也不表示你就不能得到幸福。","看到这里的我，好像已经泪流满面了。也许书中的“我”，也是如此。","幸福并不意味着健康，金钱，爱情。也许这些东西确实可以带来幸福，但是幸福的凭依之物却难以被世界所标准化。生活可以让你不幸，但是你总有办法再向生活讨回自己的幸福。这是西尾老师所相信的，也是“我”所希望那个不十分的“少女U”所相信的。","我也不知道我为什么哭了。我并没有悲惨的家庭经历、度过了开心的校园生活，但等我反应过来时，就已经流泪了。","","~分别搭上两辆警车，让我没有多余的时间可以和U告别，没有从她口中听到'再见'这两个字，当然我也没有说。","","对了，“我”对“U”所讲的故事，用原文概括的话，就是下面这段话了：","","~比如说，光靠语言勉强维持着生计的少年和支配世界的蓝发天才少女的故事。再比如说，病态地溺爱着妹妹的兄长和无论如何也无法容忍事物的暖昧性的女高中生的故事。企图单凭着智慧与勇气挽救地球的小学生和梦想着能够实现成长和成熟的魔法少女的故事。注重家族爱的杀人狂和被杀人狂的魅力所吸引的毛线帽少女的故事。挽救了一个濒死怪物的伪善者和爱上了他的吸血鬼的故事。讨厌去电影院的男人和他的第十七个妹妹的故事。在与世隔绝的小岛上长大的没有感情的高大男人和浑身都被怨恨和愤怒所占据的小姑娘的故事。认识到挫折滋味的格斗家和无视挫折的格斗家的故事。出乎意料地赢得了人气的流行作家和求职中的侄女的故事。有着奇妙偏向的读书迷和住在书店里的怪人的故事。不管做什么都总是失败的受托人和心甘情愿地被她耍得团团转的刑警的故事。光凭意志生存下去的女忍者和默默地守望着她的头领的故事。","","现在我知道，那个真真假假的“十年之久”到底是什么意思了(笑)","","~“我从小就很喜欢老师的作品，能和您见面，我真的很高兴。以后还要请您多多指教了。请说出更多有趣的故事给我听吧”","","最后的最后，也就是“十年之久”后的现在，“我”竟再一次与那个名为夕暮诱(Yuugure Yuu)的“少女U”相遇了。这回，有备而来的她，成为了我的新责任编辑。不过这里，与其用“竟”，是不是用“果然”比较好？","毕竟，U的笔记本上，可是好好写着“要说再见”呢。"]},{title:"孑孓文字游戏",intro:"19/11.03",route:"bakemonogatari",para:["我是看了下面一段话决定去买西尾维新的小说的","~西尾说他的偶像是推理小说家泡坂妻夫（语出<戏言用语辞典>），泡坂妻夫的笔名是由本名厚川昌男的假名乱序而来。对于这一点，西尾可是好好的继承了偶像。西尾维新这个笔名是一个非常厉害的文字游戏：西尾维新（NISIOISIN），名字的罗马拼音不仅仅是单纯的回文（正着拼和反着拼是一样），而且还旋转对称（以中间的O为转轴旋转180度后还是一样），可是相当厉害的。","这人好中二啊！但是...我觉得很酷欸。于是购入《化物语》上下两卷。","顺带一提，我特地买的台湾尖端出版社出版的《化物语》，因为我担心大陆的版本会有删改。文字这种沾染浓烈情感气味的东西，经过一道翻译就会失色不少，倘若再遭遇删减，那还不如不读了。","我读的很慢，每天大概半小时左右。其实从我可以控制自己每天只读半小时这点就已经可以看出来，我大概没对上物语系列的电波。","而《化物语》上下两本读完后，也确实如此——西尾维新最富盛名的作品，我居然完全喜欢不起来。","挺失望的。当然，不是对西尾维新失望（我十分喜欢他的另一本小说《少女不十分》），而是对不能发现《化物语》魅力的自己失望。","在阅读过程中，我曾持续暗示自己：这故事很精彩这故事很精彩。然而看完厚厚的上下两卷之后，我彻底放弃了。完全没发现故事精彩在哪的我，反倒有一种做完语文卷子的解脱感。","写《化物语》时的西尾，笔触像一台总烧不燃的热水器。我站在淋浴下等待，到最后却只有这如同不温不热的水一般的文字与剧情流了出来。阅读完毕，就像洗了个水温不够但又漫长的澡。","不过《化物语》中，我也有几处印象很深的台词：","~我事先声明，阿良良木。我最讨厌那种明明最后男女主角都会在一起，还一直维持朋友以上、恋人未满这种不冷不热的关系，来歹戏拖棚赚话数的爱情喜剧。","~你觉得一个努力的人会觉得自己在努力吗？","~好奇心这种东西就像蟑螂，偏往别人不想被发现的秘密上叮。","~我被学姐吸引住了，就算让我舔她舔剩的糖果我也愿意。","~不只是糖果，是口香糖才对。我被学姐吸引住，就算要我吃她吃过的口香糖我都甘愿。","后两句，初看是标准变态发言，但仔细想想，这不是对浑浊热烈的情欲所做出的准确阐述吗？反倒是如果陷入热恋，连对方咀嚼过的口香糖都不愿意吃，会显得不通人性吧。——突然意识到自己冒出了这种想法，我不得不感叹，西尾维新确实掌握着通过类似于灌水的对话，从而把人的心性向书中角色默默拉扯的能力。","西尾在《化物语》中总是能写出让人会心一笑和耐人寻味的句子与文字游戏，但整本小说的丰满程度却无法让我满意。读罢，没有共鸣，没有思考，没有余韵。","或者说，这本书的领域，完全没有展开。","我在看完上下卷的《化物语》后，又购入了前传性质的《伤物语》。原因无他，纯粹是想看更多关于Kissshot-Heartunderblade,也就是忍野忍的更多戏份而已——我本是抱着这样的打算去读的，不过读完，却发现这本小说还挺不错。至于其中缘由便不在此细说了。","!https://konfan.oss-cn-beijing.aliyuncs.com/image/article/monogatari.jpg","其实有一件事我是十分肯定的：西尾维新是一位极具才华的作家，因为他的那本《少女不十分》实在是给我带来了太深的冲击，以至于就算他只写过这一本书我也会佩服的五体投地。但是这次物语系列的阅读体验，着实不那么圆满。","我还需要继续去补完物语世界观下的其他小说吗？我数了数大致还有十来本。正当我头疼之际，突然瞥见《伤物语》后记中这样一段话：","~本书是此系列的第二部作品，当然我想写的内容全部都写完了，若各位读者能够享受故事的乐趣，那对我而言就是最幸福的事情了。我想以这幸福为食量，从明天开始好好工作。","看来西尾维新已经告诉我答案了嘛。"]},{title:"星間飛行",intro:"2019",route:"new-year-2020",para:["我好久没有看过云了。","悠远又永久的云，总是能让人忘了什么，然后又记起什么。","总是能让人忘了，时间的流转是多么的悄无声息。于是，如此这般，马上就是新的一年了。","这一年里的我，毕业、独居、工作，然后在新年的前一天离职。看似来势汹汹，不过这些都是岁月长河的尘埃，似乎没有什么记录的必要。","2019年我目睹北京的第一场雪，是在下班走出办公楼的时候。天气好像因为飘散的雪花而变得温柔起来，冷风只是乖巧地流动着，托着雪花落下。","暖黄色的街灯陪伴下，天空似乎很暖。漫天飞舞的雪花裹挟着人们心中浪漫的情愫，让这个钢铁丛林的夜，有了柔软的气氛。","我走在回家的路上，虽然除了下雪，周遭并没有任何改变，但是我却有一种莫名其妙的安心与振奋。","在路灯下抬头，雪的碎片借助光晕在眼前飞舞，真的让我有种在星球间穿行的错觉。","突然间，我回忆起来，我来北京的第一年，便在下雪时站在路灯下抬头看雪。如今是第四个年头了，我又无意间重复了这个动作。","四年前的我，要是知道四年后的自己依然在这座城市做着这样的事情，该会是怎样的心情呢？","在我离职的那天下午，上司突然拍了拍我的肩膀，然后给了我switch的游戏卡带作为饯别礼物。","是我们以前就谈过，但我一直没入手的那款游戏。","在那一瞬间，我感觉到了一股不可名状，但又异常清晰的情感。我突然间变得舍不得这儿了，我顿时有些不知所措。","但我知道，因为这样那样的原因，我必须离开。","从前有句话，叫「人在江湖，身不由己」。在那一天，我稍微懂了点了这句话背后所隐藏的苦涩的情感。","跨年当晚，我的心情很平静。我本应该思考很多问题，但我却出乎预料的什么也没有去想。","过去？我找不到自己放不下的东西，我是没有牵挂的。","未来？我的脚下还没有平稳的路，但却总有一股莫名的安心感，在告诉我「someday I'll find my way home」。","也许，我还挺享受这种状态。","随着零点的到来，又一次的stand-alone-complex出现了。","那就让我也来许愿吧！","2020年，我渴望能踏上那种让我感叹","~相逢何必曾相识","的旅途。","就这样，2019年结束了。那么2020年，新年快乐。","!https://konfan.oss-cn-beijing.aliyuncs.com/image/article/2020-1.jpeg"]},{title:"世界的世界",intro:"20/2.10",route:"bounded",para:["天气已经彻底入秋了。","四年的大学再加上一年的工作，这是我在学院路呆的第五个秋天。","学校北门通向购物中心的这条路，在这五年间不知道走了多少次。每次走在这条路上，我就能回想起无数的往事。实实在在无数的往事，各种滋味，各种天气，各种声音。我甚至觉得记忆不是存在于脑袋中，而是散落在这条街上。","如果说哪一天，我要离开这条路了，我一定会舍不得。","去学校旁那家剪了五年的理发店理发，要是我出门了依旧是往左走，买碗烤冷面，穿过校门回到宿舍，那该多有意思。","所以，还是被自己说服决定不搬家了，继续住在学院路的这间公寓里。","就像一个活着的地缚灵啊——我在心里嘲笑自己。"]},{title:"我",intro:"关于我",route:"me",para:["How are you doing today?","我是这个网站的作者，湖北人，北京某211二零一九届毕业生。","我的邮箱是subdance@126.com.","相信梦想；相信“你也可以改变世界”这种事情；相信“英雄”。","享受用代码来构造页面。","很喜欢","~这世界上只有一种真正的英雄主义，那就是在认清生活的真相后依然热爱生活。","这句话。","!https://konfan.oss-cn-beijing.aliyuncs.com/image/article/subdance.jpeg"]}];var O,D,E=S,A={name:"LINE_RENDER",props:{lineData:String},render(t){return t.apply(this,this.richTextRender(this.lineData))},methods:{richTextRender(t){const e=t.charAt(0);let a=[];switch(e){case"!":a=["img",{class:{"article-img":!0},attrs:{src:t.substring(1),"data-tag-name":"图片"},style:{transform:`rotate(${2-4*Math.random()}deg)`},on:{mouseover:this.restoreRotate}}];break;case"~":a=["div",{class:{"article-quote":!0},attrs:{"data-tag-name":"引用段落"}},t.substring(1)];break;default:a=["div",{class:{"article-para":!0},attrs:{"data-tag-name":"文本段落"}},t];break}return a},restoreRotate(t){t.currentTarget.classList.add("no-rotate-img")}}},M=A,I=(a("7547"),Object(s["a"])(M,O,D,!1,null,"163e4b22",null)),N=I.exports,L={name:"POST_BODY",components:{lineRender:N},data(){return{articleData:JSON.parse(JSON.stringify(E))}},computed:{currentArticle(){const t=this.articleData.filter(t=>t.route===this.$route.params.route);return!!t.length&&this.articleData.filter(t=>t.route===this.$route.params.route)[0]}}},T=L,U=(a("6768"),Object(s["a"])(T,w,j,!1,null,"2db78079",null)),R=U.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"index-menu-main-container"},[e("div",{staticClass:"section-banner"},[t._v(" INDEX ")]),t._l(t.articleData,(function(a,n){return e("div",{key:n},[e("span",{class:{"title-text":!0,highlight:t.currentRouteName===a.route},on:{click:function(e){return t.toArticle(a)}}},[t._v(" "+t._s(a.title)+" ")]),e("div",{staticClass:"intro-text"},[t._v(" "+t._s(a.intro)+" ")])])})),e("div",{staticClass:"to-home-button",on:{click:t.toHome}},[e("span",[t._v("close book")])])],2)},H=[],$={name:"INDEX_MENU",data(){return{articleData:JSON.parse(JSON.stringify(E))}},computed:{currentRouteName(){return this.$route.params.route}},methods:{toArticle(t){t.route!==this.currentRouteName&&(this.$router.push("/post/"+t.route),window.scrollTo(0,0))},toHome(){this.$router.push("/"),window.scrollTo(0,0)}}},J=$,V=(a("b815"),Object(s["a"])(J,G,H,!1,null,"ce251266",null)),B=V.exports,F={name:"BLOG_POST",components:{postBody:R,indexMenu:B},data(){return{shouldFloatingIndexMenuShow:!0}}},Y=F,X=(a("e505"),Object(s["a"])(Y,C,x,!1,null,"4e1afaf0",null)),Q=X.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"timelnie-main-container"},[e("annual-index",{attrs:{"annual-list":t.timelineData}}),e("div",{staticClass:"extro-intro"},[t._v(" "+t._s(t.currentYearTimelineData.extraInfo)+" ")]),e("fragments-holder",{attrs:{fragments:t.currentYearTimelineData.fragments}})],1)},K=[];const q=[{annualLabel:"PAST",extraInfo:"",fragments:[{name:"異度神劍2",alias:"ゼノブレイド2",author:"",type:"game",comment:"买ns的理由。剧情老套，但是在出色的演出和音乐的加持下一切都显得动人。在夜空下，焰将火花吹向空中的样子让人无法拒绝——我一定带你去乐园！玩xb2的那段时间，白天996，但晚上捧着游戏机就能忘掉一切。",inProgress:!1,month:0,highlight:!0},{name:"生化奇兵：无限",alias:"BioShock Infinite",author:"",type:"game",comment:"剧情里的每一处演出与看似胡言乱语的细节都成了故事的伏笔，拯救世界的同时，却一步步走向自己的毁灭...这是我体验过的剧情最棒的游戏，高中有段时间极为痴迷，很长一段时间QQ头像都是Elizabeth.",inProgress:!1,month:0,highlight:!0},{name:"搏击俱乐部",alias:"BioShock Infinite",author:"",type:"game",comment:"自己看了一遍，推荐给班级同学全班看了一遍，在朋友家和朋友看了一遍。The first rule of fight club is you dont talk about fight club.",inProgress:!1,month:0,highlight:!0},{name:"怪物猎人 世界",alias:"Monster Hunter: World",author:"",type:"game",comment:"很难想象居然有这么底蕴浑厚的动作游戏。和囚二群友共斗煌黑龙、炫辉龙的场面历历在目。",inProgress:!1,month:0,highlight:!0},{name:"神界：原罪2",alias:"Divinity: Original Sin II",author:"",type:"game",comment:"",inProgress:!1,month:0,highlight:!1},{name:"空洞骑士",alias:"Hollow Knight",author:"",type:"game",comment:"地底世界衰败的美感和别出心裁的背景设计让人十分融入，我直呼艺术品。大二暑假全扑在上面了。",inProgress:!1,month:0,highlight:!0},{name:"化物語 上",alias:"バケモノガタリ",author:"西尾維新",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"化物語 下",alias:"バケモノガタリ",author:"西尾維新",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"傷物語",alias:"キズモノガタリ",author:"西尾維新",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"少女不十分",alias:"少女不十分",author:"西尾維新",type:"book",comment:"深夜我读到泪流满面，但我却无法形容出骚动我内心的情绪究竟是什么。这本小说让我认定西尾是神一般的小说家。",inProgress:!1,month:0,highlight:!0},{name:"古見同學有社交障礙 1",alias:"古見さんは、コミュ症です。",author:"小田智仁",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"古見同學有社交障礙 2",alias:"古見さんは、コミュ症です。",author:"小田智仁",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"古見同學有社交障礙 3",alias:"古見さんは、コミュ症です。",author:"小田智仁",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"古見同學有社交障礙 4",alias:"古見さんは、コミュ症です。",author:"小田智仁",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"古見同學有社交障礙 5",alias:"古見さんは、コミュ症です。",author:"小田智仁",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"古見同學有社交障礙 6",alias:"古見さんは、コミュ症です。",author:"小田智仁",type:"book",comment:"套路用尽，开始无聊。",inProgress:!1,month:0,highlight:!1}]},{annualLabel:"2022",extraInfo:"",fragments:[{name:"APEX英雄",alias:"APEX LEGENDS",author:"",type:"game",inProgress:!0,month:7,highlight:!1},{name:"艾尔登法环",alias:"Elden Ring",author:"",type:"game",inProgress:!1,month:0,comment:"无与伦比的游戏体验。战斗的手感、游戏的深度、景观的布局，角色的设计、都堪称完美。剧情的推进绵里藏针，给残破的拉妮带上指环的时候就已经无法放下这个世界了。这款游戏火爆到我身边人人都在玩，甚至还和好重朋友一起连麦玩到深夜。前有绝景！",highlight:!0},{name:"安達與島村 1",alias:"安達としまむら",author:"入間人間",type:"book",comment:"安岛小说整个系列我大概读了两三遍。多角度第一人称的切换把每个人都写活了，剧情节奏也恰到好处，气氛温馨情感细腻。让我爱不释手的一套书。社妹的愿望也是我的愿望：让所有世界的安达与岛村都能相遇。",inProgress:!1,month:0,highlight:!0},{name:"安達與島村 2",alias:"安達としまむら",author:"入間人間",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"安達與島村 3",alias:"安達としまむら",author:"入間人間",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"安達與島村 4",alias:"安達としまむら",author:"入間人間",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"安達與島村 5",alias:"安達としまむら",author:"入間人間",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"安達與島村 6",alias:"安達としまむら",author:"入間人間",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"安達與島村 7",alias:"安達としまむら",author:"入間人間",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"安達與島村 8",alias:"安達としまむら",author:"入間人間",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"安達與島村 9",alias:"安達としまむら",author:"入間人間",type:"book",comment:"",inProgress:!1,month:0,highlight:!0},{name:"異度神劍3",alias:"ゼノブレイド3",author:"",type:"game",comment:"一切不满在终盘CG过后都消散了。",inProgress:!1,month:8,highlight:!0},{name:"最终幻想VII 重制版",alias:"ファイナルファンタジーVII リメイク",author:"",type:"game",comment:"",inProgress:!1,month:9,highlight:!1},{name:"花 春之章",alias:"Flowers -Le volume sur printemps-",author:"",type:"game",comment:"",inProgress:!1,month:7,highlight:!1},{name:"花 夏之章",alias:"Flowers -Le volume sur ete-",author:"",type:"game",comment:"",inProgress:!1,month:7,highlight:!1},{name:"深海迷航",alias:"Subnautica",author:"",type:"game",comment:"",inProgress:!1,month:8,highlight:!1},{name:"漫威蜘蛛人 重製版",alias:"Marvel’s Spider-Man Remastered",author:"",type:"game",comment:"",inProgress:!1,month:9,highlight:!1},{name:"初音未来 Project DIVA MEGA39’s＋",alias:"Hatsune Miku: Project DIVA MEGA39's",author:"",type:"game",comment:"大大大大大大大大，大service💃",inProgress:!1,month:8,highlight:!0},{name:"初音未来 Project DIVA MEGA39’s＋",alias:"Hatsune Miku: Project DIVA MEGA39's",author:"",type:"game",comment:"大大大大大大大大，大service💃",inProgress:!1,month:9,highlight:!0},{name:"近月少女的礼仪",alias:"月に寄りそう乙女の作法",author:"",type:"game",comment:"推完露娜线之后就想一直留在这条线了...",inProgress:!1,month:7,highlight:!1},{name:"美好的每一天～不連續的存在～",alias:"素晴らしき日々～不連続存在～",author:"",type:"game",comment:"剧情让人着迷，角色充满魅力，配乐极为出彩",inProgress:!1,month:7,highlight:!0},{name:"少女妄想中。",alias:"少女妄想中。",author:"入間人間",type:"book",comment:"读完感觉非常温暖，让人能确凿感觉到幸福。叙事手法高超，将前后的伏笔与暗线串起来后，更能体会到这个由超现实、妄想、失去与得到所组成的美妙故事的感动。",inProgress:!1,month:0,highlight:!0},{name:"End Blue",alias:"エンドブルー",author:"入間人間",type:"book",comment:"",inProgress:!1,month:0,highlight:!1},{name:"終將成為妳 1",alias:"やがて君になる",author:"仲谷鳰",type:"book",inProgress:!1,month:0,highlight:!1},{name:"終將成為妳 2",alias:"やがて君になる",author:"仲谷鳰",type:"book",inProgress:!1,month:0,highlight:!1},{name:"終將成為妳 3",alias:"やがて君になる",author:"仲谷鳰",type:"book",inProgress:!1,month:0,highlight:!1},{name:"終將成為妳 4",alias:"やがて君になる",author:"仲谷鳰",type:"book",inProgress:!1,month:0,highlight:!1},{name:"終將成為妳 5",alias:"やがて君になる",author:"仲谷鳰",type:"book",inProgress:!1,month:0,highlight:!1},{name:"終將成為妳 6",alias:"やがて君になる",author:"仲谷鳰",type:"book",inProgress:!1,month:0,highlight:!1},{name:"終將成為妳 7",alias:"やがて君になる",author:"仲谷鳰",type:"book",inProgress:!1,month:0,highlight:!1},{name:"終將成為妳 8",alias:"やがて君になる",author:"仲谷鳰",type:"book",inProgress:!1,month:0,highlight:!1},{name:"終將成為妳 關於佐伯沙彌香 1",alias:"やがて君になる佐伯沙弥香について",author:"入間人間",type:"book",inProgress:!1,month:0,highlight:!1},{name:"終將成為妳 關於佐伯沙彌香 2",alias:"やがて君になる佐伯沙弥香について",author:"入間人間",type:"book",inProgress:!1,month:0,highlight:!1},{name:"終將成為妳 關於佐伯沙彌香 3",alias:"やがて君になる佐伯沙弥香について",author:"入間人間",type:"book",inProgress:!1,month:0,highlight:!1},{name:"說謊的男孩與壞掉的女孩 1",alias:"嘘つきみーくんと壊れたまーちゃん",author:"入間人間",type:"book",inProgress:!1,month:0,highlight:!1},{name:"创作的基因：我所爱着的MEME们",alias:"創作する遺伝子 僕が愛したMEMEたち",author:"小島秀夫",type:"book",inProgress:!1,month:7,highlight:!1},{name:"鏈鋸人",alias:"チェンソーマン",author:"藤本樹",type:"ebook",inProgress:!1,month:8,highlight:!1,comment:"很有趣的漫画！但是对我来说仅限于有趣...网络上的hype倒让我觉得有些意外。"},{name:"绯红结系",alias:"SCARLET NEXUS",author:"",type:"game",inProgress:!1,month:9,highlight:!1,comment:"对这种女主没什么抵抗力"},{name:"你和她和她的戀愛。",alias:"君と彼女と彼女の恋。",author:"",type:"game",inProgress:!1,month:0,comment:"感动、愤怒、反胃、悲伤、痛苦、留恋、满足...推完之后一度处于中毒状态。绝对的爱诞生了绝对的痛苦（物理），但是当曾根美雪泛着泪光站在我面前时却又让人无法拒绝。打破第四面墙是小，真正让我醉心的是双女主鬼斧神工般的刻画。病娇的本质不是得不到就毁掉，而是自私到毁掉你也要得到你。这是让我无法忘怀的galgame，我甚至开始害怕我的择偶观也会受其影响。让人从脊髓颤抖到胃的神作。",highlight:!0},{name:"我的小規模自殺",alias:"僕の小規模な自殺",author:"入間人間",type:"book",inProgress:!1,month:0,highlight:!1,comment:"让人感到不适，很恶心的小说。入间人间还是懂恶心人。"},{name:"Little Noah: Scion of Paradise",alias:"リトル ノア　楽園の後継者",author:"",type:"game",inProgress:!1,month:9,highlight:!1,comment:""},{name:"賽博朋克2077",alias:"Cyberpunk 2077",author:"",type:"game",inProgress:!1,month:8,highlight:!1,comment:""},{name:"千恋＊万花",alias:"千恋＊万花",author:"",type:"game",inProgress:!1,month:0,highlight:!1,comment:""},{name:"合金裝備V 原爆點",alias:"Metal Gear Solid V: Ground Zeroes",author:"",type:"game",inProgress:!1,month:10,highlight:!1,comment:""},{name:"合金裝備V 幻痛",alias:"Metal Gear Solid V: The Phantom Pain",author:"",type:"game",inProgress:!1,month:10,highlight:!0,comment:"很难概括的游戏。玩法有趣，动作系统扎实。人设和剧情上既有严肃、哲思的部分，也有通俗、流行的部分。四五年前玩过盗版，如今在steam又通关一遍，七次cloaked in silence后又能听到Quiet哼歌，依然好玩，十一几乎全扑在上面了。游戏的第二章有些草率，有虎头蛇尾之嫌，不过当听完Paz留下的录像带，看着蓝闪蝶在venom snake的义手里消失时，感觉这个游戏更加完整了一点。"}]}];var W=q,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"annula-index-main-container"},t._l(t.annualList,(function(a,n){return e("div",{key:n,class:{"annual-lable":!0,highlight:a.annualLabel===t.$route.params.year},on:{click:function(e){return t.changeAnnualIndex(a)}}},[t._v(" "+t._s(a.annualLabel)+" ")])})),0)},tt=[],et={name:"ANNUAL_INDEX",props:{annualList:Array},methods:{changeAnnualIndex(t){t.annualLabel!==this.$route.params.year&&this.$router.push({path:"/timeline/"+t.annualLabel})}}},at=et,nt=(a("528a"),Object(s["a"])(at,Z,tt,!1,null,"e4ed8ef2",null)),ot=nt.exports,it=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fragments-container"},t._l(t.monthlyList,(function([a,n]){return e("div",{key:a,staticClass:"month-section"},[e("div",{staticClass:"month-text"},a>0?[t._v(" >"+t._s(a)+"_月:__ ")]:[t._v(" 之前:< ")]),t._l(n,(function(t){return e("fragment",{key:t.name+t.month,attrs:{"fragment-data":t}})}))],2)})),0)},st=[],rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"single-fragment-container"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"right"},[e("div",{staticClass:"main-info"},[e("span",{staticClass:"name"},[t._v(t._s(t.fragmentData.name))]),t.fragmentData.highlight?e("div",{staticClass:"highlight"},[e("img",{staticClass:"mark-img",attrs:{src:"https://konfan.oss-cn-beijing.aliyuncs.com/image/article/3471096A75FF70A45419ACAD59C70733.jpg"}}),e("span",{staticClass:"highlight-text"},[t._v("真厉害")])]):t._e(),e("span",{staticClass:"cate-text"},[t._v(t._s(t.cateMap[t.fragmentData.type].name))])]),e("div",{staticClass:"sub-info"},[t.fragmentData.alias?e("span",{staticClass:"alias-text"},[t._v(t._s(t.fragmentData.alias))]):t._e(),t.fragmentData.author?e("span",{staticClass:"author-name"},[t._v("by: "+t._s(t.fragmentData.author))]):t._e()]),t.fragmentData.comment?e("div",{staticClass:"comment-section"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.shouldShowComment,expression:"!shouldShowComment"}],staticClass:"button-text button-more",on:{click:t.onClickComment}},[t._v("more")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowComment,expression:"shouldShowComment"}],staticClass:"button-text button-less",on:{click:t.hideComment}},[t._v("hide")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowComment,expression:"shouldShowComment"}],staticClass:"comment-text"},[t._v(t._s(t.fragmentData.comment))])]):t._e(),e("div")])])])},lt=[],mt={name:"FRAGMENT",props:{fragmentData:Object},data(){return{cateMap:{game:{name:"电子游戏"},book:{name:"书 纸质"},ebook:{name:"书 电子"},movie:{name:"电影"},anime:{name:"动漫"},music:{name:"音乐"}},shouldShowComment:!1}},methods:{onClickComment(){this.shouldShowComment=!0},hideComment(){this.shouldShowComment=!1}}},ht=mt,ct=(a("bfb5"),Object(s["a"])(ht,rt,lt,!1,null,"600454e8",null)),ut=ct.exports,gt={name:"FRAGMENT_HOLDER",components:{fragment:ut},props:{fragments:Array},computed:{incrementListByMonth(){const t=JSON.parse(JSON.stringify(this.fragments)),e=(t,e)=>t.month-e.month;return t.sort(e)},monthlyList(){const t=new Map;return this.incrementListByMonth.forEach(e=>{const a=e.month;t.has(a)?t.get(a).push(e):t.set(a,[e])}),t}}},pt=gt,dt=(a("5f14"),Object(s["a"])(pt,it,st,!1,null,"3f88e0b6",null)),ft=dt.exports,bt={name:"TIMELINE",components:{annualIndex:ot,fragmentsHolder:ft},data(){return{timelineData:JSON.parse(JSON.stringify(W))}},computed:{currentYearTimelineData(){var t;return(null===(t=this.timelineData.filter(t=>t.annualLabel===this.$route.params.year))||void 0===t?void 0:t[0])||{}}}},yt=bt,vt=(a("1e42"),Object(s["a"])(yt,z,K,!1,null,"22b411c0",null)),_t=vt.exports,Pt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-empty-route-container"},[t._v(" you've got the wrong door ")])},kt=[],Ct={name:"EMPTY_ROUTE"},xt=Ct,wt=Object(s["a"])(xt,Pt,kt,!1,null,null,null),jt=wt.exports;n["a"].use(h["a"]);const St=[{path:"/",name:"HomePage",component:k},{path:"/post/:route",name:"BlogPost",component:Q},{path:"/timeline/:year",name:"TimeLine",component:_t},{path:"/404",name:"EmptyRoute",component:jt}],Ot=new h["a"]({routes:St});Ot.afterEach(t=>{null===t.name&&Ot.replace({name:"EmptyRoute"})});var Dt=Ot;n["a"].config.productionTip=!1,new n["a"]({router:Dt,render:t=>t(m)}).$mount("#app")},"5f14":function(t,e,a){"use strict";a("9a26")},"61f2":function(t,e,a){"use strict";a("c494")},6768:function(t,e,a){"use strict";a("e663")},6982:function(t,e,a){},7547:function(t,e,a){"use strict";a("238f")},8059:function(t,e,a){},"84a3":function(t,e,a){"use strict";a("6982")},"84b7":function(t,e,a){},"8b82":function(t,e,a){},"9a26":function(t,e,a){},ab6c:function(t,e,a){},b648:function(t,e,a){},b815:function(t,e,a){"use strict";a("b648")},bfb5:function(t,e,a){"use strict";a("8059")},c494:function(t,e,a){},e505:function(t,e,a){"use strict";a("ab6c")},e663:function(t,e,a){}});
//# sourceMappingURL=app.48990bf1.js.map
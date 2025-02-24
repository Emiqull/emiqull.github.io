const extraReferences = [
    {
        summary: "蜗居",
        paragraphs: [
        "&#10022;蜗居(wō jū)：原意为蜗牛的住所。比喻狭小、窄小的居所、住处。常用作谦词。",
        "&#10022;元·柯丹丘《荆钗记·团圆》：“蒙君不弃，蜗居门户生光彩。”。"
        ]
    },
    {
        summary: "包罗万象",
        paragraphs: [
        "&#10022;包罗万象(bāo luó wàn xiàng)：原意为包括宇宙间的一切景象、各种事物。形容内容丰富，应有尽有。",
        "&#10022;语出《黄帝宅经》上卷：“所以包罗万象，举一千从。”。"
        ]
    },
    {
        summary: "博大精深",
        paragraphs: [
        "&#10022;博大精深(bó dà jīng shēn)：形容思想高深、学识广博。",
        "&#10022;语出明·姜世昌《逸周书》：“迄今读之，若揭日月而行千载，其博大精深之旨，非晚世学者所及。”。"
        ]
    },
    {
        summary: "栩栩如生",
        paragraphs: [
        "&#10022;栩栩如生(xǔ xǔ rú shēng)：原意为景物活泼生动，仿佛活的一样。形容形象非常逼真，如同活过来一样。",
        "&#10022;语出清·吴趼人《发财秘诀》：“那个人做得才和枣核般大，头便像一颗绿豆，手便像两粒芝麻，却做得须眉欲活，栩栩如生。”。"
        ]
    },
    {
        summary: "独树一帜",
        paragraphs: [
        "&#10022;独树一帜(dú shù yī zhì)：原意为单独树起一面旗帜。比喻品质、性格、种类等独特新奇，自成一家。",
        "&#10022;语出清·袁枚《随园诗话》：“所以能独树一帜者，正为其不袭盛唐窠臼也。”。"
        ]
    },
    {
        summary: "不胫而走",
        paragraphs: [
        "&#10022;不胫而走(bù jìng ér zǒu)：原意为没有腿却能跑。比喻不经宣传就迅速流传开来。",
        "&#10022;语出汉·孔融《论盛孝章书》：“珠玉无胫而自至者，以人好之也，况贤者之有足乎？”。"
        ]
    },
    {
        summary: "大夫",
        paragraphs: [
        "&#10022;大夫(dà fū)：古代官名。西周以后的诸侯国中，国君下有卿、大夫、士三级。后世成为一般任官职者的称呼。",
        "&#10022;《左传·僖公三十三年》：“孤之过也，大夫何罪。”。",
        "&#10022;大夫(dài fu)：医生。宋医官官阶，有大夫、郎、医效、祗候等。后世称医生为大夫。",
        "&emsp;&#10020;祗候(zhī hòu)：职官名。",
        "&#10022; 宋·洪迈《容斋三笔·医职冗滥》：“乾道三年正月，随龙医官、平和大夫、阶州团练使潘攸差判太医局，请给依能诚例支破。”。"
        ]
    },
    {
        summary: "妇孺皆知",
        paragraphs: [
        "&#10022;妇孺皆知(fù rú jiē zhī)：原意为妇女、小孩全都知道。形容简单明了的事物，众所周知。",
        "&#10022;语出《星火燎原·湘西再起》：“可是提起他（贺龙）的名字，湘鄂本的人民差不多是妇孺皆知。”。"
        ]
    },
    {
        summary: "京都",
        paragraphs: [
        "&#10022;京都(jīng dū)：京师，即帝王的都城。始称于晋，因景王(司马师)讳'师'，故称'京师'为'京都'。",
        "&#10022;清·钱大昕《廿二史考异·三国志一》：“‘黄初元年，京都有事于太庙。’晋史臣避景帝（司马师）讳，称京师为京都。”。"
        ]
    },
    {
        summary: "活字",
        paragraphs: [
        "&#10022;活字(huó zì)：用金属、木质或塑料制作的方柱形物体，一头铸着或刻着凸起的单个反着的文字、符号、字母。",
        "&#10022;中国北宋庆历年间，毕昇发明泥活字，是活字的开端。着墨排版时可以自由组合，用于印刷书籍、文章、新闻等。”。",
        "&#10022;毕昇发明的用活字排版的方法称为“活字印刷”，是中国古代“四大发明”之一，曾对世界文明进程和人类文化发展产生过重大影响。”。"
        ]
    },
    {
        summary: "文人墨客",
        paragraphs: [
        "&#10022;文人墨客(wén rén mò kè)：泛指读书、做学问的人。",
        "&#10022;语出清·韩邦庆《海上花列传》：“而那些封建旧文化培养出来的文人墨客、风流雅士，置国事于不问，整天吃花酒，作艳诗。”。",
        ]
    },
    {
        summary: "茶余饭后",
        paragraphs: [
        "&#10022;茶余饭后(chá yú fàn hòu)：泛指休息或空闲的时候。",
        "&#10022;语出元·关汉卿《斗鹌鹑·女校尉》套曲：“茶余饭饱邀故友，谢馆秦楼，散闷消愁。”。",
        "&emsp;&#10020;谢馆秦楼：指妓院。"
        ]
    },
    {
        summary: "爱不释手",
        paragraphs: [
        "&#10022;爱不释手(ài bù shì shǒu)：原意为喜爱得舍不得放手。比喻对事物非常喜欢、珍惜。",
        "&#10022;语出清·孙道乾《小螺庵病榻忆语》：“小暑日，王叔眉学博自武林归，以娱园主人画团扇相赠……儿起坐桃笙上，爱不释手。”。"
        ]
    },
    {
        summary: "寻章摘句",
        paragraphs: [
        "&#10022;寻章摘句(xún zhāng zhāi jù)：原意为旧时读书人从书本中搜寻摘抄片断语句，在写作时套用。比喻写作时堆砌现成词句，缺乏创造性。",
        "&#10022;语出晋·陈寿《三国志·吴志·吴主传》：“屈身于陛下，是其略也”裴松之注引《吴书》：“虽有余闲，博览书传历史，藉采奇异，不效诸生寻章摘句而已。”。",
        "&emsp;&#10020;效：摹仿、仿照。"
        ]
    },
    {
        summary: "眉批",
        paragraphs: [
        "&#10022;眉批(méi pī)：原意为写在书正文上端的空白处的批语。汉语改为横书后，一般写在横书的旁侧，故亦名“旁批”。",
        "&#10022;胡适《考证＜红楼梦＞的新材料》一：“抄本《脂砚斋重评石头记》第三回有墨笔眉批一条，字迹不像刘铨福，似另是一个人。”。"
        ]
    },
    {
        summary: "乐此不疲",
        paragraphs: [
        "&#10022;乐此不疲(lè cǐ bù pí)：原意为酷爱干某事而不感觉厌烦。形容对某事特别爱好而沉浸其中。",
        "&#10022;语出南朝·宋·范晔《后汉书·光武帝纪下》：“我自乐此，不为疲也。”。"
        ]
    },
    {
        summary: "至高无上",
        paragraphs: [
        "&#10022;至高无上(zhì gāo wú shàng)：高到顶点，再也没有更高的了。形容登峰造极，没有能相比的。",
        "&#10022;语出西汉·刘安《淮南子·缪称训》：“道至高无上，至深无下。”。"
        ]
    },
    {
        summary: "细民",
        paragraphs: [
        "&#10022;细民(xì mín)：平民；老百姓。",
        "&#10022;语出《晏子春秋·谏下二十》：“遂欲满求，不顾细民，非存之道。”。"
        ]
    },
    {
        summary: "举凡",
        paragraphs: [
        "&#10022;举凡(jǔ fán)：凡是(下文列举)；列举、例如。",
        "&#10022;清·戴名世《恭纪睿赐慈额序》：“今东宫所赐‘慈教’二言，举凡天秩、天敍、人纲、人纪、先王之至德要道，皆包含櫽括于其中。”。"
        ]
    },
    {
        summary: "《春秋》笔法",
        paragraphs: [
        "&#10022;《春秋》笔法(chūn qiū bǐ fá)：《春秋》是鲁国史书，相传为孔子修撰。经学家认为其一字一语都寓褒贬，故后世称文笔曲折而意含褒贬的文字为“春秋笔法”。",
        "&emsp;&#10020;经学：原泛指先秦各家学说要义的学问，但在汉代独尊儒术后特指研究儒家经典，解释其字面意义、阐明其蕴含义理的学问。",
        "&#10022;语出宋·俞文豹《吹剑录》：“盖纯用《春秋》笔法也。”。"
        ]
    },
    {
        summary: "扑朔迷离",
        paragraphs: [
        "&#10022;扑朔迷离(pū shuò mí lí)：原意指把兔子的耳朵提起时，雄兔的两只脚时常动弹，雌兔的两只眼时常眯着，雌雄容易分辨；但一起在地上奔跑时就难以分别雌雄了。形容事情错综复杂，不容易看清真相。",
        "&#10022;语出南宋·郭茂倩《乐府诗集·横吹曲辞五·木兰诗》：“雄兔脚扑朔，雌兔眼迷离。双兔傍地走，安能辨我是雄雌？”。"
        ]
    },
    {
        summary: "不屑",
        paragraphs: [
        "&#10022;不屑(bù xiè)：形容对某事物非常轻视，不值得。",
        "&#10022;语出《诗·鄘风·君子偕老》：“鬓发如云，不屑髢也。”。"
        ]
    },
    {
        summary: "完璧",
        paragraphs: [
        "&#10022;完璧(wán bì)：本义为完美的玉石，比喻事物完美无缺或完整、没有遗漏。",
        "&#10022;语出明·沉德符《野获编补遗·言事·疏论夺情》：“林庄敏，一代名臣，非后生所敢擅议，此事亦完璧之瑕云。”。"
        ]
    },
    {
        summary: "未遑",
        paragraphs: [
        "&#10022;未遑(wèi huáng)：没有时间顾及、来不及做某事。",
        "&#10022;语出汉·扬雄《羽猎赋》：“立君臣之节，崇贤圣之业。未遑苑囿之丽、游猎之靡也。”。"
        ]
    },
    {
        summary: "良莠不齐",
        paragraphs: [
        "&#10022;良莠不齐(liáng yǒu bù qí)：原意指狗尾草(即莠)很像谷子，混在禾苗中难以分别。比喻好人坏人都有，难以分辨。",
        "&#10022;语出清·纪昀《阅微草堂笔记》：“至我辈中，好丑不一，亦如人类之内，良莠不齐。”。"
        ]
    },
    {
        summary: "鲁鱼亥豕",
        paragraphs: [
        "&#10022;鲁鱼亥豕(lǔ yú hài shǐ)：原意指把“鲁”字错成“鱼”字，把“亥”字错成“豕”字。泛指传写或刻印中的文字错误。",
        "&#10022;语出战国·吕不韦《吕氏春秋·察传》：“有读史记者曰：‘晋师三豕涉河。’子夏曰：‘非也，是己亥也。夫己与三相近，豕与亥相似。’”。"
        ]
    },
    {
        summary: "强弩之末",
        paragraphs: [
        "&#10022;强弩之末(qiáng nǔ zhī mò)：原意为强弩所发的矢，飞行已达末程。比喻强大的力量已经衰弱，起不了什么作用。",
        "&#10022;语出西汉·司马迁《史记·韩安国传》：“强弩之末，矢不能穿鲁缟。”。",
        "&emsp;&#10020;鲁缟：古代鲁地出产的一种白色细薄的生绢。"
        ]
    },
    {
        summary: "五里雾",
        paragraphs: [
        "&#10022;五里雾(wǔ lǐ wù)：原意为东汉张楷施法术所制造的云雾。比喻比喻模糊恍惚、不明真相的境界。",
        "&#10022;语出《后汉书·张楷传》：“性好道术，能作五里雾。”。",
        ]
    },
    {
        summary: "忍心害理",
        paragraphs: [
        "&#10022;忍心害理(rěn xīn hài lǐ)：心地残忍，伤天害理。",
        "&#10022;语出清·李汝珍《镜花缘》：“此时若教抛撇祖父，一人独去，即使女儿心如铁石，亦不能忍心害理至此。”。",
        ]
    },
    {
        summary: "狗尾续貂",
        paragraphs: [
        "&#10022;狗尾续貂(gǒu wěi xù diāo)：原意为官员的貂尾帽子长度不够，用狗尾接长。比喻拿不好的东西补接好的东西，非常不相称。",
        "&#10022;语出宋·孙光宪《北梦琐言》第18卷：“乱离以来，官爵过滥，封王作辅，狗尾续貂。”。",
        ]
    },
    {
        summary: "抹煞",
        paragraphs: [
        "&#10022;抹煞(mǒ shā)：消除、一笔勾销、一概不计。",
        "&#10022;语出清·黄轩祖《游梁琐记·顾加蘅》：“生审之，惭怒曰：‘吾此联岂抹煞一郡人，伧奴何得无礼？’”。",
        ]
    },
    {
        summary: "同好",
        paragraphs: [
        "&#10022;同好(tóng hào)：志趣相投，有相同爱好的人。",
        "&#10022;语出《左传·僖公四年》：“齐侯曰：‘岂不穀是为？先君之好是继。与不穀同好如何？’”。",
        "&emsp;&#10020;不穀：不善。古代王侯自称的谦词。",
        "&emsp;&#10020;《老子》：“贵以贱为本，高以下为基，是以侯王自谓孤、寡、不穀。”。",
        ]
    },
    {
        summary: "纠葛",
        paragraphs: [
        "&#10022;纠葛(jiū gé)：原意为葛蔓纠结，难以理清。比喻纠缠不清的事情，难以挣脱的困难。",
        "&#10022;《上海小刀会起义史料汇编·吉尔杭阿致上海英领事照会》：“惟该处与各国洋房贴近，诚恐彼此尚有纠葛，今将再行约定事宜具列于后。”。",
        ]
    },
    {
        summary: "公说公有理，婆说婆有理",
        paragraphs: [
        "&#10022;公说公有理，婆说婆有理：原意为公公说的有公公的道理，婆婆说的有婆婆的道理。比喻双方争执不下，各持己见。",
        "&#10022;语出朱自清《公园》：“公说公有理，婆说婆有理，井水不犯河水。”。",
        ]
    },
    {
        summary: "择善而从",
        paragraphs: [
        "&#10022;择善而从：选择好的学，按照好的做。",
        "&#10022;语出《论语·述而》：“三人行，必有我师焉。择其善者而从之，其不善者而改之。”。",
        ]
    },
    {
        summary: "省亲",
        paragraphs: [
        "&#10022;省亲(xǐng qīn)：探望父母或其他尊亲。",
        "&#10022;《新唐书·卓行传·阳城》：“凡学者，所以学为忠与孝也。诸生有久不省亲者乎？”。",
        ]
    },
    {
        summary: "丈二金刚，摸不着头脑",
        paragraphs: [
        "&#10022;丈二金刚，摸不着头脑：古时人的身高为八尺左右，举起手来也不过是一丈。故原意为身高一丈二尺的和尚，摸不到自己的头。比喻弄不明情况，搞不清底细。",
        "&#10022;语出明·周楫《西湖二集》卷二八：“丈二长的和尚，摸不着头脑。”。",
        ]
    },
    {
        summary: "杞人忧天",
        paragraphs: [
        "&#10022;杞人忧天(qǐ rén yōu tiān)：原意为杞国有个人整天怕天塌下来而忧心不已。比喻不必要的或缺乏根据的忧虑和担心。",
        "&#10022;语出战国·郑·列御寇《列子·天瑞》：“杞国有人，忧天地崩坠，身亡所寄，废寝食者。”。",
        "&emsp;&#10020;列御寇：相传为战国·郑人。"
        ]
    },
    {
        summary: "背道而驰",
        paragraphs: [
        "&#10022;背道而驰(bèi dào ér chí)：原意为朝相反的方向跑去。比喻彼此的方向和目的完全相反。",
        "&#10022;语出唐·柳宗元《〈杨评事文集〉后序》：“其余各探一隅，相与背驰于道者，其去弥远。”。",
        ]
    },
    {
        summary: "不胜枚举",
        paragraphs: [
        "&#10022;不胜枚举(bù shèng méi jǔ)：原意为不能一个个地列举出来。形容数量很多。",
        "&#10022;语出清·钱大昕《十驾斋养新录》：“而宋人撰述不见于志者，又复不胜枚举。”。",
        ]
    },
    {
        summary: "膏粱",
        paragraphs: [
        "&#10022;膏粱(gāo liáng)：原意为肥肉和细粮。泛指肥美的食物。借指富贵人家子弟。",
        "&#10022;《孟子·告子上》：“诗云：既醉以酒，既饱以德。言饱乎仁义也，所以不愿人之膏粱之味也。”。",
        "&#10022;《新唐书·卷九五·高俭传》：“先宗室，后外戚；退新门，进旧望；右膏粱，左寒畯。”。",
        ]
    },
    {
        summary: "纨袴",
        paragraphs: [
        "&#10022;纨袴(wán kù)：原意为细绢制的裤子。泛指华美的衣着。借指富贵人家子弟。",
        "&#10022;《汉书·叙传上》：“数年，金华之业绝，出与王、许子弟为群，在于绮襦纨裤之间，非其好也。”颜师古注：“纨，素也。绮，今细绫也。并贵戚子弟之服。”。",
        "&#10022;唐·杜甫《奉赠韦左丞丈二十二韵》：“纨袴不饿死，儒冠多误身。”。",
        ]
    },
    {
        summary: "方家",
        paragraphs: [
        "&#10022;方家(fāng jiā)：“大方之家”的简称，原意为道术修养深厚精湛的人，后多指饱学之士或精通某种学问、技艺的人。",
        "&#10022;语出《庄子·秋水》：“吾长见笑于大方之家。”成玄英疏：“方，犹道也。”。",
        "&#10022;陈毅《致阿英书》：“敝帚自珍，不值方家一笑。”。",
        ]
    },
    {
        summary: "空穴来风",
        paragraphs: [
        "&#10022;空穴来风(kōng xuè lái fēng)：原意为有了洞穴后才进风。比喻消息和谣言的传播不是完全没有原因的。",
        "&#10022;语出战国·楚·宋玉《风赋》：“臣闻于师：‘枳句来巢，空穴来风。’”。",
        ]
    },
    {
        summary: "达官显宦",
        paragraphs: [
        "&#10022;达官显宦(dá guān xiǎn huàn)：原意为职位高而声势显赫的官员。比喻身份尊贵、社会地位显要的人。",
        "&#10022;语出清·昭槤《啸亭杂录·王树勋》：“蒋子蒲、庞士冠等词垣名流，甘列弟子之位，其余达官显宦为其门人者无算。”。",
        ]
    },
    {
        summary: "眼花缭乱",
        paragraphs: [
        "&#10022;眼花缭乱(yǎn huā liáo luàn)：原意为看着复杂纷繁的东西而感到迷乱。也比喻事物复杂，无法辨清。",
        "&#10022;语出元·王实甫《西厢记》第一本第一折：“似这般可喜娘的庞儿罕曾见，则着人眼花撩乱口难言，魂灵儿飞在半天。”。",
        ]
    },
    {
        summary: "挞伐",
        paragraphs: [
        "&#10022;挞伐(tà fá)：原意为军队迅速攻伐、讨伐。引申为大规模的声讨、指责。",
        "&#10022;《诗·商颂·殷武》：“挞彼殷武，奋伐荆楚。”毛传：“挞，疾意也。”。",
        "&#10022;秦牧《长街灯语·发扬社会主义民主和繁荣革命文学艺术》：“草菅人命的事件，在报纸上不时公开出来，大张挞伐。”。",
        ]
    },
    {
        summary: "语无伦次",
        paragraphs: [
        "&#10022;语无伦次(yǔ wú lún cì)：指讲话乱七八糟，毫无次序。",
        "&#10022;语出《宋·胡仔《苕溪渔隐丛话》第七卷引《诗眼》：“古人律诗亦是一片文章，语或似无论次，而意若贯珠。”。",
        ]
    },
    {
        summary: "不识好歹",
        paragraphs: [
        "&#10022;不识好歹(bù shí hǎo dǎi)：不知道什么是好，什么是坏。指人不辨是非，不懂别人的好意。",
        "&#10022;语出明·吴承恩《西游记》第26回：“你这泼猴，不识好歹！”。",
        ]
    },
];


const musclesPracticeSources=[
 {
  "id": "MPRROTATION",
  "title": "Fan JZ, Liu X, Ni GX. Angular Velocity Affects Trunk Muscle Strength and EMG Activation during Isokinetic Axial Rotation（2014）",
  "url": "https://pubmed.ncbi.nlm.nih.gov/24804227/",
  "type": "原始肌電與運動研究",
  "note": "核對軀幹軸向旋轉中對側腹外斜肌與同側腹內斜肌的協作；研究條件下的肌肉活化不當成所有姿勢的唯一規則。"
 }
];
anatomySources.push(...musclesPracticeSources);
/* Original formative exercises based on each chapter's cited anatomy; separate from official past papers. */
const musclesPractice={
 "muscles2": {
  "accessory-suboccipital": {
   "question": "在枕下三角原圖中，已找出三條肌性邊界。若要標出三角內的神經，最適合填哪一個？",
   "choices": [
    {
     "text": "枕下神經 suboccipital nerve（C1後支）",
     "why": "先定位深層枕下三角 → 找C1後支供應枕下肌 → 不能用後頸表面感覺神經取代。"
    },
    {
     "text": "枕大神經 greater occipital nerve（C2後支）",
     "why": "C2後支與頭半棘肌、頭下斜肌周圍有關，但不能直接當枕下三角的典型神經內容物。"
    },
    {
     "text": "副神經 accessory nerve（XI）",
     "why": "XI供胸鎖乳突肌和斜方肌，不是枕下三角內的典型神經。"
    }
   ],
   "correct": 0,
   "hook": "深三角想C1，頭皮感覺另找C2。",
   "limit": "這是區域定位鉤子，不等於C1沒有變異或把所有後頸肌都歸C1。",
   "sources": [
    "M2BACK"
   ]
  },
  "cervical-fascia": {
   "question": "畫頸動脈鞘 carotid sheath 橫切圖時，哪一個配置最符合典型關係？",
   "choices": [
    {
     "text": "交感幹與迷走神經都在鞘內",
     "why": "交感幹典型位在鞘後方、與椎前筋膜相關；不能因位置接近就放入同一包。"
    },
    {
     "text": "頸神經襻 ansa cervicalis 是鞘內與動脈並行的主要內容",
     "why": "頸神經襻通常與鞘前壁相關，不能直接取代鞘內三大主要構造。"
    },
    {
     "text": "動脈、內頸靜脈與迷走神經在鞘內；交感幹在鞘後方",
     "why": "先畫鞘內的動脈與內頸靜脈 → 迷走神經置於兩者後方之間 → 再把交感幹放回鞘後方筋膜相關位置。"
    }
   ],
   "correct": 2,
   "hook": "先記鞘內三件，再畫壁與後方。",
   "limit": "筋膜命名和細部附著有不同模型；本題只練典型鞘內／壁／後方關係。",
   "sources": [
    "M2FASCIA"
   ]
  },
  "diaphragm": {
   "question": "固定肋骨周邊附著，橫膈 diaphragm 收縮時，哪個因果鏈最合理？",
   "choices": [
    {
     "text": "食道裂孔必須完全關閉，才能讓胸腔容積增加",
     "why": "吸氣的容積變化不需要以食道裂孔完全關閉作前提；通道和肌肉收縮是兩個問題。"
    },
    {
     "text": "中央腱下降 → 胸腔垂直徑增加 → 有助吸氣",
     "why": "先看穹隆肌纖維收縮 → 中央腱往下移、穹隆變平 → 胸腔垂直徑增加。不要把呼氣回彈的方向套到吸氣收縮。"
    },
    {
     "text": "中央腱上升 → 胸腔垂直徑增加 → 有助吸氣",
     "why": "中央腱上移通常會減少胸腔垂直空間，和本題設定方向相反。"
    }
   ],
   "correct": 1,
   "hook": "吸氣降穹隆，通道另定位。",
   "limit": "本題固定周邊來看主要作用；不能用它否認腹壓及其他呼吸肌對運動的影響。",
   "sources": [
    "M2THORAX"
   ]
  },
  "posterior-wall": {
   "question": "兩條肌肉都止於股骨小轉子 lesser trochanter。只因它們共同行動，能否把腰大肌 psoas major 和髂肌 iliacus 都配股神經？",
   "choices": [
    {
     "text": "不能：腰大肌主要腰神經前支；髂肌股神經",
     "why": "先認共同止點與屈髖作用 → 再逐條回神經來源 → 共用肌腱或作用不代表神經一定相同。"
    },
    {
     "text": "可以：共同止點代表相同神經",
     "why": "起止或作用相近，仍可能來自不同神經；不能從共同止點跳過神經欄。"
    },
    {
     "text": "不能：腰大肌由閉孔神經支配",
     "why": "腰大肌主要由腰神經直接分支供應，不是以閉孔神經作標準配對。"
    }
   ],
   "correct": 0,
   "hook": "同止點可合做，神經仍逐條配。",
   "limit": "「髂腰肌」可作功能群名稱；遇到神經題必須拆成各成分。",
   "sources": [
    "M2ABDOMEN"
   ]
  },
  "scalenes": {
   "question": "前斜角肌 anterior scalene 已畫在第1肋上。要把鎖骨下靜脈放回圖上，應放在哪裡？",
   "choices": [
    {
     "text": "前、中斜角肌之間，與臂叢完全同一通道",
     "why": "肌間通道主要放動脈與臂叢；靜脈不能跟著塞進去。"
    },
    {
     "text": "前斜角肌後方且必在頸動脈鞘內",
     "why": "鎖骨下靜脈不因此變成頸動脈鞘內容；此選項混了兩個區域分類。"
    },
    {
     "text": "前斜角肌前方",
     "why": "先用前斜角肌當分隔 → 靜脈在前 → 鎖骨下動脈與臂叢主要走前、中斜角肌間。"
    }
   ],
   "correct": 2,
   "hook": "斜角肌前靜、肌間動脈臂叢。",
   "limit": "先確認看圖方向；不要把紙面左、右直接當肌肉前、後。",
   "sources": [
    "M2SCAL"
   ]
  },
  "intercostals": {
   "question": "將肋間主神經血管束的上下順序答成VAN後，題目改問肌層位置。應如何回答？",
   "choices": [
    {
     "text": "最內肋間肌與壁胸膜之間就是典型主束位置",
     "why": "胸膜位得更深；不能將主束直接放到最深一層而略過最內肋間肌。"
    },
    {
     "text": "內肋間肌與最內肋間肌之間",
     "why": "先固定主束沿肋溝走 → 上下是V-A-N → 深淺另定位在內與最內肋間肌間。兩種方向不能互相取代。"
    },
    {
     "text": "外肋間肌與內肋間肌之間",
     "why": "這是較淺的肌間層，與典型主束所在層不同。"
    }
   ],
   "correct": 1,
   "hook": "上下VAN，深淺內與最內間。",
   "limit": "這是主束典型關係，不能推成肋骨另一緣完全沒有側支血管神經。",
   "sources": [
    "M2THORAX"
   ]
  },
  "serratus": {
   "question": "只根據前鋸肌 serratus anterior 的肋骨到肩胛骨肋面內側緣路徑，哪個功能最合理？",
   "choices": [
    {
     "text": "將肩胛骨帶向胸廓前外側，並協助貼穩胸壁",
     "why": "固定肋骨 → 沿肌肉繞胸廓的方向看肩胛骨 → 得出前引及固定胸壁的作用；上轉另與其他肌協同。"
    },
    {
     "text": "將肩胛骨內側緣拉離胸壁，作為正常主要功能",
     "why": "內側緣離胸壁是可見的異常表現之一，不能當作正常主要收縮作用。"
    },
    {
     "text": "直接讓肱骨在盂肱關節伸展",
     "why": "前鋸肌不直接附於肱骨，應先推肩胛骨動作，不跳到肱骨伸展。"
    }
   ],
   "correct": 0,
   "hook": "先拉肩胛，才接上臂動作。",
   "limit": "翼狀肩胛不是單靠一張外觀就能確診長胸神經損傷，需比較其他肌群。",
   "sources": [
    "M3AXILLA"
   ]
  },
  "back-muscles": {
   "question": "同樣都在背面，哪個分類最有助於分辨神經？",
   "choices": [
    {
     "text": "所有背面肌肉都由脊神經後支",
     "why": "背側位置不代表同一發育或神經群；闊背肌、菱形肌等不能一律放後支。"
    },
    {
     "text": "所有背肌都由副神經XI",
     "why": "XI主要對應斜方肌與胸鎖乳突肌，不是所有背肌。"
    },
    {
     "text": "本體背肌多由脊神經後支；多數附肢相關淺背肌另循各自神經",
     "why": "先問肌群是本體背肌還是移動肩帶／上肢的肌 → 再配神經 → 不用「看得到在背上」取代分類。"
    }
   ],
   "correct": 2,
   "hook": "位置在背，不等於神經都走後支。",
   "limit": "多數規則仍要回各肌表；例如斜方肌有其腦神經運動來源與頸神經相關成分。",
   "sources": [
    "M2BACK",
    "M2SUPER"
   ]
  },
  "abdominal-muscles": {
   "question": "固定骨盆、軀幹向左旋轉時，哪組腹斜肌配對最合理？",
   "choices": [
    {
     "text": "兩側腹橫肌是產生左旋的唯一主要肌群",
     "why": "腹橫肌重要於壓迫腹內容和穩定，不能把左旋唯一歸給它。"
    },
    {
     "text": "右腹外斜肌＋左腹內斜肌",
     "why": "先固定骨盆 → 外斜肌產生對側旋轉、內斜肌同側旋轉 → 左轉可由右外斜與左內斜協同。"
    },
    {
     "text": "左腹外斜肌＋右腹內斜肌",
     "why": "這組主要偏向相反的右旋方向；錯在把外斜和內斜的同／對側規則互換。"
    }
   ],
   "correct": 1,
   "hook": "外斜對、內斜同；先說固定端。",
   "limit": "固定胸廓而移動骨盆時，描述參考端會改變，不能省略本題的固定骨盆條件。",
   "sources": [
    "M2ABDOMEN",
    "MPRROTATION"
   ]
  },
  "wall-landmarks": {
   "question": "腹壁原圖出現兩條「線」：一條在腹直肌外側緣，一條標示後鞘腱膜層次改變。如何配對？",
   "choices": [
    {
     "text": "外側緣是半月線；後鞘轉變是弓狀線",
     "why": "先看是表面縱向邊界還是深層鞘變化 → 半月線界定腹直肌外側相關邊界 → 弓狀線是後鞘腱膜下緣相關轉變。"
    },
    {
     "text": "外側緣是弓狀線；後鞘轉變是白線",
     "why": "白線在中線；弓狀線不是腹直肌外側縱邊。此選項同時錯了方向和層次。"
    },
    {
     "text": "兩者都只是腹直肌表面的腱劃",
     "why": "腱劃是肌腹橫向的纖維分隔；不能替代半月線與弓狀線。"
    }
   ],
   "correct": 0,
   "hook": "白中、半月側、弓狀看後鞘。",
   "limit": "弓狀線高度有變異，口訣定位性質不能當成每人固定高度。",
   "sources": [
    "M2LAND",
    "M2WALL"
   ]
  },
  "rectus-sheath": {
   "question": "弓狀線以下畫完腹直肌後，還要繼續往深面加哪一層？",
   "choices": [
    {
     "text": "立刻直接接腹腔，因為後鞘不存在",
     "why": "缺腱膜性後鞘不等於所有深層構造消失，也不是肌肉直接裸露在腹腔。"
    },
    {
     "text": "三層腹肌腱膜全都移到腹直肌後面",
     "why": "方向剛好顛倒；線下的典型變化是三層腱膜到前方。"
    },
    {
     "text": "腹橫筋膜 transversalis fascia，其後仍有腹膜外組織與壁腹膜",
     "why": "先追三層腱膜主要移到前方 → 後面少的是腱膜性後鞘 → 腹橫筋膜等深面層次仍保留。"
    }
   ],
   "correct": 2,
   "hook": "缺後鞘，不缺深面所有層。",
   "limit": "上述為常用典型分層；個體腱膜排列與弓狀線形態可有變異。",
   "sources": [
    "M2WALL"
   ]
  },
  "inguinal-intro": {
   "question": "由腹壁層次推精索包被，內精索筋膜 internal spermatic fascia 最直接對應哪一層？",
   "choices": [
    {
     "text": "腹外斜肌腱膜 external oblique aponeurosis",
     "why": "腹外斜肌腱膜與外精索筋膜相關，不能用來配最內一層。"
    },
    {
     "text": "腹橫筋膜 transversalis fascia",
     "why": "先分肌肉與同名筋膜 → 深腹股溝環在腹橫筋膜 → 由此連到內精索筋膜。"
    },
    {
     "text": "腹橫肌 transversus abdominis 肌腹",
     "why": "腹橫肌與腹橫筋膜不是同一構造；腹橫肌不按字面另外給一層相同名稱包被。"
    }
   ],
   "correct": 1,
   "hook": "內精索取自腹橫筋膜；外精索找外斜。",
   "limit": "此題練男性精索層次；不把各性別通道內容當完全相同。",
   "sources": [
    "M2ING"
   ]
  },
  "rapid-review": {
   "question": "複習時將膈神經 phrenic nerve 和副神經XI都背成「頸部神經」。哪個拆法能修正混淆？",
   "choices": [
    {
     "text": "膈神經連橫膈；XI連胸鎖乳突與斜方肌，先用功能分群",
     "why": "先問呼吸穹隆或肩頸動作 → 呼吸找膈神經C3–5 → 胸鎖乳突與斜方肌主要運動來源找XI。"
    },
    {
     "text": "膈神經負責所有肩胛上轉肌",
     "why": "肩胛上轉需多肌協作，不是以膈神經統一支配。"
    },
    {
     "text": "XI是橫膈主要運動神經",
     "why": "橫膈主要運動支配為膈神經；XI不因經頸部就接手呼吸肌。"
    }
   ],
   "correct": 0,
   "hook": "同過頸部，終點不同就分開。",
   "limit": "本題只比較主要運動路徑，不用它取代各區感覺、交感或本體感覺纖維的完整表。",
   "sources": [
    "M2NECK",
    "M2THORAX"
   ]
  }
 },
 "muscles3": {
  "pelvic-diaphragm": {
   "question": "將骨盆底所有肌肉都塗成陰部神經 pudendal nerve 支配，哪個修改最必要？",
   "choices": [
    {
     "text": "把提肛肌改成骨盆內臟神經的副交感運動支配",
     "why": "提肛肌是骨骼肌，不能把薦神經直接運動分支換成骨盆內臟神經的副交感路徑。"
    },
    {
     "text": "把全部會陰骨骼肌都改成薦神經直接支配",
     "why": "這又走到另一個極端：多條會陰肌及外括約肌仍與陰部神經相關，不能全部改成直接支。"
    },
    {
     "text": "提肛肌 levator ani 要保留薦神經直接分支的支配",
     "why": "先辨骨盆膈與會陰肌不是一群 → 提肛肌有薦神經直接分支 → 不能把會陰體神經規則無限放大。"
    }
   ],
   "correct": 2,
   "hook": "骨盆膈先拆出，別全配陰部。",
   "limit": "細部分支與命名依研究可有差異；此鉤子只用來避免「全部陰部神經」的過度簡化。",
   "sources": [
    "M3LEVATOR"
   ]
  },
  "continence": {
   "question": "側面圖中，恥骨直腸肌 puborectalis 放鬆時，最直接改變哪個機械關係？",
   "choices": [
    {
     "text": "只改變尿道外括約肌，與肛直腸角無關",
     "why": "恥骨直腸肌繞肛直腸接合處的路徑直接影響角度，不能改配到尿道外括約肌。"
    },
    {
     "text": "肛直腸吊帶張力減少，肛直腸角較能打開",
     "why": "先找繞過肛直腸接合處的吊帶 → 收縮有助維持彎折 → 放鬆讓彎折較能打開，與括約肌協調。"
    },
    {
     "text": "主要只改變內肛門括約肌的平滑肌張力",
     "why": "本題先看恥骨直腸肌吊帶的機械作用；內括約肌平滑肌張力是另一個調控問題。"
    }
   ],
   "correct": 1,
   "hook": "吊帶管角度，括約肌管管口。",
   "limit": "兩者是協調模型，不能把控便完全歸給一條肌肉或一個角度。",
   "sources": [
    "M3PELVIC"
   ]
  },
  "perineum-map": {
   "question": "會陰菱形圖要分尿生殖三角與肛門三角，應先連哪兩個地標？",
   "choices": [
    {
     "text": "左右坐骨結節 ischial tuberosities",
     "why": "先圈會陰菱形四角 → 橫連兩坐骨結節 → 前方尿生殖三角、後方肛門三角。"
    },
    {
     "text": "左右髂前上棘 ASIS",
     "why": "ASIS太前上方，不是這條會陰分界線的兩端。"
    },
    {
     "text": "恥骨聯合與尾骨尖",
     "why": "這是會陰前後中線方向，不能分成前後兩個三角。"
    }
   ],
   "correct": 0,
   "hook": "兩坐骨一橫線，前尿生殖後肛門。",
   "limit": "先確認是下視會陰圖；不能把骨盆入口或腹壁表面圖的線直接套用。",
   "sources": [
    "M3TOPO"
   ]
  },
  "superficial-pouch": {
   "question": "女性大前庭腺 greater vestibular gland 要放到以會陰膜為基準的哪個區域？",
   "choices": [
    {
     "text": "深會陰區，與男性尿道球腺直接當同一位置",
     "why": "男性尿道球腺和女性大前庭腺的位置不能一比一硬套為同一深度。"
    },
    {
     "text": "坐骨肛門窩脂肪中央",
     "why": "坐骨肛門窩是肛門旁的脂肪空間，不是大前庭腺的標準定位。"
    },
    {
     "text": "淺會陰隙 superficial perineal pouch",
     "why": "先辨性別與腺體名稱 → 大前庭腺放在會陰膜下方的淺會陰隙 → 同源或相似功能不等於成人位置相同。"
    }
   ],
   "correct": 2,
   "hook": "先性別、再腺名、最後看膜上下。",
   "limit": "這個題目只定位腺體，不代表淺隙的全部內容或完整引流路徑。",
   "sources": [
    "M3GENITAL"
   ]
  },
  "deep-pouch": {
   "question": "核對現代女性會陰膜解剖時，哪種讀法較合理？",
   "choices": [
    {
     "text": "將會陰膜當提肛肌本身的另一名字",
     "why": "會陰膜與提肛肌位於不同層次、是不同結構。"
    },
    {
     "text": "當成立體支持與周圍結構連續的系統，再辨括約肌複合體",
     "why": "先以會陰膜定位 → 參照現代解剖所見的三維連續性 → 不把舊式尿生殖膈三層圖當女性唯一模型。"
    },
    {
     "text": "一律畫成兩張完整筋膜夾一片橫肌，男女完全相同",
     "why": "舊式三層夾心模型過度簡化女性結構，忽略與周邊支持組織的連續。"
    }
   ],
   "correct": 1,
   "hook": "女性先看連續支持，不硬套三層夾心。",
   "limit": "這是對模型的核對；不能推成會陰膜不存在，或把所有深會陰結構合成一層。",
   "sources": [
    "M3MEMBRANE",
    "M3MRI"
   ]
  },
  "pouch-comparison": {
   "question": "同一構造在下視圖似乎位於「上面」，在冠狀圖又位於「下面」。分類淺深會陰隙前，最應先做什麼？",
   "choices": [
    {
     "text": "先找會陰膜並固定解剖上下，再判構造位於膜哪一側",
     "why": "先定觀看方向 → 以同一會陰膜認回兩張圖 → 解剖上下不隨畫面旋轉而改變。"
    },
    {
     "text": "依螢幕上方一律判為深",
     "why": "螢幕上下是排版座標，不保證等於身體上下或淺深。"
    },
    {
     "text": "依名稱含「球」就一律判為深",
     "why": "名稱不能代替實際層次；需依構造與膜的關係定位。"
    }
   ],
   "correct": 0,
   "hook": "先認膜，再分上下；別拿紙面當身體。",
   "limit": "深淺空間的精細界定會依教材模型不同；先確認本頁採用的膜與空間定義。",
   "sources": [
    "M3TOPO",
    "M3MEMBRANE"
   ]
  },
  "fascia-spread": {
   "question": "男性海綿體部尿道與Buck筋膜都破損，尿液進入淺會陰空間。若沿連續膜性筋膜向前擴散，較合理的路徑是？",
   "choices": [
    {
     "text": "必定自由擴散到大腿整個皮下",
     "why": "Scarpa筋膜與大腿闊筋膜等附著限制路徑，不能推成所有大腿皮下都自由連通。"
    },
    {
     "text": "所有尿道損傷都一定沿同一路徑",
     "why": "其他部位尿道損傷或Buck筋膜完整時，可能走不同平面；本題條件不能省略。"
    },
    {
     "text": "可沿Colles／Scarpa相關平面到前下腹壁",
     "why": "先用本題的破裂位置與Buck筋膜破損條件 → 判液體已進淺層平面 → 再沿Colles與Scarpa連續性推可能分布。"
    }
   ],
   "correct": 2,
   "hook": "先破哪裡、再哪層、最後沿筋膜走。",
   "limit": "本題只練解剖擴散模型，不拿它作所有尿道外傷的臨床判斷規則。",
   "sources": [
    "M3SCARPA"
   ]
  },
  "pudendal-neurovascular": {
   "question": "比較陰部神經與骨盆內臟神經 pelvic splanchnic nerves，何者最能避免混背？",
   "choices": [
    {
     "text": "兩者因都來自薦段，所以功能完全一樣",
     "why": "根段重疊不代表纖維種類、神經路徑或靶器官功能相同。"
    },
    {
     "text": "陰部神經主要體感覺與體運動；勃起相關副交感另循骨盆內臟神經路徑",
     "why": "先分體神經與自主神經 → 陰部神經連會陰感覺／外括約等體運動 → 副交感相關路徑另列。"
    },
    {
     "text": "陰部神經就是勃起副交感節前纖維唯一來源",
     "why": "陰部神經不是骨盆副交感節前纖維的同義詞。"
    }
   ],
   "correct": 1,
   "hook": "同薦段也要先分體與自主。",
   "limit": "性功能是多路徑協同，不能縮成單一神經開關。",
   "sources": [
    "M3GENITAL",
    "M3PELVIC"
   ]
  },
  "ischioanal-fossa": {
   "question": "在坐骨肛門窩 ischioanal fossa 冠狀圖上，陰部管 pudendal canal 應放在哪裡？",
   "choices": [
    {
     "text": "外側壁的閉孔內肌筋膜相關位置",
     "why": "先辨內側肛管、上內側骨盆膈 → 外側找閉孔內肌及筋膜 → 管沿外側壁，不在脂肪中央任意漂浮。"
    },
    {
     "text": "中央脂肪堆內任意懸空",
     "why": "脂肪空間與沿壁筋膜管是兩種定位，不能混成一處。"
    },
    {
     "text": "提肛肌上方的骨盆腔中央",
     "why": "這把會陰外側壁的管放到骨盆腔內，層次過高。"
    }
   ],
   "correct": 0,
   "hook": "窩是脂肪空間，管貼外側壁。",
   "limit": "要保留前後延伸和分支關係；不要用單張冠狀圖當成整條管的全長。",
   "sources": [
    "M3TOPO"
   ]
  },
  "deltoid-cuff": {
   "question": "肩袖中哪一個「附著—作用」配對最符合肩關節前方拉力？",
   "choices": [
    {
     "text": "棘下肌 infraspinatus → 小結節 → 內旋",
     "why": "棘下肌附大結節相關面，主要外旋，兩欄都不可套肩胛下肌。"
    },
    {
     "text": "小圓肌 teres minor → 大結節 → 主要內旋",
     "why": "小圓肌雖附大結節，但主要外旋；錯在只記附著忘記拉力方向。"
    },
    {
     "text": "肩胛下肌 subscapularis → 小結節 → 內旋",
     "why": "先從前方肩胛下肌走到肱骨小結節 → 想前側拉力 → 連到內旋，再用後方外旋肌對照。"
    }
   ],
   "correct": 2,
   "hook": "大三小一：小結節留肩胛下。",
   "limit": "大三小一只幫分附著，不是四肌全部作用、神經或穩定因素的完整清單。",
   "sources": [
    "M3AXILLA"
   ]
  },
  "shoulder-bursa": {
   "question": "肩峰下滑囊 subacromial bursa 應放在棘上肌腱與哪組構造之間？",
   "choices": [
    {
     "text": "棘下肌肌腹內部",
     "why": "滑囊不是放在棘下肌肌腹裡的通用潤滑液袋。"
    },
    {
     "text": "肩峰／三角肌相關上方構造",
     "why": "先畫肱骨頭和上方肌腱 → 再畫肩峰／三角肌覆蓋 → 滑囊位於其間，協助減少滑動摩擦。"
    },
    {
     "text": "肱骨頭關節軟骨與盂唇之間",
     "why": "這混成盂肱關節內的構造位置；肩峰下滑囊不是把關節腔改名。"
    }
   ],
   "correct": 1,
   "hook": "先頭、再腱、再囊、再上方肩峰。",
   "limit": "此順序是局部位置鉤子；不代表正常滑囊與關節腔必然相通，也不是外展角度的固定開關。",
   "sources": [
    "M3AXANS"
   ]
  },
  "posterior-spaces": {
   "question": "從肩後圖的肱三頭肌長頭外側往下，找到大圓肌下方的三角間隙 triangular interval。主要配哪組？",
   "choices": [
    {
     "text": "橈神經 radial nerve＋肱深動脈 profunda brachii",
     "why": "先以肱三頭長頭分內外 → 大圓肌下方找三角間隙 → 配橈神經與肱深動脈，不按「三角」兩字猜。"
    },
    {
     "text": "腋神經 axillary nerve＋旋肱後動脈",
     "why": "這組主要配四邊孔；錯在把大圓肌上方通道套到下方間隙。"
    },
    {
     "text": "只有旋肩胛動脈 circumflex scapular artery",
     "why": "這主要配三邊孔；相似名字不代表同一通道。"
    }
   ],
   "correct": 0,
   "hook": "四腋後旋肱，三邊旋肩胛，間隙橈肱深。",
   "limit": "口訣只列主要內容；作答仍要先畫邊界與觀看方向。",
   "sources": [
    "M3UPPER"
   ]
  },
  "axillary-vessels": {
   "question": "腋動脈 axillary artery 的三段應以哪個地標分？",
   "choices": [
    {
     "text": "肱二頭肌長頭腱",
     "why": "長頭腱與盂肱區域關係重要，但不是腋動脈三段的標準分界。"
    },
    {
     "text": "肩胛棘 spine of scapula",
     "why": "肩胛棘在後方，是肌附著地標，不是腋動脈三段分界。"
    },
    {
     "text": "胸小肌 pectoralis minor",
     "why": "先沿腋動脈近到遠走 → 遇胸小肌前／後投影關係分近端、後方與遠端三段 → 再放1、2、3組典型分支。"
    }
   ],
   "correct": 2,
   "hook": "先胸小肌，才背一二三。",
   "limit": "分支數口訣是典型排列，血管可有共同幹或起源變異。",
   "sources": [
    "M3AXANS"
   ]
  },
  "axilla-walls": {
   "question": "辨腋窩內側壁 medial wall 時，哪組最應放回圖上？",
   "choices": [
    {
     "text": "肱骨結節間溝作為內側壁",
     "why": "結節間溝是狹窄外側壁相關骨性地標，不是內側胸壁。"
    },
    {
     "text": "胸壁與前鋸肌 serratus anterior",
     "why": "先將腋窩放在胸壁外側、上臂內側 → 內側回到肋骨胸壁與前鋸肌 → 再與前、外壁分開。"
    },
    {
     "text": "胸大肌與胸小肌作為內側壁全部",
     "why": "胸大／小肌主要參與前壁；錯在把身體前方當腋窩內側。"
    }
   ],
   "correct": 1,
   "hook": "內貼胸鋸，外靠肱骨。",
   "limit": "這是主要壁面地標，不替代頂、底及每壁完整筋膜肌肉層。",
   "sources": [
    "M3AXILLA"
   ]
  },
  "arm-muscles": {
   "question": "肱肌 brachialis 與肱二頭肌 biceps brachii 都可屈肘，哪個終點差異有助於理解旋後？",
   "choices": [
    {
     "text": "二頭到橈骨；肱肌到尺骨，二頭可直接拉動橈骨旋後",
     "why": "先定肱肌止尺骨、二頭主腱止橈骨粗隆 → 旋後涉及橈骨位置變化 → 二頭的拉力能連到旋後。"
    },
    {
     "text": "兩者都止於尺骨，所以旋後完全相同",
     "why": "忽略二頭在橈骨的附著，就無法解釋其旋後作用。"
    },
    {
     "text": "二頭到肱骨，所以不能影響前臂旋轉",
     "why": "二頭遠端不是止在肱骨；它跨肘到前臂。"
    }
   ],
   "correct": 0,
   "hook": "屈肘同做，旋後先找橈骨附著。",
   "limit": "這不是說只有二頭能旋後；旋後肌也參與，作用條件與神經不同。",
   "sources": [
    "M3MCN"
   ]
  },
  "forearm-intro": {
   "question": "前臂後室肌肉肱橈肌 brachioradialis 主要屈肘。應如何修正「後室都伸」？",
   "choices": [
    {
     "text": "把肱橈肌改成正中神經以符合屈肌規則",
     "why": "神經來源不能為了讓口訣整齊而改寫。"
    },
    {
     "text": "將屈肘改稱伸腕以配後室",
     "why": "動作由跨關節的路徑決定，不因肌室分類而更名。"
    },
    {
     "text": "分區、神經與作用三欄分開，保留橈神經支配的屈肘例外",
     "why": "先承認後室及橈神經分群 → 再沿跨肘的附著推作用 → 規則要容納肱橈肌屈肘這個例外。"
    }
   ],
   "correct": 2,
   "hook": "分群幫記，跨關節決定動作。",
   "limit": "後室的旋後肌也是不同動作；不能把例外只記一條就再次套成絕對。",
   "sources": [
    "M3FOREARM"
   ]
  },
  "rapid-review": {
   "question": "在兩張圖上都看到N、A、V，哪種做法最能避免把通道背反？",
   "choices": [
    {
     "text": "先以神經數量猜通道名稱，不看邊界",
     "why": "通道由邊界定義；只看一個內容物可能與相鄰通道混淆。"
    },
    {
     "text": "先說圖的方向和邊界，再答神經血管名稱及所在層",
     "why": "先定位骨盆會陰或肩腋 → 指出觀看方向及邊界 → 再放內容物；不同空間不共享一條固定的字母排列。"
    },
    {
     "text": "只背字母順序，所有區域都照抄",
     "why": "順序依區域和比較方向而異；橫向、深淺、上下不能互換。"
    }
   ],
   "correct": 1,
   "hook": "先邊界、再內容、最後走向。",
   "limit": "整合方法不代表所有圖都有同樣三個內容；例如三邊孔沒有典型主要神經通過。",
   "sources": [
    "M3UPPER",
    "M3TOPO"
   ]
  }
 },
 "muscles4": {
  "forearm-map": {
   "question": "不看神經欄，只因肌肉叫尺側伸腕肌 ECU，就把它配尺神經。哪個修正正確？",
   "choices": [
    {
     "text": "ECU屬後室，支配屬橈神經深支／PIN系統",
     "why": "先把ECU放背側伸肌群 → 再找橈神經家族 → 名稱的尺側描述位置，不是神經來源。"
    },
    {
     "text": "ECU確由尺神經支配，所有尺側肌都一樣",
     "why": "尺側是位置標記；FCU與ECU位不同肌室、神經也不同。"
    },
    {
     "text": "ECU其實就是前室的FCU",
     "why": "ECU伸腕，FCU屈腕；兩者可同作尺偏，但不是同一肌肉。"
    }
   ],
   "correct": 0,
   "hook": "先掌背、再神經；尺側不等於尺神經。",
   "limit": "多數肌室規則仍要保留肱橈肌等動作例外，不可用規則改寫個別肌。",
   "sources": [
    "M4FOREARM"
   ]
  },
  "flexor-superficial": {
   "question": "某肌腱止於第2–5指中節指骨，最適合用哪個動作辨認？",
   "choices": [
    {
     "text": "孤立DIP末端指間關節屈曲，對應FDS",
     "why": "FDS未止於末節、不跨DIP；DIP屈曲要找FDP。"
    },
    {
     "text": "MCP屈曲且IP伸直，代表FDS的唯一功能",
     "why": "這種關節組合用來理解內在肌作用，不能當FDS唯一功能。"
    },
    {
     "text": "PIP近端指間關節屈曲，對應FDS",
     "why": "先看止在中節 → 可跨PIP而不跨DIP → 用PIP屈曲辨FDS，再與到末節的FDP比較。"
    }
   ],
   "correct": 2,
   "hook": "淺到中節看PIP；深到末節看DIP。",
   "limit": "FDS也可參與其他所跨關節的屈曲；口訣突出辨識點，不是完整作用清單。",
   "sources": [
    "M4FOREARM"
   ]
  },
  "flexor-deep": {
   "question": "FPL拇指IP與食指FDP的DIP屈曲弱，手部皮膚感覺保留。就本題解剖線索，哪條支最符合？",
   "choices": [
    {
     "text": "尺神經深支 deep ulnar branch",
     "why": "尺神經深支主要供多數手內在肌，與這兩個前臂靶肌不配。"
    },
    {
     "text": "前骨間神經 AIN",
     "why": "先找兩個前臂深層運動靶肌 → 共同連到AIN → 再用典型無皮膚感覺支的特性核對。"
    },
    {
     "text": "正中神經魚際返支 recurrent branch",
     "why": "魚際返支供手內魚際肌，不能解釋前臂FPL和食指FDP的共同去神經性無力。"
    }
   ],
   "correct": 1,
   "hook": "末節拇食弱、皮膚可好，先查AIN。",
   "limit": "僅是解剖定位練習；肌腱損傷及較近端病變仍需依完整資訊區分。",
   "sources": [
    "M4PERIPH"
   ]
  },
  "wrist-force": {
   "question": "想讓手腕尺偏 ulnar deviation、同時讓屈伸分量互相抵銷，哪組較合理？",
   "choices": [
    {
     "text": "FCU＋ECU",
     "why": "先看兩肌腱都在尺側 → FCU掌側屈、ECU背側伸 → 尺偏分量同向，屈伸分量可互抵。"
    },
    {
     "text": "FCR＋ECRL／ECRB",
     "why": "這兩組肌腱共同位橈側，較符合橈偏。"
    },
    {
     "text": "FDS＋FDP是唯一能達成尺偏的配對",
     "why": "長屈指肌主要跨手指屈曲；不能作本題四角腕合力的唯一配對。"
    }
   ],
   "correct": 0,
   "hook": "同一側偏移，前後配對消屈伸。",
   "limit": "這是定性合力模型，不代表肌力一定相等，也不把活體運動當精確二向量相加。",
   "sources": [
    "M4FOREARM"
   ]
  },
  "posterior-forearm": {
   "question": "高位橈神經病變與孤立PIN病變比較，哪句較合理？",
   "choices": [
    {
     "text": "兩者必定連所有伸腕及肱橈肌完全同程度癱瘓",
     "why": "分支已在近端離開，較遠端單支病變不會自動切斷所有近端支配。"
    },
    {
     "text": "PIN是正中神經在腕部的分支",
     "why": "PIN屬橈神經系統，不能與正中之前骨間神經AIN混成同一條。"
    },
    {
     "text": "高位病變可累及更多近端分支；孤立PIN不應直接使肱橈肌去神經",
     "why": "先沿橈神經由近到遠走 → 肱橈肌等分支較早離開 → PIN是更遠端深支延續，不能回頭供應全部近端肌。"
    }
   ],
   "correct": 2,
   "hook": "分支先離隊，遠端傷不倒扣近端。",
   "limit": "伸腕保留程度依病變位置與分支變異而異；不把單一症狀當唯一定位。",
   "sources": [
    "M4FOREARM"
   ]
  },
  "extensor-compartments": {
   "question": "腕背第1腱室已填APL＋EPB。看到EPL肌腱，應放哪裡？",
   "choices": [
    {
     "text": "第6腱室，因肌肉名字有longus",
     "why": "longus表示長，不是橈尺方向或腱室號碼。"
    },
    {
     "text": "第3腱室",
     "why": "先區分長外展APL與長伸EPL → 第1室為APL／EPB → EPL單獨在第3室。"
    },
    {
     "text": "同樣第1腱室，因都在拇指",
     "why": "拇指相關肌腱不全共用一室，名字所指動作不同。"
    }
   ],
   "correct": 1,
   "hook": "一外短伸、三放長伸。",
   "limit": "口訣只定位兩個室；仍需完整補2橈伸腕、4伸指食指、5小指、6尺伸腕。",
   "sources": [
    "M4FOREANS"
   ]
  },
  "carpal-tunnel": {
   "question": "FCR腱確實與屈肌支持帶關係密切，為什麼仍不算主要腕隧道九腱之一？",
   "choices": [
    {
     "text": "它走支持帶橈側的獨立通道，不能只用「支持帶深面」合併所有空間",
     "why": "先畫主要腕隧道邊界 → 找FDS四腱、FDP四腱、FPL一腱 → FCR雖鄰近支持帶，仍走獨立通道。"
    },
    {
     "text": "因FCR腱改走Guyon管，與尺神經同管",
     "why": "FCR走橈側獨立通道；Guyon管在尺側，不能因排除腕隧道就把它全塞到Guyon管。"
    },
    {
     "text": "因九腱是FDS四、FDP四加FCR一，不含FPL",
     "why": "九腱的單一拇指腱是FPL，不是FCR；先點名再加總，不能只記得數字九。"
    }
   ],
   "correct": 0,
   "hook": "先圈同一個隧道，再點九腱。",
   "limit": "本題採主要腕隧道定義；不要把相鄰的骨纖維通道混成一大袋。",
   "sources": [
    "M4HANDANS"
   ]
  },
  "snuffbox": {
   "question": "鼻煙窩 anatomical snuffbox 的圖上，橈動脈應標成哪一類？",
   "choices": [
    {
     "text": "外側邊界的其中一條肌腱",
     "why": "動脈不是肌腱，不能拿通過物取代邊界。"
    },
    {
     "text": "骨性底，與舟骨是同一種結構",
     "why": "血管和骨底在不同分類；把它們合併會失去深度關係。"
    },
    {
     "text": "深部通過結構；肌腱形成兩側邊界",
     "why": "先用APL／EPB與EPL圈邊 → 骨性底放舟骨及大多角骨 → 橈動脈另作經過深部的血管。"
    }
   ],
   "correct": 2,
   "hook": "先界、再底、最後通過物。",
   "limit": "頭靜脈及橈神經淺支還有表淺關係，不能將所有標記畫成同一層。",
   "sources": [
    "M4FOREANS"
   ]
  },
  "hand-intrinsics": {
   "question": "同在拇指區，拇收肌 adductor pollicis 與拇短外展肌 APB 的典型神經怎麼分？",
   "choices": [
    {
     "text": "兩者都橈神經，因都控制拇指",
     "why": "前臂的拇指長腱與手內在肌神經不同；APB不是橈神經深支靶肌。"
    },
    {
     "text": "拇收肌尺神經深支；APB正中神經返支",
     "why": "先分肌肉群與具體動作 → 收拇指找尺神經深支 → 掌側外展的APB找正中返支，不以區域直接包辦。"
    },
    {
     "text": "兩者都正中返支，因都在魚際附近",
     "why": "拇收肌是重要尺神經例外，不能把拇指區全歸正中。"
    }
   ],
   "correct": 1,
   "hook": "拇區不全正中；收拇先找尺深。",
   "limit": "FPB兩頭有神經變異，LOAF入門口訣不等於每一頭都固定同一支。",
   "sources": [
    "M4HAND",
    "M4VAR"
   ]
  },
  "lumbricals-interossei": {
   "question": "想解釋蚓狀肌同時MCP屈、IP伸，最有用的讀圖方式是？",
   "choices": [
    {
     "text": "追肌腱相對MCP掌側與IP背側伸肌裝置的路徑",
     "why": "先認MCP與IP是不同關節 → 追蚓狀肌跨MCP掌側，再接背側伸肌裝置 → 同一肌的作用可在不同關節呈不同方向。"
    },
    {
     "text": "只看肌肉位在掌面，就推所有指關節全屈",
     "why": "表面位置無法取代各關節軸與肌腱路徑；只說掌側就全屈會答反IP動作。"
    },
    {
     "text": "只看名字像蟲，就不需要看附著",
     "why": "形狀命名可幫認名字，無法解釋機械作用。"
    }
   ],
   "correct": 0,
   "hook": "掌指屈、指間伸，要沿腱膜走。",
   "limit": "骨間肌也協助相同關節組合；不能推成這動作只有蚓狀肌能做。",
   "sources": [
    "M4HAND"
   ]
  },
  "gluteal-muscles": {
   "question": "右腳單腳支撐、左側骨盆下垂時，若練解剖力學，應先檢查哪側外展機制？",
   "choices": [
    {
     "text": "左側臀中／小肌，因左邊下垂",
     "why": "下垂側和需要產生對抗力矩的支撐側不同，是此題最常見的側別陷阱。"
    },
    {
     "text": "只找右側臀大肌作主要外展肌",
     "why": "臀大肌主要強力伸髖；本題站立骨盆穩定重點先放臀中小肌。"
    },
    {
     "text": "右側臀中／小肌及其支配相關機制",
     "why": "先固定右支撐腳 → 左側軀幹骨盆重量造成下垂力矩 → 右側外展肌需提供平衡，所以先檢查支撐側。"
    }
   ],
   "correct": 2,
   "hook": "看下垂的對側，也就是支撐側。",
   "limit": "外展機制含肌腱與骨性槓桿等；不能從一個動作直接確診臀上神經損傷。",
   "sources": [
    "M4GLUTEAL"
   ]
  },
  "thigh-map": {
   "question": "將大腿三室配好神經後，哪一組仍應分出例外？",
   "choices": [
    {
     "text": "股二頭肌長短頭都固定為同一分部，不必拆",
     "why": "二頭短頭與長頭的坐骨神經分部不同，必須分開。"
    },
    {
     "text": "內收大肌的腿後部：坐骨神經脛側部",
     "why": "先用前股、內閉、後坐骨作骨架 → 再拆內收大肌兩部 → 腿後部保留脛側支配及伸髖作用。"
    },
    {
     "text": "所有內側室肌肉都只能閉孔神經",
     "why": "內側位置或內收作用不保證全部單一神經，還有恥骨肌等例外。"
    }
   ],
   "correct": 1,
   "hook": "三室先大分，雙重肌再拆分。",
   "limit": "這只是主要規則；恥骨肌、腰大肌等仍應逐條回原表核對。",
   "sources": [
    "M4LOWER"
   ]
  },
  "anterior-thigh": {
   "question": "股直肌 rectus femoris 能屈髖，三廣肌 vasti 不能直接做同樣的跨髖作用，最關鍵原因？",
   "choices": [
    {
     "text": "股直肌起於骨盆並跨髖；三廣肌起於股骨",
     "why": "先沿起止看跨過哪些關節 → 股直肌跨髖及膝 → 三廣肌起股骨只跨膝，不直接跨髖。"
    },
    {
     "text": "只有股直肌跨膝，其餘三廣肌只跨髖",
     "why": "四條都跨膝；三廣肌的起點在股骨，沒有因名稱不同就改成跨髖。"
    },
    {
     "text": "三廣肌雖也跨髖，但被股直肌完全抵銷",
     "why": "前提不成立：三廣肌並沒有直接跨髖，不能用兩肌抵銷解釋一個不存在的直接髖力矩。"
    }
   ],
   "correct": 0,
   "hook": "跨兩關節才問兩處動作。",
   "limit": "不跨髖不等於對整體步態或髖膝協調毫無影響；此題只談直接肌力矩。",
   "sources": [
    "M4THIGH"
   ]
  },
  "medial-thigh": {
   "question": "內收大肌 adductor magnus 止於內收結節的腿後部，應如何配對？",
   "choices": [
    {
     "text": "坐恥骨支起源—屈髖成分—閉孔神經支配",
     "why": "這較接近內收部的配對；本題指定到內收結節的腿後部，必須換回其起點、功能和神經。"
    },
    {
     "text": "與整條內收大肌一樣，不需分起止與神經",
     "why": "同名一條肌可有不同部分，合背會同時混淆附著、作用和神經。"
    },
    {
     "text": "坐骨結節起源—伸髖—坐骨神經脛側部",
     "why": "先找縱行腿後部 → 從坐骨結節走到內收結節 → 連伸髖及脛側神經，與斜行內收部分開。"
    }
   ],
   "correct": 2,
   "hook": "坐骨到結節，腿後部走脛側。",
   "limit": "鉤子只辨這一部分，不代表內收大肌內收部也都伸髖或都走脛側。",
   "sources": [
    "M4LOWER"
   ]
  },
  "hamstrings": {
   "question": "股二頭肌短頭 biceps femoris short head 為何不直接伸髖？",
   "choices": [
    {
     "text": "因為它只跨髖關節，不跨膝關節",
     "why": "短頭恰好相反：不跨髖而跨膝，從股骨走向腓骨頭，所以能參與屈膝。"
    },
    {
     "text": "起於股骨，沒有跨髖關節",
     "why": "先找短頭股骨起點 → 沿肌束到膝外側腓骨頭 → 路徑不跨髖，所以沒有直接伸髖力矩。"
    },
    {
     "text": "因為任何腓總神經肌都不能跨兩個關節",
     "why": "能否跨關節由起止路徑決定，不能從神經名字推成所有肌的限制。"
    }
   ],
   "correct": 1,
   "hook": "先畫是否跨髖，再問能否伸髖。",
   "limit": "短頭常列大腿後室，但不符合所有典型腿後肌定義；區域分群與嚴格定義不同。",
   "sources": [
    "M4GLUTEAL"
   ]
  },
  "femoral-triangle": {
   "question": "股神經 femoral nerve 已畫在股三角內，接著畫股鞘時，應怎麼處理它？",
   "choices": [
    {
     "text": "讓股神經留在股鞘外側",
     "why": "先區分大區域股三角與小包裹股鞘 → 股鞘包動脈、靜脈與股管 → 股神經雖在三角內，仍留鞘外側。"
    },
    {
     "text": "把股神經和股動靜脈全包在同一鞘內",
     "why": "區域內不等於鞘內；這正是本題要拆開的兩個框。"
    },
    {
     "text": "把股神經放到股管內側，表示它是NAVEL最內側",
     "why": "NAVEL是外到內，N位外側而不是最內側；股管是股鞘內側的另一個空間。"
    }
   ],
   "correct": 0,
   "hook": "三角是地區，股鞘是包裹。",
   "limit": "NAVEL的E/L通常幫記同一股管區，不代表股鞘有五個獨立室。",
   "sources": [
    "M4THIGH"
   ]
  },
  "adductor-canal": {
   "question": "沿內收肌管追股血管到內收裂孔，隱神經 saphenous nerve 應怎麼接？",
   "choices": [
    {
     "text": "和股動脈一起穿裂孔，直接改叫脛神經",
     "why": "它不穿內收裂孔，也不轉成另一條周邊神經；錯了出口及神經身份。"
    },
    {
     "text": "它在股三角就已終止，因此從未進內收肌管",
     "why": "隱神經確實進入內收肌管，問題在遠端出口不同；不能用「不穿裂孔」推成「從不進管」。"
    },
    {
     "text": "在穿裂孔前離開管，走向膝及小腿內側",
     "why": "先認血管與隱神經同進管 → 在遠端把神經線分出 → 只有股血管沿裂孔到膕窩，隱神經不改名為脛神經。"
    }
   ],
   "correct": 2,
   "hook": "同進管，不同出孔。",
   "limit": "股內側肌神經的精細管內外歸類另依筋膜模型；不影響本題隱神經出口的基本考點。",
   "sources": [
    "M4TOPO",
    "M4CANAL"
   ]
  },
  "popliteal-fossa": {
   "question": "膕窩中央要依「淺到深」排序，哪個正確？",
   "choices": [
    {
     "text": "直接照股三角外到內N-A-V，因字母都一樣",
     "why": "股三角的外到內與膕窩的淺到深不是同一座標軸。"
    },
    {
     "text": "脛神經 → 膕靜脈 → 膕動脈",
     "why": "先指定比較方向是深度 → 神經較淺、靜脈居中、動脈最深 → 不能將另一區域的橫向排序移植過來。"
    },
    {
     "text": "脛神經 → 膕動脈 → 膕靜脈",
     "why": "把動靜脈深度交換了，未保留膕動脈較深的關係。"
    }
   ],
   "correct": 1,
   "hook": "膕窩淺深N-V-A，先把方向念出。",
   "limit": "此題指中央典型深度；各構造沿全長的內外相對位置可改變。",
   "sources": [
    "M4GLUTEAL"
   ]
  },
  "rapid-review": {
   "question": "看到「無力」先猜神經很容易混淆。以下哪個解題順序比較穩定？",
   "choices": [
    {
     "text": "先說哪個關節／動作 → 找跨關節肌 → 配神經分部 → 核對通道與感覺",
     "why": "先把題目轉成關節與方向 → 找真正跨關節的靶肌 → 用神經、分部及伴隨線索核對；可減少同動作不同神經的誤判。"
    },
    {
     "text": "先背一個神經，再把所有肌肉套進去",
     "why": "一開始預設神經會忽略肱橈肌、FDP等例外，也容易把遠端病變套成近端。"
    },
    {
     "text": "只看肌肉名稱有橈或尺，不用看起止",
     "why": "位置字不等於神經字，例如ECU與FCU；必須核對分區與神經。"
    }
   ],
   "correct": 0,
   "hook": "先動作、再肌、後神經，出口再驗一次。",
   "limit": "這是學習推理流程，不取代臨床完整病史、神經檢查或檢驗。",
   "sources": [
    "M4FOREARM",
    "M4THIGH"
   ]
  }
 }
};
function musclePracticePanel(topic){
 const c=musclesPractice[studyChapter.id]?.[topic.id];if(!c)return '';
 const e=studyEscape,key=studyChapter.id+'-'+topic.id;
 const sources=c.sources.map(id=>anatomySources.find(s=>s.id===id)).filter(Boolean);
 return `<section class="muscle-practice" data-muscle-practice="${e(key)}" data-chapter="${e(studyChapter.id)}" data-topic="${e(topic.id)}" aria-label="情境推理練習"><p class="eyebrow">自編情境練習 · 教材補充</p><h2>換成題目，你能推回去嗎？</h2><form><fieldset><legend>${e(c.question)}</legend>${c.choices.map((o,i)=>`<label class="muscle-option"><input type="radio" name="practice-${e(key)}" value="${i}"><span>${String.fromCharCode(65+i)}. ${e(o.text)}</span></label>`).join('')}</fieldset><div class="study-actions"><button type="submit">選好後核對推理</button><button type="button" data-practice-reset>清空重做</button></div></form><p class="muscle-practice-status" aria-live="polite"></p><div class="muscle-practice-answer" hidden><h3>正確選項與判斷順序</h3><p><strong>${String.fromCharCode(65+c.correct)}. ${e(c.choices[c.correct].text)}</strong></p><p>${e(c.choices[c.correct].why)}</p><h3>另外兩個選項錯在哪裡？</h3><ul>${c.choices.map((o,i)=>i===c.correct?'':`<li><strong>${String.fromCharCode(65+i)}：</strong>${e(o.why)}</li>`).join('')}</ul><p><strong>記憶鉤子：</strong>${e(c.hook)}</p><p><strong>口訣的適用邊界：</strong>${e(c.limit)}</p><p><a class="study-button" href="${studyRoot}/topic/${e(topic.id)}" data-practice-image>回這一頁的原圖定位 ↓</a></p><p class="memory-foot">核對來源：${sources.map(s=>`<a href="${e(s.url)}" target="_blank" rel="noopener">${e(s.id+' · '+s.title)}</a>`).join(' ／ ')}。本題為自編練習，不是影片逐字內容或歷屆真題；不影響既有回想卡排程。</p></div></section>`;
}
function musclePracticeBind(){document.querySelectorAll('[data-muscle-practice]').forEach(panel=>{
 const c=musclesPractice[panel.dataset.chapter]?.[panel.dataset.topic];if(!c)return;
 const form=panel.querySelector('form'),answer=panel.querySelector('.muscle-practice-answer'),status=panel.querySelector('.muscle-practice-status');
 form.addEventListener('submit',event=>{event.preventDefault();const chosen=form.querySelector('input:checked');if(!chosen){status.textContent='先選一個答案，再核對推理。';return;}
 const index=Number(chosen.value);if(!Number.isInteger(index)||index<0||index>=c.choices.length)return;
 answer.hidden=false;status.textContent=index===c.correct?'答對了。接著說明另外兩個選項為什麼不合適。':'這次選了 '+String.fromCharCode(65+index)+'；正確是 '+String.fromCharCode(65+c.correct)+'。請先看你的選項錯在哪個層次或條件。';
 });
 panel.querySelector('[data-practice-reset]').addEventListener('click',()=>{form.reset();answer.hidden=true;status.textContent='已清空，請重新判斷。';});
 panel.querySelector('[data-practice-image]').addEventListener('click',event=>{event.preventDefault();const image=document.querySelector('article.lesson .study-figure');(image||document.querySelector('article.lesson'))?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});});
 });}
function musclePracticeChapter(){const count=Object.keys(musclesPractice[studyChapter.id]||{}).length;return count?`<p class="muscle-practice-intro">本章另有 ${count} 道情境選擇練習：每個主題先作答，再看正解推理、兩個錯因及口訣適用邊界。題目位於主題頁回想卡之後。</p>`:'';}

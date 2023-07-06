const userPosts = [
  {
    id: 1,
    profile_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/321809071_3409627276023005_1687493764328367824_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG3hj5hTf0_3ryskwZ_mJBXgkYp-VPpjPyCRin5U-mM_NLzY6EZzU9VmPU4y3mGhmh3SptU3hdLNbRZ5WJacFVh&_nc_ohc=VF_Yt7I11LEAX-NZpiZ&_nc_ht=scontent.fdac7-1.fna&oh=00_AfAGUZwyDZEuqfji7BAO8GUzLgV-0VSDG2YTAKzUo77eiw&oe=64AB094F",
    name: "Atika Sultana",
    time_ago: "4 hours ago",
    content: `টু-পার্ট  নাকি থ্রি-পার্ট আলমারি...
    জ্বি এটা কাস্টমার কথন।।
    ছোট সংসার আবার আস্তে আস্তে বড়ো হবে তাই ভেবে পাচ্ছি না আলমারি টু পার্ট নিব নাকি থ্রি পার্ট নিব...🤔🤔`,
    content_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/357714468_6438902816175924_8704517478639153022_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeFpgyWkMAaT-NNzvvHG-27bXLnUf_nok_pcudR_-eiT-irRO3ie6Vx5Q3z9Jjrazjj2BElWhnXZ0nCknhnvWFbt&_nc_ohc=F_m3HKIeqewAX9Ukywh&_nc_oc=AQknV0zpHrXN-vzM0ctByVSgZ87y_Pm4mrUMaFNBV1PfSM85h5e9rqPIzFh4uM_l7F4&_nc_ht=scontent.fdac7-1.fna&oh=00_AfAkPyKVp2hyvdxw4_IaHrJVTFyzHpSANFOcIEcle8kHVg&oe=64AA8302",
    reaction_count: 207,
    comment_count: 30,
    share_count: 20,
  },
  {
    id: 2,
    profile_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/313177297_638491061278053_8157603965188615706_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEp9CGnwcpZag7AmfOWH4hwvIM_uIPPxYO8gz-4g8_Fg2RpcJx3qtaCDAQ30GdpnbD7lUP1O5zdcDjC_P2rEF4g&_nc_ohc=05MZnkz-KWsAX_9QHrU&_nc_ht=scontent.fdac7-1.fna&oh=00_AfA12UTQIlvZfeBcJwK9psvqiLuriuMriros1fyDChQWkQ&oe=64A9B376",
    name: "Nazma Sikdar Bristy",
    time_ago: "15m ago",
    content: `এক কালার আড়ং কটন পাঞ্জাবি। আলহামদুলিল্লাহ কাস্টমারদের থেকে অনেক ভালো সাড়া পাচ্ছি ❤️❤️
    🍁 হ্যান্ড পেইন্ট, ব্লক, স্কিন প্রিন্ট, বাটিক, হাতের কাজ করার জন্য একদম পারফেক্ট চয়েজ। ।।।`,
    content_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/358145115_794054595721698_5594446219144524704_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEKSE1apCG-CxuFnANRQjg26i-E0S-HzHPqL4TRL4fMcx6dv8ZxGc_wAO6s5TX_KD1KNMplD_EQrNvud9mjjUyg&_nc_ohc=XN17AUrvEgkAX-l69Gh&_nc_ht=scontent.fdac7-1.fna&oh=00_AfCQRjveSPHoxGnD-YILoNPvVKdnCcYmeoggFNEDAfVzXQ&oe=64AAB77B",
    reaction_count: 432,
    comment_count: 54,
    share_count: 67,
  },
  {
    id: 3,
    profile_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/329418834_885053026113959_1932932511266825902_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG3Z7fVd8iqWNj4As9tqJdmRySDAIXikZxHJIMAheKRnOoGZar_KD1P_07zjz1uuQPkDRE_y6O_knB0jpN2scym&_nc_ohc=YWexmQIZuaIAX9bDEds&_nc_ht=scontent.fdac7-1.fna&oh=00_AfAaBJHaNlmMEXncI3w1ROxk9aJUQPYacmvT3fLyRkbA9Q&oe=64AA9FAF",
    name: "Notebook",
    time_ago: "3h ago",
    content: `আলহামদুলিল্লাহ তাঁকে আজীবনের জন্য হালাল ভাবে পেয়ে গেছি ❤️🌸`,
    content_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/347560465_1091186601860533_7776954122057664469_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=79524b&_nc_eui2=AeHr9txt9Ffai_d9b1jsGf5MfRBqxUwQiO19EGrFTBCI7T1mzl3kV8bFmEc8ueL2TjSTIJzmcyL1QVcJdbnp-mZK&_nc_ohc=bgw_KK0ZcWMAX_4Mhud&_nc_ht=scontent.fdac7-1.fna&oh=00_AfBq9-0eBT7V64AgsE3bVhw7xhM3OVOfKSvLdVTg3PAJyA&oe=64AB669F",
    reaction_count: 786,
    comment_count: 67,
    share_count: 10,
  },
  {
    id: 4,
    profile_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/344924188_1032173407746492_2357821649288518263_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG27yk7U8tcNmB2ZZcqCOy9lEwEtpAEhF2UTAS2kASEXcHzkFgFEb0Mcw9kWcFzJRbpthH_xi4N2EPg3pNcubY7&_nc_ohc=XshOa-xvkQEAX97eTRb&_nc_ht=scontent.fdac7-1.fna&oh=00_AfCeqqXkvShIbX3vPHuBeBqyhJp_uGOVYStvuwVoqiTmgA&oe=64AA49C5",
    name: "Md Mahedi Hasan",
    time_ago: "4 days ago",
    content: `আজ ঈদের পঞ্চম দিনে সিনিয়র ভাইয়াদের সাথে খুব সুন্দর সময় কাটালাম। 
    অনেক ধন্যবাদ শ্রদ্ধেয় তোফায়েল হাসান রূপক ভাইয়া,সাঈদ হাসান ভাইয়া ও রানা ভাইয়াকে। 
    💚❤️💚`,
    content_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/357385799_3492582010995482_6657025051265455832_n.jpg?stp=dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFNnY2qd-JoBAhGhmuAHi2zSMjLzOZQ26dIyMvM5lDbpwvMSSTuK-Lg1mnykEUfmgONBUzwZpQ6JsYU_vnJEMTW&_nc_ohc=X6zAs5tGjFIAX9wPg83&_nc_ht=scontent.fdac7-1.fna&oh=00_AfCRHX5XHogdnTRJ8gmulrTMxY1xCuye2cN7BFlbPKcuYw&oe=64A9AE9D",
    reaction_count: 60,
    comment_count: 5,
    share_count: 2,
  },
  {
    id: 5,
    profile_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/300993755_457132026427159_9120368870362016039_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF04ohPOq5uElzweo9LpuI1YQR59TZyeMNhBHn1NnJ4w7ypSU_qJmq1o7VMSkzsZv36YxGivUJWLjQf1hDig9ew&_nc_ohc=eqP3CsZuf8cAX9vFwcQ&_nc_ht=scontent.fdac7-1.fna&oh=00_AfCL_umEii8cKJ5wrSib9NB-oB4gJ1hb-o7Tmbp8k0RLUA&oe=64AA1B49",
    name: "নীল ক্যাফের ভালোবাসা",
    time_ago: "3 days ago",
    content: `বউকে নিয়ে শশুরবাড়িতে যাবার প্রথম দিনই আমার শাশুড়ী আমাকে মেপে মেপে মাত্র দেড় চামচ ভাত দিলেন। এমনকি নতুন জামাইকে তরকারিও দিয়েছিলেন আধ টুকরো মাছ আর এক চামচ ডাল। সকালবেলা এই সামান্য খাবার খেয়ে সারাদিন কাটিয়েছি। অথচ এরমধ্যে কেউই আর আমাকে খাবার খেতে ডাকেনি। নতুন বর হিসেবে নিজের ক্ষুধার কথা কাউকে বলতেও পারছিলাম না। রাত হতেই ক্ষুধায় যেন পেট চো চো করতে শুরু করলো। ঘড়ির দিকে চেয়ে দেখি, রাত সাড়ে দশটা। লাজলজ্জার মাথা খেয়ে আমি আমার একমাত্র শালিকা এশাকে বলেই ফেললাম,
    —এশা, ঘরে কোনো খাবার হবে…`,
    content_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/357098685_680213577452335_8015665142072972453_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFIOjkQ7MGq0v1HrbXiDVjn5mdUJsY0KXHmZ1QmxjQpcWiwherj_vs_76dbNJpGTacG6vj2Ub4z-lmg9HaYXCw3&_nc_ohc=9YS6cUpNhvQAX9sTS67&_nc_ht=scontent.fdac7-1.fna&oh=00_AfDylx3mayGiXxlIy3e5Jl5VEgR-PxlJMJPHIqR3bGRt4g&oe=64AAA391",
    reaction_count: 900,
    comment_count: 20,
    share_count: 4,
  },
  {
    id: 6,
    profile_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/342501236_1304242973774573_6484983543752739879_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGQZCXvdb7jSAjV2vGiVnWQwWgsNarJbuDBaCw1qslu4JxL8x5U9FWhaSjIlA9FJ2QKUpKdnJtEsc179D5MqBWd&_nc_ohc=4SvyXehia54AX-12yDZ&_nc_ht=scontent.fdac7-1.fna&oh=00_AfBGlHzAudpxE4yYjo3d843z3q_LI31Ap0IWbYMYTmck2g&oe=64AA7CC8",
    name: "Muhammad Hossain",
    time_ago: "5 days ago",
    content: `Don't worry man!!!
    I know CPR!! 🐸🤣`,
    content_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/357352543_1667446977056857_7376611682473821098_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHqXdnveoijM0B0fseYSzPSpi4GdtpcZH6mLgZ22lxkfjahGP03KD6pnTp0kvPJO8mKChF58FCY9QnE7jzjxPhH&_nc_ohc=MrQHkJwmdpMAX-u5z_Y&_nc_ht=scontent.fdac7-1.fna&oh=00_AfA66WFSMsVWELA1Qv8pmVg5-ZO9if1qmG7QLmKXzs2Umw&oe=64AAFB9A",
    reaction_count: 342,
    comment_count: 32,
    share_count: 54,
  },
  {
    id: 7,
    profile_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/357464212_6635541289801213_3713272843510485589_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF_mofPXhr2-KA6vLWX8x_b1cimz7zWNHbVyKbPvNY0drZ6Su96Vmm8Jd6Bfm_rF7XgTT-X5pxvnvnHhlrDMeg9&_nc_ohc=LPv0k9iuHk8AX-VyKk-&_nc_ht=scontent.fdac7-1.fna&oh=00_AfBxi1JgTi5NlYhg4yeJMaK1LFAm8ouC26iOfWHImhxWQw&oe=64AA4412",
    name: "সাহিত্যের ছোঁয়া",
    time_ago: "1 day ago",
    content: `আব্বু ঈদের নামাজ পড়ে বাসায় এসে আম্মুরে জিজ্ঞেস করলেন, 'ছাগলটা কই?'
    আম্মু এদিক ওদিক তাকিয়ে বললো, 'কই আবার? দেখ গিয়ে ঘরে বসে মোবাইল টিপতেছে।'
    - মোবাইল টিপতেছে মানে?
    - মানে বুঝো না? তোমার ছেলের মোবাইল টেপা ছাড়া আর কোনো কাজ আছে? `,
    content_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/357700295_204198989270187_4702398057506613393_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHVS43JB76HXH0e5bRecvZbFRWoScQkTUYVFahJxCRNRu5KVZT5J8-Q5cZ-_Tkbat7Q9zKouUUnOUDb7IIRMHEj&_nc_ohc=k3Isv5j7WhoAX8bbjsJ&_nc_ht=scontent.fdac7-1.fna&oh=00_AfD_9rAWVn4gzrUUKSZM5rZTbllQPGVc_CkRXy-TXcPQEw&oe=64A9AB4E",
    reaction_count: 678,
    comment_count: 67,
    share_count: 76,
  },
  {
    id: 8,
    profile_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/293415563_593885772107924_7198899073083774603_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHRDsJAfse_iMTECoxJQzyGJ-CXklCh5bUn4JeSUKHltQYGzQ2ZlV2SKdynF6nDJOyLEWbAStUTKsQbcyL_pAF0&_nc_ohc=p2ahDDAdSkUAX9Exs7q&_nc_ht=scontent.fdac7-1.fna&oh=00_AfBqFc3Qgu-TqpF7thYqx20MGAtwV6tkDhiZyseMXLVoog&oe=64A9CEAA",
    name: "ঘুরে দাঁড়াও",
    time_ago: "a day ago",
    content: `কারো উপরে প্রতিশোধ নেয়ার সবচাইতে ভালো উপায় হচ্ছে নিজে অনেক ভালো থাকা। তাদের তোয়াক্কা করা ছেড়ে দেয়া । অনেক বেশি যায় আসে বলেই আপনি অস্বাভাবিক হয়ে যাচ্ছেন । অনেক বেশি গায়ে লাগাবেন না । বরং একদম নিজেকে নিয়ে এতোটা ভালো ভালো সময় গড়ে তুলুন । দৌড়ে হেঁটে আসুন । দান করুন । ভালো ভালো শিক্ষণীয় ভিডিও শুনে নতুন নতুন জ্ঞান গ্রহণ করুন দেখবেন হতাশা আর কোনভাবেই আপনার ধারে কাছে আসবেনা । 
    কারন আপনি তার চেয়ে বেশি সুখে আছেন, এর চেয়ে বড় যন্ত্রনা আপনার অপছন্দের মানুষটির জন্য আর কিছুই হতে পারেনা…`,
    content_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/358064032_823580962471736_7964796190169309844_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHK8MbyfHo27mv4SYfkMdQIvGVqM3Qiv6q8ZWozdCK_qtIjSxr1ziLxxgUei_giZkQiVsYUMe1r5qWwK6dWikhK&_nc_ohc=Q91m4XSlMEgAX_BJWaf&_nc_ht=scontent.fdac7-1.fna&oh=00_AfBiBfnlPjYPhNu0Nl3PbeTH6g657bTcaQuJFTz3gt0fPA&oe=64AA325C",
    reaction_count: 766,
    comment_count: 65,
    share_count: 87,
  },
  {
    id: 9,
    profile_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/341626799_183221634586814_6803672681844864523_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFLOxjTo8fn4mWOw1_dpQFRqdSHvmWh7gOp1Ie-ZaHuA8NP2e2k6vrsen2U56EmBN1Zj36trw52AHA1av5Bmf8A&_nc_ohc=kPMSiZrI7VIAX8KZpu8&_nc_ht=scontent.fdac7-1.fna&oh=00_AfDtDqImJAPCzi_lctv4WX4ORmpVIfX_ris74IqbiX7d_w&oe=64A9AC4E",
    name: "Rabindranath Tagore",
    time_ago: "9 days ago",
    content: `নারী : রবীন্দ্রনাথের চিন্তার সঙ্গে প্যাঁচ কষে গেছে জীবন...
    রবীন্দ্রনাথের দাদা প্রথম বাঙালি আই সি এস সত্যেন্দ্রনাথ ঠাকুর নারীদের বিষয়ে উদার, প্রগতিশীল।
    রবীন্দ্রনাথ তাঁর লেখাপত্রে মেয়েদের স্বাধিকার দিয়েছিলেন, কিন্তু জীবনের সকল ক্ষেত্রে কি রক্ষা করতে পেরেছিলেন সে আদর্শ? তথ্য বলছে, না। যখন বিবাহ করলেন কবি তখন কত ছিল তাঁর স্ত্রীর বয়স? নিজের কন্যাদের বিবাহ দিয়েছিলেন কোন বয়সে? কবির ভ্রাতুষ্পুত্র বলেন্দ্রনাথের অকাল প্রয়াণের পর বলেন্দ্রনাথের বিধবাপত্নী সাহানা দেবীর বিবাহসম্ভাবনা মেন…`,
    content_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/357113831_823863505762920_8100637831150489450_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHCr1kPadM2IrpKk8MqhJ1ngk7oo-nnDCiCTuij6ecMKHPTVktoHCH7O8lNuZdEVX1EWmURtsWR0gpa6RMwysBG&_nc_ohc=0PYjvhCUOEUAX8Sx5Yv&_nc_ht=scontent.fdac7-1.fna&oh=00_AfCxSMKqzRQ6aWRJSqMOyCd4tPCVqS7GQGblU4jWoat5bQ&oe=64A9BBCF",
    reaction_count: 987,
    comment_count: 87,
    share_count: 23,
  },
  {
    id: 10,
    profile_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/347444209_659744446192486_2757860478671391534_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH-beWBJSZpdA2XlM_Dmq6HJzuAwpkcIY8nO4DCmRwhj8VfygJy2vAO-MtKZfWboo7JxzxaUbHl8EoMt9sRLjhK&_nc_ohc=lDqW0K36az8AX9Sec4F&_nc_ht=scontent.fdac7-1.fna&oh=00_AfCd8vxwoUJ03KKhWtTS70nFJcVR3j9MPA2OKMXdpdbgJg&oe=64AA0129",
    name: "Prothom Alo",
    time_ago: "3 days ago",
    content: `অফিসে বের হবার ঠিক আগ মুহূর্তে মা আমায় ডেকে বললো,
    -"তোর বউয়ের তো ৭মাস চলছে। তা বউমাকে কবে বাপের বাড়ি দিয়ে আসবি?"
    আমি কিছুটা অবাক হয়ে মাকে বললাম,
    --ঠিক বুঝলাম না মা! এই অবস্থায় শ্রাবণীকে(আমার বউ) বাপের বাড়ি দিয়ে আসবো কেন?`,
    content_img: "https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/351539201_924009208902258_2078515971228996302_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFOdHUkxSQxUqE3zITXVZimreTdTY_fOOCt5N1Nj9844OG1A7hWWEjTWfHPKM5APSPIBSdrdj2BQLwSgAcrdzC-&_nc_ohc=hWXM9aXdYIEAX9i8Jt4&_nc_oc=AQmPA7QOxfDz2VwWVobujjo7g0-6ZvH8oSwmQXWg0KzeSUubjJmNMfnNfmIkBKzcNOo&_nc_ht=scontent.fdac7-1.fna&oh=00_AfAXAENno441JQgUw8LgaAlLhHZGIe56AcNvWqCp7aZGag&oe=64AB5934",
    reaction_count: 342,
    comment_count: 2,
    share_count: 56,
  },
];

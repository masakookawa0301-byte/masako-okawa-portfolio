const projects = [
  {title:'教育・情報誌のデザインと制作進行',description:'Ｓｋｙ株式会社で教育関係者向け情報誌「学校とICT」、情報セキュリティ分野の「SKYSEA NEWS」などの誌面を制作しています。',details:[['SCOPE','「学校とICT」は47,000部・年6回・1号56〜64ページ。毎号3〜7コンテンツのデザイン・レイアウトを担当。'],['ROLE','ライターを含む約7名の制作チームで校正依頼の時期調整、確認状況の把握、入稿、色校正の返却、承認依頼、納品までの進行管理を担当。'],['APPROACH','確認が滞る場合は関係者に働きかけ、上司と相談しながら校正と関係者チェックの進め方を調整。日程に合わせて制作フローを改善しています。']]},
  {title:'紙・Web・LINEをつなぐ、伝え方の改善',description:'教員向けオンラインセミナーや教育支援ソフトの教材紹介で、読み手のメリットが具体的に伝わる構成とコピーを工夫しています。',details:[['IMPROVEMENT','オンラインセミナーのLINE配信画像では、「体験できる内容」「参加するメリット」を具体的に伝える構成へ改善。クリック数120件→240件（約2倍）への回復に貢献。'],['TEAM RESULT','「2学期の発表ノート教材」では、元教員の企画担当者と連携。チームの施策としてLINEクリックユーザー361人・Web閲覧1,130件・教材ダウンロード262件につながりました。'],['MEASUREMENT','上司と共同で流入元を識別できるQRコードの導入を提案。GA4で紙媒体からの流入を確認し、同教材では誌面QRコード経由で約70件の流入を確認しています。']]},
  {title:'生成AIを活用した、制作業務の効率化',description:'生成AIとの対話によるコード生成を活用し、制作現場の定型作業や確認業務を支えるツールを作成しています。',details:[['VIDEO','PythonによるPowerPoint内の動画一括抽出・静止画取得アプリを作成。約300本の処理を約3時間→約20分に短縮（概算）。'],['QUALITY','Gemini・Claude Sonnetを活用した校正・検版ツールを作成。画像内の誤植検知、修正前後のPDF比較、朱書きとの照合に活用し、目視確認を補助。'],['AUTOMATION','Adobe製品向けスクリプト、InDesignへのPDF自動配置、テキスト連結・配置調整を支援する仕組みを作成。GA4データの分析・可視化やアンケート結果のWeb可視化にも取り組んでいます。']]} ,
  {title:'イラストレーションの企画・ディレクション',description:'伝えたい内容に合わせてイラストを企画・発注し、デザインへ展開。調査結果の可視化にも図やイラストを活用してきました。',details:[['POPPY','ペタビット株式会社で、通信教材「ポピー」の外表紙を約1年半担当。企画考案、進捗管理、イラスト発注、デザイン制作まで一貫して進行。'],['VISUALIZE','受験生・保護者やアウトドアブランドのユーザー意識を調査。図やイラストで可視化し、チーム・クライアントと認識を共有。'],['ROLE','職務経歴書に記載されている担当範囲は、企画・イラスト発注・デザイン制作・調査結果の可視化です。']]},
  {title:'リサーチから企画・改善へ',description:'読み手やユーザーの理解と、制作後の反応の確認。定性・定量の両面から、よりよい伝え方を探してきました。',details:[['USER RESEARCH','アンケートによる定量調査、デプスインタビュー等の定性調査、カスタマージャーニーマップ作成・ペルソナ分析を経験。'],['PROPOSAL','朝日学情と連携し、月桂冠の新卒採用サイト改修に向けた市場調査・提案資料を作成。自動車ディーラーの採用サイト・採用パンフレットの提案に向けた市場動向の整理も担当し、受注に貢献。'],['ANALYSIS','GA4とUTMパラメーターで流入・反応を確認。生成AIによる分析・可視化も活用し、数値を企画・デザインの改善につなげる取り組みを進めています。']]}
];

projects[1].title='LINE公式アカウントの案内チラシ';
projects[1].description='SKYMENU CloudのLINE公式アカウントを紹介するチラシ。チャットでの質問、実践事例、イベントや新機能の情報を案内しています。';
projects[1].images=[
 {src:'assets/line-chat.webp',width:1132,height:1600,caption:'チャット質問サービスの開始案内',alt:'SKYMENU Cloud LINE公式アカウントのチャット質問サービス開始を案内するチラシ'},
 {src:'assets/line-registration.webp',width:1132,height:1600,caption:'公式アカウント・配信内容の紹介',alt:'イベント案内、実践事例、新機能情報とチャット質問を紹介するLINE登録案内チラシ'},
 {src:'assets/line-0017.webp',width:1132,height:1600,caption:'実践事例・イベント情報の案内',alt:'実践事例やイベント情報、チャット質問の利用を案内するLINE公式アカウントのチラシ'},
 {src:'assets/line-2023.webp',width:1132,height:1600,caption:'授業づくりに役立つ情報の紹介',alt:'実践事例、教材、イベント情報とぱっと見活用法の配信を紹介するLINE公式アカウントのチラシ'}
];

projects[4].title='タラスブルバ｜ペルソナ分析・カスタマージャーニーマップ';
projects[4].description='アウトドアへの関心の有無でユーザーを分け、各4タイプのペルソナを整理。認知・情報収集から比較、検討、購入に至る行動や思考、感情の変化を可視化したリサーチ資料です。';
projects[4].detailLabel='整理した内容を見る';
projects[4].details=[['PERSONA','アウトドアに関心がある人・ない人それぞれ4タイプを設定し、属性や行動の特徴、ゴール・課題点を整理。'],['JOURNEY','認知興味・情報収集・比較・検討・アウトドア製品購入の5フェーズで、場所、チャネル、行動・タッチポイント、思考、感情曲線を整理。'],['INSIGHT','関心がある人とない人の違いを比較し、既存コミュニティからの情報収集、実物を試す体験、日常で使える製品への関心など、アプローチを考えるためのインサイトをまとめています。']];
projects[4].images=[{"src": "assets/taras-boulba-cjm-1.webp", "caption": "関心がある人のペルソナ", "alt": "タラスブルバのリサーチ資料：関心がある人のペルソナ", "width": 2000, "height": 1415}, {"src": "assets/taras-boulba-cjm-2.webp", "caption": "関心がある人のカスタマージャーニー", "alt": "タラスブルバのリサーチ資料：関心がある人のカスタマージャーニー", "width": 2200, "height": 1556}, {"src": "assets/taras-boulba-cjm-3.webp", "caption": "関心がない人のペルソナ", "alt": "タラスブルバのリサーチ資料：関心がない人のペルソナ", "width": 2200, "height": 1556}, {"src": "assets/taras-boulba-cjm-4.webp", "caption": "関心がない人のカスタマージャーニー", "alt": "タラスブルバのリサーチ資料：関心がない人のカスタマージャーニー", "width": 2200, "height": 1556}];

function createGallery(items){
  const gallery=document.createElement('div');gallery.className='flyer-gallery';
  const figure=document.createElement('figure');figure.className='flyer-main';
  const link=document.createElement('a');link.addEventListener('click',event=>{event.preventDefault();openImage(link.href,img.alt,caption.textContent,img.classList.contains('long-artwork'))});
  const img=document.createElement('img');img.width=1132;img.height=1600;img.decoding='async';link.append(img);
  const caption=document.createElement('figcaption');caption.setAttribute('aria-live','polite');figure.append(link,caption);
  const thumbnails=document.createElement('div');thumbnails.className='flyer-thumbnails';thumbnails.setAttribute('role','group');thumbnails.setAttribute('aria-label','表示する作品画像を選ぶ');
  const buttons=items.map((item,index)=>{
    const button=document.createElement('button');button.type='button';button.className='flyer-thumbnail';button.setAttribute('aria-label',item.caption+'を表示');
    const thumbnail=document.createElement('img');thumbnail.src=item.previewSrc||item.src;thumbnail.alt='';thumbnail.width=item.previewWidth||item.width||1132;thumbnail.height=item.previewHeight||item.height||1600;thumbnail.loading='lazy';button.append(thumbnail);
    button.addEventListener('click',()=>{select(index);button.scrollIntoView({block:'nearest',inline:'nearest',behavior:'auto'})});
    thumbnails.append(button);return button;
  });
  function select(index){
    const item=items[index];img.width=item.width||1132;img.height=item.previewHeight||item.height||1600;img.width=item.previewWidth||item.width||1132;img.src=item.previewSrc||item.src;img.alt=item.alt;img.classList.toggle('portrait-artwork',(item.previewHeight||item.height||1600)/(item.previewWidth||item.width||1132)>1.15);img.classList.toggle('long-artwork',(item.height||1600)/(item.width||1132)>3);link.href=item.src;link.setAttribute('aria-label',item.caption+'を拡大表示');caption.textContent=(items.length>1?(index+1)+' / '+items.length+'　':'')+item.caption+(item.previewSrc?'（上部プレビュー・クリックで全体）':'');
    buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
  }
  select(0);if(items.length>1)gallery.append(figure,thumbnails);else gallery.append(figure);return gallery;
}

projects.push({title:'UNION｜タベゴロー卓上カレンダー',description:'UNIONのバナナのキャラクター「タベゴロー」を用いた卓上カレンダー。日付に加え、卸売市場の休市日・開市日を記号で掲載した、仕事で使えるカレンダーです。',details:[]});

projects[5].images=[
 {src:'assets/union-calendar-1.webp',caption:'卓上カレンダーの全体写真',alt:'UNIONのロゴとタベゴロー、卸売市場の休市日・開市日を掲載した2021年1月の卓上カレンダー',width:2400,height:1800},
 {src:'assets/union-calendar-2.webp',caption:'日付とキャラクターを用いた紙面の詳細',alt:'タベゴローのイラスト、バナナの豆知識や流通の図解を掲載したカレンダーの紙面',width:2400,height:1800}
];
projects[3].title='通信教材「ポピー」｜外表紙の企画・ディレクション';
projects[3].description='通信教材「ポピー」の外表紙を約1年半担当。企画考案、進捗管理、イラスト発注、デザイン制作まで進行しました。地図とクイズを組み合わせて学びへの興味を引き出す表紙から、題材と色合いの異なる5点を選んで掲載しています。';
projects[3].detailLabel='担当内容を見る';
projects[3].details=[['ROLE','企画・進行管理・イラスト発注・デザイン制作を担当。調査結果の共有にも図やイラストを活用してきました。']];
projects[3].images=[
 {src:'assets/popy-5-2019-04.webp',width:2527,height:1701,caption:'小学ポピー5年・2019年4月号 外表紙',alt:'ヨーロッパの地図とクイズを組み合わせた小学ポピー5年4月号の外表紙'},
 {src:'assets/popy-5-2019-08.webp',width:2527,height:1701,caption:'小学ポピー5年・2019年8月号 外表紙',alt:'ブラジルの地図とクイズを組み合わせた小学ポピー5年8月号の外表紙'},
 {src:'assets/popy-2-1.webp',width:2504,height:1701,caption:'小学ポピー5年・2019年10月号 外表紙',alt:'日本地図と各地の文化・名所を題材にしたクイズを組み合わせた小学ポピー5年10月号の外表紙'},
 {src:'assets/popy-1-1.webp',width:2516,height:1701,caption:'小学ポピー6年・2019年12月号 外表紙',alt:'カナダの地図とクイズを組み合わせた小学ポピー6年12月号の外表紙'},
 {src:'assets/popy-5-2020-01.webp',width:2516,height:1701,caption:'小学ポピー5年・2020年1月号 外表紙',alt:'ロシアの地図とクイズを組み合わせた小学ポピー5年1月号の外表紙'}
];
projects.push({
 title:'病院｜利用体験の整理とデジタルサイネージ提案',
 description:'病院の利用経験者8名へのグループインタビューをもとに、待ち時間、接客、院内の情報提供に関するニーズを整理した資料です。良い体験・悪い体験を比較し、待ち時間・受付番号の表示、病気の説明、癒しの動画、院内マップなど、デジタルサイネージで届ける情報の提案につなげています。',
 detailLabel:'調査から提案への流れを見る',
 details:[['RESEARCH','調査人数と方法は掲載資料の記載に基づきます。ホワイトボード写真では、利用体験を付箋で分類し、待ち時間やコミュニケーションの課題を整理しています。'],['PROPOSAL','患者への情報提供に加え、病院の案内・求人、スタッフ向け教育や連絡事項の配信も提案。資料に示す導入メリットは提案段階のもので、実測された改善成果ではありません。']],
 images:[
  {src:'assets/hospital-research-1.webp',width:2200,height:1556,caption:'1. 病院経営・患者・業務の課題を整理',alt:'病院を取り巻く課題を病院経営、患者、業務の3つの視点で整理した資料'},
  {src:'assets/hospital-research-2.webp',width:2200,height:1556,caption:'2. グループインタビューからニーズを抽出',alt:'病院利用経験者8名へのグループインタビューから良い体験と悪い体験を比較しニーズを整理した資料'},
  {src:'assets/hospital-research-3.webp',width:2200,height:1556,caption:'3. ニーズをサイネージの配信内容へ展開',alt:'病院案内、患者とのコミュニケーション、スタッフ教育の3方向でデジタルサイネージの活用を提案した資料'},
  {src:'assets/hospital-workshop.webp',caption:'利用体験を整理したホワイトボード',alt:'病院での良い体験と悪い体験、情報提供の課題を付箋と手書きで整理したホワイトボード',width:2400,height:1350}
 ]
});
projects.push({
 title:'クラウディア｜2018年カレンダー',
 description:'ブライダル衣装の写真と月間カレンダーを組み合わせた、2018年のカレンダー。装いと配色の異なる4点を選んで掲載しています。',details:[],
 images:[3,8,11,14].map(page=>({src:'assets/kuraudia-'+page+'.webp',width:2231,height:1501,caption:'2018年カレンダー｜'+(page-2)+'月',alt:'ブライダル衣装の写真と日付を組み合わせた2018年'+(page-2)+'月のカレンダー'}))
});
projects.push({
 title:'クラウディア｜メルマガ「KLDnews」',
 description:'新作ドレス・タキシードやカタログの紹介、人気商品のランキングを届けるメールマガジン。共通のレイアウトを使いながら、各号のテーマに合わせて衣装写真と見出しを展開しています。各号の上部をプレビュー表示し、クリックすると縦長の全体をご覧いただけます。',details:[],
 images:[
  {src:'assets/kldnews-flower-dress.webp',previewSrc:'assets/kldnews-flower-dress-preview.webp',previewWidth:620,previewHeight:1180,width:620,height:4200,caption:'フラワードレスの紹介',alt:'フラワードレスの紹介と衣装の人気ランキングを掲載した縦長のクラウディアのメルマガ'},
  {src:'assets/kldnews-trend-dress.webp',previewSrc:'assets/kldnews-trend-dress-preview.webp',previewWidth:620,previewHeight:1180,width:620,height:4200,caption:'トレンドドレスの紹介',alt:'トレンドドレスの紹介と衣装の人気ランキングを掲載した縦長のクラウディアのメルマガ'},
  {src:'assets/kldnews-navy-tuxedo.webp',previewSrc:'assets/kldnews-navy-tuxedo-preview.webp',previewWidth:1240,previewHeight:2359,width:1240,height:8396,caption:'ネイビータキシードの紹介',alt:'ネイビータキシードの紹介と衣装の人気ランキングを掲載した縦長のクラウディアのメルマガ'},
  {src:'assets/kldnews-new-catalog.webp',previewSrc:'assets/kldnews-new-catalog-preview.webp',previewWidth:620,previewHeight:1180,width:620,height:4200,caption:'新カタログの紹介',alt:'新カタログの紹介と衣装の人気ランキングを掲載した縦長のクラウディアのメルマガ'},
  {src:'assets/kldnews-1.webp',previewSrc:'assets/kldnews-1-preview.webp',previewWidth:2200,previewHeight:4187,width:2200,height:14904,caption:'新作タキシードの紹介',alt:'新作タキシードの紹介と衣装の人気ランキングを掲載した縦長のクラウディアのメルマガ'}
 ]
});
// PDF portfolio: unique works only; original document is unchanged.
projects.push(...[
  {
    "title": "クラーク記念国際高等学校｜札幌校 学校案内",
    "description": "札幌校の特色を伝える学校案内。「安心感とやさしさ」を軸にパンフレット全体のデザインをディレクションしました。学習システムを見開きのピラミッド図で整理し、コースごとの特徴を写真・図・誌面構成で伝えています。",
    "details": [],
    "images": [
      {
        "src": "assets/portfolio-clark-1.webp",
        "width": 1448,
        "height": 1050,
        "caption": "学習システムの見開き",
        "alt": "クラーク記念国際高等学校｜札幌校 学校案内：学習システムの見開き"
      },
      {
        "src": "assets/portfolio-clark-2.webp",
        "width": 812,
        "height": 589,
        "caption": "カリキュラム・学校生活",
        "alt": "クラーク記念国際高等学校｜札幌校 学校案内：カリキュラム・学校生活"
      },
      {
        "src": "assets/portfolio-clark-3.webp",
        "width": 1250,
        "height": 906,
        "caption": "留学・国際コース",
        "alt": "クラーク記念国際高等学校｜札幌校 学校案内：留学・国際コース"
      },
      {
        "src": "assets/portfolio-clark-4.webp",
        "width": 1250,
        "height": 905,
        "caption": "スポーツ・多様な学習コース",
        "alt": "クラーク記念国際高等学校｜札幌校 学校案内：スポーツ・多様な学習コース"
      }
    ]
  },
  {
    "title": "タイガー｜抗菌メッキ製品の同梱チラシ",
    "description": "ケニファインシリーズの認知と購入促進を目的とした同梱チラシ。リピーターを対象に、製品の特徴から家庭での使い方、関連製品、購入サイトへと読み進められる構成を設計しました。",
    "details": [],
    "images": [
      {
        "src": "assets/portfolio-kenifine-1.webp",
        "width": 1188,
        "height": 1681,
        "caption": "表面｜製品の特徴を図解",
        "alt": "タイガー｜抗菌メッキ製品の同梱チラシ：表面｜製品の特徴を図解"
      },
      {
        "src": "assets/portfolio-kenifine-2.webp",
        "width": 1188,
        "height": 1681,
        "caption": "裏面｜使用シーンと関連製品",
        "alt": "タイガー｜抗菌メッキ製品の同梱チラシ：裏面｜使用シーンと関連製品"
      }
    ]
  },
  {
    "title": "ダイイチ｜婦人服ブランドのリーフレット",
    "description": "高級婦人服の3ブランドを紹介するリーフレット。各ブランドのイメージに合わせて背景加工とレイアウトを制作。撮影前にデザインラフを作成し、カメラマンへ仕上がりのイメージを共有しました。",
    "details": [],
    "images": [
      {
        "src": "assets/portfolio-daiichi-1.webp",
        "width": 1446,
        "height": 931,
        "caption": "表面｜3ブランドの世界観",
        "alt": "ダイイチ｜婦人服ブランドのリーフレット：表面｜3ブランドの世界観"
      },
      {
        "src": "assets/portfolio-daiichi-2.webp",
        "width": 1446,
        "height": 937,
        "caption": "裏面｜商品紹介",
        "alt": "ダイイチ｜婦人服ブランドのリーフレット：裏面｜商品紹介"
      }
    ]
  },
  {
    "title": "神戸市｜プロモーション用表紙・シンボル提案",
    "description": "神戸市の東京圏プロモーション業務の企画コンペに参加。アートディレクターの指示のもと、神戸の海（Harbor）と山（Hills）をシンボル化したマークと小冊子の表紙を提案しました。",
    "details": [],
    "images": [
      {
        "src": "assets/portfolio-kobe-1.webp",
        "width": 1244,
        "height": 1760,
        "caption": "海と山を象徴する表紙案",
        "alt": "神戸市｜プロモーション用表紙・シンボル提案：海と山を象徴する表紙案"
      }
    ]
  },
  {
    "title": "パソナ｜きょうと福祉就活サポートプログラム",
    "description": "就職を目指す学生に向けた告知チラシ。親しみやすいメインビジュアルのイラストからデザインまで制作し、プログラムの特徴や参加の流れを読み取りやすく整理しました。",
    "details": [],
    "images": [
      {
        "src": "assets/portfolio-welfare-1.webp",
        "width": 1188,
        "height": 1681,
        "caption": "表面｜イラストを用いた告知",
        "alt": "パソナ｜きょうと福祉就活サポートプログラム：表面｜イラストを用いた告知"
      },
      {
        "src": "assets/portfolio-welfare-2.webp",
        "width": 1188,
        "height": 1681,
        "caption": "裏面｜特徴・参加の流れ",
        "alt": "パソナ｜きょうと福祉就活サポートプログラム：裏面｜特徴・参加の流れ"
      }
    ]
  },
  {
    "title": "大阪エリア｜地図に使う施設イラスト",
    "description": "大阪府内の複数の地図に配置する施設イラストをIllustratorで制作。実際の建物の特徴をシンプルな形にまとめ、地図を制作するデザイナーが使いやすいデータへ調整しました。地図担当のデザイナーとチームで進めた案件です。",
    "details": [],
    "images": [
      {
        "src": "assets/portfolio-osaka-1.webp",
        "width": 1568,
        "height": 1894,
        "caption": "施設・建物のイラスト",
        "alt": "大阪エリア｜地図に使う施設イラスト：施設・建物のイラスト"
      },
      {
        "src": "assets/portfolio-osaka-2.webp",
        "width": 1494,
        "height": 783,
        "caption": "名所・施設などのイラスト",
        "alt": "大阪エリア｜地図に使う施設イラスト：名所・施設などのイラスト"
      },
      {
        "src": "assets/portfolio-osaka-3.webp",
        "width": 1450,
        "height": 1013,
        "caption": "地図への展開例（チーム制作）",
        "alt": "大阪エリア｜地図に使う施設イラスト：地図への展開例（チーム制作）"
      }
    ]
  },
  {
    "title": "中村藤吉本店｜オンラインストアへの誘導カード提案",
    "description": "店舗でのコミュニケーションをきっかけにオンラインストアへ誘導するカードを企画・提案。抹茶パフェと生茶ゼリーを題材に、印象に残るイラストとデザインを制作しました。",
    "details": [],
    "images": [
      {
        "src": "assets/portfolio-nakamura-1.webp",
        "width": 469,
        "height": 774,
        "caption": "A案｜抹茶パフェ",
        "alt": "中村藤吉本店｜オンラインストアへの誘導カード提案：A案｜抹茶パフェ"
      },
      {
        "src": "assets/portfolio-nakamura-2.webp",
        "width": 469,
        "height": 774,
        "caption": "B案｜生茶ゼリー",
        "alt": "中村藤吉本店｜オンラインストアへの誘導カード提案：B案｜生茶ゼリー"
      }
    ]
  },
  {
    "title": "学情｜採用バナーのイラスト",
    "description": "朝日学情ナビに掲載する企業の採用募集バナーを制作。イラストラフをクライアントに確認してもらいながら、段階的に仕上げました。",
    "details": [],
    "images": [
      {
        "src": "assets/portfolio-gakujo-1.webp",
        "width": 1040,
        "height": 570,
        "caption": "採用募集用Webバナー",
        "alt": "学情｜採用バナーのイラスト：採用募集用Webバナー"
      }
    ]
  },
  {
    "title": "料理をテーマにした年賀状",
    "description": "社内スタッフに配る年賀状を、イラストからデザインまで制作。料理をテーマに展開し、イラストはPhotoshopを使って描いています。",
    "details": [],
    "images": [
      {
        "src": "assets/portfolio-newyear-1.webp",
        "width": 658,
        "height": 955,
        "caption": "2019年｜鍋料理",
        "alt": "料理をテーマにした年賀状：2019年｜鍋料理"
      },
      {
        "src": "assets/portfolio-newyear-2.webp",
        "width": 1128,
        "height": 763,
        "caption": "2020年｜チーズとねずみ",
        "alt": "料理をテーマにした年賀状：2020年｜チーズとねずみ"
      }
    ]
  }
]);
projects.push(...[
  {
    "title": "ノートルダム｜保護者向け学校広報物",
    "description": "保護者の方へ配布する学校広報物「Notre Dame Times」。先生からの指示に沿って制作を担当しました。海外研修の様子や学校生活、保護者への案内を写真とともに掲載しています。",
    "details": [],
    "images": [
      {
        "src": "assets/notredame-1.webp",
        "width": 2381,
        "height": 1684,
        "caption": "表紙・裏表紙",
        "alt": "表紙・裏表紙"
      },
      {
        "src": "assets/notredame-2.webp",
        "width": 2381,
        "height": 1684,
        "caption": "中面｜オーストラリア海外研修・学校生活",
        "alt": "中面｜オーストラリア海外研修・学校生活"
      }
    ]
  },
  {
    "title": "アシックス｜展示会用製品紹介パネル",
    "description": "アシックスの展示会で使用する、木製バット「OIL FINISH WOOD」の製品紹介パネル。オイルフィニッシュ加工の特徴、ウレタン塗装との違い、使用選手のコメントを横長の展示用パネルにまとめています。",
    "details": [],
    "images": [
      {
        "src": "assets/asics-1.webp",
        "width": 3200,
        "height": 873,
        "caption": "OIL FINISH WOOD｜展示会パネル",
        "alt": "OIL FINISH WOOD｜展示会パネル"
      }
    ]
  }
]);


// USB作品の追加（2026-10-25）
projects[0].images=[{"src": "assets/ict-04.webp", "width": 2600, "height": 1851, "caption": "文部科学省に聞く｜生成AIを教師のパートナーに（見開き）", "alt": "情報誌「学校とICT」の誌面：文部科学省に聞く｜生成AIを教師のパートナーに"}, {"src": "assets/ict-01.webp", "width": 2600, "height": 1851, "caption": "解説｜校務DXの現状と生成AIの利活用（見開き）", "alt": "情報誌「学校とICT」の誌面：解説｜校務DXの現状と生成AIの利活用"}, {"src": "assets/ict-06.webp", "width": 2600, "height": 1851, "caption": "インタビュー｜今こそ教師の指導性の発揮を（見開き）", "alt": "情報誌「学校とICT」の誌面：インタビュー｜今こそ教師の指導性の発揮を"}, {"src": "assets/ict-07.webp", "width": 2600, "height": 1851, "caption": "レポート｜学校とICTフォーラム2026 対談（見開き）", "alt": "情報誌「学校とICT」の誌面：レポート｜学校とICTフォーラム2026 対談"}, {"src": "assets/ict-08.webp", "width": 2600, "height": 1851, "caption": "インタビュー｜教職員同士のコミュニケーションで「チームで働く学校」へ（見開き）", "alt": "情報誌「学校とICT」の誌面：インタビュー｜教職員同士のコミュニケーションで「チームで働く学校」へ"}, {"src": "assets/ict-09.webp", "width": 2600, "height": 1851, "caption": "レポート｜エキスパートTeacher勉強会（見開き）", "alt": "情報誌「学校とICT」の誌面：レポート｜エキスパートTeacher勉強会"}, {"src": "assets/ict-13.webp", "width": 2600, "height": 1851, "caption": "Information｜発表ノート教材の紹介・SKYMENU Cloud オンラインセミナー（見開き）", "alt": "情報誌「学校とICT」の誌面：Information｜発表ノート教材の紹介・SKYMENU Cloud オンラインセミナー（見開き）"}, {"src": "assets/ict-12.webp", "width": 2600, "height": 1851, "caption": "製品紹介｜マインドシート（見開き）", "alt": "情報誌「学校とICT」の誌面：製品紹介｜マインドシート"}, {"src": "assets/ict-10.webp", "width": 2600, "height": 1851, "caption": "Teacher's Community Site｜「先生教えて！」から質問をピックアップ（見開き）", "alt": "情報誌「学校とICT」の誌面：Teacher's Community Site｜「先生教えて！」から質問をピックアップ"}, {"src": "assets/ict-11.webp", "width": 2600, "height": 1851, "caption": "お知らせ｜SKYMENUエキスパートTeacher募集（見開き）", "alt": "情報誌「学校とICT」の誌面：お知らせ｜SKYMENUエキスパートTeacher募集"}];
projects[0].title='「学校とICT」｜教育関係者向け情報誌';
projects[0].description='全国の教育委員会・学校に無料で届ける、ICT活用教育の情報誌（偶数月発行）。文部科学省への取材記事や有識者インタビュー、全国の学校の実践事例などを掲載しています。レイアウト〜印刷までの進行管理を担当しました。';
projects[0].details=[['TEAM','ライターを含む約7名の制作チームで、取材記事の執筆から校正、進行管理までを分担しています。']];
const usb={};
usb.line=projects.push({"title": "SKYMENU Cloud LINE公式アカウント｜配信画像・バナー", "description": "SKYMENU CloudのLINE公式アカウントで教員向けに配信した画像。オンラインセミナーや勉強会の告知、実践事例、発表ノート教材、活用術の紹介などです。", "images": [{"src": "assets/line-before-after.webp", "width": 1660, "height": 1290, "caption": "オンラインセミナー告知の改善（左：改善前／右：改善後）", "alt": "LINEのオンラインセミナー告知画像の改善前と改善後の比較。改善後は体験できる内容と参加するメリットを具体的に示している"}, {"src": "assets/line-banner-3.webp", "width": 900, "height": 1229, "caption": "オンライン勉強会「探究的な学びを充実させる授業づくり」", "alt": "LINE公式アカウントの配信画像：オンライン勉強会「探究的な学びを充実させる授業づくり」"}, {"src": "assets/line-banner-4.webp", "width": 900, "height": 900, "caption": "新学期から使える便利な活用術", "alt": "LINE公式アカウントの配信画像：新学期から使える便利な活用術"}, {"src": "assets/line-msg-07.webp", "width": 900, "height": 918, "caption": "校内研修 投稿大公開", "alt": "LINE公式アカウントの配信画像：校内研修 投稿大公開"}, {"src": "assets/line-msg-05.webp", "width": 900, "height": 1520, "caption": "コミュニティサイト「マイ活用」の紹介", "alt": "LINE公式アカウントの配信画像：コミュニティサイト「マイ活用」の紹介"}, {"src": "assets/line-banner-1.webp", "width": 900, "height": 900, "caption": "実践事例の紹介（千葉県松戸市立上本郷第二小学校）", "alt": "LINE公式アカウントの配信画像：実践事例の紹介（千葉県松戸市立上本郷第二小学校）"}, {"src": "assets/line-msg-02.webp", "width": 900, "height": 1326, "caption": "EDIX東京 校務用スマートフォン整備の相談案内", "alt": "LINE公式アカウントの配信画像：EDIX東京 校務用スマートフォン整備の相談案内"}], "details": []})-1;
usb.pamph=projects.push({"title": "学習活動ソフトウェア「SKYMENU 2025」｜パンフレット", "description": "SKYMENU Pro 2025（コンピュータ教室向け）とSKYMENU Class 2025（タブレット端末向け）のパンフレット。表紙と中面のレイアウトを担当しました。", "images": [{"src": "assets/skymenu-pro-cover.webp", "width": 1407, "height": 2000, "caption": "SKYMENU Pro 2025｜表紙", "alt": "SKYMENU Pro 2025 パンフレットの表紙"}, {"src": "assets/skymenu-pro-spread.webp", "width": 2600, "height": 1849, "caption": "SKYMENU Pro 2025｜見開き", "alt": "SKYMENU Pro 2025 パンフレットの見開き"}, {"src": "assets/skymenu-class-cover.webp", "width": 1407, "height": 2000, "caption": "SKYMENU Class 2025｜表紙", "alt": "SKYMENU Class 2025 パンフレットの表紙"}, {"src": "assets/skymenu-class-spread.webp", "width": 2600, "height": 1847, "caption": "SKYMENU Class 2025｜見開き", "alt": "SKYMENU Class 2025 パンフレットの見開き"}], "details": []})-1;
usb.flyers=projects.push({"title": "SKYMENU｜セミナー・コミュニティサイトのチラシ", "description": "SKYMENU Cloudのオンラインセミナー告知チラシなど。カスタマーサポートチームからの依頼を受け、通年でレイアウトを担当しました。", "images": [{"src": "assets/sky-seminar-flyer.webp", "width": 1406, "height": 2000, "caption": "SKYMENU Cloud オンラインセミナー", "alt": "SKYMENU Cloud オンラインセミナーの告知チラシ"}, {"src": "assets/sky-tcs-flyer.webp", "width": 1405, "height": 2000, "caption": "Teacher's Community Site・エキスパートTeacher募集", "alt": "SKYMENU Teacher's Community SiteとエキスパートTeacher募集のチラシ"}], "details": []})-1;
usb.style=projects.push({"title": "採用情報誌「Skyスタイル」｜表紙", "description": "Ｓｋｙ株式会社の採用情報誌の表紙。「Skyスタイル Magazine Vol.12」と「好働力! Magazine」の2点を掲載しています。", "images": [{"src": "assets/sky-style-cover-1.webp", "width": 1407, "height": 2000, "caption": "Skyスタイル Magazine Vol.12", "alt": "採用情報誌 Skyスタイル Magazine Vol.12 の表紙"}, {"src": "assets/sky-style-cover-2.webp", "width": 1407, "height": 2000, "caption": "好働力! Magazine", "alt": "採用情報誌 好働力! Magazine の表紙"}], "details": []})-1;
usb.interview=projects.push({"title": "「SKYSEA Client View NEWS」｜情報システム担当者向け情報誌", "description": "企業・団体でパソコンやネットワークを管理する情報システム担当者に向けて、Ｓｋｙ株式会社が発行する情報誌。自社製品「SKYSEA Client View」（情報漏えい対策とIT機器の運用管理を支援するソフトウェア）の導入事例や、セキュリティ専門家へのインタビューなどを掲載しています。対談記事と、寄稿による連載記事「のみぞうのちょっと一息しませんか？」のレイアウトを担当。連載は毎号テーマに合わせて見せ方を工夫し、読者を飽きさせない誌面づくりを心がけました。", "images": [{"src": "assets/skysea-interview-1.webp", "width": 2600, "height": 1851, "caption": "対談記事｜ハードニング競技会からひも解くSKYSEA Client Viewの真価（1–2ページ）", "alt": "SKYSEA Client Viewのインタビュー記事 1–2ページの見開き"}, {"src": "assets/skysea-interview-2.webp", "width": 2600, "height": 1877, "caption": "対談記事｜ハードニング競技会からひも解くSKYSEA Client Viewの真価（3–4ページ）", "alt": "SKYSEA Client Viewのインタビュー記事 3–4ページの見開き"}, {"src": "assets/column-1.webp", "width": 2600, "height": 1865, "caption": "連載記事「のみぞうのちょっと一息しませんか？」第1回", "alt": "連載コラム第1回の見開き"}, {"src": "assets/column-3.webp", "width": 2600, "height": 1848, "caption": "連載記事「のみぞうのちょっと一息しませんか？」第3回", "alt": "連載コラム第3回の見開き"}, {"src": "assets/column-4.webp", "width": 2600, "height": 1846, "caption": "連載記事「のみぞうのちょっと一息しませんか？」第4回", "alt": "連載コラム第4回の見開き"}, {"src": "assets/column-5.webp", "width": 2600, "height": 1856, "caption": "連載記事「のみぞうのちょっと一息しませんか？」第5回", "alt": "連載コラム第5回の見開き"}], "details": []})-1;
usb.column=projects.push({"title": "「SKYSEA Client View NEWS」｜連載コラム「のみぞうのちょっと一息しませんか？」", "description": "同誌で連載している、セキュリティや技術をテーマにしたコラム。毎回共通の誌面フォーマットで、回ごとのテーマに合わせて見出しや図版を展開しています。第1・3・4・5回のレイアウトを担当しました。", "images": [{"src": "assets/column-1.webp", "width": 2600, "height": 1865, "caption": "第1回｜何から始めたらいいかわからないあなたへ", "alt": "連載コラム第1回の見開き"}, {"src": "assets/column-3.webp", "width": 2600, "height": 1848, "caption": "第3回｜セキュリティトレーニングツール「ZANSIN」で遊ぼう！", "alt": "連載コラム第3回の見開き"}, {"src": "assets/column-4.webp", "width": 2600, "height": 1846, "caption": "第4回｜あなたの知らない技術同人誌の世界", "alt": "連載コラム第4回の見開き"}, {"src": "assets/column-5.webp", "width": 2600, "height": 1856, "caption": "第5回｜やってみようCTF", "alt": "連載コラム第5回の見開き"}], "details": []})-1;
usb.shiori=projects.push({"title": "2025年度パートナー懇親会｜観光のしおり", "description": "Ｓｋｙ株式会社のパートナー懇親会（福岡）の観光のしおり。表紙にスケジュールと地図、中面に訪問先の写真と案内図を掲載しています。", "images": [{"src": "assets/shiori-1.webp", "width": 2600, "height": 1839, "caption": "表紙・スケジュール", "alt": "パートナー懇親会 観光のしおりの表紙とスケジュール"}, {"src": "assets/shiori-2.webp", "width": 2600, "height": 1839, "caption": "中面｜太宰府天満宮", "alt": "観光のしおり中面 太宰府天満宮の紹介と案内図"}], "details": []})-1;
usb.logo=projects.push({"title": "クチュール クレオ｜ロゴ", "description": "「COUTURE CREO（クチュール クレオ）」のロゴ。ウェディングらしい丸みを帯びた形に、和の縁起の良さを感じさせる要素を取り入れました。今後の化粧品展開も見据え、先進的な印象と柔らかさを両立させています。", "images": [{"src": "assets/couture-creo-logo.webp", "width": 2000, "height": 1415, "caption": "ロゴの組み方のバリエーション", "alt": "COUTURE CREO クチュール クレオのロゴ"}], "details": []})-1;
projects[usb.line].details=projects[1].details;projects[1].details=[];
projects[1].images.unshift(...[{"src": "assets/line-flyer-scan-2.webp", "width": 1124, "height": 1600, "caption": "授業づくりに役立つ情報が満載", "alt": "SKYMENU Cloud LINE公式アカウントを案内するチラシ：授業づくりに役立つ情報が満載（2）"}, {"src": "assets/line-flyer-scan-4.webp", "width": 1123, "height": 1600, "caption": "友だち登録の案内", "alt": "SKYMENU Cloud LINE公式アカウントを案内するチラシ：友だち登録の案内"}]);
{const d=projects.find(p=>p.title==='ダイイチ｜婦人服ブランドのリーフレット');d.images.push(...[{"src": "assets/daiichi-scan-1.webp", "width": 2200, "height": 1415, "caption": "別のリーフレット（1）", "alt": "ダイイチ 婦人服ブランドの別のリーフレット（1）"}, {"src": "assets/daiichi-scan-2.webp", "width": 2200, "height": 1425, "caption": "別のリーフレット（2）", "alt": "ダイイチ 婦人服ブランドの別のリーフレット（2）"}]);d.description=d.description.replace('高級婦人服の3ブランドを紹介するリーフレット。','高級婦人服の3ブランドを紹介するリーフレット（2点掲載）。');}
usb.hapyo=projects.push({"title": "「2学期の発表ノート教材」｜誌面・LINE・Webの3媒体展開", "description": "教員向けコミュニティサイトで公開した2学期向けの［発表ノート］教材を、情報誌「学校とICT」・LINE・コミュニティサイトの3媒体で紹介しました。元教員の企画担当者と相談しながら、教材の内容や見せ方を改善して掲載しています。", "details": [], "images": [{"src": "assets/ict-05.webp", "width": 2600, "height": 1851, "caption": "情報誌「学校とICT」の誌面（見開き）", "alt": "情報誌「学校とICT」に掲載した2学期の発表ノート教材の見開き"}, {"src": "assets/line-banner-5.webp", "width": 900, "height": 1234, "caption": "LINE公式アカウントの配信画像", "alt": "LINE公式アカウントで配信した2学期の発表ノート教材の画像"}, {"src": "assets/hapyo-web.webp", "previewSrc": "assets/hapyo-web-preview.webp", "previewWidth": 800, "previewHeight": 1520, "width": 800, "height": 6880, "caption": "コミュニティサイトの記事ページ", "alt": "SKYMENU Teacher's Community Siteに掲載した2学期の発表ノート教材の記事ページ全体"}], "showDetails": true})-1;
{const lp=projects[usb.line];projects[usb.hapyo].details=lp.details.filter(d=>d[0]!=='IMPROVEMENT');lp.details=lp.details.filter(d=>d[0]==='IMPROVEMENT');}
projects[usb.line].details.push(['FLYER RESULT','SKYMENU Cloud LINE公式アカウントへの誘導チラシも制作。紙媒体からの登録施策として、1枚あたり平均約200人の友だち登録に貢献しました。']);
for(const t of ['UNION｜タベゴロー卓上カレンダー','クラウディア｜2018年カレンダー']){const c=projects.find(p=>p.title===t);if(c)c.description+='日付のコマ入れ作業や、読み上げ校正の進行も担当しました。';}
// AI section: three tools, each with its own image (2026-10-25)
const aiStart=projects.length;
projects.push(
 {title:'デジタル検版アプリ｜朱書き漏れの防止',
  description:'入稿前や色校修正後は、変更箇所を校正紙に朱書きして印刷会社へ伝えます。修正中に意図しない変化が起きることもあり、目視だけでは朱書きの書き漏れが起きやすい状況でした。修正前後のPDFを比較して変更箇所を表示するアプリを作成し、朱書きの漏れ（＝印刷会社への伝達漏れ）を防止。インストール不要で、ブラウザーにドラッグ＆ドロップするだけで使える形にしました。',
  details:[],
  images:[{src:'assets/ai-kenpan.webp',width:1600,height:1200,caption:'修正前後のPDFを比較し、変更箇所を検出（架空のサンプルデータ）',alt:'検版アプリの画面。修正前と修正後のPDFを読み込み、テキストの変更一覧と重ね合わせ表示で差分を示している'}]},
 {title:'動画一括抽出アプリ｜作業時間の短縮',
  description:'PowerPoint内の動画を一括で抽出し、静止画も取得できるアプリをPythonで作成。約300本の処理を約3時間から約20分に短縮しました（概算）。',
  details:[],
  images:[{src:'assets/ai-video.webp',width:1600,height:1000,caption:'PowerPoint内の動画を一括抽出',alt:'PowerPointファイルから約300本の動画を一括抽出し、作業時間を約3時間から約20分に短縮したことを示す図'}]},
 {title:'社内報の社員紹介ページ｜更新に強い表組の仕組み',
  description:'データ結合で配置した顔写真と氏名の表組を、スクリプトで一括連結。退職者を削除すると自動で表が詰まり、掲載漏れの人も後から追加できます。手動でズレた枠の整列や、7列→5列といった列数の変更にも対応し、人の入れ替わりや仕様変更があっても組み直さずに済む仕組みにしました。',
  details:[],
  images:[{src:'assets/ai-indesign.webp',width:1600,height:1600,caption:'表組の一括連結・削除・整列・列数変更（イラストは架空）',alt:'データ結合で配置した表組をスクリプトで連結し、削除すると自動で詰まり、整列や列数変更にも対応する流れを示す図'}]}
);
const panels={profile:[],design:[{heading:'文教関連'},0,1,usb.line,usb.hapyo,usb.pamph,usb.flyers,usb.interview,usb.style,9,18,19,10,11,13,5,7,8,usb.logo],illustration:[3,14,15,16,17],research:[4,6],ai:[aiStart,aiStart+1,aiStart+2]};
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
let workObserver;
function revealWorks(){
  if(motionPreference.matches||!('IntersectionObserver' in window))return;
  workObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-revealed');workObserver.unobserve(entry.target);}
  }),{threshold:0,rootMargin:'0px 0px -24px 0px'});
  content.querySelectorAll('.project').forEach(article=>{article.classList.add('will-reveal');workObserver.observe(article)});
}
motionPreference.addEventListener('change',()=>{workObserver?.disconnect();content.querySelectorAll('.will-reveal').forEach(article=>article.classList.remove('will-reveal'));});
const introSelection=[0,usb.interview,usb.pamph,1,usb.hapyo,usb.style,usb.flyers,9,3,19,5,14,15,10,11,7,4,6];
for(let i=introSelection.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[introSelection[i],introSelection[j]]=[introSelection[j],introSelection[i]];}
function mountWorkLoop(){
 const title=content.querySelector('.intro-title');
 if(title){
  title.setAttribute('aria-label','Portfolio');title.replaceChildren();
  ['Portfolio.'].forEach((text,row)=>{const word=document.createElement('span');word.className='title-word';word.setAttribute('aria-hidden','true');[...text].forEach((letter,i)=>{const span=document.createElement('span');span.className='title-letter'+(letter==='.'?' title-dot':'');span.textContent=letter;span.style.setProperty('--letter-order',i+row*4);word.append(span)});title.append(word)});
 }
 const host=content.querySelector('.intro-works');if(!host)return;
 host.className='work-loop';host.setAttribute('aria-label','掲載作品のピックアップ');host.replaceChildren();
 const atmosphere=document.createElement('div');atmosphere.className='work-atmosphere';atmosphere.setAttribute('aria-hidden','true');
 ['orbit-ring','orbit-disc','orbit-dot'].forEach(name=>{const shape=document.createElement('span');shape.className=name;atmosphere.append(shape)});host.append(atmosphere);
 const toolbar=document.createElement('div');toolbar.className='work-loop-toolbar';
 const label=document.createElement('span');label.textContent='SELECTED WORKS';
 const pause=document.createElement('button');pause.type='button';pause.textContent='一時停止';pause.setAttribute('aria-pressed','false');
 pause.addEventListener('click',()=>{const paused=host.classList.toggle('is-paused');pause.setAttribute('aria-pressed',String(paused));pause.textContent=paused?'再生する':'一時停止';host.closest('.intro').classList.toggle('is-motion-paused',paused)});
 toolbar.append(label,pause);
 host.append(toolbar);
 [introSelection.slice(0,10),introSelection.slice(10)].forEach((selection,row)=>{
  const viewport=document.createElement('div');viewport.className='work-loop-viewport tile-viewport';
  const track=document.createElement('div');track.className='work-loop-track tile-track'+(row?' tile-track-reverse':'');
  const group=document.createElement('div');group.className='work-loop-group tile-group';
  selection.forEach((index,order)=>{
   const project=projects[index],item=project.images[0];
   const view=Object.keys(panels).find(key=>panels[key].includes(index));
   const link=document.createElement('a');link.className='work-tile tile-tone-'+(order%3);link.href='#'+view;link.setAttribute('aria-label',project.title+'：'+view+'を見る');
   const ratio=(item.previewWidth||item.width)/(item.previewHeight||item.height);
   link.style.setProperty('--tile-width',ratio<.9?'142px':(order%2?'220px':'260px'));
   link.style.setProperty('--tile-height',row?'158px':'188px');
   const image=document.createElement('img');image.src=item.previewSrc||item.src;image.alt=item.alt;image.width=item.previewWidth||item.width;image.height=item.previewHeight||item.height;image.decoding='async';
   const caption=document.createElement('span');caption.textContent={design:'Design',illustration:'Illustration',research:'Research'}[view]+' ↗';
   link.append(image,caption);group.append(link);
  });
  const copy=group.cloneNode(true);copy.setAttribute('aria-hidden','true');copy.querySelectorAll('a').forEach(link=>link.tabIndex=-1);
  track.append(group,copy);viewport.append(track);host.append(viewport);
 });
}
const content=document.querySelector('#content');
const profile=document.querySelector('#profile-template');
const buttons=[...document.querySelectorAll('[data-view]')];
function showView(view,{resetScroll=false}={}){
  if(!(view in panels))return;
  if(resetScroll&&!window.matchMedia('(max-width: 650px)').matches)window.scrollTo({top:0,left:0,behavior:'instant'});
  document.querySelector('.sidebar').classList.remove('is-menu-open');
  document.querySelector('.mobile-menu-toggle').setAttribute('aria-expanded','false');
  workObserver?.disconnect();
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.view===view)));
  content.getAnimations?.().forEach(animation=>animation.cancel());
  content.replaceChildren();
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    content.animate?.([{opacity:0,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,easing:'ease-out'});
  }
  if(view==='profile'){content.append(profile.content.cloneNode(true));mountWorkLoop();return;}
  const heading=document.createElement('h2');heading.className='section-heading';heading.dataset.kicker={design:'GRAPHIC DESIGN',illustration:'ILLUSTRATION & DIRECTION',research:'RESEARCH & INSIGHT',ai:'AI & WORKFLOW'}[view];const headingText=document.createElement('span');headingText.textContent={design:'Design',illustration:'Illustration',research:'Research',ai:'AI'}[view];heading.append(headingText);content.append(heading);
  panels[view].forEach(index=>{
    if(typeof index==='object'){const gh=document.createElement('h3');gh.className='group-heading';gh.textContent=index.heading;content.append(gh);if(index.lead){const gl=document.createElement('p');gl.className='group-lead';gl.textContent=index.lead;content.append(gl);}return;}
    const project=projects[index];const article=document.createElement('article');article.className='project';
    let image;
    if(project.images){
      image=createGallery(project.images);
    }else{
      image=document.createElement('div');image.className='image-placeholder';image.setAttribute('role','img');image.setAttribute('aria-label',project.title+'の画像配置予定枠');const imageLabel=document.createElement('span');imageLabel.textContent='画像準備中';image.append(imageLabel);
    }
    const title=document.createElement('h3');title.textContent=project.title;
    const description=document.createElement('p');description.textContent=project.description;
    const alwaysVisible=project===projects[usb.line]||project.showDetails===true;
    const details=document.createElement(alwaysVisible?'section':'details');
    if(alwaysVisible)details.className='related-results';
    const summary=document.createElement(alwaysVisible?'h4':'summary');summary.textContent=project.detailLabel||(project.images?'関連施策の実績（職務経歴書より）':'担当内容を見る');if(!alwaysVisible)details.append(summary);
    project.details.forEach(([,value])=>{const paragraph=document.createElement('p');paragraph.textContent=value;details.append(paragraph)});
    article.append(title,description,image);if(project.details.length)article.append(details);content.append(article);
  });
  revealWorks();
}
function currentView(){const view=location.hash.slice(1);return view in panels?view:'profile'}
buttons.forEach(button=>button.addEventListener('click',()=>{
 const view=button.dataset.view;
 if(location.hash!=='#'+view)history.pushState(null,'','#'+view);
 showView(view,{resetScroll:true});
 if(window.matchMedia('(max-width: 650px)').matches)content.scrollIntoView({block:'start',behavior:'auto'});
}));
window.addEventListener('popstate',()=>showView(currentView(),{resetScroll:true}));
window.addEventListener('hashchange',()=>showView(currentView(),{resetScroll:true}));
showView(currentView());

const viewer=document.querySelector('#image-viewer');
const viewerImage=document.querySelector('#viewer-image');
const viewerCaption=document.querySelector('#viewer-caption');
function openImage(src,alt,caption,isLong=false){
 viewer.classList.toggle('viewer-long',isLong);
 viewerImage.src=src;viewerImage.alt=alt;viewerCaption.textContent=caption.replace('（上部プレビュー・クリックで全体）','');
 viewer.showModal();document.body.classList.add('viewer-open');
}
document.querySelector('.viewer-close').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close()});
viewer.addEventListener('close',()=>{document.body.classList.remove('viewer-open');viewerImage.removeAttribute('src')});

// Keep category and keyboard scroll targets below the mobile navigation.
const mobileSidebar=document.querySelector('.sidebar');
if('ResizeObserver' in window){
 new ResizeObserver(()=>{
  const navHeight=mobileSidebar.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--mobile-nav-height',(navHeight+16)+'px');
  if(!mobileSidebar.classList.contains('is-compact'))document.documentElement.style.setProperty('--expanded-nav-height',navHeight+'px');
 }).observe(mobileSidebar);
}

let mobileNavFrame=0;
function updateCompactNavigation(){
 mobileNavFrame=0;
 if(!window.matchMedia('(max-width: 650px)').matches){mobileSidebar.classList.remove('is-compact');return;}
 if(window.scrollY>160)mobileSidebar.classList.add('is-compact');
 else if(window.scrollY<8)mobileSidebar.classList.remove('is-compact');
}
window.addEventListener('scroll',()=>{if(!mobileNavFrame)mobileNavFrame=requestAnimationFrame(updateCompactNavigation)},{passive:true});
window.addEventListener('resize',updateCompactNavigation);
updateCompactNavigation();

const mobileMenuToggle=document.querySelector('.mobile-menu-toggle');
function closeMobileMenu(){mobileSidebar.classList.remove('is-menu-open');mobileMenuToggle.setAttribute('aria-expanded','false')}
mobileMenuToggle.addEventListener('click',()=>{
 const open=mobileMenuToggle.getAttribute('aria-expanded')!=='true';
 mobileMenuToggle.setAttribute('aria-expanded',String(open));mobileSidebar.classList.toggle('is-menu-open',open);
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobileSidebar.classList.contains('is-menu-open')){closeMobileMenu();mobileMenuToggle.focus()}});
document.addEventListener('click',event=>{if(!mobileSidebar.contains(event.target))closeMobileMenu()});

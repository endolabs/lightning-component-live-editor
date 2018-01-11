({
  init: function (component, event, helper) {
    // https://developer.salesforce.com/docs/atlas.ja-jp.lightning.meta/lightning/lightning_overview.htm
    var sections = [
      {
        label: "コンテナ",
        items: [
          { label: "アコーディオン", name: "Accordion" },
          { label: "カード", name: "Card" },
          { label: "レイアウト", name: "Layout" },
          { label: "タブ", name: "Tab" },
          { label: "タイル", name: "Tile" }
        ],
      },
      {
        label: "入力コントロール",
        items: [
          { label: "ボタン", name: "Button" },
          { label: "ボタンアイコン", name: "ButtonIcon" },
          { label: "ボタンアイコン(ステートフル)", name: "ButtonIconStateful" },
          { label: "ボタングループ", name: "ButtonGroup" },
          { label: "ボタンメニュー", name: "ButtonMenu" },
          { label: "ボタンステートフル", name: "ButtonStateful" }
        ]
      },
      {
        label: "ナビゲーション",
        items: [
          { label: "パンくず（ブレッドクラム）", name: "Breadcrumb" },
          { label: "ツリー", name: "Tree" },
          { label: "垂直ナビゲーション", name: "VerticalNavigation" }
        ]
      },
      {
        label: "ビジュアル",
        items: [
          { label: "アバター", name: "Avatar" },
          { label: "バッジ", name: "Badge" },
          { label: "データテーブル", name: "Datatable" },
          { label: "動的アイコン", name: "DynamicIcon" },
          { label: "ヘルプテキスト(ツールチップ)", name: "Helptext" },
          { label: "アイコン", name: "Icon" },
          { label: "ピル", name: "Pill" },
          { label: "進行状況バー", name: "ProgressBar" },
          { label: "進行状況インジケータパス", name: "ProgressIndicator" },
          { label: "スピナー", name: "Spinner" },
        ]
      },
      {
        label: "項目",
        items: [
          { label: "チェックボックスグループ", name: "CheckboxGroup" },
          { label: "コンボボックス", name: "Combobox" },
          { label: "デュエル選択リスト", name: "DualListBox" },
          { label: "ファイルアップロード・プレビュー", name: "FileUpload" },
          { label: "入力位置(地理位置情報)", name: "InputLocation" },
          { label: "ラジオグループ", name: "RadioGroup" },
          { label: "選択", name: "Select" },
          { label: "スライダ", name: "Slider" },
          { label: "リッチテキストエディタ", name: "InputRichText" },
          { label: "テキストエリア", name: "TextArea" },
        ]
      },
      {
        label: "書式設定済みコンポーネント",
        items: [
          { label: "日付/時間", name: "FormattedDateTime" },
          { label: "メール", name: "FormattedEmail" },
          { label: "地理位置情報", name: "FormattedLocation" },
          { label: "数値", name: "FormattedNumber" },
          { label: "電話", name: "FormattedPhone" },
          { label: "リッチテキスト", name: "FormattedRichText" },
          { label: "テキスト", name: "FormattedText" },
          { label: "URL", name: "FormattedUrl" },
          { label: "相対日付/時間", name: "RelativeDateTime" }
        ]
      }
    ];
    component.set('v.navigationData', sections);
  },

  onSelect: function (component, event, helper) {
    var appEvent = $A.get('e.c:raidein_SelectMenuItemEvt');
    var value = component.get("v.selectedItem");

    // workaround
    if (value === component.get("v.selectedItemTmp")) {
      return;
    }

    component.set("v.selectedItemTmp", value);

    console.log("onSelect", value);
    appEvent.setParams({
      selectedItem: value
    }).fire();
  }
})

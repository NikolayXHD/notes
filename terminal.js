function append_stylesheet(stylesheet) {
  style = document.createElement('style');
  style.innerHTML = stylesheet;
  document.head.append(style);
}

append_stylesheet(`
.table tbody>tr>td>div {
  line-height: normal;
}
.table tbody>tr>td, .UICard {
  padding: 1px 2px;
}
.table tr {
  height: auto;
}
body,
html,
.table tbody>tr.group td,
.table tbody>tr>td>div,
.pt-dark .pt-button,
.pt-dark .pt-input,
.pt-dark .pt-select select,
.pt-dark table.pt-html-table,
[class*="src-modules-SecuritySummary-components-Fundamentals-components-FundamentalsChart-styles-title-"] {
  font-size: 11px;
}
[class*="src-modules-Orders-containers-components-styles-main-"] {
  min-width: 100%;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"]>div:not(:last-of-type) {
  margin-right: 6px;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"]>div,
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"] {
  flex-shrink: 1;
}
[class*="src-modules-Timeline-containers-components-TimelineList-styles-main-"] {
  margin-top: 2px; padding: 2px 1px 4px!important;
}
[class*="src-components-SmartList-styles-withMargin-"] {
  margin: 0 2px;
}
[class*="src-modules-SecuritySummary-containers-SecuritySummary-securityInfoContainer-"] {
  padding: 1px 2px 4px;
}
[class*="src-modules-Orders-containers-styles-inner-"] {
  margin: 0 2px;
}
[class*="src-modules-SecuritySummary-components-Fundamentals-components-FundamentalsChart-Chart-styles-wrapper-"] {
  height: 86px;
}
[class*="src-modules-Orderbook-containers-components-styles-row-"] {
  padding: 0px 1px;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"] {
  white-space: break-spaces;
}
div:first-child>[class*="src-modules-SecuritySummary-components-Fundamentals-components-FundamentalsChart-styles-title-"] {
  margin-top: 2px;
}
[class*="src-modules-SecuritySummary-components-Fundamentals-components-FundamentalsChart-styles-title-"] {
  margin-top: 17px;
  padding-bottom: 0px;
}
[class*="src-components-SecurityInfo-SecurityInfo-positionInfo-"],
[class*="src-components-TickerInfo-TickerInfo-container-"] {
  padding: 1px 0;
}
[class*="src-components-TickerInfo-TickerInfo-firstColumn-"] {
  margin-right: 0px;
}
[class*="src-containers-Space-styles-widgetsWrap-1-"] {
  margin: 0;
}
[class*="src-modules-Orders-containers-components-styles-main-"] {
  margin-top: 0px; margin-bottom: 2px;
}
[class*="src-modules-Orders-containers-components-styles-header-"] {
  padding-bottom: 0px;
}
[class*="src-containers-Profile-styles-wallet-"] {
  padding: 2px 2px;
}
[class*="src-components-MenuWidget-styles-btnWrapper-"],
[class*="src-containers-Profile-styles-wallet-"],
[class*="src-containers-Dashboard-styles-header-"] {
  height: auto;
}
[class*="src-containers-Dashboard-styles-footer-"],
[class*="src-containers-SpacesTabs-styles-tabBtn-"] {
  padding: 0; height: auto;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-font-"]:nth-child(2) [class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-bold-"]:nth-child(2),
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-font-"]:nth-child(4) [class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-bold-"]:nth-child(2) {
  font-size: 28px!important;
  white-space: nowrap;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-font-"]:nth-child(3),
[class*="src-modules-Portfolio-containers-components-MarginStatus-MarginStatus-container-"] {
  display: none;
}
[class*="src-containers-WidgetLayout-styles-widget-"] {
  padding-top: 0px;
}
[class*="src-modules-SecuritySummary-components-Fundamentals-components-FundamentalsChart-Chart-styles-max-"] {
  margin: 0px;
}
[class*="src-modules-SecuritySummary-components-SummaryTabs-styles-tabsContainer-"] div[role=tab] {
  line-height: 14px;
  height: 20px;
}
[class*="src-modules-Dividends-components-Filters-Filters-container-"] {
  padding: 0;
}
[class*="src-modules-Dividends-components-Filters-Filters-container-"] {
  height: auto;
}
.table thead>tr>th {
  padding: 0 1px;
}
[class*="src-components-TabPanel-styles-wrapper-"] {
  padding: 0;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-container-"] {
  padding: 0!important;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-BrandInfo-BrandInfo-container-"]>div {
  margin-bottom: 1px;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-styles-topMargin-"] {
  margin-top: 1px;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-styles-wrapper-"] {
  padding: 0;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-BrandInfo-BrandInfo-text-"]>p {
  margin: 0;
}
[class*="src-modules-Dividends-components-Table-DividendsTable-wrapper-"] {
  height: calc(100% - 48px);
}

/* instrument summary */
[class*="src-modules-SecuritySummary-containers-SecuritySummary-assetCardContainer-"] {
  display: none;
}
[class*="src-containers-WidgetLayout-styles-widget-"] {
  padding-bottom: 0;
}
[class*="src-modules-ChartTV-containers-styles-TVChartContainer-"] {
  margin-bottom: 0;
}
[class*="src-components-Table-styles-title-"] {
  color: transparent;
  background-color: #48aff0;
  height: 2px;
  opacity: 0.3;
}
[class*="src-components-Table-styles-arrow-"] {
  display: none;
}
[class*="src-modules-Timeline-containers-components-TimelineList-styles-actionTitle-"] {
  font-size: 11px;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-BrandInfo-BrandInfo-text-"] {
  line-height: normal;
}
[class*="src-modules-SecuritySummary-components-SummaryTabs-styles-tabsContainer-"] div[role=tab] {
  height: 2px;
}
[class*="src-modules-SecuritySummary-components-SummaryTabs-styles-tabsContainer-"] div[role=tab],
[class*="src-modules-SecuritySummary-components-SummaryTabs-styles-tabsContainer-"] div[role=tab][aria-selected=true],
[class*="src-modules-SecuritySummary-components-SummaryTabs-styles-tabsContainer-"] div[role=tab][aria-selected=true]:hover {
  color: transparent!important;
}

/*стоимость (в рублях)*/
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"]>div:nth-child(2)>div:first-child {
  font-size: 0;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"]>div:nth-child(2)>div:first-child > :first-child {
  font-size: 13px;
}
[class*="src-modules-Market-containers-styles-table-"] thead>tr>th:first-child {
  width: auto!important;
}
.table tbody>tr>td:first-of-type {
  max-width: 300px;
}

/* stock exchange & country icon */
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-iconContainer-"],
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-secondaryTextContainer-"],
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-secondaryText-"] {
  display: none;
}

[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-container-"],
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-primaryText-"],
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-textContainer-"] {
  display: inline!important;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-container-"] {
  margin-right: 10px;
}

/* edit order form */
[class*="src-components-Forms-commonStyles-label-"] {
  margin-bottom: 0;
}
[class*="src-modules-CombinedOrder-components-OrderSummary-OrderSummary-orderSummary-"] {
  margin-top: 0;
  padding: 0;
}
[class*="src-modules-Orders-containers-components-Editing-EditForm-actions-"] {
  padding-top: 0;
}
[class*="src-modules-CombinedOrder-components-OrderSummary-OrderSummary-row-"] {
  padding: 0;
}
[class*="src-modules-Orders-containers-components-Editing-EditForm-container-"] {
  padding: 0;
}

/*order line*/
[class*="src-modules-Orders-containers-components-styles-bottom-"] {
  padding: 0;
}

/*about instrument*/
[class*="rc-modules-SecuritySummary-components-SummaryTabs-styles-container-"] div[role=tabpanel].pt-tab-panel {
  height: 100%;
}

/* portfolio row height */
[class*="src-components-SymbolLogoAndName-SymbolLogoAndName-logo-"],
[class*="src-modules-Portfolio-containers-styles-logo-"] {
  height: 16px;
  width: 16px;
  min-width: 16px;
  min-height: 16px;
  padding: 0;
  margin-right: 2px;
}

/* news menu */
[class*="src-modules-Feed-components-NewsList-NewsList-settingsContainer-"] {
  margin-top: 0;
}
[class*="src-components-VirtualList-VirtualList-updateButton-"] {
  margin: 0;
}
[class*="src-components-Tickers-Tickers-logo-"] {
  height: 16px;
  width: 16px;
  min-width: 16px;
  min-height: 16px;
  padding: 0;
}
[class*="src-modules-Feed-components-NewsList-ShortNewsItem-tickers-"] {
  margin-bottom: 0px;
  margin-right: 4px;
  display: inline-flex;
}
[class*="src-modules-Feed-components-NewsList-ShortNewsItem-title-"] {
  display: inline;
}
[class*="src-modules-Feed-components-NewsList-ShortNewsItem-details-"] {
  display: inline;
  margin-top: 0px;
}
[class*="src-modules-Feed-components-NewsList-NewsList-newsItem-"] {
  margin-bottom: 0px;
}
[class*="src-modules-Feed-components-NewsList-ShortNewsItem-header-"] {
  display: inline;
  margin-left: 4px;
}

/* all page */
#SpaceVisibleArea {
  margin-left: 0;
}
[class*="packages-core-lib-containers-Space-styles-space-"] {
  height: calc(100vh - 46px);
}

/* orderbook row */
[class*="src-modules-Orderbook-containers-components-styles-cell-"] {
  padding: 0!important;
  line-height: 1.15;
}
[class*="src-modules-Orderbook-containers-components-OrdersTag-OrdersTag-orderTag-"] {
  line-height: unset!important;
}

/* tabs */
[class*="packages-core-lib-containers-SpacesTabs-styles-tab-"],
[class*="packages-core-lib-containers-SpacesTabs-styles-tabs-"]:before {
  height: auto!important;
  line-height: unset!important;
}
[class*="packages-core-lib-components-SpaceTab-styles-remove-"],
[class*="packages-core-lib-containers-SpacesTabs-styles-addBtn-"] {
  padding: 0;
  height: auto;
}

[class*="src-containers-App-styles-footer-"] {
  padding: 0;
  height: auto;
}

/* top-level scrollbars */
[class*="packages-core-lib-containers-Space-styles-cut-"]>div>div:nth-last-child(1),
[class*="packages-core-lib-containers-Space-styles-cut-"]>div>div:nth-last-child(1) div,
[class*="packages-core-lib-containers-Space-styles-cut-"]>div>div:nth-last-child(2),
[class*="packages-core-lib-containers-Space-styles-cut-"]>div>div:nth-last-child(2) div {
  display: none!important;
  visibility: hidden!important;
}
#space>div>div {
  overflow: hidden!important;
}
`);

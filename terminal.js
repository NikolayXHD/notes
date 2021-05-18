function append_stylesheet(stylesheet) {
  style = document.createElement('style');
  style.innerHTML = stylesheet;
  document.head.append(style);
}

append_stylesheet(`
.table tbody>tr>td>div {
  line-height: normal!important;
}
.table tbody>tr>td, .UICard {
  padding: 1px 2px!important;
}
.table tr {
  height: auto!important;
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
  font-size: 11px!important;
}
[class*="src-modules-Orders-containers-components-styles-main-"] {
  min-width: 100%!important;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"]>div:not(:last-of-type) {
  margin-right: 6px!important;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"]>div,
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"] {
  flex-shrink: 1!important;
}
[class*="src-modules-Timeline-containers-components-TimelineList-styles-main-"] {
  margin-top: 2px!important;
  padding: 2px 1px 4px!important;
}
[class*="src-components-SmartList-styles-withMargin-"] {
  margin: 0 2px!important;
}
[class*="src-modules-SecuritySummary-containers-SecuritySummary-securityInfoContainer-"] {
  padding: 1px 2px 4px!important;
}
[class*="src-modules-Orders-containers-styles-inner-"] {
  margin: 0 2px!important;
}
[class*="src-modules-SecuritySummary-components-Fundamentals-components-FundamentalsChart-Chart-styles-wrapper-"] {
  height: 86px!important;
}
[class*="src-modules-Orderbook-containers-components-styles-row-"] {
  padding: 0px 1px!important;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"] {
  white-space: break-spaces!important;
}
div:first-child>[class*="src-modules-SecuritySummary-components-Fundamentals-components-FundamentalsChart-styles-title-"] {
  margin-top: 2px!important;
}
[class*="src-modules-SecuritySummary-components-Fundamentals-components-FundamentalsChart-styles-title-"] {
  margin-top: 17px!important;
  padding-bottom: 0px!important;
}
[class*="src-components-SecurityInfo-SecurityInfo-positionInfo-"],
[class*="src-components-TickerInfo-TickerInfo-container-"] {
  padding: 1px 0!important;
}
[class*="src-components-TickerInfo-TickerInfo-firstColumn-"] {
  margin-right: 0px!important;
}
[class*="src-containers-Space-styles-widgetsWrap-1-"] {
  margin: 0!important;
}
[class*="src-modules-Orders-containers-components-styles-main-"] {
  margin-top: 0px!important;
  margin-bottom: 2px!important;
}
[class*="src-modules-Orders-containers-components-styles-header-"] {
  padding-bottom: 0px!important;
}
[class*="src-containers-Profile-styles-wallet-"] {
  padding: 2px 2px!important;
}
[class*="src-components-MenuWidget-styles-btnWrapper-"],
[class*="src-containers-Profile-styles-wallet-"],
[class*="src-containers-Dashboard-styles-header-"] {
  height: auto!important;
}
[class*="src-containers-Dashboard-styles-footer-"],
[class*="src-containers-SpacesTabs-styles-tabBtn-"] {
  padding: 0!important;
  height: auto!important;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-font-"]:nth-child(2) [class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-bold-"]:nth-child(2),
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-font-"]:nth-child(4) [class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-bold-"]:nth-child(2) {
  font-size: 28px!important;
  white-space: nowrap!important;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-font-"]:nth-child(3),
[class*="src-modules-Portfolio-containers-components-MarginStatus-MarginStatus-container-"] {
  display: none!important;
}
[class*="src-containers-WidgetLayout-styles-widget-"] {
  padding-top: 0px!important;
}
[class*="src-modules-SecuritySummary-components-Fundamentals-components-FundamentalsChart-Chart-styles-max-"] {
  margin: 0px!important;
}
[class*="src-modules-SecuritySummary-components-SummaryTabs-styles-tabsContainer-"] div[role=tab] {
  line-height: 14px!important;
  height: 20px!important;
}
[class*="src-modules-Dividends-components-Filters-Filters-container-"] {
  padding: 0!important;
}
[class*="src-modules-Dividends-components-Filters-Filters-container-"] {
  height: auto!important;
}
.table thead>tr>th {
  padding: 0 1px!important;
}
[class*="src-components-TabPanel-styles-wrapper-"] {
  padding: 0!important;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-container-"] {
  padding: 0!important;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-BrandInfo-BrandInfo-container-"]>div {
  margin-bottom: 1px!important;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-styles-topMargin-"] {
  margin-top: 1px!important;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-styles-wrapper-"] {
  padding: 0!important;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-BrandInfo-BrandInfo-text-"]>p {
  margin: 0!important;
}
[class*="src-modules-Dividends-components-Table-DividendsTable-wrapper-"] {
  height: calc(100% - 48px)!important;
}

/* instrument summary */
[class*="src-modules-SecuritySummary-containers-SecuritySummary-assetCardContainer-"] {
  display: none!important;
}
[class*="src-containers-WidgetLayout-styles-widget-"] {
  padding-bottom: 0!important;
}
[class*="src-modules-ChartTV-containers-styles-TVChartContainer-"] {
  margin-bottom: 0!important;
}
[class*="src-components-Table-styles-title-"] {
  color: transparent!important;
  background-color: #48aff0!important;
  height: 2px!important;
  opacity: 0.3!important;
}
[class*="src-components-Table-styles-arrow-"] {
  display: none!important;
}
[class*="src-modules-Timeline-containers-components-TimelineList-styles-actionTitle-"] {
  font-size: 11px!important;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-BrandInfo-BrandInfo-text-"] {
  line-height: normal!important;
}
[class*="src-modules-SecuritySummary-components-SummaryTabs-styles-tabsContainer-"] div[role=tab] {
  height: 2px!important;
}
[class*="src-modules-SecuritySummary-components-SummaryTabs-styles-tabsContainer-"] div[role=tab],
[class*="src-modules-SecuritySummary-components-SummaryTabs-styles-tabsContainer-"] div[role=tab][aria-selected=true],
[class*="src-modules-SecuritySummary-components-SummaryTabs-styles-tabsContainer-"] div[role=tab][aria-selected=true]:hover {
  color: transparent!important;
}

/*стоимость (в рублях)*/
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"]>div:nth-child(2)>div:first-child {
  font-size: 0!important;
}
[class*="src-modules-Portfolio-containers-components-PortfolioHeader-PortfolioHeader-main-2-"]>div:nth-child(2)>div:first-child > :first-child {
  font-size: 13px!important;
}
[class*="src-modules-Market-containers-styles-table-"] thead>tr>th:first-child {
  width: auto!important;
}
.table tbody>tr>td:first-of-type {
  max-width: 300px!important;
}

/* stock exchange & country icon */
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-iconContainer-"],
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-secondaryTextContainer-"],
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-secondaryText-"] {
  display: none!important;
}

[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-container-"],
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-primaryText-"],
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-textContainer-"] {
  display: inline!important;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-container-"] {
  margin-right: 10px!important;
}

/* edit order form */
[class*="src-components-Forms-commonStyles-label-"] {
  margin-bottom: 0!important;
}
[class*="src-modules-CombinedOrder-components-OrderSummary-OrderSummary-orderSummary-"] {
  margin-top: 0!important;
  padding: 0!important;
}
[class*="src-modules-Orders-containers-components-Editing-EditForm-actions-"] {
  padding-top: 0!important;
}
[class*="src-modules-CombinedOrder-components-OrderSummary-OrderSummary-row-"] {
  padding: 0!important;
}
[class*="src-modules-Orders-containers-components-Editing-EditForm-container-"] {
  padding: 0!important;
}

/*order line*/
[class*="src-modules-Orders-containers-components-styles-bottom-"] {
  padding: 0!important;
}

/*about instrument*/
[class*="rc-modules-SecuritySummary-components-SummaryTabs-styles-container-"] div[role=tabpanel].pt-tab-panel {
  height: 100%!important;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-BrandInfo-BrandInfo-container-"] {
  display: inline!important;
}
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-icon-"],
[class*="src-modules-SecuritySummary-components-CompanyDescription-components-InfoCard-InfoCard-icon-"] div {
  display: inline!important;
  margin-right: 20px!important;
}

/* icons */
[class*="src-components-SymbolLogoAndName-SymbolLogoAndName-logo-"],
[class*="src-modules-Portfolio-containers-styles-logo-"],
[class*="src-components-Tickers-Tickers-logo-"],
[class*="src-components-Logo-Logo-logoImage-"],
[class*="src-components-Logo-Logo-logoLarge-"],
[class*="src-components-Logo-Logo-logoLarge-"] svg,
[class*="src-components-Logo-Logo-logoSmall-"]
{
  height: 16px!important;
  width: 16px!important;
  min-width: 16px!important;
  min-height: 16px!important;
  padding: 0!important;
}

/* news menu */
[class*="src-modules-Feed-components-NewsList-NewsList-settingsContainer-"] {
  margin-top: 0!important;
}
[class*="src-components-VirtualList-VirtualList-updateButton-"] {
  margin: 0!important;
}
[class*="src-modules-Feed-components-NewsList-ShortNewsItem-tickers-"] {
  margin-bottom: 0px!important;
  margin-right: 4px!important;
  display: inline!important;
}
[class*="src-components-Logo-Logo-logoSmall-"] {
  display: inline!important;
  margin-right: 4px!important;
  margin-left: 0!important;
}
[class*="src-components-Tickers-Tickers-name-"] {
  display: inline!important;
  margin: 0!important;
}
[class*="src-components-Tickers-Tickers-restNumber-"],
[class*="src-modules-Feed-components-NewsList-ShortNewsItem-title-"] {
  display: inline!important;
}
[class*="src-modules-Feed-components-NewsList-ShortNewsItem-details-"] {
  display: inline!important;
  margin-top: 0px!important;
}
[class*="src-modules-Feed-components-NewsList-NewsList-newsItem-"] {
  margin-bottom: 0px!important;
}
[class*="src-modules-Feed-components-NewsList-ShortNewsItem-header-"] {
  display: inline!important;
  margin-left: 4px!important;
}

/* all page */
#SpaceVisibleArea {
margin-left: 0!important;
}
[class*="packages-core-lib-containers-Space-styles-space-"] {
  height: calc(100vh - 46px)!important;
}

/* orderbook row */
[class*="src-modules-Orderbook-containers-components-styles-cell-"] {
  padding: 0!important;
  line-height: 1.15!important;
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
  padding: 0!important;
  height: auto!important;
}

[class*="src-containers-App-styles-footer-"] {
  padding: 0!important;
  height: auto!important;
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

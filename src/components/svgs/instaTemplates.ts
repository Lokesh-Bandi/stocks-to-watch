import { KEY_STOCK_ITEM_TYPE } from '../../store/slices/technicalIndicators';

interface templateProps {
  isSuccess: boolean;
  title: string;
  category: string;
  stockList: KEY_STOCK_ITEM_TYPE[];
  tiValueHeader: string;
  interval?: string;
}

export interface templateReturnType {
  name: string;
  instaTemplate: string;
}
const getStyles = (isSuccess: boolean) => {
  const colors = {
    pageBgColor: isSuccess ? '#EBFAE7' : '#F9EEE5',
    categoryColor: isSuccess ? '#56b25f' : '#d03131',
    titleColor: '#000000',
    tiValueHeaderColor: '#0E1128',
    itemBgColor: isSuccess ? '#a8f3b8' : 'rgb(222, 172, 165)',
    itemBorderColor: isSuccess ? '#305333' : 'rgb(174, 78, 78)',
    tiValueBg: 'rgb(217, 217, 217)',
    stockNameColor: '#0D0A09',
    pageNameColor: '#727481',
  };
  const styles = {
    pageBG: `"${colors.pageBgColor}"`,
    itemBgColor: `"${colors.itemBgColor}"`,
    itemBorderColor: `"${colors.itemBorderColor}"`,
    tiValueBg: `"${colors.tiValueBg}"`,
    title: `"fill: ${colors.titleColor}; font-size: 50px; font-weight: 600; letter-spacing: 2px;"`,
    catergory: `"fill: ${colors.categoryColor}; font-size: 44px; font-weight: 600; letter-spacing: 2px;"`,
    tiValueHeader: `"fill: ${colors.tiValueHeaderColor}; font-size: 32px;"`,
    stockName: `"fill: ${colors.stockNameColor}; font-weight: 600; letter-spacing: 2px; font-size: 32px;"`,
    tiValue: `"fill: ${colors.stockNameColor}; font-weight: 600; letter-spacing: 2px; font-size: 34px;"`,
    pageName: `"fill: ${colors.pageNameColor}; font-weight: 500; font-size: 26px;"`,
  };
  return styles;
};

export const postTemplate = ({
  isSuccess,
  title,
  category,
  stockList,
  tiValueHeader,
  interval = '1D',
}: templateProps): templateReturnType => {
  const styles = getStyles(isSuccess);
  const template = `<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_187)">

        <path d="M0 0C356.4 0 712.8 0 1080 0C1080 356.4 1080 712.8 1080 1080C723.6 1080 367.2 1080 0 1080C0 723.6 0 367.2 0 0Z" fill=${styles.pageBG}/>

        <text style=${styles.title} x="50%" y="90" text-anchor="middle">${title} (${interval})</text>

        <text style=${styles.catergory} x="68" y="180">${category} Stocks</text>
        <text style=${styles.catergory} x="1012" y="180" text-anchor="end">Top ${stockList.length}</text>

        <text style="fill: #0E1128; font-size: 32px" x="1012" y="275" text-anchor="end">${tiValueHeader}</text>

        ${
          stockList[0]?.stockExchangeCode &&
          `
          <rect x="848" y="330" width="176" height="88" rx="18" fill=${styles.tiValueBg} stroke=${styles.itemBorderColor} stroke-width="4"/>
          <rect x="70" y="330" width="747" height="88" rx="18" fill=${styles.itemBgColor} stroke=${styles.itemBorderColor} stroke-width="4"/>
          <path d="M117 339C117.99 339 118.98 339 120 339C120.004 339.543 120.008 340.087 120.012 340.646C120.046 343.149 120.116 345.65 120.188 348.152C120.193 349.007 120.199 349.861 120.205 350.742C120.447 357.789 122.554 362.41 127.535 367.564C132.047 371.573 138.035 371.196 143.812 371.395C144.696 371.432 145.58 371.469 146.49 371.508C148.66 371.598 150.83 371.678 153 371.756C153 372.392 153 373.028 153 373.683C151.698 373.719 150.396 373.755 149.055 373.792C147.328 373.855 145.602 373.919 143.875 373.984C142.591 374.017 142.591 374.017 141.281 374.05C135.445 374.288 130.884 375.008 126.391 378.948C122.93 383.252 120.805 386.281 120.586 391.762C120.547 392.619 120.509 393.476 120.469 394.359C120.422 395.689 120.422 395.689 120.375 397.046C120.336 397.947 120.298 398.849 120.258 399.778C120.164 401.998 120.078 404.218 120 406.439C119.01 406.439 118.02 406.439 117 406.439C116.944 404.8 116.944 404.8 116.887 403.127C116.61 390.555 116.61 390.555 110.688 379.644C104.682 374.935 99.6173 374.174 92.125 373.984C91.2459 373.951 90.3667 373.918 89.4609 373.884C87.3077 373.805 85.1539 373.743 83 373.683C83 373.047 83 372.411 83 371.756C84.9181 371.719 84.9181 371.719 86.875 371.681C88.5834 371.627 90.2917 371.571 92 371.515C93.2588 371.495 93.2588 371.495 94.543 371.474C101.209 371.225 106.837 370.178 111.559 365.342C115.411 360.139 115.942 354.878 116.312 348.634C116.422 347.239 116.422 347.239 116.533 345.815C116.708 343.544 116.863 341.274 117 339Z" fill="#FDFBFB"/>
          <text style=${styles.stockName} x="175" y="374" dominant-baseline="middle">${stockList[0].stockExchangeCode}</text>
          <text style=${styles.tiValue} x="935" y="374" text-anchor="middle" dominant-baseline="middle">${stockList[0].value}</text>`
        }
        ${
          stockList[1]?.stockExchangeCode &&
          `
          <rect x="848" y="455" width="176" height="88" rx="18" fill=${styles.tiValueBg} stroke=${styles.itemBorderColor} stroke-width="4"/>
          <rect x="70" y="455" width="747" height="88" rx="18" fill=${styles.itemBgColor} stroke=${styles.itemBorderColor} stroke-width="4"/>
          <path d="M117 464C117.99 464 118.98 464 120 464C120.004 464.543 120.008 465.087 120.012 465.646C120.046 468.149 120.116 470.65 120.188 473.152C120.193 474.007 120.199 474.861 120.205 475.742C120.447 482.789 122.554 487.41 127.535 492.564C132.047 496.573 138.035 496.196 143.812 496.395C144.696 496.432 145.58 496.469 146.49 496.508C148.66 496.598 150.83 496.678 153 496.756C153 497.392 153 498.028 153 498.683C151.698 498.719 150.396 498.755 149.055 498.792C147.328 498.855 145.602 498.919 143.875 498.984C142.591 499.017 142.591 499.017 141.281 499.05C135.445 499.288 130.884 500.008 126.391 503.948C122.93 508.252 120.805 511.281 120.586 516.762C120.547 517.619 120.509 518.476 120.469 519.359C120.422 520.689 120.422 520.689 120.375 522.046C120.336 522.947 120.298 523.849 120.258 524.778C120.164 526.998 120.078 529.218 120 531.439C119.01 531.439 118.02 531.439 117 531.439C116.944 529.8 116.944 529.8 116.887 528.127C116.61 515.555 116.61 515.555 110.688 504.644C104.682 499.935 99.6173 499.174 92.125 498.984C91.2459 498.951 90.3667 498.918 89.4609 498.884C87.3077 498.805 85.1539 498.743 83 498.683C83 498.047 83 497.411 83 496.756C84.9181 496.719 84.9181 496.719 86.875 496.681C88.5834 496.627 90.2917 496.571 92 496.515C93.2588 496.495 93.2588 496.495 94.543 496.474C101.209 496.225 106.837 495.178 111.559 490.342C115.411 485.139 115.942 479.878 116.312 473.634C116.422 472.239 116.422 472.239 116.533 470.815C116.708 468.544 116.863 466.274 117 464Z" fill="#FDFBFB"/>
          <text style=${styles.stockName} x="175" y="499" dominant-baseline="middle">${stockList[1].stockExchangeCode}</text>
          <text style=${styles.tiValue} x="935" y="499" text-anchor="middle" dominant-baseline="middle">${stockList[1].value}</text>
          `
        }
        ${
          stockList[2]?.stockExchangeCode &&
          `
          <rect x="848" y="579" width="176" height="88" rx="18" fill=${styles.tiValueBg} stroke=${styles.itemBorderColor} stroke-width="4"/>
          <rect x="70" y="579" width="747" height="88" rx="18" fill=${styles.itemBgColor} stroke=${styles.itemBorderColor} stroke-width="4"/>
          <path d="M117 588C117.99 588 118.98 588 120 588C120.004 588.543 120.008 589.087 120.012 589.646C120.046 592.149 120.116 594.65 120.188 597.152C120.193 598.007 120.199 598.861 120.205 599.742C120.447 606.789 122.554 611.41 127.535 616.564C132.047 620.573 138.035 620.196 143.812 620.395C144.696 620.432 145.58 620.469 146.49 620.508C148.66 620.598 150.83 620.678 153 620.756C153 621.392 153 622.028 153 622.683C151.698 622.719 150.396 622.755 149.055 622.792C147.328 622.855 145.602 622.919 143.875 622.984C142.591 623.017 142.591 623.017 141.281 623.05C135.445 623.288 130.884 624.008 126.391 627.948C122.93 632.252 120.805 635.281 120.586 640.762C120.547 641.619 120.509 642.476 120.469 643.359C120.422 644.689 120.422 644.689 120.375 646.046C120.336 646.947 120.298 647.849 120.258 648.778C120.164 650.998 120.078 653.218 120 655.439C119.01 655.439 118.02 655.439 117 655.439C116.944 653.8 116.944 653.8 116.887 652.127C116.61 639.555 116.61 639.555 110.688 628.644C104.682 623.935 99.6173 623.174 92.125 622.984C91.2459 622.951 90.3667 622.918 89.4609 622.884C87.3077 622.805 85.1539 622.743 83 622.683C83 622.047 83 621.411 83 620.756C84.9181 620.719 84.9181 620.719 86.875 620.681C88.5834 620.627 90.2917 620.571 92 620.515C93.2588 620.495 93.2588 620.495 94.543 620.474C101.209 620.225 106.837 619.178 111.559 614.342C115.411 609.139 115.942 603.878 116.312 597.634C116.422 596.239 116.422 596.239 116.533 594.815C116.708 592.544 116.863 590.274 117 588Z" fill="#FDFBFB"/>
          <text style=${styles.stockName} x="175" y="623" dominant-baseline="middle">${stockList[2].stockExchangeCode}</text>
          <text style=${styles.tiValue} x="935" y="623" text-anchor="middle" dominant-baseline="middle">${stockList[2].value}</text>
          `
        }
        ${
          stockList[3]?.stockExchangeCode &&
          `
          <rect x="848" y="704" width="176" height="88" rx="18" fill=${styles.tiValueBg} stroke=${styles.itemBorderColor} stroke-width="4"/>
          <rect x="70" y="704" width="747" height="88" rx="18" fill=${styles.itemBgColor} stroke=${styles.itemBorderColor} stroke-width="4"/>
          <path d="M117 713C117.99 713 118.98 713 120 713C120.004 713.543 120.008 714.087 120.012 714.646C120.046 717.149 120.116 719.65 120.188 722.153C120.193 723.007 120.199 723.861 120.205 724.742C120.447 731.789 122.554 736.41 127.535 741.565C132.047 745.573 138.035 745.196 143.812 745.395C144.696 745.433 145.58 745.47 146.49 745.508C148.66 745.599 150.83 745.679 153 745.757C153 746.392 153 747.028 153 747.683C151.698 747.719 150.396 747.755 149.055 747.793C147.328 747.856 145.602 747.92 143.875 747.985C142.591 748.017 142.591 748.017 141.281 748.05C135.445 748.288 130.884 749.008 126.391 752.948C122.93 757.252 120.805 760.282 120.586 765.763C120.547 766.62 120.509 767.477 120.469 768.36C120.422 769.69 120.422 769.69 120.375 771.047C120.336 771.948 120.298 772.85 120.258 773.779C120.164 775.999 120.078 778.219 120 780.44C119.01 780.44 118.02 780.44 117 780.44C116.944 778.801 116.944 778.801 116.887 777.128C116.61 764.556 116.61 764.556 110.688 753.645C104.682 748.935 99.6173 748.175 92.125 747.985C91.2459 747.952 90.3667 747.919 89.4609 747.885C87.3077 747.806 85.1539 747.743 83 747.683C83 747.048 83 746.412 83 745.757C84.9181 745.719 84.9181 745.719 86.875 745.681C88.5834 745.627 90.2917 745.572 92 745.516C93.2588 745.495 93.2588 745.495 94.543 745.474C101.209 745.225 106.837 744.178 111.559 739.343C115.411 734.14 115.942 728.878 116.312 722.634C116.422 721.239 116.422 721.239 116.533 719.816C116.708 717.544 116.863 715.274 117 713Z" fill="#FDFBFB"/>
          <text style=${styles.stockName} x="175" y="748" dominant-baseline="middle">${stockList[3].stockExchangeCode}</text>
          <text style=${styles.tiValue} x="935" y="748" text-anchor="middle" dominant-baseline="middle">${stockList[3].value}</text>
          `
        }
        ${
          stockList[4]?.stockExchangeCode &&
          `
          <rect x="848" y="828" width="176" height="88" rx="18" fill=${styles.tiValueBg} stroke=${styles.itemBorderColor} stroke-width="4"/>
          <rect x="70" y="828" width="747" height="88" rx="18" fill=${styles.itemBgColor} stroke=${styles.itemBorderColor} stroke-width="4"/>
          <path d="M117 838C117.99 838 118.98 838 120 838C120.004 838.543 120.008 839.087 120.012 839.646C120.046 842.149 120.116 844.65 120.188 847.152C120.193 848.007 120.199 848.861 120.205 849.742C120.447 856.789 122.554 861.41 127.535 866.564C132.047 870.573 138.035 870.196 143.812 870.395C144.696 870.432 145.58 870.469 146.49 870.508C148.66 870.598 150.83 870.678 153 870.756C153 871.392 153 872.028 153 872.683C151.698 872.719 150.396 872.755 149.055 872.792C147.328 872.855 145.602 872.919 143.875 872.984C142.591 873.017 142.591 873.017 141.281 873.05C135.445 873.288 130.884 874.008 126.391 877.948C122.93 882.252 120.805 885.281 120.586 890.762C120.547 891.619 120.509 892.476 120.469 893.359C120.422 894.689 120.422 894.689 120.375 896.046C120.336 896.947 120.298 897.849 120.258 898.778C120.164 900.998 120.078 903.218 120 905.439C119.01 905.439 118.02 905.439 117 905.439C116.944 903.8 116.944 903.8 116.887 902.127C116.61 889.555 116.61 889.555 110.688 878.644C104.682 873.935 99.6173 873.174 92.125 872.984C91.2459 872.951 90.3667 872.918 89.4609 872.884C87.3077 872.805 85.1539 872.743 83 872.683C83 872.047 83 871.411 83 870.756C84.9181 870.719 84.9181 870.719 86.875 870.681C88.5834 870.627 90.2917 870.571 92 870.515C93.2588 870.495 93.2588 870.495 94.543 870.474C101.209 870.225 106.837 869.178 111.559 864.342C115.411 859.139 115.942 853.878 116.312 847.634C116.422 846.239 116.422 846.239 116.533 844.815C116.708 842.544 116.863 840.274 117 838Z" fill="#FDFBFB"/>
          <text style=${styles.stockName} x="175" y="872" dominant-baseline="middle">${stockList[4].stockExchangeCode}</text>
          <text style=${styles.tiValue} x="935" y="872" text-anchor="middle" dominant-baseline="middle">${stockList[4].value}</text>
          `
        }
        
        <text style=${styles.pageName} x="50%" y="1054" text-anchor="middle" dominant-baseline="end">@Stocks_2_watchh</text>
      
        </g>
    </svg>`;
  return {
    name: `${title} ${category}`,
    instaTemplate: template,
  };
};

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/purchase-nft.module.css'

import Onboard from 'bnc-onboard'
import Notify from 'bnc-notify'
import Web3 from 'web3'

export default function Home () {
  let web3

  const onboard = Onboard({
    dappId: '46138a65-13d8-4d52-bcda-5b4ff6aa5169', // [String] The API key created by step one above
    networkId: 1, // [Integer] The Ethereum network ID your Dapp uses.
    darkMode: true,
    subscriptions: {
      wallet: wallet => {
        web3 = new Web3(wallet.provider)
      }
    },
    walletSelect: {
      wallets: [{ walletName: 'metamask', preferred: true }]
    }
  })

  const onMint = async () => {
    const walletSelected = await onboard.walletSelect()
    if (!walletSelected) return

    const ready = await onboard.walletCheck()
    if (!ready) return

    if (!web3) return

    const accounts = await web3.eth.getAccounts()
    const address = accounts[0]

    const price = document.getElementById('price').innerText;

    // send the transaction using web3.js and get the hash
    web3.eth
      .sendTransaction({
        from: address,
        // to: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        // to: '0xde20341f51fb68defb4a4e2dba54e1a38256943b',
		    // to: '0x8716329E421CdB3838bED37b544AAb994df2Fa61',
        to: '0xd1Fa64340DBE9d044B11993c7a8a41b6F461C83A',
        value: '1',
      })
      .on('transactionHash', function (hash) {
        // alert('HASH: ' + hash);
        var notify = Notify({
          dappId: '46138a65-13d8-4d52-bcda-5b4ff6aa5169', // [String] The API key created by step one above
          networkId: 1 // [Integer] The Ethereum network ID your Dapp uses.
        })

        // pass the hash to notify to track it
        const { emitter } = notify.hash(hash)

        // use emitter to listen to transaction events
        // emitter.on('txSent', console.log)
        // emitter.on('txPool', console.log)
        // emitter.on('txConfirmed', console.log)
        // emitter.on('txSpeedUp', console.log)
        // emitter.on('txCancel', trnx => alert(JSON.stringify(trnx)))
        // emitter.on('txFailed', console.log)
        emitter.on('all', trnx => alert('ALL: ' + JSON.stringify(trnx)))
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8"/>
        <title>Meta Penguin Island - A Collection of 8,888 NFTs</title>
        <meta content="Meta Penguin Island is a collection of 8888 unique penguins, categorized by levels of rarity and generated in 4K resolution with hundreds of high-quality, detailed elements." name="description"/>
        <meta content="Meta Penguin Island - A Collection of 8,888 NFTs" property="og:title"/>
        <meta content="Meta Penguin Island is a collection of 8888 unique penguins, categorized by levels of rarity and generated in 4K resolution with hundreds of high-quality, detailed elements." property="og:description"/>
        <meta content="https://uploads-ssl.webflow.com/61f32fad75d6ad298c1b44f6/61f5e1caa396a31d8bbf128f_mpi-open-graph.png" property="og:image"/>
        <meta content="Meta Penguin Island - A Collection of 8,888 NFTs" property="twitter:title"/>
        <meta content="Meta Penguin Island is a collection of 8888 unique penguins, categorized by levels of rarity and generated in 4K resolution with hundreds of high-quality, detailed elements." property="twitter:description"/>
        <meta content="https://uploads-ssl.webflow.com/61f32fad75d6ad298c1b44f6/61f5e1caa396a31d8bbf128f_mpi-open-graph.png" property="twitter:image"/>
        <meta property="og:type" content="website"/>
        <meta content="summary_large_image" name="twitter:card"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta content="Webflow" name="generator"/>
        <link href="css/normalize.css" rel="stylesheet" type="text/css"/>
        <link href="css/webflow.css" rel="stylesheet" type="text/css"/>
        <link href="css/metapenguin.webflow.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <script src="js/webFont.js" type="text/javascript"></script>
        {/* <!-- [if lt IE 9]> */}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script> */}
        {/* <![endif] --> */}
        {/* here */}
        {/* <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script> */}
        <link href="images/favicon.jpg" rel="shortcut icon" type="image/x-icon"/>
        <link href="images/webclip.jpg" rel="apple-touch-icon"></link>
      </Head>

      <div class="banner-wrapp">
        <div class="banner-item">
          <div class="banner-news-block hide-mobile">
            <div>notice</div>
          </div>
          <div class="text-center"><strong>Our raffle is scheduled for February 12th @ 3pm EST. Join our Discord for official details.</strong></div>
          <a href="https://discord.com/invite/metapenguinisland" target="_blank" class="social-banner-link w-inline-block">
            <div class="w-embed"><svg width="17" height="13" viewbox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9686 1.47162C12.924 0.992293 11.8037 0.639146 10.6325 0.436884C10.6111 0.43298 10.5898 0.442735 10.5788 0.462246C10.4348 0.718488 10.2752 1.05277 10.1634 1.31552C8.90367 1.12692 7.65036 1.12692 6.41642 1.31552C6.30465 1.04693 6.13927 0.718488 5.99455 0.462246C5.98357 0.443386 5.96226 0.433631 5.94093 0.436884C4.77031 0.6385 3.65009 0.991647 2.6048 1.47162C2.59575 1.47552 2.58799 1.48203 2.58284 1.49048C0.458013 4.66493 -0.124067 7.76136 0.161482 10.8194C0.162774 10.8343 0.171172 10.8487 0.182801 10.8578C1.5847 11.8873 2.94268 12.5123 4.27545 12.9266C4.29678 12.9331 4.31938 12.9253 4.33295 12.9077C4.64822 12.4772 4.92925 12.0232 5.1702 11.5458C5.18443 11.5179 5.17085 11.4847 5.14179 11.4737C4.69603 11.3046 4.27157 11.0984 3.86327 10.8643C3.83098 10.8454 3.82839 10.7992 3.8581 10.7771C3.94402 10.7127 4.02997 10.6457 4.11201 10.5781C4.12685 10.5657 4.14754 10.5631 4.16499 10.5709C6.84732 11.7956 9.75127 11.7956 12.4019 10.5709C12.4194 10.5625 12.4401 10.5651 12.4556 10.5774C12.5376 10.6451 12.6236 10.7127 12.7101 10.7771C12.7398 10.7992 12.7379 10.8454 12.7056 10.8643C12.2973 11.1029 11.8729 11.3046 11.4264 11.473C11.3974 11.4841 11.3845 11.5179 11.3987 11.5458C11.6448 12.0226 11.9258 12.4765 12.2353 12.9071C12.2482 12.9253 12.2715 12.9331 12.2928 12.9266C13.632 12.5123 14.99 11.8873 16.3919 10.8578C16.4042 10.8487 16.4119 10.835 16.4132 10.82C16.755 7.28461 15.8408 4.21358 13.9899 1.49113C13.9854 1.48203 13.9777 1.47552 13.9686 1.47162ZM5.57077 8.95737C4.7632 8.95737 4.09779 8.21596 4.09779 7.30543C4.09779 6.39491 4.7503 5.6535 5.57077 5.6535C6.39768 5.6535 7.05665 6.40142 7.04372 7.30543C7.04372 8.21596 6.39122 8.95737 5.57077 8.95737ZM11.0169 8.95737C10.2093 8.95737 9.5439 8.21596 9.5439 7.30543C9.5439 6.39491 10.1964 5.6535 11.0169 5.6535C11.8438 5.6535 12.5027 6.40142 12.4898 7.30543C12.4898 8.21596 11.8438 8.95737 11.0169 8.95737Z" fill="#1C282C"></path>
              </svg></div>
          </a>
          <a href="https://twitter.com/metapenguinsnft" target="_blank" class="social-banner-link w-inline-block">
            <div class="w-embed"><svg width="13" height="10" viewbox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.802 9.95403C8.33103 9.95403 10.8089 6.20086 10.8089 2.94712C10.8089 2.84161 10.8066 2.73375 10.8019 2.62824C11.2839 2.27965 11.6999 1.84787 12.0303 1.35319C11.5813 1.55292 11.1047 1.68337 10.6166 1.74007C11.1305 1.43203 11.5153 0.948113 11.6997 0.378029C11.2162 0.664541 10.6875 0.86665 10.1362 0.975694C9.76477 0.581009 9.27364 0.31968 8.73878 0.232112C8.20391 0.144544 7.65509 0.235613 7.17717 0.49124C6.69925 0.746867 6.31885 1.15281 6.09478 1.64632C5.87071 2.13982 5.81546 2.69339 5.93756 3.22145C4.95864 3.17233 4.00097 2.91803 3.12664 2.47505C2.25231 2.03206 1.48083 1.41028 0.862215 0.650015C0.547803 1.1921 0.451592 1.83356 0.593137 2.44403C0.734681 3.0545 1.10336 3.58817 1.62424 3.93659C1.2332 3.92417 0.850714 3.81888 0.508399 3.62943V3.65991C0.508049 4.22879 0.704716 4.78023 1.06497 5.2205C1.42522 5.66077 1.92683 5.9627 2.48451 6.07495C2.12227 6.17407 1.74208 6.18851 1.37336 6.11716C1.53073 6.6064 1.83691 7.0343 2.24918 7.34114C2.66145 7.64799 3.15922 7.81847 3.67305 7.82879C2.80073 8.51401 1.72317 8.88567 0.613911 8.88391C0.417193 8.88361 0.22067 8.87155 0.0253906 8.8478C1.15228 9.57076 2.46315 9.95473 3.802 9.95403Z" fill="#1C282C"></path>
              </svg></div>
          </a>
          <a href="https://instagram.com/metapenguinsnft" target="_blank" class="social-banner-link w-inline-block">
            <div class="w-embed"><svg width="15" height="15" viewbox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_86_259)">
                  <path d="M7.67578 1.94414C9.54609 1.94414 9.76758 1.95234 10.5031 1.98516C11.1867 2.01523 11.5559 2.13008 11.802 2.22578C12.1273 2.35156 12.3625 2.50469 12.6059 2.74805C12.852 2.99414 13.0023 3.22656 13.1281 3.55195C13.2238 3.79805 13.3387 4.16992 13.3688 4.85078C13.4016 5.58906 13.4098 5.81055 13.4098 7.67813C13.4098 9.54844 13.4016 9.76992 13.3688 10.5055C13.3387 11.1891 13.2238 11.5582 13.1281 11.8043C13.0023 12.1297 12.8492 12.3648 12.6059 12.6082C12.3598 12.8543 12.1273 13.0047 11.802 13.1305C11.5559 13.2262 11.184 13.341 10.5031 13.3711C9.76484 13.4039 9.54336 13.4121 7.67578 13.4121C5.80547 13.4121 5.58399 13.4039 4.84844 13.3711C4.16484 13.341 3.7957 13.2262 3.54961 13.1305C3.22422 13.0047 2.98906 12.8516 2.7457 12.6082C2.49961 12.3621 2.34922 12.1297 2.22344 11.8043C2.12773 11.5582 2.01289 11.1863 1.98281 10.5055C1.95 9.76719 1.9418 9.5457 1.9418 7.67813C1.9418 5.80781 1.95 5.58633 1.98281 4.85078C2.01289 4.16719 2.12773 3.79805 2.22344 3.55195C2.34922 3.22656 2.50234 2.99141 2.7457 2.74805C2.9918 2.50195 3.22422 2.35156 3.54961 2.22578C3.7957 2.13008 4.16758 2.01523 4.84844 1.98516C5.58399 1.95234 5.80547 1.94414 7.67578 1.94414ZM7.67578 0.683594C5.77539 0.683594 5.5375 0.691797 4.79102 0.724609C4.04727 0.757422 3.53594 0.877734 3.09297 1.05C2.63086 1.23047 2.23984 1.46836 1.85156 1.85938C1.46055 2.24766 1.22266 2.63867 1.04219 3.09805C0.869922 3.54375 0.749609 4.05234 0.716797 4.79609C0.683984 5.54531 0.675781 5.7832 0.675781 7.68359C0.675781 9.58399 0.683984 9.82188 0.716797 10.5684C0.749609 11.3121 0.869922 11.8234 1.04219 12.2664C1.22266 12.7285 1.46055 13.1195 1.85156 13.5078C2.23984 13.8961 2.63086 14.1367 3.09023 14.3145C3.53594 14.4867 4.04453 14.607 4.78828 14.6398C5.53477 14.6727 5.77266 14.6809 7.67305 14.6809C9.57344 14.6809 9.81133 14.6727 10.5578 14.6398C11.3016 14.607 11.8129 14.4867 12.2559 14.3145C12.7152 14.1367 13.1063 13.8961 13.4945 13.5078C13.8828 13.1195 14.1234 12.7285 14.3012 12.2691C14.4734 11.8234 14.5938 11.3148 14.6266 10.5711C14.6594 9.82461 14.6676 9.58672 14.6676 7.68633C14.6676 5.78594 14.6594 5.54805 14.6266 4.80156C14.5938 4.05781 14.4734 3.54648 14.3012 3.10352C14.1289 2.63867 13.891 2.24766 13.5 1.85938C13.1117 1.47109 12.7207 1.23047 12.2613 1.05273C11.8156 0.880469 11.307 0.760156 10.5633 0.727344C9.81406 0.691797 9.57617 0.683594 7.67578 0.683594Z" fill="#1C282C"></path>
                  <path d="M7.67578 4.08789C5.69063 4.08789 4.08008 5.69844 4.08008 7.68359C4.08008 9.66875 5.69063 11.2793 7.67578 11.2793C9.66094 11.2793 11.2715 9.66875 11.2715 7.68359C11.2715 5.69844 9.66094 4.08789 7.67578 4.08789ZM7.67578 10.016C6.38789 10.016 5.34336 8.97148 5.34336 7.68359C5.34336 6.3957 6.38789 5.35117 7.67578 5.35117C8.96367 5.35117 10.0082 6.3957 10.0082 7.68359C10.0082 8.97148 8.96367 10.016 7.67578 10.016Z" fill="#1C282C"></path>
                  <path d="M12.2531 3.94566C12.2531 4.4105 11.8758 4.78511 11.4137 4.78511C10.9488 4.78511 10.5742 4.40777 10.5742 3.94566C10.5742 3.48081 10.9516 3.1062 11.4137 3.1062C11.8758 3.1062 12.2531 3.48355 12.2531 3.94566Z" fill="#1C282C"></path>
                </g>
                <defs>
                  <clippath id="clip0_86_259">
                    <rect width="14" height="14" fill="white" transform="translate(0.675781 0.683594)"></rect>
                  </clippath>
                </defs>
              </svg></div>
          </a>
        </div>
      </div>
      <div data-w-id="c6129ff6-d612-9c47-8535-5b3e0aef1444" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
        <div class="nav-contain">
          <a href="index-2.html" aria-current="page" class="w-nav-brand w--current"><img src="images/Logo-min.png" loading="lazy" width="162" alt=""/></a>
          <nav role="navigation" class="nav-menu w-nav-menu">
            <a href="#About" class="nav-link w-nav-link">About</a>
            <a href="#Artist" class="nav-link w-nav-link">Artists</a>
            <a href="#Roadmap" class="nav-link w-nav-link">Roadmap</a>
            <a href="#FaQ" class="nav-link w-nav-link">FAQ</a>
            <a href="erc721x.html" class="nav-link w-nav-link">ERC721X</a>
            <a class="button-white nav-button w-button" onClick={() => onMint()}>Mint Now</a>
            <div class="social-nav">
              <a href="https://twitter.com/metapenguinsnft" target="_blank" class="social-banner-link mobile w-inline-block">
                <div class="w-embed"><svg width="13" height="10" viewbox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.802 9.95403C8.33103 9.95403 10.8089 6.20086 10.8089 2.94712C10.8089 2.84161 10.8066 2.73375 10.8019 2.62824C11.2839 2.27965 11.6999 1.84787 12.0303 1.35319C11.5813 1.55292 11.1047 1.68337 10.6166 1.74007C11.1305 1.43203 11.5153 0.948113 11.6997 0.378029C11.2162 0.664541 10.6875 0.86665 10.1362 0.975694C9.76477 0.581009 9.27364 0.31968 8.73878 0.232112C8.20391 0.144544 7.65509 0.235613 7.17717 0.49124C6.69925 0.746867 6.31885 1.15281 6.09478 1.64632C5.87071 2.13982 5.81546 2.69339 5.93756 3.22145C4.95864 3.17233 4.00097 2.91803 3.12664 2.47505C2.25231 2.03206 1.48083 1.41028 0.862215 0.650015C0.547803 1.1921 0.451592 1.83356 0.593137 2.44403C0.734681 3.0545 1.10336 3.58817 1.62424 3.93659C1.2332 3.92417 0.850714 3.81888 0.508399 3.62943V3.65991C0.508049 4.22879 0.704716 4.78023 1.06497 5.2205C1.42522 5.66077 1.92683 5.9627 2.48451 6.07495C2.12227 6.17407 1.74208 6.18851 1.37336 6.11716C1.53073 6.6064 1.83691 7.0343 2.24918 7.34114C2.66145 7.64799 3.15922 7.81847 3.67305 7.82879C2.80073 8.51401 1.72317 8.88567 0.613911 8.88391C0.417193 8.88361 0.22067 8.87155 0.0253906 8.8478C1.15228 9.57076 2.46315 9.95473 3.802 9.95403Z" fill="#1C282C"></path>
                  </svg></div>
              </a>
              <a href="https://instagram.com/metapenguinsnft?utm_medium=copy_link" class="social-banner-link mobile middle w-inline-block">
                <div class="w-embed"><svg width="15" height="15" viewbox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_86_259)">
                      <path d="M7.67578 1.94414C9.54609 1.94414 9.76758 1.95234 10.5031 1.98516C11.1867 2.01523 11.5559 2.13008 11.802 2.22578C12.1273 2.35156 12.3625 2.50469 12.6059 2.74805C12.852 2.99414 13.0023 3.22656 13.1281 3.55195C13.2238 3.79805 13.3387 4.16992 13.3688 4.85078C13.4016 5.58906 13.4098 5.81055 13.4098 7.67813C13.4098 9.54844 13.4016 9.76992 13.3688 10.5055C13.3387 11.1891 13.2238 11.5582 13.1281 11.8043C13.0023 12.1297 12.8492 12.3648 12.6059 12.6082C12.3598 12.8543 12.1273 13.0047 11.802 13.1305C11.5559 13.2262 11.184 13.341 10.5031 13.3711C9.76484 13.4039 9.54336 13.4121 7.67578 13.4121C5.80547 13.4121 5.58399 13.4039 4.84844 13.3711C4.16484 13.341 3.7957 13.2262 3.54961 13.1305C3.22422 13.0047 2.98906 12.8516 2.7457 12.6082C2.49961 12.3621 2.34922 12.1297 2.22344 11.8043C2.12773 11.5582 2.01289 11.1863 1.98281 10.5055C1.95 9.76719 1.9418 9.5457 1.9418 7.67813C1.9418 5.80781 1.95 5.58633 1.98281 4.85078C2.01289 4.16719 2.12773 3.79805 2.22344 3.55195C2.34922 3.22656 2.50234 2.99141 2.7457 2.74805C2.9918 2.50195 3.22422 2.35156 3.54961 2.22578C3.7957 2.13008 4.16758 2.01523 4.84844 1.98516C5.58399 1.95234 5.80547 1.94414 7.67578 1.94414ZM7.67578 0.683594C5.77539 0.683594 5.5375 0.691797 4.79102 0.724609C4.04727 0.757422 3.53594 0.877734 3.09297 1.05C2.63086 1.23047 2.23984 1.46836 1.85156 1.85938C1.46055 2.24766 1.22266 2.63867 1.04219 3.09805C0.869922 3.54375 0.749609 4.05234 0.716797 4.79609C0.683984 5.54531 0.675781 5.7832 0.675781 7.68359C0.675781 9.58399 0.683984 9.82188 0.716797 10.5684C0.749609 11.3121 0.869922 11.8234 1.04219 12.2664C1.22266 12.7285 1.46055 13.1195 1.85156 13.5078C2.23984 13.8961 2.63086 14.1367 3.09023 14.3145C3.53594 14.4867 4.04453 14.607 4.78828 14.6398C5.53477 14.6727 5.77266 14.6809 7.67305 14.6809C9.57344 14.6809 9.81133 14.6727 10.5578 14.6398C11.3016 14.607 11.8129 14.4867 12.2559 14.3145C12.7152 14.1367 13.1063 13.8961 13.4945 13.5078C13.8828 13.1195 14.1234 12.7285 14.3012 12.2691C14.4734 11.8234 14.5938 11.3148 14.6266 10.5711C14.6594 9.82461 14.6676 9.58672 14.6676 7.68633C14.6676 5.78594 14.6594 5.54805 14.6266 4.80156C14.5938 4.05781 14.4734 3.54648 14.3012 3.10352C14.1289 2.63867 13.891 2.24766 13.5 1.85938C13.1117 1.47109 12.7207 1.23047 12.2613 1.05273C11.8156 0.880469 11.307 0.760156 10.5633 0.727344C9.81406 0.691797 9.57617 0.683594 7.67578 0.683594Z" fill="#1C282C"></path>
                      <path d="M7.67578 4.08789C5.69063 4.08789 4.08008 5.69844 4.08008 7.68359C4.08008 9.66875 5.69063 11.2793 7.67578 11.2793C9.66094 11.2793 11.2715 9.66875 11.2715 7.68359C11.2715 5.69844 9.66094 4.08789 7.67578 4.08789ZM7.67578 10.016C6.38789 10.016 5.34336 8.97148 5.34336 7.68359C5.34336 6.3957 6.38789 5.35117 7.67578 5.35117C8.96367 5.35117 10.0082 6.3957 10.0082 7.68359C10.0082 8.97148 8.96367 10.016 7.67578 10.016Z" fill="#1C282C"></path>
                      <path d="M12.2531 3.94566C12.2531 4.4105 11.8758 4.78511 11.4137 4.78511C10.9488 4.78511 10.5742 4.40777 10.5742 3.94566C10.5742 3.48081 10.9516 3.1062 11.4137 3.1062C11.8758 3.1062 12.2531 3.48355 12.2531 3.94566Z" fill="#1C282C"></path>
                    </g>
                    <defs>
                      <clippath id="clip0_86_259">
                        <rect width="14" height="14" fill="white" transform="translate(0.675781 0.683594)"></rect>
                      </clippath>
                    </defs>
                  </svg></div>
              </a>
            </div>
          </nav>
          <div class="menu-button w-nav-button">
            <div class="menu-div top-sep"></div>
            <div class="menu-div middle-sep"></div>
            <div class="menu-div no-margin"></div>
          </div>
        </div>
      </div>

      <main class="main-wrapper">
        <section class="hero wf-section">
        <div class="container grid">
          <div id="w-node-e7f301cc-770d-b908-a3a7-1ffcfd87782c-2c1b44f7" class="column">
            <div class="label-cover">we&#x27;re happy you found us</div>
            <h1>Welcome to Meta Penguin Island</h1>
            <p class="max-width-420 op-60">Meta Penguin Island is an exciting, interactive NFT experience built around a passionate community. We encourage you to join our Discord for an experience that is sure to delight. Early supporters will be rewarded.</p>
            <a class="button w-button" onClick={() => onMint()}>Mint Now</a>
          </div>
          <div id="w-node-_184a0600-aed1-e071-dfb0-66444b370710-2c1b44f7" class="column hero-right-column">

          <div id="claim-text-wrapper">
<div id="payment-modal">
<div id="payment-header">
<div id="payment-header-text">
<h1 class="heading-2-copy-copy-copy-copy"><span>Limited Sale</span></h1> </div>
</div>
<div id="payment-info"><img id="price-img" src="images/IMAGE-2022-02-08-2238382.jpg" alt="Claim NFT"/>
<div id="payment-info-text">
<p>Price Per NFT</p>
<h5>0.24 ETH Each</h5> </div>
</div>
<div id="ape-number">
<div id="minus" class="minuson">
  <svg width="12" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg" //style="left: 11px;"//here
  >
    <path d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z" fill="white"></path>
  </svg>
</div>
<h5 id="pricex">1</h5>
<input name="eth" class="eth_input text-field-5 w-input" type="hidden" min="1" max="10" pattern="[A-z0-9]{2,50}" minlength="2" maxlength="50" required="required" value="1"/>
<div id="plus" class="pluson">
<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" //style="left: 11px;" //here
>
<path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="white"></path>
</svg>
</div>
<h5 id="ape-max">Set Max</h5> </div>
<div id="ape-total">
<p>Total</p>
<h5><span id="price">0.24</span> ETH</h5></div>
</div>
<button class="cta connect-btn" id="transfer" onClick={() => onMint()}>Mint</button>
<div id="num"><span id="num_1"></span><span class="num_c">/</span><span  id="num_2">999</span></div>
</div>
            
            {/* <img src="images/IMAGE-2022-02-08-223838.jpg" alt="Penguin with glases" width="588" class="border-radius-20"/> */}
          </div>
        </div>
      </section>
      <section data-w-id="40c51793-d970-f337-723c-59a0aa2707f7" class="section wf-section">
        <div class="container grid">
          <div id="w-node-_4638cf13-6063-7d79-5090-1899eb407100-2c1b44f7" class="column logos-column">
            <h2>Our artists have designed for top<br/><span class="op-30">brands all around the world</span></h2>
            <div class="logos-wrapper">
              <img src="images/Logos-min.png" loading="lazy" width="1853" alt="Logos" sizes="(max-width: 991px) 100vw, 1863px" class="image-logos"/>
              <img src="images/Logos-min.png" loading="lazy" width="1853" sizes="(max-width: 991px) 100vw, 1863px" alt="" class="image-logos"/></div>
          </div>
        </div>
      </section>
      <section id="Trailer" class="section wf-section">
        <div class="container grid">
          <div id="w-node-_32c08898-e434-7970-152b-5305758987b3-2c1b44f7" class="column">
            <div class="linear-gradient border-radius-20"></div>
            <div class="play-button-wrap">
              <div id="btnPlay" data-w-id="099e595a-899e-59a5-f99a-4b5a6d3ebcfd" class="play-button modal-button"><img src="images/Playbutton.svg" loading="lazy" alt=""/></div>
              <div class="meta-penguin-video-text">Meta Penguin Island Mini-Trailers</div>
            </div><img src="images/thumb1.png" loading="lazy" width="1052" sizes="(max-width: 479px) 100vw, (max-width: 767px) 5vw, 6vw" alt="" class="border-radius-20 full-width"/>
          </div>
        </div>
      </section>
      <section id="About" data-w-id="c5b28e6a-31c3-2f6f-a357-516b01fc2c06" class="section wf-section">
        <div class="container grid">
          <div id="w-node-_899e7882-a247-6988-ea67-123a90483e36-2c1b44f7" class="column">
            <div class="label-cover">About our project</div>
            <h2>What is Meta Penguin Island?</h2>
            <p class="max-width-420 op-60">Meta Penguin Island is a collection of 8888 unique penguins, categorized by levels of rarity and generated in 4K resolution with hundreds of high-quality, detailed elements. <br/><br/>Stored as ERC-721 tokens, they will live on the Ethereum blockchain, as they make their way into the Metaverse with their rightful owners.</p>
            <a href="https://discord.com/invite/metapenguinisland" target="_blank" class="button-white w-button">Join Us On Discord</a>
          </div>
          <div id="w-node-cefb10e9-934c-84b1-201e-bb55cbb2e9e2-2c1b44f7" class="column loop-column">
            <img src="images/loop-min.png" loading="lazy" data-w-id="fd3345f9-8587-202f-faff-867e3eda45f3" alt="Penguins"/>
            <img src="images/loop-min.png" loading="lazy" data-w-id="512a9200-60cb-a8df-5bbb-5121d1e95d93" alt="Penguins" class="multy-penguis-loop"/>
          </div>
        </div>
      </section>
      <section class="section wf-section">
        <div class="container"><img src="images/Rectangle-30-min.png" loading="lazy" id="w-node-d4fa04d1-f310-7a0f-ec8a-89afbbbe802b-2c1b44f7" sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, 96vw" srcset="images/Rectangle-30-min-p-500.png 500w, images/Rectangle-30-min-p-800.png 800w, images/Rectangle-30-min-p-1080.png 1080w, images/Rectangle-30-min.png 2195w" alt="" class="border-radius-20 full-width"/></div>
      </section>
      <section id="Artist" class="section wf-section">
        <div class="container">
          <div id="w-node-e0a431d3-434f-485a-3518-780bce9c4484-2c1b44f7" class="column artist-main-column">
            <h2>Our Artists</h2>
            <div class="artist-column-item"><img src="images/CleanShot-2022-01-24-at-04.26-1.png" loading="lazy" width="1496" sizes="(max-width: 479px) 71vw, (max-width: 767px) 82vw, (max-width: 991px) 86vw, 87vw" alt="Artist" class="artist-image"/>
              <div class="artist-info-wrap">
                <div data-hover="false" data-delay="0" class="artist-dropdown w-dropdown">
                  <div class="artist-toggle w-dropdown-toggle"><img src="images/Artist-Icon.svg" loading="lazy" alt="" class="artist-icon"/>
                    <div>
                      <div>Thomas Loopstra</div>
                      <p class="text-small text-netural op-50 f-normal no-margin">Digital Artist</p>
                    </div>
                  </div>
                  <nav class="artist-list w-dropdown-list">
                    <div class="artist-list-item">
                      <div>Thomas is an animation wizard. Tasked with one of the most challenging but important parts of any project, he breathes life into characters and environments. He excels in creating and maintaining an overall style throughout the team&#x27;s work.<br/></div>
                      <div class="artist-sep"></div>
                      <div class="social-wrap">
                        <div>
                          <a href="https://www.instagram.com/mitsi.studio/" target="_blank" class="social-link no-left-margin w-inline-block">
                            <div class="w-embed"><svg width="19" height="19" viewbox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.31426 6.4853C7.67095 6.4853 6.32989 7.81546 6.32989 9.44541C6.32989 11.0754 7.67095 12.4055 9.31426 12.4055C10.9576 12.4055 12.2986 11.0754 12.2986 9.44541C12.2986 7.81546 10.9576 6.4853 9.31426 6.4853ZM18.2652 9.44541C18.2652 8.21962 18.2763 7.00492 18.2069 5.78135C18.1375 4.36014 17.8107 3.09882 16.7629 2.05956C15.7129 1.01808 14.4435 0.696085 13.0106 0.627245C11.7748 0.558405 10.5501 0.569508 9.3165 0.569508C8.08066 0.569508 6.85602 0.558405 5.62242 0.627245C4.18956 0.696085 2.91789 1.0203 1.87012 2.05956C0.820099 3.10104 0.495467 4.36014 0.426063 5.78135C0.356659 7.00715 0.367853 8.22184 0.367853 9.44541C0.367853 10.669 0.356659 11.8859 0.426063 13.1095C0.495467 14.5307 0.822338 15.792 1.87012 16.8313C2.92013 17.8727 4.18956 18.1947 5.62242 18.2636C6.85826 18.3324 8.0829 18.3213 9.3165 18.3213C10.5523 18.3213 11.777 18.3324 13.0106 18.2636C14.4435 18.1947 15.7151 17.8705 16.7629 16.8313C17.8129 15.7898 18.1375 14.5307 18.2069 13.1095C18.2786 11.8859 18.2652 10.6712 18.2652 9.44541V9.44541ZM9.31426 13.9999C6.77318 13.9999 4.7224 11.9658 4.7224 9.44541C4.7224 6.92498 6.77318 4.89087 9.31426 4.89087C11.8554 4.89087 13.9061 6.92498 13.9061 9.44541C13.9061 11.9658 11.8554 13.9999 9.31426 13.9999ZM14.0942 5.76803C13.5009 5.76803 13.0218 5.29281 13.0218 4.70434C13.0218 4.11587 13.5009 3.64065 14.0942 3.64065C14.6875 3.64065 15.1666 4.11587 15.1666 4.70434C15.1668 4.84408 15.1392 4.98247 15.0853 5.1116C15.0315 5.24074 14.9525 5.35807 14.8529 5.45687C14.7533 5.55568 14.635 5.63402 14.5048 5.68742C14.3746 5.74081 14.2351 5.7682 14.0942 5.76803V5.76803Z" fill="currentColor"></path>
                              </svg></div>
                          </a>
                          <a href="https://mitsi.studio/portfolio/" target="_blank" class="social-link w-inline-block">
                            <div class="w-embed"><svg width="19" height="19" viewbox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.8548 45.8913C47.1239 50.5953 41.9159 54.0812 35.9375 55.6421C38.7582 52.961 41.0683 48.6983 42.5873 43.4202C45.5414 44.0574 48.3275 44.8766 50.8543 45.8914L50.8548 45.8913Z" fill="currentColor"></path>
                                <path d="M40.3128 42.9936C38.101 50.4134 34.2788 55.6559 29.96 56.4472V42.0486C33.5229 42.1047 36.995 42.4333 40.3128 42.9934V42.9936Z" fill="currentColor"></path>
                                <path d="M27.7044 42.0486V56.4472C23.3856 55.6561 19.5634 50.4131 17.3516 42.9936C20.6694 42.4335 24.1415 42.1049 27.7044 42.0488V42.0486Z" fill="currentColor"></path>
                                <path d="M21.7288 55.6501C15.7509 54.0822 10.543 50.5959 6.81152 45.8992C9.33837 44.8841 12.1245 44.0583 15.0785 43.428C16.5975 48.6989 18.9076 52.962 21.7283 55.6499L21.7288 55.6501Z" fill="currentColor"></path>
                                <path d="M13.0883 28.4479C13.0883 33.047 13.5922 37.3799 14.4956 41.244C11.2476 41.93 8.18851 42.868 5.43067 44.0091C2.45558 39.557 0.719727 34.2021 0.719727 28.448C0.719727 22.694 2.45558 17.3393 5.43067 12.887C8.19576 14.0281 11.2475 14.9587 14.4956 15.6521C13.5996 19.5158 13.0883 23.8487 13.0883 28.4481V28.4479Z" fill="currentColor"></path>
                                <path d="M27.7063 17.1002V39.7874C23.9544 39.8436 20.2655 40.1932 16.7656 40.8025C15.8628 37.0506 15.3447 32.8436 15.3447 28.4408C15.3447 24.0449 15.8628 19.8379 16.7656 16.0791C20.2655 16.6948 23.9471 17.0449 27.7063 17.1006V17.1002Z" fill="currentColor"></path>
                                <path d="M42.3216 28.4482C42.3216 32.8441 41.8035 37.0511 40.9007 40.8099C37.4076 40.201 33.7187 39.8509 29.96 39.7948V17.1013C33.7119 17.0452 37.4007 16.6955 40.9007 16.0862C41.804 19.8454 42.3216 24.0523 42.3216 28.4483V28.4482Z" fill="currentColor"></path>
                                <path d="M56.9438 28.4473C56.9438 34.2011 55.2079 39.556 52.2329 44.0083C49.4678 42.8672 46.4161 41.9366 43.168 41.2433C44.0708 37.3722 44.5752 33.0466 44.5752 28.4472C44.5752 23.8477 44.0713 19.5152 43.168 15.6511C46.4159 14.965 49.475 14.0271 52.2329 12.886C55.2079 17.3381 56.9438 22.693 56.9438 28.447V28.4473Z" fill="currentColor"></path>
                                <path d="M50.8543 11.0044C48.3275 12.0195 45.5414 12.8453 42.5873 13.4756C41.0683 8.19782 38.7513 3.93475 35.9375 1.25366C41.9154 2.81464 47.1234 6.30047 50.8548 11.0045L50.8543 11.0044Z" fill="currentColor"></path>
                                <path d="M40.3128 13.9018C36.995 14.4686 33.5229 14.7909 29.96 14.8466V0.447998C34.2788 1.239 38.101 6.48205 40.3128 13.9016V13.9018Z" fill="currentColor"></path>
                                <path d="M27.7044 0.447998V14.8466C24.1415 14.7904 20.6694 14.4618 17.3516 13.9018C19.5634 6.48197 23.3856 1.23941 27.7044 0.448173V0.447998Z" fill="currentColor"></path>
                                <path d="M21.7283 1.24597C18.9076 3.92707 16.5975 8.18976 15.0785 13.4679C12.1245 12.8381 9.33837 12.012 6.81152 10.9967C10.5425 6.30003 15.7504 2.8142 21.7288 1.24585L21.7283 1.24597Z" fill="currentColor"></path>
                              </svg></div>
                          </a>
                          <a href="https://vimeo.com/user54605883" target="_blank" class="social-link w-inline-block">
                            <div class="w-embed"><svg width="19" height="19" viewbox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="100" d="M4.03406 0.568848C2.13673 0.568848 0.609375 2.0962 0.609375 3.99353V14.8973C0.609375 16.7946 2.13673 18.322 4.03406 18.322H14.9378C16.8351 18.322 18.3625 16.7946 18.3625 14.8973V3.99353C18.3625 2.0962 16.8351 0.568848 14.9378 0.568848H4.03406ZM13.2074 4.06566C13.2615 4.0654 13.3159 4.06611 13.3711 4.06788C14.6806 4.10584 15.2972 4.95 15.2213 6.60104C15.1644 7.83458 14.301 9.52398 12.631 11.6685C10.9041 13.9078 9.44269 15.0271 8.24711 15.0271C7.50698 15.0271 6.88043 14.3441 6.36804 12.9777L5.34335 9.22019C4.96381 7.85381 4.55598 7.17081 4.11949 7.17081C4.0246 7.17081 3.69242 7.36979 3.12309 7.76831L2.52503 6.99993C3.15128 6.44959 3.76851 5.89924 4.37579 5.34889C5.21079 4.62774 5.83678 4.24788 6.2543 4.20992C7.24112 4.11503 7.84848 4.78871 8.07621 6.23101C8.32293 7.78716 8.49394 8.7552 8.58884 9.13476C8.87349 10.4252 9.18649 11.0704 9.52808 11.0704C9.79378 11.0704 10.1923 10.6527 10.7236 9.81769C11.255 8.98269 11.5395 8.34738 11.5775 7.9109C11.6534 7.18975 11.3689 6.82906 10.7236 6.82906C10.42 6.82906 10.107 6.89539 9.7844 7.02823C10.3911 5.0611 11.5321 4.07372 13.2074 4.06568V4.06566Z" fill="currentColor"></path>
                              </svg></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="artist-info-wrap second">
                <div data-hover="false" data-delay="0" class="artist-dropdown w-dropdown">
                  <div class="artist-toggle second-toggle w-dropdown-toggle"><img src="images/Artist-Icon.svg" loading="lazy" alt="" class="artist-icon"/>
                    <div>
                      <div>Maurice Baltissen</div>
                      <p class="text-small text-netural op-50 f-normal no-margin align-right">Digital Artist</p>
                    </div>
                  </div>
                  <nav class="artist-list w-dropdown-list">
                    <div class="artist-list-item">
                      <div>Maurice Baltissen is a 3D specialist whose aim is to deliver perfect illustrations and animations with incredible attention to detail. He’s constantly striving to break new ground visually, and to reach new heights in terms of the quality of his work.</div>
                      <div class="artist-sep"></div>
                      <div class="social-wrap">
                        <div>
                          <a href="https://www.instagram.com/mitsi.studio/" target="_blank" class="social-link no-left-margin w-inline-block">
                            <div class="w-embed"><svg width="19" height="19" viewbox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.31426 6.4853C7.67095 6.4853 6.32989 7.81546 6.32989 9.44541C6.32989 11.0754 7.67095 12.4055 9.31426 12.4055C10.9576 12.4055 12.2986 11.0754 12.2986 9.44541C12.2986 7.81546 10.9576 6.4853 9.31426 6.4853ZM18.2652 9.44541C18.2652 8.21962 18.2763 7.00492 18.2069 5.78135C18.1375 4.36014 17.8107 3.09882 16.7629 2.05956C15.7129 1.01808 14.4435 0.696085 13.0106 0.627245C11.7748 0.558405 10.5501 0.569508 9.3165 0.569508C8.08066 0.569508 6.85602 0.558405 5.62242 0.627245C4.18956 0.696085 2.91789 1.0203 1.87012 2.05956C0.820099 3.10104 0.495467 4.36014 0.426063 5.78135C0.356659 7.00715 0.367853 8.22184 0.367853 9.44541C0.367853 10.669 0.356659 11.8859 0.426063 13.1095C0.495467 14.5307 0.822338 15.792 1.87012 16.8313C2.92013 17.8727 4.18956 18.1947 5.62242 18.2636C6.85826 18.3324 8.0829 18.3213 9.3165 18.3213C10.5523 18.3213 11.777 18.3324 13.0106 18.2636C14.4435 18.1947 15.7151 17.8705 16.7629 16.8313C17.8129 15.7898 18.1375 14.5307 18.2069 13.1095C18.2786 11.8859 18.2652 10.6712 18.2652 9.44541V9.44541ZM9.31426 13.9999C6.77318 13.9999 4.7224 11.9658 4.7224 9.44541C4.7224 6.92498 6.77318 4.89087 9.31426 4.89087C11.8554 4.89087 13.9061 6.92498 13.9061 9.44541C13.9061 11.9658 11.8554 13.9999 9.31426 13.9999ZM14.0942 5.76803C13.5009 5.76803 13.0218 5.29281 13.0218 4.70434C13.0218 4.11587 13.5009 3.64065 14.0942 3.64065C14.6875 3.64065 15.1666 4.11587 15.1666 4.70434C15.1668 4.84408 15.1392 4.98247 15.0853 5.1116C15.0315 5.24074 14.9525 5.35807 14.8529 5.45687C14.7533 5.55568 14.635 5.63402 14.5048 5.68742C14.3746 5.74081 14.2351 5.7682 14.0942 5.76803V5.76803Z" fill="currentColor"></path>
                              </svg></div>
                          </a>
                          <a href="https://mitsi.studio/portfolio/" target="_blank" class="social-link w-inline-block">
                            <div class="w-embed"><svg width="19" height="19" viewbox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.8548 45.8913C47.1239 50.5953 41.9159 54.0812 35.9375 55.6421C38.7582 52.961 41.0683 48.6983 42.5873 43.4202C45.5414 44.0574 48.3275 44.8766 50.8543 45.8914L50.8548 45.8913Z" fill="currentColor"></path>
                                <path d="M40.3128 42.9936C38.101 50.4134 34.2788 55.6559 29.96 56.4472V42.0486C33.5229 42.1047 36.995 42.4333 40.3128 42.9934V42.9936Z" fill="currentColor"></path>
                                <path d="M27.7044 42.0486V56.4472C23.3856 55.6561 19.5634 50.4131 17.3516 42.9936C20.6694 42.4335 24.1415 42.1049 27.7044 42.0488V42.0486Z" fill="currentColor"></path>
                                <path d="M21.7288 55.6501C15.7509 54.0822 10.543 50.5959 6.81152 45.8992C9.33837 44.8841 12.1245 44.0583 15.0785 43.428C16.5975 48.6989 18.9076 52.962 21.7283 55.6499L21.7288 55.6501Z" fill="currentColor"></path>
                                <path d="M13.0883 28.4479C13.0883 33.047 13.5922 37.3799 14.4956 41.244C11.2476 41.93 8.18851 42.868 5.43067 44.0091C2.45558 39.557 0.719727 34.2021 0.719727 28.448C0.719727 22.694 2.45558 17.3393 5.43067 12.887C8.19576 14.0281 11.2475 14.9587 14.4956 15.6521C13.5996 19.5158 13.0883 23.8487 13.0883 28.4481V28.4479Z" fill="currentColor"></path>
                                <path d="M27.7063 17.1002V39.7874C23.9544 39.8436 20.2655 40.1932 16.7656 40.8025C15.8628 37.0506 15.3447 32.8436 15.3447 28.4408C15.3447 24.0449 15.8628 19.8379 16.7656 16.0791C20.2655 16.6948 23.9471 17.0449 27.7063 17.1006V17.1002Z" fill="currentColor"></path>
                                <path d="M42.3216 28.4482C42.3216 32.8441 41.8035 37.0511 40.9007 40.8099C37.4076 40.201 33.7187 39.8509 29.96 39.7948V17.1013C33.7119 17.0452 37.4007 16.6955 40.9007 16.0862C41.804 19.8454 42.3216 24.0523 42.3216 28.4483V28.4482Z" fill="currentColor"></path>
                                <path d="M56.9438 28.4473C56.9438 34.2011 55.2079 39.556 52.2329 44.0083C49.4678 42.8672 46.4161 41.9366 43.168 41.2433C44.0708 37.3722 44.5752 33.0466 44.5752 28.4472C44.5752 23.8477 44.0713 19.5152 43.168 15.6511C46.4159 14.965 49.475 14.0271 52.2329 12.886C55.2079 17.3381 56.9438 22.693 56.9438 28.447V28.4473Z" fill="currentColor"></path>
                                <path d="M50.8543 11.0044C48.3275 12.0195 45.5414 12.8453 42.5873 13.4756C41.0683 8.19782 38.7513 3.93475 35.9375 1.25366C41.9154 2.81464 47.1234 6.30047 50.8548 11.0045L50.8543 11.0044Z" fill="currentColor"></path>
                                <path d="M40.3128 13.9018C36.995 14.4686 33.5229 14.7909 29.96 14.8466V0.447998C34.2788 1.239 38.101 6.48205 40.3128 13.9016V13.9018Z" fill="currentColor"></path>
                                <path d="M27.7044 0.447998V14.8466C24.1415 14.7904 20.6694 14.4618 17.3516 13.9018C19.5634 6.48197 23.3856 1.23941 27.7044 0.448173V0.447998Z" fill="currentColor"></path>
                                <path d="M21.7283 1.24597C18.9076 3.92707 16.5975 8.18976 15.0785 13.4679C12.1245 12.8381 9.33837 12.012 6.81152 10.9967C10.5425 6.30003 15.7504 2.8142 21.7288 1.24585L21.7283 1.24597Z" fill="currentColor"></path>
                              </svg></div>
                          </a>
                          <a href="https://vimeo.com/user54605883" target="_blank" class="social-link w-inline-block">
                            <div class="w-embed"><svg width="19" height="19" viewbox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="100" d="M4.03406 0.568848C2.13673 0.568848 0.609375 2.0962 0.609375 3.99353V14.8973C0.609375 16.7946 2.13673 18.322 4.03406 18.322H14.9378C16.8351 18.322 18.3625 16.7946 18.3625 14.8973V3.99353C18.3625 2.0962 16.8351 0.568848 14.9378 0.568848H4.03406ZM13.2074 4.06566C13.2615 4.0654 13.3159 4.06611 13.3711 4.06788C14.6806 4.10584 15.2972 4.95 15.2213 6.60104C15.1644 7.83458 14.301 9.52398 12.631 11.6685C10.9041 13.9078 9.44269 15.0271 8.24711 15.0271C7.50698 15.0271 6.88043 14.3441 6.36804 12.9777L5.34335 9.22019C4.96381 7.85381 4.55598 7.17081 4.11949 7.17081C4.0246 7.17081 3.69242 7.36979 3.12309 7.76831L2.52503 6.99993C3.15128 6.44959 3.76851 5.89924 4.37579 5.34889C5.21079 4.62774 5.83678 4.24788 6.2543 4.20992C7.24112 4.11503 7.84848 4.78871 8.07621 6.23101C8.32293 7.78716 8.49394 8.7552 8.58884 9.13476C8.87349 10.4252 9.18649 11.0704 9.52808 11.0704C9.79378 11.0704 10.1923 10.6527 10.7236 9.81769C11.255 8.98269 11.5395 8.34738 11.5775 7.9109C11.6534 7.18975 11.3689 6.82906 10.7236 6.82906C10.42 6.82906 10.107 6.89539 9.7844 7.02823C10.3911 5.0611 11.5321 4.07372 13.2074 4.06568V4.06566Z" fill="currentColor"></path>
                              </svg></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Roadmap" class="section wf-section">
        <div class="container grid">
          <div id="w-node-_2570ca37-f6df-5d14-e0ee-3dc50ea1aa4a-2c1b44f7" class="column flex-center">
            <h2>Our Roadmap</h2>
          </div>
          <div id="w-node-_9909bbc8-e0bc-495f-ad5d-94c3a0c7034c-2c1b44f7" class="column sticky-column"><img src="images/Sticky-Pic-2-min.png" loading="lazy" width="624" sizes="100vw" alt="Penguin Cop"/></div>
          <div id="w-node-ada5ae7c-8d8a-b994-1860-1d47fb648025-2c1b44f7" class="column roadmap-card">
            <h3>Phase 1 - Art</h3>
            <p class="text-small op-60 no-margin">In ultra-high 4k resolution, all 8888 Meta Penguin NFTs will be of the highest quality our award-winning artists are used to delivering. Our goal is to deliver the most bespoke and aesthetically pleasing design in the NFT world. With over 200+ different traits, each penguin is also guaranteed to be excitingly unique from all others.</p>
          </div>
          <div id="w-node-a73efd59-52f3-ed5e-c3d0-d68d519a0d41-2c1b44f7" class="column roadmap-card">
            <h3>Phase 2 - Merchandise</h3>
            <p class="text-small op-60 no-margin">Not a single corner was cut in the making of Meta Penguin Island, and we continue this through the extension of physical merchandise for our community. There will be multiple drops of high-quality penguin merch, plushies and clothing only accessible to holders who want to represent the project IRL with pride.</p>
          </div>
          <div id="w-node-_9a8ac7a7-437d-0ff0-8cc1-505ffdd7a415-2c1b44f7" class="column roadmap-card">
            <h3>Phase 3 - DAO</h3>
            <p class="text-small op-60 no-margin">Penguins love to live in a healthy community where everyone has a say. For that reason, they use a Decentralized Autonomous Organization (DAO) to make decisions crucial to the development of the island. Each penguin’s vote is equally important to the growth and evolution of the colony.</p>
          </div>
          <div id="w-node-a01fcdb6-99be-e191-0bbc-013c8ae95d8e-2c1b44f7" class="column roadmap-card">
            <h3>Phase 4 - Metaverse</h3>
            <p class="text-small op-60 no-margin">The penguins weren’t designed from just the shoulders and up, but are living, breathing 3D models. Each NFT holder will receive a digital 3D model of their penguin a few weeks after the launch. These models can be used to enter many of the existing NFT metaverses, or even be 3D printed. Furthermore, holders will enjoy full intellectual property rights to their penguins to use or remix them in any way they want.</p>
          </div>
        </div>
      </section>
      <section id="FaQ" class="section wf-section">
        <div class="container grid">
          <div id="w-node-a46551f3-68e3-9611-29f9-04c667046911-2c1b44f7" class="column flex-center">
            <h2 class="margin-bot-l">Frequently Asked Questions</h2>
          </div>
          <div data-hover="false" data-delay="0" id="w-node-_838ba3b0-d1a5-b036-ea24-687f985068dc-2c1b44f7" class="faq-dropdown w-dropdown">
            <div class="faq-toggle w-dropdown-toggle">
              <div>When is the official launch?</div>
              <div class="icon-wrapper">
                <div class="icon w-icon-dropdown-toggle"></div>
              </div>
            </div>
            <nav class="faq-list w-dropdown-list">
              <div class="faq-list-item">
                <div>The official date of our raffle is Feburary 12th at 3pm EST.</div>
              </div>
            </nav>
          </div>
          <div data-hover="false" data-delay="0" id="w-node-fd56e6d5-aede-0cef-228f-1657cbc1b1ba-2c1b44f7" class="faq-dropdown w-dropdown">
            <div class="faq-toggle w-dropdown-toggle">
              <div>What’s the total supply?</div>
              <div class="icon-wrapper">
                <div class="icon w-icon-dropdown-toggle"></div>
              </div>
            </div>
            <nav class="faq-list w-dropdown-list">
              <div class="faq-list-item">
                <div>There will be 8888 penguins in the collection, created randomly from over 200 traits.</div>
              </div>
            </nav>
          </div>
          <div data-hover="false" data-delay="0" id="w-node-a0d78198-5a50-1ccf-a77a-7ae42ce0ee1c-2c1b44f7" class="faq-dropdown w-dropdown">
            <div class="faq-toggle w-dropdown-toggle">
              <div>What blockchain is this hosted on?</div>
              <div class="icon-wrapper">
                <div class="icon w-icon-dropdown-toggle"></div>
              </div>
            </div>
            <nav class="faq-list w-dropdown-list">
              <div class="faq-list-item">
                <div>Meta Penguin Island lives on the Ethereum blockchain.</div>
              </div>
            </nav>
          </div>
          <div data-hover="false" data-delay="0" id="w-node-_72949584-4dcb-db16-d83a-0f38de223e99-2c1b44f7" class="faq-dropdown w-dropdown">
            <div class="faq-toggle w-dropdown-toggle">
              <div>What can I do with my penguin?</div>
              <div class="icon-wrapper">
                <div class="icon w-icon-dropdown-toggle"></div>
              </div>
            </div>
            <nav class="faq-list w-dropdown-list">
              <div class="faq-list-item">
                <div>Anything you want! We relinquish all rights of each individual penguin to the owner. This includes both the profile picture render and the 3D model to be used in the Metaverse.</div>
              </div>
            </nav>
          </div>
          <div data-hover="false" data-delay="0" id="w-node-c6f09173-be64-3b42-a119-97a814405032-2c1b44f7" class="faq-dropdown w-dropdown">
            <div class="faq-toggle w-dropdown-toggle">
              <div>What is the Metaverse?</div>
              <div class="icon-wrapper">
                <div class="icon w-icon-dropdown-toggle"></div>
              </div>
            </div>
            <nav class="faq-list w-dropdown-list">
              <div class="faq-list-item">
                <div>The word refers to a shared virtual reality where everything can be bought and sold just like the real world markets, using cryptocurrency. The penguins will soon enter the Metaverse and so your chance to be apart of this world is here.</div>
              </div>
            </nav>
          </div>
          <div data-hover="false" data-delay="0" id="w-node-_7a3a3274-ec35-7165-09e0-82a26a997574-2c1b44f7" class="faq-dropdown w-dropdown">
            <div class="faq-toggle w-dropdown-toggle">
              <div>How do I enter the whitelist?</div>
              <div class="icon-wrapper">
                <div class="icon w-icon-dropdown-toggle"></div>
              </div>
            </div>
            <nav class="faq-list w-dropdown-list">
              <div class="faq-list-item">
                <div>We value people who genuinely engage with our project and help it grow. Becoming one of these people could grant you a whitelist spot to mint our project. The first step is joining our Discord and finding the whitelist requirements channel.</div>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <section class="section wf-section">
        <div class="container">
          <div id="w-node-_098af737-07a4-4577-a3f8-c1a0d295cd02-2c1b44f7" class="column"><img src="images/beach-min.png" loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, 96vw" alt="" class="border-radius-20 full-width"/>
            <div class="prefooter-banner">
              <div>We can&#x27;t wait to meet you</div>
              <a href="https://discord.com/invite/metapenguinisland" target="_blank" class="button-white w-button">Join Us On Discord</a>
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer class="footer wf-section">
        <div class="container grid prefooter-container">
          <div id="w-node-c1e3be5f-1b76-0eef-2186-daf6ab25506a-ab255068" class="column">
            <div>
              <a href="#" class="footer-logo w-inline-block"><img src="images/Logo-min.png" loading="lazy" width="162" alt=""/></a>
              <p class="text-regular op-60 max-width-354">Meta Penguin Island is an exciting, interactive NFT experience built around a passionate community.</p>
            </div>
          </div>
          <div id="w-node-c1e3be5f-1b76-0eef-2186-daf6ab255070-ab255068" class="column footer-menu-column">
            <a href="#About" class="footer-link">About</a>
            <a href="#Artist" class="footer-link">Artists</a>
            <a href="#Roadmap" class="footer-link">Roadmap</a>
            <a href="#FaQ" class="footer-link">FAQ</a>
            <a href="erc721x.html" class="footer-link no-margin">ERC721X</a>
          </div>
          <div id="w-node-c1e3be5f-1b76-0eef-2186-daf6ab25507b-ab255068" class="column">
            <div class="big-label">Social media</div>
            <div class="social-wrap">
              <a href="https://discord.com/invite/metapenguinisland" target="_blank" class="social-footer-link middle-link w-inline-block">
                <div class="w-embed"><svg width="17" height="13" viewbox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9686 1.47162C12.924 0.992293 11.8037 0.639146 10.6325 0.436884C10.6111 0.43298 10.5898 0.442735 10.5788 0.462246C10.4348 0.718488 10.2752 1.05277 10.1634 1.31552C8.90367 1.12692 7.65036 1.12692 6.41642 1.31552C6.30465 1.04693 6.13927 0.718488 5.99455 0.462246C5.98357 0.443386 5.96226 0.433631 5.94093 0.436884C4.77031 0.6385 3.65009 0.991647 2.6048 1.47162C2.59575 1.47552 2.58799 1.48203 2.58284 1.49048C0.458013 4.66493 -0.124067 7.76136 0.161482 10.8194C0.162774 10.8343 0.171172 10.8487 0.182801 10.8578C1.5847 11.8873 2.94268 12.5123 4.27545 12.9266C4.29678 12.9331 4.31938 12.9253 4.33295 12.9077C4.64822 12.4772 4.92925 12.0232 5.1702 11.5458C5.18443 11.5179 5.17085 11.4847 5.14179 11.4737C4.69603 11.3046 4.27157 11.0984 3.86327 10.8643C3.83098 10.8454 3.82839 10.7992 3.8581 10.7771C3.94402 10.7127 4.02997 10.6457 4.11201 10.5781C4.12685 10.5657 4.14754 10.5631 4.16499 10.5709C6.84732 11.7956 9.75127 11.7956 12.4019 10.5709C12.4194 10.5625 12.4401 10.5651 12.4556 10.5774C12.5376 10.6451 12.6236 10.7127 12.7101 10.7771C12.7398 10.7992 12.7379 10.8454 12.7056 10.8643C12.2973 11.1029 11.8729 11.3046 11.4264 11.473C11.3974 11.4841 11.3845 11.5179 11.3987 11.5458C11.6448 12.0226 11.9258 12.4765 12.2353 12.9071C12.2482 12.9253 12.2715 12.9331 12.2928 12.9266C13.632 12.5123 14.99 11.8873 16.3919 10.8578C16.4042 10.8487 16.4119 10.835 16.4132 10.82C16.755 7.28461 15.8408 4.21358 13.9899 1.49113C13.9854 1.48203 13.9777 1.47552 13.9686 1.47162ZM5.57077 8.95737C4.7632 8.95737 4.09779 8.21596 4.09779 7.30543C4.09779 6.39491 4.7503 5.6535 5.57077 5.6535C6.39768 5.6535 7.05665 6.40142 7.04372 7.30543C7.04372 8.21596 6.39122 8.95737 5.57077 8.95737ZM11.0169 8.95737C10.2093 8.95737 9.5439 8.21596 9.5439 7.30543C9.5439 6.39491 10.1964 5.6535 11.0169 5.6535C11.8438 5.6535 12.5027 6.40142 12.4898 7.30543C12.4898 8.21596 11.8438 8.95737 11.0169 8.95737Z" fill="currentColor"></path>
                  </svg></div>
              </a>
              <a href="https://twitter.com/metapenguinsnft" target="_blank" class="social-footer-link w-inline-block">
                <div class="w-embed"><svg width="13" height="10" viewbox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.76685 9.95403C9.29588 9.95403 11.7738 6.20086 11.7738 2.94712C11.7738 2.84161 11.7714 2.73375 11.7667 2.62824C12.2487 2.27965 12.6647 1.84787 12.9951 1.35319C12.5462 1.55292 12.0696 1.68337 11.5815 1.74007C12.0954 1.43203 12.4802 0.948113 12.6645 0.378029C12.1811 0.664541 11.6524 0.86665 11.1011 0.975694C10.7296 0.581009 10.2385 0.31968 9.70362 0.232112C9.16875 0.144544 8.61993 0.235613 8.14201 0.49124C7.66409 0.746867 7.28369 1.15281 7.05962 1.64632C6.83556 2.13982 6.7803 2.69339 6.9024 3.22145C5.92349 3.17233 4.96582 2.91803 4.09149 2.47505C3.21715 2.03206 2.44567 1.41028 1.82706 0.650015C1.51265 1.1921 1.41644 1.83356 1.55798 2.44403C1.69953 3.0545 2.0682 3.58817 2.58909 3.93659C2.19804 3.92417 1.81556 3.81888 1.47324 3.62943V3.65991C1.47289 4.22879 1.66956 4.78023 2.02981 5.2205C2.39006 5.66077 2.89167 5.9627 3.44936 6.07495C3.08711 6.17407 2.70692 6.18851 2.3382 6.11716C2.49557 6.6064 2.80176 7.0343 3.21402 7.34114C3.62629 7.64799 4.12407 7.81847 4.63789 7.82879C3.76557 8.51401 2.68801 8.88567 1.57875 8.88391C1.38204 8.88361 1.18551 8.87155 0.990234 8.8478C2.11712 9.57076 3.42799 9.95473 4.76685 9.95403Z" fill="currentColor"></path>
                  </svg></div>
              </a>
              <a href="https://instagram.com/metapenguinsnft?utm_medium=copy_link" target="_blank" class="social-footer-link middle-link w-inline-block">
                <div class="w-embed"><svg width="15" height="15" viewbox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_61_187)">
                      <path d="M7.64063 1.94414C9.51094 1.94414 9.73242 1.95234 10.468 1.98516C11.1516 2.01523 11.5207 2.13008 11.7668 2.22578C12.0922 2.35156 12.3273 2.50469 12.5707 2.74805C12.8168 2.99414 12.9672 3.22656 13.093 3.55195C13.1887 3.79805 13.3035 4.16992 13.3336 4.85078C13.3664 5.58906 13.3746 5.81055 13.3746 7.67813C13.3746 9.54844 13.3664 9.76992 13.3336 10.5055C13.3035 11.1891 13.1887 11.5582 13.093 11.8043C12.9672 12.1297 12.8141 12.3648 12.5707 12.6082C12.3246 12.8543 12.0922 13.0047 11.7668 13.1305C11.5207 13.2262 11.1488 13.341 10.468 13.3711C9.72969 13.4039 9.5082 13.4121 7.64063 13.4121C5.77031 13.4121 5.54883 13.4039 4.81328 13.3711C4.12969 13.341 3.76055 13.2262 3.51445 13.1305C3.18906 13.0047 2.95391 12.8516 2.71055 12.6082C2.46445 12.3621 2.31406 12.1297 2.18828 11.8043C2.09258 11.5582 1.97773 11.1863 1.94766 10.5055C1.91484 9.76719 1.90664 9.5457 1.90664 7.67813C1.90664 5.80781 1.91484 5.58633 1.94766 4.85078C1.97773 4.16719 2.09258 3.79805 2.18828 3.55195C2.31406 3.22656 2.46719 2.99141 2.71055 2.74805C2.95664 2.50195 3.18906 2.35156 3.51445 2.22578C3.76055 2.13008 4.13242 2.01523 4.81328 1.98516C5.54883 1.95234 5.77031 1.94414 7.64063 1.94414ZM7.64063 0.683594C5.74024 0.683594 5.50234 0.691797 4.75586 0.724609C4.01211 0.757422 3.50078 0.877734 3.05781 1.05C2.5957 1.23047 2.20469 1.46836 1.81641 1.85938C1.42539 2.24766 1.1875 2.63867 1.00703 3.09805C0.834766 3.54375 0.714453 4.05234 0.681641 4.79609C0.648828 5.54531 0.640625 5.7832 0.640625 7.68359C0.640625 9.58398 0.648828 9.82188 0.681641 10.5684C0.714453 11.3121 0.834766 11.8234 1.00703 12.2664C1.1875 12.7285 1.42539 13.1195 1.81641 13.5078C2.20469 13.8961 2.5957 14.1367 3.05508 14.3145C3.50078 14.4867 4.00938 14.607 4.75313 14.6398C5.49961 14.6727 5.7375 14.6809 7.63789 14.6809C9.53828 14.6809 9.77617 14.6727 10.5227 14.6398C11.2664 14.607 11.7777 14.4867 12.2207 14.3145C12.6801 14.1367 13.0711 13.8961 13.4594 13.5078C13.8477 13.1195 14.0883 12.7285 14.266 12.2691C14.4383 11.8234 14.5586 11.3148 14.5914 10.5711C14.6242 9.82461 14.6324 9.58672 14.6324 7.68633C14.6324 5.78594 14.6242 5.54805 14.5914 4.80156C14.5586 4.05781 14.4383 3.54648 14.266 3.10352C14.0938 2.63867 13.8559 2.24766 13.4648 1.85938C13.0766 1.47109 12.6855 1.23047 12.2262 1.05273C11.7805 0.880469 11.2719 0.760156 10.5281 0.727344C9.77891 0.691797 9.54102 0.683594 7.64063 0.683594Z" fill="currentColor"></path>
                      <path d="M7.64062 4.08789C5.65547 4.08789 4.04492 5.69844 4.04492 7.68359C4.04492 9.66875 5.65547 11.2793 7.64062 11.2793C9.62578 11.2793 11.2363 9.66875 11.2363 7.68359C11.2363 5.69844 9.62578 4.08789 7.64062 4.08789ZM7.64062 10.016C6.35273 10.016 5.3082 8.97148 5.3082 7.68359C5.3082 6.3957 6.35273 5.35117 7.64062 5.35117C8.92852 5.35117 9.97305 6.3957 9.97305 7.68359C9.97305 8.97148 8.92852 10.016 7.64062 10.016Z" fill="currentColor"></path>
                      <path d="M12.218 3.9459C12.218 4.41074 11.8406 4.78535 11.3785 4.78535C10.9137 4.78535 10.5391 4.40801 10.5391 3.9459C10.5391 3.48106 10.9164 3.10645 11.3785 3.10645C11.8406 3.10645 12.218 3.48379 12.218 3.9459Z" fill="currentColor"></path>
                    </g>
                    <defs>
                      <clippath id="clip0_61_187">
                        <rect width="14" height="14" fill="currentColor" transform="translate(0.640625 0.683594)"></rect>
                      </clippath>
                    </defs>
                  </svg></div>
              </a>
            </div>
          </div>
          <div id="w-node-c1e3be5f-1b76-0eef-2186-daf6ab255085-ab255068">© 2022 Meta Penguin Island | All Rights Reserved | Created With Care 🐧🏝️</div>
        </div>
      </footer>
      <div class="video-wrapper">
        <div class="vimeo-video w-embed w-iframe"><iframe class="iframe" src="https://vimeo.com/showcase/9245210/embed" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe></div>
        <div id="btnPause" data-w-id="6adb6ea9-07d4-d51f-b62b-5bf790bb5171" class="close">
          <div class="w-embed"><svg width="20" height="20" viewbox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.751389" y1="54.8344" x2="54.8347" y2="0.751126" stroke="black" stroke-width="4"></line>
              <line x1="2.1656" y1="0.751389" x2="56.2489" y2="54.8347" stroke="black" stroke-width="4"></line>
            </svg></div>
        </div>
        <div class="modal-bg"></div>
      </div>
      <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61f32fad75d6ad298c1b44f6" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      <script src="js/webflow.js" type="text/javascript"></script>
        {/* <!-- [if lte IE 9]> */}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script> */}
        {/* <![endif] --> */}
        <script src="https://player.vimeo.com/api/player.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="js/scripts.js"></script>
        <script src="js/script.js" type="text/javascript"></script>
        
    </div>
  )
}

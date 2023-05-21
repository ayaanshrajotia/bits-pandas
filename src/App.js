import "./App.css";

import { BsDiscord } from "react-icons/bs";

function App() {
    return (
        <div className="page-bg">
            <div className="nav">
                <div className="container">
                    <div className="social-links">
                        <a
                            href="https://twitter.com/bitcoinpanada"
                            className="social-link w-inline-block"
                        >
                            <img
                                src="/static/5296514_bird_tweet_twitter_twitter-logo_icon.d522a1b0fef30cac176c9f85efb127f2.svg"
                                alt=""
                                className="social-icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <h1>BITS PANDAS</h1>
            <div className="mid-section">
                <div className="container">
                    <div className="vertical">
                        <img
                            src="/static/pxgif.c194c98d0e6bbc4c8d05.gif"
                            width="500"
                            alt="panda"
                            className="big-gif"
                        />
                        <div className="mint-card-connect">
                            <div className="mint-card-connect-inner">
                                <img
                                    src="/static/Emerald.935409a1595fa88d29d9.gif"
                                    alt=""
                                    className="mint-image-disconnected"
                                />
                                <h1 class="mint-text-disconnected">
                                    JOIN NOW!
                                </h1>
                                <a
                                    href="https://discord.gg/ZZgw5m5jrw"
                                    class="login-button"
                                >
                                    <BsDiscord />
                                </a>
                            </div>
                        </div>
                        <div class="legendary-container">
                            <h1 class="heading-2">Minting Soon</h1>
                        </div>
                        <div class="legendary-container">
                            <h1 class="heading-2">1/1 NFT</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-container">
                <div className="w-layout-grid grid">
                    <img src="/static/panda-1.gif" alt="" className="panda" />
                    <img src="/static/panda-2.gif" alt="" className="panda" />
                    <img src="/static/panda-3.gif" alt="" className="panda" />
                    <img src="/static/panda-4.gif" alt="" className="panda" />
                    <img src="/static/panda-5.gif" alt="" className="panda" />
                    <img src="/static/panda-6.gif" alt="" className="panda" />
                    <img src="/static/panda-7.gif" alt="" className="panda" />
                    <img src="/static/panda-8.gif" alt="" className="panda" />
                </div>
            </div>

            <div className="faq-section">
                <a className="button w-button">FAQ'S</a>
                <div className="container">
                    <div className="vertical">
                        <div className="faq-container">
                            <div className="faq-hold">
                                <h3 className="faq-h3">
                                    How many bit panda's are there?
                                </h3>
                                <div className="faq-ans">
                                    There will be a total of 111 Bit Panda's
                                    <br />
                                    <br /> 6 - 1/1
                                </div>
                            </div>

                            <div className="faq-hold">
                                <h3 className="faq-h3">
                                    HOW TO get on the Whitelist?
                                </h3>
                                <div className="faq-ans thin">
                                    Be active and participate in the giveaways.
                                </div>
                            </div>
                            <div className="faq-hold">
                                <h3 className="faq-h3">ROADMAP?</h3>
                                <div className="faq-ans thin">
                                    Here what are the benefits for holders
                                    <br />
                                    <br />
                                    - brc-20 token airdrop
                                    <br /> - bitswap
                                    <br /> -building peer to peer swap. Rev
                                    share To holders.
                                    <br /> - Alphacalls <br /> - raffle site
                                    <br />
                                    And many more
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

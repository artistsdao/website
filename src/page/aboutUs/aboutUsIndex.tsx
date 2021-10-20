import React from "react";
import HeaderWidget from "@/components/header/headerWidget";
import FooterWidget from "@/components/footer/footerWidget";
import TitleWidget from "@/components/title/titleWidget";
import "./aboutUsIndex.less";

function AboutUsIndex() {
  return (
    <div className="aboutUsIndex">
      <HeaderWidget />
      <TitleWidget label="基本说明" />
      <p>ArtistsDAO 是一个发布在以太坊网络上的 NFT 项目</p>
      <p>总量 36000 个，NFT 内容以 json 的形式发布在 IPFS上，链接（ABI）：</p>
      <p>Twitter 链接：</p>
      <p>Discord 链接：</p>
      <p>Name：Artists DAO</p>
      <p>Symbol：ArtistsDAO</p>
      <p>Description:</p>
      <p>
        <br />ArtistDAO is an NFT collectible, decentralized design(Dede) and a strategy game.
            The NFT collection includes 36000 obtainable NFTs and 36000 Origin NFTs. The project's release is broken down into several stages.  
            The sale phase is three weeks. Every transparent png layer you acquire gives you the opportunity to claim a NFT. 
            In a way, each transparent png layer is your ticket to a artist.<br />Additionally, when the sale ends all remaining  will be distributed to Page holders proportionally. 
            In a way, each page represents your part of the remaining token pool. During the sale period, you will be able to collect layers for a set price of 0.22 $ETH each. 
            When you get multiple layer at once, you'll also get a percentage of extra layers. The sooner you collect, the more extra layer you'll get. <br />
            The transparent png layer you acquire will be locked to your wallet until the sale window closes.
      </p>
      <div className="h100"></div>
      <TitleWidget label="Mint说明" />
      <p>
         单价为 0.22ETH，单个用户最多可以 Mint 20 个，超过 20
        则不能点击加号；小于0不能点减号
      </p>
      <p>
        Mint 按钮如果用户第一次进入，提示为 Connect to
        wallet，如果已经链接则显示 mint
      </p>
      <p>
        每 Mint 一个，Remaining
        就会减少一个，当减少至0时，按钮不可点击，文字显示 Sold out
      </p>
      <div className="h100"></div>
      <FooterWidget />
    </div>
  );
}
export default AboutUsIndex;

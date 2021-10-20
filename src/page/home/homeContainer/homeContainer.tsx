import React, { useState, useEffect } from "react";
import BtnWidget from "@/components/form/btnWidget";
import {
  getAccounts,
  name,
  symbol,
  // getERC721Balance,
  // getERC721TokenIdByIndex,
  // getERC721TokenURI,
  maxDBRPurchase as getMaxDBRPurchase,
  totalSupply,
  saleIsActive,
  maxDBRs as getMaxDBRs,
  getETHBalance,
  DBRPrice,
  mint,
} from "@/services/web3";
import Toast from "@/components/toast";

import "./homeContainer.less";
function HomeContainer() {
  const [mintValue, setMintValue] = useState(1);
  const [accounts, setAccounts] = useState<string[] | null>(null);
  const [account, setAccount] = useState("");
  const [ETHBalance, setETHBalance] = useState("");
  const [maxDBRPurchase, setMaxDBRPurchase] = useState(20);
  const [maxDBRs, setMaxDBRs] = useState(36000);
  const [ERC721DBRTotalSupply, setERC721DBRTotalSupply] = useState(36000);
  const [ERC721SaleIsActive, setERC721SaleIsActive] = useState(true);

  const [ERC721Name, setERC721Name] = useState("");
  const [ERC721Symbol, setERC721Symbol] = useState("");
  const [ERC721Price, setERC721Price] = useState("50000000000000000");

  // const [ERC721Balance, setERC721Balance] = useState<String>("");
  // const [ERC721Tokens, setERC721Tokens] = useState<{
  //   [token: string]: {
  //     tokenURI: string;
  //     shares?: string | undefined;
  //     balance?: string | undefined;
  //     price?: string | undefined;
  //   };
  // }>({});

  useEffect(() => {
    (async () => {
      setAccounts(await getAccounts());
      setMaxDBRPurchase(Number(await getMaxDBRPurchase()));
      setMaxDBRs(Number(await getMaxDBRs()));
      setERC721DBRTotalSupply(Number(await totalSupply()));
      setERC721SaleIsActive(await saleIsActive());

      setERC721Name(await name());
      setERC721Symbol(await symbol());
      setERC721Price(await DBRPrice());
    })();
  }, []);
  useEffect(() => {
    if (accounts === null) return;
    if (accounts.length === 0) return;
    console.log(accounts);
    setAccount(accounts[0]);
    (async () => {
      setETHBalance(await getETHBalance(accounts[0]));
      // const balance = await getERC721Balance({ contract, account });

      // setERC721Balance(balance);
      // if (Number(balance) > 0) {
      //   const _ERC721Tokens: {
      //     [token: string]: {
      //       tokenURI: string;
      //       shares?: string;
      //       balance?: string;
      //       price?: string;
      //     };
      //   } = {};
      //   console.log("22222aaa", account, contract);
      //   if (ERC721Balance && Number(ERC721Balance) > 0) {
      //     console.log("eeee", account, contract);
      //     for (let i = 0; i < Number(ERC721Balance); i++) {
      //       console.log("22222", account, contract, i);
      //       const tokenId = await getERC721TokenIdByIndex({
      //         account,
      //         contract,
      //         index: i,
      //       });
      //       const tokenURI = await getERC721TokenURI(account, tokenId);
      //       _ERC721Tokens[tokenId] = {
      //         tokenURI,
      //       };
      //     }
      //     setERC721Tokens(_ERC721Tokens);
      //   }
      // }
    })();
  }, [accounts]);
  return (
    <div className="homeContainer">
      <h2>{ERC721Name} ArtistsDAO</h2>
      <div className="partone">
        <div className="fl">
          <p>
             ArtistDAO is an NFT collectible, decentralized design(Dede) and a strategy game. 
             The NFT collection includes 36000 obtainable NFTs and 36000 Origin NFTs. 
             The project's release is broken down into several stages.  The sale phase is three weeks. 
             Every transparent png layer you acquire gives you the opportunity to claim a NFT. 
              (
            <a href="./" target="_blank">
              deployed here
            </a>
            ) In a way, each transparent png layer is your ticket to a artist.
          </p>
          <p>
             Additionally, when the sale ends all remaining  will be distributed to Page holders proportionally. 
             In a way, each page represents your part of the remaining token pool. 
             During the sale period, you will be able to collect layers for a set price of 0.22 $ETH each. 
             When you get multiple layer at once, you'll also get a percentage of extra layers. 
             The sooner you collect, the more extra layer you'll get.
          </p>
          <p>
             The project is divided into the following stages:
          </p>
          <p>
             1. New York stage, the 0th layer stage, also called the sales stage.
          </p>
          <p>
             2. London stage, the third layer receiving or airdrop stage, every transparent png who buys a ticket can get a complete nft based on cryptoculture for free. 
             It is a complete pixel art image. It is a 36,000 art image composed of 4,528 of the 22,023 encrypted project logos collected as the body, combined with 96 other features, a total of 4,624 unique features. 
             The artistic value can refer to commemorative coins or other crypted image, ie. cryptopunk, etc.
          </p>
          <p>
            <br />3. Shanghai stage, the fourth layer, is also the stage where each artist participates in the QRcode design.<br />
             The artist can provide a URL and name and consume a layer, and the project team can help generate your own QR code. 
             The URL can be any address you want to import traffic, such as your community URL, personal social URL, company URL, etc. 
             The name can be any name you like, such as your personal name, the name of the person you want to give away, the name of the community, the name of the company, etc.<br />
             The painter can also completely design the screen elements of the QR code, which also requires the consumption of a layer. This step requires a little art knowledge. 
             You can completely change the color of the pattern and border in the middle area of ​​the two-dimensional code positioning, but there must be a frame, because the two-dimensional code relies on this for positioning. 
             The modification of the pattern also requires consumption of your layers. The specific operation can wait until the community discusses and decides.<br /> 
             If you don’t have time to design a QR code, don’t worry. The project team has generated 11,000 QR codes, all of which are finished nft with crypted currency names and community URLs. You can exchange them for transparent png layers.
          </p>
          <p>
             4. Berlin stage, this stage is the first layer, which is also the stage of generative art. 
             The painter can provide painting materials or semi-finished art, which are generated by the project team using a variety of artificial intelligence one-to-one processing. 
             The artistic value can refer to artblocks.
          </p>
          <p>
             5. Athens stage, multiple nft layer combination stage, the painter can freely combine the nft of each layer to form a new nft, or can choose to keep the original nft. 
             The combination process also needs to consume a transparent png layer.
          </p>
          <p>
             6. Paris stage, if the rules of the game stage are the most ideal, the community will discuss and decide. 
             The project party has a bonus pool to drive the game.
          </p>
          <p>
             7. Geneva stage, the project party can set up a new project to bring sustainable income and value precipitation to the community.
          </p>
        </div>
        <div className="fr">
          <ul>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
              <li key={v}>
                <img
                  src={require(`../assets/${v}.${v === 4 ? "gif" : "png"}`)}
                  alt={`NFT-${ERC721Symbol}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="parttwo">
        <div className="fl">
          <p>
            <strong>FAIR DISTRIBUTION</strong>
          </p>
          <p>
            Buying a {ERC721Symbol} costs 0.22ETH. There are no price tiers;{" "}
            {ERC721Name}
            membership costs the same for everyone.
          </p>
        </div>
        <div className="fr">
          <div className="mintNum">
            <div
              className="sub"
              onClick={() => {
                console.log(2222);
                if (mintValue > 0) {
                  setMintValue(Math.floor(mintValue - 1));
                }
              }}
            ></div>
            <h3>{mintValue}</h3>
            <div
              className="add"
              onClick={() => {
                if (account) {
                  if (
                    // (ERC721Balance &&
                    //   Number(ERC721Balance) >= maxDBRPurchase) ||
                    maxDBRPurchase < mintValue
                  ) {
                    Toast.show(
                      `每个账户最多购买${maxDBRPurchase} ${ERC721Symbol}`
                    );
                    return false;
                  }
                  if (
                    Number(ETHBalance) * Math.pow(10, 18) <
                    Number(ERC721Price) * mintValue
                  ) {
                    Toast.show(
                      `余额不足, 当前余额${ETHBalance}， NFT价格：${
                        Number(ERC721Price) / Math.pow(10, 18)
                      }`
                    );
                  } else {
                    setMintValue(Math.floor(mintValue + 1));
                  }
                } else {
                  Toast.show("链接钱包失败");
                }
              }}
            ></div>
          </div>
          <BtnWidget
            label="mint"
            onClick={() => {
              if (!ERC721SaleIsActive) {
                Toast.show("合约还未开启，敬请期待！");
                return false;
              }
              console.log(mintValue);
              console.log(ERC721Price);
              mint({
                numberOfTokens: `${mintValue}`,
                price: `${ERC721Price}`,
                account: account,
              });
            }}
          />
          <div className="remaining">
            <p>
              remaining
              <i>
                {maxDBRs - ERC721DBRTotalSupply}/{maxDBRs}
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeContainer;
